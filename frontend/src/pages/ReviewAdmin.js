import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star, CheckCircle, Trash2, LogOut, Clock,
  ThumbsUp, AlertCircle, RefreshCw,
  Shield, Search, BarChart2, Eye
} from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || '';

// ─── fetch helper ─────────────────────────────────────────────────────────────
const apiFetch = async (path, options = {}, token = null) => {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(`${BACKEND_URL}${path}`, { ...options, headers });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: 'Request failed' }));
    throw new Error(err.detail || 'Request failed');
  }
  return res.json();
};

// ─── Stars ────────────────────────────────────────────────────────────────────
const Stars = ({ rating }) => (
  <div className="flex gap-0.5">
    {[1,2,3,4,5].map(s => (
      <Star key={s} className={`h-4 w-4 ${s <= rating ? 'text-amber-400 fill-current' : 'text-gray-200 fill-current'}`} />
    ))}
  </div>
);

// ─── Toast ────────────────────────────────────────────────────────────────────
const Toast = ({ toast }) => (
  <AnimatePresence>
    {toast && (
      <motion.div
        initial={{ opacity: 0, y: -16, x: 16 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        exit={{ opacity: 0, y: -16, x: 16 }}
        className={`fixed top-5 right-5 z-50 flex items-center gap-2.5 px-5 py-3.5 rounded-2xl shadow-2xl text-white text-sm font-semibold ${
          toast.type === 'error' ? 'bg-red-500' : 'bg-[#0F7A4A]'
        }`}
      >
        {toast.type === 'error'
          ? <AlertCircle className="h-4 w-4 shrink-0" />
          : <CheckCircle className="h-4 w-4 shrink-0" />}
        {toast.msg}
      </motion.div>
    )}
  </AnimatePresence>
);

// ─── Stat Pill ────────────────────────────────────────────────────────────────
const StatPill = ({ icon: Icon, label, value, accent, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-white rounded-2xl p-5 shadow-[0_4px_18px_rgba(0,0,0,0.06)] flex items-center gap-4"
  >
    <div className={`w-11 h-11 ${accent} rounded-xl flex items-center justify-center shrink-0`}>
      <Icon className="h-5 w-5 text-white" />
    </div>
    <div>
      <p className="text-xl font-bold text-gray-800 leading-none">{value}</p>
      <p className="text-xs text-gray-500 mt-0.5">{label}</p>
    </div>
  </motion.div>
);

// ─── Review Card ──────────────────────────────────────────────────────────────
const ReviewCard = ({ review, onApprove, onDelete, busy }) => {
  const isApproved = review.approved;
  const isBusy = busy === review.id;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.28 }}
      className="bg-white rounded-2xl shadow-[0_4px_18px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_8px_28px_rgba(15,122,74,0.1)] transition-shadow duration-300 overflow-hidden"
    >
      {/* Status accent bar */}
      <div className={`h-1 w-full ${isApproved
        ? 'bg-gradient-to-r from-[#0F7A4A] to-[#159F61]'
        : 'bg-gradient-to-r from-amber-400 to-orange-400'}`}
      />

      <div className="p-6">
        {/* Top row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0F7A4A] to-[#159F61] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
              {review.customer_name.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-sm leading-tight">{review.customer_name}</p>
              <p className="text-xs text-gray-400 mt-0.5">{review.city}</p>
            </div>
          </div>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shrink-0 ${
            isApproved
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              : 'bg-amber-50 text-amber-700 border border-amber-200'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${isApproved ? 'bg-emerald-400' : 'bg-amber-400'}`} />
            {isApproved ? 'Published' : 'Pending'}
          </span>
        </div>

        <Stars rating={review.rating} />

        <p className="text-sm text-gray-600 leading-relaxed mt-3 mb-4 line-clamp-3 italic">
          &ldquo;{review.review_message}&rdquo;
        </p>

        <p className="text-xs text-gray-400 flex items-center gap-1.5 mb-5">
          <Clock className="h-3.5 w-3.5" />
          {new Date(review.created_at).toLocaleDateString('en-IN', {
            day: 'numeric', month: 'short', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
          })}
        </p>

        {/* Actions */}
        <div className="flex gap-2 flex-wrap">
          {!isApproved && (
            <motion.button
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              onClick={() => onApprove(review.id)}
              disabled={isBusy}
              className="flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 px-4 py-2 rounded-xl text-xs font-semibold transition-colors disabled:opacity-50"
            >
              <CheckCircle className="h-3.5 w-3.5" />
              Approve &amp; Publish
            </motion.button>
          )}
          {isApproved && (
            <span className="flex items-center gap-1.5 text-emerald-600 text-xs font-semibold px-3 py-2 bg-emerald-50 border border-emerald-100 rounded-xl">
              <CheckCircle className="h-3.5 w-3.5" />
              Live on Home Page
            </span>
          )}
          <motion.button
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            onClick={() => onDelete(review.id)}
            disabled={isBusy}
            className="flex items-center gap-1.5 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 px-4 py-2 rounded-xl text-xs font-semibold transition-colors disabled:opacity-50 ml-auto"
          >
            {isBusy ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Trash2 className="h-3.5 w-3.5" />}
            Delete
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Login Screen ─────────────────────────────────────────────────────────────
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setErr('');
    setLoading(true);
    try {
      const data = await apiFetch('/api/admin/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      });
      onLogin(data.token);
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A5734] via-[#0F7A4A] to-[#0A5734] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1.5' fill='%23fff'/%3E%3C/svg%3E")` }}
      />
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-sm"
      >
        <div className="bg-white rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.28)] overflow-hidden">
          <div className="bg-gradient-to-br from-[#0F7A4A] to-[#0A5734] p-8 text-center">
            <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-3 backdrop-blur">
              <Shield className="h-7 w-7 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">Review Admin</h1>
            <p className="text-white/60 text-xs mt-1">Yashoda Total Solution</p>
          </div>

          <div className="p-7">
            <AnimatePresence>
              {err && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl px-4 py-3 mb-5"
                >
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" /> {err}
                </motion.p>
              )}
            </AnimatePresence>

            <form onSubmit={submit} className="space-y-4">
              <div>
                <label htmlFor="admin-username" className="block text-xs font-semibold text-gray-600 mb-1.5">
                  Username
                </label>
                <input
                  id="admin-username"
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  required
                  placeholder="admin"
                  autoComplete="username"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:border-[#0F7A4A] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="admin-password" className="block text-xs font-semibold text-gray-600 mb-1.5">
                  Password
                </label>
                <input
                  id="admin-password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:border-[#0F7A4A] focus:outline-none transition-colors"
                />
              </div>
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#0F7A4A] to-[#159F61] text-white py-3.5 rounded-xl font-semibold text-sm shadow-lg disabled:opacity-60 flex items-center justify-center gap-2 mt-2"
              >
                {loading ? <RefreshCw className="h-4 w-4 animate-spin" /> : 'Sign In'}
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// ─── Dashboard ────────────────────────────────────────────────────────────────
const Dashboard = ({ token, onLogout }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(null);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [toast, setToast] = useState(null);

  const notify = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3200);
  };

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiFetch('/api/admin/reviews', {}, token);
      setReviews(data);
    } catch (e) {
      notify(e.message, 'error');
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => { load(); }, [load]);

  const handleApprove = async (id) => {
    setBusy(id);
    try {
      await apiFetch(`/api/admin/reviews/${id}/approve`, { method: 'PATCH' }, token);
      notify('Review approved — now live on home page!');
      await load();
    } catch (e) { notify(e.message, 'error'); }
    finally { setBusy(null); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Permanently delete this review? This will also remove it from the home page.')) return;
    setBusy(id);
    try {
      await apiFetch(`/api/admin/reviews/${id}`, { method: 'DELETE' }, token);
      notify('Review deleted permanently.');
      await load();
    } catch (e) { notify(e.message, 'error'); }
    finally { setBusy(null); }
  };

  const handleLogout = async () => {
    try { await apiFetch('/api/admin/logout', { method: 'POST' }, token); } catch (_) {}
    onLogout();
  };

  const total    = reviews.length;
  const approved = reviews.filter(r => r.approved).length;
  const pending  = reviews.filter(r => !r.approved).length;
  const avgRating = approved > 0
    ? (reviews.filter(r => r.approved).reduce((s, r) => s + r.rating, 0) / approved).toFixed(1)
    : '—';

  const visible = reviews.filter(r => {
    const matchF = filter === 'all'
      || (filter === 'approved' && r.approved)
      || (filter === 'pending' && !r.approved);
    const q = search.toLowerCase();
    const matchS = !q
      || r.customer_name.toLowerCase().includes(q)
      || r.city.toLowerCase().includes(q)
      || r.review_message.toLowerCase().includes(q);
    return matchF && matchS;
  });

  return (
    <div className="min-h-screen bg-[#F5F7F9]">
      <Toast toast={toast} />

      {/* Navbar */}
      <nav className="bg-gradient-to-r from-[#0A5734] to-[#0F7A4A] sticky top-0 z-40 shadow-lg" aria-label="Admin navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3.5">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center">
              <Shield className="h-4 w-4 text-white" aria-hidden="true" />
            </div>
            <span className="text-white font-bold text-sm">Review Admin Portal</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={load}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              title="Refresh reviews"
              aria-label="Refresh reviews"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} aria-hidden="true" />
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors"
              aria-label="Logout from admin portal"
            >
              <LogOut className="h-3.5 w-3.5" aria-hidden="true" /> Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8" role="region" aria-label="Review statistics">
          <StatPill icon={BarChart2} label="Total Reviews"  value={total}     accent="bg-blue-500"    delay={0}    />
          <StatPill icon={Clock}     label="Pending"        value={pending}   accent="bg-amber-500"   delay={0.05} />
          <StatPill icon={ThumbsUp}  label="Published"      value={approved}  accent="bg-[#0F7A4A]"   delay={0.1}  />
          <StatPill icon={Star}      label="Avg Rating"     value={avgRating} accent="bg-orange-500"  delay={0.15} />
        </div>

        {/* Filter + Search */}
        <div className="bg-white rounded-2xl shadow-[0_4px_18px_rgba(0,0,0,0.06)] px-5 py-4 mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex gap-2" role="group" aria-label="Filter reviews">
            {[
              { key: 'all',      label: 'All',       count: total    },
              { key: 'pending',  label: 'Pending',   count: pending  },
              { key: 'approved', label: 'Published', count: approved },
            ].map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                aria-pressed={filter === f.key}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === f.key ? 'bg-[#0F7A4A] text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {f.label}
                <span className={`text-xs px-1.5 py-0.5 rounded-md ${filter === f.key ? 'bg-white/25 text-white' : 'bg-white text-gray-500'}`}>
                  {f.count}
                </span>
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-56">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search reviews…"
              aria-label="Search reviews by name, city or message"
              className="pl-9 pr-4 py-2.5 border-2 border-gray-200 rounded-xl text-xs focus:border-[#0F7A4A] focus:outline-none transition-colors w-full"
            />
          </div>
        </div>

        {/* Review Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-3" role="status" aria-live="polite">
            <RefreshCw className="h-8 w-8 text-[#0F7A4A] animate-spin" aria-hidden="true" />
            <p className="text-sm text-gray-400">Loading reviews…</p>
          </div>
        ) : visible.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-2xl shadow-[0_4px_18px_rgba(0,0,0,0.06)] p-16 text-center"
            role="status"
          >
            <Eye className="h-10 w-10 text-gray-200 mx-auto mb-3" aria-hidden="true" />
            <p className="text-gray-400 font-medium text-sm">No reviews found</p>
            <p className="text-gray-300 text-xs mt-1">
              {filter !== 'all' ? `No ${filter} reviews yet.` : 'No reviews submitted yet.'}
            </p>
          </motion.div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5" role="list" aria-label="Reviews list">
            <AnimatePresence>
              {visible.map(r => (
                <ReviewCard
                  key={r.id}
                  review={r}
                  onApprove={handleApprove}
                  onDelete={handleDelete}
                  busy={busy}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// ─── Root export ──────────────────────────────────────────────────────────────
const ReviewAdmin = () => {
  const [token, setToken] = useState(() => sessionStorage.getItem('ra_token'));
  const login  = (t) => { sessionStorage.setItem('ra_token', t); setToken(t); };
  const logout = ()  => { sessionStorage.removeItem('ra_token');  setToken(null); };

  return (
    <>
      {/* ── noindex: tells Google to never index this private admin page ── */}
      <Helmet>
        <title>Admin Portal | Yashoda Total Solution</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </Helmet>

      {token ? <Dashboard token={token} onLogout={logout} /> : <Login onLogin={login} />}
    </>
  );
};

export default ReviewAdmin;