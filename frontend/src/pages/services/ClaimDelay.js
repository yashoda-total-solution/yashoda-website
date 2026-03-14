import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Clock, FileText, AlertCircle, CheckCircle, Shield, 
  ArrowRight, HelpCircle, Users, Phone, Hourglass, Search
} from 'lucide-react';

const ClaimDelay = () => {
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
              <Link to="/" className="text-white/80 hover:text-white text-sm">Home</Link>
              <span className="text-white/60">/</span>
              <span className="text-white text-sm">Delay in Claim Process</span>
            </div>
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-[#F39C12] rounded-2xl flex items-center justify-center">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Delay in Insurance Claim Process
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Understanding why insurance claims sometimes take longer than expected and how policyholders can better understand the process. Delays may occur due to documentation verification, internal investigations, policy conditions, or administrative procedures followed by insurance companies.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}></div>
      </section>

      {/* What is Claim Delay Section */}
      <section className="relative -mt-16 z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-6">
              Understanding Claim Processing Delays
            </h2>
            <div className="prose prose-lg max-w-none text-[#52606D]">
              <p className="leading-relaxed mb-4">
                Insurance claim processing is a structured procedure that involves several stages of verification and documentation review.
              </p>
              <p className="leading-relaxed mb-4">
                Sometimes, claims may take longer than expected to process. These delays may happen due to multiple reasons such as <strong>additional document requests, internal review procedures, or clarification requirements related to the policy.</strong>
              </p>
              <p className="leading-relaxed mb-4">
                For policyholders, this waiting period can be frustrating and uncertain, especially when relying on the claim settlement to cover financial expenses related to accidents, medical treatment, or other insured events.
              </p>
              <p className="leading-relaxed mb-4">
                Common causes of delays include:
              </p>
              <ul className="space-y-3 ml-6">
                <li>• Incomplete claim documents</li>
                <li>• Additional verification or investigation by the insurance company</li>
                <li>• Hospital or service provider documentation delays</li>
                <li>• High volume of claims being processed</li>
                <li>• Policy conditions requiring additional evaluation</li>
                <li>• Communication gaps between involved parties</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Happens Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              What Happens During Claim Review
            </h2>
            <p className="text-lg text-[#52606D]">
              Understanding the review process that may cause delays
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Search,
                title: 'Document Verification',
                desc: 'Insurance company verifies all submitted documents and supporting evidence.',
                color: 'bg-blue-50',
                iconBg: 'bg-blue-600'
              },
              {
                icon: FileText,
                title: 'Medical Review',
                desc: 'Detailed review of medical reports, accident details, or treatment records.',
                color: 'bg-purple-50',
                iconBg: 'bg-purple-600'
              },
              {
                icon: Shield,
                title: 'Policy Check',
                desc: 'Confirmation of policy eligibility conditions and coverage terms.',
                color: 'bg-teal-50',
                iconBg: 'bg-teal-600'
              },
              {
                icon: AlertCircle,
                title: 'Additional Info',
                desc: 'Request for supplementary documents if initial submission is incomplete.',
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
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1F2933] mb-3">{item.title}</h3>
                <p className="text-base text-[#52606D] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Why Choose Yashoda Total Solution?
            </h2>
            <p className="text-lg text-[#52606D]">
              Expert assistance for claim processing guidance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Team',
                desc: 'Qualified professionals with industry knowledge and operational expertise.'
              },
              {
                icon: FileText,
                title: 'Documentation Help',
                desc: 'Ensure all required documents are properly prepared and submitted.'
              },
              {
                icon: Clock,
                title: 'Status Tracking',
                desc: 'Regular follow-ups to track claim progress and timely updates.'
              },
              {
                icon: CheckCircle,
                title: 'High Success Rate',
                desc: 'Successfully helped numerous clients navigate the claim process efficiently.'
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
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1F2933] mb-3">{item.title}</h3>
                <p className="text-base text-[#52606D] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Our 5-Step Claim Assistance Process
            </h2>
            <p className="text-lg text-[#52606D]">
              Helping you navigate claim delays effectively
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0F7A4A] to-[#F39C12]"></div>

            <div className="space-y-12">
              {[
                {
                  step: '1',
                  title: 'Documentation Review',
                  desc: 'We review your claim documents and ensure all required paperwork is complete and accurate.'
                },
                {
                  step: '2',
                  title: 'Status Tracking',
                  desc: 'We help you track claim status and understand where your claim is in the review process.'
                },
                {
                  step: '3',
                  title: 'Follow-Up Assistance',
                  desc: 'Regular follow-ups with the insurance company to expedite the claim processing.'
                },
                {
                  step: '4',
                  title: 'Additional Documentation',
                  desc: 'If additional documents are requested, we help you gather and submit them promptly.'
                },
                {
                  step: '5',
                  title: 'Resolution Support',
                  desc: 'We guide you through the entire process until your claim is successfully settled.'
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
                        <div className="w-12 h-12 bg-[#F39C12] rounded-full flex items-center justify-center font-bold text-xl">
                          {item.step}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold flex-1">{item.title}</h3>
                      </div>
                      <p className="text-base text-white/90 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#F39C12] rounded-full border-4 border-white shadow-lg z-10"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Example Scenarios Section */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Real-Life Delay Examples
            </h2>
            <p className="text-lg text-[#52606D]">
              Common situations where claims experience delays
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Example 1 – Hospital Documentation Delay',
                problem: 'A patient submits a health insurance claim after hospital treatment.',
                reality: 'The claim remains pending because the insurance company is waiting for additional medical reports from the hospital.',
                solution: 'We coordinated with the hospital to expedite report submission and the claim was processed within 2 weeks.'
              },
              {
                title: 'Example 2 – Accident Investigation',
                problem: 'A motor accident claim takes longer to process than expected.',
                reality: 'The insurance company conducts an investigation to verify accident details before approving the claim.',
                solution: 'We provided all supporting evidence and followed up regularly; claim was settled in 45 days.'
              },
              {
                title: 'Example 3 – Missing Supporting Documents',
                problem: 'A claim is delayed due to incomplete documentation.',
                reality: 'Certain documents like discharge summaries and invoices were not submitted initially.',
                solution: 'We helped gather all missing documents and resubmitted; claim approved within 10 days.'
              },
              {
                title: 'Example 4 – Policy Condition Review',
                problem: 'An insurance company takes additional time to review the claim.',
                reality: 'The insurer needed to verify whether the event falls within policy coverage conditions.',
                solution: 'We provided policy clarifications and supporting documents; claim processed successfully.'
              },
            ].map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-[#1F2933] mb-4 flex items-center">
                  <span className="w-8 h-8 bg-[#F39C12] text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                    {index + 1}
                  </span>
                  {scenario.title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-orange-600 mb-2">⏱️ Problem:</h4>
                    <p className="text-sm text-[#52606D] leading-relaxed">{scenario.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-blue-600 mb-2">📋 Reality:</h4>
                    <p className="text-sm text-[#52606D] leading-relaxed">{scenario.reality}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-green-600 mb-2">✅ Our Solution:</h4>
                    <p className="text-sm text-[#52606D] leading-relaxed">{scenario.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#52606D]">
              Common questions about claim processing delays
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'Why do insurance claims sometimes take longer than expected?',
                a: 'Claim processing may require document verification, investigation, and policy evaluation, which can extend the processing time depending on complexity.'
              },
              {
                q: 'How long does claim processing usually take?',
                a: 'The timeline varies depending on the type of claim, required documentation, and policy conditions. Some claims are processed within days, while others may take weeks.'
              },
              {
                q: 'What should policyholders do if their claim is delayed?',
                a: 'Review the claim status, ensure all required documents are submitted, and follow up with the insurance company for updates on the processing timeline.'
              },
              {
                q: 'Can claim delays happen even if documents are submitted?',
                a: 'Yes. Sometimes insurance companies conduct additional verification, investigation, or policy review before approving the claim.'
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F5F7F9] rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#0F7A4A] rounded-full flex items-center justify-center">
                      <HelpCircle className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#1F2933] mb-2">{faq.q}</h3>
                    <p className="text-base text-[#52606D] leading-relaxed">{faq.a}</p>
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
      >
        <div className="absolute inset-0 opacity-10"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="w-20 h-20 bg-[#F39C12] rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Experiencing Delays in Your Claim Process?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Understanding the claim procedure and documentation requirements can help policyholders navigate the situation more effectively. Contact Yashoda Total Solution for claim processing assistance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-[#F39C12] hover:bg-[#d68910] text-white px-12 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(243,156,18,0.5)]"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="tel:+919021022851"
                  className="inline-flex items-center justify-center bg-white text-[#0F7A4A] px-12 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)]"
                >
                  <Phone className="mr-2 h-6 w-6" />
                  Call Now
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
