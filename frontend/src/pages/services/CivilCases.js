import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Landmark, FileText, Home, Users, Shield, CheckCircle, 
  ArrowRight, HelpCircle, Phone, Target, DollarSign, Scale 
} from 'lucide-react';

const CivilCases = () => {
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
              <span className="text-white text-sm">Civil Dispute Support</span>
            </div>
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-[#F39C12] rounded-2xl flex items-center justify-center">
                <Landmark className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Civil Dispute Support
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Understanding civil disputes and identifying the appropriate legal approach for resolving personal, financial, and property-related conflicts. Many disagreements between individuals or businesses fall under civil law rather than criminal law.
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
                Civil disputes are legal disagreements between individuals, organizations, or businesses regarding rights, responsibilities, or obligations.
              </p>
              <p className="leading-relaxed mb-4">
                These disputes may involve property matters, contractual disagreements, financial recovery, or family-related legal issues.
              </p>
              <p className="leading-relaxed mb-4">
                Unlike criminal matters, civil cases are typically resolved through legal forums or courts that examine evidence, agreements, and relevant laws before determining a resolution.
              </p>
              <p className="leading-relaxed mb-4">
                However, many individuals may find the civil dispute process complex because it involves documentation, legal procedures, and careful evaluation of evidence.
              </p>
              <p className="leading-relaxed mb-4">
                <strong>Yashoda Total Solutions</strong> assists clients by helping them understand the nature of their dispute, organizing the necessary documentation, and guiding them through the appropriate steps involved in addressing civil matters.
              </p>
              <p className="leading-relaxed mb-4">
                <strong>Civil Dispute Resolution Flow:</strong>
              </p>
              <ul className="space-y-3 ml-6">
                <li>• Dispute Identified</li>
                <li>• Case Details Examined</li>
                <li>• Evidence and Documents Collected</li>
                <li>• Legal Strategy Determined</li>
                <li>• Resolution Process Initiated</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Types Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Common Types of Civil Disputes
            </h2>
            <p className="text-lg text-[#52606D]">
              Civil disputes can arise in various personal and professional situations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: 'Property Disputes',
                desc: 'Property or land ownership disagreements including boundary disputes and title issues.',
                color: 'bg-blue-50',
                iconBg: 'bg-blue-600'
              },
              {
                icon: Users,
                title: 'Family & Inheritance Matters',
                desc: 'Inheritance disputes and family-related legal matters requiring resolution.',
                color: 'bg-purple-50',
                iconBg: 'bg-purple-600'
              },
              {
                icon: DollarSign,
                title: 'Financial Recovery Issues',
                desc: 'Financial or debt recovery matters including loan repayment disputes.',
                color: 'bg-green-50',
                iconBg: 'bg-green-600'
              },
              {
                icon: Home,
                title: 'Tenant & Landlord Conflicts',
                desc: 'Landlord and tenant conflicts regarding rent, maintenance, or eviction.',
                color: 'bg-orange-50',
                iconBg: 'bg-orange-600'
              },
              {
                icon: FileText,
                title: 'Contractual Breaches',
                desc: 'Breach of contracts or agreements between parties in business or personal matters.',
                color: 'bg-red-50',
                iconBg: 'bg-red-600'
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
              Trusted support for civil dispute resolution and legal assistance
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
              Our 6-Step Civil Dispute Resolution Process
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
                  title: 'Dispute Understanding & Assessment',
                  desc: 'We understand your civil dispute, review the situation, and assess the nature and merits of the case.'
                },
                {
                  step: '2',
                  title: 'Documentation & Evidence Review',
                  desc: 'We examine all relevant documents, agreements, records, and evidence related to the dispute.'
                },
                {
                  step: '3',
                  title: 'Legal Position Evaluation',
                  desc: 'We evaluate your legal position, rights, and obligations under applicable civil laws.'
                },
                {
                  step: '4',
                  title: 'Strategy & Settlement Discussion',
                  desc: 'We discuss possible resolution strategies including settlement options and legal proceedings.'
                },
                {
                  step: '5',
                  title: 'Legal Action & Filing',
                  desc: 'If required, we assist in filing the case with appropriate legal forums and prepare necessary documentation.'
                },
                {
                  step: '6',
                  title: 'Follow-up & Resolution',
                  desc: 'We follow up on the case proceedings and work toward achieving fair resolution.'
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
              Real-Life Civil Dispute Examples
            </h2>
            <p className="text-lg text-[#52606D]">
              These are common scenarios we help resolve
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Case 1: Property Ownership Dispute',
                problem: 'Two family members claim ownership of the same piece of ancestral property, leading to a disagreement regarding rights and usage.',
                reality: 'Both parties had partial documentation but no clear registered ownership. Years of occupation without legal clarity led to escalating conflict.',
                solution: 'We reviewed all documents, established legal timelines, and filed a partition suit. The property was divided based on legal inheritance rights.'
              },
              {
                title: 'Case 2: Financial Recovery Issue',
                problem: 'An individual lends money to another person but faces difficulty recovering the amount despite repeated requests.',
                reality: 'The borrower acknowledged the debt verbally but refused repayment, claiming financial hardship without legal documentation.',
                solution: 'We collected evidence including bank transfers and communications. Filed a civil suit for recovery and obtained a court decree for repayment.'
              },
              {
                title: 'Case 3: Tenant and Landlord Disagreement',
                problem: 'A landlord faces issues with rent payment delays, while the tenant disputes certain conditions mentioned in the rental agreement.',
                reality: 'The rental agreement had ambiguous clauses about maintenance responsibilities, leading to payment disputes.',
                solution: 'We clarified agreement terms, facilitated mediation, and helped draft a clear addendum resolving the maintenance dispute.'
              },
              {
                title: 'Case 4: Contract Breach',
                problem: 'A business agreement is signed between two parties, but one party fails to fulfill the agreed responsibilities.',
                reality: 'One party delivered substandard work and missed deadlines, causing financial losses to the other party.',
                solution: 'We proved breach of contract with documentation, filed a civil suit, and secured compensation for losses plus contract termination.'
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
              Common questions about civil disputes
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'What is a civil dispute?',
                a: 'A civil dispute is a legal disagreement between individuals or organizations related to rights, responsibilities, or obligations under civil law.'
              },
              {
                q: 'What types of issues fall under civil disputes?',
                a: 'Common civil disputes involve property matters, financial recovery, contract breaches, landlord-tenant issues, and family-related legal matters.'
              },
              {
                q: 'Can civil disputes be resolved without going to court?',
                a: 'In some cases, disputes may be resolved through communication, mediation, or settlement discussions before pursuing formal legal proceedings.'
              },
              {
                q: 'What documents are usually required in civil disputes?',
                a: 'Relevant agreements, property records, financial documents, communication history, and evidence related to the dispute are typically required.'
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
              Facing a Civil Dispute Related to Property, Finances, or Agreements?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Understanding the nature of the dispute and organizing the necessary documents can help individuals approach civil matters more effectively. Contact us today for professional civil dispute support.
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

export default CivilCases;
