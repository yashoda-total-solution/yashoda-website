import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  DollarSign, FileText, AlertCircle, CheckCircle, Shield, 
  ArrowRight, HelpCircle, Users, Phone, Calculator,
  MinusCircle, Percent
} from 'lucide-react';

/* ─── Structured Data (JSON-LD) ──────────────────────────────────────────── */
const PARTIAL_CLAIM_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.yashodatotalsolution.in/claim-short-settled/#webpage',
      url: 'https://www.yashodatotalsolution.in/claim-short-settled/',
      name: 'Partial Insurance Claim Settlement Help India | Yashoda Total Solution',
      isPartOf: { '@id': 'https://www.yashodatotalsolution.in/#website' },
      description:
        'Did your insurance company pay less than the claimed amount? Yashoda Total Solution helps policyholders understand partial claim settlements, policy deductions, and how to address short-settled insurance claims across India.',
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
            name: 'Partial Claim Settlement',
            item: 'https://www.yashodatotalsolution.in/claim-short-settled/',
          },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://www.yashodatotalsolution.in/claim-short-settled/#service',
      name: 'Partial Insurance Claim Settlement Assistance',
      description:
        'Expert assistance for policyholders who have received less than the claimed insurance amount. We help review settlement calculations, understand deductions, and guide clients through their options when an insurance claim is short-settled.',
      provider: { '@id': 'https://www.yashodatotalsolution.in/#organization' },
      areaServed: { '@type': 'Country', name: 'India' },
      serviceType: 'Insurance Short Settlement Support',
      url: 'https://www.yashodatotalsolution.in/claim-short-settled/',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does short claim settlement mean?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Short settlement occurs when the insurance company approves a claim but pays only part of the claimed amount due to policy limits, deductions, depreciation, or exclusions as defined in the policy terms.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do insurance companies reduce claim settlement amounts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The reduction may happen due to policy coverage limits, exclusions, depreciation deductions on replaced parts, mandatory deductibles, or non-covered expenses as specified in the policy terms.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can the insurance settlement amount differ from the actual bill?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The approved settlement amount may differ from the total bill depending on policy conditions, coverage limits, room rent sub-limits, and which medical services or repairs are covered under the policy.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can policyholders understand the settlement calculation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Reviewing the policy document and the claim settlement report carefully can help explain the deductions applied. The settlement report usually lists all deductions and the reasons for the reduced amount.',
          },
        },
      ],
    },
  ],
};

const ClaimShortSettled = () => {
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
        <title>Partial Insurance Claim Settlement Help India | Yashoda Total Solution</title>
        <meta
          name="description"
          content="Did your insurance company pay less than you claimed? Yashoda Total Solution helps policyholders understand partial claim settlements, policy deductions, depreciation and short-settled insurance claims across India. Free consultation."
        />
        <meta
          name="keywords"
          content="partial insurance claim settlement India, short settled insurance claim, insurance claim less than bill, insurance deduction explanation, claim settlement calculation India, insurance depreciation deduction, room rent limit insurance, insurance sub-limit claim, short claim settlement Mumbai"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Yashoda Total Solution" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.yashodatotalsolution.in/claim-short-settled/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yashodatotalsolution.in/claim-short-settled/" />
        <meta property="og:title" content="Partial Insurance Claim Settlement Help India | Yashoda Total Solution" />
        <meta
          property="og:description"
          content="Did your insurance company pay less than the claimed amount? We help policyholders understand deductions, policy limits and short-settled insurance claims. Expert team across India."
        />
        <meta property="og:image" content="https://www.yashodatotalsolution.in/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Partial Insurance Claim Settlement Help – Yashoda Total Solution" />
        <meta property="og:site_name" content="Yashoda Total Solution" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter / X Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Partial Insurance Claim Settlement Help India | Yashoda Total Solution" />
        <meta
          name="twitter:description"
          content="Did your insurance company pay less than you claimed? We help policyholders understand partial claim settlements and deductions across India."
        />
        <meta name="twitter:image" content="https://www.yashodatotalsolution.in/og-image.jpg" />
        <meta name="twitter:image:alt" content="Partial Insurance Claim Settlement Help – Yashoda Total Solution" />

        {/* Geo & Region */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai, Maharashtra, India" />
        <meta name="geo.position" content="19.0722;72.8797" />
        <meta name="ICBM" content="19.0722, 72.8797" />

        {/* Structured Data JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(PARTIAL_CLAIM_STRUCTURED_DATA)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] text-white py-20 md:py-32"
        aria-labelledby="partial-claim-hero-heading"
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
                {t('partial_claim_title_backlink1')}
              </Link>
              <span className="text-white/60" aria-hidden="true">/</span>
              <span className="text-white text-sm" aria-current="page">
                {t('partial_claim_title_backlink2')}
              </span>
            </nav>

            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-[#F39C12] rounded-2xl flex items-center justify-center flex-shrink-0">
                <MinusCircle className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <h1
                id="partial-claim-hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold"
              >
                {t('partial_claim_title')}
              </h1>
            </div>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              {t('partial_claim_description')}
            </p>
          </motion.div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]"
          style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}
          aria-hidden="true"
        />
      </section>

      {/* Service Overview */}
      <section
        className="relative -mt-16 z-10 py-16 md:py-24"
        aria-labelledby="service-overview-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12"
          >
            <h2
              id="service-overview-heading"
              className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-6"
            >
              {t('what_partial_claim_title')}
            </h2>
            <div className="prose prose-lg max-w-none text-[#52606D]">
              <p className="leading-relaxed mb-4">
                {t('what_partial_claim_description')}
              </p>
              <p className="leading-relaxed mb-4">
                {t('what_partial_claim_description1')}{' '}
                <strong>{t('what_partial_claim_description2')}</strong>
              </p>
              <p className="leading-relaxed mb-4">
                {t('what_partial_claim_description3')}
              </p>
              <p className="leading-relaxed">
                {t('what_partial_claim_description4')}{' '}
                <strong>{t('what_partial_claim_description5')}</strong>{' '}
                {t('what_partial_claim_description6')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Signs Section */}
      <section
        className="py-16 md:py-24 bg-white"
        aria-labelledby="common-signs-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2
              id="common-signs-heading"
              className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4"
            >
              {t('common_signs_partial_claim')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('common_signs_partial_claim_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: t('common_signs_partial_claim_title1'),
                desc: t('common_signs_partial_claim_desc1'),
                color: 'bg-red-50',
                iconBg: 'bg-red-600'
              },
              {
                icon: FileText,
                title: t('common_signs_partial_claim_title2'),
                desc: t('common_signs_partial_claim_desc2'),
                color: 'bg-orange-50',
                iconBg: 'bg-orange-600'
              },
              {
                icon: Shield,
                title: t('common_signs_partial_claim_title3'),
                desc: t('common_signs_partial_claim_desc3'),
                color: 'bg-blue-50',
                iconBg: 'bg-blue-600'
              },
              {
                icon: AlertCircle,
                title: t('common_signs_partial_claim_title4'),
                desc: t('common_signs_partial_claim_desc4'),
                color: 'bg-purple-50',
                iconBg: 'bg-purple-600'
              },
              {
                icon: MinusCircle,
                title: t('common_signs_partial_claim_title5'),
                desc: t('common_signs_partial_claim_desc5'),
                color: 'bg-teal-50',
                iconBg: 'bg-teal-600'
              },
              {
                icon: Percent,
                title: t('common_signs_partial_claim_title6'),
                desc: t('common_signs_partial_claim_desc6'),
                color: 'bg-pink-50',
                iconBg: 'bg-pink-600'
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

      {/* What Happens Section */}
      <section
        className="py-16 md:py-24 bg-[#F5F7F9]"
        aria-labelledby="what-happens-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2
              id="what-happens-heading"
              className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4"
            >
              {t('what_happens_after_partial_claim_title')}
            </h2>
            <p className="text-lg text-[#52606D] max-w-3xl mx-auto">
              {t('what_happens_after_partial_claim_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: t('what_happens_partial_claim_item1'),
                desc: t('what_happens_partial_claim_desc1'),
                color: 'bg-orange-50',
                iconBg: 'bg-orange-600'
              },
              {
                icon: Calculator,
                title: t('what_happens_partial_claim_item2'),
                desc: t('what_happens_partial_claim_desc2'),
                color: 'bg-blue-50',
                iconBg: 'bg-blue-600'
              },
              {
                icon: AlertCircle,
                title: t('what_happens_partial_claim_item3'),
                desc: t('what_happens_partial_claim_desc3'),
                color: 'bg-purple-50',
                iconBg: 'bg-purple-600'
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
              {t('process_flow_partial_claim_title')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('process_flow_partial_claim_description')}
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: t('process_flow_partial_claim_item1'),
                  desc: t('process_flow_partial_claim_desc1')
                },
                {
                  step: '2',
                  title: t('process_flow_partial_claim_item2'),
                  desc: t('process_flow_partial_claim_desc2')
                },
                {
                  step: '3',
                  title: t('process_flow_partial_claim_item3'),
                  desc: t('process_flow_partial_claim_desc3')
                },
                {
                  step: '4',
                  title: t('process_flow_partial_claim_item4'),
                  desc: t('process_flow_partial_claim_desc4')
                },
                {
                  step: '5',
                  title: t('process_flow_partial_claim_item5'),
                  desc: t('process_flow_partial_claim_desc5')
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-[#0F7A4A] to-[#0A5734] text-white rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center space-x-4 mb-3">
                      <div
                        className="w-10 h-10 bg-[#F39C12] rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0"
                        aria-label={`Step ${item.step}`}
                      >
                        {item.step}
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-base text-white/90 leading-relaxed pl-14">{item.desc}</p>
                  </div>
                  {index < 4 && (
                    <div className="h-6 w-0.5 bg-[#F39C12] ml-5 my-2" aria-hidden="true" />
                  )}
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
              {t('ex_scenario_partial_claim_title')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('ex_scenario_partial_claim_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: t('ex_scenario_partial_claim_example1_title'),
                claimed: t('ex_scenario_partial_claim_example1_claimed'),
                settled: t('ex_scenario_partial_claim_example1_settled'),
                reason: t('ex_scenario_partial_claim_example1_solution')
              },
              {
                title: t('ex_scenario_partial_claim_example2_title'),
                claimed: t('ex_scenario_partial_claim_example2_claimed'),
                settled: t('ex_scenario_partial_claim_example2_settled'),
                reason: t('ex_scenario_partial_claim_example2_solution')
              },
              {
                title: t('ex_scenario_partial_claim_example3_title'),
                claimed: t('ex_scenario_partial_claim_example3_claimed'),
                settled: t('ex_scenario_partial_claim_example3_settled'),
                reason: t('ex_scenario_partial_claim_example3_solution')
              },
              {
                title: t('ex_scenario_partial_claim_example4_title'),
                claimed: t('ex_scenario_partial_claim_example4_claimed'),
                settled: t('ex_scenario_partial_claim_example4_settled'),
                reason: t('ex_scenario_partial_claim_example4_solution')
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
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="text-sm font-semibold text-red-600">
                      {t('ex_scenario_partial_claim_example_head1')}
                    </span>
                    <span className="text-base font-bold text-red-700">{scenario.claimed}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-semibold text-green-600">
                      {t('ex_scenario_partial_claim_example_head2')}
                    </span>
                    <span className="text-base font-bold text-green-700">{scenario.settled}</span>
                  </div>
                </div>
                <p className="text-sm text-[#52606D] leading-relaxed">{scenario.reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding Calculations Section */}
      <section
        className="py-16 md:py-24 bg-white"
        aria-labelledby="calculations-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2
              id="calculations-heading"
              className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4"
            >
              {t('partial_claim_calculation_title')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('partial_claim_calculation_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: t('partial_claim_calculation_item1'),
                desc: t('partial_claim_calculation_desc1')
              },
              {
                icon: MinusCircle,
                title: t('partial_claim_calculation_item2'),
                desc: t('partial_claim_calculation_desc2')
              },
              {
                icon: Percent,
                title: t('partial_claim_calculation_item3'),
                desc: t('partial_claim_calculation_desc3')
              },
              {
                icon: AlertCircle,
                title: t('partial_claim_calculation_item4'),
                desc: t('partial_claim_calculation_desc4')
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
                <h3 className="text-lg font-semibold text-[#1F2933] mb-3">{item.title}</h3>
                <p className="text-sm text-[#52606D] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Yashoda Section */}
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
              {t('why_choose_partial_claim_title')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('why_choose_partial_claim_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: t('why_choose_partial_claim_item1'),
                desc: t('why_choose_partial_claim_desc1')
              },
              {
                icon: FileText,
                title: t('why_choose_partial_claim_item2'),
                desc: t('why_choose_partial_claim_desc2')
              },
              {
                icon: Calculator,
                title: t('why_choose_partial_claim_item3'),
                desc: t('why_choose_partial_claim_desc3')
              },
              {
                icon: CheckCircle,
                title: t('why_choose_partial_claim_item4'),
                desc: t('why_choose_partial_claim_desc4')
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
              {t('faq_partial_claim_title')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('faq_partial_claim_description')}
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              { q: t('faq_partial_claim_q1'), a: t('faq_partial_claim_a1') },
              { q: t('faq_partial_claim_q2'), a: t('faq_partial_claim_a2') },
              { q: t('faq_partial_claim_q3'), a: t('faq_partial_claim_a3') },
              { q: t('faq_partial_claim_q4'), a: t('faq_partial_claim_a4') },
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
              {t('cta_partial_claim_title')}
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t('cta_partial_claim_description')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-[#F39C12] hover:bg-[#d68910] text-white px-12 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(243,156,18,0.5)]"
                  aria-label="Get free consultation for partial insurance claim settlement"
                >
                  {t('cta_partial_claim_description2')}
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
                  {t('cta_partial_claim_button')}
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
};

export default ClaimShortSettled;