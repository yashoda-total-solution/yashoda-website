import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, FileText, AlertCircle, CheckCircle, Shield, 
  ArrowRight, HelpCircle, Users, Phone, Building2, FileCheck
} from 'lucide-react';

const PMJJBY = () => {
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
              <span className="text-white text-sm">PMJJBY</span>
            </div>
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-[#F39C12] rounded-2xl flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY) Assistance
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Understanding the PMJJBY life insurance scheme and how beneficiaries can navigate the claim process. PMJJBY is a government-supported life insurance scheme that provides affordable life insurance coverage to eligible individuals. Understanding how the scheme works is important for beneficiaries seeking to access insurance benefits.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}></div>
      </section>

      {/* What is PMJJBY Section */}
      <section className="relative -mt-16 z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-6">
              What is Pradhan Mantri Jeevan Jyoti Bima Yojana?
            </h2>
            <div className="prose prose-lg max-w-none text-[#52606D]">
              <p className="leading-relaxed mb-4">
                Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY) is a life insurance scheme launched by the Government of India to provide affordable life insurance coverage to eligible citizens.
              </p>
              <p className="leading-relaxed mb-4">
                The scheme is generally <strong>linked to a savings bank account</strong>, allowing individuals to enroll easily through their bank. While the scheme offers important financial protection, beneficiaries may sometimes find it difficult to understand the claim procedure and documentation required.
              </p>
              <p className="leading-relaxed mb-4">
                In many situations, family members or beneficiaries become aware of the policy only after an unfortunate event occurs, which can create uncertainty about how to proceed with the claim.
              </p>
              <p className="leading-relaxed mb-4">
                Key features of PMJJBY:
              </p>
              <ul className="space-y-3 ml-6">
                <li>• Affordable annual premium for life insurance coverage</li>
                <li>• Enrollment through savings bank account</li>
                <li>• Government-backed life insurance scheme</li>
                <li>• Coverage for eligible age groups</li>
                <li>• Simple renewal process</li>
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
              Common PMJJBY Claim Challenges
            </h2>
            <p className="text-lg text-[#52606D]">
              Issues beneficiaries may encounter during claim submission
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertCircle,
                title: 'Lack of Awareness',
                desc: 'Beneficiaries are unaware that the policyholder was enrolled in PMJJBY scheme',
                color: 'bg-red-50',
                iconBg: 'bg-red-600'
              },
              {
                icon: HelpCircle,
                title: 'Eligibility Confusion',
                desc: 'Uncertainty regarding claim eligibility and coverage conditions',
                color: 'bg-orange-50',
                iconBg: 'bg-orange-600'
              },
              {
                icon: FileText,
                title: 'Missing Documentation',
                desc: 'Difficulty gathering required documents for claim submission',
                color: 'bg-blue-50',
                iconBg: 'bg-blue-600'
              },
              {
                icon: FileCheck,
                title: 'Process Uncertainty',
                desc: 'Confusion about how to initiate and complete the claim process',
                color: 'bg-purple-50',
                iconBg: 'bg-purple-600'
              },
              {
                icon: Building2,
                title: 'Bank Procedures',
                desc: 'Understanding bank claim submission and verification procedures',
                color: 'bg-teal-50',
                iconBg: 'bg-teal-600'
              },
              {
                icon: CheckCircle,
                title: 'Verification Delays',
                desc: 'Processing delays due to incomplete claim applications',
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
              What Happens in PMJJBY Claim Cases
            </h2>
            <p className="text-lg text-[#52606D]">
              Understanding the claim discovery and submission process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertCircle,
                title: 'Coverage Discovery',
                desc: 'Family members may discover PMJJBY enrollment only after the unfortunate event.',
                color: 'bg-orange-50',
                iconBg: 'bg-orange-600'
              },
              {
                icon: FileText,
                title: 'Document Collection',
                desc: 'Beneficiaries must gather required documents including death certificate and claim forms.',
                color: 'bg-blue-50',
                iconBg: 'bg-blue-600'
              },
              {
                icon: Building2,
                title: 'Bank Verification',
                desc: 'Bank and insurance provider review documents to verify eligibility and process claim.',
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
              Expert guidance for PMJJBY claim assistance
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
                desc: 'Complete assistance with gathering and organizing required claim documents.'
              },
              {
                icon: Building2,
                title: 'Bank Coordination',
                desc: 'Help with bank communication and claim submission procedures.'
              },
              {
                icon: CheckCircle,
                title: 'Proven Results',
                desc: 'Successfully helped numerous beneficiaries with PMJJBY claims.'
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
              Our 5-Step PMJJBY Claim Assistance Process
            </h2>
            <p className="text-lg text-[#52606D]">
              Simplified guidance for PMJJBY beneficiaries
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0F7A4A] to-[#F39C12]"></div>

            <div className="space-y-12">
              {[
                {
                  step: '1',
                  title: 'Enrollment Verification',
                  desc: 'We help verify if the policyholder was enrolled in PMJJBY through their bank account.'
                },
                {
                  step: '2',
                  title: 'Eligibility Assessment',
                  desc: 'We review the policy details to confirm eligibility and active coverage status.'
                },
                {
                  step: '3',
                  title: 'Document Collection',
                  desc: 'We assist in gathering all required documents including death certificate and identity proofs.'
                },
                {
                  step: '4',
                  title: 'Claim Form Preparation',
                  desc: 'We help complete the claim application forms accurately with all necessary information.'
                },
                {
                  step: '5',
                  title: 'Bank Submission & Follow-Up',
                  desc: 'We guide you through bank submission and track the claim until processing is complete.'
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
              Real-Life PMJJBY Claim Examples
            </h2>
            <p className="text-lg text-[#52606D]">
              Common scenarios we help resolve
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Example 1 – Family Unaware of Life Insurance Coverage',
                problem: 'A bank customer enrolls in PMJJBY through automatic enrollment.',
                reality: 'After the policyholder passes away, the family learns about the life insurance coverage but is unsure how to begin the claim.',
                solution: 'We verified enrollment, explained the process, and helped submit a complete claim successfully.'
              },
              {
                title: 'Example 2 – Documentation Confusion',
                problem: 'The beneficiary attempts to submit a claim for PMJJBY benefits.',
                reality: 'They face difficulties because they are uncertain about which documents are required for submission.',
                solution: 'We provided a complete document checklist and helped gather all required papers for the claim.'
              },
              {
                title: 'Example 3 – Bank Claim Procedure Uncertainty',
                problem: 'The family approaches the bank to claim the insurance benefit.',
                reality: 'They find it difficult to understand the claim forms and verification procedures required.',
                solution: 'We guided them through each step, helped fill forms correctly, and coordinated with the bank.'
              },
              {
                title: 'Example 4 – Eligibility Clarification',
                problem: 'A beneficiary wants to file a claim but is unsure about eligibility.',
                reality: 'They need to verify whether the policyholder met PMJJBY enrollment conditions at the time.',
                solution: 'We reviewed enrollment records with the bank and confirmed eligibility before proceeding.'
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
              Common questions about PMJJBY
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'What is Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)?',
                a: 'PMJJBY is a government-backed life insurance scheme that provides affordable life insurance coverage to eligible individuals at a minimal annual premium.'
              },
              {
                q: 'Who can enroll in PMJJBY?',
                a: 'Individuals with a savings bank account within the eligible age group (typically 18-50 years) can enroll in the scheme through their bank.'
              },
              {
                q: 'What type of coverage does PMJJBY provide?',
                a: 'The scheme provides life insurance coverage for the policyholder during the active policy period, offering financial protection to beneficiaries.'
              },
              {
                q: 'How can beneficiaries check if someone was enrolled in PMJJBY?',
                a: 'Enrollment is usually linked to the policyholder\'s bank account. Beneficiaries can check with the bank where the account is held to confirm PMJJBY coverage.'
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
              Need Help Understanding PMJJBY Claims?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Understanding the scheme requirements and documentation procedures can help beneficiaries navigate the claim process more confidently. Contact Yashoda Total Solution for expert assistance with PMJJBY claims.
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

export default PMJJBY;
