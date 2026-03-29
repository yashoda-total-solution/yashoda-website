import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Briefcase, FileText, AlertCircle, Shield, CheckCircle, 
  ArrowRight, HelpCircle, Users, Phone, Target, ClipboardCheck 
} from 'lucide-react';

const PFAccidentalInsurance = () => {
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
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center space-x-2 mb-6">
              <Link to="/" className="text-white/80 hover:text-white text-sm">{t('pf_title_backlink1')}</Link>
              <span className="text-white/60">/</span>
              <span className="text-white text-sm">{t('pf_title_backlink2')}</span>
            </div>
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-[#F39C12] rounded-2xl flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                {t('pf_title')}
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              {t('pf_description')}
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}></div>
      </section>

      {/* Service Overview Section */}
      <section className="relative -mt-16 z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-6">
              {t('what_pf_title')}
            </h2>
            <div className="prose prose-lg max-w-none text-[#52606D]">
              <p className="leading-relaxed mb-4">{t('what_pf_description')}</p>
              <p className="leading-relaxed mb-4">{t('what_pf_description1')}</p>
              <p className="leading-relaxed mb-4">{t('what_pf_description2')}</p>
              <p className="leading-relaxed mb-4">
                <strong>{t('what_pf_description3')}</strong> {t('what_pf_description4')}
              </p>
              <p className="leading-relaxed mb-4">
                <strong>{t('what_pf_key_features')}</strong>
              </p>
              <ul className="space-y-3 ml-6">
                <li>{t('what_pf_key_feature1')}</li>
                <li>{t('what_pf_key_feature2')}</li>
                <li>{t('what_pf_key_feature3')}</li>
                <li>{t('what_pf_key_feature4')}</li>
                <li>{t('what_pf_key_feature5')}</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Challenges Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              {t('common_challenges_pf_title')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('common_challenges_pf_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertCircle,
                title: t('common_challenges_pf_item1'),
                desc: t('common_challenges_pf_desc1'),
                color: 'bg-red-50',
                iconBg: 'bg-red-600'
              },
              {
                icon: HelpCircle,
                title: t('common_challenges_pf_item2'),
                desc: t('common_challenges_pf_desc2'),
                color: 'bg-orange-50',
                iconBg: 'bg-orange-600'
              },
              {
                icon: FileText,
                title: t('common_challenges_pf_item3'),
                desc: t('common_challenges_pf_desc3'),
                color: 'bg-blue-50',
                iconBg: 'bg-blue-600'
              },
              {
                icon: ClipboardCheck,
                title: t('common_challenges_pf_item4'),
                desc: t('common_challenges_pf_desc4'),
                color: 'bg-purple-50',
                iconBg: 'bg-purple-600'
              },
              {
                icon: Target,
                title: t('common_challenges_pf_item5'),
                desc: t('common_challenges_pf_desc5'),
                color: 'bg-green-50',
                iconBg: 'bg-green-600'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${item.color} rounded-2xl p-8`}
              >
                <div className={`w-16 h-16 ${item.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1F2933] mb-3">{item.title}</h3>
                <p className="text-base text-[#52606D] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Actually Happens Section */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-8 text-center">
              {t('what_happens_after_pf_title')}
            </h2>
            
            <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-[#52606D]">
                <p className="leading-relaxed mb-4">{t('what_happens_after_pf_description')}</p>
                <p className="leading-relaxed mb-4">{t('what_happens_pf_description1')}</p>
                <p className="leading-relaxed mb-4">{t('what_happens_pf_description2')}</p>
                <p className="leading-relaxed mb-4">{t('what_happens_pf_description3')}</p>
                <p className="leading-relaxed mb-4">{t('what_happens_pf_description4')}</p>
                <p className="leading-relaxed mb-4">
                  <strong>{t('what_happens_pf_description5')}</strong>
                </p>
                <ul className="space-y-3 ml-6">
                  <li>{t('what_happens_pf_item1')}</li>
                  <li>{t('what_happens_pf_item2')}</li>
                  <li>{t('what_happens_pf_item3')}</li>
                  <li>{t('what_happens_pf_item4')}</li>
                  <li>{t('what_happens_pf_item5')}</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Example Scenarios Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              {t('ex_scenario_pf_title')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('ex_scenario_pf_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: t('ex_scenario_pf_example1_title'),
                desc: t('ex_scenario_pf_example1_desc'),
                color: 'from-blue-50 to-cyan-50'
              },
              {
                title: t('ex_scenario_pf_example2_title'),
                desc: t('ex_scenario_pf_example2_desc'),
                color: 'from-purple-50 to-pink-50'
              },
              {
                title: t('ex_scenario_pf_example3_title'),
                desc: t('ex_scenario_pf_example3_desc'),
                color: 'from-orange-50 to-red-50'
              },
              {
                title: t('ex_scenario_pf_example4_title'),
                desc: t('ex_scenario_pf_example4_desc'),
                color: 'from-green-50 to-emerald-50'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 border-2 border-white shadow-lg`}
              >
                <h3 className="text-xl font-semibold text-[#1F2933] mb-4">{item.title}</h3>
                <p className="text-base text-[#52606D] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Requirements Section */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-8 text-center">
              {t('documentation_pf_title')}
            </h2>
            
            <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12">
              <p className="text-lg text-[#52606D] leading-relaxed mb-6">
                {t('documentation_pf_description')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {t('documentation_pf_list').map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#0F7A4A] flex-shrink-0 mt-1" />
                    <p className="text-base text-[#52606D]">{requirement}</p>
                  </div>
                ))}
              </div>

              <p className="text-base text-[#52606D] leading-relaxed mb-4">
                {t('documentation_pf_description1')}
              </p>

              <p className="text-base text-[#52606D] leading-relaxed">
                <strong>{t('documentation_pf_description2')}</strong> {t('documentation_pf_description3')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              {t('why_choose_pf_title')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('why_choose_pf_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: t('why_choose_pf_item1'),
                desc: t('why_choose_pf_desc1'),
              },
              {
                icon: Target,
                title: t('why_choose_pf_item2'),
                desc: t('why_choose_pf_desc2'),
              },
              {
                icon: Shield,
                title: t('why_choose_pf_item3'),
                desc: t('why_choose_pf_desc3'),
              },
              {
                icon: ClipboardCheck,
                title: t('why_choose_pf_item4'),
                desc: t('why_choose_pf_desc4'),
              },
              {
                icon: CheckCircle,
                title: t('why_choose_pf_item5'),
                desc: t('why_choose_pf_desc5'),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0F7A4A] to-[#0A5734] rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1F2933] mb-3">{item.title}</h3>
                <p className="text-base text-[#52606D] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              {t('faq_pf_title')}
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: t('faq_pf_q1'),
                answer: t('faq_pf_a1'),
              },
              {
                question: t('faq_pf_q2'),
                answer: t('faq_pf_a2'),
              },
              {
                question: t('faq_pf_q3'),
                answer: t('faq_pf_a3'),
              },
              {
                question: t('faq_pf_q4'),
                answer: t('faq_pf_a4'),
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#0F7A4A] to-[#0A5734] rounded-xl flex items-center justify-center">
                      <HelpCircle className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#1F2933] mb-3">{faq.question}</h3>
                    <p className="text-base text-[#52606D] leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F7A4A] to-[#0A5734] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('cta_pf_title')}
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              {t('cta_pf_description')}
            </p>
            <p className="text-lg text-white/90 mb-8">
              {t('cta_pf_description2')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-[#F39C12] hover:bg-[#E67E22] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              <span>{t('cta_pf_button')}</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PFAccidentalInsurance;