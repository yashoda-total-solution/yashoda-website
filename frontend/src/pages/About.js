import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Shield, FileCheck, Users, HeartHandshake, Target, Award, X, Eye,
  CheckCircle, Lock, TrendingUp, Clock, Zap, Phone, Mail
} from 'lucide-react';

const TEAM_IMAGES = {
  md: 'director.png',
  sales: 'https://static.prod-images.emergentagent.com/jobs/bd5b376d-ca14-453c-bb4f-06833e2e2741/images/87447e00c2f040c5a6f2bfadb1ae27a431d8b28a7e9a40f86d3b3d5a785b21c4.png',
  legal: 'https://static.prod-images.emergentagent.com/jobs/bd5b376d-ca14-453c-bb4f-06833e2e2741/images/a75fe35cf9732eed2e87f9cab7303f4159c6a291444cd1c3688266fe8ac59960.png',
};



const About = () => {
  const { t } = useLanguage();
  const [activeProfile, setActiveProfile] = useState(null);

  const teamMembers = [
    {
      key: 'md',
      image: TEAM_IMAGES.md,
      title: t('md_title'),
      name: t('md_name'),
      popupName: null,
      icon: Award,
      color: '#0F7A4A',
      descriptions: [t('md_desc1'), t('md_desc2')],
      highlight: t('md_quote'),
      highlightType: 'quote',
    },
    {
      key: 'sales',
      image: TEAM_IMAGES.sales,
      title: t('sales_title'),
      name: null,
      icon: Users,
      color: '#3B82F6',
      descriptions: [t('sales_desc1'), t('sales_desc2'), t('sales_desc3')],
      highlight: t('sales_motto'),
      highlightType: 'quote',
    },
    {
      key: 'legal',
      image: TEAM_IMAGES.legal,
      title: t('legal_title'),
      name: null,
      icon: Shield,
      color: '#F97316',
      descriptions: [t('legal_desc1'), t('legal_desc2')],
      highlight: t('legal_motto'),
      highlightType: 'quote',
    },
  ];

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
      {/* Hero Section with 3D Effect */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('title')}</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">{t('hero_subtitle')}</p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}></div>
      </section>

      {/* About Us Section with Image */}
      {/* FIX: changed -mt-16 to mt-6 lg:-mt-16 to prevent overlap on mobile */}
      <section className="relative mt-6 lg:-mt-16 z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-[#0F7A4A]/10 rounded-2xl flex items-center justify-center">
                    <Shield className="h-7 w-7 text-[#0F7A4A]" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933]">{t('about_title')}</h2>
                </div>
                <div className="space-y-4 text-base text-[#52606D] leading-relaxed">
                  <p>{t('about_intro')}</p>
                  <p>{t('about_p2')}</p>
                </div>
              </div>

              {/* FIX: removed "hidden lg:block" — image now visible on all screen sizes */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full"
              >
                <img
                  src="about_asset1.png"
                  alt="Insurance Services"
                  className="w-full h-auto rounded-2xl"
                />
              </motion.div>
            </div>
            <div className="space-y-4 text-base text-[#52606D] leading-relaxed mt-6">
              <p>{t('about_p3')}</p>
              <p>{t('about_p4')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section with 3D Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4">{t('whatwedo_title')}</h2>
            <p className="text-lg text-[#52606D] max-w-3xl mx-auto">{t('whatwedo_intro')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t('whatwedo_items').map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-gray-100 hover:border-[#0F7A4A] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(15,122,74,0.15)]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0F7A4A] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-base text-[#52606D] leading-relaxed pt-2">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-8">
            <p className="text-lg text-center text-[#52606D] leading-relaxed max-w-4xl mx-auto bg-[#F5F7F9] p-6 rounded-2xl">
              {t('whatwedo_outro')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section with Vector Image */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4">{t('features_title')}</h2>
            <p className="text-lg text-[#52606D] max-w-3xl mx-auto">{t('features_intro')}</p>
            <p className="text-lg font-semibold text-[#1F2933] mt-4">{t('features_subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t('features').map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(15,122,74,0.15)] transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#0F7A4A] to-[#159F61] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                      <span className="text-white text-sm font-bold">{i + 1}</span>
                    </div>
                    <p className="text-base text-[#52606D] leading-relaxed">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* FIX: removed "hidden lg:block" — image now visible on all screen sizes */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full"
            >
              <img
                src="about_asset2.png"
                alt="Our Features"
                className="w-full h-auto rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategy Section with 3D Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4">{t('strategy_title')}</h2>
            <p className="text-lg text-[#52606D] max-w-3xl mx-auto">{t('strategy_intro')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t('strategy_items').map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-white rounded-2xl p-6 border-2 border-[#0F7A4A]/20 hover:border-[#0F7A4A] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(15,122,74,0.15)]"
              >
                <div className="absolute top-4 right-4 w-12 h-12 bg-[#0F7A4A]/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-[#0F7A4A]">{i + 1}</span>
                </div>
                <div className="pr-12">
                  <TrendingUp className="h-8 w-8 text-[#0F7A4A] mb-4" />
                  <p className="text-base text-[#52606D] leading-relaxed">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-12">
            <div className="bg-gradient-to-br from-[#fa7f05] to-[#e08931] text-white p-8 rounded-2xl shadow-xl text-center">
              <Clock className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg leading-relaxed">{t('strategy_outro')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach Section with 3D Cards */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933]">{t('approach_title')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t('approach_items').map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-[#0F7A4A] to-[#159F61] text-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(15,122,74,0.3)] transition-all duration-500"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <span className="text-2xl font-bold opacity-40">{i + 1}</span>
                </div>
                <p className="text-base leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="relative bg-gradient-to-br from-[#fa7f05] via-[#e89848] to-[#e08931] rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
            </div>
            <div className="relative z-10 p-12 text-center text-white">
              <Award className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('commitment_title')}</h2>
              <p className="text-lg leading-relaxed max-w-4xl mx-auto">{t('commitment_text')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section with 3D Cards */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933]">{t('team_title')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const Icon = member.icon;
              const displayTitle = member.key === 'md' ? member.name : member.title;
              const displaySubtitle = member.key === 'md' ? `(${member.title})` : member.name;
              
              return (
                <motion.div
                  key={member.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(15,122,74,0.15)] transition-all duration-500 flex flex-col"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={member.image}
                      alt={member.name || member.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4" style={{ backgroundColor: `${member.color}20` }}>
                        <Icon className="h-8 w-8" style={{ color: member.color }} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1F2933] mb-2">{displayTitle}</h3>
                      {displaySubtitle && (
                        <p className="text-lg font-medium text-[#52606D]">
                          {displaySubtitle}
                        </p>
                      )}
                    </div>
                    <div className="mt-auto">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveProfile(member)}
                        className="w-full py-3 px-4 rounded-xl font-semibold text-base text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                        style={{ backgroundColor: member.color }}
                      >
                        <Eye className="h-5 w-5" />
                        {t('view_profile')}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal with Enhanced Design */}
      <AnimatePresence>
        {activeProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveProfile(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${activeProfile.color}20` }}>
                      {React.createElement(activeProfile.icon, { className: 'h-6 w-6', style: { color: activeProfile.color } })}
                    </div>
                    <h3 className="text-2xl font-bold text-[#1F2933]">{activeProfile.title}</h3>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setActiveProfile(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </motion.button>
                </div>
                {(activeProfile.popupName !== undefined ? activeProfile.popupName : activeProfile.name) && (
                  <p className="text-lg font-semibold mb-6" style={{ color: activeProfile.color }}>
                    {activeProfile.popupName !== undefined ? activeProfile.popupName : activeProfile.name}
                  </p>
                )}
                <div className="space-y-4">
                  {activeProfile.descriptions.map((desc, i) => (
                    <p key={i} className="text-base text-[#52606D] leading-relaxed">{desc}</p>
                  ))}
                </div>
                {activeProfile.highlightType === 'quote' ? (
                  <blockquote className="border-l-4 border-[#F39C12] pl-6 py-4 italic text-base font-bold mt-6 bg-[#F39C12]/5 rounded-r-xl">
                    "{activeProfile.highlight}"
                  </blockquote>
                ) : (
                  <p className="text-base font-semibold mt-6 p-4 rounded-xl" style={{ color: activeProfile.color, backgroundColor: `${activeProfile.color}10` }}>
                    {activeProfile.highlight}
                  </p>
                )}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveProfile(null)}
                  className="mt-8 w-full py-4 rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ backgroundColor: activeProfile.color }}
                >
                  {t('close')}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;