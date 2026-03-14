import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, FileText, Scale, Shield, CheckCircle, 
  ArrowRight, HelpCircle, Users, Phone 
} from 'lucide-react';

const MisSelling = () => {
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
              <Link to="/services" className="text-white/80 hover:text-white text-sm">Services</Link>
              <span className="text-white/60">/</span>
              <span className="text-white text-sm">Mis-selling of Insurance Policy</span>
            </div>
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-[#F39C12] rounded-2xl flex items-center justify-center">
                <AlertTriangle className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Mis-selling of Insurance Policy
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Were you sold an insurance policy that doesn't match what was promised? Insurance mis-selling is when agents or banks mislead customers about policy features, benefits, or terms. We help you get justice and compensation.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}></div>
      </section>

      {/* What is Mis-Selling Section */}
      <section className="relative -mt-16 z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-6">
              What is Insurance Mis-Selling?
            </h2>
            <div className="prose prose-lg max-w-none text-[#52606D]">
              <p className="leading-relaxed mb-4">
                Insurance mis-selling occurs when insurance agents, banks, or financial institutions sell insurance policies by providing <strong>false information, hiding important terms, or making misleading promises</strong> to customers.
              </p>
              <p className="leading-relaxed mb-4">
                Common examples include:
              </p>
              <ul className="space-y-3 ml-6">
                <li>✗ Selling ULIP (Unit Linked Insurance Plan) as a Fixed Deposit</li>
                <li>✗ Hiding policy charges, surrender charges, or lock-in periods</li>
                <li>✗ Promising guaranteed high returns when returns are market-linked</li>
                <li>✗ Not explaining policy exclusions or claim rejection conditions</li>
                <li>✗ Selling policies without proper customer consent or signature</li>
                <li>✗ Selling insurance products while opening bank accounts without disclosure</li>
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
              What Happens in Mis-Selling Cases?
            </h2>
            <p className="text-lg text-[#52606D]">
              Understanding the impact of insurance mis-selling on your finances
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: 'Financial Loss',
                desc: 'You may lose money due to surrender charges, low returns, or policies that don\'t meet your needs.',
                color: 'bg-red-50',
                iconBg: 'bg-red-600'
              },
              {
                icon: FileText,
                title: 'Wrong Coverage',
                desc: 'The policy may not provide the insurance coverage or benefits you were promised.',
                color: 'bg-orange-50',
                iconBg: 'bg-orange-600'
              },
              {
                icon: Shield,
                title: 'Trust Broken',
                desc: 'Your trust in the insurance agent or bank is broken, causing emotional distress.',
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
              Expert guidance to resolve mis-selling cases effectively
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Team',
                desc: 'We have years of experience in handling insurance mis-selling complaints.'
              },
              {
                icon: FileText,
                title: 'Complete Documentation',
                desc: 'We prepare all necessary documents, notices, and complaint letters.'
              },
              {
                icon: Scale,
                title: 'Legal Support',
                desc: 'If needed, we provide legal notice drafting and ombudsman complaint filing.'
              },
              {
                icon: CheckCircle,
                title: 'High Success Rate',
                desc: 'We have helped hundreds of customers get compensation and policy cancellation.'
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
              Our 6-Step Process to Resolve Mis-Selling
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
                  title: 'Consultation & Case Analysis',
                  desc: 'We review your policy documents, sale records, and understand what was promised vs. what you received.'
                },
                {
                  step: '2',
                  title: 'Evidence Collection',
                  desc: 'We gather all proofs - policy documents, agent promises, email/SMS records, bank statements showing deductions.'
                },
                {
                  step: '3',
                  title: 'Complaint Drafting',
                  desc: 'We prepare a detailed complaint letter highlighting the mis-selling and your financial loss.'
                },
                {
                  step: '4',
                  title: 'Filing Complaint',
                  desc: 'We file the complaint with the insurance company\'s grievance cell and escalate if needed.'
                },
                {
                  step: '5',
                  title: 'Ombudsman/IRDAI Escalation',
                  desc: 'If the company doesn\'t respond, we escalate to the Insurance Ombudsman or IRDAI consumer cell.'
                },
                {
                  step: '6',
                  title: 'Resolution & Compensation',
                  desc: 'We follow up until you get policy cancellation, premium refund, or compensation for losses.'
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
              Real-Life Mis-Selling Examples
            </h2>
            <p className="text-lg text-[#52606D]">
              These are common scenarios we help resolve
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Case 1: ULIP Sold as Fixed Deposit',
                problem: 'Ramesh was told by his bank that he\'s opening a 5-year Fixed Deposit with guaranteed 8% returns.',
                reality: 'It was actually a ULIP (market-linked insurance) with 5-year lock-in, high charges, and no guaranteed returns.',
                solution: 'We helped Ramesh file a complaint. The bank refunded his premium and cancelled the policy.'
              },
              {
                title: 'Case 2: Hidden Charges in Policy',
                problem: 'Sunita bought a pension plan but was never told about 30% surrender charges if she exits early.',
                reality: 'When she tried to withdraw after 2 years, she lost ₹90,000 in surrender charges.',
                solution: 'We escalated to the Insurance Ombudsman. Sunita got 60% of surrender charges refunded.'
              },
              {
                title: 'Case 3: Policy Sold Without Consent',
                problem: 'Prakash found insurance premium deducted from his account without his knowledge while opening a savings account.',
                reality: 'The bank had enrolled him in an insurance plan without proper explanation or signature.',
                solution: 'We filed a complaint with IRDAI. The policy was cancelled and full premium was refunded.'
              },
              {
                title: 'Case 4: Fake Maturity Promises',
                problem: 'Meera was promised ₹10 lakh maturity after 10 years by the insurance agent.',
                reality: 'The policy document showed market-linked returns with no guarantee. She may get much less.',
                solution: 'We helped her cancel the policy within the free-look period and get a full refund.'
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
              Common questions about insurance mis-selling
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'How do I know if I\'m a victim of mis-selling?',
                a: 'If what you were promised verbally doesn\'t match your policy documents, or if important information (charges, lock-in period, exclusions) was hidden, it\'s mis-selling.'
              },
              {
                q: 'What is the time limit to file a mis-selling complaint?',
                a: 'You can file a complaint within 3 years from the date of purchase. However, if you discover the mis-selling later, you can still file based on when you discovered it.'
              },
              {
                q: 'Can I get a full refund if mis-selling is proven?',
                a: 'Yes, in many cases. If you\'re within the 15-30 day free-look period, you get a full refund. Otherwise, the ombudsman may order partial or full refund based on evidence.'
              },
              {
                q: 'Will the agent or bank be penalized?',
                a: 'Yes. IRDAI can impose penalties, cancel agent licenses, or fine the insurance company for mis-selling practices.'
              },
              {
                q: 'Do I need a lawyer to file a mis-selling complaint?',
                a: 'No. We handle everything - complaint drafting, filing, escalation. Legal notice is sent only if the company doesn\'t respond.'
              },
              {
                q: 'How long does the mis-selling complaint process take?',
                a: 'Insurance company grievance: 15-30 days. Ombudsman complaint: 2-4 months. We follow up at every step to speed up resolution.'
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
              Victim of Insurance Mis-Selling?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Don't let insurance companies get away with it. We'll help you get justice, compensation, and policy cancellation. Contact us today for a free consultation.
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

export default MisSelling;
