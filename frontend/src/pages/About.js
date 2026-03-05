import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Users, Target, Eye, HeartHandshake, Award, Lock, ArrowRight, CheckCircle, FileCheck, UserCheck } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  };

  return (
    <div className="min-h-screen bg-[#F5F7F9]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] text-white py-20 md:py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-2 bg-[#F39C12] text-white rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg">
              {t('about_page_title')}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-4" data-testid="about-hero-title">
              {t('about_page_title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              {t('about_page_subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}></div>
      </section>

      {/* Who We Are Section */}
      <section className="relative -mt-16 z-10 py-16 md:py-24" data-testid="who-we-are-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12 lg:p-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -top-6 -left-6 w-72 h-72 bg-[#0F7A4A] rounded-full opacity-10 blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-2 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1684151498268-c7ff7e7b702b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwbWVldGluZyUyMGluZGlhfGVufDB8fHx8MTc3MjcwNTgyNHww&ixlib=rb-4.1.0&q=85"
                    alt="Our Team"
                    className="rounded-xl w-full h-auto"
                  />
                </div>
              </motion.div>

              {/* Right - Content */}
              <div>
                <span className="px-4 py-2 bg-[#0F7A4A]/10 text-[#0F7A4A] rounded-full text-sm font-semibold uppercase tracking-wider">
                  {t('about_who_title')}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mt-4 mb-6">
                  {t('about_who_title')}
                </h2>
                <p className="text-lg text-[#52606D] leading-relaxed mb-6">
                  {t('about_who_desc')}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-gradient-to-br from-[#0F7A4A] to-[#159F61] text-white p-6 rounded-2xl">
                    <div className="text-3xl font-bold mb-1">500+</div>
                    <div className="text-sm text-white/90">Happy Clients</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#F39C12] to-[#f7b547] text-white p-6 rounded-2xl">
                    <div className="text-3xl font-bold mb-1">95%</div>
                    <div className="text-sm text-white/90">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              {...fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-gradient-to-br from-[#0F7A4A] to-[#0A5734] text-white rounded-3xl p-8 md:p-12 overflow-hidden shadow-[0_20px_40px_rgba(15,122,74,0.2)]"
              data-testid="mission-card"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('about_mission_title')}</h3>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  {t('about_mission_desc')}
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-gradient-to-br from-[#F39C12] to-[#d68910] text-white rounded-3xl p-8 md:p-12 overflow-hidden shadow-[0_20px_40px_rgba(243,156,18,0.2)]"
              data-testid="vision-card"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('about_vision_title')}</h3>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  {t('about_vision_desc')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]" data-testid="approach-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="px-4 py-2 bg-[#0F7A4A]/10 text-[#0F7A4A] rounded-full text-sm font-semibold uppercase tracking-wider">
              {t('about_approach_title')}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mt-4 mb-4">
              {t('about_approach_title')}
            </h2>
            <p className="text-lg text-[#52606D] max-w-3xl mx-auto">
              {t('about_approach_subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                number: '01',
                icon: Users,
                title: t('about_approach_step1'),
                desc: t('about_approach_step1_desc'),
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                number: '02',
                icon: FileCheck,
                title: t('about_approach_step2'),
                desc: t('about_approach_step2_desc'),
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                number: '03',
                icon: UserCheck,
                title: t('about_approach_step3'),
                desc: t('about_approach_step3_desc'),
                gradient: 'from-orange-500 to-red-500'
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                data-testid={`approach-step-${index + 1}`}
                className="relative bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(15,122,74,0.15)] transition-all duration-300"
              >
                {/* Number Badge */}
                <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${step.gradient} text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg`}>
                  {step.number}
                </div>

                <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1F2933] mb-3">{step.title}</h3>
                <p className="text-base text-[#52606D] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Connection Line */}
          <div className="hidden md:block relative -mt-8 mb-8">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 opacity-20 transform -translate-y-1/2"></div>
          </div>
        </div>
      </section>

      {/* Customer Commitment Section */}
      <section className="py-16 md:py-24 bg-white" data-testid="commitment-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4">
              {t('about_commitment_title')}
            </h2>
            <p className="text-lg text-[#52606D] max-w-3xl mx-auto">
              {t('about_commitment_subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: t('about_commitment1_title'),
                desc: t('about_commitment1_desc'),
                color: 'bg-blue-50',
                iconColor: 'text-blue-600',
                iconBg: 'bg-blue-600'
              },
              {
                icon: Lock,
                title: t('about_commitment2_title'),
                desc: t('about_commitment2_desc'),
                color: 'bg-green-50',
                iconColor: 'text-green-600',
                iconBg: 'bg-green-600'
              },
              {
                icon: CheckCircle,
                title: t('about_commitment3_title'),
                desc: t('about_commitment3_desc'),
                color: 'bg-orange-50',
                iconColor: 'text-orange-600',
                iconBg: 'bg-orange-600'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                data-testid={`commitment-card-${index + 1}`}
                className={`group relative ${item.color} rounded-2xl p-8 transition-all duration-300 overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/50 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className={`w-20 h-20 ${item.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F2933] mb-3">{item.title}</h3>
                  <p className="text-base text-[#52606D] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        {...fadeUp}
        className="relative py-20 md:py-32 bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] overflow-hidden"
        data-testid="about-cta-section"
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
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              {t('about_cta_title')}
            </h2>
            <p className="text-lg md:text-xl text-white/90">
              {t('about_cta_desc')}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                data-testid="about-cta-btn"
                className="inline-flex items-center justify-center bg-[#F39C12] hover:bg-[#d68910] text-white px-12 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(243,156,18,0.5)]"
              >
                {t('hero_btn_contact')}
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
