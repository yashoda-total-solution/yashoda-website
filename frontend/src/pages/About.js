import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, FileCheck, Users, HeartHandshake, Target, Award, X, Eye } from 'lucide-react';

const TEAM_IMAGES = {
  md: 'https://static.prod-images.emergentagent.com/jobs/bd5b376d-ca14-453c-bb4f-06833e2e2741/images/ffa1856565e9893af507bedd3a7028f927ba4972b10196390cc2e4a098d78712.png',
  sales: 'https://static.prod-images.emergentagent.com/jobs/bd5b376d-ca14-453c-bb4f-06833e2e2741/images/87447e00c2f040c5a6f2bfadb1ae27a431d8b28a7e9a40f86d3b3d5a785b21c4.png',
  legal: 'https://static.prod-images.emergentagent.com/jobs/bd5b376d-ca14-453c-bb4f-06833e2e2741/images/a75fe35cf9732eed2e87f9cab7303f4159c6a291444cd1c3688266fe8ac59960.png',
};

const VECTOR_IMAGES = {
  consultation: 'https://static.prod-images.emergentagent.com/jobs/718385f4-09ea-441f-8141-0b3025908384/images/c1bc1d9e40719c9fc61679d5b8ca53033177dfe16d50afaf3744f683e2f9f9a0.png',
  professionals: 'https://static.prod-images.emergentagent.com/jobs/718385f4-09ea-441f-8141-0b3025908384/images/55114547f229778df9318ffc430899f94be25c66eed2b15a3a4fa3f96c44c9c9.png',
  working: 'https://static.prod-images.emergentagent.com/jobs/718385f4-09ea-441f-8141-0b3025908384/images/8deb5d57fa777bf2a199c113a6101ab89f068fa29fb8644107118918d2589724.png',
  team: 'https://static.prod-images.emergentagent.com/jobs/718385f4-09ea-441f-8141-0b3025908384/images/b6f4ab5e36fb1d671d73b15d7121aaede36beec0ea13c300e1f6ea29e298cd09.png',
};

const pageText = {
  en: {
    title: "About Yashoda Total Solution",
    hero_subtitle: "Professional Insurance Claim Assistance & Legal Support Services",
    
    // About Us Section
    about_intro: "Yashoda Total Solution is a professional insurance claim assistance and legal support service organization dedicated to assisting individuals, families, and businesses in managing and resolving various insurance and dispute-related matters through structured, transparent, and result-oriented support services.",
    about_p2: "Established in 2025, the organization specializes in providing assistance and coordination services in the areas of insurance claims, dispute resolution support, policy management assistance, and legal documentation facilitation. The company works on behalf of customers to simplify complex procedural requirements and help them pursue rightful benefits and fair resolutions through lawful and ethical processes.",
    about_p3: "Yashoda Total Solution operates as a service provider and coordination partner, acting as a bridge between clients, insurance companies, consultants, and authorized legal professionals. Through systematic guidance, documentation assistance, procedural coordination, and case monitoring, we ensure that clients receive organized and professional support throughout their case journey.",
    about_p4: "The organization is committed to delivering a smooth, transparent, and time-bound claim and dispute resolution experience, minimizing procedural delays while maintaining confidentiality, compliance, and professional integrity.",
    
    // What We Do
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
    
    // Features
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
    
    // Strategy
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
    
    // Approach
    approach_title: "Our Approach",
    approach_items: [
      "Customer-first service model",
      "Structured procedural guidance",
      "Confidential handling of client information",
      "Professional and timely service delivery",
      "Ethical and transparent operational practices",
      "Continuous follow-up and coordination support"
    ],
    
    // Commitment
    commitment_title: "Our Commitment",
    commitment_text: "At Yashoda Total Solution, client satisfaction and peace of mind remain our highest priorities. We are committed to delivering reliable, ethical, and professional assistance services, making us a trusted partner for insurance assistance and dispute support services across India.",
    
    // Team
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
    // Hindi translations (keeping existing structure)
    title: "यशोदा टोटल सॉल्यूशन के बारे में",
    hero_subtitle: "पेशेवर बीमा दावा सहायता और कानूनी सहायता सेवाएं",
    
    about_intro: "यशोदा टोटल सॉल्यूशन एक पेशेवर बीमा दावा सहायता और कानूनी सहायता सेवा संगठन है जो संरचित, पारदर्शी और परिणाम-उन्मुख सहायता सेवाओं के माध्यम से विभिन्न बीमा और विवाद से संबंधित मामलों के प्रबंधन और समाधान में व्यक्तियों, परिवारों और व्यवसायों की सहायता के लिए समर्पित है।",
    about_p2: "2025 में स्थापित, यह संगठन बीमा दावों, विवाद समाधान सहायता, पॉलिसी प्रबंधन सहायता और कानूनी दस्तावेज़ीकरण सुविधा के क्षेत्रों में सहायता और समन्वय सेवाएं प्रदान करने में माहिर है। कंपनी जटिल प्रक्रियात्मक आवश्यकताओं को सरल बनाने और कानूनी और नैतिक प्रक्रियाओं के माध्यम से सही लाभ और उचित समाधान प्राप्त करने में मदद करने के लिए ग्राहकों की ओर से काम करती है।",
    about_p3: "यशोदा टोटल सॉल्यूशन एक सेवा प्रदाता और समन्वय भागीदार के रूप में काम करता है, जो ग्राहकों, बीमा कंपनियों, सलाहकारों और अधिकृत कानूनी पेशेवरों के बीच एक पुल के रूप में कार्य करता है। व्यवस्थित मार्गदर्शन, दस्तावेज़ीकरण सहायता, प्रक्रियात्मक समन्वय और मामले की निगरानी के माध्यम से, हम सुनिश्चित करते हैं कि ग्राहकों को उनकी पूरी केस यात्रा के दौरान संगठित और पेशेवर सहायता मिले।",
    about_p4: "संगठन गोपनीयता, अनुपालन और पेशेवर अखंडता बनाए रखते हुए प्रक्रियात्मक देरी को कम करते हुए एक सुचारू, पारदर्शी और समयबद्ध दावा और विवाद समाधान अनुभव प्रदान करने के लिए प्रतिबद्ध है।",
    
    whatwedo_title: "हम क्या करते हैं",
    whatwedo_intro: "यशोदा टोटल सॉल्यूशन विभिन्न प्रकार के विवादों और दावों के मामलों को संभालने के लिए संरचित सहायता और सहायता सेवाएं प्रदान करता है, जिसमें शामिल हैं:",
    whatwedo_items: [
      "बीमा दावा सहायता और निपटान समन्वय",
      "बीमा गलत बिक्री और शिकायत सहायता",
      "उपभोक्ता विवाद सहायता",
      "वित्तीय और सेवा संबंधित विवाद समन्वय",
      "चेक बाउंस और रिकवरी मामले की सहायता",
      "दस्तावेज़ और आवेदन प्रसंस्करण सहायता",
      "पैनल में शामिल पेशेवरों और सलाहकारों के साथ समन्वय"
    ],
    whatwedo_outro: "हमारी भूमिका ग्राहकों की ओर से प्रक्रियाओं का मार्गदर्शन, सहायता और समन्वय करना है, जबकि उचित फॉलो-अप और प्रक्रियात्मक अनुपालन सुनिश्चित करना है।",
    
    features_title: "हमारी विशेषताएं",
    features_intro: "यशोदा टोटल सॉल्यूशन पारंपरिक कानून फर्मों से अलग एक अनूठे सेवा मॉडल के साथ संचालित होता है। संगठन ने संरचित और कुशल सेवा परिणाम देने के लिए अनुभवी पेशेवरों और क्षेत्र विशेषज्ञों को सूचीबद्ध किया है।",
    features_subtitle: "प्रमुख शक्तियों में शामिल हैं:",
    features: [
      "अनुभवी पेशेवर और प्रशिक्षित सहायता कार्यकारी",
      "समर्पित बैकअप और परिचालन सहायता टीमें",
      "बहु-स्तरीय प्रशासनिक निगरानी प्रणाली",
      "आवधिक मामले की प्रगति ऑडिट और समीक्षा",
      "प्रौद्योगिकी-संचालित केस ट्रैकिंग और निगरानी",
      "समय पर फॉलो-अप और ग्राहक सहायता",
      "फोन और डिजिटल संचार के माध्यम से नियमित ग्राहक अपडेट",
      "मजबूत डेटा गोपनीयता और गोपनीयता प्रथाएं"
    ],
    
    strategy_title: "हमारी रणनीति और कार्य मॉडल",
    strategy_intro: "हम विवाद प्रबंधन और दावा सहायता के प्रति एक व्यवस्थित और कार्यान्वयन-संचालित दृष्टिकोण का पालन करते हैं।",
    strategy_items: [
      "प्रत्येक मामले की रणनीतिक मूल्यांकन के माध्यम से समीक्षा और संरचना की जाती है।",
      "केस मार्ग प्रक्रियात्मक आवश्यकताओं और दस्तावेज़ीकरण विश्लेषण के आधार पर डिज़ाइन किए गए हैं।",
      "प्रशासनिक और परिचालन पर्यवेक्षण के माध्यम से निरंतर निगरानी की जाती है।",
      "आवधिक ऑडिट प्रगति का मूल्यांकन करने और आवश्यकता होने पर रणनीतियों को संशोधित करने में मदद करते हैं।",
      "प्रौद्योगिकी-सक्षम ट्रैकिंग पारदर्शिता और जवाबदेही सुनिश्चित करती है।"
    ],
    strategy_outro: "हम एक समयबद्ध कार्य मॉड्यूल का पालन करते हैं, जो अनावश्यक प्रक्रियात्मक देरी से बचने के लिए सक्रिय मामले की गति और निरंतर फॉलो-अप पर ध्यान केंद्रित करता है।",
    
    approach_title: "हमारा दृष्टिकोण",
    approach_items: [
      "ग्राहक-प्रथम सेवा मॉडल",
      "संरचित प्रक्रियात्मक मार्गदर्शन",
      "ग्राहक जानकारी का गोपनीय प्रबंधन",
      "पेशेवर और समय पर सेवा वितरण",
      "नैतिक और पारदर्शी परिचालन प्रथाएं",
      "निरंतर फॉलो-अप और समन्वय सहायता"
    ],
    
    commitment_title: "हमारी प्रतिबद्धता",
    commitment_text: "यशोदा टोटल सॉल्यूशन में, ग्राहक संतुष्टि और मन की शांति हमारी सर्वोच्च प्राथमिकताएं बनी हुई हैं। हम विश्वसनीय, नैतिक और पेशेवर सहायता सेवाएं प्रदान करने के लिए प्रतिबद्ध हैं, जो हमें पूरे भारत में बीमा सहायता और विवाद सहायता सेवाओं के लिए एक विश्वसनीय भागीदार बनाती हैं।",
    
    team_title: "हमारी समर्पित टीम से मिलें",
    md_title: "प्रबंध निदेशक",
    md_name: "राजेश वर्मा",
    md_desc1: "राजेश वर्मा बीमा दावा निपटान में 14 वर्षों से अधिक के अनुभव वाले एक अनुभवी पेशेवर हैं। अपने करियर के दौरान, उन्होंने ग्राहकों के हितों की रक्षा करने और उचित, समय पर दावा समाधान सुनिश्चित करने के लिए गहन उद्योग ज्ञान और रणनीतिक विशेषज्ञता विकसित की है।",
    md_desc2: "दावा प्रक्रियाओं, विवाद प्रबंधन और बीमा नियमों पर मजबूत पकड़ के साथ, उन्होंने जटिल मामलों को सफलतापूर्वक संभाला है और लगातार सकारात्मक परिणाम दिए हैं। उनका ग्राहक-प्रथम दर्शन, पारदर्शी दृष्टिकोण और समर्पित नेतृत्व हर चरण में पूर्ण सहायता और संतुष्टि सुनिश्चित करता है।",
    md_quote: "आपका दावा हमारे लिए सिर्फ एक फाइल नहीं है — यह हमारी जिम्मेदारी है।",
    
    sales_title: "बिक्री टीम",
    sales_desc1: "यशोदा टोटल सॉल्यूशन में, हमारी बिक्री टीम हर ग्राहक के लिए विश्वास और सहायता का पहला स्तंभ है। वर्षों के व्यावहारिक उद्योग अनुभव के साथ, हमारे समर्पित पेशेवर ग्राहकों को ईमानदारी, स्पष्टता और आत्मविश्वास के साथ मार्गदर्शन करने के लिए अथक प्रयास करते हैं।",
    sales_desc2: "हम समझते हैं कि आपकी मेहनत की कमाई आपके सपनों, सुरक्षा और भविष्य का प्रतिनिधित्व करती है। इसीलिए हमारी टीम हर चरण में सच्ची सलाह, पारदर्शी संवाद और पूर्ण सहायता प्रदान करने के लिए प्रतिबद्ध है। पहली परामर्श से लेकर अंतिम समाधान तक, हम समर्पण और जिम्मेदारी के साथ आपके साथ खड़े हैं।",
    sales_desc3: "हमारी ताकत हमारे मेहनती दृष्टिकोण, ग्राहक-केंद्रित मानसिकता और हमारे कानूनी और दावों के विशेषज्ञों के साथ मजबूत समन्वय में निहित है ताकि आपके लिए सर्वोत्तम संभव परिणाम सुनिश्चित किया जा सके।",
    sales_motto: "आपका विश्वास हमें प्रेरित करता है। आपकी सफलता हमारी उपलब्धि है।",
    
    legal_title: "कानूनी टीम",
    legal_desc1: "यशोदा टोटल सॉल्यूशन में, हमारे पास बीमा विवाद समाधान प्रबंधन में विशेषज्ञ एक अत्यधिक अनुभवी और समर्पित कानूनी टीम है। हमारे विशेषज्ञों ने बीमा गलत बिक्री, दावा निपटान विवाद और तृतीय-पक्ष दावा निपटान सहित जटिल मामलों को सफलतापूर्वक संभाला है।",
    legal_desc2: "गहन उद्योग ज्ञान और रणनीतिक कानूनी विशेषज्ञता के साथ, हम अपने ग्राहकों के अधिकारों के लिए दृढ़ता से खड़े हैं और सुनिश्चित करते हैं कि उन्हें वह न्याय और मुआवजा मिले जिसके वे हकदार हैं। हमारा अनोखा और परिणाम-उन्मुख दृष्टिकोण आपको अपनी मेहनत की कमाई वापस पाने में सक्षम बनाता है — यहां तक कि सबसे बड़ी और सबसे शक्तिशाली बीमा कंपनियों से भी।",
    legal_motto: "आपकी लड़ाई हमारी जिम्मेदारी है। आपका न्याय हमारा मिशन है।",
    
    view_profile: "प्रोफ़ाइल देखें",
    close: "बंद करें",
  },
  mr: {
    // Marathi translations (keeping existing structure)
    title: "यशोदा टोटल सॉल्यूशन बद्दल",
    hero_subtitle: "व्यावसायिक विमा दावा सहाय्य आणि कायदेशीर सहाय्य सेवा",
    
    about_intro: "यशोदा टोटल सॉल्यूशन ही एक व्यावसायिक विमा दावा सहाय्य आणि कायदेशीर सहाय्य सेवा संस्था आहे जी संरचित, पारदर्शक आणि परिणाम-केंद्रित सहाय्य सेवांद्वारे विविध विमा आणि वाद-संबंधित बाबींचे व्यवस्थापन आणि निराकरण करण्यासाठी व्यक्ती, कुटुंबे आणि व्यवसायांना मदत करण्यासाठी समर्पित आहे.",
    about_p2: "2025 मध्ये स्थापन झालेली, ही संस्था विमा दावे, वाद निराकरण सहाय्य, पॉलिसी व्यवस्थापन सहाय्य आणि कायदेशीर दस्तऐवजीकरण सुविधा या क्षेत्रांमध्ये सहाय्य आणि समन्वय सेवा प्रदान करण्यात तज्ञ आहे. कंपनी जटिल प्रक्रियात्मक आवश्यकता सुलभ करण्यासाठी आणि कायदेशीर आणि नैतिक प्रक्रियेद्वारे योग्य फायदे आणि न्याय्य निराकरण मिळवण्यात मदत करण्यासाठी ग्राहकांच्या वतीने काम करते.",
    about_p3: "यशोदा टोटल सॉल्यूशन सेवा प्रदाता आणि समन्वय भागीदार म्हणून कार्य करते, ग्राहक, विमा कंपन्या, सल्लागार आणि अधिकृत कायदेशीर व्यावसायिक यांच्यात पूल म्हणून काम करते. पद्धतशीर मार्गदर्शन, दस्तऐवजीकरण सहाय्य, प्रक्रियात्मक समन्वय आणि केस निरीक्षणाद्वारे, आम्ही खात्री करतो की ग्राहकांना त्यांच्या संपूर्ण केस प्रवासात संघटित आणि व्यावसायिक सहाय्य मिळते.",
    about_p4: "संस्था गोपनीयता, अनुपालन आणि व्यावसायिक अखंडता राखून प्रक्रियात्मक विलंब कमी करून सुरळीत, पारदर्शक आणि वेळेवर दावा आणि वाद निराकरण अनुभव देण्यासाठी वचनबद्ध आहे.",
    
    whatwedo_title: "आम्ही काय करतो",
    whatwedo_intro: "यशोदा टोटल सॉल्यूशन विविध प्रकारच्या वाद आणि दावे प्रकरणांना हाताळण्यासाठी संरचित सहाय्य आणि समर्थन सेवा प्रदान करते, यात समाविष्ट आहे:",
    whatwedo_items: [
      "विमा दावा सहाय्य आणि निपटारा समन्वय",
      "विमा चुकीची विक्री आणि तक्रार सहाय्य",
      "ग्राहक वाद सहाय्य",
      "आर्थिक आणि सेवा-संबंधित वाद समन्वय",
      "चेक बाउंस आणि रिकव्हरी प्रकरणांचे सहाय्य",
      "दस्तऐवज आणि अर्ज प्रक्रिया सहाय्य",
      "पॅनेलमधील व्यावसायिक आणि सल्लागारांसोबत समन्वय"
    ],
    whatwedo_outro: "आमची भूमिका ग्राहकांच्या वतीने प्रक्रियेचे मार्गदर्शन, सहाय्य आणि समन्वय करणे आहे आणि योग्य फॉलो-अप आणि प्रक्रियात्मक अनुपालन सुनिश्चित करणे आहे.",
    
    features_title: "आमची वैशिष्ट्ये",
    features_intro: "यशोदा टोटल सॉल्यूशन पारंपारिक कायदेशीर फर्मपेक्षा वेगळ्या अनन्य सेवा मॉडेलसह कार्य करते. संस्थेने संरचित आणि कार्यक्षम सेवा परिणाम देण्यासाठी अनुभवी व्यावसायिक आणि क्षेत्र तज्ञांना सूचीबद्ध केले आहे.",
    features_subtitle: "मुख्य शक्तींमध्ये समाविष्ट आहे:",
    features: [
      "अनुभवी व्यावसायिक आणि प्रशिक्षित समर्थन कार्यकारी",
      "समर्पित बॅकअप आणि ऑपरेशनल समर्थन टीम",
      "बहु-स्तरीय प्रशासकीय निरीक्षण प्रणाली",
      "नियतकालिक केस प्रगती ऑडिट आणि पुनरावलोकने",
      "तंत्रज्ञान-चालित केस ट्रॅकिंग आणि निरीक्षण",
      "वेळेवर फॉलो-अप आणि ग्राहक सहाय्य",
      "फोन आणि डिजिटल संप्रेषणाद्वारे नियमित क्लायंट अपडेट",
      "मजबूत डेटा गोपनीयता आणि गोपनीयता पद्धती"
    ],
    
    strategy_title: "आमची रणनीती आणि कार्य मॉडेल",
    strategy_intro: "आम्ही वाद हाताळणी आणि दावा सहाय्य या दिशेने एक पद्धतशीर आणि अंमलबजावणी-चालित दृष्टिकोन अनुसरतो.",
    strategy_items: [
      "प्रत्येक केसचे धोरणात्मक मूल्यांकनाद्वारे पुनरावलोकन आणि संरचना केली जाते.",
      "केस मार्ग प्रक्रियात्मक आवश्यकता आणि दस्तऐवजीकरण विश्लेषणावर आधारित डिझाइन केले आहेत.",
      "प्रशासकीय आणि ऑपरेशनल पर्यवेक्षणाद्वारे सतत निरीक्षण केले जाते.",
      "नियतकालिक ऑडिट प्रगतीचे मूल्यांकन करण्यास आणि आवश्यक असल्यास धोरणे सुधारण्यास मदत करतात.",
      "तंत्रज्ञान-सक्षम ट्रॅकिंग पारदर्शकता आणि जबाबदारी सुनिश्चित करते."
    ],
    strategy_outro: "आम्ही एक वेळेवर कार्य मॉड्यूल अनुसरतो, अनावश्यक प्रक्रियात्मक विलंब टाळण्यासाठी सक्रिय केस हालचाल आणि सतत फॉलो-अपवर लक्ष केंद्रित करतो.",
    
    approach_title: "आमचा दृष्टिकोन",
    approach_items: [
      "ग्राहक-प्रथम सेवा मॉडेल",
      "संरचित प्रक्रियात्मक मार्गदर्शन",
      "ग्राहक माहितीचे गोपनीय हाताळणी",
      "व्यावसायिक आणि वेळेवर सेवा वितरण",
      "नैतिक आणि पारदर्शक कार्यपद्धती",
      "सतत फॉलो-अप आणि समन्वय सहाय्य"
    ],
    
    commitment_title: "आमची वचनबद्धता",
    commitment_text: "यशोदा टोटल सॉल्यूशनमध्ये, क्लायंट समाधान आणि मनःशांती आमच्या सर्वोच्च प्राधान्यक्रमांमध्ये राहिली आहे. आम्ही विश्वासार्ह, नैतिक आणि व्यावसायिक सहाय्य सेवा प्रदान करण्यासाठी वचनबद्ध आहोत, ज्यामुळे आम्ही संपूर्ण भारतातील विमा सहाय्य आणि वाद समर्थन सेवांसाठी एक विश्वासार्ह भागीदार बनतो.",
    
    team_title: "आमच्या समर्पित टीमला भेटा",
    md_title: "व्यवस्थापकीय संचालक",
    md_name: "राजेश वर्मा",
    md_desc1: "राजेश वर्मा हे विमा दावा निपटाऱ्यात 14 वर्षांहून अधिक अनुभव असलेले एक अनुभवी व्यावसायिक आहेत. त्यांच्या कारकिर्दीत, त्यांनी ग्राहकांच्या हितांचे रक्षण करण्यासाठी आणि न्याय्य, वेळेवर दावा निराकरण सुनिश्चित करण्यासाठी सखोल उद्योग ज्ञान आणि रणनीतिक कौशल्य विकसित केले आहे.",
    md_desc2: "दावा प्रक्रिया, वाद हाताळणी आणि विमा नियमांवर मजबूत पकड असलेल्या त्यांनी जटिल प्रकरणे यशस्वीरीत्या हाताळली आहेत आणि सातत्याने सकारात्मक परिणाम दिले आहेत. त्यांचे ग्राहक-प्रथम तत्त्वज्ञान, पारदर्शक दृष्टिकोन आणि समर्पित नेतृत्व प्रत्येक टप्प्यावर पूर्ण सहाय्य आणि समाधान सुनिश्चित करते.",
    md_quote: "तुमचा दावा आमच्यासाठी फक्त एक फाइल नाही — ही आमची जबाबदारी आहे.",
    
    sales_title: "विक्री टीम",
    sales_desc1: "यशोदा टोटल सॉल्यूशनमध्ये, आमची विक्री टीम प्रत्येक ग्राहकासाठी विश्वास आणि सहाय्याचा पहिला स्तंभ आहे. अनेक वर्षांच्या प्रत्यक्ष उद्योग अनुभवासह, आमचे समर्पित व्यावसायिक ग्राहकांना प्रामाणिकपणा, स्पष्टता आणि आत्मविश्वासाने मार्गदर्शन करण्यासाठी अथक प्रयत्न करतात.",
    sales_desc2: "आम्ही समजतो की तुमच्या कष्टाने कमावलेले पैसे तुमच्या स्वप्नांचे, सुरक्षिततेचे आणि भविष्याचे प्रतिनिधित्व करतात. म्हणूनच आमची टीम प्रत्येक टप्प्यावर सच्चा सल्ला, पारदर्शक संवाद आणि संपूर्ण सहाय्य प्रदान करण्यासाठी वचनबद्ध आहे. पहिल्या सल्लामसलतीपासून अंतिम निराकरणापर्यंत, आम्ही समर्पण आणि जबाबदारीसह तुमच्या शेजारी उभे राहतो.",
    sales_desc3: "आमची ताकद आमच्या मेहनती दृष्टिकोनात, ग्राहक-केंद्रित मानसिकतेत आणि तुमच्यासाठी सर्वोत्तम संभाव्य परिणाम सुनिश्चित करण्यासाठी आमच्या कायदेशीर आणि दावे तज्ञांसोबत मजबूत समन्वयात आहे.",
    sales_motto: "तुमचा विश्वास आम्हाला प्रेरित करतो. तुमचे यश आमची उपलब्धी आहे.",
    
    legal_title: "कायदेशीर टीम",
    legal_desc1: "यशोदा टोटल सॉल्यूशनमध्ये, आमच्याकडे विमा वाद निराकरण व्यवस्थापनात तज्ञ असलेली एक अत्यंत अनुभवी आणि समर्पित कायदेशीर टीम आहे. आमच्या तज्ञांनी विमा चुकीची विक्री, दावा निपटारा वाद आणि तृतीय-पक्ष दावा निपटारा यासारख्या जटिल प्रकरणे यशस्वीरित्या हाताळली आहेत.",
    legal_desc2: "सखोल उद्योग ज्ञान आणि रणनीतिक कायदेशीर कौशल्यासह, आम्ही आमच्या ग्राहकांच्या अधिकारांसाठी ठामपणे उभे राहतो आणि त्यांना योग्य न्याय आणि नुकसानभरपाई मिळेल याची खात्री करतो. आमचा अनोखा आणि परिणाम-केंद्रित दृष्टिकोन तुम्हाला तुमचे कष्टाने कमावलेले पैसे परत मिळवण्यास सक्षम करतो — अगदी सर्वात मोठ्या आणि सर्वात शक्तिशाली विमा कंपन्यांकडूनही.",
    legal_motto: "तुमची लढाई आमची जबाबदारी आहे. तुमचा न्याय आमचे ध्येय आहे.",
    
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
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0F7A4A] to-[#0A5734] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">{txt.title}</h1>
            <p className="text-base md:text-lg text-white/90">{txt.hero_subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* About Us - WITH VECTOR */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <img src={VECTOR_IMAGES.consultation} alt="Consultation" className="w-full rounded-2xl" />
            </motion.div>
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1F2933] mb-6">About Us</h2>
              <div className="space-y-4 text-[#52606D] leading-relaxed">
                <p>{txt.about_intro}</p>
                <p>{txt.about_p2}</p>
              </div>
            </motion.div>
          </div>
          <motion.div {...fadeUp} className="mt-8 space-y-4 text-[#52606D] leading-relaxed">
            <p>{txt.about_p3}</p>
            <p>{txt.about_p4}</p>
          </motion.div>
        </div>
      </section>

      {/* What We Do - WITH VECTOR */}
      <section className="py-16 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp} className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1F2933] mb-6">{txt.whatwedo_title}</h2>
              <p className="text-[#52606D] mb-6">{txt.whatwedo_intro}</p>
              <ul className="space-y-3">
                {txt.whatwedo_items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#0F7A4A] mt-1">•</span>
                    <span className="text-[#52606D]">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#52606D] mt-6">{txt.whatwedo_outro}</p>
            </motion.div>
            <motion.div {...fadeUp} className="order-1 lg:order-2">
              <img src={VECTOR_IMAGES.professionals} alt="Professionals" className="w-full rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features - WITH VECTOR */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <img src={VECTOR_IMAGES.working} alt="Working" className="w-full rounded-2xl" />
            </motion.div>
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1F2933] mb-4">{txt.features_title}</h2>
              <p className="text-[#52606D] mb-4">{txt.features_intro}</p>
              <p className="text-[#1F2933] font-semibold mb-4">{txt.features_subtitle}</p>
              <ul className="space-y-3">
                {txt.features.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#F39C12] mt-1">•</span>
                    <span className="text-[#52606D]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategy & Approach */}
      <section className="py-16 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F2933] mb-4">{txt.strategy_title}</h2>
            <p className="text-[#52606D] mb-6">{txt.strategy_intro}</p>
            <ul className="space-y-3">
              {txt.strategy_items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#0F7A4A] mt-1">•</span>
                  <span className="text-[#52606D]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#52606D] mt-6">{txt.strategy_outro}</p>
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F2933] mb-6">{txt.approach_title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {txt.approach_items.map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-xl shadow-sm">
                  <p className="text-[#52606D]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F2933] mb-6">{txt.commitment_title}</h2>
            <p className="text-[#52606D] leading-relaxed text-lg">{txt.commitment_text}</p>
          </motion.div>
        </div>
      </section>

      {/* Team - WITH VECTOR */}
      <section className="py-16 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F2933]">{txt.team_title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member, i) => {
              const Icon = member.icon;
              return (
                <motion.div key={member.key} {...fadeUp} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img src={member.image} alt={member.name || member.title} className="w-full aspect-square object-cover" />
                  <div className="p-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Icon className="h-5 w-5" style={{ color: member.color }} />
                      <h3 className="text-lg font-bold text-[#1F2933]">{member.title}</h3>
                    </div>
                    {member.name && <p className="font-semibold mb-3" style={{ color: member.color }}>{member.name}</p>}
                    <button onClick={() => setActiveProfile(member)} className="text-sm font-semibold hover:underline" style={{ color: member.color }}>
                      <Eye className="inline h-4 w-4 mr-1" />{txt.view_profile}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <motion.div {...fadeUp} className="max-w-2xl mx-auto">
            <img src={VECTOR_IMAGES.team} alt="Team" className="w-full rounded-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Profile Modal */}
      <AnimatePresence>
        {activeProfile && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setActiveProfile(null)}>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} onClick={e => e.stopPropagation()} className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img src={activeProfile.image} alt={activeProfile.name || activeProfile.title} className="w-full h-56 object-cover rounded-t-3xl" />
                <button onClick={() => setActiveProfile(null)} className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg">
                  <X className="h-5 w-5 text-[#1F2933]" />
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  {React.createElement(activeProfile.icon, { className: 'h-7 w-7', style: { color: activeProfile.color } })}
                  <h3 className="text-2xl font-bold text-[#1F2933]">{activeProfile.title}</h3>
                </div>
                {activeProfile.name && <p className="text-lg font-semibold mb-5" style={{ color: activeProfile.color }}>{activeProfile.name}</p>}
                {activeProfile.descriptions.map((desc, i) => (
                  <p key={i} className="text-[#52606D] leading-relaxed mb-4">{desc}</p>
                ))}
                {activeProfile.highlightType === 'quote' ? (
                  <blockquote className="border-l-4 border-[#F39C12] pl-4 italic text-lg text-[#1F2933] font-medium mt-4">"{activeProfile.highlight}"</blockquote>
                ) : (
                  <p className="font-semibold mt-4" style={{ color: activeProfile.color }}>{activeProfile.highlight}</p>
                )}
                <button onClick={() => setActiveProfile(null)} className="mt-8 w-full py-3 rounded-full font-semibold text-white transition-all" style={{ backgroundColor: activeProfile.color }}>
                  {txt.close}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
