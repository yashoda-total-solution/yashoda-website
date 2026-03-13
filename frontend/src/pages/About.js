import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Users, Target, Shield, Award, Clock, CheckCircle, 
  FileCheck, Lock, HeartHandshake, TrendingUp, ArrowRight, X, Eye
} from 'lucide-react';

const TEAM_IMAGES = {
  md: 'https://static.prod-images.emergentagent.com/jobs/bd5b376d-ca14-453c-bb4f-06833e2e2741/images/ffa1856565e9893af507bedd3a7028f927ba4972b10196390cc2e4a098d78712.png',
  sales: 'https://static.prod-images.emergentagent.com/jobs/bd5b376d-ca14-453c-bb4f-06833e2e2741/images/87447e00c2f040c5a6f2bfadb1ae27a431d8b28a7e9a40f86d3b3d5a785b21c4.png',
  legal: 'https://static.prod-images.emergentagent.com/jobs/bd5b376d-ca14-453c-bb4f-06833e2e2741/images/a75fe35cf9732eed2e87f9cab7303f4159c6a291444cd1c3688266fe8ac59960.png',
};

const pageText = {
  en: {
    title: "About Yashoda Total Solution",
    desc1: "Yashoda Total Solution is a professional insurance claim assistance and legal support service organization dedicated to assisting individuals, families, and businesses in managing and resolving various insurance and dispute-related matters through structured, transparent, and result-oriented support services.",
    desc2: "Established in 2025, the organization specializes in providing assistance and coordination services in the areas of insurance claims, dispute resolution support, policy management assistance, and legal documentation facilitation. The company works on behalf of customers to simplify complex procedural requirements and help them pursue rightful benefits and fair resolutions through lawful and ethical processes.",
    desc3: "Yashoda Total Solution operates as a service provider and coordination partner, acting as a bridge between clients, insurance companies, consultants, and authorized legal professionals. Through systematic guidance, documentation assistance, procedural coordination, and case monitoring, we ensure that clients receive organized and professional support throughout their case journey.",
    desc4: "The organization is committed to delivering a smooth, transparent, and time-bound claim and dispute resolution experience, minimizing procedural delays while maintaining confidentiality, compliance, and professional integrity.",
    hero_subtitle: "Professional Insurance Claim Assistance & Legal Support Services",
    whatwedo_title: "What We Do",
    whatwedo_items: [
      "Insurance claim assistance and settlement coordination",
      "Insurance mis-selling and grievance support",
      "Consumer dispute assistance",
      "Financial and service-related dispute coordination",
      "Cheque bounce and recovery matter assistance",
      "Documentation and application processing support",
      "Coordination with empanelled professionals and consultants"
    ],
    features_title: "Our Features",
    features: [
      "Experienced Professionals", "Dedicated Support Teams", "Case Progress Audits", "Timely Follow-ups",
      "Data Privacy", "Multi-level Monitoring", "Technology-driven Tracking", "Customer Assistance"
    ],
    approach_title: "Our Approach",
    approach_items: [
      "Customer-first service model", "Structured procedural guidance",
      "Confidential handling of client information", "Professional and timely service delivery",
      "Ethical and transparent operational practices", "Continuous follow-up and coordination support"
    ],
    team_title: "Meet Our Dedicated Team",
    md_title: "Managing Director",
    md_name: "Rajesh Verma",
    md_desc1: "Rajesh Verma is a seasoned professional with over 14 years of experience in insurance claim settlements. Throughout his career, he has developed deep industry knowledge and strategic expertise to safeguard clients' interests and secure fair, timely claim resolutions.",
    md_desc2: "With strong command over claim processes, dispute handling, and insurance regulations, he has successfully managed complex cases and consistently delivered positive outcomes. His client-first philosophy, transparent approach, and dedicated leadership ensure complete support and satisfaction at every stage.",
    md_quote: "Your claim is not just a file for us — it's our responsibility.",
    sales_title: "Sales Team",
    sales_desc1: "At Yashoda Total Solution, our Sales Team is the first pillar of trust and support for every client. With years of hands-on industry experience, our dedicated professionals work tirelessly to guide customers with honesty, clarity, and confidence.",
    sales_desc2: "We understand that your hard-earned money represents your dreams, security, and future. That is why our team is committed to providing genuine advice, transparent communication, and complete assistance at every stage.",
    sales_motto: "Your trust motivates us. Your success is our achievement.",
    legal_title: "Legal Team",
    legal_desc1: "At Yashoda Total Solution, we have a highly experienced and dedicated legal team specializing in Insurance Dispute Resolution Management. Our experts have successfully handled complex cases including insurance mis-selling, claim settlement disputes, and third-party claim settlements.",
    legal_desc2: "With deep industry knowledge and strategic legal expertise, we stand firmly for our clients' rights and ensure they receive the justice and compensation they deserve. Our unique and result-oriented approach empowers you to recover your hard-earned money — even from the biggest and most powerful insurance companies.",
    legal_motto: "Your fight is our responsibility. Your justice is our mission.",
    cta_title: "Ready to Get Help?",
    cta_desc: "Contact us today and let us solve your insurance and legal problems.",
    cta_btn: "Contact Us",
    view_profile: "View Profile",
    close: "Close",
  },
  hi: {
    title: "यशोदा टोटल सॉल्यूशन के बारे में",
    desc1: "यशोदा टोटल सॉल्यूशन एक पेशेवर बीमा दावा सहायता और कानूनी सहायता सेवा संगठन है जो संरचित, पारदर्शी और परिणाम-उन्मुख सहायता सेवाओं के माध्यम से विभिन्न बीमा और विवाद से संबंधित मामलों के प्रबंधन और समाधान में व्यक्तियों, परिवारों और व्यवसायों की सहायता के लिए समर्पित है।",
    desc2: "2025 में स्थापित, यह संगठन बीमा दावों, विवाद समाधान सहायता, पॉलिसी प्रबंधन सहायता और कानूनी दस्तावेज़ीकरण सुविधा के क्षेत्रों में सहायता और समन्वय सेवाएं प्रदान करने में माहिर है। कंपनी जटिल प्रक्रियात्मक आवश्यकताओं को सरल बनाने और कानूनी और नैतिक प्रक्रियाओं के माध्यम से सही लाभ और उचित समाधान प्राप्त करने में मदद करने के लिए ग्राहकों की ओर से काम करती है।",
    desc3: "यशोदा टोटल सॉल्यूशन एक सेवा प्रदाता और समन्वय भागीदार के रूप में काम करता है, जो ग्राहकों, बीमा कंपनियों, सलाहकारों और अधिकृत कानूनी पेशेवरों के बीच एक पुल के रूप में कार्य करता है। व्यवस्थित मार्गदर्शन, दस्तावेज़ीकरण सहायता, प्रक्रियात्मक समन्वय और मामले की निगरानी के माध्यम से, हम सुनिश्चित करते हैं कि ग्राहकों को उनकी पूरी केस यात्रा के दौरान संगठित और पेशेवर सहायता मिले।",
    desc4: "संगठन गोपनीयता, अनुपालन और पेशेवर अखंडता बनाए रखते हुए प्रक्रियात्मक देरी को कम करते हुए एक सुचारू, पारदर्शी और समयबद्ध दावा और विवाद समाधान अनुभव प्रदान करने के लिए प्रतिबद्ध है।",
    hero_subtitle: "पेशेवर बीमा दावा सहायता और कानूनी सहायता सेवाएं",
    whatwedo_title: "हम क्या करते हैं",
    whatwedo_items: [
      "बीमा दावा सहायता और निपटान समन्वय",
      "बीमा गलत बिक्री और शिकायत सहायता",
      "उपभोक्ता विवाद सहायता",
      "वित्तीय और सेवा संबंधित विवाद समन्वय",
      "चेक बाउंस और रिकवरी मामले की सहायता",
      "दस्तावेज़ और आवेदन प्रसंस्करण सहायता",
      "पैनल में शामिल पेशेवरों और सलाहकारों के साथ समन्वय"
    ],
    features_title: "हमारी विशेषताएं",
    features: [
      "अनुभवी पेशेवर", "समर्पित सहायता टीमें", "केस प्रगति ऑडिट", "समय पर फॉलो-अप",
      "डेटा गोपनीयता", "बहु-स्तरीय निगरानी", "प्रौद्योगिकी-संचालित ट्रैकिंग", "ग्राहक सहायता"
    ],
    approach_title: "हमारा दृष्टिकोण",
    approach_items: [
      "ग्राहक-प्रथम सेवा मॉडल", "संरचित प्रक्रियात्मक मार्गदर्शन",
      "ग्राहक जानकारी का गोपनीय प्रबंधन", "पेशेवर और समय पर सेवा वितरण",
      "नैतिक और पारदर्शी परिचालन प्रथाएं", "निरंतर फॉलो-अप और समन्वय सहायता"
    ],
    team_title: "हमारी समर्पित टीम से मिलें",
    md_title: "प्रबंध निदेशक",
    md_name: "राजेश वर्मा",
    md_desc1: "राजेश वर्मा बीमा दावा निपटान में 14 वर्षों से अधिक के अनुभव वाले एक अनुभवी पेशेवर हैं। अपने करियर के दौरान, उन्होंने ग्राहकों के हितों की रक्षा करने और उचित, समय पर दावा समाधान सुनिश्चित करने के लिए गहन उद्योग ज्ञान और रणनीतिक विशेषज्ञता विकसित की है।",
    md_desc2: "दावा प्रक्रियाओं, विवाद प्रबंधन और बीमा नियमों पर मजबूत पकड़ के साथ, उन्होंने जटिल मामलों को सफलतापूर्वक संभाला है और लगातार सकारात्मक परिणाम दिए हैं। उनका ग्राहक-प्रथम दर्शन, पारदर्शी दृष्टिकोण और समर्पित नेतृत्व हर चरण में पूर्ण सहायता और संतुष्टि सुनिश्चित करता है।",
    md_quote: "आपका दावा हमारे लिए सिर्फ एक फाइल नहीं है — यह हमारी जिम्मेदारी है।",
    sales_title: "बिक्री टीम",
    sales_desc1: "यशोदा टोटल सॉल्यूशन में, हमारी बिक्री टीम हर ग्राहक के लिए विश्वास और सहायता का पहला स्तंभ है। वर्षों के व्यावहारिक उद्योग अनुभव के साथ, हमारे समर्पित पेशेवर ग्राहकों को ईमानदारी, स्पष्टता और आत्मविश्वास के साथ मार्गदर्शन करने के लिए अथक प्रयास करते हैं।",
    sales_desc2: "हम समझते हैं कि आपकी मेहनत की कमाई आपके सपनों, सुरक्षा और भविष्य का प्रतिनिधित्व करती है। इसीलिए हमारी टीम हर चरण में सच्ची सलाह, पारदर्शी संवाद और पूर्ण सहायता प्रदान करने के लिए प्रतिबद्ध है।",
    sales_motto: "आपका विश्वास हमें प्रेरित करता है। आपकी सफलता हमारी उपलब्धि है।",
    legal_title: "कानूनी टीम",
    legal_desc1: "यशोदा टोटल सॉल्यूशन में, हमारे पास बीमा विवाद समाधान प्रबंधन में विशेषज्ञ एक अत्यधिक अनुभवी और समर्पित कानूनी टीम है। हमारे विशेषज्ञों ने बीमा गलत बिक्री, दावा निपटान विवाद और तृतीय-पक्ष दावा निपटान सहित जटिल मामलों को सफलतापूर्वक संभाला है।",
    legal_desc2: "गहन उद्योग ज्ञान और रणनीतिक कानूनी विशेषज्ञता के साथ, हम अपने ग्राहकों के अधिकारों के लिए दृढ़ता से खड़े हैं और सुनिश्चित करते हैं कि उन्हें वह न्याय और मुआवजा मिले जिसके वे हकदार हैं। हमारा अनोखा और परिणाम-उन्मुख दृष्टिकोण आपको अपनी मेहनत की कमाई वापस पाने में सक्षम बनाता है — यहां तक कि सबसे बड़ी और सबसे शक्तिशाली बीमा कंपनियों से भी।",
    legal_motto: "आपकी लड़ाई हमारी जिम्मेदारी है। आपका न्याय हमारा मिशन है।",
    cta_title: "मदद लेने के लिए तैयार हैं?",
    cta_desc: "आज ही हमसे संपर्क करें और हमें अपनी बीमा और कानूनी समस्याओं को हल करने दें।",
    cta_btn: "संपर्क करें",
    view_profile: "प्रोफ़ाइल देखें",
    close: "बंद करें",
  },
  mr: {
    title: "यशोदा टोटल सॉल्यूशन बद्दल",
    desc1: "यशोदा टोटल सॉल्यूशन ही एक व्यावसायिक विमा दावा सहाय्य आणि कायदेशीर सहाय्य सेवा संस्था आहे जी संरचित, पारदर्शक आणि परिणाम-केंद्रित सहाय्य सेवांद्वारे विविध विमा आणि वाद-संबंधित बाबींचे व्यवस्थापन आणि निराकरण करण्यासाठी व्यक्ती, कुटुंबे आणि व्यवसायांना मदत करण्यासाठी समर्पित आहे.",
    desc2: "2025 मध्ये स्थापन झालेली, ही संस्था विमा दावे, वाद निराकरण सहाय्य, पॉलिसी व्यवस्थापन सहाय्य आणि कायदेशीर दस्तऐवजीकरण सुविधा या क्षेत्रांमध्ये सहाय्य आणि समन्वय सेवा प्रदान करण्यात तज्ञ आहे. कंपनी जटिल प्रक्रियात्मक आवश्यकता सुलभ करण्यासाठी आणि कायदेशीर आणि नैतिक प्रक्रियेद्वारे योग्य फायदे आणि न्याय्य निराकरण मिळवण्यात मदत करण्यासाठी ग्राहकांच्या वतीने काम करते.",
    desc3: "यशोदा टोटल सॉल्यूशन सेवा प्रदाता आणि समन्वय भागीदार म्हणून कार्य करते, ग्राहक, विमा कंपन्या, सल्लागार आणि अधिकृत कायदेशीर व्यावसायिक यांच्यात पूल म्हणून काम करते. पद्धतशीर मार्गदर्शन, दस्तऐवजीकरण सहाय्य, प्रक्रियात्मक समन्वय आणि केस निरीक्षणाद्वारे, आम्ही खात्री करतो की ग्राहकांना त्यांच्या संपूर्ण केस प्रवासात संघटित आणि व्यावसायिक सहाय्य मिळते.",
    desc4: "संस्था गोपनीयता, अनुपालन आणि व्यावसायिक अखंडता राखून प्रक्रियात्मक विलंब कमी करून सुरळीत, पारदर्शक आणि वेळेवर दावा आणि वाद निराकरण अनुभव देण्यासाठी वचनबद्ध आहे.",
    hero_subtitle: "व्यावसायिक विमा दावा सहाय्य आणि कायदेशीर सहाय्य सेवा",
    whatwedo_title: "आम्ही काय करतो",
    whatwedo_items: [
      "विमा दावा सहाय्य आणि निपटारा समन्वय",
      "विमा चुकीची विक्री आणि तक्रार सहाय्य",
      "ग्राहक वाद सहाय्य",
      "आर्थिक आणि सेवा-संबंधित वाद समन्वय",
      "चेक बाउंस आणि रिकव्हरी प्रकरणांचे सहाय्य",
      "दस्तऐवज आणि अर्ज प्रक्रिया सहाय्य",
      "पॅनेलमधील व्यावसायिक आणि सल्लागारांसोबत समन्वय"
    ],
    features_title: "आमची वैशिष्ट्ये",
    features: [
      "अनुभवी व्यावसायिक", "समर्पित सहाय्य टीम", "केस प्रगती ऑडिट", "वेळेवर फॉलो-अप",
      "डेटा गोपनीयता", "बहु-स्तरीय निरीक्षण", "तंत्रज्ञान-चालित ट्रॅकिंग", "ग्राहक सहाय्य"
    ],
    approach_title: "आमचा दृष्टिकोन",
    approach_items: [
      "ग्राहक-प्रथम सेवा मॉडेल", "संरचित प्रक्रियात्मक मार्गदर्शन",
      "ग्राहक माहितीचे गोपनीय हाताळणी", "व्यावसायिक आणि वेळेवर सेवा वितरण",
      "नैतिक आणि पारदर्शक कार्यपद्धती", "सतत फॉलो-अप आणि समन्वय सहाय्य"
    ],
    team_title: "आमच्या समर्पित टीमला भेटा",
    md_title: "व्यवस्थापकीय संचालक",
    md_name: "राजेश वर्मा",
    md_desc1: "राजेश वर्मा हे विमा दावा निपटाऱ्यात 14 वर्षांहून अधिक अनुभव असलेले एक अनुभवी व्यावसायिक आहेत. त्यांच्या कारकिर्दीत, त्यांनी ग्राहकांच्या हितांचे रक्षण करण्यासाठी आणि न्याय्य, वेळेवर दावा निराकरण सुनिश्चित करण्यासाठी सखोल उद्योग ज्ञान आणि रणनीतिक कौशल्य विकसित केले आहे.",
    md_desc2: "दावा प्रक्रिया, वाद हाताळणी आणि विमा नियमांवर मजबूत पकड असलेल्या त्यांनी जटिल प्रकरणे यशस्वीरीत्या हाताळली आहेत आणि सातत्याने सकारात्मक परिणाम दिले आहेत. त्यांचे ग्राहक-प्रथम तत्त्वज्ञान, पारदर्शक दृष्टिकोन आणि समर्पित नेतृत्व प्रत्येक टप्प्यावर पूर्ण सहाय्य आणि समाधान सुनिश्चित करते.",
    md_quote: "तुमचा दावा आमच्यासाठी फक्त एक फाइल नाही — ही आमची जबाबदारी आहे.",
    sales_title: "विक्री टीम",
    sales_desc1: "यशोदा टोटल सॉल्यूशनमध्ये, आमची विक्री टीम प्रत्येक ग्राहकासाठी विश्वास आणि सहाय्याचा पहिला स्तंभ आहे. अनेक वर्षांच्या प्रत्यक्ष उद्योग अनुभवासह, आमचे समर्पित व्यावसायिक ग्राहकांना प्रामाणिकपणा, स्पष्टता आणि आत्मविश्वासाने मार्गदर्शन करण्यासाठी अथक प्रयत्न करतात.",
    sales_desc2: "आम्ही समजतो की तुमच्या कष्टाने कमावलेले पैसे तुमच्या स्वप्नांचे, सुरक्षिततेचे आणि भविष्याचे प्रतिनिधित्व करतात. म्हणूनच आमची टीम प्रत्येक टप्प्यावर सच्चा सल्ला, पारदर्शक संवाद आणि संपूर्ण सहाय्य प्रदान करण्यासाठी वचनबद्ध आहे.",
    sales_motto: "तुमचा विश्वास आम्हाला प्रेरित करतो. तुमचे यश आमची उपलब्धी आहे.",
    legal_title: "कायदेशीर टीम",
    legal_desc1: "यशोदा टोटल सॉल्यूशनमध्ये, आमच्याकडे विमा वाद निराकरण व्यवस्थापनात तज्ञ असलेली एक अत्यंत अनुभवी आणि समर्पित कायदेशीर टीम आहे. आमच्या तज्ञांनी विमा चुकीची विक्री, दावा निपटारा वाद आणि तृतीय-पक्ष दावा निपटारा यासारख्या जटिल प्रकरणे यशस्वीरित्या हाताळली आहेत.",
    legal_desc2: "सखोल उद्योग ज्ञान आणि रणनीतिक कायदेशीर कौशल्यासह, आम्ही आमच्या ग्राहकांच्या अधिकारांसाठी ठामपणे उभे राहतो आणि त्यांना योग्य न्याय आणि नुकसानभरपाई मिळेल याची खात्री करतो. आमचा अनोखा आणि परिणाम-केंद्रित दृष्टिकोन तुम्हाला तुमचे कष्टाने कमावलेले पैसे परत मिळवण्यास सक्षम करतो — अगदी सर्वात मोठ्या आणि सर्वात शक्तिशाली विमा कंपन्यांकडूनही.",
    legal_motto: "तुमची लढाई आमची जबाबदारी आहे. तुमचा न्याय आमचे ध्येय आहे.",
    cta_title: "मदत घेण्यास तयार आहात?",
    cta_desc: "आजच आमच्याशी संपर्क साधा आणि आम्हाला तुमच्या विमा आणि कायदेशीर समस्या सोडवू द्या.",
    cta_btn: "संपर्क करा",
    view_profile: "प्रोफाइल पहा",
    close: "बंद करा",
  }
};

const featureIcons = [Users, Shield, TrendingUp, Clock, Lock, Target, FileCheck, HeartHandshake];

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
      descriptions: [txt.sales_desc1, txt.sales_desc2],
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

  return (
    <div className="min-h-screen bg-[#F5F7F9]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] text-white py-20 md:py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="px-4 py-2 bg-[#F39C12] text-white rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg">
              {txt.title.split(' ').slice(0, 2).join(' ')}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-4" data-testid="about-hero-title">{txt.title}</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">{txt.hero_subtitle}</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }} />
      </section>

      {/* Main About Section */}
      <section className="relative -mt-16 z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-6">{txt.title}</h2>
            <div className="space-y-4 text-lg text-[#52606D] leading-relaxed">
              <p>{txt.desc1}</p>
              <p>{txt.desc2}</p>
              <p>{txt.desc3}</p>
              <p>{txt.desc4}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4" data-testid="about-whatwedo-title">{txt.whatwedo_title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {txt.whatwedo_items.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-start space-x-3 bg-[#F5F7F9] p-4 rounded-xl">
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
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4">{txt.features_title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {txt.features.map((title, index) => {
              const Icon = featureIcons[index];
              return (
                <motion.div key={index} {...fadeUp} transition={{ delay: index * 0.1 }} whileHover={{ y: -8 }} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all">
                  <Icon className="h-10 w-10 text-[#0F7A4A] mb-4" />
                  <h3 className="text-base font-semibold text-[#1F2933]">{title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4">{txt.approach_title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {txt.approach_items.map((item, index) => (
              <motion.div key={index} {...fadeUp} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-[#0F7A4A] to-[#159F61] text-white p-6 rounded-2xl shadow-lg">
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
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4" data-testid="about-team-title">{txt.team_title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const Icon = member.icon;
              return (
                <motion.div
                  key={member.key}
                  {...fadeUp}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden group"
                  data-testid={`team-card-${member.key}`}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name || member.title}
                      data-testid={`${member.key}-profile-image`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Icon className="h-6 w-6" style={{ color: member.color }} />
                      <h3 className="text-xl font-bold text-[#1F2933]">{member.title}</h3>
                    </div>
                    {member.name && (
                      <p className="text-base font-semibold mb-4" style={{ color: member.color }}>{member.name}</p>
                    )}
                    {!member.name && <div className="mb-4" />}
                    <button
                      onClick={() => setActiveProfile(member)}
                      data-testid={`view-profile-${member.key}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                      style={{ backgroundColor: member.color }}
                    >
                      <Eye className="h-4 w-4" />
                      {txt.view_profile}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Profile Popup Modal */}
      <AnimatePresence>
        {activeProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveProfile(null)}
            data-testid="profile-modal-overlay"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              data-testid="profile-modal"
            >
              <div className="relative">
                <div className="h-48 md:h-56 overflow-hidden rounded-t-3xl">
                  <img
                    src={activeProfile.image}
                    alt={activeProfile.name || activeProfile.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={() => setActiveProfile(null)}
                  data-testid="profile-modal-close"
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                >
                  <X className="h-5 w-5 text-[#1F2933]" />
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center space-x-3 mb-2">
                  {React.createElement(activeProfile.icon, { className: 'h-7 w-7', style: { color: activeProfile.color } })}
                  <h3 className="text-2xl font-bold text-[#1F2933]">{activeProfile.title}</h3>
                </div>
                {activeProfile.name && (
                  <p className="text-lg font-semibold mb-5" style={{ color: activeProfile.color }}>{activeProfile.name}</p>
                )}
                {!activeProfile.name && <div className="mb-5" />}

                {activeProfile.descriptions.map((desc, i) => (
                  <p key={i} className="text-base text-[#52606D] leading-relaxed mb-4">{desc}</p>
                ))}

                {activeProfile.highlightType === 'quote' ? (
                  <blockquote className="border-l-4 border-[#F39C12] pl-4 italic text-lg text-[#1F2933] font-medium mt-4">
                    "{activeProfile.highlight}"
                  </blockquote>
                ) : (
                  <p className="text-base font-semibold mt-4" style={{ color: activeProfile.color }}>
                    {activeProfile.highlight}
                  </p>
                )}

                <button
                  onClick={() => setActiveProfile(null)}
                  data-testid="profile-modal-close-btn"
                  className="mt-8 w-full py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: activeProfile.color }}
                >
                  {txt.close}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <motion.section {...fadeUp} className="relative py-20 md:py-32 bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">{txt.cta_title}</h2>
            <p className="text-lg md:text-xl text-white/90">{txt.cta_desc}</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="inline-flex items-center justify-center bg-[#F39C12] hover:bg-[#d68910] text-white px-12 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(243,156,18,0.5)]" data-testid="about-cta-contact-btn">
                {txt.cta_btn}
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
