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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Compact */}
      <section className="bg-gradient-to-br from-[#0F7A4A] to-[#0A5734] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">{txt.title}</h1>
          <p className="text-sm md:text-base opacity-90">{txt.hero_subtitle}</p>
        </div>
      </section>

      {/* About Us - Compact */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-[#0F7A4A]" />
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2933]">About Us</h2>
          </div>
          <div className="space-y-3 text-sm md:text-base text-[#52606D] leading-relaxed">
            <p>{txt.about_intro}</p>
            <p>{txt.about_p2}</p>
            <p>{txt.about_p3}</p>
            <p>{txt.about_p4}</p>
          </div>
        </div>
      </section>

      {/* What We Do - Clean List */}
      <section className="py-8 md:py-12 bg-[#F5F7F9]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <FileCheck className="h-8 w-8 text-[#0F7A4A]" />
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2933]">{txt.whatwedo_title}</h2>
          </div>
          <p className="text-sm md:text-base text-[#52606D] mb-4">{txt.whatwedo_intro}</p>
          <div className="grid md:grid-cols-2 gap-3">
            {txt.whatwedo_items.map((item, i) => (
              <div key={i} className="flex items-start gap-2 bg-white p-3 rounded-lg">
                <CheckCircle className="h-5 w-5 text-[#0F7A4A] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[#52606D]">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-sm md:text-base text-[#52606D] mt-4">{txt.whatwedo_outro}</p>
        </div>
      </section>

      {/* Features - Compact Grid */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-3">
            <Target className="h-8 w-8 text-[#F39C12]" />
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2933]">{txt.features_title}</h2>
          </div>
          <p className="text-sm md:text-base text-[#52606D] mb-3">{txt.features_intro}</p>
          <p className="text-sm md:text-base font-semibold text-[#1F2933] mb-4">{txt.features_subtitle}</p>
          <div className="grid md:grid-cols-2 gap-3">
            {txt.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-2 bg-[#F5F7F9] p-3 rounded-lg">
                <div className="w-5 h-5 bg-[#0F7A4A] rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </div>
                <span className="text-sm text-[#52606D]">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy - Compact */}
      <section className="py-8 md:py-12 bg-[#F5F7F9]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="h-8 w-8 text-[#0F7A4A]" />
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2933]">{txt.strategy_title}</h2>
          </div>
          <p className="text-sm md:text-base text-[#52606D] mb-4">{txt.strategy_intro}</p>
          <div className="space-y-2">
            {txt.strategy_items.map((item, i) => (
              <div key={i} className="flex items-start gap-2 bg-white p-3 rounded-lg border-l-4 border-[#0F7A4A]">
                <span className="w-6 h-6 bg-[#0F7A4A] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-[#52606D]">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-sm md:text-base text-[#52606D] mt-4">{txt.strategy_outro}</p>
        </div>
      </section>

      {/* Approach - Compact Grid */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <HeartHandshake className="h-8 w-8 text-[#0F7A4A]" />
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2933]">{txt.approach_title}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {txt.approach_items.map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-[#0F7A4A] to-[#159F61] text-white p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-lg font-bold opacity-40">{i + 1}</span>
                </div>
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment - Compact */}
      <section className="py-8 md:py-12 bg-[#F5F7F9]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-[#1F2933] mb-3">{txt.commitment_title}</h2>
          <p className="text-sm md:text-base text-[#52606D] leading-relaxed">{txt.commitment_text}</p>
        </div>
      </section>

      {/* Team - Compact */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-[#1F2933] text-center mb-6">{txt.team_title}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {teamMembers.map((member) => {
              const Icon = member.icon;
              return (
                <div key={member.key} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img src={member.image} alt={member.name || member.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-5 w-5" style={{ color: member.color }} />
                      <h3 className="font-bold text-[#1F2933]">{member.title}</h3>
                    </div>
                    {member.name && <p className="text-sm font-semibold mb-2" style={{ color: member.color }}>{member.name}</p>}
                    <button onClick={() => setActiveProfile(member)} className="text-sm font-semibold flex items-center gap-1 hover:underline" style={{ color: member.color }}>
                      <Eye className="h-4 w-4" />{txt.view_profile}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {activeProfile && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setActiveProfile(null)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={e => e.stopPropagation()} className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {React.createElement(activeProfile.icon, { className: 'h-6 w-6', style: { color: activeProfile.color } })}
                    <h3 className="text-xl font-bold">{activeProfile.title}</h3>
                  </div>
                  <button onClick={() => setActiveProfile(null)} className="text-gray-500 hover:text-gray-700">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                {activeProfile.name && <p className="font-semibold mb-4" style={{ color: activeProfile.color }}>{activeProfile.name}</p>}
                {activeProfile.descriptions.map((desc, i) => (
                  <p key={i} className="text-sm text-[#52606D] mb-3">{desc}</p>
                ))}
                {activeProfile.highlightType === 'quote' ? (
                  <blockquote className="border-l-4 border-[#F39C12] pl-4 italic text-sm font-medium mt-4">"{activeProfile.highlight}"</blockquote>
                ) : (
                  <p className="text-sm font-semibold mt-4" style={{ color: activeProfile.color }}>{activeProfile.highlight}</p>
                )}
                <button onClick={() => setActiveProfile(null)} className="mt-6 w-full py-2 rounded-lg text-white font-semibold" style={{ backgroundColor: activeProfile.color }}>
                  {txt.close}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
