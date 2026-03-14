import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  DollarSign, FileText, AlertCircle, CheckCircle, Shield, 
  ArrowRight, HelpCircle, Users, Phone, Calculator,
  Zap, Target, TrendingUp, MinusCircle, Percent
} from 'lucide-react';

const ClaimShortSettled = () => {
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
              <span className="text-white text-sm">Claim Short-Settled</span>
            </div>
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-[#F39C12] rounded-2xl flex items-center justify-center">
                <MinusCircle className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Claim Short-Settled Assistance
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Understanding situations where insurance claims are approved but settled for a lower amount than expected. Sometimes insurance companies approve a claim but pay only a portion of the total claimed amount. This situation is known as a short settlement or partial claim settlement. Understanding the reasons behind the reduced claim amount is important for evaluating the situation and determining possible next steps.
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
                A short settlement occurs when an insurance company approves a claim but pays only part of the total claimed amount.
              </p>
              <p className="leading-relaxed mb-4">
                This can happen when certain expenses fall outside the policy coverage or when <strong>policy limits and deductions apply.</strong>
              </p>
              <p className="leading-relaxed mb-4">
                For many policyholders, the difference between the claimed amount and the approved settlement amount can create confusion and financial concerns.
              </p>
              <p className="leading-relaxed">
                Understanding how the insurance company calculates the claim amount and reviewing the policy terms carefully can help clarify why a partial settlement occurred. <strong>Yashoda Total Solutions</strong> assists policyholders by reviewing such situations, explaining possible reasons behind the settlement decision, and helping clients understand the process involved.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Signs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Common Signs of Short Claim Settlement
            </h2>
            <p className="text-lg text-[#52606D]">
              Policyholders may notice certain signs when a claim has been settled for less than expected
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: 'Lower Settlement Amount',
                desc: 'The approved claim amount is significantly lower than the submitted expenses',
                color: 'bg-red-50',
                iconBg: 'bg-red-600'
              },
              {
                icon: FileText,
                title: 'Excluded Charges',
                desc: 'Certain hospital or service charges are not included in the settlement',
                color: 'bg-orange-50',
                iconBg: 'bg-orange-600'
              },
              {
                icon: Shield,
                title: 'Policy Limits Applied',
                desc: 'Maximum coverage limits reduce the total reimbursed amount',
                color: 'bg-blue-50',
                iconBg: 'bg-blue-600'
              },
              {
                icon: AlertCircle,
                title: 'Non-Covered Services',
                desc: 'Some treatments or services are not covered under the policy',
                color: 'bg-purple-50',
                iconBg: 'bg-purple-600'
              },
              {
                icon: MinusCircle,
                title: 'Deductibles Applied',
                desc: 'Policy deductibles are subtracted from the claim amount',
                color: 'bg-teal-50',
                iconBg: 'bg-teal-600'
              },
              {
                icon: Percent,
                title: 'Depreciation Deductions',
                desc: 'Asset depreciation reduces the settlement in motor or property claims',
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
              What Actually Happens in Short Settlement Cases
            </h2>
            <p className="text-lg text-[#52606D] max-w-3xl mx-auto">
              When a claim is submitted, the insurance company reviews the documents and evaluates the expenses according to policy conditions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Policy Conditions Applied',
                desc: 'Insurer applies coverage limits and policy terms during evaluation',
                color: 'bg-orange-50',
                iconBg: 'bg-orange-600'
              },
              {
                icon: Calculator,
                title: 'Deductions Calculated',
                desc: 'Various deductions such as depreciation, deductibles, or co-pay are applied',
                color: 'bg-blue-50',
                iconBg: 'bg-blue-600'
              },
              {
                icon: AlertCircle,
                title: 'Technical Explanations',
                desc: 'Settlement reports may contain technical language that is difficult to understand',
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
              Claim Evaluation Process
            </h2>
            <p className="text-lg text-[#52606D]">
              How insurers calculate the final claim settlement amount
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Claim Submitted',
                  desc: 'Policyholder submits claim with complete documentation and expense details'
                },
                {
                  step: '2',
                  title: 'Documents Verified',
                  desc: 'Insurance company verifies all submitted documents and bills'
                },
                {
                  step: '3',
                  title: 'Policy Conditions Applied',
                  desc: 'Coverage limits, exclusions, and policy terms are evaluated'
                },
                {
                  step: '4',
                  title: 'Deductions Calculated',
                  desc: 'Deductibles, depreciation, and other applicable deductions are computed'
                },
                {
                  step: '5',
                  title: 'Final Settlement Approved',
                  desc: 'Final reduced amount is approved and paid to the policyholder'
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
                      <div className="w-10 h-10 bg-[#F39C12] rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-base text-white/90 leading-relaxed pl-14">{item.desc}</p>
                  </div>
                  {index < 4 && (
                    <div className="h-6 w-0.5 bg-[#F39C12] ml-5 my-2"></div>
                  )}
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
              Real-Life Short Settlement Examples
            </h2>
            <p className="text-lg text-[#52606D]">
              Common scenarios where claims are settled for reduced amounts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Example 1 – Hospital Room Rent Limit',
                claimed: '₹1,20,000',
                settled: '₹80,000',
                reason: 'A patient receives hospital treatment and submits a claim for ₹1,20,000. However, the insurance company settles only ₹80,000 because the hospital room rent exceeded the limit allowed under the policy.'
              },
              {
                title: 'Example 2 – Non-Covered Medical Items',
                claimed: '₹90,000',
                settled: '₹65,000',
                reason: 'A hospital bill includes certain items such as medical equipment or special services that are not covered by the insurance policy. These charges are removed from the claim amount during evaluation.'
              },
              {
                title: 'Example 3 – Depreciation in Motor Insurance',
                claimed: '₹70,000',
                settled: '₹50,000',
                reason: 'After a vehicle accident, the repair bill amounts to ₹70,000. The insurance company settles only ₹50,000 because depreciation deductions apply to certain replaced parts.'
              },
              {
                title: 'Example 4 – Policy Sub-Limits',
                claimed: '₹90,000',
                settled: '₹60,000',
                reason: 'A policy includes specific limits for certain treatments. Although the total hospital bill is ₹90,000, the insurer approves only ₹60,000 because the treatment category has a maximum payout limit.'
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
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="text-sm font-semibold text-red-600">Claimed Amount:</span>
                    <span className="text-base font-bold text-red-700">{scenario.claimed}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-semibold text-green-600">Settled Amount:</span>
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
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Understanding Claim Settlement Calculations
            </h2>
            <p className="text-lg text-[#52606D]">
              Key factors that determine the final settlement amount
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Coverage Limits',
                desc: 'Maximum limits for specific treatments or damages'
              },
              {
                icon: MinusCircle,
                title: 'Deductibles',
                desc: 'Amount that must be paid by the policyholder'
              },
              {
                icon: Percent,
                title: 'Depreciation',
                desc: 'Value reduction for certain assets or parts'
              },
              {
                icon: AlertCircle,
                title: 'Exclusions',
                desc: 'Specific services or treatments not covered'
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
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#1F2933] mb-3">{item.title}</h3>
                <p className="text-sm text-[#52606D] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Yashoda Section */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Why Choose Yashoda Total Solution?
            </h2>
            <p className="text-lg text-[#52606D]">
              Expert guidance for claim settlement disputes and evaluations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Team',
                desc: 'Qualified professionals with years of experience in insurance claim evaluation'
              },
              {
                icon: FileText,
                title: 'Complete Review',
                desc: 'Thorough analysis of claim documents and policy terms'
              },
              {
                icon: Calculator,
                title: 'Settlement Analysis',
                desc: 'Detailed evaluation of how settlement amounts were calculated'
              },
              {
                icon: CheckCircle,
                title: 'Proven Results',
                desc: 'Successfully helped numerous clients understand and resolve short settlements'
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

      {/* FAQs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#52606D]">
              Common questions about short claim settlements
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'What does short claim settlement mean?',
                a: 'Short settlement occurs when the insurance company approves a claim but pays only part of the claimed amount due to policy limits, deductions, or exclusions.'
              },
              {
                q: 'Why do insurance companies reduce claim amounts?',
                a: 'The reduction may happen due to policy limits, exclusions, depreciation deductions, deductibles, or non-covered expenses as specified in the policy terms.'
              },
              {
                q: 'Can the settlement amount differ from the hospital bill?',
                a: 'Yes, the approved amount may differ depending on policy conditions, coverage limits, room rent limits, and which medical services are covered under the policy.'
              },
              {
                q: 'How can policyholders understand the settlement calculation?',
                a: 'Reviewing the policy document and claim settlement report can help explain the deductions applied. The settlement report usually lists all deductions and reasons for the reduced amount.'
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
              Received a Claim Settlement Amount That is Lower Than Expected?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Understanding how the claim amount was calculated can help policyholders evaluate the situation and review their available options. Contact Yashoda Total Solution to learn more about insurance claim and dispute assistance services.
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

export default ClaimShortSettled;
