import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  XCircle, FileX, Clock, AlertCircle, CheckCircle, 
  ArrowRight, HelpCircle, Users, Phone, FileText,
  Shield, Target, Zap, TrendingUp
} from 'lucide-react';

const ClaimRejection = () => {
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
              <span className="text-white text-sm">Insurance Claim Rejection</span>
            </div>
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-[#F39C12] rounded-2xl flex items-center justify-center">
                <XCircle className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Insurance Claim Rejection Assistance
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-4">
              Understanding the reasons behind rejected insurance claims and exploring the steps that may help address the issue.
            </p>
            
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              An insurance claim rejection can be frustrating and emotionally difficult for policyholders. When a claim is denied, many people feel confused about the reasons and uncertain about what steps they should take next. Insurance claim rejection may happen due to policy conditions, documentation issues, or interpretation of policy terms. Understanding the reason behind the rejection is the first step toward addressing the situation.
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
                Insurance claim rejection occurs when an insurance company declines a policyholder's request for claim settlement.
              </p>
              <p className="leading-relaxed mb-4">
                This situation can arise for several reasons, including <strong>incomplete documentation, policy exclusions, missed deadlines, or disagreements regarding the coverage conditions.</strong>
              </p>
              <p className="leading-relaxed mb-4">
                Many policyholders feel uncertain about how to respond when their claim is rejected. The rejection notice may contain technical explanations that are difficult to understand, leaving customers unsure about whether the decision is final or if further steps can be taken.
              </p>
              <p className="leading-relaxed">
                <strong>Yashoda Total Solutions</strong> assists policyholders by helping them understand the claim rejection process, reviewing the circumstances surrounding the rejection, and guiding them through possible steps that may help address the issue.
              </p>
            </div>

            {/* Claim Rejection Flow Diagram */}
            <div className="mt-12 bg-gradient-to-br from-[#F5F7F9] to-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#1F2933] mb-8 text-center">Insurance Claim Rejection Flow</h3>
              <div className="flex flex-col items-center space-y-4">
                {[
                  { label: 'Policy Purchased', icon: Shield },
                  { label: 'Incident Occurs', icon: AlertCircle },
                  { label: 'Customer Files Claim', icon: FileText },
                  { label: 'Insurance Company Reviews Claim', icon: Clock },
                  { label: 'Claim Rejected', icon: XCircle },
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
                        index === 4 ? 'bg-red-100' : 'bg-[#0F7A4A]/10'
                      }`}>
                        <step.icon className={`h-6 w-6 ${index === 4 ? 'text-red-600' : 'text-[#0F7A4A]'}`} />
                      </div>
                      <span className="text-base font-semibold text-[#1F2933]">{step.label}</span>
                    </motion.div>
                    {index < 4 && (
                      <div className="h-8 w-0.5 bg-gradient-to-b from-[#0F7A4A] to-[#F39C12]"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Reasons for Rejection */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Common Reasons for Insurance Claim Rejection
            </h2>
            <p className="text-lg text-[#52606D]">
              Understanding the reason for rejection is important for policyholders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileX,
                title: 'Incomplete Documentation',
                desc: 'Missing or incorrect documents submitted with the claim',
                color: 'bg-red-50',
                iconBg: 'bg-red-600'
              },
              {
                icon: Clock,
                title: 'Delayed Submission',
                desc: 'Claim filed after the policy-specified time period',
                color: 'bg-orange-50',
                iconBg: 'bg-orange-600'
              },
              {
                icon: Shield,
                title: 'Policy Exclusions',
                desc: 'Claim falls under policy limitations or exclusion clauses',
                color: 'bg-blue-50',
                iconBg: 'bg-blue-600'
              },
              {
                icon: AlertCircle,
                title: 'Non-Disclosure',
                desc: 'Important information not disclosed at time of policy purchase',
                color: 'bg-purple-50',
                iconBg: 'bg-purple-600'
              },
              {
                icon: XCircle,
                title: 'Eligibility Dispute',
                desc: 'Disagreement over whether claim meets coverage criteria',
                color: 'bg-pink-50',
                iconBg: 'bg-pink-600'
              },
              {
                icon: FileText,
                title: 'Policy Interpretation',
                desc: 'Incorrect understanding of policy terms and conditions',
                color: 'bg-teal-50',
                iconBg: 'bg-teal-600'
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

      {/* What Happens After Rejection */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              What Happens After a Claim Is Rejected
            </h2>
            <p className="text-lg text-[#52606D] max-w-3xl mx-auto">
              When an insurance claim is rejected, policyholders often receive a rejection letter or communication explaining the reason for the decision. However, the explanation may sometimes be complex or unclear.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'Confusion About Policy',
                desc: 'Uncertainty about policy conditions and coverage terms',
                icon: HelpCircle
              },
              {
                title: 'Unclear Next Steps',
                desc: 'Difficulty understanding what options are available',
                icon: AlertCircle
              },
              {
                title: 'Technical Explanations',
                desc: 'Complex claim explanations that are hard to understand',
                icon: FileText
              },
              {
                title: 'Financial Concerns',
                desc: 'Worries about the financial impact of the rejection',
                icon: TrendingUp
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

          {/* Customer Experience Flow */}
          <motion.div {...fadeUp} className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#1F2933] mb-8 text-center">Customer Experience After Claim Rejection</h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              {[
                'Claim Submitted',
                'Insurance Decision',
                'Claim Rejected',
                'Rejection Letter',
                'Review Details'
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
              Real situations customers may face when their insurance claim is rejected
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Example 1 – Missing Medical Documentation',
                desc: 'A policyholder submits a health insurance claim after hospital treatment. However, the insurance company rejects the claim because certain medical reports or supporting documents were not submitted along with the claim application.',
              },
              {
                title: 'Example 2 – Policy Exclusion Clause',
                desc: 'A customer files a claim for treatment related to a specific illness. The insurance company rejects the claim because the illness falls under the policy\'s exclusion list mentioned in the policy document.',
              },
              {
                title: 'Example 3 – Late Claim Submission',
                desc: 'After a vehicle accident, the policyholder delays reporting the incident to the insurance company. When the claim is eventually submitted, it is rejected because the policy requires claims to be reported within a specific time period.',
              },
              {
                title: 'Example 4 – Pre-Existing Condition Dispute',
                desc: 'A health insurance claim is rejected because the insurer believes the illness existed before the policy was issued, classifying it as a pre-existing condition.',
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

      {/* Understanding Your Policy */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Understanding Your Insurance Policy
            </h2>
            <p className="text-lg text-[#52606D] max-w-3xl mx-auto">
              Insurance policies contain important information that determines whether a claim can be approved. Carefully reviewing these sections can help policyholders better understand the reasons behind claim decisions.
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-[#1F2933] mb-8 text-center">Insurance Claim Understanding Framework</h3>
            <div className="flex flex-col space-y-4">
              {[
                { label: 'Policy Coverage', desc: 'What is covered under your insurance plan', icon: Shield },
                { label: 'Policy Exclusions', desc: 'What is NOT covered or excluded from claims', icon: XCircle },
                { label: 'Claim Documentation', desc: 'Required documents for claim submission', icon: FileText },
                { label: 'Claim Submission Timeline', desc: 'Deadlines for filing and reporting claims', icon: Clock },
                { label: 'Claim Evaluation', desc: 'How insurance companies assess claims', icon: CheckCircle },
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
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-[#1F2933] mb-1">{item.label}</h4>
                      <p className="text-sm text-[#52606D]">{item.desc}</p>
                    </div>
                  </motion.div>
                  {index < 4 && (
                    <div className="h-8 w-0.5 bg-gradient-to-b from-[#0F7A4A] to-[#F39C12] ml-7"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
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
              Professional assistance for insurance claim and dispute resolution
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
              Common questions about insurance claim rejection
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'What does insurance claim rejection mean?',
                a: 'Insurance claim rejection means that the insurance company has declined the claim request based on policy conditions or documentation issues.'
              },
              {
                q: 'Can a rejected insurance claim be reviewed?',
                a: 'In some cases, policyholders may review the claim details and understand the reasons for rejection before deciding what steps to take next.'
              },
              {
                q: 'What documents are required for a claim?',
                a: 'Required documents vary depending on the type of insurance policy and claim situation. Common documents include policy papers, claim forms, medical reports, bills, and identity proof.'
              },
              {
                q: 'Why do claims get rejected?',
                a: 'Claims may be rejected due to missing documents, policy exclusions, delayed submission, non-disclosure of information, or policy interpretation issues.'
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
              Facing Confusion After Your Insurance Claim Was Rejected?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Understanding the reason behind claim rejection can help policyholders evaluate their options and determine possible next steps. Contact Yashoda Total Solution to learn more about insurance claim and dispute assistance services.
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

export default ClaimRejection;
