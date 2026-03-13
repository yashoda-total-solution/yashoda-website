import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Users, Target, Eye, Shield, Award, Clock, CheckCircle, 
  FileCheck, Lock, HeartHandshake, TrendingUp, UserCheck, ArrowRight 
} from 'lucide-react';

const About = () => {
  const { t, language } = useLanguage();

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  };

  const aboutContent = {
    en: {
      title: "About Yashoda Total Solution",
      desc1: "Yashoda Total Solution is a professional insurance claim assistance and legal support service organization dedicated to assisting individuals, families, and businesses in managing and resolving various insurance and dispute-related matters through structured, transparent, and result-oriented support services.",
      desc2: "Established in 2025, the organization specializes in providing assistance and coordination services in the areas of insurance claims, dispute resolution support, policy management assistance, and legal documentation facilitation. The company works on behalf of customers to simplify complex procedural requirements and help them pursue rightful benefits and fair resolutions through lawful and ethical processes.",
      desc3: "Yashoda Total Solution operates as a service provider and coordination partner, acting as a bridge between clients, insurance companies, consultants, and authorized legal professionals. Through systematic guidance, documentation assistance, procedural coordination, and case monitoring, we ensure that clients receive organized and professional support throughout their case journey.",
      desc4: "The organization is committed to delivering a smooth, transparent, and time-bound claim and dispute resolution experience, minimizing procedural delays while maintaining confidentiality, compliance, and professional integrity."
    },
    hi: {
      title: "यशोदा टोटल सॉल्यूशन के बारे में",
      desc1: "यशोदा टोटल सॉल्यूशन एक पेशेवर बीमा दावा सहायता और कानूनी सहायता सेवा संगठन है जो संरचित, पारदर्शी और परिणाम-उन्मुख सहायता सेवाओं के माध्यम से विभिन्न बीमा और विवाद से संबंधित मामलों के प्रबंधन और समाधान में व्यक्तियों, परिवारों और व्यवसायों की सहायता के लिए समर्पित है।",
      desc2: "2025 में स्थापित, यह संगठन बीमा दावों, विवाद समाधान सहायता, पॉलिसी प्रबंधन सहायता और कानूनी दस्तावेज़ीकरण सुविधा के क्षेत्रों में सहायता और समन्वय सेवाएं प्रदान करने में माहिर है। कंपनी जटिल प्रक्रियात्मक आवश्यकताओं को सरल बनाने और कानूनी और नैतिक प्रक्रियाओं के माध्यम से सही लाभ और उचित समाधान प्राप्त करने में मदद करने के लिए ग्राहकों की ओर से काम करती है।",
      desc3: "यशोदा टोटल सॉल्यूशन एक सेवा प्रदाता और समन्वय भागीदार के रूप में काम करता है, जो ग्राहकों, बीमा कंपनियों, सलाहकारों और अधिकृत कानूनी पेशेवरों के बीच एक पुल के रूप में कार्य करता है। व्यवस्थित मार्गदर्शन, दस्तावेज़ीकरण सहायता, प्रक्रियात्मक समन्वय और मामले की निगरानी के माध्यम से, हम सुनिश्चित करते हैं कि ग्राहकों को उनकी पूरी केस यात्रा के दौरान संगठित और पेशेवर सहायता मिले।",
      desc4: "संगठन गोपनीयता, अनुपालन और पेशेवर अखंडता बनाए रखते हुए प्रक्रियात्मक देरी को कम करते हुए एक सुचारू, पारदर्शी और समयबद्ध दावा और विवाद समाधान अनुभव प्रदान करने के लिए प्रतिबद्ध है।"
    },
    mr: {
      title: "यशोदा टोटल सॉल्यूशन बद्दल",
      desc1: "यशोदा टोटल सॉल्यूशन ही एक व्यावसायिक विमा दावा सहाय्य आणि कायदेशीर सहाय्य सेवा संस्था आहे जी संरचित, पारदर्शक आणि परिणाम-केंद्रित सहाय्य सेवांद्वारे विविध विमा आणि वाद-संबंधित बाबींचे व्यवस्थापन आणि निराकरण करण्यासाठी व्यक्ती, कुटुंबे आणि व्यवसायांना मदत करण्यासाठी समर्पित आहे।",
      desc2: "2025 मध्ये स्थापन झालेली, ही संस्था विमा दावे, वाद निराकरण सहाय्य, पॉलिसी व्यवस्थापन सहाय्य आणि कायदेशीर दस्तऐवजीकरण सुविधा या क्षेत्रांमध्ये सहाय्य आणि समन्वय सेवा प्रदान करण्यात तज्ञ आहे. कंपनी जटिल प्रक्रियात्मक आवश्यकता सुलभ करण्यासाठी आणि कायदेशीर आणि नैतिक प्रक्रियेद्वारे योग्य फायदे आणि न्याय्य निराकरण मिळवण्यात मदत करण्यासाठी ग्राहकांच्या वतीने काम करते।",
      desc3: "यशोदा टोटल सॉल्यूशन सेवा प्रदाता आणि समन्वय भागीदार म्हणून कार्य करते, ग्राहक, विमा कंपन्या, सल्लागार आणि अधिकृत कायदेशीर व्यावसायिक यांच्यात पूल म्हणून काम करते. पद्धतशीर मार्गदर्शन, दस्तऐवजीकरण सहाय्य, प्रक्रियात्मक समन्वय आणि केस निरीक्षणाद्वारे, आम्ही खात्री करतो की ग्राहकांना त्यांच्या संपूर्ण केस प्रवासात संघटित आणि व्यावसायिक सहाय्य मिळते।",
      desc4: "संस्था गोपनीयता, अनुपालन आणि व्यावसायिक अखंडता राखून प्रक्रियात्मक विलंब कमी करून सुरळीत, पारदर्शक आणि वेळेवर दावा आणि वाद निराकरण अनुभव देण्यासाठी वचनबद्ध आहे।"
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7F9]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-2 bg-[#F39C12] text-white rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg">
              {t('nav_about')}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-4" data-testid="about-hero-title">
              {t('nav_about')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Professional Insurance Claim Assistance & Legal Support Services
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}></div>
      </section>

      {/* Main About Section */}
      <section className="relative -mt-16 z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-6">
              {aboutContent[language].title}
            </h2>
            <div className="space-y-4 text-lg text-[#52606D] leading-relaxed">
              <p>{aboutContent[language].desc1}</p>
              <p>{aboutContent[language].desc2}</p>
              <p>{aboutContent[language].desc3}</p>
              <p>{aboutContent[language].desc4}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4">
              What We Do
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Insurance claim assistance and settlement coordination',
              'Insurance mis-selling and grievance support',
              'Consumer dispute assistance',
              'Financial and service-related dispute coordination',
              'Cheque bounce and recovery matter assistance',
              'Documentation and application processing support',
              'Coordination with empanelled professionals and consultants'
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3 bg-[#F5F7F9] p-4 rounded-xl"
              >
                <CheckCircle className="h-6 w-6 text-[#0F7A4A] flex-shrink-0 mt-1" />
                <span className="text-base text-[#52606D]">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Features */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4">
              Our Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Experienced Professionals' },
              { icon: Shield, title: 'Dedicated Support Teams' },
              { icon: TrendingUp, title: 'Case Progress Audits' },
              { icon: Clock, title: 'Timely Follow-ups' },
              { icon: Lock, title: 'Data Privacy' },
              { icon: Target, title: 'Multi-level Monitoring' },
              { icon: FileCheck, title: 'Technology-driven Tracking' },
              { icon: HeartHandshake, title: 'Customer Assistance' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                {...fadeUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <feature.icon className="h-10 w-10 text-[#0F7A4A] mb-4" />
                <h3 className="text-base font-semibold text-[#1F2933]">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4">
              Our Approach
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Customer-first service model',
              'Structured procedural guidance',
              'Confidential handling of client information',
              'Professional and timely service delivery',
              'Ethical and transparent operational practices',
              'Continuous follow-up and coordination support'
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#0F7A4A] to-[#159F61] text-white p-6 rounded-2xl shadow-lg"
              >
                <CheckCircle className="h-8 w-8 mb-3" />
                <p className="text-base font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4">
              Meet Our Dedicated Team
            </h2>
          </motion.div>

          <div className="space-y-8">
            {/* Managing Director */}
            <motion.div
              {...fadeUp}
              className="bg-white rounded-3xl shadow-lg p-8 md:p-12"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0F7A4A] to-[#159F61] rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2933] mb-2">Managing Director</h3>
                  <p className="text-lg font-semibold text-[#0F7A4A]">Rajesh Verma</p>
                </div>
              </div>
              <p className="text-base text-[#52606D] leading-relaxed mb-4">
                Rajesh Verma is a seasoned professional with over 14 years of experience in insurance claim settlements. Throughout his career, he has developed deep industry knowledge and strategic expertise to safeguard clients' interests and secure fair, timely claim resolutions.
              </p>
              <p className="text-base text-[#52606D] leading-relaxed mb-4">
                With strong command over claim processes, dispute handling, and insurance regulations, he has successfully managed complex cases and consistently delivered positive outcomes. His client-first philosophy, transparent approach, and dedicated leadership ensure complete support and satisfaction at every stage.
              </p>
              <blockquote className="border-l-4 border-[#F39C12] pl-4 italic text-lg text-[#1F2933] font-medium">
                "Your claim is not just a file for us — it's our responsibility."
              </blockquote>
            </motion.div>

            {/* Sales Team */}
            <motion.div
              {...fadeUp}
              className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-lg p-8 md:p-12 border-2 border-blue-100"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2933]">Sales Team</h3>
                </div>
              </div>
              <p className="text-base text-[#52606D] leading-relaxed mb-4">
                At Yashoda Total Solution, our Sales Team is the first pillar of trust and support for every client. With years of hands-on industry experience, our dedicated professionals work tirelessly to guide customers with honesty, clarity, and confidence.
              </p>
              <p className="text-base text-[#52606D] leading-relaxed mb-4">
                We understand that your hard-earned money represents your dreams, security, and future. That is why our team is committed to providing genuine advice, transparent communication, and complete assistance at every stage.
              </p>
              <p className="text-base font-semibold text-blue-600">
                Your trust motivates us. Your success is our achievement.
              </p>
            </motion.div>

            {/* Legal Team */}
            <motion.div
              {...fadeUp}
              className="bg-gradient-to-br from-orange-50 to-white rounded-3xl shadow-lg p-8 md:p-12 border-2 border-orange-100"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2933]">Legal Team</h3>
                </div>
              </div>
              <p className="text-base text-[#52606D] leading-relaxed mb-4">
                At Yashoda Total Solution, we have a highly experienced and dedicated legal team specializing in Insurance Dispute Resolution Management. Our experts have successfully handled complex cases including insurance mis-selling, claim settlement disputes, and third-party claim settlements.
              </p>
              <p className="text-base text-[#52606D] leading-relaxed mb-4">
                With deep industry knowledge and strategic legal expertise, we stand firmly for our clients' rights and ensure they receive the justice and compensation they deserve. Our unique and result-oriented approach empowers you to recover your hard-earned money — even from the biggest and most powerful insurance companies.
              </p>
              <p className="text-base font-semibold text-orange-600">
                Your fight is our responsibility. Your justice is our mission.
              </p>
            </motion.div>
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
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Ready to Get Help?
            </h2>
            <p className="text-lg md:text-xl text-white/90">
              Contact us today and let us solve your insurance and legal problems.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-[#F39C12] hover:bg-[#d68910] text-white px-12 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(243,156,18,0.5)]"
              >
                Contact Us
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
