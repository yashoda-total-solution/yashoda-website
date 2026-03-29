import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, FileCheck, Banknote, Landmark, Users, CheckCircle, ArrowRight, Star, Award, Clock, Lock, HeartHandshake, Target, TrendingUp, Zap, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

// ── Testimonial Card — flex-col layout, pinned footer, inline "see more" ──────
const TestimonialCard = ({ review, index }) => {
  const [expanded, setExpanded] = useState(false);
  const CHAR_LIMIT = 160;
  const isLong = review.review_message.length > CHAR_LIMIT;
  const displayText = isLong && !expanded
    ? review.review_message.slice(0, CHAR_LIMIT).trimEnd() + '…'
    : review.review_message;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.96 }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      whileHover={{ y: -6 }}
      data-testid={`testimonial-card-${index + 1}`}
      className="relative bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_36px_rgba(15,122,74,0.12)] transition-shadow duration-300 flex flex-col h-full"
    >
      {/* Faint open-quote watermark */}
      <div className="absolute top-3 left-4 text-5xl text-gray-100 font-serif leading-none select-none pointer-events-none">
        &ldquo;
      </div>

      <div className="relative z-10 flex flex-col flex-1 px-7 pt-7 pb-6">

        {/* Stars */}
        <div className="flex justify-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-5 w-5 ${star <= review.rating ? 'text-[#F39C12] fill-current' : 'text-gray-200 fill-current'}`}
            />
          ))}
        </div>

        {/* Review text */}
        <div className="flex-1 mb-5">
          <p className="text-sm text-[#52606D] leading-relaxed italic">
            {displayText}
            {isLong && (
              <button
                onClick={() => setExpanded(e => !e)}
                className="ml-1 text-[#0F7A4A] font-semibold text-xs hover:underline focus:outline-none whitespace-nowrap"
              >
                {expanded ? 'see less' : 'see more'}
              </button>
            )}
          </p>
        </div>

        {/* Orange divider */}
        <div className="border-t-2 border-[#F39C12] mb-4" />

        {/* Name + city */}
        <div className="text-center">
          <p className="text-sm font-bold text-[#1F2933]">{review.customer_name}</p>
          <p className="text-xs text-[#9AA5B1] flex items-center justify-center mt-1 gap-1.5">
            <span className="w-2 h-2 bg-[#F39C12] rounded-full shrink-0" />
            {review.city}
          </p>
        </div>

      </div>
    </motion.div>
  );
};

// ── Home ──────────────────────────────────────────────────────────────────────
const Home = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const REVIEWS_PER_PAGE = 3;
  const MAX_REVIEWS = 9;

  const [approvedReviews, setApprovedReviews] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [reviewPage, setReviewPage] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1739298061766-e2751d92e9db?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBoYW5kc2hha2UlMjBvZmZpY2UlMjB0ZWFtd29ya3xlbnwwfHx8fDE3NzM0NTkyNTB8MA&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1758599543129-5269a8f29e68?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBoYW5kc2hha2UlMjBvZmZpY2UlMjB0ZWFtd29ya3xlbnwwfHx8fDE3NzM0NTkyNTB8MA&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1758518731290-a9eb64660ead?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBoYW5kc2hha2UlMjBvZmZpY2UlMjB0ZWFtd29ya3xlbnwwfHx8fDE3NzM0NTkyNTB8MA&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1758518729240-7162d07427b8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBoYW5kc2hha2UlMjBvZmZpY2UlMjB0ZWFtd29ya3xlbnwwfHx8fDE3NzM0NTkyNTB8MA&ixlib=rb-4.1.0&q=85"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    const fetchApproved = async () => {
      try {
        const backendUrl = process.env.REACT_APP_BACKEND_URL || '';
        const res = await fetch(`${backendUrl}/api/reviews`);
        if (res.ok) {
          const data = await res.json();
          setApprovedReviews(data.slice(0, MAX_REVIEWS));
        }
      } catch (err) {
        console.error('Failed to fetch reviews:', err);
      } finally {
        setReviewsLoading(false);
      }
    };
    fetchApproved();
  }, []);

  const totalPages = Math.ceil(approvedReviews.length / REVIEWS_PER_PAGE);
  const reviewStartIdx = reviewPage * REVIEWS_PER_PAGE;
  const visibleReviews = approvedReviews.slice(reviewStartIdx, reviewStartIdx + REVIEWS_PER_PAGE);
  const canGoPrev = reviewPage > 0;
  const canGoNext = reviewPage < totalPages - 1;

  const fallbackTestimonials = [
    { id: 'f1', customer_name: t('testimonial1_name'), city: t('testimonial1_location'), rating: 5, review_message: t('testimonial1_text') },
    { id: 'f2', customer_name: t('testimonial2_name'), city: t('testimonial2_location'), rating: 5, review_message: t('testimonial2_text') },
    { id: 'f3', customer_name: t('testimonial3_name'), city: t('testimonial3_location'), rating: 5, review_message: t('testimonial3_text') },
  ];

  const displayReviews = approvedReviews.length > 0 ? visibleReviews : fallbackTestimonials;

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-[#F5F7F9]">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-32 pb-20 md:pb-24 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* ── Left: Text content ── */}
            <motion.div {...fadeUp} className="text-left space-y-6 z-10">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight" data-testid="hero-headline">
                {t('hero_headline')}
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed" data-testid="hero-subtext">
                {t('hero_subtext')}
              </p>
              <div className="pt-2">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    data-testid="hero-btn-contact"
                    className="group inline-flex items-center justify-center bg-[#F39C12] hover:bg-[#d68910] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
                  >
                    {t('hero_btn_contact')}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 sm:gap-6 pt-4"
              >
                <div className="flex items-center space-x-2 text-white/80">
                  <CheckCircle className="h-5 w-5 text-[#F39C12]" />
                  <span className="text-sm font-medium">{t('hero_small1')}</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Shield className="h-5 w-5 text-[#F39C12]" />
                  <span className="text-sm font-medium">{t('hero_small2')}</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Award className="h-5 w-5 text-[#F39C12]" />
                  <span className="text-sm font-medium">{t('hero_small3')}</span>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Right: Image carousel — VISIBLE ON ALL SCREEN SIZES ── */}
            {/* FIX: Removed "hidden lg:block". Now uses block on all sizes. */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full"
            >
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-72 h-72 bg-[#F39C12] rounded-3xl opacity-20 blur-3xl"></div>
                <motion.div
                  whileHover={{ rotateY: 5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-2 shadow-2xl overflow-hidden"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Height: 260px on mobile, 320px on md, 400px on lg */}
                  <div
                    className="relative overflow-hidden rounded-2xl"
                    style={{ height: 'clamp(260px, 45vw, 400px)' }}
                  >
                    <AnimatePresence initial={false} mode="popLayout">
                      <motion.img
                        key={currentImageIndex}
                        src={heroImages[currentImageIndex]}
                        alt="Professional Service"
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl shadow-2xl"
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                      />
                    </AnimatePresence>
                    {/* Dot indicators */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                      {heroImages.map((_, index) => (
                        <div
                          key={index}
                          className={`h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-[#F39C12] w-6' : 'bg-white/50 w-2'}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}></div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────────── */}
      <motion.section {...fadeUp} className="relative mt-6 lg:-mt-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '500+', label: t('hero_stats1'), icon: Users },
                { number: '95%', label: t('hero_stats2'), icon: TrendingUp },
                { number: '24/7', label: t('hero_stats3'), icon: Clock },
                { number: '100%', label: t('hero_stats4'), icon: Lock },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="h-8 w-8 text-[#0F7A4A] mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-1">{stat.number}</div>
                  <div className="text-sm text-[#52606D]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── About ────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]" data-testid="about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4">{t('about_title')}</h2>
            <p className="text-lg text-[#52606D] leading-relaxed max-w-3xl mx-auto">{t('about_desc')}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: t('about_card1_title'), desc: t('about_card1_desc'), color: 'bg-blue-50', iconColor: 'text-blue-600' },
              { icon: Target, title: t('about_card2_title'), desc: t('about_card2_desc'), color: 'bg-green-50', iconColor: 'text-green-600' },
              { icon: Clock, title: t('about_card3_title'), desc: t('about_card3_desc'), color: 'bg-orange-50', iconColor: 'text-orange-600' },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...scaleIn}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, rotateY: 5 }}
                data-testid={`about-card-${index + 1}`}
                className="group bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(15,122,74,0.15)] transition-all duration-300 overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="p-8">
                  <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`h-8 w-8 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F2933] mb-3">{item.title}</h3>
                  <p className="text-base text-[#52606D] leading-relaxed">{item.desc}</p>
                </div>
                <div className="h-2 bg-gradient-to-r from-[#0F7A4A] to-[#159F61] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problems ─────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white" data-testid="problems-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4">{t('problems_title')}</h2>
            <p className="text-lg text-[#F39C12] font-semibold">{t('problems_subtitle')}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: t('problem1_title'), desc: t('problem1_desc'), icon: Shield, gradient: 'from-red-500 to-orange-500' },
              { title: t('problem2_title'), desc: t('problem2_desc'), icon: FileCheck, gradient: 'from-blue-500 to-cyan-500' },
              { title: t('problem3_title'), desc: t('problem3_desc'), icon: Banknote, gradient: 'from-green-500 to-emerald-500' },
              { title: t('problem4_title'), desc: t('problem4_desc'), icon: Landmark, gradient: 'from-purple-500 to-pink-500' },
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                data-testid={`problem-card-${index + 1}`}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 border-gray-100 hover:border-[#F39C12] transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${problem.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${problem.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300`}>
                    <problem.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F2933] mb-3">{problem.title}</h3>
                  <p className="text-base text-[#52606D] leading-relaxed">{problem.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white" data-testid="why-choose-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4">{t('why_title')}</h2>
            <p className="text-lg text-[#52606D] max-w-3xl mx-auto">{t('why_subtitle')}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t('why1_title'), desc: t('why1_desc'), icon: Award },
              { title: t('why2_title'), desc: t('why2_desc'), icon: Zap },
              { title: t('why3_title'), desc: t('why3_desc'), icon: HeartHandshake },
              { title: t('why4_title'), desc: t('why4_desc'), icon: Eye },
              { title: t('why5_title'), desc: t('why5_desc'), icon: Shield },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                data-testid={`why-card-${index + 1}`}
                className="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-transparent hover:border-[#0F7A4A] transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0F7A4A] to-[#159F61] text-white rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <item.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-[#1F2933] mb-3">{item.title}</h3>
                <p className="text-base text-[#52606D] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F5F7F9] to-white" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4">
              {t('testimonials_title')}
            </h2>
            <p className="text-lg text-[#52606D]">{t('testimonials_subtitle')}</p>
          </motion.div>

          {reviewsLoading ? (
            <div className="flex justify-center py-12">
              <div className="w-8 h-8 border-4 border-[#0F7A4A] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`page-${reviewPage}-${approvedReviews.length}`}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
                >
                  {displayReviews.map((review, index) => (
                    <TestimonialCard key={review.id} review={review} index={index} />
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Pagination controls */}
              {approvedReviews.length > REVIEWS_PER_PAGE && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center gap-4 mt-10"
                >
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={() => setReviewPage(p => p - 1)}
                    disabled={!canGoPrev}
                    className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#0F7A4A] text-[#0F7A4A] font-semibold text-sm transition-all hover:bg-[#0F7A4A] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </motion.button>

                  <div className="flex gap-2 items-center">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setReviewPage(i)}
                        className={`rounded-full transition-all duration-300 ${i === reviewPage
                            ? 'bg-[#0F7A4A] w-6 h-3'
                            : 'bg-gray-300 hover:bg-[#0F7A4A]/40 w-3 h-3'
                          }`}
                      />
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={() => setReviewPage(p => p + 1)}
                    disabled={!canGoNext}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#0F7A4A] to-[#159F61] text-white font-semibold text-sm transition-all shadow-lg hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    See More Reviews
                    <ChevronRight className="h-4 w-4" />
                  </motion.button>
                </motion.div>
              )}

              {approvedReviews.length > 0 && (
                <p className="text-center text-sm text-[#9AA5B1] mt-4">
                  Showing {reviewStartIdx + 1}–{Math.min(reviewStartIdx + REVIEWS_PER_PAGE, approvedReviews.length)} of {approvedReviews.length} customer review{approvedReviews.length !== 1 ? 's' : ''}
                </p>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────────── */}
      <motion.section
        {...fadeUp}
        className="relative py-20 md:py-32 bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] overflow-hidden"
        data-testid="cta-section"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">{t('cta_title')}</h2>
            <p className="text-lg md:text-xl text-white/90">{t('cta_subtitle')}</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                data-testid="cta-contact-btn"
                className="inline-flex items-center justify-center bg-[#F39C12] hover:bg-[#d68910] text-white px-12 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(243,156,18,0.5)]"
              >
                {t('cta_btn')}
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
};

export default Home;