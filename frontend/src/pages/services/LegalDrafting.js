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

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Why Yashoda Total Solution?
            </h2>
            <p className="text-lg text-[#52606D]">
              Trusted support for legal drafting and document verification
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              Our 5-Step Document Drafting Process
            </h2>
            <p className="text-lg text-[#52606D]">
              Simple, transparent, and effective approach
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0F7A4A] to-[#F39C12]"></div>

            <div className="space-y-12">
              {[
                {
                  step: '1',
                  title: 'Requirement Understanding',
                  desc: 'We discuss your needs, understand the purpose of the document, and gather all relevant information about the parties involved.'
                },
                {
                  step: '2',
                  title: 'Information & Evidence Collection',
                  desc: 'We collect all necessary details, supporting documents, and facts required to draft or verify the legal document.'
                },
                {
                  step: '3',
                  title: 'Document Drafting or Review',
                  desc: 'We prepare a structured draft with clear legal terms or thoroughly review existing documents for clarity and completeness.'
                },
                {
                  step: '4',
                  title: 'Legal Structure Verification',
                  desc: 'We verify that all legal terms, clauses, and conditions are properly defined and aligned with requirements.'
                },
                {
                  step: '5',
                  title: 'Final Document Delivery',
                  desc: 'We provide the final verified document with explanations of key terms and answer any questions you may have.'
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

                  {/* Center Circle */}
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
              Real-Life Drafting & Verification Examples
            </h2>
            <p className="text-lg text-[#52606D]">
              These are common scenarios we help with
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Case 1: Business Agreement Drafting',
                problem: 'Two business partners plan to start a joint venture and require a written agreement outlining their roles, financial contributions, and responsibilities.',
                reality: 'Without clear documentation, disagreements about roles and profit-sharing could arise later, causing business conflicts.',
                solution: 'We drafted a comprehensive partnership agreement defining each partner\'s duties, capital contributions, profit distribution, and exit terms.'
              },
              {
                title: 'Case 2: Property Rental Agreement',
                problem: 'A property owner wants to create a rental agreement that clearly defines the terms of rent, duration of tenancy, and responsibilities of both parties.',
                reality: 'Many rental disputes arise from unclear terms regarding maintenance, rent increases, and notice periods.',
                solution: 'We prepared a detailed rental agreement covering rent payment terms, maintenance responsibilities, security deposit, and termination clauses.'
              },
              {
                title: 'Case 3: Legal Notice Reply',
                problem: 'An individual receives a legal notice and needs to prepare a structured response explaining their position and addressing the claims mentioned in the notice.',
                reality: 'The legal notice contained allegations that needed a point-by-point response with supporting facts and legal references.',
                solution: 'We drafted a comprehensive reply notice addressing each allegation, providing factual clarifications and reserving legal rights.'
              },
              {
                title: 'Case 4: Document Verification Before Signing',
                problem: 'A person is asked to sign a contract and wants to ensure that the terms and conditions are clearly written and legally appropriate before signing.',
                reality: 'The contract contained ambiguous clauses regarding payment terms, liability limitations, and termination conditions.',
                solution: 'We reviewed the contract, highlighted problematic clauses, suggested modifications, and helped negotiate better terms.'
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

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#52606D]">
              Common questions about legal drafting and verification
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'What is legal drafting?',
                a: 'Legal drafting is the preparation of written legal documents such as agreements, notices, or contracts.'
              },
              {
                q: 'Why is document verification important?',
                a: 'Verification helps identify unclear clauses, missing information, or potential legal risks before the document is used.'
              },
              {
                q: 'Who may need legal drafting services?',
                a: 'Individuals, business owners, property owners, and organizations may require drafting support for various legal documents.'
              },
              {
                q: 'Can existing documents be reviewed before signing?',
                a: 'Yes, documents can be reviewed and verified to ensure the terms are clear and appropriate.'
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
              Need Help with Document Drafting or Verification?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Understanding the structure and legal wording of documents can help avoid confusion and reduce the chances of disputes. Contact us today for professional drafting support.
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

export default LegalDrafting;
