import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Handshake, Users, TrendingUp, Award, Send, MapPin, Phone, Mail, Briefcase, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';


const Partner = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    location: '',
    email: '',
    partnerType: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    const res = await fetch(`${backendUrl}/api/partner`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitStatus('success');
    }

  } catch (error) {
    console.error(error);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="min-h-screen bg-[#F5F7F9]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-[#F39C12] rounded-full mb-6"
            >
              <Handshake className="h-10 w-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('partner_title')}
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-[#F39C12]">
              {t('partner_subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}></div>
      </section>

      {/* About Partnership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center"
          >
            <p className="text-lg md:text-xl text-[#1F2933] leading-relaxed">
              {t('about_partner_desc1')} <span className="font-bold text-[#0F7A4A]">{t('about_partner_desc2')}</span> {t('about_partner_desc3')}
            </p>
            <p className="text-lg md:text-xl text-[#52606D] leading-relaxed">
              {t('about_partner_desc4')}
            </p>
            <p className="text-xl md:text-2xl font-bold text-[#0F7A4A]">
              {t('about_partner_desc5')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              {t('why_partner_title')}
            </h2>
            <p className="text-lg text-[#52606D] max-w-2xl mx-auto">
              {t('why_partner_desc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: t('why_partner_benefit1'),
                description: t('why_partner_benefit1_desc'),
                color: "from-[#0F7A4A] to-[#159F61]"
              },
              {
                icon: Award,
                title: t('why_partner_benefit2'),
                description: t('why_partner_benefit2_desc'),
                color: "from-[#F39C12] to-[#f7b547]"
              },
              {
                icon: TrendingUp,
                title: t('why_partner_benefit3'),
                description: t('why_partner_benefit3_desc'),
                color: "from-blue-500 to-cyan-500"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2933] mb-3 text-center">
                  {benefit.title}
                </h3>
                <p className="text-base text-[#52606D] text-center leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              {t('partner_form_title')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('partner_form_subtitle')}
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-[#F5F7F9] rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="flex items-center text-sm font-semibold text-[#1F2933] mb-2">
                  <Briefcase className="h-4 w-4 mr-2 text-[#0F7A4A]" />
                  {t('partner_name_label')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0F7A4A] focus:border-transparent transition-all duration-200"
                  placeholder={t('partner_name_label_placeholder')}
                />
              </div>

              {/* Mobile */}
              <div>
                <label htmlFor="mobile" className="flex items-center text-sm font-semibold text-[#1F2933] mb-2">
                  <Phone className="h-4 w-4 mr-2 text-[#0F7A4A]" />
                  {t('partner_mobile_label')}
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0F7A4A] focus:border-transparent transition-all duration-200"
                  placeholder={t('partner_mobile_label_placeholder')}
                />
              </div>

              {/* Location */}
              <div>
                <label htmlFor="location" className="flex items-center text-sm font-semibold text-[#1F2933] mb-2">
                  <MapPin className="h-4 w-4 mr-2 text-[#0F7A4A]" />
                  {t('partner_location_label')}
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0F7A4A] focus:border-transparent transition-all duration-200"
                  placeholder={t('partner_location_label_placeholder')}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="flex items-center text-sm font-semibold text-[#1F2933] mb-2">
                  <Mail className="h-4 w-4 mr-2 text-[#0F7A4A]" />
                  {t('partner_email_label')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0F7A4A] focus:border-transparent transition-all duration-200"
                  placeholder={t('partner_email_label_placeholder')}
                />
              </div>
            </div>

            {/* Partner Type */}
            <div className="mb-6">
              <label htmlFor="partnerType" className="flex items-center text-sm font-semibold text-[#1F2933] mb-2">
                <Users className="h-4 w-4 mr-2 text-[#0F7A4A]" />
                {t('partner_type_label')}
              </label>
              <select
                id="partnerType"
                name="partnerType"
                value={formData.partnerType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0F7A4A] focus:border-transparent transition-all duration-200"
              >
                <option value="">{t('partner_type_label_placeholder')}</option>
                <option value="Freelancer">{t('partner_type_label_option1')}</option>
                <option value="Franchise">{t('partner_type_label_option2')}</option>
                <option value="Advocate">{t('partner_type_label_option3')}</option>
              </select>
            </div>

            {/* Additional Information */}
            <div className="mb-8">
              <label htmlFor="additionalInfo" className="flex items-center text-sm font-semibold text-[#1F2933] mb-2">
                <FileText className="h-4 w-4 mr-2 text-[#0F7A4A]" />
                {t('partner_additional_info_label')}
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0F7A4A] focus:border-transparent transition-all duration-200 resize-none"
                placeholder={t('partner_additional_info_label_placeholder')}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#0F7A4A] to-[#159F61] text-white font-semibold px-10 py-4 rounded-full hover:from-[#0A5734] hover:to-[#0F7A4A] transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>{t('partner_submitting')}</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>{t('partner_submit_button')}</span>
                  </>
                )}
              </button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                >
                  <p className="font-semibold">{t('partner_submit_success')}</p>
                  <p className="text-sm mt-1">{t('partner_submit_success_desc')}</p>
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Partner;