import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
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
            className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-[#F39C12] rounded-full mb-6"
            >
              <HelpCircle className="h-10 w-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('faq_title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              {t('faq_subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}></div>
      </section>

      {/* FAQs Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-start space-x-4 flex-1">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      openIndex === index ? 'bg-[#0F7A4A]' : 'bg-gray-100'
                    }`}>
                      <span className={`text-sm font-bold ${
                        openIndex === index ? 'text-white' : 'text-gray-600'
                      }`}>
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-[#1F2933] flex-1 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className={`h-6 w-6 transition-colors duration-300 ${
                      openIndex === index ? 'text-[#0F7A4A]' : 'text-gray-400'
                    }`} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 ml-12">
                        <p className="text-base text-[#52606D] leading-relaxed mb-3">
                          {faq.answer}
                        </p>
                        {faq.points && (
                          <ul className="space-y-2 mt-4">
                            {faq.points.map((point, idx) => (
                              <li key={idx} className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-[#0F7A4A] flex-shrink-0 mt-0.5" />
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
          >
            <HelpCircle className="h-12 w-12 mx-auto mb-4 text-[#F39C12]" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t('faq_stiil_have_questions')}
            </h2>
            <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              {t('faq_ans_still_have_questions')}
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#F39C12] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#e08e0b] transition-all duration-300 hover:scale-105 hover:shadow-xl"
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