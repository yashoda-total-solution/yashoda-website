import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Scale, FileText, AlertCircle, Shield, CheckCircle, 
  ArrowRight, HelpCircle, Users, Phone, Target, Gavel 
} from 'lucide-react';

const LegalConsultation = () => {
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
              <span className="text-white text-sm">Legal Consultation</span>
            </div>
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-[#F39C12] rounded-2xl flex items-center justify-center">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Legal Consultation
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Understanding legal situations clearly and evaluating possible paths before taking formal legal action. Legal consultation helps individuals understand their legal situation, rights, and possible options before initiating any formal legal process.
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
                Legal consultation is the process of discussing a legal issue with experienced professionals to understand the facts, review documents, and evaluate possible legal options.
              </p>
              <p className="leading-relaxed mb-4">
                Many individuals face uncertainty when dealing with disputes, insurance issues, financial conflicts, or other legal matters. Without proper guidance, it can be difficult to determine whether a case has strong legal grounds or what steps should be taken next.
              </p>
              <p className="leading-relaxed mb-4">
                A consultation allows clients to present their situation and receive a structured review of their documents and evidence.
              </p>
              <p className="leading-relaxed mb-4">
                At <strong>Yashoda Total Solutions</strong>, legal consultation focuses on providing a realistic understanding of the situation by carefully reviewing the facts and identifying possible risks and opportunities before proceeding further.
              </p>
              <p className="leading-relaxed mb-4">
                <strong>Legal Consultation Process Flow:</strong>
              </p>
              <ul className="space-y-3 ml-6">
                <li>• Client Presents Issue</li>
                <li>• Case Details Reviewed</li>
                <li>• Documents and Evidence Evaluated</li>
                <li>• Legal Position Analyzed</li>
                <li>• Possible Solutions Identified</li>
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
              Common Situations Where Legal Consultation Is Needed
            </h2>
            <p className="text-lg text-[#52606D]">
              Individuals and businesses often seek legal consultation when they face situations that require clarity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertCircle,
                title: 'Financial Disputes',
                desc: 'Disputes involving financial transactions that need legal clarity and evaluation.',
                color: 'bg-red-50',
                iconBg: 'bg-red-600'
              },
              {
                icon: Shield,
                title: 'Insurance Issues',
                desc: 'Confusion regarding insurance claims or settlements requiring legal assessment.',
                color: 'bg-blue-50',
                iconBg: 'bg-blue-600'
              },
              {
                icon: FileText,
                title: 'Contract Conflicts',
                desc: 'Disagreements related to contracts or services that need legal review.',
                color: 'bg-orange-50',
                iconBg: 'bg-orange-600'
              },
              {
                icon: Gavel,
                title: 'Legal Notices',
                desc: 'Legal notices received from another party requiring professional guidance.',
                color: 'bg-purple-50',
                iconBg: 'bg-purple-600'
              },
              {
                icon: Target,
                title: 'Uncertain Legal Position',
                desc: 'Uncertainty about the legal strength of a case before proceeding further.',
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
              What Actually Happens During a Legal Consultation
            </h2>
            
            <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-[#52606D]">
                <p className="leading-relaxed mb-4">
                  During a legal consultation, the client explains the situation and provides relevant documents or information related to the issue.
                </p>
                <p className="leading-relaxed mb-4">
                  The consultation typically involves a detailed discussion to understand the background of the case and the events that led to the dispute.
                </p>
                <p className="leading-relaxed mb-4">
                  Legal professionals then review the documents, analyze the available evidence, and evaluate the legal position of the case.
                </p>
                <p className="leading-relaxed mb-4">
                  This process helps identify possible legal strategies, potential risks, and realistic outcomes based on the facts presented.
                </p>
                <p className="leading-relaxed mb-4">
                  Understanding these aspects allows individuals to make informed decisions before taking further legal steps.
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>Legal Case Evaluation Process:</strong>
                </p>
                <ul className="space-y-3 ml-6">
                  <li>• Client Shares Case Details</li>
                  <li>• Evidence and Documents Reviewed</li>
                  <li>• Legal Strength and Risks Evaluated</li>
                  <li>• Possible Legal Strategies Identified</li>
                  <li>• Client Understands Available Options</li>
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
              Real-world situations where legal consultation is needed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Example 1 – Insurance Claim Dispute',
                desc: 'A policyholder believes their insurance claim was not handled properly and wants to understand whether the situation has legal merit before proceeding further.',
                color: 'from-blue-50 to-cyan-50'
              },
              {
                title: 'Example 2 – Contractual Disagreement',
                desc: 'Two parties enter into an agreement, but one party fails to meet the agreed terms. The affected party seeks consultation to understand possible legal options.',
                color: 'from-purple-50 to-pink-50'
              },
              {
                title: 'Example 3 – Financial Transaction Conflict',
                desc: 'An individual faces a dispute related to money lent to another party and wants to know whether legal action is possible.',
                color: 'from-orange-50 to-red-50'
              },
              {
                title: 'Example 4 – Legal Notice Received',
                desc: 'A person receives a legal notice and wants to understand the implications of the notice and the appropriate response.',
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
              Understanding Legal Consultation Requirements
            </h2>
            
            <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12">
              <p className="text-lg text-[#52606D] leading-relaxed mb-6">
                A productive legal consultation usually requires certain information and documents related to the issue.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  'Description of the dispute or legal issue',
                  'Documents or agreements related to the case',
                  'Communication records or transaction details',
                  'Timeline of events related to the dispute'
                ].map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#0F7A4A] flex-shrink-0 mt-1" />
                    <p className="text-base text-[#52606D]">{requirement}</p>
                  </div>
                ))}
              </div>

              <p className="text-base text-[#52606D] leading-relaxed mb-4">
                Providing accurate and complete information helps ensure that the consultation can properly evaluate the situation.
              </p>

              <p className="text-base text-[#52606D] leading-relaxed">
                <strong>Legal Consultation Information Framework:</strong> Case Description → Relevant Documents → Evidence or Communication Records → Timeline of Events → Legal Position Evaluation
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
              Trusted support for legal consultation and case evaluation
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
                question: 'What is a legal consultation?',
                answer: 'Legal consultation is a discussion with legal professionals to understand a legal issue and evaluate possible options.'
              },
              {
                question: 'What should someone bring to a legal consultation?',
                answer: 'Relevant documents, agreements, and details related to the dispute can help provide a clearer understanding of the situation.'
              },
              {
                question: 'Can legal consultation help determine whether a case is strong?',
                answer: 'Yes, reviewing the documents and facts can help identify the strengths and potential risks of the case.'
              },
              {
                question: 'Is legal consultation useful before sending a legal notice?',
                answer: 'Yes, consultation can help determine whether sending a legal notice or taking further action is appropriate.'
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
              Need Clarity About Your Legal Situation Before Taking Action?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Understanding the facts, documents, and possible legal options can help individuals make informed decisions.
            </p>
            <p className="text-lg text-white/90 mb-8">
              Contact Yashoda Total Solution to learn more about legal consultation and case evaluation services.
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

export default LegalConsultation;
