import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Briefcase, FileText, AlertCircle, Shield, CheckCircle, 
  ArrowRight, HelpCircle, Users, Phone, Target, ClipboardCheck 
} from 'lucide-react';

const PFAccidentalInsurance = () => {
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
              <span className="text-white text-sm">PF Accidental Insurance Claim Assistance</span>
            </div>
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-[#F39C12] rounded-2xl flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                PF Accidental Insurance Claim Assistance
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Understanding accidental insurance benefits linked to Provident Fund schemes and how beneficiaries can navigate the claim process. Certain PF schemes provide accidental insurance benefits to eligible members, though many remain unaware of these benefits or face difficulties with claim procedures.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}></div>
      </section>

      {/* Service Overview Section */}
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
                Some Provident Fund schemes provide accidental insurance coverage to eligible members as part of employee benefit programs. These benefits may provide financial support to the member or their beneficiaries in case of accidental death or disability.
              </p>
              <p className="leading-relaxed mb-4">
                However, many individuals remain unaware that such coverage exists under their PF membership. When an accident occurs, beneficiaries may face confusion about eligibility conditions, claim procedures, and documentation requirements.
              </p>
              <p className="leading-relaxed mb-4">
                In many cases, the process of verifying PF membership details and preparing the necessary documents can be complex.
              </p>
              <p className="leading-relaxed mb-4">
                <strong>Yashoda Total Solutions</strong> assists clients by explaining the eligibility criteria, helping with necessary documentation, and guiding them through the claim submission process to access the insurance benefits available under PF-related schemes.
              </p>
              <p className="leading-relaxed mb-4">
                <strong>PF Accidental Insurance Claim Process:</strong>
              </p>
              <ul className="space-y-3 ml-6">
                <li>• PF Membership Active</li>
                <li>• Accidental Incident Occurs</li>
                <li>• Beneficiary Initiates Claim</li>
                <li>• Documents Submitted for Verification</li>
                <li>• Claim Evaluation and Processing</li>
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
              Common PF Insurance Claim Challenges
            </h2>
            <p className="text-lg text-[#52606D]">
              Beneficiaries may encounter several challenges when attempting to claim benefits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertCircle,
                title: 'Lack of Awareness',
                desc: 'Beneficiaries are unaware that PF membership includes accidental insurance coverage.',
                color: 'bg-red-50',
                iconBg: 'bg-red-600'
              },
              {
                icon: HelpCircle,
                title: 'Eligibility Confusion',
                desc: 'Confusion about eligibility conditions for the claim.',
                color: 'bg-orange-50',
                iconBg: 'bg-orange-600'
              },
              {
                icon: FileText,
                title: 'Missing Documentation',
                desc: 'Difficulty collecting PF membership details and required documents.',
                color: 'bg-blue-50',
                iconBg: 'bg-blue-600'
              },
              {
                icon: ClipboardCheck,
                title: 'PF Record Verification',
                desc: 'Uncertainty regarding the claim submission process.',
                color: 'bg-purple-50',
                iconBg: 'bg-purple-600'
              },
              {
                icon: Target,
                title: 'Claim Processing Delays',
                desc: 'Delays caused by incomplete documentation.',
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

      {/* What Actually Happens Section */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-8 text-center">
              What Actually Happens in PF Accidental Insurance Claim Cases
            </h2>
            
            <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-[#52606D]">
                <p className="leading-relaxed mb-4">
                  In many situations, employees are enrolled in PF schemes through their workplace without fully understanding the insurance benefits that may be associated with the program.
                </p>
                <p className="leading-relaxed mb-4">
                  After an accidental incident occurs, beneficiaries may later discover that the PF member was eligible for accidental insurance benefits.
                </p>
                <p className="leading-relaxed mb-4">
                  At that stage, the beneficiaries must gather the required documents and verify the PF membership details before submitting the claim application.
                </p>
                <p className="leading-relaxed mb-4">
                  The concerned authorities and insurance provider then review the submitted documents to confirm eligibility and determine whether the claim meets the conditions defined under the scheme.
                </p>
                <p className="leading-relaxed mb-4">
                  Understanding these steps helps beneficiaries navigate the claim process more effectively.
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>PF Insurance Claim Review Process:</strong>
                </p>
                <ul className="space-y-3 ml-6">
                  <li>• Accidental Incident Occurs</li>
                  <li>• Beneficiary Learns About PF Insurance Coverage</li>
                  <li>• Claim Application Prepared</li>
                  <li>• Documents Submitted</li>
                  <li>• Verification and Claim Decision</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Example Scenarios Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Example Scenarios
            </h2>
            <p className="text-lg text-[#52606D]">
              Real-world situations where PF accidental insurance claims arise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Example 1 – Family Unaware of PF Insurance Coverage',
                desc: 'An employee is enrolled in a PF scheme through their employer. After an accidental incident, the family later learns that the PF membership included accidental insurance benefits.',
                color: 'from-blue-50 to-cyan-50'
              },
              {
                title: 'Example 2 – PF Membership Verification',
                desc: 'A beneficiary attempts to file a claim but must first confirm the PF membership details and eligibility conditions related to the insurance benefit.',
                color: 'from-purple-50 to-pink-50'
              },
              {
                title: 'Example 3 – Documentation Difficulty',
                desc: 'A family member tries to submit the claim but faces challenges collecting the required documents related to PF records and accident verification.',
                color: 'from-orange-50 to-red-50'
              },
              {
                title: 'Example 4 – Claim Procedure Confusion',
                desc: 'A beneficiary approaches the relevant authority to claim the benefit but finds it difficult to understand the correct process for submitting the claim.',
                color: 'from-green-50 to-emerald-50'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 border-2 border-white shadow-lg`}
              >
                <h3 className="text-xl font-semibold text-[#1F2933] mb-4">{item.title}</h3>
                <p className="text-base text-[#52606D] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Requirements Section */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-8 text-center">
              Understanding PF Insurance Claim Requirements
            </h2>
            
            <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12">
              <p className="text-lg text-[#52606D] leading-relaxed mb-6">
                PF accidental insurance claims typically require certain documents and information to verify eligibility and process the claim.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  'Proof of accidental incident',
                  'PF membership or account details',
                  'Identity and beneficiary information',
                  'Claim application forms',
                  'Verification of eligibility under the PF scheme'
                ].map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#0F7A4A] flex-shrink-0 mt-1" />
                    <p className="text-base text-[#52606D]">{requirement}</p>
                  </div>
                ))}
              </div>

              <p className="text-base text-[#52606D] leading-relaxed mb-4">
                Understanding these documentation requirements helps beneficiaries prepare the claim application properly.
              </p>

              <p className="text-base text-[#52606D] leading-relaxed">
                <strong>PF Insurance Claim Documentation Framework:</strong> PF Membership Verification → Incident Documentation → Claim Application Form → Beneficiary Identification → Claim Evaluation
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Why Yashoda Total Solution?
            </h2>
            <p className="text-lg text-[#52606D]">
              Trusted support for PF accidental insurance claims
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Experienced & Professional Team',
                desc: 'Qualified professionals with industry knowledge and operational expertise.'
              },
              {
                icon: Target,
                title: 'Quick & Transparent Processing',
                desc: 'Systematic workflows supported by clear communication and monitoring.'
              },
              {
                icon: Shield,
                title: 'Customer-First Approach',
                desc: 'Every case handled with attention, empathy, and ethical responsibility.'
              },
              {
                icon: ClipboardCheck,
                title: 'Technology-Driven Monitoring',
                desc: 'Advanced tracking systems ensure accountability and regular updates.'
              },
              {
                icon: CheckCircle,
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
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
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

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'What is PF accidental insurance coverage?',
                answer: 'Some Provident Fund schemes provide accidental insurance benefits for eligible members.'
              },
              {
                question: 'Who can claim PF accidental insurance benefits?',
                answer: 'Beneficiaries of the PF member may be eligible to claim benefits depending on the scheme conditions.'
              },
              {
                question: 'How can beneficiaries confirm PF insurance coverage?',
                answer: 'PF records and related scheme details can help verify whether insurance coverage applies.'
              },
              {
                question: 'What documents are required for PF accidental insurance claims?',
                answer: 'Required documents may include PF membership details, incident proof, and claim application forms.'
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#0F7A4A] to-[#0A5734] rounded-xl flex items-center justify-center">
                      <HelpCircle className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#1F2933] mb-3">{faq.question}</h3>
                    <p className="text-base text-[#52606D] leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F7A4A] to-[#0A5734] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help Understanding PF Accidental Insurance Claim Procedures?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Understanding eligibility conditions and documentation requirements can help beneficiaries navigate the claim process more confidently.
            </p>
            <p className="text-lg text-white/90 mb-8">
              Contact Yashoda Total Solution to learn more about assistance with PF accidental insurance claim support.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-[#F39C12] hover:bg-[#E67E22] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              <span>Contact Us Now</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PFAccidentalInsurance;
