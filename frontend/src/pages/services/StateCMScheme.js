import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, FileText, AlertCircle, CheckCircle, Shield, 
  ArrowRight, HelpCircle, Users, Phone, UserCheck, FileCheck
} from 'lucide-react';

const StateCMScheme = () => {
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
              <span className="text-white text-sm">State CM Insurance Scheme</span>
            </div>
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-[#F39C12] rounded-2xl flex items-center justify-center">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                State Chief Minister Insurance Scheme Assistance
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Understanding state government insurance schemes and how beneficiaries can navigate the claim and application process. Many state governments provide insurance schemes to support citizens with financial protection. Understanding how the scheme works is important for individuals seeking to access these benefits.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}></div>
      </section>

      {/* What is State CM Scheme Section */}
      <section className="relative -mt-16 z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-6">
              What are State Chief Minister Insurance Schemes?
            </h2>
            <div className="prose prose-lg max-w-none text-[#52606D]">
              <p className="leading-relaxed mb-4">
                State Chief Minister Insurance Schemes are government programs designed to provide financial assistance and protection to eligible citizens, particularly for healthcare expenses or other insured events.
              </p>
              <p className="leading-relaxed mb-4">
                These schemes aim to support individuals and families by <strong>reducing the financial burden associated with medical treatment</strong> and other eligible situations.
              </p>
              <p className="leading-relaxed mb-4">
                However, many beneficiaries face challenges understanding the scheme requirements, eligibility criteria, and claim procedures. The documentation process and application steps can sometimes be difficult to navigate, especially for individuals unfamiliar with government insurance systems.
              </p>
              <p className="leading-relaxed mb-4">
                Key aspects of state insurance schemes:
              </p>
              <ul className="space-y-3 ml-6">
                <li>• Government-backed financial protection programs</li>
                <li>• Healthcare expense coverage for eligible citizens</li>
                <li>• State-specific eligibility criteria and benefits</li>
                <li>• Application and verification procedures</li>
                <li>• Support for medical emergencies and treatment</li>
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
              Common Scheme Application Challenges
            </h2>
            <p className="text-lg text-[#52606D]">
              Issues beneficiaries may face during application or claims
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: HelpCircle,
                title: 'Eligibility Confusion',
                desc: 'Uncertainty about whether they qualify for the scheme benefits',
                color: 'bg-red-50',
                iconBg: 'bg-red-600'
              },
              {
                icon: FileText,
                title: 'Application Difficulty',
                desc: 'Confusion regarding application procedures and submission process',
                color: 'bg-orange-50',
                iconBg: 'bg-orange-600'
              },
              {
                icon: FileCheck,
                title: 'Missing Documents',
                desc: 'Difficulty gathering required identity and eligibility documents',
                color: 'bg-blue-50',
                iconBg: 'bg-blue-600'
              },
              {
                icon: AlertCircle,
                title: 'Limited Awareness',
                desc: 'Lack of awareness about available scheme benefits and coverage',
                color: 'bg-purple-50',
                iconBg: 'bg-purple-600'
              },
              {
                icon: Building2,
                title: 'Process Complexity',
                desc: 'Government procedures can be complex for first-time applicants',
                color: 'bg-teal-50',
                iconBg: 'bg-teal-600'
              },
              {
                icon: CheckCircle,
                title: 'Verification Delays',
                desc: 'Processing delays due to incomplete or incorrect applications',
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
              What Happens in Scheme Claim Cases
            </h2>
            <p className="text-lg text-[#52606D]">
              Understanding the application and claim submission process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertCircle,
                title: 'Scheme Discovery',
                desc: 'Beneficiaries often learn about the scheme when they require medical treatment or assistance.',
                color: 'bg-orange-50',
                iconBg: 'bg-orange-600'
              },
              {
                icon: FileText,
                title: 'Document Collection',
                desc: 'Gathering required eligibility documents, identity proofs, and medical records.',
                color: 'bg-blue-50',
                iconBg: 'bg-blue-600'
              },
              {
                icon: Building2,
                title: 'Government Review',
                desc: 'Authorities review documents to verify eligibility and process benefits.',
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
              Expert guidance for state insurance scheme assistance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Team',
                desc: 'Qualified professionals with experience in government insurance schemes.'
              },
              {
                icon: FileText,
                title: 'Document Support',
                desc: 'Complete assistance with application forms and required documentation.'
              },
              {
                icon: Building2,
                title: 'Government Coordination',
                desc: 'Help with navigating government procedures and verification processes.'
              },
              {
                icon: CheckCircle,
                title: 'Proven Results',
                desc: 'Successfully helped numerous beneficiaries access state scheme benefits.'
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
              Our 5-Step Scheme Assistance Process
            </h2>
            <p className="text-lg text-[#52606D]">
              Simplified guidance for state insurance scheme beneficiaries
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0F7A4A] to-[#F39C12]"></div>

            <div className="space-y-12">
              {[
                {
                  step: '1',
                  title: 'Eligibility Assessment',
                  desc: 'We help determine if you qualify for the state insurance scheme based on official criteria.'
                },
                {
                  step: '2',
                  title: 'Document Preparation',
                  desc: 'We assist in gathering all required identity, eligibility, and medical documents.'
                },
                {
                  step: '3',
                  title: 'Application Form Assistance',
                  desc: 'We help complete application forms accurately with all necessary information.'
                },
                {
                  step: '4',
                  title: 'Submission Support',
                  desc: 'We guide you through the submission process to government authorities.'
                },
                {
                  step: '5',
                  title: 'Follow-Up & Tracking',
                  desc: 'We track your application status and follow up until benefits are processed.'
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
              Real-Life Scheme Assistance Examples
            </h2>
            <p className="text-lg text-[#52606D]">
              Common scenarios we help resolve
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Example 1 – Eligibility Confusion',
                problem: 'A patient requires medical treatment and learns about a state insurance scheme.',
                reality: 'They are unsure whether they qualify for the benefits provided under the program.',
                solution: 'We reviewed eligibility criteria, verified documentation, and confirmed qualification for the scheme.'
              },
              {
                title: 'Example 2 – Documentation Difficulty',
                problem: 'A beneficiary attempts to apply for benefits under the scheme.',
                reality: 'They face challenges collecting the required identity and eligibility documents.',
                solution: 'We provided a document checklist and helped gather all necessary papers for submission.'
              },
              {
                title: 'Example 3 – Claim Process Uncertainty',
                problem: 'A family member seeks to submit a claim after hospital treatment.',
                reality: 'They are uncertain about the application process and verification procedures.',
                solution: 'We guided them step-by-step through the application process and government procedures.'
              },
              {
                title: 'Example 4 – Awareness After Treatment',
                problem: 'A patient undergoes treatment at a hospital.',
                reality: 'They later discover the treatment may have been eligible for support under a state scheme.',
                solution: 'We helped file a retrospective claim and successfully secured partial benefits.'
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
              Common questions about state insurance schemes
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'What are State Chief Minister Insurance Schemes?',
                a: 'These are government insurance programs designed to provide financial support to eligible citizens for healthcare or other insured events, specific to each state.'
              },
              {
                q: 'Who can benefit from these schemes?',
                a: 'Eligibility depends on the specific scheme and the criteria defined by the state government, typically based on income, residency, and other factors.'
              },
              {
                q: 'What documents are required for application or claims?',
                a: 'Typical documents may include identity proof (Aadhaar, voter ID), eligibility verification, income certificate, medical records, and application forms.'
              },
              {
                q: 'How can beneficiaries confirm eligibility for the scheme?',
                a: 'Eligibility can usually be verified through official scheme guidelines available on government portals or by contacting the relevant government department.'
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
              Need Help with State Insurance Schemes?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Understanding eligibility requirements and documentation procedures can help beneficiaries navigate the application and claim process more confidently. Contact Yashoda Total Solution for expert assistance.
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

export default StateCMScheme;
