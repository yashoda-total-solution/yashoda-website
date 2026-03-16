import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Star, Send, CheckCircle, User, MapPin, MessageSquare } from 'lucide-react';

const Reviews = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    customer_name: '',
    city: '',
    rating: 0,
    review_message: ''
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || '';
      const response = await fetch(`${backendUrl}/api/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          customer_name: '',
          city: '',
          rating: 0,
          review_message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRatingClick = (rating) => {
    setFormData({ ...formData, rating });
  };

  return (
    <div className="min-h-screen bg-[#F5F7F9]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4" data-testid="reviews-hero-title">
              {t('reviews_page_title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              {t('reviews_page_subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}></div>
      </section>

      {/* Main Content */}
      <section className="relative -mt-16 z-10 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!submitted ? (
            <motion.div
              {...fadeUp}
              className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
                  {t('reviews_form_title')}
                </h2>
                <p className="text-lg text-[#52606D]">
                  {t('reviews_form_subtitle')}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Customer Name */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-[#1F2933] mb-2">
                    <User className="inline h-5 w-5 mr-2 text-[#0F7A4A]" />
                    {t('reviews_name_label')} *
                  </label>
                  <input
                    type="text"
                    name="customer_name"
                    value={formData.customer_name}
                    onChange={handleChange}
                    required
                    data-testid="review-name-input"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#0F7A4A] focus:outline-none transition-colors text-base"
                    placeholder={t('reviews_name_placeholder')}
                  />
                </div>

                {/* City */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-[#1F2933] mb-2">
                    <MapPin className="inline h-5 w-5 mr-2 text-[#0F7A4A]" />
                    {t('reviews_city_label')} *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    data-testid="review-city-input"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#0F7A4A] focus:outline-none transition-colors text-base"
                    placeholder={t('reviews_city_placeholder')}
                  />
                </div>

                {/* Rating */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-[#1F2933] mb-3">
                    <Star className="inline h-5 w-5 mr-2 text-[#0F7A4A]" />
                    {t('reviews_rating_label')} *
                  </label>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.button
                        key={star}
                        type="button"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleRatingClick(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        data-testid={`rating-star-${star}`}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`h-10 w-10 transition-colors ${
                            star <= (hoverRating || formData.rating)
                              ? 'text-[#F39C12] fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      </motion.button>
                    ))}
                    {formData.rating > 0 && (
                      <span className="ml-3 text-lg font-semibold text-[#52606D]">
                        {formData.rating} {formData.rating === 1 ? 'Star' : 'Stars'}
                      </span>
                    )}
                  </div>
                </div>

                {/* Review Message */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-[#1F2933] mb-2">
                    <MessageSquare className="inline h-5 w-5 mr-2 text-[#0F7A4A]" />
                    {t('reviews_message_label')} *
                  </label>
                  <textarea
                    name="review_message"
                    value={formData.review_message}
                    onChange={handleChange}
                    required
                    rows="6"
                    data-testid="review-message-input"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#0F7A4A] focus:outline-none transition-colors text-base resize-none"
                    placeholder={t('reviews_message_placeholder')}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading || !formData.customer_name || !formData.city || !formData.rating || !formData.review_message}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-testid="review-submit-btn"
                  className="w-full bg-gradient-to-r from-[#0F7A4A] to-[#159F61] hover:from-[#0A5734] hover:to-[#0F7A4A] text-white px-8 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? (
                    <span>{t('reviews_submitting')}</span>
                  ) : (
                    <>
                      <Send className="h-6 w-6 mr-2" />
                      {t('reviews_submit_btn')}
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12 text-center"
              data-testid="review-success-message"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-24 h-24 bg-gradient-to-br from-[#0F7A4A] to-[#159F61] rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="h-12 w-12 text-white" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
                {t('reviews_success_title')}
              </h2>
              <p className="text-lg text-[#52606D] mb-8">
                {t('reviews_success_message')}
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center justify-center bg-[#F39C12] hover:bg-[#d68910] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                {t('reviews_another_btn')}
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-6">
              {t('reviews_why_title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: t('reviews_why1_title'),
                  desc: t('reviews_why1_desc'),
                  icon: '👥'
                },
                {
                  title: t('reviews_why2_title'),
                  desc: t('reviews_why2_desc'),
                  icon: '📈'
                },
                {
                  title: t('reviews_why3_title'),
                  desc: t('reviews_why3_desc'),
                  icon: '🤝'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#F5F7F9] rounded-2xl p-8"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-[#1F2933] mb-3">{item.title}</h3>
                  <p className="text-base text-[#52606D]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
