import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

/* ─── Structured Data (JSON-LD) ──────────────────────────────────────────── */
const FAQS_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.yashodatotalsolution.in/faqs/#webpage',
      url: 'https://www.yashodatotalsolution.in/faqs/',
      name: 'Frequently Asked Questions | Insurance & Legal Help | Yashoda Total Solution',
      isPartOf: { '@id': 'https://www.yashodatotalsolution.in/#website' },
      description:
        'Find answers to frequently asked questions about insurance claim assistance, legal consultation, consumer protection and other services provided by Yashoda Total Solution across India.',
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
            name: 'FAQs',
            item: 'https://www.yashodatotalsolution.in/faqs/',
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.yashodatotalsolution.in/faqs/#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does Yashoda Total Solution provide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yashoda Total Solution provides insurance claim assistance, legal consultation, consumer protection support, civil dispute support and cheque bounce case assistance across India.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I file an insurance claim complaint?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can contact Yashoda Total Solution directly via phone or the contact form. Our team will review your case, collect necessary documents and guide you through the complaint filing process.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which states does Yashoda Total Solution operate in?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yashoda Total Solution has offices across Maharashtra, Gujarat, Madhya Pradesh, Uttar Pradesh, Rajasthan and Delhi.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a fee for the initial consultation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can reach out for a free initial consultation to understand your options. Our team will assess your case and explain the process before any commitment.',
          },
        },
        {
          '@type': 'Question',
          name: 'What documents are typically needed for insurance claim assistance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Required documents vary by case type but generally include the insurance policy document, claim rejection or delay letter, identity proof, and any correspondence with the insurance company.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to resolve an insurance dispute?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Resolution timelines vary depending on the type of dispute and escalation level. Company-level grievances typically take 15-30 days, while ombudsman or court cases may take longer.',
          },
        },
      ],
    },
  ],
};

const FAQs = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: t('faq_ques_1'),
      answer: t('faq_ans_1')
    },
    {
      question: t('faq_ques_2'),
      answer: t('faq_ans_2')
    },
    {
      question: t('faq_ques_3'),
      answer: t('faq_ans_3')
    },
    {
      question: t('faq_ques_4'),
      answer: t('faq_ans_4')
    },
    {
      question: t('faq_ques_5'),
      answer: t('faq_ans_5'),
      points: t('faq_ans_item_5')
    },
    {
      question: t('faq_ques_6'),
      answer: t('faq_ans_6'),
      points: t('faq_ans_item_6')
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F7F9]">

      {/* ── React Helmet SEO ──────────────────────────────────────────────── */}
      <Helmet prioritizeSeoTags>
        {/* Primary */}
        <title>Frequently Asked Questions | Insurance & Legal Help | Yashoda Total Solution</title>
        <meta
          name="description"
          content="Find answers to common questions about insurance claim assistance, legal consultation, consumer protection and more. Yashoda Total Solution — expert support across India. Read our FAQs before reaching out."
        />
        <meta
          name="keywords"
          content="insurance claim FAQ India, legal consultation FAQ, consumer complaint FAQ India, Yashoda Total Solution FAQ, insurance dispute questions India, how to file insurance complaint India, insurance ombudsman FAQ, cheque bounce FAQ India"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Yashoda Total Solution" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.yashodatotalsolution.in/faqs/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yashodatotalsolution.in/faqs/" />
        <meta property="og:title" content="Frequently Asked Questions | Insurance & Legal Help | Yashoda Total Solution" />
        <meta
          property="og:description"
          content="Find answers to common questions about insurance claim assistance, legal consultation and consumer protection services provided by Yashoda Total Solution across India."
        />
        <meta property="og:image" content="https://www.yashodatotalsolution.in/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="FAQs – Yashoda Total Solution Insurance & Legal Help India" />
        <meta property="og:site_name" content="Yashoda Total Solution" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter / X Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Frequently Asked Questions | Insurance & Legal Help | Yashoda Total Solution" />
        <meta
          name="twitter:description"
          content="Find answers to common questions about insurance claim assistance, legal consultation and consumer protection services across India."
        />
        <meta name="twitter:image" content="https://www.yashodatotalsolution.in/og-image.jpg" />
        <meta name="twitter:image:alt" content="FAQs – Yashoda Total Solution Insurance & Legal Help India" />

        {/* Geo & Region */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai, Maharashtra, India" />
        <meta name="geo.position" content="19.0722;72.8797" />
        <meta name="ICBM" content="19.0722, 72.8797" />

        {/* Structured Data JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(FAQS_STRUCTURED_DATA)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] text-white py-20 md:py-32"
        aria-labelledby="faqs-hero-heading"
      >
        <div
          className="absolute inset-0 opacity-10"
          aria-hidden="true"
        >
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
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-[#F39C12] rounded-full mb-6"
              aria-hidden="true"
            >
              <HelpCircle className="h-10 w-10 text-white" aria-hidden="true" />
            </motion.div>
            <h1
              id="faqs-hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              {t('faq_title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              {t('faq_subtitle')}
            </p>
          </motion.div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]"
          style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}
          aria-hidden="true"
        />
      </section>

      {/* FAQs Content */}
      <section
        className="py-16 md:py-24"
        aria-labelledby="faqs-list-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faqs-list-heading" className="sr-only">Frequently Asked Questions List</h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                itemScope
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <div className="flex items-start space-x-4 flex-1">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      openIndex === index ? 'bg-[#0F7A4A]' : 'bg-gray-100'
                    }`} aria-hidden="true">
                      <span className={`text-sm font-bold ${
                        openIndex === index ? 'text-white' : 'text-gray-600'
                      }`}>
                        {index + 1}
                      </span>
                    </div>
                    <h3
                      className="text-lg md:text-xl font-bold text-[#1F2933] flex-1 pr-4"
                      itemProp="name"
                    >
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                    aria-hidden="true"
                  >
                    <ChevronDown className={`h-6 w-6 transition-colors duration-300 ${
                      openIndex === index ? 'text-[#0F7A4A]' : 'text-gray-400'
                    }`} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                      itemScope
                      itemType="https://schema.org/Answer"
                      itemProp="acceptedAnswer"
                    >
                      <div className="px-6 pb-6 pt-2 ml-12" itemProp="text">
                        <p className="text-base text-[#52606D] leading-relaxed mb-3">
                          {faq.answer}
                        </p>
                        {faq.points && (
                          <ul className="space-y-2 mt-4" role="list">
                            {faq.points.map((point, idx) => (
                              <li key={idx} className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-[#0F7A4A] flex-shrink-0 mt-0.5" aria-hidden="true" />
                                <span className="text-sm md:text-base text-[#52606D] leading-relaxed">
                                  {point}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Still Have Questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 bg-gradient-to-br from-[#0F7A4A] to-[#0A5734] rounded-2xl p-8 md:p-12 text-center text-white"
            aria-labelledby="still-questions-heading"
          >
            <HelpCircle className="h-12 w-12 mx-auto mb-4 text-[#F39C12]" aria-hidden="true" />
            <h2
              id="still-questions-heading"
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              {t('faq_stiil_have_questions')}
            </h2>
            <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              {t('faq_ans_still_have_questions')}
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#F39C12] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#e08e0b] transition-all duration-300 hover:scale-105 hover:shadow-xl"
              aria-label="Go to Contact page to ask your question"
            >
              {t('faq_btn_contact')}
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default FAQs;