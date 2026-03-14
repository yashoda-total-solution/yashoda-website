import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Scale, FileText, AlertCircle, Shield, CheckCircle, 
  ArrowRight, HelpCircle, Users, Phone, Target, Gavel 
} from 'lucide-react';

const LegalNotice = () => {
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
              <span className="text-white text-sm">Legal Notice Drafting and Processing Services</span>
            </div>
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-[#F39C12] rounded-2xl flex items-center justify-center">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Legal Notice Drafting and Processing Services
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Understanding the role of legal notices in resolving disputes and initiating formal communication in legal matters. A legal notice is often the first formal step taken when addressing disputes or communicating a legal claim.
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
                A legal notice is a formal written communication sent by one party to another to inform them about a legal grievance or claim.
              </p>
              <p className="leading-relaxed mb-4">
                It is commonly used as the first step before initiating formal legal proceedings. A properly drafted legal notice clearly explains the issue, the rights of the sender, and the actions expected from the receiving party.
              </p>
              <p className="leading-relaxed mb-4">
                Many individuals and businesses face difficulties when preparing legal notices because they may not fully understand how to present their claim or what information should be included in the notice.
              </p>
              <p className="leading-relaxed mb-4">
                <strong>Yashoda Total Solutions</strong> assists clients by preparing well-structured legal notices and guiding them through the proper process to address disputes effectively and initiate the path toward resolution.
              </p>
              <p className="leading-relaxed mb-4">
                <strong>Legal Notice Process Flow:</strong>
              </p>
              <ul className="space-y-3 ml-6">
                <li>• Issue or Dispute Identified</li>
                <li>• Legal Notice Drafted</li>
                <li>• Notice Delivered to Opposite Party</li>
                <li>• Response from Recipient</li>
                <li>• Resolution Discussion or Legal Action</li>
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
              Common Situations for Legal Notices
            </h2>
            <p className="text-lg text-[#52606D]">
              Individuals or businesses may consider sending a legal notice in these situations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertCircle,
                title: 'Payment Disputes',
                desc: 'Disputes related to financial transactions and unresolved payment issues.',
                color: 'bg-red-50',
                iconBg: 'bg-red-600'
              },
              {
                icon: FileText,
                title: 'Service Disagreements',
                desc: 'Disagreements regarding services or agreements not being fulfilled.',
                color: 'bg-orange-50',
                iconBg: 'bg-orange-600'
              },
              {
                icon: Gavel,
                title: 'Contract Violations',
                desc: 'Conflicts involving contractual obligations that were not met.',
                color: 'bg-blue-50',
                iconBg: 'bg-blue-600'
              },
              {
                icon: Shield,
                title: 'Insurance Claim Issues',
                desc: 'Disputes involving insurance claims or settlements.',
                color: 'bg-purple-50',
                iconBg: 'bg-purple-600'
              },
              {
                icon: Target,
                title: 'Financial Conflicts',
                desc: 'Various financial disputes requiring formal legal communication.',
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
              What Actually Happens When a Legal Notice Is Sent
            </h2>
            
            <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-[#52606D]">
                <p className="leading-relaxed mb-4">
                  When a legal notice is sent, it formally informs the other party about the dispute and provides them with an opportunity to respond.
                </p>
                <p className="leading-relaxed mb-4">
                  The notice typically explains the details of the issue, the claims being made, and the expected resolution or response within a specific time period.
                </p>
                <p className="leading-relaxed mb-4">
                  In many cases, sending a legal notice encourages communication between the parties and may lead to a resolution without the need for court proceedings.
                </p>
                <p className="leading-relaxed mb-4">
                  Understanding the role of a legal notice helps individuals approach disputes in a structured and formal manner.
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>Legal Notice Communication Flow:</strong>
                </p>
                <ul className="space-y-3 ml-6">
                  <li>• Issue Identified</li>
                  <li>• Legal Notice Prepared</li>
                  <li>• Notice Sent to Opposite Party</li>
                  <li>• Recipient Reviews Notice</li>
                  <li>• Response or Negotiation</li>
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
              Real-world situations where legal notices are used
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Example 1 – Payment Dispute',
                desc: 'A business provides services to a client but does not receive payment despite repeated reminders. A legal notice is sent to formally request payment and inform the client about the possible legal consequences.',
                color: 'from-blue-50 to-cyan-50'
              },
              {
                title: 'Example 2 – Service Agreement Dispute',
                desc: 'A customer signs a service agreement with a company, but the services promised in the agreement are not delivered. The customer sends a legal notice seeking clarification and resolution.',
                color: 'from-purple-50 to-pink-50'
              },
              {
                title: 'Example 3 – Insurance Claim Disagreement',
                desc: 'A policyholder believes that their insurance claim was handled unfairly and sends a legal notice requesting a proper review of the claim.',
                color: 'from-orange-50 to-red-50'
              },
              {
                title: 'Example 4 – Contractual Obligation Issue',
                desc: 'Two parties enter into a contractual agreement, but one party fails to fulfill the agreed terms. The other party sends a legal notice outlining the breach of contract.',
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
              Understanding Legal Notice Requirements
            </h2>
            
            <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12">
              <p className="text-lg text-[#52606D] leading-relaxed mb-6">
                A properly prepared legal notice typically includes important details that clearly explain the dispute and the expectations of the sender.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  'Description of the dispute or issue',
                  'Relevant dates and facts related to the case',
                  'Legal basis or claim being raised',
                  'Expected response or corrective action',
                  'Timeline for responding to the notice'
                ].map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#0F7A4A] flex-shrink-0 mt-1" />
                    <p className="text-base text-[#52606D]">{requirement}</p>
                  </div>
                ))}
              </div>

              <p className="text-base text-[#52606D] leading-relaxed mb-4">
                Providing clear and structured information helps ensure that the legal notice communicates the issue effectively.
              </p>

              <p className="text-base text-[#52606D] leading-relaxed">
                <strong>Legal Notice Documentation Framework:</strong> Dispute Details → Relevant Dates and Facts → Legal Claim Explanation → Requested Resolution → Response Timeline
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
              Trusted support for legal notice drafting and dispute resolution
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
                question: 'What is a legal notice?',
                answer: 'A legal notice is a formal communication sent by one party to another regarding a legal claim or dispute.'
              },
              {
                question: 'Why is a legal notice important?',
                answer: 'It serves as an official way to inform the other party about the issue and provide an opportunity for resolution before legal proceedings begin.'
              },
              {
                question: 'Who can send a legal notice?',
                answer: 'Individuals, businesses, or organizations involved in a dispute may send a legal notice.'
              },
              {
                question: 'Does sending a legal notice always lead to court action?',
                answer: 'Not necessarily. In many cases, legal notices help resolve disputes through communication and negotiation.'
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
              Need Help Preparing a Legal Notice for Your Dispute?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Understanding the proper structure and process of legal notices can help individuals communicate their claims clearly and take the first step toward resolving disputes.
            </p>
            <p className="text-lg text-white/90 mb-8">
              Contact Yashoda Total Solution to learn more about legal notice drafting and dispute support services.
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

export default LegalNotice;
