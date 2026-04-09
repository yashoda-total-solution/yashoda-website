import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Clock, FileText, AlertCircle, CheckCircle, Shield, 
  ArrowRight, HelpCircle, Users, Phone, Search
} from 'lucide-react';

/* ─── Structured Data (JSON-LD) ──────────────────────────────────────────── */
const CLAIM_DELAY_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.yashodatotalsolution.in/claim-delay/#webpage',
      url: 'https://www.yashodatotalsolution.in/claim-delay/',
      name: 'Insurance Claim Delay Help India | Yashoda Total Solution',
      isPartOf: { '@id': 'https://www.yashodatotalsolution.in/#website' },
      description:
        'Is your insurance claim taking too long to process? Yashoda Total Solution helps policyholders understand claim processing delays, follow up with insurers, and expedite settlements across India.',
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
            name: 'Delay in Claim Process',
            item: 'https://www.yashodatotalsolution.in/claim-delay/',
          },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://www.yashodatotalsolution.in/claim-delay/#service',
      name: 'Insurance Claim Delay Assistance',
      description:
        'Expert assistance for policyholders facing delays in insurance claim processing. We help track claim status, follow up with insurers, gather missing documents, and escalate when necessary to ensure timely settlement.',
      provider: { '@id': 'https://www.yashodatotalsolution.in/#organization' },
      areaServed: { '@type': 'Country', name: 'India' },
      serviceType: 'Insurance Claim Delay Support',
      url: 'https://www.yashodatotalsolution.in/claim-delay/',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why do insurance claims sometimes take longer than expected?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Claim processing may require document verification, investigation, and policy evaluation, which can extend the processing time depending on the complexity of the case.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does insurance claim processing usually take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The timeline varies depending on the type of claim, required documentation, and policy conditions. Some claims are processed within days, while others may take several weeks.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should policyholders do if their insurance claim is delayed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Review the claim status, ensure all required documents are submitted, and follow up with the insurance company for updates. If the delay is unreasonable, you can escalate to the Insurance Ombudsman.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can insurance claim delays happen even after all documents are submitted?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Sometimes insurance companies conduct additional verification, investigation, or policy review before approving the claim, even when all documents have been submitted.',
          },
        },
      ],
    },
  ],
};

const ClaimDelay = () => {
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
        <title>Insurance Claim Delay Help India | Yashoda Total Solution</title>
        <meta
          name="description"
          content="Is your insurance claim taking too long? Yashoda Total Solution helps policyholders track delayed insurance claims, follow up with insurers, and expedite settlements across India. Free consultation available."
        />
        <meta
          name="keywords"
          content="insurance claim delay India, delayed insurance claim help, insurance claim not settled, claim processing taking long, follow up insurance claim India, insurance claim stuck, expedite insurance settlement, claim delay Mumbai, IRDAI complaint claim delay"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Yashoda Total Solution" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.yashodatotalsolution.in/claim-delay/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yashodatotalsolution.in/claim-delay/" />
        <meta property="og:title" content="Insurance Claim Delay Help India | Yashoda Total Solution" />
        <meta
          property="og:description"
          content="Is your insurance claim stuck or taking too long? We help policyholders understand delay reasons, follow up with insurers, and get claims settled faster. Expert team across India."
        />
        <meta property="og:image" content="https://www.yashodatotalsolution.in/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Insurance Claim Delay Help – Yashoda Total Solution" />
        <meta property="og:site_name" content="Yashoda Total Solution" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter / X Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Insurance Claim Delay Help India | Yashoda Total Solution" />
        <meta
          name="twitter:description"
          content="Is your insurance claim stuck or taking too long? We help policyholders follow up with insurers and get claims settled faster across India."
        />
        <meta name="twitter:image" content="https://www.yashodatotalsolution.in/og-image.jpg" />
        <meta name="twitter:image:alt" content="Insurance Claim Delay Help – Yashoda Total Solution" />

        {/* Geo & Region */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai, Maharashtra, India" />
        <meta name="geo.position" content="19.0722;72.8797" />
        <meta name="ICBM" content="19.0722, 72.8797" />

        {/* Structured Data JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(CLAIM_DELAY_STRUCTURED_DATA)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] text-white py-20 md:py-32"
        aria-labelledby="claim-delay-hero-heading"
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
                {t('claim_delay_title_backlink1')}
              </Link>
              <span className="text-white/60" aria-hidden="true">/</span>
              <span className="text-white text-sm" aria-current="page">
                {t('claim_delay_title_backlink2')}
              </span>
            </nav>

            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-[#F39C12] rounded-2xl flex items-center justify-center flex-shrink-0">
                <Clock className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <h1
                id="claim-delay-hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold"
              >
                {t('claim_delay_title')}
              </h1>
            </div>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              {t('claim_delay_description')}
            </p>
          </motion.div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]"
          style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}
          aria-hidden="true"
        />
      </section>

      {/* What is Claim Delay Section */}
      <section
        className="relative -mt-16 z-10 py-16 md:py-24"
        aria-labelledby="what-is-claim-delay-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12"
          >
            <h2
              id="what-is-claim-delay-heading"
              className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-6"
            >
              {t('what_claim_delay_title')}
            </h2>
            <div className="prose prose-lg max-w-none text-[#52606D]">
              <p className="leading-relaxed mb-4">
                {t('what_claim_delay_description')}
              </p>
              <p className="leading-relaxed mb-4">
                {t('what_claim_delay_description1')}{' '}
                <strong>{t('what_claim_delay_description2')}</strong>
              </p>
              <p className="leading-relaxed mb-4">
                {t('what_claim_delay_description3')}
              </p>
              <p className="leading-relaxed mb-4">
                {t('what_claim_delay_common_reasons')}
              </p>
              <ul className="space-y-3 ml-6" role="list">
                <li>{t('what_claim_delay_common_reasons1')}</li>
                <li>{t('what_claim_delay_common_reasons2')}</li>
                <li>{t('what_claim_delay_common_reasons3')}</li>
                <li>{t('what_claim_delay_common_reasons4')}</li>
                <li>{t('what_claim_delay_common_reasons5')}</li>
                <li>{t('what_claim_delay_common_reasons6')}</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Happens Section */}
      <section
        className="py-16 md:py-24 bg-white"
        aria-labelledby="what-happens-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2
              id="what-happens-heading"
              className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4"
            >
              {t('what_happens_after_claim_delay_title')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('what_happens_after_claim_delay_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Search,
                title: t('what_happens_claim_delay_item1'),
                desc: t('what_happens_claim_delay_desc1'),
                color: 'bg-blue-50',
                iconBg: 'bg-blue-600'
              },
              {
                icon: FileText,
                title: t('what_happens_claim_delay_item2'),
                desc: t('what_happens_claim_delay_desc2'),
                color: 'bg-purple-50',
                iconBg: 'bg-purple-600'
              },
              {
                icon: Shield,
                title: t('what_happens_claim_delay_item3'),
                desc: t('what_happens_claim_delay_desc3'),
                color: 'bg-teal-50',
                iconBg: 'bg-teal-600'
              },
              {
                icon: AlertCircle,
                title: t('what_happens_claim_delay_item4'),
                desc: t('what_happens_claim_delay_desc4'),
                color: 'bg-orange-50',
                iconBg: 'bg-orange-600'
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
              {t('why_choose_claim_delay_title')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('why_choose_claim_delay_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: t('why_choose_claim_delay_item1'),
                desc: t('why_choose_claim_delay_desc1')
              },
              {
                icon: FileText,
                title: t('why_choose_claim_delay_item2'),
                desc: t('why_choose_claim_delay_desc2')
              },
              {
                icon: Clock,
                title: t('why_choose_claim_delay_item3'),
                desc: t('why_choose_claim_delay_desc3')
              },
              {
                icon: CheckCircle,
                title: t('why_choose_claim_delay_item4'),
                desc: t('why_choose_claim_delay_desc4')
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
        aria-labelledby="process-flow-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2
              id="process-flow-heading"
              className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4"
            >
              {t('process_flow_claim_delay_title')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('process_flow_claim_delay_description')}
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
                  title: t('process_flow_claim_delay_item1'),
                  desc: t('process_flow_claim_delay_desc1')
                },
                {
                  step: '2',
                  title: t('process_flow_claim_delay_item2'),
                  desc: t('process_flow_claim_delay_desc2')
                },
                {
                  step: '3',
                  title: t('process_flow_claim_delay_item3'),
                  desc: t('process_flow_claim_delay_desc3')
                },
                {
                  step: '4',
                  title: t('process_flow_claim_delay_item4'),
                  desc: t('process_flow_claim_delay_desc4')
                },
                {
                  step: '5',
                  title: t('process_flow_claim_delay_item5'),
                  desc: t('process_flow_claim_delay_desc5')
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
              {t('ex_scenario_claim_delay_title')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('ex_scenario_claim_delay_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: t('ex_scenario_claim_delay_example1_title'),
                problem: t('ex_scenario_claim_delay_example1_problem'),
                reality: t('ex_scenario_claim_delay_example1_reality'),
                solution: t('ex_scenario_claim_delay_example1_solution')
              },
              {
                title: t('ex_scenario_claim_delay_example2_title'),
                problem: t('ex_scenario_claim_delay_example2_problem'),
                reality: t('ex_scenario_claim_delay_example2_reality'),
                solution: t('ex_scenario_claim_delay_example2_solution')
              },
              {
                title: t('ex_scenario_claim_delay_example3_title'),
                problem: t('ex_scenario_claim_delay_example3_problem'),
                reality: t('ex_scenario_claim_delay_example3_reality'),
                solution: t('ex_scenario_claim_delay_example3_solution')
              },
              {
                title: t('ex_scenario_claim_delay_example4_title'),
                problem: t('ex_scenario_claim_delay_example4_problem'),
                reality: t('ex_scenario_claim_delay_example4_reality'),
                solution: t('ex_scenario_claim_delay_example4_solution')
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
                    <h4 className="text-sm font-semibold text-orange-600 mb-2">
                      {t('ex_scenario_claim_delay_example_head1')}
                    </h4>
                    <p className="text-sm text-[#52606D] leading-relaxed">{scenario.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-blue-600 mb-2">
                      {t('ex_scenario_claim_delay_example_head2')}
                    </h4>
                    <p className="text-sm text-[#52606D] leading-relaxed">{scenario.reality}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-green-600 mb-2">
                      {t('ex_scenario_claim_delay_example_head3')}
                    </h4>
                    <p className="text-sm text-[#52606D] leading-relaxed">{scenario.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
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
              {t('faq_claim_delay_title')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('faq_claim_delay_description')}
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              { q: t('faq_claim_delay_q1'), a: t('faq_claim_delay_a1') },
              { q: t('faq_claim_delay_q2'), a: t('faq_claim_delay_a2') },
              { q: t('faq_claim_delay_q3'), a: t('faq_claim_delay_a3') },
              { q: t('faq_claim_delay_q4'), a: t('faq_claim_delay_a4') },
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
                      {faq.q}
                    </h3>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p
                        className="text-base text-[#52606D] leading-relaxed"
                        itemProp="text"
                      >
                        {faq.a}
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
              {t('cta_claim_delay_title')}
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t('cta_claim_delay_description')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-[#F39C12] hover:bg-[#d68910] text-white px-12 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(243,156,18,0.5)]"
                  aria-label="Get free consultation for insurance claim delay"
                >
                  {t('cta_claim_delay_description2')}
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
                  {t('cta_claim_delay_button')}
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
};

export default ClaimDelay;