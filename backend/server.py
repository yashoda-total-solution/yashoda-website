"""
Backend server for Yashoda Total Solution Website
+ Email sending via Resend (background, no delay)
+ Auto-translation to Hindi & Marathi via deep-translator (free, no API key)
"""

from fastapi import FastAPI, HTTPException, Depends, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel, Field
from datetime import datetime
import sqlite3
import secrets
import os
import requests
from dotenv import load_dotenv
from deep_translator import GoogleTranslator   # ← NEW

load_dotenv()

app = FastAPI()

# ── CORS ─────────────────────────────────────────────────────
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── ENV CONFIG ───────────────────────────────────────────────
DB_PATH        = os.getenv("DB_PATH", "app.db")
ADMIN_USERNAME = os.getenv("ADMIN_USERNAME")
ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD")
RESEND_API_KEY = os.getenv("RESEND_API_KEY")

# ── AUTH STORAGE ─────────────────────────────────────────────
active_tokens: dict = {}
security = HTTPBearer(auto_error=False)

# ── DATABASE ─────────────────────────────────────────────────

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_db()

    # Create table with all columns (new installs)
    conn.execute("""
        CREATE TABLE IF NOT EXISTS reviews (
            id               INTEGER PRIMARY KEY AUTOINCREMENT,
            customer_name    TEXT,
            customer_name_hi TEXT,
            customer_name_mr TEXT,
            city             TEXT,
            rating           INTEGER,
            review_message    TEXT,
            review_message_hi TEXT,
            review_message_mr TEXT,
            approved         INTEGER DEFAULT 0,
            created_at       TEXT DEFAULT (datetime('now'))
        )
    """)

    # Safe migration for existing installs — adds columns if missing
    new_cols = [
        "customer_name_hi TEXT",
        "customer_name_mr TEXT",
        "review_message_hi TEXT",
        "review_message_mr TEXT",
    ]
    for col_def in new_cols:
        col_name = col_def.split()[0]
        try:
            conn.execute(f"ALTER TABLE reviews ADD COLUMN {col_def}")
            print(f"✅ Migration: added column '{col_name}'")
        except Exception:
            pass  # Column already exists — safe to ignore

    conn.execute("""
        CREATE TABLE IF NOT EXISTS contacts (
            id          INTEGER PRIMARY KEY AUTOINCREMENT,
            name        TEXT,
            phone       TEXT,
            location    TEXT,
            service     TEXT,
            message     TEXT,
            created_at  TEXT DEFAULT (datetime('now'))
        )
    """)
    conn.commit()
    conn.close()


init_db()

# ── TRANSLATION (FREE — deep-translator / Google) ────────────

def translate_text(text: str, target_lang: str) -> str:
    """Translate text to target_lang ('hi' or 'mr'). Returns original on failure."""
    try:
        return GoogleTranslator(source='auto', target=target_lang).translate(text)
    except Exception as e:
        print(f"❌ Translation error ({target_lang}):", e)
        return text   # graceful fallback — show original if translation fails


def translate_and_save(review_id: int, customer_name: str, review_message: str):
    """Background task: translate review to Hindi + Marathi and persist."""
    name_hi  = translate_text(customer_name,  'hi')
    name_mr  = translate_text(customer_name,  'mr')
    msg_hi   = translate_text(review_message, 'hi')
    msg_mr   = translate_text(review_message, 'mr')

    conn = get_db()
    conn.execute("""
        UPDATE reviews
        SET customer_name_hi  = ?,
            customer_name_mr  = ?,
            review_message_hi = ?,
            review_message_mr = ?
        WHERE id = ?
    """, (name_hi, name_mr, msg_hi, msg_mr, review_id))
    conn.commit()
    conn.close()
    print(f"✅ Translations saved for review id={review_id}")


# ── EMAIL FUNCTION (RESEND) ──────────────────────────────────

def send_email(subject, body):
    try:
        response = requests.post(
            "https://api.resend.com/emails",
            headers={
                "Authorization": f"Bearer {RESEND_API_KEY}",
                "Content-Type": "application/json",
            },
            json={
                "from": "Yashoda <info@yashodatotalsolution.in>",
                "to": ["info@yashodatotalsolution.in"],
                "subject": subject,
                "text": body,
            },
        )
        print("✅ Email Status:", response.status_code)
    except Exception as e:
        print("❌ Email Error:", e)


# ── AUTH ─────────────────────────────────────────────────────

def require_admin(credentials: HTTPAuthorizationCredentials = Depends(security)):
    if not credentials or credentials.credentials not in active_tokens:
        raise HTTPException(status_code=401, detail="Unauthorized")
    return credentials.credentials


# ── MODELS ───────────────────────────────────────────────────

class ReviewCreate(BaseModel):
    customer_name:  str
    city:           str
    rating:         int = Field(..., ge=1, le=5)
    review_message: str


class ContactCreate(BaseModel):
    name:     str
    phone:    str
    location: str
    service:  str
    message:  str


class AdminLogin(BaseModel):
    username: str
    password: str


# ── PUBLIC ROUTES ────────────────────────────────────────────

@app.get("/api/")
def root():
    return {"message": "Hello World"}


@app.post("/api/reviews")
def submit_review(review: ReviewCreate, background_tasks: BackgroundTasks):
    conn = get_db()
    cur = conn.execute(
        "INSERT INTO reviews (customer_name, city, rating, review_message, approved) VALUES (?, ?, ?, ?, 0)",
        (review.customer_name, review.city, review.rating, review.review_message)
    )
    review_id = cur.lastrowid
    conn.commit()
    row = conn.execute("SELECT * FROM reviews WHERE id = ?", (review_id,)).fetchone()
    conn.close()

    # ← Translate to Hindi + Marathi in background (user gets instant response)
    background_tasks.add_task(
        translate_and_save,
        review_id,
        review.customer_name,
        review.review_message,
    )

    return dict(row)


@app.get("/api/reviews")
def get_approved_reviews():
    conn = get_db()
    rows = conn.execute(
        "SELECT * FROM reviews WHERE approved = 1 ORDER BY created_at DESC"
    ).fetchall()
    conn.close()
    return [dict(r) for r in rows]


# ── CONTACT API ──────────────────────────────────────────────

@app.post("/api/contacts")
def submit_contact(contact: ContactCreate, background_tasks: BackgroundTasks):
    conn = get_db()
    conn.execute(
        "INSERT INTO contacts (name, phone, location, service, message) VALUES (?, ?, ?, ?, ?)",
        (contact.name, contact.phone, contact.location, contact.service, contact.message)
    )
    conn.commit()
    conn.close()

    email_body = f"""
New Contact Form Submission:

Name: {contact.name}
Phone: {contact.phone}
Location: {contact.location}
Service: {contact.service}
Message: {contact.message}
"""
    background_tasks.add_task(send_email, "New Contact Form Submission", email_body)
    return {"message": "Submitted successfully"}


# ── PARTNER API ──────────────────────────────────────────────

@app.post("/api/partner")
def submit_partner(data: dict, background_tasks: BackgroundTasks):
    email_body = f"""
New Partner Request:

Name: {data.get('name')}
Mobile: {data.get('mobile')}
Location: {data.get('location')}
Email: {data.get('email')}
Partner Type: {data.get('partnerType')}
Additional Info: {data.get('additionalInfo')}
    """
    background_tasks.add_task(send_email, "New Partner Request", email_body)
    return {"message": "Partner request submitted"}


# ── ADMIN ROUTES ─────────────────────────────────────────────

@app.post("/api/admin/login")
def admin_login(credentials: AdminLogin):
    if credentials.username != ADMIN_USERNAME or credentials.password != ADMIN_PASSWORD:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = secrets.token_hex(32)
    active_tokens[token] = credentials.username
    return {"token": token}


@app.get("/api/admin/reviews")
def admin_reviews(token: str = Depends(require_admin)):
    conn = get_db()
    rows = conn.execute("SELECT * FROM reviews").fetchall()
    conn.close()
    return [dict(r) for r in rows]


@app.patch("/api/admin/reviews/{review_id}/approve")
def approve_review(review_id: int, token: str = Depends(require_admin)):
    conn = get_db()
    conn.execute("UPDATE reviews SET approved = 1 WHERE id = ?", (review_id,))
    conn.commit()
    conn.close()
    return {"message": "Approved"}


@app.delete("/api/admin/reviews/{review_id}")
def delete_review(review_id: int, token: str = Depends(require_admin)):
    conn = get_db()
    conn.execute("DELETE FROM reviews WHERE id = ?", (review_id,))
    conn.commit()
    conn.close()
    return {"message": "Deleted"}


# ── RUN ──────────────────────────────────────────────────────
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001, reload=True)