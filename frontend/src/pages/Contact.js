import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Send, CheckCircle, User, MessageSquare, MessageCircle, Globe, Building2, Users, Network } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
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
      const response = await fetch(`${backendUrl}/api/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting contact:', error);
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

  const handleWhatsAppClick = () => {
    const phone = '919876543210'; // Format: country code + number without +
    const message = 'Hello, I need help with insurance claim assistance.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F5F7F9]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4" data-testid="contact-hero-title">
              {t('contact_page_title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              {t('contact_page_subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}></div>
      </section>

      {/* Contact Information Cards - Compact Design */}
      <section className="py-16 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Contact Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Left Column - Office Details */}
            <motion.div
              {...fadeUp}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-start space-x-4 mb-4 pb-4 border-b border-gray-100">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#1F2933] mb-2">Office Address</h3>
                  <p className="text-sm text-[#52606D] leading-relaxed">
                    2 B-70, Floor No:2, PHOENIX PARAGON PLAZA, LBS Road, KURLA WEST, Mumbai, Maharashtra, 400070
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4 pb-4 border-b border-gray-100">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0F7A4A] to-[#159F61] rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#1F2933] mb-1">Phone Number</h3>
                  <a 
                    href="tel:+919649647790"
                    className="text-base text-[#0F7A4A] font-semibold hover:underline"
                  >
                    +91 9649647790
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#F39C12] to-[#f7b547] rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#1F2933] mb-1">Email Address</h3>
                  <a 
                    href="mailto:info@yashodatotalsolution.com"
                    className="text-sm text-[#0F7A4A] font-semibold hover:underline break-all"
                  >
                    info@yashodatotalsolution.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Google Map */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1F2933]">Location Map</h3>
              </div>
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8267890542363!2d72.87862931490195!3d19.073956887091787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8dcf85fffff%3A0xd8c4e1e3e3e3e3e3!2sPhoenix%20Paragon%20Plaza!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                  className="rounded-lg"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR NETWORK Section - Unique Design */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            {...fadeUp}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-[#F39C12] rounded-full mb-6"
            >
              <Globe className="h-10 w-10 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              OUR NETWORK
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-4">
                Yashoda Total Solution is expanding its operational presence across <span className="font-bold text-[#F39C12]">PAN India</span> through growing service network to ensure accessibility of services nationwide.
              </p>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                Our growing network aims to deliver professional assistance across multiple states with structured service delivery supported by trained sales and support teams.
              </p>
            </div>
          </motion.div>


          {/* Network Stats */}
          <motion.div
            {...fadeUp}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                {
                  icon: Globe,
                  number: 'PAN India',
                  label: 'Nationwide Coverage'
                },
                {
                  icon: Users,
                  number: 'Growing',
                  label: 'Trained Sales & Support Teams'
                },
                {
                  icon: Building2,
                  number: 'Multiple',
                  label: 'States & Cities'
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-[#F39C12] rounded-full flex items-center justify-center mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-base md:text-lg text-white/90 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Banner - Clickable Button */}
          <motion.div
            {...fadeUp}
            className="mt-12 text-center"
          >
            <button
              onClick={() => navigate('/partner')}
              className="inline-flex items-center space-x-3 bg-[#F39C12] px-8 py-4 rounded-full hover:bg-[#e08e0b] transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <Network className="h-6 w-6 text-white" />
              <span className="text-lg font-semibold text-white">
                Join Our Expanding Network of Service Excellence
              </span>
            </button>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#F39C12] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full opacity-5 blur-3xl"></div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!submitted ? (
            <motion.div
              {...fadeUp}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12 border-2 border-gray-100"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
                  {t('contact_form_title')}
                </h2>
                <p className="text-lg text-[#52606D]">
                  {t('contact_form_subtitle')}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-[#1F2933] mb-2">
                    <User className="inline h-5 w-5 mr-2 text-[#0F7A4A]" />
                    {t('contact_name_label')} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    data-testid="contact-name-input"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#0F7A4A] focus:outline-none transition-colors text-base"
                    placeholder={t('contact_name_placeholder')}
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-[#1F2933] mb-2">
                    <Phone className="inline h-5 w-5 mr-2 text-[#0F7A4A]" />
                    {t('contact_phone_label')} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    data-testid="contact-phone-input"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#0F7A4A] focus:outline-none transition-colors text-base"
                    placeholder={t('contact_phone_placeholder')}
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-[#1F2933] mb-2">
                    <MessageSquare className="inline h-5 w-5 mr-2 text-[#0F7A4A]" />
                    {t('contact_message_label')} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    data-testid="contact-message-input"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#0F7A4A] focus:outline-none transition-colors text-base resize-none"
                    placeholder={t('contact_message_placeholder')}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading || !formData.name || !formData.phone || !formData.message}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-testid="contact-submit-btn"
                  className="w-full bg-gradient-to-r from-[#0F7A4A] to-[#159F61] hover:from-[#0A5734] hover:to-[#0F7A4A] text-white px-8 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? (
                    <span>{t('contact_submitting')}</span>
                  ) : (
                    <>
                      <Send className="h-6 w-6 mr-2" />
                      {t('contact_submit_btn')}
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
              data-testid="contact-success-message"
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
                {t('contact_success_title')}
              </h2>
              <p className="text-lg text-[#52606D] mb-8">
                {t('contact_success_message')}
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center justify-center bg-[#F39C12] hover:bg-[#d68910] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                {t('contact_another_btn')}
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        data-testid="whatsapp-button"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] hover:bg-[#1da851] text-white rounded-full shadow-2xl flex items-center justify-center z-50 transition-colors duration-300"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <MessageCircle className="h-8 w-8" />
      </motion.button>

      {/* WhatsApp Info Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-28 bg-white px-4 py-2 rounded-lg shadow-lg text-sm font-semibold text-[#1F2933] hidden md:block"
      >
        {t('contact_whatsapp_btn')}
      </motion.div>
    </div>
  );
};

export default Contact;
