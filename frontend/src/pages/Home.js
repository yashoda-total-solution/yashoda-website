import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, FileCheck, Banknote, Landmark, FileText, Users, CheckCircle, Phone, ArrowRight, Star, Award, Clock, Lock, HeartHandshake, Target, TrendingUp, Zap, Eye } from 'lucide-react';

const Home = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1739298061766-e2751d92e9db?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBoYW5kc2hha2UlMjBvZmZpY2UlMjB0ZWFtd29ya3xlbnwwfHx8fDE3NzM0NTkyNTB8MA&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1758599543129-5269a8f29e68?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBoYW5kc2hha2UlMjBvZmZpY2UlMjB0ZWFtd29ya3xlbnwwfHx8fDE3NzM0NTkyNTB8MA&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1758518731290-a9eb64660ead?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBoYW5kc2hha2UlMjBvZmZpY2UlMjB0ZWFtd29ya3xlbnwwfHx8fDE3NzM0NTkyNTB8MA&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1758518729240-7162d07427b8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBoYW5kc2hha2UlMjBvZmZpY2UlMjB0ZWFtd29ya3xlbnwwfHx8fDE3NzM0NTkyNTB8MA&ixlib=rb-4.1.0&q=85"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] text-white">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              {...fadeUp}
              className="text-left space-y-6 z-10"
            >
              <h1 className="text-3xl md:text-4xl font-bold leading-tight" data-testid="hero-headline">
                Helping Policyholders take control of their insurance and resolve issues quickly.
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed" data-testid="hero-subtext">
                Yashoda Total Solutions (Service Provider) assists individuals with insurance claims, disputes, and legal matters; to this end, it provides clear, step-by-step guidance in simple language, enabling clients to easily understand the entire process.
              </p>
              <div className="pt-4">
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

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-6 pt-8"
              >
                <div className="flex items-center space-x-2 text-white/80">
                  <CheckCircle className="h-5 w-5 text-[#F39C12]" />
                  <span className="text-sm font-medium">100% Confidential</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Shield className="h-5 w-5 text-[#F39C12]" />
                  <span className="text-sm font-medium">Trusted Service</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Award className="h-5 w-5 text-[#F39C12]" />
                  <span className="text-sm font-medium">Expert Team</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image Carousel with 3D Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block relative"
            >
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-72 h-72 bg-[#F39C12] rounded-3xl opacity-20 blur-3xl"></div>
                <motion.div
                  whileHover={{ rotateY: 5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-2 shadow-2xl overflow-hidden"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="relative overflow-hidden rounded-2xl" style={{ height: '400px' }}>
                    <AnimatePresence initial={false} mode="popLayout">
                      <motion.img
                        key={currentImageIndex}
                        src={heroImages[currentImageIndex]}
                        alt="Professional Service"
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl shadow-2xl"
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{
                          x: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2 }
                        }}
                      />
                    </AnimatePresence>
                    
                    {/* Image indicators - positioned over the image */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                      {heroImages.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentImageIndex ? 'bg-[#F39C12] w-6' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}></div>
      </section>

      {/* Stats Section */}
      <motion.section
        {...fadeUp}
        className="relative -mt-16 z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Happy Clients', icon: Users },
                { number: '95%', label: 'Success Rate', icon: TrendingUp },
                { number: '24/7', label: 'Support', icon: Clock },
                { number: '100%', label: 'Secure', icon: Lock },
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

      {/* About Section with 3D Cards */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]" data-testid="about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4">
              {t('about_title')}
            </h2>
            <p className="text-lg text-[#52606D] leading-relaxed max-w-3xl mx-auto">
              {t('about_desc')}
            </p>
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

      {/* Problems Section with Bento Grid */}
      <section className="py-16 md:py-24 bg-white" data-testid="problems-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4">
              {t('problems_title')}
            </h2>
            <p className="text-lg text-[#F39C12] font-semibold">
              {t('problems_subtitle')}
            </p>
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

      {/* Why Choose Us Section with Animated Numbers */}
      <section className="py-16 md:py-24 bg-white" data-testid="why-choose-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4">
              Why Choose Yashoda Total Solution?
            </h2>
            <p className="text-lg text-[#52606D] max-w-3xl mx-auto">
              We deliver professional, transparent, and customer-focused service excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Experienced & Professional Team', 
                desc: 'Qualified professionals with industry knowledge and operational expertise.', 
                icon: Award 
              },
              { 
                title: 'Quick & Transparent Processing', 
                desc: 'Systematic workflows supported by clear communication and monitoring.', 
                icon: Zap 
              },
              { 
                title: 'Customer-First Approach', 
                desc: 'Every case handled with attention, empathy, and ethical responsibility.', 
                icon: HeartHandshake 
              },
              { 
                title: 'Technology-Driven Monitoring', 
                desc: 'Advanced tracking systems ensure accountability and regular updates.', 
                icon: Eye 
              },
              { 
                title: 'Trusted Service Partner', 
                desc: 'Focused on long-term relationships built on trust, reliability, and service excellence.', 
                icon: Shield 
              },
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

      {/* Testimonials Section with 3D Cards */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F5F7F9] to-white" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4">
              {t('testimonials_title')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('testimonials_subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: t('testimonial1_text'), name: t('testimonial1_name'), location: t('testimonial1_location') },
              { text: t('testimonial2_text'), name: t('testimonial2_name'), location: t('testimonial2_location') },
              { text: t('testimonial3_text'), name: t('testimonial3_name'), location: t('testimonial3_location') },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, rotateY: 5 }}
                data-testid={`testimonial-card-${index + 1}`}
                className="relative bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(15,122,74,0.15)] transition-all duration-500"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute top-4 left-4 text-6xl text-[#0F7A4A]/10 font-serif">&ldquo;</div>
                <div className="relative z-10">
                  <div className="flex mb-4 justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-[#F39C12] fill-current" />
                    ))}
                  </div>
                  <p className="text-base text-[#52606D] leading-relaxed mb-6 italic">
                    {testimonial.text}
                  </p>
                  <div className="border-t-2 border-[#F39C12] pt-4">
                    <p className="text-base font-semibold text-[#1F2933]">{testimonial.name}</p>
                    <p className="text-sm text-[#9AA5B1] flex items-center justify-center mt-1">
                      <span className="w-2 h-2 bg-[#F39C12] rounded-full mr-2"></span>
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section with 3D Effect */}
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
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              {t('cta_title')}
            </h2>
            <p className="text-lg md:text-xl text-white/90">
              {t('cta_subtitle')}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
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