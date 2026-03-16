import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, FileText, AlertTriangle, Shield, CheckCircle, 
  ArrowRight, HelpCircle, Users, Phone, Target, DollarSign, Package 
} from 'lucide-react';

const ConsumerCases = () => {
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
              <span className="text-white text-sm">Consumer Protection Support</span>
            </div>
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-[#F39C12] rounded-2xl flex items-center justify-center">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Consumer Protection Support
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Understanding consumer rights and addressing disputes related to defective products, poor services, or unfair trade practices. Under the Consumer Protection Act, 2019, consumers have legal rights that protect them from defective products, poor service quality, misleading advertisements, and unfair trade practices.
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
                Consumer protection laws are designed to ensure that customers receive fair treatment when purchasing products or services.
              </p>
              <p className="leading-relaxed mb-4">
                However, many consumers face difficulties when they encounter problems such as defective goods, poor service quality, misleading advertisements, or refusal of refunds.
              </p>
              <p className="leading-relaxed mb-4">
                In such situations, understanding the consumer protection process and available options becomes important.
              </p>
              <p className="leading-relaxed mb-4">
                Consumer Protection Support helps individuals understand their rights as consumers and the procedures involved in addressing disputes with businesses or service providers.
              </p>
              <p className="leading-relaxed mb-4">
                <strong>Yashoda Total Solutions</strong> assists clients by helping them understand consumer protection procedures, preparing necessary documentation, and guiding them through the appropriate steps to address consumer disputes.
              </p>
              <p className="leading-relaxed mb-4">
                <strong>Consumer Dispute Resolution Flow:</strong>
              </p>
              <ul className="space-y-3 ml-6">
                <li>• Product or Service Purchased</li>
                <li>• Consumer Faces Problem</li>
                <li>• Complaint Submitted</li>
                <li>• Issue Reviewed by Authorities</li>
                <li>• Resolution or Compensation</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Consumer Disputes Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              Common Types of Consumer Disputes
            </h2>
            <p className="text-lg text-[#52606D]">
              Consumers may face different types of disputes while purchasing goods or using services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: 'Defective Products',
                desc: 'Defective or malfunctioning products that do not work as expected or promised.',
                color: 'bg-red-50',
                iconBg: 'bg-red-600'
              },
              {
                icon: AlertTriangle,
                title: 'Service Deficiency',
                desc: 'Poor quality or incomplete services that fail to meet stated standards.',
                color: 'bg-orange-50',
                iconBg: 'bg-orange-600'
              },
              {
                icon: FileText,
                title: 'Misleading Advertisements',
                desc: 'False claims or exaggerated promises in advertisements that mislead consumers.',
                color: 'bg-purple-50',
                iconBg: 'bg-purple-600'
              },
              {
                icon: DollarSign,
                title: 'Overcharging',
                desc: 'Charging above the stated price or adding hidden charges without disclosure.',
                color: 'bg-blue-50',
                iconBg: 'bg-blue-600'
              },
              {
                icon: Shield,
                title: 'Refund Refusal',
                desc: 'Refusal to provide refunds or replacements for defective or unsuitable products.',
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
              Trusted support for consumer protection and dispute resolution
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
              Our 6-Step Consumer Complaint Process
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
                  title: 'Case Understanding & Documentation Review',
                  desc: 'We understand your consumer issue, review purchase documents, and evaluate the nature of the dispute.'
                },
                {
                  step: '2',
                  title: 'Consumer Rights Assessment',
                  desc: 'We assess your rights under consumer protection laws and determine the validity of your complaint.'
                },
                {
                  step: '3',
                  title: 'Evidence & Proof Collection',
                  desc: 'We help gather all necessary evidence including purchase invoices, communication records, and product details.'
                },
                {
                  step: '4',
                  title: 'Complaint Drafting & Filing',
                  desc: 'We prepare a detailed consumer complaint and file it with the appropriate consumer forum or authority.'
                },
                {
                  step: '5',
                  title: 'Follow-up & Escalation',
                  desc: 'We follow up on your complaint and escalate to higher forums if needed for resolution.'
                },
                {
                  step: '6',
                  title: 'Resolution & Compensation',
                  desc: 'We ensure you receive the compensation, replacement, refund, or corrective action you deserve.'
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
              Real-Life Consumer Dispute Examples
            </h2>
            <p className="text-lg text-[#52606D]">
              These are common scenarios we help resolve
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Case 1: Defective Product',
                problem: 'A customer purchases a home appliance that stops working shortly after purchase. Despite contacting the seller multiple times, the issue is not resolved.',
                reality: 'The seller refused to replace the product, claiming the warranty period had expired even though the defect occurred within the warranty period.',
                solution: 'We filed a consumer complaint with documentation proving the defect timeline. The consumer forum ordered a full replacement and compensation for inconvenience.'
              },
              {
                title: 'Case 2: Poor Service Quality',
                problem: 'A customer pays for a service but receives incomplete or unsatisfactory service from the provider.',
                reality: 'The service provider delivered only 50% of the promised work and refused to complete it or provide a refund.',
                solution: 'We filed a complaint under consumer protection law. The provider was ordered to complete the service and pay penalty for deficiency.'
              },
              {
                title: 'Case 3: Misleading Advertisement',
                problem: 'A consumer purchases a product based on advertising claims that later turn out to be inaccurate or exaggerated.',
                reality: 'The product features advertised were completely false, and the actual product was of inferior quality with missing features.',
                solution: 'We proved misleading advertisement with evidence. The consumer received a full refund plus compensation for unfair trade practice.'
              },
              {
                title: 'Case 4: Online Purchase Dispute',
                problem: 'A customer orders a product from an e-commerce platform but receives a different product and struggles to obtain a refund or replacement.',
                reality: 'The e-commerce platform kept delaying the refund citing various procedural reasons and offered only partial compensation.',
                solution: 'We escalated to the consumer forum with proof of wrong product delivery. Full refund was ordered along with compensation for harassment.'
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
              Common questions about consumer protection
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'What is consumer protection support?',
                a: 'It involves understanding consumer rights and addressing disputes related to products or services under the Consumer Protection Act.'
              },
              {
                q: 'What types of issues can be raised under consumer protection?',
                a: 'Issues such as defective goods, poor service, misleading advertisements, and refund disputes may be addressed under consumer protection laws.'
              },
              {
                q: 'What documents are required for a consumer complaint?',
                a: 'Typical documents include purchase invoices, communication records, product details, and a description of the issue faced.'
              },
              {
                q: 'Can online purchase disputes be raised under consumer protection laws?',
                a: 'Yes, disputes related to online purchases from e-commerce platforms also fall under consumer protection regulations.'
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
              Facing Problems with a Product or Service?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Understanding your consumer rights and the complaint process can help you address disputes more effectively. Contact us today for professional consumer protection support.
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

export default ConsumerCases;
