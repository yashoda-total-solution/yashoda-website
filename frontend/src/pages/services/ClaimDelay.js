import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Clock, FileText, AlertCircle, CheckCircle, Shield, 
  ArrowRight, HelpCircle, Users, Phone, Search,
  Zap, Target, TrendingUp, Hourglass, RefreshCw
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
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-4">
              Understanding why insurance claims sometimes take longer than expected and how policyholders can better understand the process.
            </p>
            
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              Insurance claim processing delays can create stress and uncertainty for policyholders. When a claim takes longer than expected, customers may feel confused about the status of their claim or unsure about what steps they should take next. Delays may occur due to documentation verification, internal investigations, policy conditions, or administrative procedures followed by insurance companies.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}></div>
      </section>

      {/* Service Overview */}
      <section className="relative -mt-16 z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-6">
              Service Overview
            </h2>
            <div className="prose prose-lg max-w-none text-[#52606D]">
              <p className="leading-relaxed mb-4">
                Insurance claim processing is a structured procedure that involves several stages of verification and documentation review.
              </p>
              <p className="leading-relaxed mb-4">
                Sometimes, claims may take longer than expected to process. These delays may happen due to multiple reasons such as <strong>additional document requests, internal review procedures, or clarification requirements related to the policy.</strong>
              </p>
              <p className="leading-relaxed mb-4">
                For policyholders, this waiting period can be frustrating and uncertain, especially when they are relying on the claim settlement to cover financial expenses related to accidents, medical treatment, or other insured events.
              </p>
              <p className="leading-relaxed">
                <strong>Yashoda Total Solutions</strong> assists clients by helping them understand the claim process, ensuring proper documentation is available, and guiding them through the necessary steps that may help move their claims forward more efficiently.
              </p>
            </div>

            {/* Claim Processing Stages Diagram */}
            <div className="mt-12 bg-gradient-to-br from-[#F5F7F9] to-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#1F2933] mb-8 text-center">Insurance Claim Processing Stages</h3>
              <div className="flex flex-col items-center space-y-4">
                {[
                  { label: 'Policy Purchased', icon: Shield },
                  { label: 'Incident Occurs', icon: AlertCircle },
                  { label: 'Claim Submitted', icon: FileText },
                  { label: 'Document Verification', icon: Search },
                  { label: 'Claim Evaluation', icon: Clock },
                  { label: 'Claim Settlement Decision', icon: CheckCircle },
                ].map((step, index) => (
                  <React.Fragment key={index}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 bg-white rounded-xl px-6 py-4 shadow-md w-full max-w-md"
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        index === 5 ? 'bg-green-100' : 'bg-[#0F7A4A]/10'
                      }`}>
                        <step.icon className={`h-6 w-6 ${index === 5 ? 'text-green-600' : 'text-[#0F7A4A]'}`} />
                      </div>
                      <span className="text-base font-semibold text-[#1F2933]">{step.label}</span>
                    </motion.div>
                    {index < 5 && (
                      <div className="h-8 w-0.5 bg-gradient-to-b from-[#0F7A4A] to-[#F39C12]"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Reasons for Delays */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Common Reasons for Claim Processing Delays
            </h2>
            <p className="text-lg text-[#52606D]">
              Understanding these factors can help policyholders better manage their expectations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Incomplete Documents',
                desc: 'Missing or incomplete claim documentation requiring additional submissions',
                color: 'bg-orange-50',
                iconBg: 'bg-orange-600'
              },
              {
                icon: Search,
                title: 'Additional Investigation',
                desc: 'Insurance company conducting verification or investigation procedures',
                color: 'bg-blue-50',
                iconBg: 'bg-blue-600'
              },
              {
                icon: Hourglass,
                title: 'Hospital Documentation',
                desc: 'Delays from service providers in submitting required medical reports',
                color: 'bg-purple-50',
                iconBg: 'bg-purple-600'
              },
              {
                icon: RefreshCw,
                title: 'High Claim Volume',
                desc: 'Large number of claims being processed by the insurance company',
                color: 'bg-teal-50',
                iconBg: 'bg-teal-600'
              },
              {
                icon: Shield,
                title: 'Policy Evaluation',
                desc: 'Policy conditions requiring additional review and assessment',
                color: 'bg-red-50',
                iconBg: 'bg-red-600'
              },
              {
                icon: AlertCircle,
                title: 'Communication Gaps',
                desc: 'Delays due to communication issues between involved parties',
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

          {/* Factors Diagram */}
          <motion.div {...fadeUp} className="mt-16 bg-gradient-to-br from-[#F5F7F9] to-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#1F2933] mb-8 text-center">Factors Causing Claim Delays</h3>
            <div className="flex flex-col items-center space-y-4">
              {[
                'Incomplete Documents',
                'Additional Investigation',
                'Verification Process',
                'Policy Condition Review',
                'Administrative Processing'
              ].map((factor, index) => (
                <React.Fragment key={index}>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl px-8 py-4 shadow-md w-full max-w-lg text-center"
                  >
                    <span className="text-lg font-semibold text-[#1F2933]">{factor}</span>
                  </motion.div>
                  {index < 4 && (
                    <div className="h-6 w-0.5 bg-gradient-to-b from-[#0F7A4A] to-[#F39C12]"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Happens During Claim Review */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              What Happens During Claim Review
            </h2>
            <p className="text-lg text-[#52606D] max-w-3xl mx-auto">
              Once a claim is submitted, the insurance company typically begins a detailed review process. These procedures help the insurance company determine whether the claim meets the policy requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'Document Verification',
                desc: 'Review and validation of all submitted documents',
                icon: FileText
              },
              {
                title: 'Medical/Accident Review',
                desc: 'Examination of medical reports or accident details',
                icon: Search
              },
              {
                title: 'Policy Eligibility Check',
                desc: 'Verification of policy terms and coverage conditions',
                icon: Shield
              },
              {
                title: 'Additional Information',
                desc: 'Request for supplementary documents if needed',
                icon: AlertCircle
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0F7A4A] to-[#0A5734] rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1F2933] mb-2">{item.title}</h3>
                    <p className="text-base text-[#52606D] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Claim Review Process Diagram */}
          <motion.div {...fadeUp} className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#1F2933] mb-8 text-center">Claim Review Process</h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              {[
                'Claim Submitted',
                'Documents Reviewed',
                'Verification of Details',
                'Additional Info Requested',
                'Final Decision'
              ].map((step, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0F7A4A] to-[#0A5734] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                    <p className="mt-3 text-sm font-medium text-[#1F2933] text-center max-w-[120px]">{step}</p>
                  </div>
                  {index < 4 && (
                    <ArrowRight className="hidden md:block h-6 w-6 text-[#0F7A4A]" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Example Scenarios */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Example Scenarios
            </h2>
            <p className="text-lg text-[#52606D]">
              Situations where insurance claims may experience delays
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Example 1 – Hospital Documentation Delay',
                desc: 'A patient submits a health insurance claim after receiving hospital treatment. However, the claim remains pending because the insurance company is waiting for additional medical reports from the hospital.',
              },
              {
                title: 'Example 2 – Accident Investigation',
                desc: 'A motor accident claim takes longer to process because the insurance company conducts an investigation to verify the accident details before approving the claim.',
              },
              {
                title: 'Example 3 – Missing Supporting Documents',
                desc: 'A claim is delayed because certain documents such as discharge summaries, invoices, or identification proofs were not submitted initially.',
              },
              {
                title: 'Example 4 – Policy Condition Review',
                desc: 'An insurance company takes additional time to review the claim because it needs to verify whether the event falls within the policy coverage conditions.',
              },
            ].map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#F5F7F9] to-white rounded-2xl p-8 shadow-lg border border-gray-200"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 bg-[#F39C12] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2933]">{scenario.title}</h3>
                </div>
                <p className="text-base text-[#52606D] leading-relaxed">{scenario.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding Claim Timelines */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Understanding Claim Timelines
            </h2>
            <p className="text-lg text-[#52606D] max-w-3xl mx-auto">
              Insurance policies usually specify certain timelines for claim processing. However, the actual duration may vary depending on several factors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Type of Claim', icon: FileText },
              { label: 'Complexity of Situation', icon: AlertCircle },
              { label: 'Documentation Requirements', icon: Search },
              { label: 'Verification Procedures', icon: CheckCircle },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#0F7A4A] to-[#0A5734] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-base font-semibold text-[#1F2933]">{item.label}</h3>
              </motion.div>
            ))}
          </div>

          {/* Claim Timeline Framework */}
          <motion.div {...fadeUp} className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-[#1F2933] mb-8 text-center">Claim Timeline Framework</h3>
            <div className="flex flex-col space-y-4">
              {[
                { label: 'Incident Occurs', icon: AlertCircle },
                { label: 'Claim Filed', icon: FileText },
                { label: 'Document Verification', icon: Search },
                { label: 'Claim Assessment', icon: Clock },
                { label: 'Settlement Decision', icon: CheckCircle },
              ].map((item, index) => (
                <React.Fragment key={index}>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 bg-gradient-to-r from-[#F5F7F9] to-white rounded-xl px-6 py-5 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-[#0F7A4A] to-[#0A5734] rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-[#1F2933]">{item.label}</h4>
                  </motion.div>
                  {index < 4 && (
                    <div className="h-8 w-0.5 bg-gradient-to-b from-[#0F7A4A] to-[#F39C12] ml-7"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Yashoda Total Solution */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Why Yashoda Total Solution
            </h2>
            <p className="text-lg text-[#52606D]">
              Professional assistance for insurance claim processing and guidance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                icon: Users,
                title: 'Experienced & Professional Team',
                desc: 'Qualified professionals with industry knowledge and operational expertise.'
              },
              {
                icon: Zap,
                title: 'Quick & Transparent Processing',
                desc: 'Systematic workflows supported by clear communication and monitoring.'
              },
              {
                icon: Target,
                title: 'Customer-First Approach',
                desc: 'Every case handled with attention, empathy, and ethical responsibility.'
              },
              {
                icon: TrendingUp,
                title: 'Technology-Driven Monitoring',
                desc: 'Advanced tracking systems ensure accountability and regular updates.'
              },
              {
                icon: Shield,
                title: 'Trusted Service Partner',
                desc: 'Focused on long-term relationships built on trust, reliability, and service excellence.'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-[#F5F7F9] to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0F7A4A] to-[#0A5734] rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#1F2933] mb-3">{item.title}</h3>
                <p className="text-sm text-[#52606D] leading-relaxed">{item.desc}</p>
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
              Common questions about insurance claim processing delays
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'Why do insurance claims sometimes take longer than expected?',
                a: 'Claim processing may require document verification, investigation, and policy evaluation, which can extend the processing time depending on the complexity and completeness of documentation.'
              },
              {
                q: 'How long does claim processing usually take?',
                a: 'The timeline varies depending on the type of claim, required documentation, and policy conditions. Some claims may be processed within days, while others may take weeks if additional verification is needed.'
              },
              {
                q: 'What should policyholders do if their claim is delayed?',
                a: 'Reviewing the claim status, ensuring that all required documents are submitted, and understanding the claim process can help clarify the situation. Following up with the insurance company for updates is also recommended.'
              },
              {
                q: 'Can claim delays happen even if documents are submitted?',
                a: 'Yes. Sometimes insurance companies conduct additional verification, investigation, or policy review before approving the claim, which may extend the processing time.'
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
              Experiencing Delays in Your Insurance Claim Process?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Understanding the claim procedure and documentation requirements can help policyholders navigate the situation more effectively. Contact Yashoda Total Solution to learn more about insurance claim and dispute assistance services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-[#F39C12] hover:bg-[#d68910] text-white px-12 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(243,156,18,0.5)]"
                >
                  Contact Us
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
