import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const translations = {
  en: {
    // Navbar
    nav_home: 'Home',
    nav_about: 'About Us',
    nav_services: 'Services',
    nav_gallery: 'Gallery',
    nav_contact: 'Contact Us',
    nav_reviews: 'Reviews',
    
    // Hero Section
    hero_headline: 'Need Help with Insurance Claim or Legal Problem?',
    hero_subtext: 'Yashoda Total Solution helps common people solve insurance claims, disputes, and legal problems. We provide step-by-step guidance in simple language.',
    hero_btn_contact: 'Contact Us',
    hero_btn_help: 'Get Help Now',
    
    // About Section
    about_title: 'Who We Are',
    about_desc: 'Yashoda Total Solution is here to help you with insurance claims, insurance disputes, and all documentation support. We understand your problems and provide honest guidance.',
    about_card1_title: 'Expert Team',
    about_card1_desc: 'Our experienced team helps you understand complex insurance and legal processes.',
    about_card2_title: 'Simple Process',
    about_card2_desc: 'We explain everything in simple language that everyone can understand.',
    about_card3_title: 'Quick Support',
    about_card3_desc: 'We respond fast and solve your problems step by step.',
    
    // Problems Section
    problems_title: 'Common Problems We Solve',
    problems_subtitle: 'Are you facing any of these problems?',
    problem1_title: 'Insurance Claim Rejected',
    problem1_desc: 'Your insurance company rejected your claim? We help you get your money.',
    problem2_title: 'Agent Mis-Selling',
    problem2_desc: 'Insurance agent sold wrong policy? We help you file complaint and get compensation.',
    problem3_title: 'ATM Card Insurance Issue',
    problem3_desc: 'Problem with insurance linked to your ATM card or bank account? We solve it.',
    problem4_title: 'Government Scheme Claims',
    problem4_desc: 'Not getting benefit from government insurance schemes? We help you claim properly.',
    
    // Services Section
    services_title: 'Our Services',
    services_subtitle: 'We provide complete help for all your insurance and legal needs',
    service1_title: 'Insurance Claim Help',
    service1_desc: 'Complete support to file and get your insurance claim approved.',
    service2_title: 'Dispute Resolution',
    service2_desc: 'Help to solve disputes with insurance companies and banks.',
    service3_title: 'Banking Insurance',
    service3_desc: 'Solve problems with insurance linked to your bank accounts.',
    service4_title: 'Government Schemes',
    service4_desc: 'Help to claim benefits from government insurance schemes.',
    service5_title: 'Legal Notice Service',
    service5_desc: 'Send legal notice to insurance company or bank when needed.',
    service6_title: 'Documentation Support',
    service6_desc: 'Help with all paperwork and document preparation.',
    
    // Why Choose Us Section
    why_title: 'Why Choose Yashoda Total Solution?',
    why_subtitle: 'We are different because we truly care about your problems',
    why1_title: 'Honest Guidance',
    why1_desc: 'We give truthful advice. We never hide anything from you.',
    why2_title: 'Professional Help',
    why2_desc: 'Our team has years of experience in insurance and legal matters.',
    why3_title: 'Confidential Handling',
    why3_desc: 'Your information is completely safe with us. We keep everything private.',
    why4_title: 'Step-by-Step Support',
    why4_desc: 'We guide you through every step until your problem is solved.',
    
    // Testimonials Section
    testimonials_title: 'What Our Customers Say',
    testimonials_subtitle: 'Real people, real results',
    testimonial1_text: 'My insurance claim was rejected 3 times. Yashoda Total Solution helped me and I got my full money. Very happy with their service.',
    testimonial1_name: 'Ramesh Kumar',
    testimonial1_location: 'Satara, Maharashtra',
    testimonial2_text: 'Bank insurance problem was solved in just 2 weeks. They explained everything in simple Marathi language. Excellent service.',
    testimonial2_name: 'Sunita Devi',
    testimonial2_location: 'Ahmednagar',
    testimonial3_text: 'Government scheme claim was stuck for 6 months. These people solved it quickly. Thank you very much.',
    testimonial3_name: 'Prakash Patil',
    testimonial3_location: 'Solapur',
    
    // Final CTA Section
    cta_title: 'Need Help with Your Problem?',
    cta_subtitle: 'Contact us today. We will solve your insurance and legal problems.',
    cta_btn: 'Contact Us Now',
    
    // Footer
    footer_desc: 'Yashoda Total Solution provides professional assistance for insurance claims, disputes, and legal services. We serve people across Maharashtra and India.',
    footer_quick_links: 'Quick Links',
    footer_contact: 'Contact Us',
    footer_phone: 'Phone',
    footer_email: 'Email',
    footer_address: 'Address',
    footer_rights: '© 2025 Yashoda Total Solution. All rights reserved.',
    
    // About Us Page
    about_page_title: 'About Us',
    about_page_subtitle: 'Know more about Yashoda Total Solution',
    about_who_title: 'Who We Are',
    about_who_desc: 'Yashoda Total Solution is a company that helps people solve their insurance and legal related problems. We understand that insurance claims and legal matters can be confusing. That is why we are here to make everything simple for you.',
    about_mission_title: 'Our Mission',
    about_mission_desc: 'To help customers solve their insurance and legal issues in a simple and smooth way. We want to make sure that every person gets the help they need without any difficulty.',
    about_vision_title: 'Our Vision',
    about_vision_desc: 'To become a trusted support partner for people facing insurance claim problems. We want to be the first choice when someone needs help with insurance or legal matters.',
    about_approach_title: 'Our Approach',
    about_approach_subtitle: 'How We Help You',
    about_approach_step1: 'We Listen to Customer Problems',
    about_approach_step1_desc: 'First, we carefully listen to your problem and understand what help you need.',
    about_approach_step2: 'Check Documents',
    about_approach_step2_desc: 'We review all your papers and documents to understand your case properly.',
    about_approach_step3: 'Guide Customers Step by Step',
    about_approach_step3_desc: 'We guide you through every step until your problem is completely solved.',
    about_commitment_title: 'Customer Commitment',
    about_commitment_subtitle: 'What We Promise to You',
    about_commitment1_title: 'Professional Service',
    about_commitment1_desc: 'Our team is experienced and trained. We provide expert service to all our customers.',
    about_commitment2_title: 'Confidential Handling',
    about_commitment2_desc: 'Your personal information is completely safe with us. We keep everything private and secure.',
    about_commitment3_title: 'Reliable Guidance',
    about_commitment3_desc: 'You can trust our advice. We always give honest and correct guidance to solve your problems.',
    about_cta_title: 'Ready to Get Help?',
    about_cta_desc: 'Contact us today and let us solve your insurance and legal problems.',
  },
  hi: {
    // Navbar
    nav_home: 'होम',
    nav_about: 'हमारे बारे में',
    nav_services: 'सेवाएं',
    nav_gallery: 'गैलरी',
    nav_contact: 'संपर्क करें',
    nav_reviews: 'समीक्षाएं',
    
    // Hero Section
    hero_headline: 'बीमा क्लेम या कानूनी समस्या में मदद चाहिए?',
    hero_subtext: 'यशोदा टोटल सॉल्यूशन आम लोगों को बीमा क्लेम, विवाद और कानूनी समस्याओं को सुलझाने में मदद करता है। हम सरल भाषा में स्टेप बाय स्टेप गाइडेंस देते हैं।',
    hero_btn_contact: 'संपर्क करें',
    hero_btn_help: 'मदद लें अभी',
    
    // About Section
    about_title: 'हम कौन हैं',
    about_desc: 'यशोदा टोटल सॉल्यूशन आपकी बीमा क्लेम, बीमा विवाद और सभी डॉक्यूमेंट की मदद के लिए है। हम आपकी समस्याओं को समझते हैं और ईमानदार गाइडेंस देते हैं।',
    about_card1_title: 'अनुभवी टीम',
    about_card1_desc: 'हमारी अनुभवी टीम आपको जटिल बीमा और कानूनी प्रक्रिया समझाने में मदद करती है।',
    about_card2_title: 'आसान प्रक्रिया',
    about_card2_desc: 'हम सब कुछ सरल भाषा में समझाते हैं जो हर कोई समझ सके।',
    about_card3_title: 'तेज़ सहायता',
    about_card3_desc: 'हम जल्दी जवाब देते हैं और स्टेप बाय स्टेप आपकी समस्या हल करते हैं।',
    
    // Problems Section
    problems_title: 'आम समस्याएं जो हम सुलझाते हैं',
    problems_subtitle: 'क्या आपको इनमें से कोई समस्या है?',
    problem1_title: 'बीमा क्लेम रिजेक्ट',
    problem1_desc: 'आपकी बीमा कंपनी ने क्लेम रिजेक्ट कर दिया? हम आपको पैसे दिलाने में मदद करेंगे।',
    problem2_title: 'एजेंट ने गलत पॉलिसी बेची',
    problem2_desc: 'बीमा एजेंट ने गलत पॉलिसी बेच दी? हम शिकायत दर्ज करके मुआवजा दिलाने में मदद करते हैं।',
    problem3_title: 'ATM कार्ड बीमा समस्या',
    problem3_desc: 'ATM कार्ड या बैंक खाते से जुड़े बीमा में समस्या? हम इसे हल करते हैं।',
    problem4_title: 'सरकारी योजना क्लेम',
    problem4_desc: 'सरकारी बीमा योजना से लाभ नहीं मिल रहा? हम सही तरीके से क्लेम करने में मदद करते हैं।',
    
    // Services Section
    services_title: 'हमारी सेवाएं',
    services_subtitle: 'हम आपकी सभी बीमा और कानूनी जरूरतों के लिए पूरी मदद देते हैं',
    service1_title: 'बीमा क्लेम मदद',
    service1_desc: 'बीमा क्लेम फाइल करने और अप्रूव कराने में पूरी सहायता।',
    service2_title: 'विवाद समाधान',
    service2_desc: 'बीमा कंपनी और बैंक के साथ विवाद सुलझाने में मदद।',
    service3_title: 'बैंकिंग बीमा',
    service3_desc: 'आपके बैंक खातों से जुड़े बीमा की समस्याएं हल करें।',
    service4_title: 'सरकारी योजनाएं',
    service4_desc: 'सरकारी बीमा योजनाओं से लाभ लेने में मदद।',
    service5_title: 'कानूनी नोटिस सेवा',
    service5_desc: 'जरूरत पड़ने पर बीमा कंपनी या बैंक को कानूनी नोटिस भेजना।',
    service6_title: 'डॉक्यूमेंट सहायता',
    service6_desc: 'सभी कागजात और डॉक्यूमेंट तैयार करने में मदद।',
    
    // Why Choose Us Section
    why_title: 'यशोदा टोटल सॉल्यूशन क्यों चुनें?',
    why_subtitle: 'हम अलग हैं क्योंकि हम सच में आपकी समस्याओं की परवाह करते हैं',
    why1_title: 'ईमानदार सलाह',
    why1_desc: 'हम सच्ची सलाह देते हैं। हम आपसे कुछ भी नहीं छुपाते।',
    why2_title: 'पेशेवर मदद',
    why2_desc: 'हमारी टीम के पास बीमा और कानूनी मामलों का वर्षों का अनुभव है।',
    why3_title: 'गोपनीय प्रबंधन',
    why3_desc: 'आपकी जानकारी हमारे साथ पूरी तरह सुरक्षित है। हम सब कुछ प्राइवेट रखते हैं।',
    why4_title: 'स्टेप बाय स्टेप सहायता',
    why4_desc: 'हम हर स्टेप में आपका मार्गदर्शन करते हैं जब तक आपकी समस्या हल नहीं हो जाती।',
    
    // Testimonials Section
    testimonials_title: 'हमारे ग्राहक क्या कहते हैं',
    testimonials_subtitle: 'असली लोग, असली परिणाम',
    testimonial1_text: 'मेरा बीमा क्लेम 3 बार रिजेक्ट हुआ था। यशोदा टोटल सॉल्यूशन ने मदद की और मुझे पूरे पैसे मिल गए। उनकी सेवा से बहुत खुश हूं।',
    testimonial1_name: 'रमेश कुमार',
    testimonial1_location: 'सतारा, महाराष्ट्र',
    testimonial2_text: 'बैंक बीमा समस्या सिर्फ 2 हफ्ते में हल हो गई। उन्होंने सब कुछ सरल मराठी भाषा में समझाया। बेहतरीन सेवा।',
    testimonial2_name: 'सुनीता देवी',
    testimonial2_location: 'अहमदनगर',
    testimonial3_text: 'सरकारी योजना क्लेम 6 महीने से अटका था। इन लोगों ने जल्दी हल कर दिया। बहुत बहुत धन्यवाद।',
    testimonial3_name: 'प्रकाश पाटिल',
    testimonial3_location: 'सोलापुर',
    
    // Final CTA Section
    cta_title: 'अपनी समस्या में मदद चाहिए?',
    cta_subtitle: 'आज ही हमसे संपर्क करें। हम आपकी बीमा और कानूनी समस्याएं हल करेंगे।',
    cta_btn: 'अभी संपर्क करें',
    
    // Footer
    footer_desc: 'यशोदा टोटल सॉल्यूशन बीमा क्लेम, विवाद और कानूनी सेवाओं के लिए पेशेवर सहायता प्रदान करता है। हम महाराष्ट्र और भारत भर में लोगों की सेवा करते हैं।',
    footer_quick_links: 'त्वरित लिंक',
    footer_contact: 'संपर्क करें',
    footer_phone: 'फोन',
    footer_email: 'ईमेल',
    footer_address: 'पता',
    footer_rights: '© 2025 यशोदा टोटल सॉल्यूशन। सर्वाधिकार सुरक्षित।',
    
    // About Us Page
    about_page_title: 'हमारे बारे में',
    about_page_subtitle: 'यशोदा टोटल सॉल्यूशन के बारे में और जानें',
    about_who_title: 'हम कौन हैं',
    about_who_desc: 'यशोदा टोटल सॉल्यूशन एक कंपनी है जो लोगों को उनकी बीमा और कानूनी समस्याओं को हल करने में मदद करती है। हम समझते हैं कि बीमा क्लेम और कानूनी मामले भ्रमित करने वाले हो सकते हैं। इसीलिए हम यहां हैं आपके लिए सब कुछ सरल बनाने के लिए।',
    about_mission_title: 'हमारा मिशन',
    about_mission_desc: 'ग्राहकों को उनकी बीमा और कानूनी समस्याओं को सरल और आसान तरीके से हल करने में मदद करना। हम यह सुनिश्चित करना चाहते हैं कि हर व्यक्ति को बिना किसी कठिनाई के मदद मिले।',
    about_vision_title: 'हमारा विज़न',
    about_vision_desc: 'बीमा क्लेम समस्याओं का सामना कर रहे लोगों के लिए एक विश्वसनीय सहायता साझेदार बनना। हम पहली पसंद बनना चाहते हैं जब किसी को बीमा या कानूनी मामलों में मदद की जरूरत हो।',
    about_approach_title: 'हमारा तरीका',
    about_approach_subtitle: 'हम आपकी कैसे मदद करते हैं',
    about_approach_step1: 'हम ग्राहक की समस्याएं सुनते हैं',
    about_approach_step1_desc: 'सबसे पहले, हम ध्यान से आपकी समस्या सुनते हैं और समझते हैं कि आपको किस मदद की जरूरत है।',
    about_approach_step2: 'दस्तावेज़ जांचना',
    about_approach_step2_desc: 'हम आपके सभी कागजात और दस्तावेज़ों की समीक्षा करते हैं ताकि आपके मामले को ठीक से समझ सकें।',
    about_approach_step3: 'ग्राहकों को स्टेप बाय स्टेप गाइड करना',
    about_approach_step3_desc: 'हम हर कदम पर आपका मार्गदर्शन करते हैं जब तक आपकी समस्या पूरी तरह से हल नहीं हो जाती।',
    about_commitment_title: 'ग्राहक प्रतिबद्धता',
    about_commitment_subtitle: 'हम आपसे क्या वादा करते हैं',
    about_commitment1_title: 'पेशेवर सेवा',
    about_commitment1_desc: 'हमारी टीम अनुभवी और प्रशिक्षित है। हम अपने सभी ग्राहकों को विशेषज्ञ सेवा प्रदान करते हैं।',
    about_commitment2_title: 'गोपनीय प्रबंधन',
    about_commitment2_desc: 'आपकी व्यक्तिगत जानकारी हमारे साथ पूरी तरह से सुरक्षित है। हम सब कुछ निजी और सुरक्षित रखते हैं।',
    about_commitment3_title: 'विश्वसनीय मार्गदर्शन',
    about_commitment3_desc: 'आप हमारी सलाह पर भरोसा कर सकते हैं। हम हमेशा आपकी समस्याओं को हल करने के लिए ईमानदार और सही मार्गदर्शन देते हैं।',
    about_cta_title: 'मदद लेने के लिए तैयार हैं?',
    about_cta_desc: 'आज ही हमसे संपर्क करें और हमें अपनी बीमा और कानूनी समस्याओं को हल करने दें।',
  },
  mr: {
    // Navbar
    nav_home: 'होम',
    nav_about: 'आमच्याबद्दल',
    nav_services: 'सेवा',
    nav_gallery: 'गॅलरी',
    nav_contact: 'संपर्क',
    nav_reviews: 'प्रतिक्रिया',
    
    // Hero Section
    hero_headline: 'विमा क्लेम किंवा कायदेशीर समस्येत मदत हवी?',
    hero_subtext: 'यशोदा टोटल सॉल्यूशन सामान्य लोकांना विमा क्लेम, वाद आणि कायदेशीर समस्या सोडवण्यात मदत करते. आम्ही सोप्या भाषेत स्टेप बाय स्टेप मार्गदर्शन देतो.',
    hero_btn_contact: 'संपर्क करा',
    hero_btn_help: 'आता मदत घ्या',
    
    // About Section
    about_title: 'आम्ही कोण आहोत',
    about_desc: 'यशोदा टोटल सॉल्यूशन तुमच्या विमा क्लेम, विमा वाद आणि सर्व कागदपत्रांच्या मदतीसाठी येथे आहे. आम्ही तुमच्या समस्या समजतो आणि प्रामाणिक मार्गदर्शन देतो.',
    about_card1_title: 'अनुभवी टीम',
    about_card1_desc: 'आमची अनुभवी टीम तुम्हाला जटिल विमा आणि कायदेशीर प्रक्रिया समजून घेण्यास मदत करते.',
    about_card2_title: 'सोपी प्रक्रिया',
    about_card2_desc: 'आम्ही सर्व काही सोप्या भाषेत समजावतो जे प्रत्येकजण समजू शकतो.',
    about_card3_title: 'जलद सहाय्य',
    about_card3_desc: 'आम्ही लवकर प्रतिसाद देतो आणि तुमच्या समस्या स्टेप बाय स्टेप सोडवतो.',
    
    // Problems Section
    problems_title: 'आम्ही सोडवत असलेल्या सामान्य समस्या',
    problems_subtitle: 'तुम्हाला यापैकी कोणतीही समस्या आहे का?',
    problem1_title: 'विमा क्लेम नाकारला',
    problem1_desc: 'तुमच्या विमा कंपनीने क्लेम नाकारला? आम्ही तुम्हाला पैसे मिळवून देण्यास मदत करतो.',
    problem2_title: 'एजंटने चुकीची पॉलिसी विकली',
    problem2_desc: 'विमा एजंटने चुकीची पॉलिसी विकली? आम्ही तक्रार दाखल करून नुकसान भरपाई मिळवण्यास मदत करतो.',
    problem3_title: 'ATM कार्ड विमा समस्या',
    problem3_desc: 'तुमच्या ATM कार्ड किंवा बँक खात्याशी संबंधित विमा समस्या? आम्ही ते सोडवतो.',
    problem4_title: 'सरकारी योजना क्लेम',
    problem4_desc: 'सरकारी विमा योजनेचा लाभ मिळत नाही? आम्ही योग्य रीतीने क्लेम करण्यास मदत करतो.',
    
    // Services Section
    services_title: 'आमच्या सेवा',
    services_subtitle: 'आम्ही तुमच्या सर्व विमा आणि कायदेशीर गरजांसाठी संपूर्ण मदत देतो',
    service1_title: 'विमा क्लेम मदत',
    service1_desc: 'तुमचा विमा क्लेम फाइल करण्यासाठी आणि मंजूर करण्यासाठी संपूर्ण सहाय्य.',
    service2_title: 'वाद निराकरण',
    service2_desc: 'विमा कंपन्या आणि बँकांसोबत वाद सोडवण्यात मदत.',
    service3_title: 'बँकिंग विमा',
    service3_desc: 'तुमच्या बँक खात्यांशी संबंधित विमा समस्या सोडवा.',
    service4_title: 'सरकारी योजना',
    service4_desc: 'सरकारी विमा योजनांचा लाभ घेण्यास मदत.',
    service5_title: 'कायदेशीर नोटीस सेवा',
    service5_desc: 'गरज पडल्यास विमा कंपनी किंवा बँकेला कायदेशीर नोटीस पाठवणे.',
    service6_title: 'कागदपत्र सहाय्य',
    service6_desc: 'सर्व कागदपत्रे आणि दस्तऐवज तयार करण्यात मदत.',
    
    // Why Choose Us Section
    why_title: 'यशोदा टोटल सॉल्यूशन का निवडावे?',
    why_subtitle: 'आम्ही वेगळे आहोत कारण आम्ही खरोखरच तुमच्या समस्यांची काळजी घेतो',
    why1_title: 'प्रामाणिक मार्गदर्शन',
    why1_desc: 'आम्ही खरा सल्ला देतो. आम्ही तुमच्यापासून काहीही लपवत नाही.',
    why2_title: 'व्यावसायिक मदत',
    why2_desc: 'आमच्या टीमला विमा आणि कायदेशीर बाबींचा अनेक वर्षांचा अनुभव आहे.',
    why3_title: 'गोपनीय हाताळणी',
    why3_desc: 'तुमची माहिती आमच्याकडे पूर्णपणे सुरक्षित आहे. आम्ही सर्व काही खाजगी ठेवतो.',
    why4_title: 'स्टेप बाय स्टेप सहाय्य',
    why4_desc: 'तुमची समस्या सुटेपर्यंत आम्ही प्रत्येक स्टेपमध्ये तुम्हाला मार्गदर्शन करतो.',
    
    // Testimonials Section
    testimonials_title: 'आमचे ग्राहक काय म्हणतात',
    testimonials_subtitle: 'खरे लोक, खरे परिणाम',
    testimonial1_text: 'माझा विमा क्लेम 3 वेळा नाकारला गेला होता. यशोदा टोटल सॉल्यूशनने मदत केली आणि मला माझे पूर्ण पैसे मिळाले. त्यांच्या सेवेने खूप समाधान.',
    testimonial1_name: 'रमेश कुमार',
    testimonial1_location: 'सातारा, महाराष्ट्र',
    testimonial2_text: 'बँक विमा समस्या फक्त 2 आठवड्यांत सुटली. त्यांनी सर्व काही सोप्या मराठीत समजावले. उत्कृष्ट सेवा.',
    testimonial2_name: 'सुनीता देवी',
    testimonial2_location: 'अहमदनगर',
    testimonial3_text: 'सरकारी योजना क्लेम 6 महिने अडकला होता. या लोकांनी लवकर सोडवले. खूप खूप धन्यवाद.',
    testimonial3_name: 'प्रकाश पाटील',
    testimonial3_location: 'सोलापूर',
    
    // Final CTA Section
    cta_title: 'तुमच्या समस्येत मदत हवी?',
    cta_subtitle: 'आजच आमच्याशी संपर्क साधा. आम्ही तुमच्या विमा आणि कायदेशीर समस्या सोडवू.',
    cta_btn: 'आता संपर्क करा',
    
    // Footer
    footer_desc: 'यशोदा टोटल सॉल्यूशन विमा क्लेम, वाद आणि कायदेशीर सेवांसाठी व्यावसायिक सहाय्य प्रदान करते. आम्ही महाराष्ट्र आणि संपूर्ण भारतातील लोकांची सेवा करतो.',
    footer_quick_links: 'द्रुत दुवे',
    footer_contact: 'संपर्क करा',
    footer_phone: 'फोन',
    footer_email: 'ईमेल',
    footer_address: 'पत्ता',
    footer_rights: '© 2025 यशोदा टोटल सॉल्यूशन. सर्व हक्क राखीव.',
    
    // About Us Page
    about_page_title: 'आमच्याबद्दल',
    about_page_subtitle: 'यशोदा टोटल सॉल्यूशनबद्दल अधिक जाणून घ्या',
    about_who_title: 'आम्ही कोण आहोत',
    about_who_desc: 'यशोदा टोटल सॉल्यूशन ही एक कंपनी आहे जी लोकांना त्यांच्या विमा आणि कायदेशीर समस्या सोडवण्यात मदत करते. आम्हाला माहित आहे की विमा क्लेम आणि कायदेशीर प्रकरणे गोंधळात टाकणारी असू शकतात. म्हणूनच आम्ही तुमच्यासाठी सर्व काही सोपे करण्यासाठी येथे आहोत.',
    about_mission_title: 'आमचे ध्येय',
    about_mission_desc: 'ग्राहकांना त्यांच्या विमा आणि कायदेशीर समस्या सोप्या आणि सुलभ मार्गाने सोडवण्यात मदत करणे. आम्हाला हे सुनिश्चित करायचे आहे की प्रत्येक व्यक्तीला कोणत्याही अडचणीशिवाय मदत मिळेल.',
    about_vision_title: 'आमची दृष्टी',
    about_vision_desc: 'विमा क्लेम समस्यांना तोंड देणाऱ्या लोकांसाठी विश्वासार्ह सहाय्य भागीदार बनणे. जेव्हा कोणाला विमा किंवा कायदेशीर प्रकरणांमध्ये मदतीची गरज असेल तेव्हा आम्ही पहिली निवड व्हावी अशी आमची इच्छा आहे।',
    about_approach_title: 'आमचा दृष्टिकोन',
    about_approach_subtitle: 'आम्ही तुम्हाला कशी मदत करतो',
    about_approach_step1: 'आम्ही ग्राहकांच्या समस्या ऐकतो',
    about_approach_step1_desc: 'सर्वप्रथम, आम्ही तुमची समस्या काळजीपूर्वक ऐकतो आणि तुम्हाला कोणत्या मदतीची आवश्यकता आहे ते समजून घेतो.',
    about_approach_step2: 'कागदपत्रे तपासणे',
    about_approach_step2_desc: 'आम्ही तुमच्या सर्व कागदपत्रांचे आणि दस्तऐवजांचे पुनरावलोकन करतो जेणेकरून तुमची केस योग्यरित्या समजू शकेल.',
    about_approach_step3: 'ग्राहकांना स्टेप बाय स्टेप मार्गदर्शन',
    about_approach_step3_desc: 'तुमची समस्या पूर्णपणे सुटेपर्यंत आम्ही प्रत्येक पायरीवर तुम्हाला मार्गदर्शन करतो.',
    about_commitment_title: 'ग्राहक वचनबद्धता',
    about_commitment_subtitle: 'आम्ही तुम्हाला काय वचन देतो',
    about_commitment1_title: 'व्यावसायिक सेवा',
    about_commitment1_desc: 'आमची टीम अनुभवी आणि प्रशिक्षित आहे. आम्ही आमच्या सर्व ग्राहकांना तज्ञ सेवा प्रदान करतो.',
    about_commitment2_title: 'गोपनीय हाताळणी',
    about_commitment2_desc: 'तुमची वैयक्तिक माहिती आमच्याकडे पूर्णपणे सुरक्षित आहे. आम्ही सर्व काही खाजगी आणि सुरक्षित ठेवतो.',
    about_commitment3_title: 'विश्वसनीय मार्गदर्शन',
    about_commitment3_desc: 'तुम्ही आमच्या सल्ल्यावर विश्वास ठेवू शकता. आम्ही तुमच्या समस्या सोडवण्यासाठी नेहमी प्रामाणिक आणि योग्य मार्गदर्शन देतो.',
    about_cta_title: 'मदत घेण्यास तयार आहात?',
    about_cta_desc: 'आजच आमच्याशी संपर्क साधा आणि आम्हाला तुमच्या विमा आणि कायदेशीर समस्या सोडवू द्या.',
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};