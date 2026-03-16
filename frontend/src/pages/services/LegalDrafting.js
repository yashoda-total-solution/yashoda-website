import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileText, CheckCircle, AlertCircle, Shield, 
  ArrowRight, HelpCircle, Users, Phone, Target, Gavel, Edit 
} from 'lucide-react';

const LegalDrafting = () => {
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
              <span className="text-white text-sm">Legal Drafting & Verification Support</span>
            </div>
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-[#F39C12] rounded-2xl flex items-center justify-center">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Legal Drafting & Verification Support
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Ensuring clarity, accuracy, and legal protection in important documents and agreements. Legal documents form the foundation of many personal, financial, and business decisions. Even a small mistake or unclear wording can create misunderstandings or legal complications later.
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
                Legal drafting involves preparing documents that clearly describe rights, responsibilities, and agreements between parties. These documents may include contracts, notices, agreements, or other legal records used in personal, business, or administrative matters.
              </p>
              <p className="leading-relaxed mb-4">
                Verification of legal documents is equally important. Reviewing a document before it is signed or submitted can help identify unclear terms, missing clauses, or potential legal risks.
              </p>
              <p className="leading-relaxed mb-4">
                Many individuals and businesses may not fully understand the legal language used in documents, which can lead to confusion or unintended consequences.
              </p>
              <p className="leading-relaxed mb-4">
                <strong>Yashoda Total Solutions</strong> assists clients by carefully reviewing documents, verifying the legal structure, and preparing well-organized drafts that clearly communicate the intended terms and conditions.
              </p>
              <p className="leading-relaxed mb-4">
                <strong>Legal Drafting Process Flow:</strong>
              </p>
              <ul className="space-y-3 ml-6">
                <li>• Client Explains Requirement</li>
                <li>• Document Details Collected</li>
                <li>• Draft Prepared or Existing Document Reviewed</li>
                <li>• Legal Terms Structured Clearly</li>
                <li>• Final Document Verified</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Situations Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Common Situations Where Legal Drafting Is Needed
            </h2>
            <p className="text-lg text-[#52606D]">
              Legal drafting and verification may be required in many situations where written agreements are necessary
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Edit,
                title: 'Business Agreements',
                desc: 'Preparing contracts or agreements between parties with clear terms and responsibilities.',
                color: 'bg-blue-50',
                iconBg: 'bg-blue-600'
              },
              {
                icon: AlertCircle,
                title: 'Property Documents',
                desc: 'Drafting property or rental agreements that define rights and obligations.',
                color: 'bg-purple-50',
                iconBg: 'bg-purple-600'
              },
              {
                icon: FileText,
                title: 'Legal Notices',
                desc: 'Responding to or issuing legal notices with proper structure and language.',
                color: 'bg-orange-50',
                iconBg: 'bg-orange-600'
              },
              {
                icon: Gavel,
                title: 'Official Applications',
                desc: 'Preparing formal complaints or legal statements for official submission.',
                color: 'bg-red-50',
                iconBg: 'bg-red-600'
              },
              {
                icon: CheckCircle,
                title: 'Contract Verification',
                desc: 'Reviewing documents before signing or submission to identify risks.',
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
              What Actually Happens During Legal Drafting and Verification
            </h2>
            
            <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-[#52606D]">
                <p className="leading-relaxed mb-4">
                  During the drafting or verification process, the client provides details about the document they require or the document they wish to review.
                </p>
                <p className="leading-relaxed mb-4">
                  The information and relevant facts are carefully examined to understand the purpose of the document and the relationship between the parties involved.
                </p>
                <p className="leading-relaxed mb-4">
                  The document is then structured in a clear format with appropriate legal terminology, ensuring that the terms and conditions are properly defined.
                </p>
                <p className="leading-relaxed mb-4">
                  When verifying an existing document, the language and clauses are reviewed to identify any ambiguities or missing elements that may affect the legal validity or clarity of the document.
                </p>
                <p className="leading-relaxed mb-4">
                  This process helps ensure that the document accurately reflects the intended agreement or communication.
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>Document Review and Verification Process:</strong>
                </p>
                <ul className="space-y-3 ml-6">
                  <li>• Client Shares Document or Requirement</li>
                  <li>• Document Content Reviewed</li>
                  <li>• Legal Terms and Clauses Checked</li>
                  <li>• Corrections and Clarifications Added</li>
                  <li>• Final Document Prepared</li>
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
              Real-world situations where legal drafting and verification are needed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Example 1 – Business Agreement Drafting',
                desc: 'Two business partners plan to start a joint venture and require a written agreement outlining their roles, financial contributions, and responsibilities.',
                color: 'from-blue-50 to-cyan-50'
              },
              {
                title: 'Example 2 – Property Rental Agreement',
                desc: 'A property owner wants to create a rental agreement that clearly defines the terms of rent, duration of tenancy, and responsibilities of both parties.',
                color: 'from-purple-50 to-pink-50'
              },
              {
                title: 'Example 3 – Legal Notice Reply',
                desc: 'An individual receives a legal notice and needs to prepare a structured response explaining their position and addressing the claims mentioned in the notice.',
                color: 'from-orange-50 to-red-50'
              },
              {
                title: 'Example 4 – Document Verification Before Signing',
                desc: 'A person is asked to sign a contract and wants to ensure that the terms and conditions are clearly written and legally appropriate before signing.',
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
              Understanding Legal Drafting Requirements
            </h2>
            
            <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12">
              <p className="text-lg text-[#52606D] leading-relaxed mb-6">
                Preparing or verifying a legal document typically requires certain information related to the purpose and parties involved in the document.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  'Details of the parties involved in the agreement',
                  'Description of the transaction or relationship',
                  'Terms and conditions agreed between parties',
                  'Supporting documents or records related to the matter'
                ].map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#0F7A4A] flex-shrink-0 mt-1" />
                    <p className="text-base text-[#52606D]">{requirement}</p>
                  </div>
                ))}
              </div>

              <p className="text-base text-[#52606D] leading-relaxed mb-4">
                Providing clear and accurate information helps ensure that the document reflects the intended terms properly.
              </p>

              <p className="text-base text-[#52606D] leading-relaxed">
                <strong>Legal Document Preparation Framework:</strong> Party Details → Agreement Terms → Supporting Information → Legal Structure → Final Document Preparation
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
              Trusted support for legal drafting and document verification
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
                icon: Gavel,
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
                question: 'What is legal drafting?',
                answer: 'Legal drafting is the preparation of written legal documents such as agreements, notices, or contracts.'
              },
              {
                question: 'Why is document verification important?',
                answer: 'Verification helps identify unclear clauses, missing information, or potential legal risks before the document is used.'
              },
              {
                question: 'Who may need legal drafting services?',
                answer: 'Individuals, business owners, property owners, and organizations may require drafting support for various legal documents.'
              },
              {
                question: 'Can existing documents be reviewed before signing?',
                answer: 'Yes, documents can be reviewed and verified to ensure the terms are clear and appropriate.'
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
              Need Help Preparing or Verifying an Important Legal Document?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Understanding the structure and legal wording of documents can help avoid confusion and reduce the chances of disputes.
            </p>
            <p className="text-lg text-white/90 mb-8">
              Contact Yashoda Total Solution to learn more about legal drafting and document verification support.
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

export default LegalDrafting;
