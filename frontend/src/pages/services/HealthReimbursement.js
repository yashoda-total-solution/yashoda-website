import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, FileText, AlertCircle, CheckCircle, Shield, 
  ArrowRight, HelpCircle, Users, Phone, CreditCard, DollarSign
} from 'lucide-react';

const HealthReimbursement = () => {
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
              <span className="text-white text-sm">Health Claim Reimbursement</span>
            </div>
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-[#F39C12] rounded-2xl flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Health Claim Reimbursement Assistance
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Understanding the reimbursement claim process and how policyholders can manage medical claim submissions effectively. Health insurance reimbursement claims occur when policyholders pay their medical expenses first and later submit the bills to the insurance company for repayment.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}></div>
      </section>

      {/* What is Reimbursement Section */}
      <section className="relative -mt-16 z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-6">
              What is Health Claim Reimbursement?
            </h2>
            <div className="prose prose-lg max-w-none text-[#52606D]">
              <p className="leading-relaxed mb-4">
                Health claim reimbursement is a process in which the policyholder pays the medical expenses at the hospital and later submits the claim to the insurance company to receive reimbursement of the eligible amount.
              </p>
              <p className="leading-relaxed mb-4">
                Unlike cashless hospitalization, <strong>reimbursement claims require policyholders to submit detailed documentation</strong> such as hospital bills, medical reports, prescriptions, and discharge summaries.
              </p>
              <p className="leading-relaxed mb-4">
                Many customers face difficulties during this process because the documentation requirements may be complex and the claim review process can take time.
              </p>
              <p className="leading-relaxed mb-4">
                Common requirements include:
              </p>
              <ul className="space-y-3 ml-6">
                <li>• Hospital bills and invoices</li>
                <li>• Discharge summary and medical reports</li>
                <li>• Medical prescriptions</li>
                <li>• Completed claim form</li>
                <li>• Identity proof and policy details</li>
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
              Common Reimbursement Claim Challenges
            </h2>
            <p className="text-lg text-[#52606D]">
              Issues policyholders may face during reimbursement claims
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Missing Documents',
                desc: 'Confusion about which documents are required for successful claim submission',
                color: 'bg-red-50',
                iconBg: 'bg-red-600'
              },
              {
                icon: AlertCircle,
                title: 'Incorrect Claim Form',
                desc: 'Incomplete or incorrectly filled claim forms causing processing delays',
                color: 'bg-orange-50',
                iconBg: 'bg-orange-600'
              },
              {
                icon: Shield,
                title: 'Coverage Confusion',
                desc: 'Uncertainty about which expenses are covered under the policy',
                color: 'bg-blue-50',
                iconBg: 'bg-blue-600'
              },
              {
                icon: CheckCircle,
                title: 'Verification Delays',
                desc: 'Extended processing time due to document verification procedures',
                color: 'bg-purple-50',
                iconBg: 'bg-purple-600'
              },
              {
                icon: Heart,
                title: 'Incomplete Medical Records',
                desc: 'Missing medical reports or discharge summaries from the hospital',
                color: 'bg-teal-50',
                iconBg: 'bg-teal-600'
              },
              {
                icon: DollarSign,
                title: 'Reimbursement Amount',
                desc: 'Difference between claimed amount and approved reimbursement',
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
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1F2933] mb-3">{item.title}</h3>
                <p className="text-base text-[#52606D] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens Section */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              What Happens in Reimbursement Cases
            </h2>
            <p className="text-lg text-[#52606D]">
              Understanding the reimbursement claim review process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CreditCard,
                title: 'Patient Pays First',
                desc: 'Policyholder pays all medical expenses directly to the hospital at the time of treatment.',
                color: 'bg-blue-50',
                iconBg: 'bg-blue-600'
              },
              {
                icon: FileText,
                title: 'Document Collection',
                desc: 'All relevant bills, reports, and discharge summaries are collected after treatment.',
                color: 'bg-purple-50',
                iconBg: 'bg-purple-600'
              },
              {
                icon: CheckCircle,
                title: 'Insurance Review',
                desc: 'Insurance company verifies documents and checks policy eligibility before processing.',
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

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Why Choose Yashoda Total Solution?
            </h2>
            <p className="text-lg text-[#52606D]">
              Expert assistance for reimbursement claim guidance
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
                title: 'Document Assistance',
                desc: 'Help with organizing and preparing all required claim documents.'
              },
              {
                icon: CheckCircle,
                title: 'Claim Review',
                desc: 'Thorough review of documents before submission to avoid rejections.'
              },
              {
                icon: Shield,
                title: 'Proven Results',
                desc: 'Successfully helped numerous clients with reimbursement claims.'
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
      <section className="py-16 md:py-24 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Our 5-Step Reimbursement Assistance Process
            </h2>
            <p className="text-lg text-[#52606D]">
              Simple and systematic guidance for your claim
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0F7A4A] to-[#F39C12]"></div>

            <div className="space-y-12">
              {[
                {
                  step: '1',
                  title: 'Document Checklist',
                  desc: 'We provide a complete checklist of all documents required for your reimbursement claim.'
                },
                {
                  step: '2',
                  title: 'Document Review',
                  desc: 'We review all your medical bills, reports, and discharge summaries for completeness.'
                },
                {
                  step: '3',
                  title: 'Claim Form Assistance',
                  desc: 'We help you fill out the claim form correctly with all necessary policy details.'
                },
                {
                  step: '4',
                  title: 'Submission Support',
                  desc: 'We guide you on how to submit the claim properly to your insurance company.'
                },
                {
                  step: '5',
                  title: 'Follow-Up & Tracking',
                  desc: 'We help track your claim status and follow up until reimbursement is processed.'
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
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Real-Life Reimbursement Examples
            </h2>
            <p className="text-lg text-[#52606D]">
              Common scenarios we help resolve
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Example 1 – Emergency Hospitalization',
                problem: 'A patient is admitted to a hospital that does not provide cashless insurance services.',
                reality: 'The patient pays the full hospital bill upfront and needs to claim reimbursement later.',
                solution: 'We helped organize all documents and submit a complete claim; reimbursement received in 3 weeks.'
              },
              {
                title: 'Example 2 – Missing Medical Documents',
                problem: 'A policyholder submits a reimbursement claim but forgets to attach the discharge summary.',
                reality: 'The insurance company delays the claim until the missing document is provided.',
                solution: 'We identified the missing document, obtained it from the hospital, and resubmitted successfully.'
              },
              {
                title: 'Example 3 – Treatment Outside Network Hospital',
                problem: 'A patient receives treatment at a hospital not part of the insurer\'s network.',
                reality: 'Since cashless treatment is not available, the patient pays and later files for reimbursement.',
                solution: 'We assisted with complete documentation; claim approved within policy limits.'
              },
              {
                title: 'Example 4 – Incorrect Claim Form',
                problem: 'A reimbursement claim is submitted with incorrect policy details.',
                reality: 'This causes delays in claim processing until the corrected form is submitted.',
                solution: 'We helped correct the form details and expedited the resubmission; claim processed smoothly.'
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
                    <h4 className="text-sm font-semibold text-orange-600 mb-2">❌ Problem:</h4>
                    <p className="text-sm text-[#52606D] leading-relaxed">{scenario.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-blue-600 mb-2">⚠️ Reality:</h4>
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
      <section className="py-16 md:py-24 bg-[#F5F7F9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#52606D]">
              Common questions about reimbursement claims
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'What is a health insurance reimbursement claim?',
                a: 'A reimbursement claim is filed when the policyholder pays medical expenses first and later submits the bills to the insurance company for repayment of eligible amounts.'
              },
              {
                q: 'What documents are required for reimbursement claims?',
                a: 'Typical documents include hospital bills, discharge summary, medical reports, prescriptions, completed claim forms, identity proof, and policy details.'
              },
              {
                q: 'Why do reimbursement claims sometimes take time to process?',
                a: 'Claims may take time due to document verification, policy eligibility checks, and review of medical treatment details against policy terms.'
              },
              {
                q: 'Can reimbursement claims be submitted after hospital discharge?',
                a: 'Yes, reimbursement claims are usually submitted after treatment once all required documents like bills and discharge summaries are available.'
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
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
              Facing Confusion About Your Reimbursement Claim?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Understanding the documentation and claim process can help policyholders navigate reimbursement procedures more confidently. Contact Yashoda Total Solution for expert assistance.
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

export default HealthReimbursement;
