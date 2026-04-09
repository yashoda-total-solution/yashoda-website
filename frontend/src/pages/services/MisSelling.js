import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  AlertTriangle, FileText, Scale, Shield, CheckCircle, 
  ArrowRight, HelpCircle, Users, Phone 
} from 'lucide-react';

/* ─── Structured Data (JSON-LD) ──────────────────────────────────────────── */
const MIS_SELLING_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.yashodatotalsolution.in/mis-selling/#webpage',
      url: 'https://www.yashodatotalsolution.in/mis-selling/',
      name: 'Insurance Mis-Selling Complaint Help India | Yashoda Total Solution',
      isPartOf: { '@id': 'https://www.yashodatotalsolution.in/#website' },
      description:
        'Were you sold a wrong insurance policy? Yashoda Total Solution helps victims of insurance mis-selling get justice, compensation, and policy cancellation across India. Free consultation available.',
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
            name: 'Mis-selling of Insurance Policy',
            item: 'https://www.yashodatotalsolution.in/mis-selling/',
          },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://www.yashodatotalsolution.in/mis-selling/#service',
      name: 'Insurance Mis-Selling Complaint Assistance',
      description:
        'Expert assistance for insurance mis-selling victims. We help policyholders file complaints, escalate to IRDAI and Insurance Ombudsman, and recover premiums or compensation for mis-sold insurance policies.',
      provider: { '@id': 'https://www.yashodatotalsolution.in/#organization' },
      areaServed: { '@type': 'Country', name: 'India' },
      serviceType: 'Insurance Mis-Selling Complaint Support',
      url: 'https://www.yashodatotalsolution.in/mis-selling/',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I know if I am a victim of insurance mis-selling?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If what you were promised verbally does not match your policy documents, or if important information such as charges, lock-in period, or exclusions was hidden, it is mis-selling.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the time limit to file an insurance mis-selling complaint?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can file a complaint within 3 years from the date of purchase. However, if you discover the mis-selling later, you can still file based on when you discovered it.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I get a full refund if insurance mis-selling is proven?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, in many cases. If you are within the 15-30 day free-look period, you get a full refund. Otherwise, the ombudsman may order partial or full refund based on evidence.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will the insurance agent or bank be penalized for mis-selling?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. IRDAI can impose penalties, cancel agent licenses, or fine the insurance company for mis-selling practices.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a lawyer to file an insurance mis-selling complaint?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Yashoda Total Solution handles everything including complaint drafting, filing, and escalation. Legal notice is sent only if the company does not respond.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does the mis-selling complaint process take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Insurance company grievance resolution takes 15-30 days. Ombudsman complaint resolution takes 2-4 months. We follow up at every step to speed up resolution.',
          },
        },
      ],
    },
  ],
};

const MisSelling = () => {
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
        <title>Insurance Mis-Selling Complaint Help India | Yashoda Total Solution</title>
        <meta
          name="description"
          content="Were you sold a wrong insurance policy? Yashoda Total Solution helps victims of ULIP mis-selling, hidden charges, fake FD policies & more. Get free consultation, file complaint with IRDAI & Insurance Ombudsman. Call now."
        />
        <meta
          name="keywords"
          content="insurance mis-selling complaint India, mis-sold insurance policy help, ULIP sold as FD, insurance agent fraud complaint, IRDAI complaint mis-selling, insurance ombudsman complaint, premium refund mis-selling, insurance mis-selling Mumbai, policy cancellation mis-selling"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Yashoda Total Solution" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.yashodatotalsolution.in/mis-selling/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yashodatotalsolution.in/mis-selling/" />
        <meta property="og:title" content="Insurance Mis-Selling Complaint Help India | Yashoda Total Solution" />
        <meta
          property="og:description"
          content="Victim of insurance mis-selling? We help you file complaints, escalate to IRDAI and Insurance Ombudsman, and recover your money. Expert team with high success rate."
        />
        <meta property="og:image" content="https://www.yashodatotalsolution.in/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Insurance Mis-Selling Complaint Help – Yashoda Total Solution" />
        <meta property="og:site_name" content="Yashoda Total Solution" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter / X Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Insurance Mis-Selling Complaint Help India | Yashoda Total Solution" />
        <meta
          name="twitter:description"
          content="Victim of insurance mis-selling? We help you file complaints, escalate to IRDAI and Insurance Ombudsman, and recover your money."
        />
        <meta name="twitter:image" content="https://www.yashodatotalsolution.in/og-image.jpg" />
        <meta name="twitter:image:alt" content="Insurance Mis-Selling Complaint Help – Yashoda Total Solution" />

        {/* Geo & Region */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai, Maharashtra, India" />
        <meta name="geo.position" content="19.0722;72.8797" />
        <meta name="ICBM" content="19.0722, 72.8797" />

        {/* Structured Data JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(MIS_SELLING_STRUCTURED_DATA)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] text-white py-20 md:py-32"
        aria-labelledby="mis-selling-hero-heading"
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
                {t('mis_selling_title_backlink1')}
              </Link>
              <span className="text-white/60" aria-hidden="true">/</span>
              <span className="text-white text-sm" aria-current="page">
                {t('mis_selling_title_backlink2')}
              </span>
            </nav>

            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-[#F39C12] rounded-2xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <h1
                id="mis-selling-hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold"
              >
                {t('mis_selling_title')}
              </h1>
            </div>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              {t('mis_selling_description')}
            </p>
          </motion.div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]"
          style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}
          aria-hidden="true"
        />
      </section>

      {/* What is Mis-Selling Section */}
      <section
        className="relative -mt-16 z-10 py-16 md:py-24"
        aria-labelledby="what-is-mis-selling-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12"
          >
            <h2
              id="what-is-mis-selling-heading"
              className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-6"
            >
              {t('mis_selling_what_is')}
            </h2>
            <div className="prose prose-lg max-w-none text-[#52606D]">
              <p className="leading-relaxed mb-4">
                {t('mis_selling_what_is_description1')}{' '}
                <strong>{t('mis_selling_what_is_description2')}</strong>{' '}
                {t('mis_selling_what_is_description3')}
              </p>
              <p className="leading-relaxed mb-4">{t('mis_selling_examples')}</p>
              <ul className="space-y-3 ml-6" role="list">
                <li>{t('mis_selling_example_1')}</li>
                <li>{t('mis_selling_example_2')}</li>
                <li>{t('mis_selling_example_3')}</li>
                <li>{t('mis_selling_example_4')}</li>
                <li>{t('mis_selling_example_5')}</li>
                <li>{t('mis_selling_example_6')}</li>
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
              {t('mis_selling_what_happens')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('mis_selling_what_happens_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: t('mis_selling_what_happens_1_title'),
                desc: t('mis_selling_what_happens_1_description'),
                color: 'bg-red-50',
                iconBg: 'bg-red-600'
              },
              {
                icon: FileText,
                title: t('mis_selling_what_happens_2_title'),
                desc: t('mis_selling_what_happens_2_description'),
                color: 'bg-orange-50',
                iconBg: 'bg-orange-600'
              },
              {
                icon: Shield,
                title: t('mis_selling_what_happens_3_title'),
                desc: t('mis_selling_what_happens_3_description'),
                color: 'bg-blue-50',
                iconBg: 'bg-blue-600'
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
              {t('mis_selling_why_choose_us')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('mis_selling_why_choose_us_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: t('mis_selling_why_choose_us_1_title'),
                desc: t('mis_selling_why_choose_us_1_description')
              },
              {
                icon: FileText,
                title: t('mis_selling_why_choose_us_2_title'),
                desc: t('mis_selling_why_choose_us_2_description')
              },
              {
                icon: Scale,
                title: t('mis_selling_why_choose_us_3_title'),
                desc: t('mis_selling_why_choose_us_3_description')
              },
              {
                icon: CheckCircle,
                title: t('mis_selling_why_choose_us_4_title'),
                desc: t('mis_selling_why_choose_us_4_description')
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
              {t('mis_selling_process_flow')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('mis_selling_process_flow_description')}
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical Line for Desktop */}
            <div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0F7A4A] to-[#F39C12]"
              aria-hidden="true"
            />

            <div className="space-y-12">
              {[
                {
                  step: '1',
                  title: t('mis_selling_process_flow1_title'),
                  desc: t('mis_selling_process_flow1_description')
                },
                {
                  step: '2',
                  title: t('mis_selling_process_flow2_title'),
                  desc: t('mis_selling_process_flow2_description')
                },
                {
                  step: '3',
                  title: t('mis_selling_process_flow3_title'),
                  desc: t('mis_selling_process_flow3_description')
                },
                {
                  step: '4',
                  title: t('mis_selling_process_flow4_title'),
                  desc: t('mis_selling_process_flow4_description')
                },
                {
                  step: '5',
                  title: t('mis_selling_process_flow5_title'),
                  desc: t('mis_selling_process_flow5_description')
                },
                {
                  step: '6',
                  title: t('mis_selling_process_flow6_title'),
                  desc: t('mis_selling_process_flow6_description')
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

                  {/* Center Circle */}
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
              {t('mis_selling_example_scenarios')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('mis_selling_example_scenarios_subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: t('mis_selling_example_scenarios_case1_title'),
                problem: t('mis_selling_example_scenarios_case1_problem'),
                reality: t('mis_selling_example_scenarios_case1_reality'),
                solution: t('mis_selling_example_scenarios_case1_solution')
              },
              {
                title: t('mis_selling_example_scenarios_case2_title'),
                problem: t('mis_selling_example_scenarios_case2_problem'),
                reality: t('mis_selling_example_scenarios_case2_reality'),
                solution: t('mis_selling_example_scenarios_case2_solution')
              },
              {
                title: t('mis_selling_example_scenarios_case3_title'),
                problem: t('mis_selling_example_scenarios_case3_problem'),
                reality: t('mis_selling_example_scenarios_case3_reality'),
                solution: t('mis_selling_example_scenarios_case3_solution')
              },
              {
                title: t('mis_selling_example_scenarios_case4_title'),
                problem: t('mis_selling_example_scenarios_case4_problem'),
                reality: t('mis_selling_example_scenarios_case4_reality'),
                solution: t('mis_selling_example_scenarios_case4_solution')
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
                      {t('mis_selling_example_scenarios_case_problem')}
                    </h4>
                    <p className="text-sm text-[#52606D] leading-relaxed">{scenario.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-orange-600 mb-2">
                      {t('mis_selling_example_scenarios_case_reality')}
                    </h4>
                    <p className="text-sm text-[#52606D] leading-relaxed">{scenario.reality}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-green-600 mb-2">
                      {t('mis_selling_example_scenarios_case_solution')}
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
              {t('mis_selling_faqs')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('mis_selling_faq_subtitle')}
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: t('mis_selling_faq1_question'),
                a: t('mis_selling_faq1_answer')
              },
              {
                q: t('mis_selling_faq2_question'),
                a: t('mis_selling_faq2_answer')
              },
              {
                q: t('mis_selling_faq3_question'),
                a: t('mis_selling_faq3_answer')
              },
              {
                q: t('mis_selling_faq4_question'),
                a: t('mis_selling_faq4_answer')
              },
              {
                q: t('mis_selling_faq5_question'),
                a: t('mis_selling_faq5_answer')
              },
              {
                q: t('mis_selling_faq6_question'),
                a: t('mis_selling_faq6_answer')
              },
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
              {t('mis_selling_cta_title')}
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t('mis_selling_cta_description')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-[#F39C12] hover:bg-[#d68910] text-white px-12 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(243,156,18,0.5)]"
                  aria-label="Get free consultation for insurance mis-selling"
                >
                  {t('mis_selling_cta_button')}
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
                  {t('mis_selling_cta_call_button')}
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
};

export default MisSelling;