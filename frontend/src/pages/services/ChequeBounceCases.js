import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  CreditCard, FileText, AlertTriangle, Shield, CheckCircle, 
  ArrowRight, HelpCircle, Users, Phone, Target, DollarSign, Clock 
} from 'lucide-react';

/* ─── Structured Data (JSON-LD) ──────────────────────────────────────────── */
const CHEQUE_BOUNCE_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.yashodatotalsolution.in/cheque-bounce-cases/#webpage',
      url: 'https://www.yashodatotalsolution.in/cheque-bounce-cases/',
      name: 'Cheque Bounce Case Help India | Section 138 NI Act Support | Yashoda Total Solution',
      isPartOf: { '@id': 'https://www.yashodatotalsolution.in/#website' },
      description:
        'Get expert help for cheque bounce cases in India. Yashoda Total Solution assists payees and drawer with Section 138 Negotiable Instruments Act cases — legal notice drafting, court filing, recovery support and case follow-up across India.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.yashodatotalsolution.in/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Cheque Bounce Cases',
            item: 'https://www.yashodatotalsolution.in/cheque-bounce-cases/',
          },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://www.yashodatotalsolution.in/cheque-bounce-cases/#service',
      name: 'Cheque Bounce Case Assistance',
      description:
        'Expert assistance for cheque bounce cases under Section 138 of the Negotiable Instruments Act. We help payees with legal notice drafting within 30 days of dishonour, filing complaints in magistrate court, case follow-up, and recovery support for bounced cheque amounts.',
      provider: { '@id': 'https://www.yashodatotalsolution.in/#organization' },
      areaServed: { '@type': 'Country', name: 'India' },
      serviceType: 'Cheque Bounce Legal Case Support',
      url: 'https://www.yashodatotalsolution.in/cheque-bounce-cases/',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What should I do when a cheque bounces?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'When a cheque bounces, you should first get the cheque return memo from your bank, then send a legal notice to the drawer within 30 days of receiving the memo. If payment is not made within 15 days of receiving the notice, you can file a complaint under Section 138 of the Negotiable Instruments Act.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the time limit for filing a cheque bounce case?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A legal notice must be sent within 30 days of receiving the cheque return memo from the bank. After the drawer fails to pay within 15 days of receiving the notice, you have one month to file the complaint in court.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the punishment for cheque bounce in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under Section 138 of the Negotiable Instruments Act, cheque bounce is a criminal offence punishable with imprisonment up to two years, or a fine which may extend to twice the amount of the bounced cheque, or both.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a cheque bounce case be settled out of court?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, cheque bounce cases can be settled out of court through negotiation if the drawer agrees to pay the full amount with any applicable compensation. Out-of-court settlement is generally faster and avoids lengthy litigation.',
          },
        },
      ],
    },
  ],
};

const ChequeBounceCases = () => {
  const { t } = useLanguage();

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  };

  return (
    <div className="min-h-screen bg-[#F5F7F9]">

      {/* ── React Helmet SEO ──────────────────────────────────────────────── */}
      <Helmet prioritizeSeoTags>
        {/* Primary */}
        <title>Cheque Bounce Case Help India | Section 138 NI Act Support | Yashoda Total Solution</title>
        <meta
          name="description"
          content="Cheque bounced? Yashoda Total Solution provides expert help for cheque bounce cases under Section 138 NI Act — legal notice drafting, court filing, recovery support & case follow-up. Free consultation across India. Call now."
        />
        <meta
          name="keywords"
          content="cheque bounce case India, Section 138 NI Act case help, cheque dishonour legal notice India, cheque bounce complaint filing, cheque bounce recovery India, negotiable instruments act case Mumbai, cheque bounce case lawyer India, cheque return memo legal notice, cheque bounce punishment India"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Yashoda Total Solution" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.yashodatotalsolution.in/cheque-bounce-cases/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yashodatotalsolution.in/cheque-bounce-cases/" />
        <meta property="og:title" content="Cheque Bounce Case Help India | Section 138 NI Act Support | Yashoda Total Solution" />
        <meta
          property="og:description"
          content="Cheque bounced? We help you send legal notices, file Section 138 NI Act complaints, follow up in court and recover your money. Expert cheque bounce case support across India."
        />
        <meta property="og:image" content="https://www.yashodatotalsolution.in/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Cheque Bounce Case Help – Yashoda Total Solution" />
        <meta property="og:site_name" content="Yashoda Total Solution" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter / X Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cheque Bounce Case Help India | Section 138 NI Act Support | Yashoda Total Solution" />
        <meta
          name="twitter:description"
          content="Cheque bounced? We help you send legal notices, file Section 138 NI Act complaints and recover your money. Expert support across India."
        />
        <meta name="twitter:image" content="https://www.yashodatotalsolution.in/og-image.jpg" />
        <meta name="twitter:image:alt" content="Cheque Bounce Case Help – Yashoda Total Solution" />

        {/* Geo & Region */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai, Maharashtra, India" />
        <meta name="geo.position" content="19.0722;72.8797" />
        <meta name="ICBM" content="19.0722, 72.8797" />

        {/* Structured Data JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(CHEQUE_BOUNCE_STRUCTURED_DATA)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] text-white py-20 md:py-32"
        aria-labelledby="cheque-hero-heading"
      >
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute inset-0"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <nav className="flex items-center space-x-2 mb-6" aria-label="Breadcrumb">
              <Link to="/" className="text-white/80 hover:text-white text-sm">
                {t('cheque_title_backlink1')}
              </Link>
              <span className="text-white/60" aria-hidden="true">/</span>
              <span className="text-white text-sm" aria-current="page">
                {t('cheque_title_backlink2')}
              </span>
            </nav>

            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-[#F39C12] rounded-2xl flex items-center justify-center flex-shrink-0">
                <CreditCard className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <h1
                id="cheque-hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold"
              >
                {t('cheque_title')}
              </h1>
            </div>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              {t('cheque_description')}
            </p>
          </motion.div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]"
          style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}
          aria-hidden="true"
        />
      </section>

      {/* Service Overview Section */}
      <section
        className="relative -mt-16 z-10 py-16 md:py-24"
        aria-labelledby="overview-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12"
          >
            <h2
              id="overview-heading"
              className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-6"
            >
              {t('what_cheque_title')}
            </h2>
            <div className="prose prose-lg max-w-none text-[#52606D]">
              <p className="leading-relaxed mb-4">{t('what_cheque_description')}</p>
              <p className="leading-relaxed mb-4">{t('what_cheque_description1')}</p>
              <p className="leading-relaxed mb-4">{t('what_cheque_description2')}</p>
              <p className="leading-relaxed mb-4">
                <strong>{t('what_cheque_description3')}</strong>{' '}
                {t('what_cheque_description4')}
              </p>
              <p className="leading-relaxed mb-4">
                <strong>{t('what_cheque_key_features')}</strong>
              </p>
              <ul className="space-y-3 ml-6" role="list">
                <li>{t('what_cheque_key_feature1')}</li>
                <li>{t('what_cheque_key_feature2')}</li>
                <li>{t('what_cheque_key_feature3')}</li>
                <li>{t('what_cheque_key_feature4')}</li>
                <li>{t('what_cheque_key_feature5')}</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Indicators Section */}
      <section
        className="py-16 md:py-24 bg-white"
        aria-labelledby="indicators-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2
              id="indicators-heading"
              className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4"
            >
              {t('common_indicators_cheque_title')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('common_indicators_cheque_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CreditCard,
                title: t('common_indicators_cheque_item1'),
                desc: t('common_indicators_cheque_desc1'),
                color: 'bg-red-50',
                iconBg: 'bg-red-600'
              },
              {
                icon: FileText,
                title: t('common_indicators_cheque_item2'),
                desc: t('common_indicators_cheque_desc2'),
                color: 'bg-orange-50',
                iconBg: 'bg-orange-600'
              },
              {
                icon: Clock,
                title: t('common_indicators_cheque_item3'),
                desc: t('common_indicators_cheque_desc3'),
                color: 'bg-blue-50',
                iconBg: 'bg-blue-600'
              },
              {
                icon: AlertTriangle,
                title: t('common_indicators_cheque_item4'),
                desc: t('common_indicators_cheque_desc4'),
                color: 'bg-purple-50',
                iconBg: 'bg-purple-600'
              },
              {
                icon: Target,
                title: t('common_indicators_cheque_item5'),
                desc: t('common_indicators_cheque_desc5'),
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
                  <item.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-[#1F2933] mb-3">{item.title}</h3>
                <p className="text-base text-[#52606D] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        className="py-16 md:py-24 bg-[#F5F7F9]"
        aria-labelledby="why-choose-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2
              id="why-choose-heading"
              className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4"
            >
              {t('why_choose_cheque_title')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('why_choose_cheque_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: t('why_choose_cheque_item1'),
                desc: t('why_choose_cheque_desc1'),
              },
              {
                icon: Target,
                title: t('why_choose_cheque_item2'),
                desc: t('why_choose_cheque_desc2'),
              },
              {
                icon: Shield,
                title: t('why_choose_cheque_item3'),
                desc: t('why_choose_cheque_desc3'),
              },
              {
                icon: CheckCircle,
                title: t('why_choose_cheque_item4'),
                desc: t('why_choose_cheque_desc4'),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0F7A4A] to-[#0A5734] rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-[#1F2933] mb-3">{item.title}</h3>
                <p className="text-base text-[#52606D] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section
        className="py-16 md:py-24 bg-white"
        aria-labelledby="process-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2
              id="process-heading"
              className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4"
            >
              {t('process_cheque_title')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('process_cheque_description')}
            </p>
          </motion.div>

          <div className="relative">
            <div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0F7A4A] to-[#F39C12]"
              aria-hidden="true"
            />

            <div className="space-y-12">
              {[
                {
                  step: '1',
                  title: t('process_cheque_step1_title'),
                  desc: t('process_cheque_step1_desc')
                },
                {
                  step: '2',
                  title: t('process_cheque_step2_title'),
                  desc: t('process_cheque_step2_desc')
                },
                {
                  step: '3',
                  title: t('process_cheque_step3_title'),
                  desc: t('process_cheque_step3_desc')
                },
                {
                  step: '4',
                  title: t('process_cheque_step4_title'),
                  desc: t('process_cheque_step4_desc')
                },
                {
                  step: '5',
                  title: t('process_cheque_step5_title'),
                  desc: t('process_cheque_step5_desc')
                },
                {
                  step: '6',
                  title: t('process_cheque_step6_title'),
                  desc: t('process_cheque_step6_desc')
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={index % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12'}>
                    <div className="bg-gradient-to-br from-[#0F7A4A] to-[#0A5734] text-white rounded-2xl p-8 shadow-xl">
                      <div className="flex items-center space-x-4 mb-4">
                        <div
                          className="w-12 h-12 bg-[#F39C12] rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0"
                          aria-label={`Step ${item.step}`}
                        >
                          {item.step}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold flex-1">{item.title}</h3>
                      </div>
                      <p className="text-base text-white/90 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div
                    className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#F39C12] rounded-full border-4 border-white shadow-lg z-10"
                    aria-hidden="true"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Example Scenarios Section */}
      <section
        className="py-16 md:py-24 bg-[#F5F7F9]"
        aria-labelledby="scenarios-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2
              id="scenarios-heading"
              className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4"
            >
              {t('ex_scenario_cheque_title')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('ex_scenario_cheque_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: t('ex_scenario_cheque_case1_title'),
                problem: t('ex_scenario_cheque_case1_problem'),
                reality: t('ex_scenario_cheque_case1_reality'),
                solution: t('ex_scenario_cheque_case1_solution')
              },
              {
                title: t('ex_scenario_cheque_case2_title'),
                problem: t('ex_scenario_cheque_case2_problem'),
                reality: t('ex_scenario_cheque_case2_reality'),
                solution: t('ex_scenario_cheque_case2_solution')
              },
              {
                title: t('ex_scenario_cheque_case3_title'),
                problem: t('ex_scenario_cheque_case3_problem'),
                reality: t('ex_scenario_cheque_case3_reality'),
                solution: t('ex_scenario_cheque_case3_solution')
              },
              {
                title: t('ex_scenario_cheque_case4_title'),
                problem: t('ex_scenario_cheque_case4_problem'),
                reality: t('ex_scenario_cheque_case4_reality'),
                solution: t('ex_scenario_cheque_case4_solution')
              },
            ].map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
                itemScope
                itemType="https://schema.org/Article"
              >
                <h3
                  className="text-xl font-bold text-[#1F2933] mb-4 flex items-center"
                  itemProp="headline"
                >
                  <span
                    className="w-8 h-8 bg-[#F39C12] text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold flex-shrink-0"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  {scenario.title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-red-600 mb-2">
                      {t('ex_scenario_cheque_problem_label')}
                    </h4>
                    <p className="text-sm text-[#52606D] leading-relaxed">{scenario.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-orange-600 mb-2">
                      {t('ex_scenario_cheque_reality_label')}
                    </h4>
                    <p className="text-sm text-[#52606D] leading-relaxed">{scenario.reality}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-green-600 mb-2">
                      {t('ex_scenario_cheque_solution_label')}
                    </h4>
                    <p className="text-sm text-[#52606D] leading-relaxed">{scenario.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-16 md:py-24 bg-white"
        aria-labelledby="faqs-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2
              id="faqs-heading"
              className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4"
            >
              {t('faq_cheque_title')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('faq_cheque_description')}
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              { question: t('faq_cheque_q1'), answer: t('faq_cheque_a1') },
              { question: t('faq_cheque_q2'), answer: t('faq_cheque_a2') },
              { question: t('faq_cheque_q3'), answer: t('faq_cheque_a3') },
              { question: t('faq_cheque_q4'), answer: t('faq_cheque_a4') },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F5F7F9] rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                itemScope
                itemType="https://schema.org/Question"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#0F7A4A] rounded-full flex items-center justify-center">
                      <HelpCircle className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-lg font-semibold text-[#1F2933] mb-2"
                      itemProp="name"
                    >
                      {faq.question}
                    </h3>
                    <div
                      itemScope
                      itemType="https://schema.org/Answer"
                      itemProp="acceptedAnswer"
                    >
                      <p
                        className="text-base text-[#52606D] leading-relaxed"
                        itemProp="text"
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
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
        aria-labelledby="cta-heading"
      >
        <div className="absolute inset-0 opacity-10" aria-hidden="true" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="w-20 h-20 bg-[#F39C12] rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="h-10 w-10 text-white" aria-hidden="true" />
            </div>
            <h2
              id="cta-heading"
              className="text-3xl md:text-5xl font-bold text-white"
            >
              {t('cta_cheque_title')}
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t('cta_cheque_description')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-[#F39C12] hover:bg-[#d68910] text-white px-12 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(243,156,18,0.5)]"
                  aria-label="Get free consultation for cheque bounce case"
                >
                  {t('cta_cheque_button1')}
                  <ArrowRight className="ml-2 h-6 w-6" aria-hidden="true" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="tel:+919649647790"
                  className="inline-flex items-center justify-center bg-white text-[#0F7A4A] px-12 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)]"
                  aria-label="Call Yashoda Total Solution now"
                >
                  <Phone className="mr-2 h-6 w-6" aria-hidden="true" />
                  {t('cta_cheque_button2')}
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
};

export default ChequeBounceCases;