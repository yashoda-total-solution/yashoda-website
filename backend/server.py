"""
Backend server for Yashoda Total Solution Website
+ Email sending via Resend (background, no delay)
+ Auto-translation to Hindi, Marathi & English via deep-translator (free, no API key)
+ PostgreSQL via Supabase (persistent — data survives redeployments forever)
"""

from fastapi import FastAPI, HTTPException, Depends, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel, Field
import psycopg2
import psycopg2.extras
import secrets
import os
import requests
from dotenv import load_dotenv
from deep_translator import GoogleTranslator

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
DATABASE_URL   = os.getenv("DATABASE_URL")
ADMIN_USERNAME = os.getenv("ADMIN_USERNAME")
ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD")
RESEND_API_KEY = os.getenv("RESEND_API_KEY")

# ── AUTH STORAGE ─────────────────────────────────────────────
active_tokens: dict = {}
security = HTTPBearer(auto_error=False)

# ── DATABASE ─────────────────────────────────────────────────

def get_db():
    conn = psycopg2.connect(DATABASE_URL, cursor_factory=psycopg2.extras.RealDictCursor)
    return conn


def init_db():
    conn = get_db()
    cur = conn.cursor()

    cur.execute("""
        CREATE TABLE IF NOT EXISTS reviews (
            id                SERIAL PRIMARY KEY,
            customer_name     TEXT,
            customer_name_hi  TEXT,
            customer_name_mr  TEXT,
            customer_name_en  TEXT,
            city              TEXT,
            city_hi           TEXT,
            city_mr           TEXT,
            city_en           TEXT,
            rating            INTEGER,
            review_message    TEXT,
            review_message_hi TEXT,
            review_message_mr TEXT,
            review_message_en TEXT,
            approved          INTEGER DEFAULT 0,
            created_at        TIMESTAMP DEFAULT NOW()
        )
    """)

    cur.execute("""
        CREATE TABLE IF NOT EXISTS contacts (
            id         SERIAL PRIMARY KEY,
            name       TEXT,
            phone      TEXT,
            location   TEXT,
            service    TEXT,
            message    TEXT,
            created_at TIMESTAMP DEFAULT NOW()
        )
    """)

    conn.commit()
    cur.close()
    conn.close()
    print("✅ Database initialized (Supabase PostgreSQL)")


init_db()

# ── TRANSLATION (FREE — deep-translator / Google) ────────────

def translate_text(text: str, target_lang: str) -> str:
    """Translate text to target_lang. Returns original on failure."""
    try:
        return GoogleTranslator(source='auto', target=target_lang).translate(text)
    except Exception as e:
        print(f"❌ Translation error ({target_lang}):", e)
        return text  # graceful fallback


def translate_and_save(review_id: int, customer_name: str, review_message: str, city: str):
    """Background task: translate review to Hindi, Marathi & English, then persist."""
    
    translations = {
        "customer_name_hi":  translate_text(customer_name,  'hi'),
        "customer_name_mr":  translate_text(customer_name,  'mr'),
        "customer_name_en":  translate_text(customer_name,  'en'),
        "review_message_hi": translate_text(review_message, 'hi'),
        "review_message_mr": translate_text(review_message, 'mr'),
        "review_message_en": translate_text(review_message, 'en'),
        "city_hi":           translate_text(city,           'hi'),
        "city_mr":           translate_text(city,           'mr'),
        "city_en":           translate_text(city,           'en'),
    }

    conn = get_db()
    cur = conn.cursor()
    cur.execute("""
        UPDATE reviews SET
            customer_name_hi  = %s,
            customer_name_mr  = %s,
            customer_name_en  = %s,
            review_message_hi = %s,
            review_message_mr = %s,
            review_message_en = %s,
            city_hi           = %s,
            city_mr           = %s,
            city_en           = %s
        WHERE id = %s
    """, (
        translations["customer_name_hi"],
        translations["customer_name_mr"],
        translations["customer_name_en"],
        translations["review_message_hi"],
        translations["review_message_mr"],
        translations["review_message_en"],
        translations["city_hi"],
        translations["city_mr"],
        translations["city_en"],
        review_id
    ))
    conn.commit()
    cur.close()
    conn.close()
    print(f"✅ All translations saved for review id={review_id}")


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
    cur = conn.cursor()
    cur.execute(
        """INSERT INTO reviews (customer_name, city, rating, review_message, approved)
           VALUES (%s, %s, %s, %s, 0) RETURNING *""",
        (review.customer_name, review.city, review.rating, review.review_message)
    )
    row = dict(cur.fetchone())
    conn.commit()
    cur.close()
    conn.close()

    background_tasks.add_task(
        translate_and_save,
        row["id"], review.customer_name, review.review_message, review.city
    )
    return row


@app.get("/api/reviews")
def get_approved_reviews():
    conn = get_db()
    cur = conn.cursor()
    cur.execute(
        "SELECT * FROM reviews WHERE approved = 1 ORDER BY created_at DESC"
    )
    rows = [dict(r) for r in cur.fetchall()]
    cur.close()
    conn.close()
    return rows


# ── CONTACT API ──────────────────────────────────────────────

@app.post("/api/contacts")
def submit_contact(contact: ContactCreate, background_tasks: BackgroundTasks):
    conn = get_db()
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO contacts (name, phone, location, service, message) VALUES (%s, %s, %s, %s, %s)",
        (contact.name, contact.phone, contact.location, contact.service, contact.message)
    )
    conn.commit()
    cur.close()
    conn.close()

    email_body = f"""
New Customer Request Submission:

Name: {contact.name}
Phone: {contact.phone}
Location: {contact.location}
Service: {contact.service}
Message: {contact.message}
"""
    background_tasks.add_task(send_email, "New Customer Request Submission", email_body)
    return {"message": "Submitted successfully"}


# ── PARTNER API ──────────────────────────────────────────────

@app.post("/api/partner")
def submit_partner(data: dict, background_tasks: BackgroundTasks):
    email_body = f"""
New Partnership Request:

Name: {data.get('name')}
Mobile: {data.get('mobile')}
Location: {data.get('location')}
Email: {data.get('email')}
Partner Type: {data.get('partnerType')}
Additional Info: {data.get('additionalInfo')}
    """
    background_tasks.add_task(send_email, "New Partnership Request", email_body)
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
    cur = conn.cursor()
    cur.execute("SELECT * FROM reviews ORDER BY created_at DESC")
    rows = [dict(r) for r in cur.fetchall()]
    cur.close()
    conn.close()
    return rows


@app.patch("/api/admin/reviews/{review_id}/approve")
def approve_review(review_id: int, token: str = Depends(require_admin)):
    conn = get_db()
    cur = conn.cursor()
    cur.execute("UPDATE reviews SET approved = 1 WHERE id = %s", (review_id,))
    conn.commit()
    cur.close()
    conn.close()
    return {"message": "Approved"}


@app.delete("/api/admin/reviews/{review_id}")
def delete_review(review_id: int, token: str = Depends(require_admin)):
    conn = get_db()
    cur = conn.cursor()
    cur.execute("DELETE FROM reviews WHERE id = %s", (review_id,))
    conn.commit()
    cur.close()
    conn.close()
    return {"message": "Deleted"}


# ── RUN ──────────────────────────────────────────────────────
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001, reload=True)