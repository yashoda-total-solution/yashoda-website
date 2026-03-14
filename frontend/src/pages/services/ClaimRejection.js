import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  XCircle, FileText, AlertCircle, CheckCircle, Shield, 
  ArrowRight, HelpCircle, Users, Phone, Scale, Search
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
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Understanding the reasons behind rejected insurance claims and exploring the steps that may help address the issue. An insurance claim rejection can be frustrating and emotionally difficult for policyholders. Insurance claim rejection may happen due to policy conditions, documentation issues, or interpretation of policy terms.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}></div>
      </section>

      {/* What is Claim Rejection Section */}
      <section className="relative -mt-16 z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-6">
              What is Insurance Claim Rejection?
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
              <p className="leading-relaxed mb-4">
                Common reasons include:
              </p>
              <ul className="space-y-3 ml-6">
                <li>✗ Incomplete or incorrect documentation</li>
                <li>✗ Delay in claim submission</li>
                <li>✗ Policy exclusions or limitations</li>
                <li>✗ Non-disclosure of important information at policy purchase</li>
                <li>✗ Disagreement over claim eligibility</li>
                <li>✗ Incorrect interpretation of policy terms</li>
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
              What Happens After Claim Rejection
            </h2>
            <p className="text-lg text-[#52606D]">
              Understanding the impact and next steps after rejection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertCircle,
                title: 'Confusion About Policy',
                desc: 'Uncertainty about policy conditions and what was actually covered vs. what was promised.',
                color: 'bg-red-50',
                iconBg: 'bg-red-600'
              },
              {
                icon: FileText,
                title: 'Technical Explanations',
                desc: 'The rejection letter may contain complex technical explanations that are hard to understand.',
                color: 'bg-orange-50',
                iconBg: 'bg-orange-600'
              },
              {
                icon: Shield,
                title: 'Unclear Next Steps',
                desc: 'Policyholders are unsure whether the decision is final or if they can challenge it.',
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
              Expert guidance to resolve claim rejection cases effectively
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Team',
                desc: 'Years of experience handling insurance claim rejection complaints and disputes.'
              },
              {
                icon: FileText,
                title: 'Complete Documentation',
                desc: 'We prepare all necessary documents, notices, and complaint letters for you.'
              },
              {
                icon: Scale,
                title: 'Legal Support',
                desc: 'Legal notice drafting and ombudsman complaint filing when needed.'
              },
              {
                icon: CheckCircle,
                title: 'High Success Rate',
                desc: 'Helped hundreds of customers get compensation and policy resolution.'
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
              Our 5-Step Process to Resolve Rejection
            </h2>
            <p className="text-lg text-[#52606D]">
              Systematic approach to address claim rejections
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0F7A4A] to-[#F39C12]"></div>

            <div className="space-y-12">
              {[
                {
                  step: '1',
                  title: 'Case Review & Analysis',
                  desc: 'We review your policy documents, rejection letter, and understand the stated reasons for rejection.'
                },
                {
                  step: '2',
                  title: 'Evidence Collection',
                  desc: 'We gather all supporting documents, policy terms, and correspondence related to your claim.'
                },
                {
                  step: '3',
                  title: 'Response Drafting',
                  desc: 'We prepare a detailed response addressing the rejection reasons point-by-point.'
                },
                {
                  step: '4',
                  title: 'Complaint Filing',
                  desc: 'We file complaints with the insurance company grievance cell and escalate if needed.'
                },
                {
                  step: '5',
                  title: 'Ombudsman Escalation',
                  desc: 'If unresolved, we escalate to Insurance Ombudsman or IRDAI for further action.'
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
              Real-Life Rejection Examples
            </h2>
            <p className="text-lg text-[#52606D]">
              Common scenarios we help resolve
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Example 1 – Missing Medical Documentation',
                problem: 'A policyholder submits a health insurance claim after hospital treatment.',
                reality: 'The insurance company rejects the claim because certain medical reports were not submitted.',
                solution: 'We helped gather the missing documents and filed a fresh claim which was approved.'
              },
              {
                title: 'Example 2 – Policy Exclusion Clause',
                problem: 'A customer files a claim for treatment of a specific illness.',
                reality: 'The claim is rejected because the illness falls under the policy\'s exclusion list.',
                solution: 'We reviewed the policy terms and helped the customer understand the exclusion clause.'
              },
              {
                title: 'Example 3 – Late Claim Submission',
                problem: 'After a vehicle accident, the policyholder delays reporting to the insurance company.',
                reality: 'The claim is rejected because it wasn\'t reported within the policy-specified timeframe.',
                solution: 'We filed an appeal explaining the delay circumstances; partial claim was reconsidered.'
              },
              {
                title: 'Example 4 – Pre-Existing Condition Dispute',
                problem: 'A health insurance claim is rejected due to pre-existing condition classification.',
                reality: 'The insurer believes the illness existed before the policy was issued.',
                solution: 'We collected medical records proving the condition started post-policy and got approval.'
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
                    <h4 className="text-sm font-semibold text-red-600 mb-2">❌ Problem:</h4>
                    <p className="text-sm text-[#52606D] leading-relaxed">{scenario.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-orange-600 mb-2">⚠️ Reality:</h4>
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
              Common questions about claim rejection
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
                a: 'Required documents vary depending on the type of insurance policy and claim situation. Common documents include policy papers, claim forms, medical reports, and bills.'
              },
              {
                q: 'Why do claims get rejected?',
                a: 'Claims may be rejected due to missing documents, policy exclusions, delayed submission, non-disclosure, or policy interpretation issues.'
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
              Facing Confusion After Claim Rejection?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Understanding the reason behind claim rejection can help policyholders evaluate their options. Contact Yashoda Total Solution to learn more about claim rejection assistance services.
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

export default ClaimRejection;
