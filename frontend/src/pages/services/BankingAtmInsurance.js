import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  CreditCard, FileText, AlertCircle, Shield, CheckCircle, 
  ArrowRight, HelpCircle, Users, Phone, Target, TrendingUp 
} from 'lucide-react';

/* ─── Structured Data (JSON-LD) ──────────────────────────────────────────── */
const ATM_INSURANCE_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.yashodatotalsolution.in/banking-atm-insurance/#webpage',
      url: 'https://www.yashodatotalsolution.in/banking-atm-insurance/',
      name: 'Banking & ATM Card Insurance Claim Help India | Yashoda Total Solution',
      isPartOf: { '@id': 'https://www.yashodatotalsolution.in/#website' },
      description:
        'Get expert help with ATM card and debit card insurance claims in India. Yashoda Total Solution assists beneficiaries with eligibility verification, document collection, and claim submission to bank for accidental insurance linked to ATM or debit cards.',
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
            name: 'Banking & ATM Card Insurance Claim',
            item: 'https://www.yashodatotalsolution.in/banking-atm-insurance/',
          },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://www.yashodatotalsolution.in/banking-atm-insurance/#service',
      name: 'Banking & ATM Card Insurance Claim Assistance',
      description:
        'Expert assistance for ATM card and debit card insurance claims. We help beneficiaries verify eligibility, collect required documents, complete claim forms, and submit to bank for accidental insurance coverage linked to ATM or debit cards.',
      provider: { '@id': 'https://www.yashodatotalsolution.in/#organization' },
      areaServed: { '@type': 'Country', name: 'India' },
      serviceType: 'ATM Card Accidental Insurance Claim Support',
      url: 'https://www.yashodatotalsolution.in/banking-atm-insurance/',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is ATM card insurance coverage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Some banks provide insurance benefits linked to ATM or debit cards for certain eligible incidents such as accidental death or disability. Cardholders are often automatically enrolled when the card is issued.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who can claim ATM card insurance benefits?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Beneficiaries of the cardholder may be eligible to claim ATM card insurance benefits depending on the policy conditions set by the bank and insurance provider.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can someone know if their ATM card includes insurance coverage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The bank or card issuing institution can confirm whether insurance coverage is linked to the ATM or debit card. Beneficiaries can contact the bank directly to verify coverage details.',
          },
        },
        {
          '@type': 'Question',
          name: 'What documents are required for ATM card insurance claims?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Required documents typically include identity verification, proof of the eligible incident, ATM or debit card details, bank account information, and completed claim application forms.',
          },
        },
      ],
    },
  ],
};

const BankingAtmInsurance = () => {
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
        <title>Banking & ATM Card Insurance Claim Help India | Yashoda Total Solution</title>
        <meta
          name="description"
          content="Did you know your ATM or debit card may include accident insurance? Yashoda Total Solution helps beneficiaries verify eligibility, collect documents & file ATM card insurance claims with their bank. Free consultation across India."
        />
        <meta
          name="keywords"
          content="ATM card insurance claim India, debit card accident insurance claim, bank ATM card insurance benefit, ATM card accidental death insurance, debit card insurance beneficiary claim, banking insurance claim help Mumbai, ATM card insurance documents, bank linked insurance claim India"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Yashoda Total Solution" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.yashodatotalsolution.in/banking-atm-insurance/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yashodatotalsolution.in/banking-atm-insurance/" />
        <meta property="og:title" content="Banking & ATM Card Insurance Claim Help India | Yashoda Total Solution" />
        <meta
          property="og:description"
          content="Your ATM or debit card may include accident insurance you don't know about. We help beneficiaries verify eligibility, collect documents and file ATM card insurance claims across India."
        />
        <meta property="og:image" content="https://www.yashodatotalsolution.in/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Banking & ATM Card Insurance Claim Help – Yashoda Total Solution" />
        <meta property="og:site_name" content="Yashoda Total Solution" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter / X Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Banking & ATM Card Insurance Claim Help India | Yashoda Total Solution" />
        <meta
          name="twitter:description"
          content="Your ATM or debit card may include accident insurance you don't know about. We help beneficiaries verify eligibility, collect documents and file claims across India."
        />
        <meta name="twitter:image" content="https://www.yashodatotalsolution.in/og-image.jpg" />
        <meta name="twitter:image:alt" content="Banking & ATM Card Insurance Claim Help – Yashoda Total Solution" />

        {/* Geo & Region */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai, Maharashtra, India" />
        <meta name="geo.position" content="19.0722;72.8797" />
        <meta name="ICBM" content="19.0722, 72.8797" />

        {/* Structured Data JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(ATM_INSURANCE_STRUCTURED_DATA)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] text-white py-20 md:py-32"
        aria-labelledby="atm-hero-heading"
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
                {t('atm_title_backlink1')}
              </Link>
              <span className="text-white/60" aria-hidden="true">/</span>
              <span className="text-white text-sm" aria-current="page">
                {t('atm_title_backlink2')}
              </span>
            </nav>

            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-[#F39C12] rounded-2xl flex items-center justify-center flex-shrink-0">
                <CreditCard className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <h1
                id="atm-hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold"
              >
                {t('atm_title')}
              </h1>
            </div>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              {t('atm_description')}
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
              {t('what_atm_title')}
            </h2>
            <div className="prose prose-lg max-w-none text-[#52606D]">
              <p className="leading-relaxed mb-4">{t('what_atm_description')}</p>
              <p className="leading-relaxed mb-4">{t('what_atm_description1')}</p>
              <p className="leading-relaxed mb-4">{t('what_atm_description2')}</p>
              <p className="leading-relaxed mb-4">
                <strong>{t('what_atm_description3')}</strong>{' '}
                {t('what_atm_description4')}
              </p>
              <p className="leading-relaxed mb-4">
                <strong>{t('what_atm_key_features')}</strong>
              </p>
              <ul className="space-y-3 ml-6" role="list">
                <li>{t('what_atm_key_feature1')}</li>
                <li>{t('what_atm_key_feature2')}</li>
                <li>{t('what_atm_key_feature3')}</li>
                <li>{t('what_atm_key_feature4')}</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Challenges Section */}
      <section
        className="py-16 md:py-24 bg-white"
        aria-labelledby="challenges-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2
              id="challenges-heading"
              className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4"
            >
              {t('common_challenges_atm_title')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('common_challenges_atm_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertCircle,
                title: t('common_challenges_atm_item1'),
                desc: t('common_challenges_atm_desc1'),
                color: 'bg-red-50',
                iconBg: 'bg-red-600'
              },
              {
                icon: HelpCircle,
                title: t('common_challenges_atm_item2'),
                desc: t('common_challenges_atm_desc2'),
                color: 'bg-orange-50',
                iconBg: 'bg-orange-600'
              },
              {
                icon: FileText,
                title: t('common_challenges_atm_item3'),
                desc: t('common_challenges_atm_desc3'),
                color: 'bg-blue-50',
                iconBg: 'bg-blue-600'
              },
              {
                icon: Target,
                title: t('common_challenges_atm_item4'),
                desc: t('common_challenges_atm_desc4'),
                color: 'bg-purple-50',
                iconBg: 'bg-purple-600'
              },
              {
                icon: TrendingUp,
                title: t('common_challenges_atm_item5'),
                desc: t('common_challenges_atm_desc5'),
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

      {/* What Actually Happens Section */}
      <section
        className="py-16 md:py-24 bg-[#F5F7F9]"
        aria-labelledby="what-happens-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <h2
              id="what-happens-heading"
              className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-8 text-center"
            >
              {t('what_happens_after_atm_title')}
            </h2>

            <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-[#52606D]">
                <p className="leading-relaxed mb-4">{t('what_happens_after_atm_description')}</p>
                <p className="leading-relaxed mb-4">{t('what_happens_atm_description1')}</p>
                <p className="leading-relaxed mb-4">{t('what_happens_atm_description2')}</p>
                <p className="leading-relaxed mb-4">{t('what_happens_atm_description3')}</p>
                <p className="leading-relaxed mb-4">
                  <strong>{t('what_happens_atm_description4')}</strong>
                </p>
                <ul className="space-y-3 ml-6" role="list">
                  <li>{t('what_happens_atm_item1')}</li>
                  <li>{t('what_happens_atm_item2')}</li>
                  <li>{t('what_happens_atm_item3')}</li>
                  <li>{t('what_happens_atm_item4')}</li>
                  <li>{t('what_happens_atm_item5')}</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Example Scenarios Section */}
      <section
        className="py-16 md:py-24 bg-white"
        aria-labelledby="scenarios-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2
              id="scenarios-heading"
              className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4"
            >
              {t('ex_scenario_atm_title')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('ex_scenario_atm_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: t('ex_scenario_atm_example1_title'),
                desc: t('ex_scenario_atm_example1_desc'),
                color: 'from-blue-50 to-cyan-50'
              },
              {
                title: t('ex_scenario_atm_example2_title'),
                desc: t('ex_scenario_atm_example2_desc'),
                color: 'from-purple-50 to-pink-50'
              },
              {
                title: t('ex_scenario_atm_example3_title'),
                desc: t('ex_scenario_atm_example3_desc'),
                color: 'from-orange-50 to-red-50'
              },
              {
                title: t('ex_scenario_atm_example4_title'),
                desc: t('ex_scenario_atm_example4_desc'),
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
                itemScope
                itemType="https://schema.org/Article"
              >
                <h3
                  className="text-xl font-semibold text-[#1F2933] mb-4"
                  itemProp="headline"
                >
                  {item.title}
                </h3>
                <p className="text-base text-[#52606D] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Requirements Section */}
      <section
        className="py-16 md:py-24 bg-[#F5F7F9]"
        aria-labelledby="documentation-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <h2
              id="documentation-heading"
              className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-8 text-center"
            >
              {t('documentation_atm_title')}
            </h2>

            <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12">
              <p className="text-lg text-[#52606D] leading-relaxed mb-6">
                {t('documentation_atm_description')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {t('documentation_atm_list').map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle
                      className="h-6 w-6 text-[#0F7A4A] flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <p className="text-base text-[#52606D]">{requirement}</p>
                  </div>
                ))}
              </div>

              <p className="text-base text-[#52606D] leading-relaxed mb-4">
                {t('documentation_atm_description1')}
              </p>

              <p className="text-base text-[#52606D] leading-relaxed">
                <strong>{t('documentation_atm_description2')}</strong>{' '}
                {t('documentation_atm_description3')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        className="py-16 md:py-24 bg-white"
        aria-labelledby="why-choose-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2
              id="why-choose-heading"
              className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4"
            >
              {t('why_choose_atm_title')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('why_choose_atm_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: t('why_choose_atm_item1'),
                desc: t('why_choose_atm_desc1')
              },
              {
                icon: TrendingUp,
                title: t('why_choose_atm_item2'),
                desc: t('why_choose_atm_desc2')
              },
              {
                icon: Shield,
                title: t('why_choose_atm_item3'),
                desc: t('why_choose_atm_desc3')
              },
              {
                icon: Target,
                title: t('why_choose_atm_item4'),
                desc: t('why_choose_atm_desc4')
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
                  <item.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-[#1F2933] mb-3">{item.title}</h3>
                <p className="text-base text-[#52606D] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-16 md:py-24 bg-[#F5F7F9]"
        aria-labelledby="faqs-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2
              id="faqs-heading"
              className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4"
            >
              {t('faq_atm_title')}
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              { question: t('faq_atm_q1'), answer: t('faq_atm_a1') },
              { question: t('faq_atm_q2'), answer: t('faq_atm_a2') },
              { question: t('faq_atm_q3'), answer: t('faq_atm_a3') },
              { question: t('faq_atm_q4'), answer: t('faq_atm_a4') },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
                itemScope
                itemType="https://schema.org/Question"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#0F7A4A] to-[#0A5734] rounded-xl flex items-center justify-center">
                      <HelpCircle className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-lg font-semibold text-[#1F2933] mb-3"
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

      {/* Final CTA Section */}
      <section
        className="py-16 md:py-24 bg-gradient-to-br from-[#0F7A4A] to-[#0A5734] text-white"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              id="cta-heading"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              {t('cta_atm_title')}
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              {t('cta_atm_description')}
            </p>
            <p className="text-lg text-white/90 mb-8">
              {t('cta_atm_description2')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-[#F39C12] hover:bg-[#E67E22] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              aria-label="Contact Yashoda Total Solution for ATM card insurance claim help"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span>{t('cta_atm_button')}</span>
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default BankingAtmInsurance;