import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Shield, FileCheck, Users, HeartHandshake, Target, Award, X, Eye,
  CheckCircle, Lock, TrendingUp, Clock, Zap, Phone, Mail
} from 'lucide-react';

const TEAM_IMAGES = {
  md: 'https://static.prod-images.emergentagent.com/jobs/bd5b376d-ca14-453c-bb4f-06833e2e2741/images/ffa1856565e9893af507bedd3a7028f927ba4972b10196390cc2e4a098d78712.png',
  sales: 'https://static.prod-images.emergentagent.com/jobs/bd5b376d-ca14-453c-bb4f-06833e2e2741/images/87447e00c2f040c5a6f2bfadb1ae27a431d8b28a7e9a40f86d3b3d5a785b21c4.png',
  legal: 'https://static.prod-images.emergentagent.com/jobs/bd5b376d-ca14-453c-bb4f-06833e2e2741/images/a75fe35cf9732eed2e87f9cab7303f4159c6a291444cd1c3688266fe8ac59960.png',
};

const pageText = {
  en: {
    title: "About Yashoda Total Solution",
    hero_subtitle: "Professional Insurance Claim Assistance & Legal Support Services",
    
    about_intro: "Yashoda Total Solution is a professional insurance claim assistance and legal support service organization dedicated to assisting individuals, families, and businesses in managing and resolving various insurance and dispute-related matters through structured, transparent, and result-oriented support services.",
    about_p2: "Established in 2025, the organization specializes in providing assistance and coordination services in the areas of insurance claims, dispute resolution support, policy management assistance, and legal documentation facilitation. The company works on behalf of customers to simplify complex procedural requirements and help them pursue rightful benefits and fair resolutions through lawful and ethical processes.",
    about_p3: "Yashoda Total Solution operates as a service provider and coordination partner, acting as a bridge between clients, insurance companies, consultants, and authorized legal professionals. Through systematic guidance, documentation assistance, procedural coordination, and case monitoring, we ensure that clients receive organized and professional support throughout their case journey.",
    about_p4: "The organization is committed to delivering a smooth, transparent, and time-bound claim and dispute resolution experience, minimizing procedural delays while maintaining confidentiality, compliance, and professional integrity.",
    
    whatwedo_title: "What We Do",
    whatwedo_intro: "Yashoda Total Solution provides structured assistance and support services for handling various types of disputes and claims matters, including:",
    whatwedo_items: [
      "Insurance claim assistance and settlement coordination",
      "Insurance mis-selling and grievance support",
      "Consumer dispute assistance",
      "Financial and service-related dispute coordination",
      "Cheque bounce and recovery matter assistance",
      "Documentation and application processing support",
      "Coordination with empanelled professionals and consultants"
    ],
    whatwedo_outro: "Our role is to guide, assist, and coordinate processes on behalf of customers while ensuring proper follow-ups and procedural compliance.",
    
    features_title: "Our Features",
    features_intro: "Yashoda Total Solution operates with a unique service model different from traditional law firms. The organization has empanelled experienced professionals and sector experts to deliver structured and efficient service outcomes.",
    features_subtitle: "Key strengths include:",
    features: [
      "Experienced professionals and trained support executives",
      "Dedicated backup and operational support teams",
      "Multi-level administrative monitoring system",
      "Periodic case progress audits and reviews",
      "Technology-driven case tracking and monitoring",
      "Timely follow-ups and customer assistance",
      "Regular client updates via phone and digital communication",
      "Strong data privacy and confidentiality practices"
    ],
    
    strategy_title: "Our Strategy & Working Model",
    strategy_intro: "We follow a systematic and implementation-driven approach toward dispute handling and claim assistance.",
    strategy_items: [
      "Each case is reviewed and structured through strategic assessment.",
      "Case pathways are designed based on procedural requirements and documentation analysis.",
      "Continuous monitoring is conducted through administrative and operational supervision.",
      "Periodic audits help evaluate progress and modify strategies where required.",
      "Technology-enabled tracking ensures transparency and accountability."
    ],
    strategy_outro: "We follow a time-bound working module, focusing on proactive case movement and continuous follow-ups to avoid unnecessary procedural delays.",
    
    approach_title: "Our Approach",
    approach_items: [
      "Customer-first service model",
      "Structured procedural guidance",
      "Confidential handling of client information",
      "Professional and timely service delivery",
      "Ethical and transparent operational practices",
      "Continuous follow-up and coordination support"
    ],
    
    commitment_title: "Our Commitment",
    commitment_text: "At Yashoda Total Solution, client satisfaction and peace of mind remain our highest priorities. We are committed to delivering reliable, ethical, and professional assistance services, making us a trusted partner for insurance assistance and dispute support services across India.",
    
    team_title: "Meet Our Dedicated Team",
    md_title: "Managing Director",
    md_name: "Rajesh Verma",
    md_desc1: "Rajesh Verma is a seasoned professional with over 14 years of experience in insurance claim settlements. Throughout his career, he has developed deep industry knowledge and strategic expertise to safeguard clients' interests and secure fair, timely claim resolutions.",
    md_desc2: "With strong command over claim processes, dispute handling, and insurance regulations, he has successfully managed complex cases and consistently delivered positive outcomes. His client-first philosophy, transparent approach, and dedicated leadership ensure complete support and satisfaction at every stage.",
    md_quote: "Your claim is not just a file for us — it's our responsibility.",
    
    sales_title: "Sales Team",
    sales_desc1: "At Yashoda Total Solution, our Sales Team is the first pillar of trust and support for every client. With years of hands-on industry experience, our dedicated professionals work tirelessly to guide customers with honesty, clarity, and confidence.",
    sales_desc2: "We understand that your hard-earned money represents your dreams, security, and future. That is why our team is committed to providing genuine advice, transparent communication, and complete assistance at every stage. From the first consultation to final resolution, we stand beside you with dedication and responsibility.",
    sales_desc3: "Our strength lies in our hardworking approach, customer-focused mindset, and strong coordination with our legal and claims experts to ensure the best possible outcome for you.",
    sales_motto: "Your trust motivates us. Your success is our achievement.",
    
    legal_title: "Legal Team",
    legal_desc1: "At Yashoda Total Solution, we have a highly experienced and dedicated legal team specializing in Insurance Dispute Resolution Management. Our experts have successfully handled complex cases including insurance mis-selling, claim settlement disputes, and third-party claim settlements.",
    legal_desc2: "With deep industry knowledge and strategic legal expertise, we stand firmly for our clients' rights and ensure they receive the justice and compensation they deserve. Our unique and result-oriented approach empowers you to recover your hard-earned money — even from the biggest and most powerful insurance companies.",
    legal_motto: "Your fight is our responsibility. Your justice is our mission.",
    
    view_profile: "View Profile",
    close: "Close",
  },
  hi: {
    // Hindi content (keeping structure same, just showing key ones)
    title: "यशोदा टोटल सॉल्यूशन के बारे में",
    hero_subtitle: "पेशेवर बीमा दावा सहायता और कानूनी सहायता सेवाएं",
    about_intro: "यशोदा टोटल सॉल्यूशन एक पेशेवर बीमा दावा सहायता और कानूनी सहायता सेवा संगठन है।",
    whatwedo_title: "हम क्या करते हैं",
    features_title: "हमारी विशेषताएं",
    team_title: "हमारी समर्पित टीम से मिलें",
    view_profile: "प्रोफ़ाइल देखें",
    close: "बंद करें",
  },
  mr: {
    // Marathi content
    title: "यशोदा टोटल सॉल्यूशन बद्दल",
    hero_subtitle: "व्यावसायिक विमा दावा सहाय्य आणि कायदेशीर सहाय्य सेवा",
    about_intro: "यशोदा टोटल सॉल्यूशन ही एक व्यावसायिक विमा दावा सहाय्य आणि कायदेशीर सहाय्य सेवा संस्था आहे.",
    whatwedo_title: "आम्ही काय करतो",
    features_title: "आमची वैशिष्ट्ये",
    team_title: "आमच्या समर्पित टीमला भेटा",
    view_profile: "प्रोफाइल पहा",
    close: "बंद करा",
  }
};

const About = () => {
  const { language } = useLanguage();
  const txt = pageText[language];
  const [activeProfile, setActiveProfile] = useState(null);

  const teamMembers = [
    {
      key: 'md',
      image: TEAM_IMAGES.md,
      title: txt.md_title,
      name: txt.md_name,
      icon: Award,
      color: '#0F7A4A',
      descriptions: [txt.md_desc1, txt.md_desc2],
      highlight: txt.md_quote,
      highlightType: 'quote',
    },
    {
      key: 'sales',
      image: TEAM_IMAGES.sales,
      title: txt.sales_title,
      name: null,
      icon: Users,
      color: '#3B82F6',
      descriptions: [txt.sales_desc1, txt.sales_desc2, txt.sales_desc3],
      highlight: txt.sales_motto,
      highlightType: 'motto',
    },
    {
      key: 'legal',
      image: TEAM_IMAGES.legal,
      title: txt.legal_title,
      name: null,
      icon: Shield,
      color: '#F97316',
      descriptions: [txt.legal_desc1, txt.legal_desc2],
      highlight: txt.legal_motto,
      highlightType: 'motto',
    },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-[#F5F7F9]">
      {/* Hero Section with 3D Effect */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{txt.title}</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">{txt.hero_subtitle}</p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}></div>
      </section>

      {/* About Us Section with Image */}
      <section className="relative -mt-16 z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-[#0F7A4A]/10 rounded-2xl flex items-center justify-center">
                    <Shield className="h-7 w-7 text-[#0F7A4A]" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933]">About Us</h2>
                </div>
                <div className="space-y-4 text-base text-[#52606D] leading-relaxed">
                  <p>{txt.about_intro}</p>
                  <p>{txt.about_p2}</p>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hidden lg:block"
              >
                <img
                  src="https://customer-assets.emergentagent.com/job_1f2a625c-d95e-4402-90c8-36a45eafc6d8/artifacts/02wr7udq_image.png"
                  alt="Insurance Services"
                  className="w-full h-auto rounded-2xl"
                />
              </motion.div>
            </div>
            <div className="space-y-4 text-base text-[#52606D] leading-relaxed mt-6">
              <p>{txt.about_p3}</p>
              <p>{txt.about_p4}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section with 3D Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4">{txt.whatwedo_title}</h2>
            <p className="text-lg text-[#52606D] max-w-3xl mx-auto">{txt.whatwedo_intro}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {txt.whatwedo_items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-gray-100 hover:border-[#0F7A4A] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(15,122,74,0.15)]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0F7A4A] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-base text-[#52606D] leading-relaxed pt-2">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-8">
            <p className="text-lg text-center text-[#52606D] leading-relaxed max-w-4xl mx-auto bg-[#F5F7F9] p-6 rounded-2xl">
              {txt.whatwedo_outro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section with Vector Image */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4">{txt.features_title}</h2>
            <p className="text-lg text-[#52606D] max-w-3xl mx-auto">{txt.features_intro}</p>
            <p className="text-lg font-semibold text-[#1F2933] mt-4">{txt.features_subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {txt.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(15,122,74,0.15)] transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#0F7A4A] to-[#159F61] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                      <span className="text-white text-sm font-bold">{i + 1}</span>
                    </div>
                    <p className="text-base text-[#52606D] leading-relaxed">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hidden lg:block"
            >
              <img
                src="https://customer-assets.emergentagent.com/job_1f2a625c-d95e-4402-90c8-36a45eafc6d8/artifacts/50aezzhw_image.png"
                alt="Our Features"
                className="w-full h-auto rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategy Section with 3D Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4">{txt.strategy_title}</h2>
            <p className="text-lg text-[#52606D] max-w-3xl mx-auto">{txt.strategy_intro}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {txt.strategy_items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-white rounded-2xl p-6 border-2 border-[#0F7A4A]/20 hover:border-[#0F7A4A] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(15,122,74,0.15)]"
              >
                <div className="absolute top-4 right-4 w-12 h-12 bg-[#0F7A4A]/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-[#0F7A4A]">{i + 1}</span>
                </div>
                <div className="pr-12">
                  <TrendingUp className="h-8 w-8 text-[#0F7A4A] mb-4" />
                  <p className="text-base text-[#52606D] leading-relaxed">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-12">
            <div className="bg-gradient-to-br from-[#0F7A4A] to-[#159F61] text-white p-8 rounded-2xl shadow-xl text-center">
              <Clock className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg leading-relaxed">{txt.strategy_outro}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach Section with 3D Cards */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933]">{txt.approach_title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {txt.approach_items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-[#0F7A4A] to-[#159F61] text-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(15,122,74,0.3)] transition-all duration-500"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <span className="text-2xl font-bold opacity-40">{i + 1}</span>
                </div>
                <p className="text-base leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="relative bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
            </div>
            <div className="relative z-10 p-12 text-center text-white">
              <Award className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold mb-6">{txt.commitment_title}</h2>
              <p className="text-lg leading-relaxed max-w-4xl mx-auto">{txt.commitment_text}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section with 3D Cards */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933]">{txt.team_title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const Icon = member.icon;
              // Swap title and name for Managing Director
              const displayTitle = member.key === 'md' ? member.name : member.title;
              const displaySubtitle = member.key === 'md' ? `(${member.title})` : member.name;
              
              return (
                <motion.div
                  key={member.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(15,122,74,0.15)] transition-all duration-500 flex flex-col"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={member.image}
                      alt={member.name || member.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4" style={{ backgroundColor: `${member.color}20` }}>
                        <Icon className="h-8 w-8" style={{ color: member.color }} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1F2933] mb-2">{displayTitle}</h3>
                      {displaySubtitle && (
                        <p className="text-lg font-medium text-[#52606D]">
                          {displaySubtitle}
                        </p>
                      )}
                    </div>
                    <div className="mt-auto">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveProfile(member)}
                        className="w-full py-3 px-4 rounded-xl font-semibold text-base text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                        style={{ backgroundColor: member.color }}
                      >
                        <Eye className="h-5 w-5" />
                        {txt.view_profile}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal with Enhanced Design */}
      <AnimatePresence>
        {activeProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveProfile(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${activeProfile.color}20` }}>
                      {React.createElement(activeProfile.icon, { className: 'h-6 w-6', style: { color: activeProfile.color } })}
                    </div>
                    <h3 className="text-2xl font-bold text-[#1F2933]">{activeProfile.title}</h3>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setActiveProfile(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </motion.button>
                </div>
                {activeProfile.name && (
                  <p className="text-lg font-semibold mb-6" style={{ color: activeProfile.color }}>
                    {activeProfile.name}
                  </p>
                )}
                <div className="space-y-4">
                  {activeProfile.descriptions.map((desc, i) => (
                    <p key={i} className="text-base text-[#52606D] leading-relaxed">{desc}</p>
                  ))}
                </div>
                {activeProfile.highlightType === 'quote' ? (
                  <blockquote className="border-l-4 border-[#F39C12] pl-6 py-4 italic text-base font-medium mt-6 bg-[#F39C12]/5 rounded-r-xl">
                    "{activeProfile.highlight}"
                  </blockquote>
                ) : (
                  <p className="text-base font-semibold mt-6 p-4 rounded-xl" style={{ color: activeProfile.color, backgroundColor: `${activeProfile.color}10` }}>
                    {activeProfile.highlight}
                  </p>
                )}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveProfile(null)}
                  className="mt-8 w-full py-4 rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ backgroundColor: activeProfile.color }}
                >
                  {txt.close}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
