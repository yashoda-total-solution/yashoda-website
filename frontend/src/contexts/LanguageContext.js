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
    nav_faqs: 'FAQs',
    nav_partner: 'Partner with us',
    nav_login: 'Login',

    // Service Names (Mega Menu)
    service_insurance_dispute: 'Insurance Dispute Resolution',
    service_mis_selling: 'Mis-selling of Insurance Policy',
    service_claim_rejection: 'Insurance Claim Rejection',
    service_claim_delay: 'Delay in Claim Process',
    service_claim_short_settled: 'Partial Claim Settlement',
    service_health_reimbursement: 'Health Claim Reimbursement',
    service_pmsby: 'Pradhan Mantri Suraksha Bima Yojana (PMSBY)',
    service_pmjjby: 'Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)',
    service_state_cm_scheme: 'State Chief Minister Insurance Scheme',
    service_banking_atm: 'Banking & ATM Card Insurance Claim',
    service_pf_accidental: 'PF Accidental Insurance Claim',
    service_legal_consultation: 'Legal Consultation',
    service_legal_drafting: 'Legal Drafting & Verification Support',
    service_consumer_cases: 'Consumer Protection Support',
    service_civil_cases: 'Civil Dispute Support',
    service_cheque_bounce: 'Cheque Bounce Cases',

    //Home Page --------------------------------------------------------------------------------------------------------------

    // Review Section
    review_more_button: 'See More Reviews',
    review_previous_button: 'Previous',
    review_pagination_text: 'Showing {{start}}–{{end}} of {{total}} customer reviews',

    // Hero Section
    hero_headline: 'Helping Policyholders take control of their insurance and resolve issues quickly.',
    hero_subtext: 'Yashoda Total Solutions (Service Provider) assists individuals with insurance claims, disputes, and legal matters; to this end, it provides clear, step-by-step guidance in simple language, enabling clients to easily understand the entire process.',
    hero_btn_contact: 'Contact Us',
    hero_btn_help: 'Get Help Now',
    hero_small1: '100% Confidential',
    hero_small2: 'Trusted Service',
    hero_small3: 'Expert Team',
    hero_stats1: 'Happy Clients',
    hero_stats2: 'Success Rate',
    hero_stats3: 'Support',
    hero_stats4: 'Secure',

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
    why_subtitle: 'We deliver professional, transparent, and customer-focused service excellence',
    why1_title: 'Experienced & Professional Team',
    why1_desc: 'Qualified professionals with industry knowledge and operational expertise.',
    why2_title: 'Quick & Transparent Processing',
    why2_desc: 'Systematic workflows supported by clear communication and monitoring.',
    why3_title: 'Customer-First Approach',
    why3_desc: 'Every case handled with attention, empathy, and ethical responsibility',
    why4_title: 'Technology-Driven Monitoring',
    why4_desc: 'Advanced tracking systems ensure accountability and regular updates.',
    why5_title: 'Trusted Service Partner',
    why5_desc: 'Focused on long-term relationships built on trust, reliability, and service excellence.',

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

    //------------------------------------------------------------------------------------------Home Page Ends



    //Footer ---------------- ---------------------- ------------------- --------------------

    footer_desc: 'Yashoda Total Solution is a trusted legal and insurance advisory firm helping individuals and businesses resolve disputes effectively.',

    footer_quick_links: 'Quick Links',

    footer_services: 'Services',
    footer_services_insurance_heading: 'Insurance Dispute Resolution',

    footer_service_misselling: '• Mis-selling',
    footer_service_claimrejection: '• Claim Rejection',
    footer_service_claimdelay: '• Delay in Claim',
    footer_service_partialclaim: '• Partial Claim',
    footer_service_healthclaim: '• Health Claim',
    footer_service_pmsby: '• PMSBY',
    footer_service_pmjjby: '• PMJJBY',
    footer_service_statescheme: '• State Scheme',
    footer_service_atminsurance: '• ATM Insurance',
    footer_service_pfaccident: '• PF Accident',

    footer_service_legalconsultation: 'Legal Consultation',
    footer_service_legaldrafting: 'Legal Drafting',
    footer_service_consumerprotection: 'Consumer Protection',
    footer_service_civildispute: 'Civil Dispute',
    footer_service_chequebounce: 'Cheque Bounce',

    footer_contact: 'Contact Us',
    footer_phone: 'Phone',
    footer_email: 'Email',
    footer_address: 'Address',
    footer_address_text: '2B 70, Yashoda Total Solution, Phoenix Paragon Plaza, Lal Bahadur Shastri Marg, Kamani, Kurla (West), Mumbai, Maharashtra 400070',

    footer_rights: '© 2026 Yashoda Total Solution. All rights reserved.',
    footer_designed_by: 'Design & Developed by',
    footer_designed_by_name: 'WingzSphere Tech',

    // ----------------------------------------------------------- Footer Page Ends

    //About Us Page -------------------------------------------------------------------

    title: "About Yashoda Total Solution",
    hero_subtitle: "Professional Insurance Claim Assistance & Legal Support Services",

    about_title: "About Us",
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

    legal_title1: "Legal Team",
    legal_desc1: "At Yashoda Total Solution, we have a highly experienced and dedicated legal team specializing in Insurance Dispute Resolution Management. Our experts have successfully handled complex cases including insurance mis-selling, claim settlement disputes, and third-party claim settlements.",
    legal_desc2: "With deep industry knowledge and strategic legal expertise, we stand firmly for our clients' rights and ensure they receive the justice and compensation they deserve. Our unique and result-oriented approach empowers you to recover your hard-earned money — even from the biggest and most powerful insurance companies.",
    legal_motto: "Your fight is our responsibility. Your justice is our mission.",

    view_profile: "View Profile",
    close: "Close",

    //-------------------------------------------------------------- About Us Page Ends

    // Services Page --------------------------------------------------------------------------------

    //Mis-Selling Page ---------------- ---------------------- ------------------- --------------------
    mis_selling_title_backlink1: 'Home',
    mis_selling_title_backlink2: 'Mis-selling of Insurance Policy',

    mis_selling_title: 'Mis-selling of Insurance Policy',
    mis_selling_description: 'Were you sold an insurance policy that doesn\'t match what was promised? Insurance mis-selling is when agents or banks mislead customers about policy features, benefits, or terms. We help you get justice and compensation.',

    mis_selling_what_is: 'What is Insurance Mis-Selling?',
    mis_selling_what_is_description1: 'Insurance mis-selling occurs when insurance agents, banks, or financial institutions sell insurance policies by providing',
    mis_selling_what_is_description2: 'false information, hiding important terms, or making misleading promises',
    mis_selling_what_is_description3: 'to customers.',

    mis_selling_examples: 'Common examples include:',
    mis_selling_example_1: '✗ Selling ULIP (Unit Linked Insurance Plan) as a Fixed Deposit',
    mis_selling_example_2: '✗ Hiding policy charges, surrender charges, or lock-in periods',
    mis_selling_example_3: '✗ Promising guaranteed high returns when returns are market-linked',
    mis_selling_example_4: '✗ Not explaining policy exclusions or claim rejection conditions',
    mis_selling_example_5: '✗ Selling policies without proper customer consent or signature',
    mis_selling_example_6: '✗ Selling insurance products while opening bank accounts without disclosure',

    mis_selling_what_happens: 'What Happens in Mis-Selling Cases?',
    mis_selling_what_happens_description: 'Understanding the impact of insurance mis-selling on your finances',
    mis_selling_what_happens_1_title: 'Financial Loss',
    mis_selling_what_happens_1_description: 'You may lose money due to surrender charges, low returns, or policies that don\'t meet your needs.',
    mis_selling_what_happens_2_title: 'Wrong Coverage',
    mis_selling_what_happens_2_description: 'The policy may not provide the insurance coverage or benefits you were promised.',
    mis_selling_what_happens_3_title: 'Trust Broken',
    mis_selling_what_happens_3_description: 'Your trust in the insurance agent or bank is broken, causing emotional distress.',

    mis_selling_why_choose_us: 'Why Choose Yashoda Total Solution?',
    mis_selling_why_choose_us_description: 'Expert guidance to resolve mis-selling cases effectively',
    mis_selling_why_choose_us_1_title: 'Expert Team',
    mis_selling_why_choose_us_1_description: 'We have years of experience in handling insurance mis-selling complaints.',
    mis_selling_why_choose_us_2_title: 'Complete Documentation',
    mis_selling_why_choose_us_2_description: 'We prepare all necessary documents, notices, and complaint letters.',
    mis_selling_why_choose_us_3_title: 'Legal Support',
    mis_selling_why_choose_us_3_description: 'If needed, we provide legal notice drafting and ombudsman complaint filing.',
    mis_selling_why_choose_us_4_title: 'High Success Rate',
    mis_selling_why_choose_us_4_description: 'We have helped hundreds of customers get compensation and policy cancellation.',

    mis_selling_process_flow: 'Our 6-Step Process to Resolve Mis-Selling',
    mis_selling_process_flow_description: 'Simple, transparent, and effective approach',
    mis_selling_process_flow1_title: 'Consultation & Case Analysis',
    mis_selling_process_flow1_description: 'We review your policy documents, sale records, and understand what was promised vs. what you received.',
    mis_selling_process_flow2_title: 'Evidence Collection',
    mis_selling_process_flow2_description: 'We gather all proofs - policy documents, agent promises, email/SMS records, bank statements showing deductions.',
    mis_selling_process_flow3_title: 'Complaint Drafting',
    mis_selling_process_flow3_description: 'We prepare a detailed complaint letter highlighting the mis-selling and your financial loss.',
    mis_selling_process_flow4_title: 'Filing Complaint',
    mis_selling_process_flow4_description: 'We file the complaint with the insurance company\'s grievance cell and escalate if needed.',
    mis_selling_process_flow5_title: 'Ombudsman/IRDAI Escalation',
    mis_selling_process_flow5_description: 'If the company doesn\'t respond, we escalate to the Insurance Ombudsman or IRDAI consumer cell.',
    mis_selling_process_flow6_title: 'Resolution & Compensation',
    mis_selling_process_flow6_description: 'We follow up until you get policy cancellation, premium refund, or compensation for losses.',

    mis_selling_example_scenarios: 'Real-Life Mis-Selling Examples',
    mis_selling_example_scenarios_subtitle: 'These are common scenarios we help resolve',
    mis_selling_example_scenarios_case1_title: 'Case 1: ULIP Sold as Fixed Deposit',
    mis_selling_example_scenarios_case1_problem: 'Ramesh was told by his bank that he\'s opening a 5-year Fixed Deposit with guaranteed 8% returns.',
    mis_selling_example_scenarios_case1_reality: 'It was actually a ULIP (market-linked insurance) with 5-year lock-in, high charges, and no guaranteed returns.',
    mis_selling_example_scenarios_case1_solution: 'We helped Ramesh file a complaint. The bank refunded his premium and cancelled the policy.',
    mis_selling_example_scenarios_case2_title: 'Case 2: Hidden Charges in Policy',
    mis_selling_example_scenarios_case2_problem: 'Sunita bought a pension plan but was never told about 30% surrender charges if she exits early.',
    mis_selling_example_scenarios_case2_reality: 'When she tried to withdraw after 2 years, she lost ₹90,000 in surrender charges.',
    mis_selling_example_scenarios_case2_solution: 'We escalated to the Insurance Ombudsman. Sunita got 60% of surrender charges refunded.',
    mis_selling_example_scenarios_case3_title: 'Case 3: Policy Sold Without Consent',
    mis_selling_example_scenarios_case3_problem: 'Prakash found insurance premium deducted from his account without his knowledge while opening a savings account.',
    mis_selling_example_scenarios_case3_reality: 'The bank had enrolled him in an insurance plan without proper explanation or signature.',
    mis_selling_example_scenarios_case3_solution: 'We filed a complaint with IRDAI. The policy was cancelled and full premium was refunded.',
    mis_selling_example_scenarios_case4_title: 'Case 4: Fake Maturity Promises',
    mis_selling_example_scenarios_case4_problem: 'Meera was promised ₹10 lakh maturity after 10 years by the insurance agent.',
    mis_selling_example_scenarios_case4_reality: 'The policy document showed market-linked returns with no guarantee. She may get much less.',
    mis_selling_example_scenarios_case4_solution: 'We helped her cancel the policy within the free-look period and get a full refund.',
    mis_selling_example_scenarios_case_problem: '❌ Problem:',
    mis_selling_example_scenarios_case_reality: '⚠️ Reality:',
    mis_selling_example_scenarios_case_solution: '✅ Our Solution:',

    mis_selling_faqs: 'Frequently Asked Questions',
    mis_selling_faq_subtitle: 'Common questions about insurance mis-selling',
    mis_selling_faq1_question: 'How do I know if I\'m a victim of mis-selling?',
    mis_selling_faq1_answer: 'If what you were promised verbally doesn\'t match your policy documents, or if important information (charges, lock-in period, exclusions) was hidden, it\'s mis-selling.',
    mis_selling_faq2_question: 'What is the time limit to file a mis-selling complaint?',
    mis_selling_faq2_answer: 'You can file a complaint within 3 years from the date of purchase. However, if you discover the mis-selling later, you can still file based on when you discovered it.',
    mis_selling_faq3_question: 'Can I get a full refund if mis-selling is proven?',
    mis_selling_faq3_answer: 'Yes, in many cases. If you\'re within the 15-30 day free-look period, you get a full refund. Otherwise, the ombudsman may order partial or full refund based on evidence.',
    mis_selling_faq4_question: 'Will the agent or bank be penalized?',
    mis_selling_faq4_answer: 'Yes. IRDAI can impose penalties, cancel agent licenses, or fine the insurance company for mis-selling practices.',
    mis_selling_faq5_question: 'Do I need a lawyer to file a mis-selling complaint?',
    mis_selling_faq5_answer: 'No. We handle everything - complaint drafting, filing, escalation. Legal notice is sent only if the company doesn\'t respond.',
    mis_selling_faq6_question: 'How long does the mis-selling complaint process take?',
    mis_selling_faq6_answer: 'Insurance company grievance: 15-30 days. Ombudsman complaint: 2-4 months. We follow up at every step to speed up resolution.',

    mis_selling_cta_title: 'Victim of Insurance Mis-Selling?',
    mis_selling_cta_description: 'Don\'t let insurance companies get away with it. We\'ll help you get justice, compensation, and policy cancellation. Contact us today for a free consultation.',
    mis_selling_cta_button: 'Get Free Consultation',
    mis_selling_cta_call_button: 'Call Now',


    //--------------- ---------------------- ---------------------- --------------- Mis-Selling Page Ends

    //Insurance Claim Rejection Page ---------------- ---------------------- ------------------- --------------------

    claim_rej_title_backlink1: 'Insurance Claim Rejection',
    claim_rej_title_backlink2: 'Home',
    claim_rej_title: 'Insurance Claim Rejection Assistance',
    claim_rej_description: 'Understanding the reasons behind rejected insurance claims and exploring the steps that may help address the issue. An insurance claim rejection can be frustrating and emotionally difficult for policyholders. Insurance claim rejection may happen due to policy conditions, documentation issues, or interpretation of policy terms.',
    what_claim_rej_title: 'What is Insurance Claim Rejection?',
    what_claim_rej_description: 'Insurance claim rejection occurs when an insurance company declines a policyholder\'s request for claim settlement.',
    what_claim_rej_description1: 'This situation can arise for several reasons, including',
    what_claim_rej_description2: 'incomplete documentation, policy exclusions, missed deadlines, or disagreements regarding the coverage conditions.',
    what_claim_rej_description3: 'Many policyholders feel uncertain about how to respond when their claim is rejected. The rejection notice may contain technical explanations that are difficult to understand, leaving customers unsure about whether the decision is final or if further steps can be taken.',
    what_claim_rej_common_reasons: 'Common reasons include:',
    what_claim_rej_common_reasons1: '✗ Incomplete or incorrect documentation',
    what_claim_rej_common_reasons2: '✗ Delay in claim submission',
    what_claim_rej_common_reasons3: '✗ Policy exclusions or limitations',
    what_claim_rej_common_reasons4: '✗ Non-disclosure of important information at policy purchase',
    what_claim_rej_common_reasons5: '✗ Disagreement over claim eligibility',
    what_claim_rej_common_reasons6: '✗ Incorrect interpretation of policy terms',
    what_happens_after_claim_rej_title: 'What Happens After Claim Rejection',
    what_happens_after_claim_rej_description: 'Understanding the impact and next steps after rejection',
    what_happens_item1: 'Confusion About Policy',
    what_happens_desc1: 'Uncertainty about policy conditions and what was actually covered vs. what was promised.',
    what_happens_item2: 'Technical Explanations',
    what_happens_desc2: 'The rejection letter may contain complex technical explanations that are hard to understand.',
    what_happens_item3: 'Unclear Next Steps',
    what_happens_desc3: 'Policyholders are unsure whether the decision is final or if they can challenge it.',
    why_choose_claim_rej_title: 'Why Choose Yashoda Total Solution?',
    why_choose_claim_rej_description: 'Expert guidance to resolve claim rejection cases effectively',
    why_choose_claim_rej_item1: 'Expert Team',
    why_choose_claim_rej_desc1: 'Years of experience handling insurance claim rejection complaints and disputes.',
    why_choose_claim_rej_item2: 'Complete Documentation',
    why_choose_claim_rej_desc2: 'We prepare all necessary documents, notices, and complaint letters for you.',
    why_choose_claim_rej_item3: 'Legal Support',
    why_choose_claim_rej_desc3: 'Legal notice drafting and ombudsman complaint filing when needed.',
    why_choose_claim_rej_item4: 'High Success Rate',
    why_choose_claim_rej_desc4: 'Helped hundreds of customers get compensation and policy resolution.',
    process_flow_claim_rej_title: 'Our 5-Step Process to Resolve Rejection',
    process_flow_claim_rej_description: 'Systematic approach to address claim rejections',
    process_flow_claim_rej_item1: 'Case Review & Analysis',
    process_flow_claim_rej_desc1: 'We review your policy documents, rejection letter, and understand the stated reasons for rejection.',
    process_flow_claim_rej_item2: 'Evidence Collection',
    process_flow_claim_rej_desc2: 'We gather all supporting documents, policy terms, and correspondence related to your claim.',
    process_flow_claim_rej_item3: 'Response Drafting',
    process_flow_claim_rej_desc3: 'We prepare a detailed response addressing the rejection reasons point-by-point.',
    process_flow_claim_rej_item4: 'Complaint Filing',
    process_flow_claim_rej_desc4: 'We file complaints with the insurance company grievance cell and escalate if needed.',
    process_flow_claim_rej_item5: 'Ombudsman Escalation',
    process_flow_claim_rej_desc5: 'If unresolved, we escalate to Insurance Ombudsman or IRDAI for further action.',
    ex_scenario_claim_rej_title: 'Real-Life Claim Rejection Example',
    ex_scenario_claim_rej_description: 'Common scenarios we help resolve',
    ex_scenario_claim_rej_example1_title: 'Example 1 – Missing Medical Documentation',
    ex_scenario_claim_rej_example1_problem: 'A policyholder submits a health insurance claim after hospital treatment.',
    ex_scenario_claim_rej_example1_reality: 'The insurance company rejects the claim because certain medical reports were not submitted.',
    ex_scenario_claim_rej_example1_solution: 'We helped gather the missing documents and filed a fresh claim which was approved.',
    ex_scenario_claim_rej_example2_title: 'Example 2 – Policy Exclusion Clause',
    ex_scenario_claim_rej_example2_problem: 'A customer files a claim for treatment of a specific illness.',
    ex_scenario_claim_rej_example2_reality: 'The claim is rejected because the illness falls under the policy\'s exclusion list.',
    ex_scenario_claim_rej_example2_solution: 'We reviewed the policy terms and helped the customer understand the exclusion clause.',
    ex_scenario_claim_rej_example3_title: 'Example 3 – Late Claim Submission',
    ex_scenario_claim_rej_example3_problem: 'After a vehicle accident, the policyholder delays reporting to the insurance company.',
    ex_scenario_claim_rej_example3_reality: 'The claim is rejected because it wasn\'t reported within the policy-specified timeframe.',
    ex_scenario_claim_rej_example3_solution: 'We filed an appeal explaining the delay circumstances; partial claim was reconsidered.',
    ex_scenario_claim_rej_example4_title: 'Example 4 – Pre-Existing Condition Dispute',
    ex_scenario_claim_rej_example4_problem: 'A health insurance claim is rejected due to pre-existing condition classification.',
    ex_scenario_claim_rej_example4_reality: 'The insurer believes the illness existed before the policy was issued.',
    ex_scenario_claim_rej_example4_solution: 'We collected medical records proving the condition started post-policy and got approval.',
    ex_scenario_claim_rej_example_head1: '❌ Problem:',
    ex_scenario_claim_rej_example_head2: '⚠️ Reality:',
    ex_scenario_claim_rej_example_head3: '✅ Our Solution:',
    faq_claim_rej_title: 'Frequently Asked Questions',
    faq_claim_rej_description: 'Common questions about claim rejection',
    faq_claim_rej_q1: 'What does insurance claim rejection mean?',
    faq_claim_rej_a1: 'Insurance claim rejection means that the insurance company has declined the claim request based on policy conditions or documentation issues.',
    faq_claim_rej_q2: 'Can a rejected insurance claim be reviewed?',
    faq_claim_rej_a2: 'In some cases, policyholders may review the claim details and understand the reasons for rejection before deciding what steps to take next.',
    faq_claim_rej_q3: 'What documents are required for a claim?',
    faq_claim_rej_a3: 'Required documents vary depending on the type of insurance policy and claim situation. Common documents include policy papers, claim forms, medical reports, and bills.',
    faq_claim_rej_q4: 'Why do claims get rejected?',
    faq_claim_rej_a4: 'Claims may be rejected due to missing documents, policy exclusions, delayed submission, non-disclosure, or policy interpretation issues.',
    cta_claim_rej_title: 'Facing Confusion After Claim Rejection?',
    cta_claim_rej_description: 'Understanding the reason behind claim rejection can help policyholders evaluate their options. Contact Yashoda Total Solution to learn more about claim rejection assistance services.',
    cta_claim_rej_description2: 'Get Free Consultation',
    cta_claim_rej_button: 'Call Now',

    //---------------------- ---------------------- ---------------------- --------------- Insurance Claim Rejection Page Ends


    //Claim Delay Page ---------------- ---------------------- ------------------- --------------------

    claim_delay_title_backlink1: 'Home',
    claim_delay_title_backlink2: 'Delay in Claim Process',
    claim_delay_title: 'Delay in Insurance Claim Process',
    claim_delay_description: 'Understanding why insurance claims sometimes take longer than expected and how policyholders can better understand the process. Delays may occur due to documentation verification, internal investigations, policy conditions, or administrative procedures followed by insurance companies.',
    what_claim_delay_title: 'Understanding Claim Processing Delays',
    what_claim_delay_description: 'Insurance claim processing is a structured procedure that involves several stages of verification and documentation review.',
    what_claim_delay_description1: 'Sometimes, claims may take longer than expected to process. These delays may happen due to multiple reasons such as',
    what_claim_delay_description2: 'additional document requests, internal review procedures, or clarification requirements related to the policy.',
    what_claim_delay_description3: 'For policyholders, this waiting period can be frustrating and uncertain, especially when relying on the claim settlement to cover financial expenses related to accidents, medical treatment, or other insured events.',

    what_claim_delay_common_reasons: 'Common causes of delays include:',
    what_claim_delay_common_reasons1: '• Incomplete claim documents',
    what_claim_delay_common_reasons2: '• Additional verification or investigation by the insurance company',
    what_claim_delay_common_reasons3: '• Hospital or service provider documentation delays',
    what_claim_delay_common_reasons4: '• High volume of claims being processed',
    what_claim_delay_common_reasons5: '• Policy conditions requiring additional evaluation',
    what_claim_delay_common_reasons6: '• Communication gaps between involved parties',

    what_happens_after_claim_delay_title: 'What Happens During Claim Review',
    what_happens_after_claim_delay_description: 'Understanding the review process that may cause delays',
    what_happens_claim_delay_item1: 'Document Verification',
    what_happens_claim_delay_desc1: 'Insurance company verifies all submitted documents and supporting evidence.',
    what_happens_claim_delay_item2: 'Medical Review',
    what_happens_claim_delay_desc2: 'Detailed review of medical reports, accident details, or treatment records.',
    what_happens_claim_delay_item3: 'Policy Check',
    what_happens_claim_delay_desc3: 'Confirmation of policy eligibility conditions and coverage terms.',
    what_happens_claim_delay_item4: 'Additional Info',
    what_happens_claim_delay_desc4: 'Request for supplementary documents if initial submission is incomplete.',

    why_choose_claim_delay_title: 'Why Choose Yashoda Total Solution?',
    why_choose_claim_delay_description: 'Expert assistance for claim processing guidance',
    why_choose_claim_delay_item1: 'Expert Team',
    why_choose_claim_delay_desc1: 'Years of experience handling insurance claim rejection complaints and disputes.',
    why_choose_claim_delay_item2: 'Complete Documentation',
    why_choose_claim_delay_desc2: 'We prepare all necessary documents, notices, and complaint letters for you.',
    why_choose_claim_delay_item3: 'Legal Support',
    why_choose_claim_delay_desc3: 'Legal notice drafting and ombudsman complaint filing when needed.',
    why_choose_claim_delay_item4: 'High Success Rate',
    why_choose_claim_delay_desc4: 'Helped hundreds of customers get compensation and policy resolution.',

    process_flow_claim_delay_title: 'Our 5-Step Claim Assistance Process',
    process_flow_claim_delay_description: 'Helping you navigate claim delays effectively',
    process_flow_claim_delay_item1: 'Documentation Review',
    process_flow_claim_delay_desc1: 'We review your claim documents and ensure all required paperwork is complete and accurate.',
    process_flow_claim_delay_item2: 'Status Tracking',
    process_flow_claim_delay_desc2: 'We help you track claim status and understand where your claim is in the review process.',
    process_flow_claim_delay_item3: 'Follow-Up Assistance',
    process_flow_claim_delay_desc3: 'Regular follow-ups with the insurance company to expedite the claim processing.',
    process_flow_claim_delay_item4: 'Additional Documentation',
    process_flow_claim_delay_desc4: 'If additional documents are requested, we help you gather and submit them promptly.',
    process_flow_claim_delay_item5: 'Resolution Support',
    process_flow_claim_delay_desc5: 'We guide you through the entire process until your claim is successfully settled.',

    ex_scenario_claim_delay_title: 'Real-Life Claim Delay Examples',
    ex_scenario_claim_delay_description: 'Common situations where claims experience delays',
    ex_scenario_claim_delay_example1_title: 'Example 1 – Hospital Documentation Delay',
    ex_scenario_claim_delay_example1_problem: 'A patient submits a health insurance claim after hospital treatment.',
    ex_scenario_claim_delay_example1_reality: 'The claim remains pending because the insurance company is waiting for additional medical reports from the hospital.',
    ex_scenario_claim_delay_example1_solution: 'We coordinated with the hospital to expedite report submission and the claim was processed within 2 weeks.',

    ex_scenario_claim_delay_example2_title: 'Example 2 – Accident Investigation',
    ex_scenario_claim_delay_example2_problem: 'A motor accident claim takes longer to process than expected.',
    ex_scenario_claim_delay_example2_reality: 'The insurance company conducts an investigation to verify accident details before approving the claim.',
    ex_scenario_claim_delay_example2_solution: 'We provided all supporting evidence and followed up regularly; claim was settled in 45 days.',

    ex_scenario_claim_delay_example3_title: 'Example 3 – Missing Supporting Documents',
    ex_scenario_claim_delay_example3_problem: 'A claim is delayed due to incomplete documentation.',
    ex_scenario_claim_delay_example3_reality: 'Certain documents like discharge summaries and invoices were not submitted initially.',
    ex_scenario_claim_delay_example3_solution: 'We helped gather all missing documents and resubmitted; claim approved within 10 days.',

    ex_scenario_claim_delay_example4_title: 'Example 4 – Policy Condition Review',
    ex_scenario_claim_delay_example4_problem: 'An insurance company takes additional time to review the claim.',
    ex_scenario_claim_delay_example4_reality: 'The insurer needed to verify whether the event falls within policy coverage conditions.',
    ex_scenario_claim_delay_example4_solution: 'We provided policy clarifications and supporting documents; claim processed successfully.',
    ex_scenario_claim_delay_example_head1: '⏱️ Problem:',
    ex_scenario_claim_delay_example_head2: '📋 Reality:',
    ex_scenario_claim_delay_example_head3: '✅ Our Solution:',

    faq_claim_delay_title: 'Frequently Asked Questions',
    faq_claim_delay_description: 'Common questions about claim processing delays',

    faq_claim_delay_q1: 'Why do insurance claims sometimes take longer than expected?',
    faq_claim_delay_a1: 'Claim processing may require document verification, investigation, and policy evaluation, which can extend the processing time depending on complexity.',

    faq_claim_delay_q2: 'How long does claim processing usually take?',
    faq_claim_delay_a2: 'The timeline varies depending on the type of claim, required documentation, and policy conditions. Some claims are processed within days, while others may take weeks.',

    faq_claim_delay_q3: 'What should policyholders do if their claim is delayed?',
    faq_claim_delay_a3: 'Review the claim status, ensure all required documents are submitted, and follow up with the insurance company for updates on the processing timeline.',

    faq_claim_delay_q4: 'Can claim delays happen even if documents are submitted?',
    faq_claim_delay_a4: 'Yes. Sometimes insurance companies conduct additional verification, investigation, or policy review before approving the claim.',

    cta_claim_delay_title: 'Experiencing Delays in Your Claim Process?',
    cta_claim_delay_description: 'Understanding the claim procedure and documentation requirements can help policyholders navigate the situation more effectively. Contact Yashoda Total Solution for claim processing assistance.',
    cta_claim_delay_description2: 'Get Free Consultation',
    cta_claim_delay_button: 'Call Now',

    //---------------------- ---------------------- ---------------------- --------------- Claim Delay Page Ends


    //Partial Claim Settlement Page ---------------- ---------------------- ------------------- --------------------

    partial_claim_title_backlink1: 'Home',
    partial_claim_title_backlink2: 'Partial Claim Settlement',
    partial_claim_title: 'Partial Claim Settlement',
    partial_claim_description: 'Understanding situations where insurance claims are approved but settled for a lower amount than expected. Sometimes insurance companies approve a claim but pay only a portion of the total claimed amount. This situation is known as a partial claim settlement or partial claim settlement. Understanding the reasons behind the reduced claim amount is important for evaluating the situation and determining possible next steps.',

    what_partial_claim_title: 'Service Overview',
    what_partial_claim_description: 'A partial claim settlement occurs when an insurance company approves a claim but pays only part of the total claimed amount.',
    what_partial_claim_description1: 'This can happen when certain expenses fall outside the policy coverage or when',
    what_partial_claim_description2: 'policy limits and deductions apply.',
    what_partial_claim_description3: 'For many policyholders, the difference between the claimed amount and the approved settlement amount can create confusion and financial concerns.',
    what_partial_claim_description4: 'Understanding how the insurance company calculates the claim amount and reviewing the policy terms carefully can help clarify why a partial settlement occurred.',
    what_partial_claim_description5: 'Yashoda Total Solutions',
    what_partial_claim_description6: 'assists policyholders by reviewing such situations, explaining possible reasons behind the settlement decision, and helping clients understand the process involved.',

    common_signs_partial_claim: 'Common Signs of Partial Claim Settlement',
    common_signs_partial_claim_description: 'Policyholders may notice certain signs when a claim has been settled for less than expected',
    common_signs_partial_claim_title1: 'Lower Settlement Amount',
    common_signs_partial_claim_desc1: 'The approved claim amount is significantly lower than the submitted expenses',
    common_signs_partial_claim_title2: 'Excluded Charges',
    common_signs_partial_claim_desc2: 'Certain hospital or service charges are not included in the settlement',
    common_signs_partial_claim_title3: 'Policy Limits Applied',
    common_signs_partial_claim_desc3: 'Maximum coverage limits reduce the total reimbursed amount',
    common_signs_partial_claim_title4: 'Non-Covered Services',
    common_signs_partial_claim_desc4: 'Some treatments or services are not covered under the policy',
    common_signs_partial_claim_title5: 'Deductibles Applied',
    common_signs_partial_claim_desc5: 'Policy deductibles are subtracted from the claim amount',
    common_signs_partial_claim_title6: 'Depreciation Deductions',
    common_signs_partial_claim_desc6: 'Asset depreciation reduces the settlement in motor or property claims',

    what_happens_after_partial_claim_title: 'What Actually Happens in Partial Claim Settlement Cases',
    what_happens_after_partial_claim_description: 'When a claim is submitted, the insurance company reviews the documents and evaluates the expenses according to policy conditions.',
    what_happens_partial_claim_item1: 'Policy Conditions Applied',
    what_happens_partial_claim_desc1: 'Insurer applies coverage limits and policy terms during evaluation.',
    what_happens_partial_claim_item2: 'Deductions Calculated',
    what_happens_partial_claim_desc2: 'Various deductions such as depreciation, deductibles, or co-pay are applied.',
    what_happens_partial_claim_item3: 'Technical Explanations',
    what_happens_partial_claim_desc3: 'Settlement reports may contain technical language that is difficult to understand.',

    process_flow_partial_claim_title: 'Claim Evaluation Process',
    process_flow_partial_claim_description: 'How insurers calculate the final claim settlement amount',
    process_flow_partial_claim_item1: 'Claim Submitted',
    process_flow_partial_claim_desc1: 'Policyholder submits claim with complete documentation and expense details.',
    process_flow_partial_claim_item2: 'Documents Verified',
    process_flow_partial_claim_desc2: 'Insurance company verifies all submitted documents and bills.',
    process_flow_partial_claim_item3: 'Policy Conditions Applied',
    process_flow_partial_claim_desc3: 'Coverage limits, exclusions, and policy terms are evaluated.',
    process_flow_partial_claim_item4: 'Deductions Calculated',
    process_flow_partial_claim_desc4: 'Deductibles, depreciation, and other applicable deductions are computed.',
    process_flow_partial_claim_item5: 'Final Settlement Approved',
    process_flow_partial_claim_desc5: 'Final reduced amount is approved and paid to the policyholder.',

    ex_scenario_partial_claim_title: 'Real-Life Partial Claim Settlement Examples',
    ex_scenario_partial_claim_description: 'Common scenarios where claims are settled for reduced amounts',
    ex_scenario_partial_claim_example1_title: 'Example 1 – Hospital Room Rent Limit',
    ex_scenario_partial_claim_example1_claimed: '₹1,20,000',
    ex_scenario_partial_claim_example1_settled: '₹80,000',
    ex_scenario_partial_claim_example1_solution: 'A patient receives hospital treatment and submits a claim for ₹1,20,000. However, the insurance company settles only ₹80,000 because the hospital room rent exceeded the limit allowed under the policy.',

    ex_scenario_partial_claim_example2_title: 'Example 2 – Non-Covered Medical Items',
    ex_scenario_partial_claim_example2_claimed: '₹90,000',
    ex_scenario_partial_claim_example2_settled: '₹65,000',
    ex_scenario_partial_claim_example2_solution: 'A hospital bill includes certain items such as medical equipment or special services that are not covered by the insurance policy. These charges are removed from the claim amount during evaluation.',

    ex_scenario_partial_claim_example3_title: 'Example 3 – Depreciation in Motor Insurance',
    ex_scenario_partial_claim_example3_claimed: '₹70,000',
    ex_scenario_partial_claim_example3_settled: '₹50,000',
    ex_scenario_partial_claim_example3_solution: 'After a vehicle accident, the repair bill amounts to ₹70,000. The insurance company settles only ₹50,000 because depreciation deductions apply to certain replaced parts.',

    ex_scenario_partial_claim_example4_title: 'Example 4 – Policy Sub-Limits',
    ex_scenario_partial_claim_example4_claimed: '₹90,000',
    ex_scenario_partial_claim_example4_settled: '₹60,000',
    ex_scenario_partial_claim_example4_solution: 'A policy includes specific limits for certain treatments. Although the total hospital bill is ₹90,000, the insurer approves only ₹60,000 because the treatment category has a maximum payout limit.',
    ex_scenario_partial_claim_example_head1: 'Claimed Amount:',
    ex_scenario_partial_claim_example_head2: 'Settled Amount:',

    partial_claim_calculation_title: 'Understanding Claim Settlement Calculations',
    partial_claim_calculation_description: 'Key factors that determine the final settlement amount',
    partial_claim_calculation_item1: 'Coverage Limits',
    partial_claim_calculation_desc1: 'Maximum limits for specific treatments or damages.',
    partial_claim_calculation_item2: 'Deductibles',
    partial_claim_calculation_desc2: 'Amount that must be paid by the policyholder.',
    partial_claim_calculation_item3: 'Depreciation',
    partial_claim_calculation_desc3: 'Value reduction for certain assets or parts.',
    partial_claim_calculation_item4: 'Exclusions',
    partial_claim_calculation_desc4: 'Specific services or treatments not covered.',

    why_choose_partial_claim_title: 'Why Choose Yashoda Total Solution?',
    why_choose_partial_claim_description: 'Expert assistance for claim processing guidance',
    why_choose_partial_claim_item1: 'Expert Team',
    why_choose_partial_claim_desc1: 'Years of experience handling insurance claim rejection complaints and disputes.',
    why_choose_partial_claim_item2: 'Complete Documentation',
    why_choose_partial_claim_desc2: 'We prepare all necessary documents, notices, and complaint letters for you.',
    why_choose_partial_claim_item3: 'Legal Support',
    why_choose_partial_claim_desc3: 'Legal notice drafting and ombudsman complaint filing when needed.',
    why_choose_partial_claim_item4: 'High Success Rate',
    why_choose_partial_claim_desc4: 'Helped hundreds of customers get compensation and policy resolution.',

    faq_partial_claim_title: 'Frequently Asked Questions',
    faq_partial_claim_description: 'Common questions about partial claim settlements',

    faq_partial_claim_q1: 'What does short claim settlement mean?',
    faq_partial_claim_a1: 'Short settlement occurs when the insurance company approves a claim but pays only part of the claimed amount due to policy limits, deductions, or exclusions.',

    faq_partial_claim_q2: 'Why do insurance companies reduce claim amounts?',
    faq_partial_claim_a2: 'The reduction may happen due to policy limits, exclusions, depreciation deductions, deductibles, or non-covered expenses as specified in the policy terms.',

    faq_partial_claim_q3: 'Can the settlement amount differ from the hospital bill?',
    faq_partial_claim_a3: 'Yes, the approved amount may differ depending on policy conditions, coverage limits, room rent limits, and which medical services are covered under the policy.',

    faq_partial_claim_q4: 'How can policyholders understand the settlement calculation?',
    faq_partial_claim_a4: 'Reviewing the policy document and claim settlement report can help explain the deductions applied. The settlement report usually lists all deductions and reasons for the reduced amount.',

    cta_partial_claim_title: 'Received a Claim Settlement Amount That is Lower Than Expected?',
    cta_partial_claim_description: 'Understanding how the claim amount was calculated can help policyholders evaluate the situation and review their available options. Contact Yashoda Total Solution to learn more about insurance claim and dispute assistance services.',
    cta_partial_claim_description2: 'Get Free Consultation',
    cta_partial_claim_button: 'Call Now',

    //---------------------- ---------------------- ---------------------- --------------- Partial Claim Settlement Page Ends

    //Health Claim Reimbursement Page ---------------- ---------------------- ------------------- --------------------

    health_claim_title_backlink1: 'Home',
    health_claim_title_backlink2: 'Health Claim Reimbursement',

    health_claim_title: 'Health Claim Reimbursement Assistance',
    health_claim_description: 'Understanding the reimbursement claim process and how policyholders can manage medical claim submissions effectively. Health insurance reimbursement claims occur when policyholders pay their medical expenses first and later submit the bills to the insurance company for repayment.',

    what_health_claim_title: 'What is Health Claim Reimbursement?',
    what_health_claim_description: 'Health claim reimbursement is a process in which the policyholder pays the medical expenses at the hospital and later submits the claim to the insurance company to receive reimbursement of the eligible amount.',
    what_health_claim_description1: 'Unlike cashless hospitalization,',
    what_health_claim_description2: 'reimbursement claims require policyholders to submit detailed documentation',
    what_health_claim_description3: 'such as hospital bills, medical reports, prescriptions, and discharge summaries.',
    what_health_claim_description4: 'Many customers face difficulties during this process because the documentation requirements may be complex and the claim review process can take time.',

    what_health_claim_common_reasons: 'Common requirements include:',
    what_health_claim_common_reasons1: '• Hospital bills and invoices',
    what_health_claim_common_reasons2: '• Discharge summary and medical reports',
    what_health_claim_common_reasons3: '• Medical prescriptions',
    what_health_claim_common_reasons4: '• Completed claim form',
    what_health_claim_common_reasons5: '• Identity proof and policy details',

    common_challenges_health_claim_title: 'Common Reimbursement Claim Challenges',
    common_challenges_health_claim_description: 'Issues policyholders may face during reimbursement claims',
    common_challenges_health_claim_item1: 'Missing Documents',
    common_challenges_health_claim_desc1: 'Confusion about which documents are required for successful claim submission.',

    common_challenges_health_claim_item2: 'Incorrect Claim Form',
    common_challenges_health_claim_desc2: 'Incomplete or incorrectly filled claim forms causing processing delays.',

    common_challenges_health_claim_item3: 'Coverage Confusion',
    common_challenges_health_claim_desc3: 'Uncertainty about which expenses are covered under the policy.',

    common_challenges_health_claim_item4: 'Verification Delays',
    common_challenges_health_claim_desc4: 'Extended processing time due to document verification procedures.',

    common_challenges_health_claim_item5: 'Incomplete Medical Records',
    common_challenges_health_claim_desc5: 'Missing medical reports or discharge summaries from the hospital.',

    common_challenges_health_claim_item6: 'Reimbursement Amount',
    common_challenges_health_claim_desc6: 'Difference between claimed amount and approved reimbursement.',

    what_happens_after_health_claim_title: 'What Happens in Reimbursement Cases',
    what_happens_after_health_claim_description: 'Understanding the reimbursement claim review process',
    what_happens_health_claim_item1: 'Patient Pays First',
    what_happens_health_claim_desc1: 'Policyholder pays all medical expenses directly to the hospital at the time of treatment.',
    what_happens_health_claim_item2: 'Document Collection',
    what_happens_health_claim_desc2: 'All relevant bills, reports, and discharge summaries are collected after treatment.',
    what_happens_health_claim_item3: 'Insurance Review',
    what_happens_health_claim_desc3: 'Insurance company verifies documents and checks policy eligibility before processing.',

    why_choose_health_claim_title: 'Why Choose Yashoda Total Solution?',
    why_choose_health_claim_description: 'Expert assistance for reimbursement claim guidance',
    why_choose_health_claim_item1: 'Expert Team',
    why_choose_health_claim_desc1: 'Years of experience handling insurance claim rejection complaints and disputes.',
    why_choose_health_claim_item2: 'Complete Documentation',
    why_choose_health_claim_desc2: 'We prepare all necessary documents, notices, and complaint letters for you.',
    why_choose_health_claim_item3: 'Legal Support',
    why_choose_health_claim_desc3: 'Legal notice drafting and ombudsman complaint filing when needed.',
    why_choose_health_claim_item4: 'High Success Rate',
    why_choose_health_claim_desc4: 'Helped hundreds of customers get compensation and policy resolution.',

    process_flow_health_claim_title: 'Our 5-Step Reimbursement Assistance Process',
    process_flow_health_claim_description: 'Simple and systematic guidance for your reimbursement claim',
    process_flow_health_claim_item1: 'Document Checklist',
    process_flow_health_claim_desc1: 'We provide a complete checklist of all documents required for your reimbursement claim.',
    process_flow_health_claim_item2: 'Document Review',
    process_flow_health_claim_desc2: 'We review all your medical bills, reports, and discharge summaries for completeness.',
    process_flow_health_claim_item3: 'Claim Form Assistance',
    process_flow_health_claim_desc3: 'We help you fill out the claim form correctly with all necessary policy details.',
    process_flow_health_claim_item4: 'Submission Support',
    process_flow_health_claim_desc4: 'We guide you on how to submit the claim properly to your insurance company.',
    process_flow_health_claim_item5: 'Follow-Up & Tracking',
    process_flow_health_claim_desc5: 'We help track your claim status and follow up until reimbursement is processed.',

    ex_scenario_health_claim_title: 'Real-Life Reimbursement Examples',
    ex_scenario_health_claim_description: 'Common scenarios we help resolve',

    ex_scenario_health_claim_example1_title: 'Example 1 – Emergency Hospitalization',
    ex_scenario_health_claim_example1_problem: 'A patient is admitted to a hospital that does not provide cashless insurance services.',
    ex_scenario_health_claim_example1_reality: 'The patient pays the full hospital bill upfront and needs to claim reimbursement later.',
    ex_scenario_health_claim_example1_solution: 'We helped organize all documents and submit a complete claim; reimbursement received in 3 weeks.',

    ex_scenario_health_claim_example2_title: 'Example 2 – Missing Medical Documents',
    ex_scenario_health_claim_example2_problem: 'A policyholder submits a reimbursement claim but forgets to attach the discharge summary.',
    ex_scenario_health_claim_example2_reality: 'The insurance company delays the claim until the missing document is provided.',
    ex_scenario_health_claim_example2_solution: 'We identified the missing document, obtained it from the hospital, and resubmitted successfully.',

    ex_scenario_health_claim_example3_title: 'Example 3 – Treatment Outside Network Hospital',
    ex_scenario_health_claim_example3_problem: 'A patient receives treatment at a hospital not part of the insurer\'s network.',
    ex_scenario_health_claim_example3_reality: 'Since cashless treatment is not available, the patient pays and later files for reimbursement.',
    ex_scenario_health_claim_example3_solution: 'We assisted with complete documentation; claim approved within policy limits.',

    ex_scenario_health_claim_example4_title: 'Example 4 – Incorrect Claim Form',
    ex_scenario_health_claim_example4_problem: 'A reimbursement claim is submitted with incorrect policy details.',
    ex_scenario_health_claim_example4_reality: 'This causes delays in claim processing until the corrected form is submitted.',
    ex_scenario_health_claim_example4_solution: 'We helped correct the form details and expedited the resubmission; claim processed smoothly.',
    ex_scenario_health_claim_example_head1: '⏱️ Problem:',
    ex_scenario_health_claim_example_head2: '📋 Reality:',
    ex_scenario_health_claim_example_head3: '✅ Our Solution:',

    faq_health_claim_title: 'Frequently Asked Questions',
    faq_health_claim_description: 'Common questions about reimbursement claims',

    faq_health_claim_q1: 'What is a health insurance reimbursement claim?',
    faq_health_claim_a1: 'A reimbursement claim is filed when the policyholder pays medical expenses first and later submits the bills to the insurance company for repayment of eligible amounts.',

    faq_health_claim_q2: 'What documents are required for reimbursement claims?',
    faq_health_claim_a2: 'Typical documents include hospital bills, discharge summary, medical reports, prescriptions, completed claim forms, identity proof, and policy details.',

    faq_health_claim_q3: 'Why do reimbursement claims sometimes take time to process?',
    faq_health_claim_a3: 'Claims may take time due to document verification, policy eligibility checks, and review of medical treatment details against policy terms.',

    faq_health_claim_q4: 'Can reimbursement claims be submitted after hospital discharge?',
    faq_health_claim_a4: 'Yes, reimbursement claims are usually submitted after treatment once all required documents like bills and discharge summaries are available.',

    cta_health_claim_title: 'Facing Confusion About Your Reimbursement Claim?',
    cta_health_claim_description: 'Understanding the documentation and claim process can help policyholders navigate reimbursement procedures more confidently. Contact Yashoda Total Solution for expert assistance.',
    cta_health_claim_description2: 'Get Free Consultation',
    cta_health_claim_button: 'Call Now',

    //---------------------- ---------------------- ---------------------- --------------- Health Claim Reimbursement Page Ends

    //PMSBY Page ---------------- ---------------------- ------------------- --------------------

    pmsby_title_backlink1: 'Home',
    pmsby_title_backlink2: 'PMSBY',

    pmsby_title: 'Pradhan Mantri Suraksha Bima Yojana (PMSBY) Assistance',
    pmsby_description: 'Understanding the PMSBY accident insurance scheme and how beneficiaries can navigate the claim process. PMSBY is a government-backed accident insurance scheme that provides financial protection at a very affordable premium. Understanding the process and requirements is important for beneficiaries who wish to access the insurance benefits available under this program.',

    what_pmsby_title: 'What is Pradhan Mantri Suraksha Bima Yojana?',
    what_pmsby_description: 'Pradhan Mantri Suraksha Bima Yojana (PMSBY) is an accident insurance scheme launched by the Government of India to provide financial protection in case of accidental death or disability.',
    what_pmsby_description1: 'The scheme offers',
    what_pmsby_description2: 'coverage at a minimal annual premium',
    what_pmsby_description3: 'and is linked to the policyholder\'s bank account. Many individuals enroll in this scheme through their banks, often without fully understanding the claim procedure or documentation required.',
    what_pmsby_description4: 'When an accident occurs, beneficiaries may face challenges in understanding the steps required to submit a claim or collect the necessary documents.',

    what_pmsby_key_features: 'Key Features:',
    what_pmsby_key_feature1: '• Affordable annual premium',
    what_pmsby_key_feature2: '• Coverage for accidental death or disability',
    what_pmsby_key_feature3: '• Enrollment through bank account',
    what_pmsby_key_feature4: '• Government-backed scheme',
    what_pmsby_key_feature5: '• Open to eligible age groups',

    common_challenges_pmsby_title: 'Common PMSBY Claim Challenges',
    common_challenges_pmsby_description: 'Issues beneficiaries may face during claim submission',
    common_challenges_pmsby_item1: 'Lack of Awareness',
    common_challenges_pmsby_desc1: 'Beneficiaries are unaware that the person was enrolled in the PMSBY scheme.',

    common_challenges_pmsby_item2: 'Eligibility Confusion',
    common_challenges_pmsby_desc2: 'Uncertainty regarding eligibility criteria for accident claims under PMSBY.',

    common_challenges_pmsby_item3: 'Missing Documents',
    common_challenges_pmsby_desc3: 'Difficulty collecting required accident reports and supporting documents.',

    common_challenges_pmsby_item4: 'Process Uncertainty',
    common_challenges_pmsby_desc4: 'Lack of understanding of the claim submission and verification process.',

    common_challenges_pmsby_item5: 'Bank Coordination',
    common_challenges_pmsby_desc5: 'Confusion about approaching the bank for claim initiation.',

    common_challenges_pmsby_item6: 'Verification Delays',
    common_challenges_pmsby_desc6: 'Processing delays caused by incomplete or incorrect documentation.',

    what_happens_after_pmsby_title: 'What Happens in PMSBY Claim Cases',
    what_happens_after_pmsby_description: 'Understanding the claim discovery and submission process',
    what_happens_pmsby_item1: 'Coverage Discovery',
    what_happens_pmsby_desc1: 'Family members may discover PMSBY enrollment only after an accident occurs.',
    what_happens_pmsby_item2: 'Document Collection',
    what_happens_pmsby_desc2: 'Beneficiaries must gather accident reports, identity proofs, and claim forms.',
    what_happens_pmsby_item3: 'Bank Verification',
    what_happens_pmsby_desc3: 'Bank and insurance provider review documents to verify eligibility and coverage.',

    why_choose_pmsby_title: 'Why Choose Yashoda Total Solution?',
    why_choose_pmsby_description: 'Expert guidance for PMSBY claim assistance',
    why_choose_pmsby_item1: 'Expert Team',
    why_choose_pmsby_desc1: 'Years of experience handling insurance claim rejection complaints and disputes.',
    why_choose_pmsby_item2: 'Complete Documentation',
    why_choose_pmsby_desc2: 'We prepare all necessary documents, notices, and complaint letters for you.',
    why_choose_pmsby_item3: 'Legal Support',
    why_choose_pmsby_desc3: 'Legal notice drafting and ombudsman complaint filing when needed.',
    why_choose_pmsby_item4: 'High Success Rate',
    why_choose_pmsby_desc4: 'Helped hundreds of customers get compensation and policy resolution.',

    process_flow_pmsby_title: 'Our 5-Step PMSBY Claim Assistance Process',
    process_flow_pmsby_description: 'Simplified guidance for PMSBY beneficiaries',
    process_flow_pmsby_item1: 'Enrollment Verification',
    process_flow_pmsby_desc1: 'We help verify if the individual was enrolled in PMSBY through their bank account.',
    process_flow_pmsby_item2: 'Eligibility Assessment',
    process_flow_pmsby_desc2: 'We review the accident details to confirm eligibility under PMSBY coverage terms.',
    process_flow_pmsby_item3: 'Document Collection',
    process_flow_pmsby_desc3: 'We assist in gathering all required documents including accident reports and identity proofs.',
    process_flow_pmsby_item4: 'Claim Form Preparation',
    process_flow_pmsby_desc4: 'We help complete the claim application forms with accurate information.',
    process_flow_pmsby_item5: 'Bank Submission & Follow-Up',
    process_flow_pmsby_desc5: 'We guide you through bank submission and track the claim until processing is complete.',

    ex_scenario_pmsby_title: 'Real-Life PMSBY Claim Examples',
    ex_scenario_pmsby_description: 'Common scenarios we help resolve',
    ex_scenario_pmsby_example1_title: 'Example 1 – Family Unaware of Scheme Enrollment',
    ex_scenario_pmsby_example1_problem: 'A bank customer is enrolled in PMSBY through automatic enrollment.',
    ex_scenario_pmsby_example1_reality: 'After an accidental incident, the family learns that the individual was covered but is unsure how to initiate the claim.',
    ex_scenario_pmsby_example1_solution: 'We verified enrollment, explained the process, and helped submit a complete claim successfully.',

    ex_scenario_pmsby_example2_title: 'Example 2 – Missing Accident Documentation',
    ex_scenario_pmsby_example2_problem: 'A beneficiary attempts to submit a claim for PMSBY benefits.',
    ex_scenario_pmsby_example2_reality: 'The claim faces difficulties because required accident reports and supporting documents are incomplete.',
    ex_scenario_pmsby_example2_solution: 'We helped obtain missing accident reports from authorities and completed the claim documentation.',

    ex_scenario_pmsby_example3_title: 'Example 3 – Claim Submission Confusion',
    ex_scenario_pmsby_example3_problem: 'The family of an accident victim approaches the bank to claim insurance benefits.',
    ex_scenario_pmsby_example3_reality: 'They are uncertain about the documents and forms required to submit the PMSBY claim.',
    ex_scenario_pmsby_example3_solution: 'We provided a complete checklist, helped fill forms, and guided them through bank submission.',

    ex_scenario_pmsby_example4_title: 'Example 4 – Eligibility Clarification',
    ex_scenario_pmsby_example4_problem: 'A beneficiary wants to file a PMSBY claim but is unsure about eligibility.',
    ex_scenario_pmsby_example4_reality: 'They need to understand whether the accident meets the conditions defined under the scheme.',
    ex_scenario_pmsby_example4_solution: 'We reviewed the accident details, confirmed eligibility, and proceeded with claim submission.',
    ex_scenario_pmsby_example_head1: '⏱️ Problem:',
    ex_scenario_pmsby_example_head2: '📋 Reality:',
    ex_scenario_pmsby_example_head3: '✅ Our Solution:',

    faq_pmsby_title: 'Frequently Asked Questions',
    faq_pmsby_description: 'Common questions about PMSBY',

    faq_pmsby_q1: 'What is Pradhan Mantri Suraksha Bima Yojana (PMSBY)?',
    faq_pmsby_a1: 'PMSBY is a government accident insurance scheme that provides financial protection for accidental death or disability at an affordable annual premium.',

    faq_pmsby_q2: 'Who can enroll in PMSBY?',
    faq_pmsby_a2: 'Individuals with a savings bank account within the eligible age group (typically 18-70 years) can enroll in the scheme through their bank.',

    faq_pmsby_q3: 'What type of incidents are covered under PMSBY?',
    faq_pmsby_a3: 'The scheme typically provides coverage for accidental death and certain types of accidental permanent or partial disabilities as defined in the scheme terms.',

    faq_pmsby_q4: 'How can beneficiaries know if someone was enrolled in PMSBY?',
    faq_pmsby_a4: 'Enrollment is usually linked to a bank account. Beneficiaries can check with the bank where the account is held to confirm PMSBY coverage.',

    cta_pmsby_title: 'Need Help Understanding PMSBY Claims?',
    cta_pmsby_description: 'Understanding the scheme requirements and documentation process can help beneficiaries navigate the claim procedure more confidently. Contact Yashoda Total Solution for expert assistance with PMSBY claims.',
    cta_pmsby_description2: 'Get Free Consultation',
    cta_pmsby_button: 'Call Now',

    //---------------------- ---------------------- ---------------------- --------------- PMSBY Page Ends



    //PMJJBY Page ---------------- ---------------------- ------------------- --------------------

    pmjjby_title_backlink1: 'Home',
    pmjjby_title_backlink2: 'PMJJBY',

    pmjjby_title: 'Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY) Assistance',
    pmjjby_description: 'Understanding the PMJJBY life insurance scheme and how beneficiaries can navigate the claim process. PMJJBY is a government-supported life insurance scheme that provides affordable life insurance coverage to eligible individuals. Understanding how the scheme works is important for beneficiaries seeking to access insurance benefits.',

    what_pmjjby_title: 'What is Pradhan Mantri Jeevan Jyoti Bima Yojana?',
    what_pmjjby_description: 'Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY) is a life insurance scheme launched by the Government of India to provide affordable life insurance coverage to eligible citizens.',
    what_pmjjby_description1: 'The scheme is generally',
    what_pmjjby_description2: 'linked to a savings bank account',
    what_pmjjby_description3: ', allowing individuals to enroll easily through their bank. While the scheme offers important financial protection, beneficiaries may sometimes find it difficult to understand the claim procedure and documentation required.',
    what_pmjjby_description4: 'In many situations, family members or beneficiaries become aware of the policy only after an unfortunate event occurs, which can create uncertainty about how to proceed with the claim.',

    what_pmjjby_key_features: 'Key features of PMJJBY:',
    what_pmjjby_key_feature1: '• Affordable annual premium for life insurance coverage',
    what_pmjjby_key_feature2: '• Enrollment through savings bank account',
    what_pmjjby_key_feature3: '• Government-backed life insurance scheme',
    what_pmjjby_key_feature4: '• Coverage for eligible age groups',
    what_pmjjby_key_feature5: '• Simple renewal process',

    common_challenges_pmjjby_title: 'Common PMJJBY Claim Challenges',
    common_challenges_pmjjby_description: 'Issues beneficiaries may encounter during claim submission',
    common_challenges_pmjjby_item1: 'Lack of Awareness',
    common_challenges_pmjjby_desc1: 'Beneficiaries are unaware that the policyholder was enrolled in PMJJBY scheme.',

    common_challenges_pmjjby_item2: 'Eligibility Confusion',
    common_challenges_pmjjby_desc2: 'Uncertainty regarding eligibility criteria for accident claims under PMJJBY.',

    common_challenges_pmjjby_item3: 'Missing Documents',
    common_challenges_pmjjby_desc3: 'Difficulty gathering required documents for claim submission.',

    common_challenges_pmjjby_item4: 'Process Uncertainty',
    common_challenges_pmjjby_desc4: 'Confusion about how to initiate and complete the claim process.',

    common_challenges_pmjjby_item5: 'Bank Procedures',
    common_challenges_pmjjby_desc5: 'Understanding bank claim submission and verification procedures.',

    common_challenges_pmjjby_item6: 'Verification Delays',
    common_challenges_pmjjby_desc6: 'Processing delays caused by incomplete or incorrect documentation.',

    what_happens_after_pmjjby_title: 'What Happens in PMJJBY Claim Cases',
    what_happens_after_pmjjby_description: 'Understanding the claim discovery and submission process',
    what_happens_pmjjby_item1: 'Coverage Discovery',
    what_happens_pmjjby_desc1: 'Family members may discover PMJJBY enrollment only after the unfortunate event.',
    what_happens_pmjjby_item2: 'Document Collection',
    what_happens_pmjjby_desc2: 'Beneficiaries must gather required documents including death certificate and claim forms.',
    what_happens_pmjjby_item3: 'Bank Verification',
    what_happens_pmjjby_desc3: 'Bank and insurance provider review documents to verify eligibility and process claim.',

    why_choose_pmjjby_title: 'Why Choose Yashoda Total Solution?',
    why_choose_pmjjby_description: 'Expert guidance for PMJJBY claim assistance',
    why_choose_pmjjby_item1: 'Expert Team',
    why_choose_pmjjby_desc1: 'Years of experience handling insurance claim rejection complaints and disputes.',
    why_choose_pmjjby_item2: 'Complete Documentation',
    why_choose_pmjjby_desc2: 'We prepare all necessary documents, notices, and complaint letters for you.',
    why_choose_pmjjby_item3: 'Legal Support',
    why_choose_pmjjby_desc3: 'Legal notice drafting and ombudsman complaint filing when needed.',
    why_choose_pmjjby_item4: 'High Success Rate',
    why_choose_pmjjby_desc4: 'Helped hundreds of customers get compensation and policy resolution.',

    process_flow_pmjjby_title: 'Our 5-Step PMJJBY Claim Assistance Process',
    process_flow_pmjjby_description: 'Simplified guidance for PMJJBY beneficiaries',
    process_flow_pmjjby_item1: 'Enrollment Verification',
    process_flow_pmjjby_desc1: 'We help verify if the policyholder was enrolled in PMJJBY through their bank account.',
    process_flow_pmjjby_item2: 'Eligibility Assessment',
    process_flow_pmjjby_desc2: 'We review the policy details to confirm eligibility and active coverage status.',
    process_flow_pmjjby_item3: 'Document Collection',
    process_flow_pmjjby_desc3: 'We assist in gathering all required documents including death certificate and identity proofs.',
    process_flow_pmjjby_item4: 'Claim Form Preparation',
    process_flow_pmjjby_desc4: 'We help complete the claim application forms accurately with all necessary information.',
    process_flow_pmjjby_item5: 'Bank Submission & Follow-Up',
    process_flow_pmjjby_desc5: 'We guide you through bank submission and track the claim until processing is complete.',

    ex_scenario_pmjjby_title: 'Real-Life PMJJBY Claim Examples',
    ex_scenario_pmjjby_description: 'Common scenarios we help resolve',
    ex_scenario_pmjjby_example1_title: 'Example 1 – Family Unaware of Life Insurance Coverage',
    ex_scenario_pmjjby_example1_problem: 'A bank customer enrolls in PMJJBY through automatic enrollment.',
    ex_scenario_pmjjby_example1_reality: 'After the policyholder passes away, the family learns about the life insurance coverage but is unsure how to begin the claim.',
    ex_scenario_pmjjby_example1_solution: 'We verified enrollment, explained the process, and helped submit a complete claim successfully.',

    ex_scenario_pmjjby_example2_title: 'Example 2 – Documentation Confusion',
    ex_scenario_pmjjby_example2_problem: 'The beneficiary attempts to submit a claim for PMJJBY benefits.',
    ex_scenario_pmjjby_example2_reality: 'They face difficulties because they are uncertain about which documents are required for submission.',
    ex_scenario_pmjjby_example2_solution: 'We provided a complete document checklist and helped gather all required papers for the claim.',

    ex_scenario_pmjjby_example3_title: 'Example 3 – Bank Claim Procedure Uncertainty',
    ex_scenario_pmjjby_example3_problem: 'The family approaches the bank to claim the insurance benefit.',
    ex_scenario_pmjjby_example3_reality: 'They find it difficult to understand the claim forms and verification procedures required.',
    ex_scenario_pmjjby_example3_solution: 'We guided them through each step, helped fill forms correctly, and coordinated with the bank.',

    ex_scenario_pmjjby_example4_title: 'Example 4 – Eligibility Clarification',
    ex_scenario_pmjjby_example4_problem: 'A beneficiary wants to file a claim but is unsure about eligibility.',
    ex_scenario_pmjjby_example4_reality: 'They need to verify whether the policyholder met PMJJBY enrollment conditions at the time.',
    ex_scenario_pmjjby_example4_solution: 'We reviewed enrollment records with the bank and confirmed eligibility before proceeding.',
    ex_scenario_pmjjby_example_head1: '⏱️ Problem:',
    ex_scenario_pmjjby_example_head2: '📋 Reality:',
    ex_scenario_pmjjby_example_head3: '✅ Our Solution:',

    faq_pmjjby_title: 'Frequently Asked Questions',
    faq_pmjjby_description: 'Common questions about PMJJBY',
    faq_pmjjby_q1: 'What is Pradhan Mantri Suraksha Bima Yojana (PMJJBY)?',
    faq_pmjjby_a1: 'PMJJBY is a government accident insurance scheme that provides financial protection for accidental death or disability at an affordable annual premium.',

    faq_pmjjby_q2: 'Who can enroll in PMJJBY?',
    faq_pmjjby_a2: 'Individuals with a savings bank account within the eligible age group (typically 18-70 years) can enroll in the scheme through their bank.',

    faq_pmjjby_q3: 'What type of coverage does PMJJBY provide?',
    faq_pmjjby_a3: 'The scheme typically provides coverage for accidental death and certain types of accidental permanent or partial disabilities as defined in the scheme terms.',

    faq_pmjjby_q4: 'How can beneficiaries know if someone was enrolled in PMJJBY?',
    faq_pmjjby_a4: 'Enrollment is usually linked to the policyholder\'s bank account. Beneficiaries can check with the bank where the account is held to confirm PMJJBY coverage',

    cta_pmjjby_title: 'Need Help Understanding PMJJBY Claims?',
    cta_pmjjby_description: 'Understanding the scheme requirements and documentation procedures can help beneficiaries navigate the claim process more confidently. Contact Yashoda Total Solution for expert assistance with PMJJBY claims.',
    cta_pmjjby_description2: 'Get Free Consultation',
    cta_pmjjby_button: 'Call Now',

    //---------------------- ---------------------- ---------------------- --------------- PMJJBY Page Ends

    //State CM Scheme Page ---------------- ---------------------- ------------------- --------------------

    state_cm_title_backlink1: 'Home',
    state_cm_title_backlink2: 'State CM Insurance Scheme',

    state_cm_title: 'State Chief Minister Insurance Scheme Assistance',
    state_cm_description: 'Understanding state government insurance schemes and how beneficiaries can navigate the claim and application process. Many state governments provide insurance schemes to support citizens with financial protection. Understanding how the scheme works is important for individuals seeking to access these benefits.',

    what_state_cm_title: 'What are State Chief Minister Insurance Schemes?',
    what_state_cm_description: 'State Chief Minister Insurance Schemes are government programs designed to provide financial assistance and protection to eligible citizens, particularly for healthcare expenses or other insured events.',
    what_state_cm_description1: 'These schemes aim to support individuals and families by',
    what_state_cm_description2: 'reducing the financial burden associated with medical treatment',
    what_state_cm_description3: 'and other eligible situations.',
    what_state_cm_description4: 'However, many beneficiaries face challenges understanding the scheme requirements, eligibility criteria, and claim procedures. The documentation process and application steps can sometimes be difficult to navigate, especially for individuals unfamiliar with government insurance systems.',

    what_state_cm_key_features: 'Key aspects of state insurance schemes:',
    what_state_cm_key_feature1: '• Government-backed financial protection programs',
    what_state_cm_key_feature2: '• Healthcare expense coverage for eligible citizens',
    what_state_cm_key_feature3: '• State-specific eligibility criteria and benefits',
    what_state_cm_key_feature4: '• Application and verification procedures',
    what_state_cm_key_feature5: '• Support for medical emergencies and treatment',

    common_challenges_state_cm_title: 'Common Scheme Application Challenges',
    common_challenges_state_cm_description: 'Issues beneficiaries may face during application or claims',
    common_challenges_state_cm_item1: 'Eligibility Confusion',
    common_challenges_state_cm_desc1: 'Uncertainty about whether they qualify for the scheme benefits.',

    common_challenges_state_cm_item2: 'Application Difficulty',
    common_challenges_state_cm_desc2: 'Confusion regarding application procedures and submission process.',

    common_challenges_state_cm_item3: 'Missing Documents',
    common_challenges_state_cm_desc3: 'Difficulty gathering required identity and eligibility documents.',

    common_challenges_state_cm_item4: 'Limited Awareness',
    common_challenges_state_cm_desc4: 'Lack of awareness about available scheme benefits and coverage.',

    common_challenges_state_cm_item5: 'Process Complexity',
    common_challenges_state_cm_desc5: 'Government procedures can be complex for first-time applicants.',

    common_challenges_state_cm_item6: 'Verification Delays',
    common_challenges_state_cm_desc6: 'Processing delays due to incomplete or incorrect applications.',

    what_happens_after_state_cm_title: 'What Happens in Scheme Claim Cases',
    what_happens_after_state_cm_description: 'Understanding the application and claim submission process',
    what_happens_state_cm_item1: 'Scheme Discovery',
    what_happens_state_cm_desc1: 'Beneficiaries often learn about the scheme when they require medical treatment or assistance.',
    what_happens_state_cm_item2: 'Document Collection',
    what_happens_state_cm_desc2: 'Gathering required eligibility documents, identity proofs, and medical records.',
    what_happens_state_cm_item3: 'Government Review',
    what_happens_state_cm_desc3: 'Authorities review documents to verify eligibility and process benefits.',

    why_choose_state_cm_title: 'Why Choose Yashoda Total Solution?',
    why_choose_state_cm_description: 'Expert guidance for state insurance scheme assistance',
    why_choose_state_cm_item1: 'Expert Team',
    why_choose_state_cm_desc1: 'Years of experience handling insurance claim rejection complaints and disputes.',
    why_choose_state_cm_item2: 'Complete Documentation',
    why_choose_state_cm_desc2: 'We prepare all necessary documents, notices, and complaint letters for you.',
    why_choose_state_cm_item3: 'Legal Support',
    why_choose_state_cm_desc3: 'Legal notice drafting and ombudsman complaint filing when needed.',
    why_choose_state_cm_item4: 'High Success Rate',
    why_choose_state_cm_desc4: 'Helped hundreds of customers get compensation and policy resolution.',

    process_flow_state_cm_title: 'Our 5-Step Scheme Assistance Process',
    process_flow_state_cm_description: 'Simplified guidance for state insurance scheme beneficiaries',

    process_flow_state_cm_item1: 'Eligibility Assessment',
    process_flow_state_cm_desc1: 'We help determine if you qualify for the state insurance scheme based on official criteria.',

    process_flow_state_cm_item2: 'Document Preparation',
    process_flow_state_cm_desc2: 'We assist in gathering all required identity, eligibility, and medical documents.',

    process_flow_state_cm_item3: 'Application Form Assistance',
    process_flow_state_cm_desc3: 'We help complete application forms accurately with all necessary information.',

    process_flow_state_cm_item4: 'Submission Support',
    process_flow_state_cm_desc4: 'We guide you through the submission process to government authorities.',

    process_flow_state_cm_item5: 'Follow-Up & Tracking',
    process_flow_state_cm_desc5: 'We track your application status and follow up until benefits are processed.',

    ex_scenario_state_cm_title: 'Real-Life Scheme Assistance Examples',
    ex_scenario_state_cm_description: 'Common scenarios we help resolve',
    ex_scenario_state_cm_example1_title: 'Example 1 – Eligibility Confusion',
    ex_scenario_state_cm_example1_problem: 'A patient requires medical treatment and learns about a state insurance scheme.',
    ex_scenario_state_cm_example1_reality: 'They are unsure whether they qualify for the benefits provided under the program.',
    ex_scenario_state_cm_example1_solution: 'We reviewed eligibility criteria, verified documentation, and confirmed qualification for the scheme.',

    ex_scenario_state_cm_example2_title: 'Example 2 – Documentation Difficulty',
    ex_scenario_state_cm_example2_problem: 'A beneficiary attempts to apply for benefits under the scheme.',
    ex_scenario_state_cm_example2_reality: 'They face challenges collecting the required identity and eligibility documents.',
    ex_scenario_state_cm_example2_solution: 'We provided a document checklist and helped gather all necessary papers for submission.',

    ex_scenario_state_cm_example3_title: 'Example 3 – Claim Process Uncertainty',
    ex_scenario_state_cm_example3_problem: 'A family member seeks to submit a claim after hospital treatment.',
    ex_scenario_state_cm_example3_reality: 'They are uncertain about the application process and verification procedures.',
    ex_scenario_state_cm_example3_solution: 'We guided them step-by-step through the application process and government procedures.',

    ex_scenario_state_cm_example4_title: 'Example 4 – Awareness After Treatment',
    ex_scenario_state_cm_example4_problem: 'A patient undergoes treatment at a hospital.',
    ex_scenario_state_cm_example4_reality: 'They later discover the treatment may have been eligible for support under a state scheme.',
    ex_scenario_state_cm_example4_solution: 'We helped file a retrospective claim and successfully secured partial benefits.',
    ex_scenario_state_cm_example_head1: '⏱️ Problem:',
    ex_scenario_state_cm_example_head2: '📋 Reality:',
    ex_scenario_state_cm_example_head3: '✅ Our Solution:',

    faq_state_cm_title: 'Frequently Asked Questions',
    faq_state_cm_description: 'ommon questions about state insurance schemes',
    faq_state_cm_q1: 'What are State Chief Minister Insurance Schemes?',
    faq_state_cm_a1: 'These are government insurance programs designed to provide financial support to eligible citizens for healthcare or other insured events, specific to each state.',

    faq_state_cm_q2: 'Who can benefit from these schemes?',
    faq_state_cm_a2: 'Eligibility depends on the specific scheme and the criteria defined by the state government, typically based on income, residency, and other factors.',

    faq_state_cm_q3: 'What documents are required for application or claims?',
    faq_state_cm_a3: 'Typical documents may include identity proof (Aadhaar, voter ID), eligibility verification, income certificate, medical records, and application forms.',

    faq_state_cm_q4: 'How can beneficiaries confirm eligibility for the scheme?',
    faq_state_cm_a4: 'Eligibility can usually be verified through official scheme guidelines available on government portals or by contacting the relevant government department.',

    cta_state_cm_title: 'Need Help with State Insurance Schemes?',
    cta_state_cm_description: 'Understanding eligibility requirements and documentation procedures can help beneficiaries navigate the application and claim process more confidently. Contact Yashoda Total Solution for expert assistance.',
    cta_state_cm_description2: 'Get Free Consultation',
    cta_state_cm_button: 'Call Now',

    //---------------------- ---------------------- ---------------------- --------------- State CM Scheme Page Ends

    //Banking & ATM Page ---------------- ---------------------- ------------------- --------------------

    atm_title_backlink1: 'Home',
    atm_title_backlink2: 'Banking & ATM Card Insurance Claim Support',

    atm_title: 'Banking & ATM Card Insurance Claim Support',
    atm_description: 'Understanding insurance benefits linked to bank accounts and ATM cards and how beneficiaries can navigate the claim process. Many banks provide insurance coverage linked to ATM or debit cards, offering financial protection in case of accidental death, disability, or other eligible incidents.',

    what_atm_title: 'Service Overview',
    what_atm_description: 'Many banks offer insurance coverage linked to debit cards or ATM cards as part of their banking services. These policies may provide financial protection to cardholders or their beneficiaries in case of accidental death, disability, or other covered situations.',
    what_atm_description1: 'However, many customers remain unaware that such insurance coverage exists or do not understand the claim process involved.',
    what_atm_description2: 'When an eligible incident occurs, beneficiaries may find it difficult to determine whether the insurance benefit applies and what documents are required to submit a claim.',
    what_atm_description3: 'Yashoda Total Solutions',
    what_atm_description4: 'assists clients in understanding the eligibility criteria, preparing the required documents, and guiding them through the claim submission process to help them access the benefits available under bank-linked insurance policies.',

    what_atm_key_features: 'Typical ATM Card Insurance Claim Process:',
    what_atm_key_feature1: '• ATM Card Issued by Bank → Insurance Coverage Linked to Card',
    what_atm_key_feature2: '• Accidental Incident Occurs',
    what_atm_key_feature3: '• Beneficiary Submits Claim',
    what_atm_key_feature4: '• Claim Verification and Processing',

    common_challenges_atm_title: 'Common ATM Card Insurance Claim Challenges',
    common_challenges_atm_description: 'Beneficiaries may face several challenges when attempting to claim benefits',
    common_challenges_atm_item1: 'Lack of Awareness',
    common_challenges_atm_desc1: 'Beneficiaries are unaware that the ATM card included insurance coverage.',

    common_challenges_atm_item2: 'Eligibility Confusion',
    common_challenges_atm_desc2: 'Confusion about eligibility conditions for insurance claims.',

    common_challenges_atm_item3: 'Missing Documents',
    common_challenges_atm_desc3: 'Difficulty collecting the required documents.',

    common_challenges_atm_item4: 'Claim Process Uncertainty',
    common_challenges_atm_desc4: 'Uncertainty about the claim submission process.',

    common_challenges_atm_item5: 'Verification Delays',
    common_challenges_atm_desc5: 'Delays caused by incomplete or incorrect documentation.',


    what_happens_after_atm_title: 'What Actually Happens in ATM Card Insurance Claim Cases',
    what_happens_after_atm_description: 'In many situations, cardholders are automatically enrolled in insurance coverage when they receive an ATM or debit card from their bank.',
    what_happens_atm_description1: 'However, customers often remain unaware of this coverage until an eligible incident occurs. When such an event happens, beneficiaries may later discover that the cardholder was entitled to insurance benefits.',
    what_happens_atm_description2: 'At that point, beneficiaries must understand the claim process and gather the required documents to submit the claim application.',
    what_happens_atm_description3: 'The bank and insurance provider typically review the submitted documents to verify eligibility and confirm whether the claim meets the policy conditions.',
    what_happens_atm_description4: 'Claim Review Process:',
    what_happens_atm_item1: '• Eligible Incident Occurs',
    what_happens_atm_item2: '• Beneficiary Learns About ATM Card Insurance',
    what_happens_atm_item3: '• Claim Application Prepared',
    what_happens_atm_item4: '• Documents Submitted',
    what_happens_atm_item5: '• Claim Verification and Decision',

    ex_scenario_atm_title: 'Example Scenarios',
    ex_scenario_atm_description: 'Real-world situations where ATM card insurance claims arise',
    ex_scenario_atm_example1_title: 'Example 1 – Family Unaware of ATM Card Insurance',
    ex_scenario_atm_example1_desc: 'A bank customer holds an active ATM card that includes accidental insurance coverage. After an unfortunate accident, the family later learns that the cardholder was eligible for insurance benefits linked to the ATM card.',

    ex_scenario_atm_example2_title: 'Example 2 – Eligibility Requirement Confusion',
    ex_scenario_atm_example2_desc: 'A beneficiary attempts to file a claim but learns that certain eligibility conditions must be met, such as recent ATM card usage or active account status.',

    ex_scenario_atm_example3_title: 'Example 3 – Documentation Challenges',
    ex_scenario_atm_example3_desc: 'A family member tries to submit a claim but struggles to collect the necessary documents required by the bank and insurance provider.',

    ex_scenario_atm_example4_title: 'Example 4 – Claim Procedure Uncertainty',
    ex_scenario_atm_example4_desc: 'A beneficiary approaches the bank to claim the insurance benefit but is unsure about the correct process and documentation required to submit the claim.',

    documentation_atm_title: 'Understanding ATM Card Insurance Claim Requirements',
    documentation_atm_description: 'ATM card insurance claims typically require certain documents and information to verify eligibility and process the claim.',
    documentation_atm_list: [
      'Proof of the eligible incident',
      'Identity and bank account details',
      'ATM or debit card information',
      'Claim application forms',
      'Verification of insurance coverage linked to the card'
    ],
    documentation_atm_description1: 'Understanding these documentation requirements helps beneficiaries prepare the claim application correctly.',
    documentation_atm_description2: 'Documentation Framework:',
    documentation_atm_description3: 'Cardholder Verification → Incident Documentation → Claim Application Form → Bank Account Verification → Claim Evaluation',


    why_choose_atm_title: 'Why Choose Yashoda Total Solution?',
    why_choose_atm_description: 'Trusted support for banking and ATM card insurance claims',
    why_choose_atm_item1: 'Expert Team',
    why_choose_atm_desc1: 'Years of experience handling insurance claim rejection complaints and disputes.',
    why_choose_atm_item2: 'Complete Documentation',
    why_choose_atm_desc2: 'We prepare all necessary documents, notices, and complaint letters for you.',
    why_choose_atm_item3: 'Legal Support',
    why_choose_atm_desc3: 'Legal notice drafting and ombudsman complaint filing when needed.',
    why_choose_atm_item4: 'High Success Rate',
    why_choose_atm_desc4: 'Helped hundreds of customers get compensation and policy resolution.',


    faq_atm_title: 'Frequently Asked Questions',
    faq_atm_q1: 'What is ATM card insurance coverage?',
    faq_atm_a1: 'Some banks provide insurance benefits linked to ATM or debit cards for certain eligible incidents.',

    faq_atm_q2: 'Who can claim ATM card insurance benefits?',
    faq_atm_a2: 'Beneficiaries of the cardholder may be eligible to claim benefits depending on the policy conditions.',

    faq_atm_q3: 'How can someone know if their ATM card includes insurance coverage?',
    faq_atm_a3: 'The bank or the card issuing institution can confirm whether insurance coverage is linked to the ATM card.',

    faq_atm_q4: 'What documents are required for ATM card insurance claims?',
    faq_atm_a4: 'Required documents may include identity verification, incident documentation, and claim forms.',

    cta_atm_title: 'Need Help Understanding ATM Card Insurance Claim Procedures?',
    cta_atm_description: 'Understanding eligibility conditions and documentation requirements can help beneficiaries navigate the claim process more confidently.',
    cta_atm_description2: 'Contact Yashoda Total Solution to learn more about assistance with banking and ATM card insurance claim support.',
    cta_atm_button: 'Contact Us Now',

    //--------------------------------------------------------------------------- Banking & ATM Page Ends


    //PF Page -------------------------------------------------------------------------------------

    //PF Accidental Insurance Page ---------------- ---------------------- ------------------- --------------------

    pf_title_backlink1: 'Home',
    pf_title_backlink2: 'PF Accidental Insurance Claim Assistance',

    pf_title: 'PF Accidental Insurance Claim Assistance',
    pf_description: 'Understanding accidental insurance benefits linked to Provident Fund schemes and how beneficiaries can navigate the claim process. Certain PF schemes provide accidental insurance benefits to eligible members, though many remain unaware of these benefits or face difficulties with claim procedures.',

    what_pf_title: 'Service Overview',
    what_pf_description: 'Some Provident Fund schemes provide accidental insurance coverage to eligible members as part of employee benefit programs. These benefits may provide financial support to the member or their beneficiaries in case of accidental death or disability.',
    what_pf_description1: 'However, many individuals remain unaware that such coverage exists under their PF membership. When an accident occurs, beneficiaries may face confusion about eligibility conditions, claim procedures, and documentation requirements.',
    what_pf_description2: 'In many cases, the process of verifying PF membership details and preparing the necessary documents can be complex.',
    what_pf_description3: 'Yashoda Total Solutions',
    what_pf_description4: 'assists clients by explaining the eligibility criteria, helping with necessary documentation, and guiding them through the claim submission process to access the insurance benefits available under PF-related schemes.',

    what_pf_key_features: 'PF Accidental Insurance Claim Process:',
    what_pf_key_feature1: '• PF Membership Active',
    what_pf_key_feature2: '• Accidental Incident Occurs',
    what_pf_key_feature3: '• Beneficiary Initiates Claim',
    what_pf_key_feature4: '• Documents Submitted for Verification',
    what_pf_key_feature5: '• Claim Evaluation and Processing',

    common_challenges_pf_title: 'Common PF Insurance Claim Challenges',
    common_challenges_pf_description: 'Beneficiaries may encounter several challenges when attempting to claim benefits',
    common_challenges_pf_item1: 'Lack of Awareness',
    common_challenges_pf_desc1: 'Beneficiaries are unaware that PF membership includes accidental insurance coverage.',

    common_challenges_pf_item2: 'Eligibility Confusion',
    common_challenges_pf_desc2: 'Confusion about eligibility conditions for the claim.',

    common_challenges_pf_item3: 'Missing Documentation',
    common_challenges_pf_desc3: 'Difficulty collecting PF membership details and required documents.',

    common_challenges_pf_item4: 'PF Record Verification',
    common_challenges_pf_desc4: 'Uncertainty regarding the claim submission process.',

    common_challenges_pf_item5: 'Claim Processing Delays',
    common_challenges_pf_desc5: 'Delays caused by incomplete documentation.',


    what_happens_after_pf_title: 'What Actually Happens in PF Accidental Insurance Claim Cases',
    what_happens_after_pf_description: 'In many situations, employees are enrolled in PF schemes through their workplace without fully understanding the insurance benefits that may be associated with the program.',
    what_happens_pf_description1: 'After an accidental incident occurs, beneficiaries may later discover that the PF member was eligible for accidental insurance benefits.',
    what_happens_pf_description2: 'At that stage, the beneficiaries must gather the required documents and verify the PF membership details before submitting the claim application.',
    what_happens_pf_description3: 'The concerned authorities and insurance provider then review the submitted documents to confirm eligibility and determine whether the claim meets the conditions defined under the scheme.',
    what_happens_pf_description4: 'Understanding these steps helps beneficiaries navigate the claim process more effectively.',
    what_happens_pf_description5: 'PF Insurance Claim Review Process:',
    what_happens_pf_item1: '• Accidental Incident Occurs',
    what_happens_pf_item2: '• Beneficiary Learns About PF Insurance Coverage',
    what_happens_pf_item3: '• Claim Application Prepared',
    what_happens_pf_item4: '• Documents Submitted',
    what_happens_pf_item5: '• Verification and Claim Decision',

    ex_scenario_pf_title: 'Example Scenarios',
    ex_scenario_pf_description: 'Real-world situations where PF accidental insurance claims arise',
    ex_scenario_pf_example1_title: 'Example 1 – Family Unaware of PF Insurance Coverage',
    ex_scenario_pf_example1_desc: 'An employee is enrolled in a PF scheme through their employer. After an accidental incident, the family later learns that the PF membership included accidental insurance benefits.',

    ex_scenario_pf_example2_title: 'Example 2 – PF Membership Verification',
    ex_scenario_pf_example2_desc: 'A beneficiary attempts to file a claim but must first confirm the PF membership details and eligibility conditions related to the insurance benefit.',

    ex_scenario_pf_example3_title: 'Example 3 – Documentation Difficulty',
    ex_scenario_pf_example3_desc: 'A family member tries to submit the claim but faces challenges collecting the required documents related to PF records and accident verification.',

    ex_scenario_pf_example4_title: 'Example 4 – Claim Procedure Confusion',
    ex_scenario_pf_example4_desc: 'A beneficiary approaches the relevant authority to claim the benefit but finds it difficult to understand the correct process for submitting the claim.',

    documentation_pf_title: 'Understanding PF Insurance Claim Requirements',
    documentation_pf_description: 'PF accidental insurance claims typically require certain documents and information to verify eligibility and process the claim.',
    documentation_pf_list: [
      'Proof of accidental incident',
      'PF membership or account details',
      'Identity and beneficiary information',
      'Claim application forms',
      'Verification of eligibility under the PF scheme'
    ],
    documentation_pf_description1: 'Understanding these documentation requirements helps beneficiaries prepare the claim application properly.',
    documentation_pf_description2: 'PF Insurance Claim Documentation Framework:',
    documentation_pf_description3: 'PF Membership Verification → Incident Documentation → Claim Application Form → Beneficiary Identification → Claim Evaluation',


    why_choose_pf_title: 'Why Yashoda Total Solution?',
    why_choose_pf_description: 'Trusted support for PF accidental insurance claims',
    why_choose_pf_item1: 'Experienced & Professional Team',
    why_choose_pf_desc1: 'Qualified professionals with industry knowledge and operational expertise.',
    why_choose_pf_item2: 'Quick & Transparent Processing',
    why_choose_pf_desc2: 'Systematic workflows supported by clear communication and monitoring.',
    why_choose_pf_item3: 'Customer-First Approach',
    why_choose_pf_desc3: 'Every case handled with attention, empathy, and ethical responsibility.',
    why_choose_pf_item4: 'Technology-Driven Monitoring',
    why_choose_pf_desc4: 'Advanced tracking systems ensure accountability and regular updates.',
    why_choose_pf_item5: 'Trusted Service Partner',
    why_choose_pf_desc5: 'Focused on long-term relationships built on trust, reliability, and service excellence.',


    faq_pf_title: 'Frequently Asked Questions',
    faq_pf_q1: 'What is PF accidental insurance coverage?',
    faq_pf_a1: 'Some Provident Fund schemes provide accidental insurance benefits for eligible members.',

    faq_pf_q2: 'Who can claim PF accidental insurance benefits?',
    faq_pf_a2: 'Beneficiaries of the PF member may be eligible to claim benefits depending on the scheme conditions.',

    faq_pf_q3: 'How can beneficiaries confirm PF insurance coverage?',
    faq_pf_a3: 'PF records and related scheme details can help verify whether insurance coverage applies.',

    faq_pf_q4: 'What documents are required for PF accidental insurance claims?',
    faq_pf_a4: 'Required documents may include PF membership details, incident proof, and claim application forms.',

    cta_pf_title: 'Need Help Understanding PF Accidental Insurance Claim Procedures?',
    cta_pf_description: 'Understanding eligibility conditions and documentation requirements can help beneficiaries navigate the claim process more confidently.',
    cta_pf_description2: 'Contact Yashoda Total Solution to learn more about assistance with PF accidental insurance claim support.',
    cta_pf_button: 'Contact Us Now',

    //--------------------------------------------------------------PF Page Ends

    //Legal Consultation Page ---------------- ---------------------- ------------------- --------------------

    legal_title_backlink1: 'Home',
    legal_title_backlink2: 'Legal Consultation',

    legal_title: 'Legal Consultation',
    legal_description: 'Understanding legal situations clearly and evaluating possible paths before taking formal legal action. Legal consultation helps individuals understand their legal situation, rights, and possible options before initiating any formal legal process.',

    what_legal_title: 'Service Overview',
    what_legal_description: 'Legal consultation is the process of discussing a legal issue with experienced professionals to understand the facts, review documents, and evaluate possible legal options.',
    what_legal_description1: 'Many individuals face uncertainty when dealing with disputes, insurance issues, financial conflicts, or other legal matters. Without proper guidance, it can be difficult to determine whether a case has strong legal grounds or what steps should be taken next.',
    what_legal_description2: 'A consultation allows clients to present their situation and receive a structured review of their documents and evidence.',
    what_legal_description3: 'At',
    what_legal_description4: 'Yashoda Total Solutions',
    what_legal_description5: ', legal consultation focuses on providing a realistic understanding of the situation by carefully reviewing the facts and identifying possible risks and opportunities before proceeding further.',

    what_legal_key_features: 'Legal Consultation Process Flow:',
    what_legal_key_feature1: '• Client Presents Issue',
    what_legal_key_feature2: '• Case Details Reviewed',
    what_legal_key_feature3: '• Documents and Evidence Evaluated',
    what_legal_key_feature4: '• Legal Position Analyzed',
    what_legal_key_feature5: '• Possible Solutions Identified',

    common_situations_legal_title: 'Common Situations Where Legal Consultation Is Needed',
    common_situations_legal_description: 'Individuals and businesses often seek legal consultation when they face situations that require clarity',
    common_situations_legal_item1: 'Financial Disputes',
    common_situations_legal_desc1: 'Disputes involving financial transactions that need legal clarity and evaluation.',

    common_situations_legal_item2: 'Insurance Issues',
    common_situations_legal_desc2: 'Confusion regarding insurance claims or settlements requiring legal assessment.',

    common_situations_legal_item3: 'Contract Conflicts',
    common_situations_legal_desc3: 'Disagreements related to contracts or services that need legal review.',

    common_situations_legal_item4: 'Legal Notices',
    common_situations_legal_desc4: 'Legal notices received from another party requiring professional guidance.',

    common_situations_legal_item5: 'Uncertain Legal Position',
    common_situations_legal_desc5: 'Uncertainty about the legal strength of a case before proceeding further.',


    why_choose_legal_title: 'Why Yashoda Total Solution?',
    why_choose_legal_description: 'Trusted support for legal consultation and case evaluation',
    why_choose_legal_item1: 'Experienced & Professional Team',
    why_choose_legal_desc1: 'Qualified professionals with industry knowledge and operational expertise.',
    why_choose_legal_item2: 'Quick & Transparent Processing',
    why_choose_legal_desc2: 'Systematic workflows supported by clear communication and monitoring.',
    why_choose_legal_item3: 'Customer-First Approach',
    why_choose_legal_desc3: 'Every case handled with attention, empathy, and ethical responsibility.',
    why_choose_legal_item4: 'Trusted Service Partner',
    why_choose_legal_desc4: 'Focused on long-term relationships built on trust, reliability, and service excellence.',


    process_legal_title: 'Our 5-Step Legal Consultation Process',
    process_legal_description: 'Simple, transparent, and effective approach',
    process_legal_step1_title: 'Initial Consultation & Case Review',
    process_legal_step1_desc: 'We listen to your situation, understand the background, and review all relevant documents and facts you provide.',

    process_legal_step2_title: 'Evidence & Document Analysis',
    process_legal_step2_desc: 'We carefully examine your documents, agreements, communications, and evidence to assess the legal position.',

    process_legal_step3_title: 'Legal Strength Evaluation',
    process_legal_step3_desc: 'We analyze the legal merits of your case, identify strengths, weaknesses, and potential risks involved.',

    process_legal_step4_title: 'Options & Strategy Discussion',
    process_legal_step4_desc: 'We explain possible legal options, strategies, and realistic outcomes based on the facts and evidence.',

    process_legal_step5_title: 'Recommendation & Next Steps',
    process_legal_step5_desc: 'We provide clear recommendations and guide you on the best course of action to resolve your matter.',


    ex_scenario_legal_title: 'Real-Life Consultation Examples',
    ex_scenario_legal_description: 'These are common scenarios we help evaluate',
    ex_scenario_legal_problem_label: '❌ Problem:',
    ex_scenario_legal_reality_label: '⚠️ Reality:',
    ex_scenario_legal_solution_label: '✅ Our Solution:',

    ex_scenario_legal_case1_title: 'Case 1: Insurance Claim Dispute',
    ex_scenario_legal_case1_problem: 'A policyholder believes their insurance claim was not handled properly and wants to understand whether the situation has legal merit before proceeding further.',
    ex_scenario_legal_case1_reality: 'After reviewing the policy documents and claim correspondence, it was found that the claim rejection had procedural errors.',
    ex_scenario_legal_case1_solution: 'We provided consultation showing the legal grounds for challenging the rejection. Client filed a complaint with the ombudsman.',

    ex_scenario_legal_case2_title: 'Case 2: Contractual Disagreement',
    ex_scenario_legal_case2_problem: 'Two parties enter into an agreement, but one party fails to meet the agreed terms. The affected party seeks consultation to understand possible legal options.',
    ex_scenario_legal_case2_reality: 'Contract review revealed specific breach of contract clauses and clear evidence of non-performance.',
    ex_scenario_legal_case2_solution: 'We advised on the legal remedy options including notice period and possible compensation claims under the contract.',

    ex_scenario_legal_case3_title: 'Case 3: Financial Transaction Conflict',
    ex_scenario_legal_case3_problem: 'An individual faces a dispute related to money lent to another party and wants to know whether legal action is possible.',
    ex_scenario_legal_case3_reality: 'Limited documentation was available, making it difficult to prove the transaction terms and repayment agreement.',
    ex_scenario_legal_case3_solution: 'We explained the importance of written evidence and suggested alternative dispute resolution before legal action.',

    ex_scenario_legal_case4_title: 'Case 4: Legal Notice Received',
    ex_scenario_legal_case4_problem: 'A person receives a legal notice and wants to understand the implications of the notice and the appropriate response.',
    ex_scenario_legal_case4_reality: 'The legal notice contained claims that were partially justified but had factual inaccuracies.',
    ex_scenario_legal_case4_solution: 'We helped draft a detailed response addressing each claim point-by-point and suggested settlement discussion.',


    faq_legal_title: 'Frequently Asked Questions',
    faq_legal_description: 'Common questions about legal consultation',
    faq_legal_q1: 'What is a legal consultation?',
    faq_legal_a1: 'Legal consultation is a discussion with legal professionals to understand a legal issue and evaluate possible options.',

    faq_legal_q2: 'What should someone bring to a legal consultation?',
    faq_legal_a2: 'Relevant documents, agreements, and details related to the dispute can help provide a clearer understanding of the situation.',

    faq_legal_q3: 'Can legal consultation help determine whether a case is strong?',
    faq_legal_a3: 'Yes, reviewing the documents and facts can help identify the strengths and potential risks of the case.',

    faq_legal_q4: 'Is legal consultation useful before sending a legal notice?',
    faq_legal_a4: 'Yes, consultation can help determine whether sending a legal notice or taking further action is appropriate.',

    cta_legal_title: 'Need Clarity About Your Legal Situation?',
    cta_legal_description: 'Understanding the facts, documents, and possible legal options can help individuals make informed decisions. Contact us today for a professional legal consultation.',
    cta_legal_button1: 'Get Free Consultation',
    cta_legal_button2: 'Call Now',

    //-----------------------------------------------------------Legal Consulation Page Ends

    // Legal Drafting Page ------------------------------------------------------------------


    drafting_title_backlink1: 'Home',
    drafting_title_backlink2: 'Legal Drafting & Verification Support',

    drafting_title: 'Legal Drafting & Verification Support',
    drafting_description: 'Ensuring clarity, accuracy, and legal protection in important documents and agreements. Legal documents form the foundation of many personal, financial, and business decisions. Even a small mistake or unclear wording can create misunderstandings or legal complications later.',

    what_drafting_title: 'Service Overview',
    what_drafting_description: 'Legal drafting involves preparing documents that clearly describe rights, responsibilities, and agreements between parties. These documents may include contracts, notices, agreements, or other legal records used in personal, business, or administrative matters.',
    what_drafting_description1: 'Verification of legal documents is equally important. Reviewing a document before it is signed or submitted can help identify unclear terms, missing clauses, or potential legal risks.',
    what_drafting_description2: 'Many individuals and businesses may not fully understand the legal language used in documents, which can lead to confusion or unintended consequences.',
    what_drafting_description3: 'Yashoda Total Solutions',
    what_drafting_description4: 'assists clients by carefully reviewing documents, verifying the legal structure, and preparing well-organized drafts that clearly communicate the intended terms and conditions.',

    what_drafting_key_features: 'Legal Drafting Process Flow:',
    what_drafting_key_feature1: '• Client Explains Requirement',
    what_drafting_key_feature2: '• Document Details Collected',
    what_drafting_key_feature3: '• Draft Prepared or Existing Document Reviewed',
    what_drafting_key_feature4: '• Legal Terms Structured Clearly',
    what_drafting_key_feature5: '• Final Document Verified',

    common_situations_drafting_title: 'Common Situations Where Legal Drafting Is Needed',
    common_situations_drafting_description: 'Legal drafting and verification may be required in many situations where written agreements are necessary',
    common_situations_drafting_item1: 'Business Agreements',
    common_situations_drafting_desc1: 'Preparing contracts or agreements between parties with clear terms and responsibilities.',

    common_situations_drafting_item2: 'Property Documents',
    common_situations_drafting_desc2: 'Drafting property or rental agreements that define rights and obligations.',

    common_situations_drafting_item3: 'Legal Notices',
    common_situations_drafting_desc3: 'Responding to or issuing legal notices with proper structure and language.',

    common_situations_drafting_item4: 'Official Applications',
    common_situations_drafting_desc4: 'Preparing formal complaints or legal statements for official submission.',

    common_situations_drafting_item5: 'Contract Verification',
    common_situations_drafting_desc5: 'Reviewing documents before signing or submission to identify risks.',


    why_choose_drafting_title: 'Why Yashoda Total Solution?',
    why_choose_drafting_description: 'Trusted support for legal drafting and document verification',
    why_choose_drafting_item1: 'Experienced & Professional Team',
    why_choose_drafting_desc1: 'Qualified professionals with industry knowledge and operational expertise.',
    why_choose_drafting_item2: 'Quick & Transparent Processing',
    why_choose_drafting_desc2: 'Systematic workflows supported by clear communication and monitoring.',
    why_choose_drafting_item3: 'Customer-First Approach',
    why_choose_drafting_desc3: 'Every case handled with attention, empathy, and ethical responsibility.',
    why_choose_drafting_item4: 'Trusted Service Partner',
    why_choose_drafting_desc4: 'Focused on long-term relationships built on trust, reliability, and service excellence.',


    process_drafting_title: 'Our 5-Step Document Drafting Process',
    process_drafting_description: 'Simple, transparent, and effective approach',
    process_drafting_step1_title: 'Requirement Understanding',
    process_drafting_step1_desc: 'We discuss your needs, understand the purpose of the document, and gather all relevant information about the parties involved.',

    process_drafting_step2_title: 'Information & Evidence Collection',
    process_drafting_step2_desc: 'We collect all necessary details, supporting documents, and facts required to draft or verify the legal document.',

    process_drafting_step3_title: 'Document Drafting or Review',
    process_drafting_step3_desc: 'We prepare a structured draft with clear legal terms or thoroughly review existing documents for clarity and completeness.',

    process_drafting_step4_title: 'Legal Structure Verification',
    process_drafting_step4_desc: 'We verify that all legal terms, clauses, and conditions are properly defined and aligned with requirements.',

    process_drafting_step5_title: 'Final Document Delivery',
    process_drafting_step5_desc: 'We provide the final verified document with explanations of key terms and answer any questions you may have.',


    ex_scenario_drafting_title: 'Real-Life Drafting & Verification Examples',
    ex_scenario_drafting_description: 'These are common scenarios we help with',
    ex_scenario_drafting_problem_label: '❌ Problem:',
    ex_scenario_drafting_reality_label: '⚠️ Reality:',
    ex_scenario_drafting_solution_label: '✅ Our Solution:',

    ex_scenario_drafting_case1_title: 'Case 1: Business Agreement Drafting',
    ex_scenario_drafting_case1_problem: 'Two business partners plan to start a joint venture and require a written agreement outlining their roles, financial contributions, and responsibilities.',
    ex_scenario_drafting_case1_reality: 'Without clear documentation, disagreements about roles and profit-sharing could arise later, causing business conflicts.',
    ex_scenario_drafting_case1_solution: 'We drafted a comprehensive partnership agreement defining each partner\'s duties, capital contributions, profit distribution, and exit terms.',

    ex_scenario_drafting_case2_title: 'Case 2: Property Rental Agreement',
    ex_scenario_drafting_case2_problem: 'A property owner wants to create a rental agreement that clearly defines the terms of rent, duration of tenancy, and responsibilities of both parties.',
    ex_scenario_drafting_case2_reality: 'Many rental disputes arise from unclear terms regarding maintenance, rent increases, and notice periods.',
    ex_scenario_drafting_case2_solution: 'We prepared a detailed rental agreement covering rent payment terms, maintenance responsibilities, security deposit, and termination clauses.',

    ex_scenario_drafting_case3_title: 'Case 3: Legal Notice Reply',
    ex_scenario_drafting_case3_problem: 'An individual receives a legal notice and needs to prepare a structured response explaining their position and addressing the claims mentioned in the notice.',
    ex_scenario_drafting_case3_reality: 'The legal notice contained allegations that needed a point-by-point response with supporting facts and legal references.',
    ex_scenario_drafting_case3_solution: 'We drafted a comprehensive reply notice addressing each allegation, providing factual clarifications and reserving legal rights.',

    ex_scenario_drafting_case4_title: 'Case 4: Document Verification Before Signing',
    ex_scenario_drafting_case4_problem: 'A person is asked to sign a contract and wants to ensure that the terms and conditions are clearly written and legally appropriate before signing.',
    ex_scenario_drafting_case4_reality: 'The contract contained ambiguous clauses regarding payment terms, liability limitations, and termination conditions.',
    ex_scenario_drafting_case4_solution: 'We reviewed the contract, highlighted problematic clauses, suggested modifications, and helped negotiate better terms.',


    faq_drafting_title: 'Frequently Asked Questions',
    faq_drafting_description: 'Common questions about legal drafting and verification',
    faq_drafting_q1: 'What is legal drafting?',
    faq_drafting_a1: 'Legal drafting is the preparation of written legal documents such as agreements, notices, or contracts.',

    faq_drafting_q2: 'Why is document verification important?',
    faq_drafting_a2: 'Verification helps identify unclear clauses, missing information, or potential legal risks before the document is used.',

    faq_drafting_q3: 'Who may need legal drafting services?',
    faq_drafting_a3: 'Individuals, business owners, property owners, and organizations may require drafting support for various legal documents.',

    faq_drafting_q4: 'Can existing documents be reviewed before signing?',
    faq_drafting_a4: 'Yes, documents can be reviewed and verified to ensure the terms are clear and appropriate.',

    cta_drafting_title: 'Need Help with Document Drafting or Verification?',
    cta_drafting_description: 'Understanding the structure and legal wording of documents can help avoid confusion and reduce the chances of disputes. Contact us today for professional drafting support.',
    cta_drafting_button1: 'Get Free Consultation',
    cta_drafting_button2: 'Call Now',


    // ------------------------------------------------ Legal Drafting Page Ends

    //Consumer Cases Page --------------------------------------------------------------------

    consumer_title_backlink1: 'Home',
    consumer_title_backlink2: 'Consumer Protection Support',

    consumer_title: 'Consumer Protection Support',
    consumer_description: 'Understanding consumer rights and addressing disputes related to defective products, poor services, or unfair trade practices. Under the Consumer Protection Act, 2019, consumers have legal rights that protect them from defective products, poor service quality, misleading advertisements, and unfair trade practices.',

    what_consumer_title: 'Service Overview',
    what_consumer_description: 'Consumer protection laws are designed to ensure that customers receive fair treatment when purchasing products or services.',
    what_consumer_description1: 'However, many consumers face difficulties when they encounter problems such as defective goods, poor service quality, misleading advertisements, or refusal of refunds.',
    what_consumer_description2: 'In such situations, understanding the consumer protection process and available options becomes important.',
    what_consumer_description3: 'Consumer Protection Support helps individuals understand their rights as consumers and the procedures involved in addressing disputes with businesses or service providers.',
    what_consumer_description4: 'Yashoda Total Solutions',
    what_consumer_description5: 'assists clients by helping them understand consumer protection procedures, preparing necessary documentation, and guiding them through the appropriate steps to address consumer disputes.',

    what_consumer_key_features: 'Consumer Dispute Resolution Flow:',
    what_consumer_key_feature1: '• Product or Service Purchased',
    what_consumer_key_feature2: '• Consumer Faces Problem',
    what_consumer_key_feature3: '• Complaint Submitted',
    what_consumer_key_feature4: '• Issue Reviewed by Authorities',
    what_consumer_key_feature5: '• Resolution or Compensation',

    common_disputes_consumer_title: 'Common Types of Consumer Disputes',
    common_disputes_consumer_description: 'Consumers may face different types of disputes while purchasing goods or using services',
    common_disputes_consumer_item1: 'Defective Products',
    common_disputes_consumer_desc1: 'Defective or malfunctioning products that do not work as expected or promised.',

    common_disputes_consumer_item2: 'Service Deficiency',
    common_disputes_consumer_desc2: 'Poor quality or incomplete services that fail to meet stated standards.',

    common_disputes_consumer_item3: 'Misleading Advertisements',
    common_disputes_consumer_desc3: 'False claims or exaggerated promises in advertisements that mislead consumers.',

    common_disputes_consumer_item4: 'Overcharging',
    common_disputes_consumer_desc4: 'Charging above the stated price or adding hidden charges without disclosure.',

    common_disputes_consumer_item5: 'Refund Refusal',
    common_disputes_consumer_desc5: 'Refusal to provide refunds or replacements for defective or unsuitable products.',


    why_choose_consumer_title: 'Why Yashoda Total Solution?',
    why_choose_consumer_description: 'Trusted support for consumer protection and dispute resolution',
    why_choose_consumer_item1: 'Experienced & Professional Team',
    why_choose_consumer_desc1: 'Qualified professionals with industry knowledge and operational expertise.',
    why_choose_consumer_item2: 'Quick & Transparent Processing',
    why_choose_consumer_desc2: 'Systematic workflows supported by clear communication and monitoring.',
    why_choose_consumer_item3: 'Customer-First Approach',
    why_choose_consumer_desc3: 'Every case handled with attention, empathy, and ethical responsibility.',
    why_choose_consumer_item4: 'Trusted Service Partner',
    why_choose_consumer_desc4: 'Focused on long-term relationships built on trust, reliability, and service excellence.',


    process_consumer_title: 'Our 6-Step Consumer Complaint Process',
    process_consumer_description: 'Simple, transparent, and effective approach',
    process_consumer_step1_title: 'Case Understanding & Documentation Review',
    process_consumer_step1_desc: 'We understand your consumer issue, review purchase documents, and evaluate the nature of the dispute.',

    process_consumer_step2_title: 'Consumer Rights Assessment',
    process_consumer_step2_desc: 'We assess your rights under consumer protection laws and determine the validity of your complaint.',

    process_consumer_step3_title: 'Evidence & Proof Collection',
    process_consumer_step3_desc: 'We help gather all necessary evidence including purchase invoices, communication records, and product details.',

    process_consumer_step4_title: 'Complaint Drafting & Filing',
    process_consumer_step4_desc: 'We prepare a detailed consumer complaint and file it with the appropriate consumer forum or authority.',

    process_consumer_step5_title: 'Follow-up & Escalation',
    process_consumer_step5_desc: 'We follow up on your complaint and escalate to higher forums if needed for resolution.',

    process_consumer_step6_title: 'Resolution & Compensation',
    process_consumer_step6_desc: 'We ensure you receive the compensation, replacement, refund, or corrective action you deserve.',


    ex_scenario_consumer_title: 'Real-Life Consumer Dispute Examples',
    ex_scenario_consumer_description: 'These are common scenarios we help resolve',
    ex_scenario_consumer_problem_label: '❌ Problem:',
    ex_scenario_consumer_reality_label: '⚠️ Reality:',
    ex_scenario_consumer_solution_label: '✅ Our Solution:',

    ex_scenario_consumer_case1_title: 'Case 1: Defective Product',
    ex_scenario_consumer_case1_problem: 'A customer purchases a home appliance that stops working shortly after purchase. Despite contacting the seller multiple times, the issue is not resolved.',
    ex_scenario_consumer_case1_reality: 'The seller refused to replace the product, claiming the warranty period had expired even though the defect occurred within the warranty period.',
    ex_scenario_consumer_case1_solution: 'We filed a consumer complaint with documentation proving the defect timeline. The consumer forum ordered a full replacement and compensation for inconvenience.',

    ex_scenario_consumer_case2_title: 'Case 2: Poor Service Quality',
    ex_scenario_consumer_case2_problem: 'A customer pays for a service but receives incomplete or unsatisfactory service from the provider.',
    ex_scenario_consumer_case2_reality: 'The service provider delivered only 50% of the promised work and refused to complete it or provide a refund.',
    ex_scenario_consumer_case2_solution: 'We filed a complaint under consumer protection law. The provider was ordered to complete the service and pay penalty for deficiency.',

    ex_scenario_consumer_case3_title: 'Case 3: Misleading Advertisement',
    ex_scenario_consumer_case3_problem: 'A consumer purchases a product based on advertising claims that later turn out to be inaccurate or exaggerated.',
    ex_scenario_consumer_case3_reality: 'The product features advertised were completely false, and the actual product was of inferior quality with missing features.',
    ex_scenario_consumer_case3_solution: 'We proved misleading advertisement with evidence. The consumer received a full refund plus compensation for unfair trade practice.',

    ex_scenario_consumer_case4_title: 'Case 4: Online Purchase Dispute',
    ex_scenario_consumer_case4_problem: 'A customer orders a product from an e-commerce platform but receives a different product and struggles to obtain a refund or replacement.',
    ex_scenario_consumer_case4_reality: 'The e-commerce platform kept delaying the refund citing various procedural reasons and offered only partial compensation.',
    ex_scenario_consumer_case4_solution: 'We escalated to the consumer forum with proof of wrong product delivery. Full refund was ordered along with compensation for harassment.',


    faq_consumer_title: 'Frequently Asked Questions',
    faq_consumer_description: 'Common questions about consumer protection',
    faq_consumer_q1: 'What is consumer protection support?',
    faq_consumer_a1: 'It involves understanding consumer rights and addressing disputes related to products or services under the Consumer Protection Act.',

    faq_consumer_q2: 'What types of issues can be raised under consumer protection?',
    faq_consumer_a2: 'Issues such as defective goods, poor service, misleading advertisements, and refund disputes may be addressed under consumer protection laws.',

    faq_consumer_q3: 'What documents are required for a consumer complaint?',
    faq_consumer_a3: 'Typical documents include purchase invoices, communication records, product details, and a description of the issue faced.',

    faq_consumer_q4: 'Can online purchase disputes be raised under consumer protection laws?',
    faq_consumer_a4: 'Yes, disputes related to online purchases from e-commerce platforms also fall under consumer protection regulations.',

    cta_consumer_title: 'Facing Problems with a Product or Service?',
    cta_consumer_description: 'Understanding your consumer rights and the complaint process can help you address disputes more effectively. Contact us today for professional consumer protection support.',
    cta_consumer_button1: 'Get Free Consultation',
    cta_consumer_button2: 'Call Now',

    //-------------------------------------------------------------------- Consumer Cases Page Ends

    // Civil Dispute Support Page -----------------------------------------------------------------

    civil_title_backlink1: 'Home',
    civil_title_backlink2: 'Civil Dispute Support',

    civil_title: 'Civil Dispute Support',
    civil_description: 'Understanding civil disputes and identifying the appropriate legal approach for resolving personal, financial, and property-related conflicts. Many disagreements between individuals or businesses fall under civil law rather than criminal law.',

    what_civil_title: 'Service Overview',
    what_civil_description: 'Civil disputes are legal disagreements between individuals, organizations, or businesses regarding rights, responsibilities, or obligations.',
    what_civil_description1: 'These disputes may involve property matters, contractual disagreements, financial recovery, or family-related legal issues.',
    what_civil_description2: 'Unlike criminal matters, civil cases are typically resolved through legal forums or courts that examine evidence, agreements, and relevant laws before determining a resolution.',
    what_civil_description3: 'However, many individuals may find the civil dispute process complex because it involves documentation, legal procedures, and careful evaluation of evidence.',
    what_civil_description4: 'Yashoda Total Solutions',
    what_civil_description5: 'assists clients by helping them understand the nature of their dispute, organizing the necessary documentation, and guiding them through the appropriate steps involved in addressing civil matters.',

    what_civil_key_features: 'Civil Dispute Resolution Flow:',
    what_civil_key_feature1: '• Dispute Identified',
    what_civil_key_feature2: '• Case Details Examined',
    what_civil_key_feature3: '• Evidence and Documents Collected',
    what_civil_key_feature4: '• Legal Strategy Determined',
    what_civil_key_feature5: '• Resolution Process Initiated',

    common_types_civil_title: 'Common Types of Civil Disputes',
    common_types_civil_description: 'Civil disputes can arise in various personal and professional situations',
    common_types_civil_item1: 'Property Disputes',
    common_types_civil_desc1: 'Property or land ownership disagreements including boundary disputes and title issues.',

    common_types_civil_item2: 'Family & Inheritance Matters',
    common_types_civil_desc2: 'Inheritance disputes and family-related legal matters requiring resolution.',

    common_types_civil_item3: 'Financial Recovery Issues',
    common_types_civil_desc3: 'Financial or debt recovery matters including loan repayment disputes.',

    common_types_civil_item4: 'Tenant & Landlord Conflicts',
    common_types_civil_desc4: 'Landlord and tenant conflicts regarding rent, maintenance, or eviction.',

    common_types_civil_item5: 'Contractual Breaches',
    common_types_civil_desc5: 'Breach of contracts or agreements between parties in business or personal matters.',


    why_choose_civil_title: 'Why Yashoda Total Solution?',
    why_choose_civil_description: 'Trusted support for civil dispute resolution and legal assistance',
    why_choose_civil_item1: 'Experienced & Professional Team',
    why_choose_civil_desc1: 'Qualified professionals with industry knowledge and operational expertise.',
    why_choose_civil_item2: 'Quick & Transparent Processing',
    why_choose_civil_desc2: 'Systematic workflows supported by clear communication and monitoring.',
    why_choose_civil_item3: 'Customer-First Approach',
    why_choose_civil_desc3: 'Every case handled with attention, empathy, and ethical responsibility.',
    why_choose_civil_item4: 'Trusted Service Partner',
    why_choose_civil_desc4: 'Focused on long-term relationships built on trust, reliability, and service excellence.',


    process_civil_title: 'Our 6-Step Civil Dispute Resolution Process',
    process_civil_description: 'Simple, transparent, and effective approach',
    process_civil_step1_title: 'Dispute Understanding & Assessment',
    process_civil_step1_desc: 'We understand your civil dispute, review the situation, and assess the nature and merits of the case.',

    process_civil_step2_title: 'Documentation & Evidence Review',
    process_civil_step2_desc: 'We examine all relevant documents, agreements, records, and evidence related to the dispute.',

    process_civil_step3_title: 'Legal Position Evaluation',
    process_civil_step3_desc: 'We evaluate your legal position, rights, and obligations under applicable civil laws.',

    process_civil_step4_title: 'Strategy & Settlement Discussion',
    process_civil_step4_desc: 'We discuss possible resolution strategies including settlement options and legal proceedings.',

    process_civil_step5_title: 'Legal Action & Filing',
    process_civil_step5_desc: 'If required, we assist in filing the case with appropriate legal forums and prepare necessary documentation.',

    process_civil_step6_title: 'Follow-up & Resolution',
    process_civil_step6_desc: 'We follow up on the case proceedings and work toward achieving fair resolution.',


    ex_scenario_civil_title: 'Real-Life Civil Dispute Examples',
    ex_scenario_civil_description: 'These are common scenarios we help resolve',
    ex_scenario_civil_problem_label: '❌ Problem:',
    ex_scenario_civil_reality_label: '⚠️ Reality:',
    ex_scenario_civil_solution_label: '✅ Our Solution:',

    ex_scenario_civil_case1_title: 'Case 1: Property Ownership Dispute',
    ex_scenario_civil_case1_problem: 'Two family members claim ownership of the same piece of ancestral property, leading to a disagreement regarding rights and usage.',
    ex_scenario_civil_case1_reality: 'Both parties had partial documentation but no clear registered ownership. Years of occupation without legal clarity led to escalating conflict.',
    ex_scenario_civil_case1_solution: 'We reviewed all documents, established legal timelines, and filed a partition suit. The property was divided based on legal inheritance rights.',

    ex_scenario_civil_case2_title: 'Case 2: Financial Recovery Issue',
    ex_scenario_civil_case2_problem: 'An individual lends money to another person but faces difficulty recovering the amount despite repeated requests.',
    ex_scenario_civil_case2_reality: 'The borrower acknowledged the debt verbally but refused repayment, claiming financial hardship without legal documentation.',
    ex_scenario_civil_case2_solution: 'We collected evidence including bank transfers and communications. Filed a civil suit for recovery and obtained a court decree for repayment.',

    ex_scenario_civil_case3_title: 'Case 3: Tenant and Landlord Disagreement',
    ex_scenario_civil_case3_problem: 'A landlord faces issues with rent payment delays, while the tenant disputes certain conditions mentioned in the rental agreement.',
    ex_scenario_civil_case3_reality: 'The rental agreement had ambiguous clauses about maintenance responsibilities, leading to payment disputes.',
    ex_scenario_civil_case3_solution: 'We clarified agreement terms, facilitated mediation, and helped draft a clear addendum resolving the maintenance dispute.',

    ex_scenario_civil_case4_title: 'Case 4: Contract Breach',
    ex_scenario_civil_case4_problem: 'A business agreement is signed between two parties, but one party fails to fulfill the agreed responsibilities.',
    ex_scenario_civil_case4_reality: 'One party delivered substandard work and missed deadlines, causing financial losses to the other party.',
    ex_scenario_civil_case4_solution: 'We proved breach of contract with documentation, filed a civil suit, and secured compensation for losses plus contract termination.',


    faq_civil_title: 'Frequently Asked Questions',
    faq_civil_description: 'Common questions about civil disputes',
    faq_civil_q1: 'What is a civil dispute?',
    faq_civil_a1: 'A civil dispute is a legal disagreement between individuals or organizations related to rights, responsibilities, or obligations under civil law.',

    faq_civil_q2: 'What types of issues fall under civil disputes?',
    faq_civil_a2: 'Common civil disputes involve property matters, financial recovery, contract breaches, landlord-tenant issues, and family-related legal matters.',

    faq_civil_q3: 'Can civil disputes be resolved without going to court?',
    faq_civil_a3: 'In some cases, disputes may be resolved through communication, mediation, or settlement discussions before pursuing formal legal proceedings.',

    faq_civil_q4: 'What documents are usually required in civil disputes?',
    faq_civil_a4: 'Relevant agreements, property records, financial documents, communication history, and evidence related to the dispute are typically required.',

    cta_civil_title: 'Facing a Civil Dispute Related to Property, Finances, or Agreements?',
    cta_civil_description: 'Understanding the nature of the dispute and organizing the necessary documents can help individuals approach civil matters more effectively. Contact us today for professional civil dispute support.',
    cta_civil_button1: 'Get Free Consultation',
    cta_civil_button2: 'Call Now',

    //-------------------------------------------------------------------- Civil Dispute Support Page Ends

    // Check Bounce Page -----------------------------------------------------------------------------

    cheque_title_backlink1: 'Home',
    cheque_title_backlink2: 'Cheque Bounce Cases',

    cheque_title: 'Cheque Bounce Case Support',
    cheque_description: 'Understanding cheque bounce situations and the legal process available for recovering unpaid amounts. A cheque bounce occurs when a bank refuses to process a cheque due to reasons such as insufficient funds or account-related issues, creating financial stress for individuals or businesses expecting payment.',

    what_cheque_title: 'Service Overview',
    what_cheque_description: 'Cheque bounce cases arise when a cheque issued by one party is returned unpaid by the bank. This may occur due to insufficient funds, closed accounts, signature mismatches, or other banking reasons.',
    what_cheque_description1: 'For the person expecting payment, a bounced cheque can create financial uncertainty and delays in receiving the owed amount.',
    what_cheque_description2: 'The law provides specific procedures that must be followed in such situations. These procedures involve receiving the cheque return memo, sending a legal notice within a specified time period, and initiating further legal steps if the payment is not made.',
    what_cheque_description3: 'Yashoda Total Solutions',
    what_cheque_description4: 'assists individuals and businesses by helping them understand the process involved in cheque bounce cases and guiding them through the documentation and procedural steps required to address the issue.',

    what_cheque_key_features: 'Cheque Bounce Legal Process Flow:',
    what_cheque_key_feature1: '• Cheque Issued',
    what_cheque_key_feature2: '• Cheque Deposited',
    what_cheque_key_feature3: '• Cheque Bounced',
    what_cheque_key_feature4: '• Return Memo Issued by Bank',
    what_cheque_key_feature5: '• Legal Notice Sent',

    common_indicators_cheque_title: 'Common Signs of Cheque Bounce Situations',
    common_indicators_cheque_description: 'Certain situations may indicate that a cheque bounce issue has occurred',
    common_indicators_cheque_item1: 'Cheque Returned',
    common_indicators_cheque_desc1: 'Bank returns the cheque unpaid due to insufficient funds or other issues.',

    common_indicators_cheque_item2: 'Return Memo Issued',
    common_indicators_cheque_desc2: 'Cheque return memo issued by the bank explaining the reason for bounce.',

    common_indicators_cheque_item3: 'Payment Delay',
    common_indicators_cheque_desc3: 'Delay in receiving promised payment creates financial uncertainty.',

    common_indicators_cheque_item4: 'Communication Dispute',
    common_indicators_cheque_desc4: 'Communication disputes between payer and receiver regarding payment.',

    common_indicators_cheque_item5: 'Legal Action Considered',
    common_indicators_cheque_desc5: 'Uncertainty regarding the next legal steps to recover the amount.',


    why_choose_cheque_title: 'Why Yashoda Total Solution?',
    why_choose_cheque_description: 'Trusted support for cheque bounce case resolution and recovery',
    why_choose_cheque_item1: 'Experienced & Professional Team',
    why_choose_cheque_desc1: 'Qualified professionals with industry knowledge and operational expertise.',
    why_choose_cheque_item2: 'Quick & Transparent Processing',
    why_choose_cheque_desc2: 'Systematic workflows supported by clear communication and monitoring.',
    why_choose_cheque_item3: 'Customer-First Approach',
    why_choose_cheque_desc3: 'Every case handled with attention, empathy, and ethical responsibility.',
    why_choose_cheque_item4: 'Trusted Service Partner',
    why_choose_cheque_desc4: 'Focused on long-term relationships built on trust, reliability, and service excellence.',


    process_cheque_title: 'Our 6-Step Cheque Bounce Resolution Process',
    process_cheque_description: 'Simple, transparent, and effective approach',
    process_cheque_step1_title: 'Case Review & Documentation Check',
    process_cheque_step1_desc: 'We review the bounced cheque, bank return memo, and understand the complete situation and timeline.',

    process_cheque_step2_title: 'Evidence Collection & Verification',
    process_cheque_step2_desc: 'We collect and verify all documents including the original cheque, return memo, and transaction records.',

    process_cheque_step3_title: 'Legal Notice Preparation',
    process_cheque_step3_desc: 'We prepare and send a legally compliant notice to the cheque issuer within the stipulated time period.',

    process_cheque_step4_title: 'Response Monitoring & Follow-up',
    process_cheque_step4_desc: 'We monitor the response to the legal notice and follow up within the prescribed legal timeline.',

    process_cheque_step5_title: 'Complaint Filing & Court Proceedings',
    process_cheque_step5_desc: 'If payment is not made, we assist in filing the complaint under Section 138 of Negotiable Instruments Act.',

    process_cheque_step6_title: 'Recovery & Resolution',
    process_cheque_step6_desc: 'We follow up on court proceedings and work toward achieving payment recovery or legal resolution.',


    ex_scenario_cheque_title: 'Real-Life Cheque Bounce Examples',
    ex_scenario_cheque_description: 'These are common scenarios we help resolve',
    ex_scenario_cheque_problem_label: '❌ Problem:',
    ex_scenario_cheque_reality_label: '⚠️ Reality:',
    ex_scenario_cheque_solution_label: '✅ Our Solution:',

    ex_scenario_cheque_case1_title: 'Case 1: Business Payment Dispute',
    ex_scenario_cheque_case1_problem: 'A business owner receives a cheque from a client for payment of goods supplied. When the cheque is deposited, the bank returns it due to insufficient funds.',
    ex_scenario_cheque_case1_reality: 'The client claimed financial difficulty and delayed payment for months, affecting the business cash flow and operations.',
    ex_scenario_cheque_case1_solution: 'We sent a legal notice within 30 days of bounce. After no payment, filed Section 138 complaint. Court ordered payment with interest and penalty.',

    ex_scenario_cheque_case2_title: 'Case 2: Personal Loan Repayment',
    ex_scenario_cheque_case2_problem: 'An individual lends money to a friend who later provides a cheque for repayment. The cheque is returned unpaid by the bank.',
    ex_scenario_cheque_case2_reality: 'The friend stopped responding to calls and messages, leaving the lender with no recourse to recover the significant amount.',
    ex_scenario_cheque_case2_solution: 'We issued legal notice, documented all evidence, and filed a criminal complaint. Recovery decree obtained with compensation for harassment.',

    ex_scenario_cheque_case3_title: 'Case 3: Commercial Transaction',
    ex_scenario_cheque_case3_problem: 'A supplier receives a cheque from a retailer as payment for delivered products, but the cheque is returned because the account does not have sufficient balance.',
    ex_scenario_cheque_case3_reality: 'Multiple cheques bounced in succession, suggesting deliberate avoidance of payment obligations.',
    ex_scenario_cheque_case3_solution: 'We filed complaints for all bounced cheques, established pattern of non-payment, and secured judgment for full recovery plus damages.',

    ex_scenario_cheque_case4_title: 'Case 4: Delayed Settlement',
    ex_scenario_cheque_case4_problem: 'A person receives a cheque as part of a financial settlement, but the cheque is returned unpaid, creating uncertainty about recovering the promised amount.',
    ex_scenario_cheque_case4_reality: 'The issuer closed the bank account immediately after issuing the cheque, showing intent to defraud.',
    ex_scenario_cheque_case4_solution: 'We proved fraudulent intent with banking records, filed criminal complaint, and obtained strict punishment order along with payment recovery.',


    faq_cheque_title: 'Frequently Asked Questions',
    faq_cheque_description: 'Common questions about cheque bounce cases',
    faq_cheque_q1: 'What does cheque bounce mean?',
    faq_cheque_a1: 'Cheque bounce occurs when a bank refuses to process a cheque due to insufficient funds, account closure, signature mismatch, or other banking issues.',

    faq_cheque_q2: 'What is a cheque return memo?',
    faq_cheque_a2: 'A cheque return memo is a document issued by the bank explaining why the cheque was not processed and returned unpaid.',

    faq_cheque_q3: 'Can legal action be taken for cheque bounce cases?',
    faq_cheque_a3: 'Yes, under Section 138 of the Negotiable Instruments Act, legal proceedings can be initiated for cheque dishonour.',

    faq_cheque_q4: 'What documents are required in cheque bounce cases?',
    faq_cheque_a4: 'Required documents include the original cheque, bank return memo, deposit slip, and communication records between parties.',

    cta_cheque_title: 'Facing Issues Due to a Bounced Cheque?',
    cta_cheque_description: 'Understanding the legal process and documentation requirements can help individuals and businesses address cheque bounce situations more effectively. Contact us today for professional cheque bounce case support.',
    cta_cheque_button1: 'Get Free Consultation',
    cta_cheque_button2: 'Call Now',

    //------------------------------------------------------------------------- Check Bounce Page Ends

    // Reviews Page
    reviews_page_title: 'Submit Your Review',
    reviews_page_subtitle: 'Share your experience and help others make informed decisions',
    reviews_form_title: 'Share Your Feedback',
    reviews_form_subtitle: 'We value your opinion. Please share your experience with Yashoda Total Solution.',
    reviews_name_label: 'Your Name',
    reviews_name_placeholder: 'Enter your full name',
    reviews_city_label: 'Your City',
    reviews_city_placeholder: 'Enter your city',
    reviews_rating_label: 'Your Rating',
    reviews_message_label: 'Your Review',
    reviews_message_placeholder: 'Share your experience with us...',
    reviews_submit_btn: 'Submit Review',
    reviews_submitting: 'Submitting...',
    reviews_success_title: 'Thank You for Your Feedback!',
    reviews_success_message: 'Your review will be published after approval. We appreciate you taking the time to share your experience.',
    reviews_another_btn: 'Submit Another Review',
    reviews_why_title: 'Why Your Review Matters',
    reviews_why1_title: 'Helps Others',
    reviews_why1_desc: 'Your honest feedback helps others make informed decisions about our services.',
    reviews_why2_title: 'Improves Service',
    reviews_why2_desc: 'We use your feedback to continuously improve and provide better service.',
    reviews_why3_title: 'Builds Trust',
    reviews_why3_desc: 'Authentic reviews build trust and transparency in our community.',

    // Contact Page ------------------------------------------------------------------------------------------------------

    contact_page_title: 'Contact Us',
    contact_page_subtitle: 'Get in touch with us for any assistance',
    contact_info_title: 'Contact Information',
    contact_info_subtitle: 'Reach out to us through any of the following channels',
    contact_phone_title: 'Phone Number',
    contact_phone_number: '+91 9649647790',
    contact_email_title: 'Email Address',
    contact_email_address: 'info@yashodatotalsolution.com',
    contact_address_title: 'Head Office',
    contact_address_text: '2B 70, Yashoda Total Solution, Phoenix Paragon Plaza, Lal Bahadur Shastri Marg, Kamani, Kurla (West), Mumbai, Maharashtra 400070',

    contact_form_title: 'Send Us a Message',
    contact_form_subtitle: 'Have a problem? Submit your details and our team will contact you soon.',
    contact_name_label: 'Your Name',
    contact_name_placeholder: 'Enter your full name',
    contact_phone_label: 'Phone Number',
    contact_phone_placeholder: 'Enter your phone number',
    contact_message_label: 'Your Message',
    contact_message_placeholder: 'Describe your problem or query...',
    contact_submit_btn: 'Submit Message',
    contact_submitting: 'Sending...',
    contact_success_title: 'Message Sent Successfully!',
    contact_success_message: 'Thank you for contacting us. Our team will get back to you soon.',
    contact_another_btn: 'Send Another Message',
    contact_whatsapp_btn: 'CHAT WITH',
    chat_prefix: 'Chat with',
    yashify_name: 'YASHIFY',
    chat_suffix: "",

    contact_map_title: 'Location On Google Map',

    contact_location_label: "Location",
    contact_location_placeholder: "Enter your city or area",

    contact_service_label: "Select Service",
    contact_service_placeholder: "Choose a service",


    service_mis_selling1: 'Mis-selling of Insurance Policy',
    service_claim_rejection1: 'Insurance Claim Rejection',
    service_claim_delay1: 'Delay in Claim Process',
    service_claim_short_settled1: 'Partial Claim Settlement',
    service_health_reimbursement1: 'Health Claim Reimbursement',
    service_pmsby1: 'Pradhan Mantri Suraksha Bima Yojana (PMSBY)',
    service_pmjjby1: 'Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)',
    service_state_cm_scheme1: 'State Chief Minister Insurance Scheme',
    service_banking_atm1: 'Banking & ATM Card Insurance Claim',
    service_pf_accidental1: 'PF Accidental Insurance Claim',
    service_legal_consultation1: 'Legal Consultation',
    service_legal_drafting1: 'Legal Drafting & Verification Support',
    service_consumer_cases1: 'Consumer Protection Support',
    service_civil_cases1: 'Civil Dispute Support',
    service_cheque_bounce1: 'Cheque Bounce Cases',
    service_other1: 'Other Services',

    our_network_title: 'Our Network',
    our_network_desc1: 'Yashoda Total Solution is expanding its operational presence across ',
    our_network_desc2: 'PAN India',
    our_network_desc3: 'through growing service network to ensure accessibility of services nationwide.',
    our_network_desc4: 'Our growing network aims to deliver professional assistance across multiple states with structured service delivery supported by trained sales and support teams.',
    network_stat1_number: 'PAN India',
    network_stat1_desc: 'Nationwide Coverage',
    network_stat2_number: 'Growing',
    network_stat2_desc: 'Trained Sales & Support Teams',
    network_stat3_number: 'Multiple',
    network_stat3_desc: 'States & Cities',
    network_cta_button: 'Join Our Expanding Network of Service Excellence',

    // India Map Branches ------------------------------------------------------------------------ 

    // Maharashtra
    map_mumbai_branch: 'Mumbai Head Office',
    map_mumbai_branch_addr: '2B 70, Yashoda Total Solution, Phoenix Paragon Plaza, Lal Bahadur Shastri Marg, Kamani, Kurla (West), Mumbai, Maharashtra 400070',
    map_pune_branch: 'Pune Branch',
    map_pune_branch_addr: 'Coming Soon...',
    map_nagpur_branch: 'Nagpur Branch',
    map_nagpur_branch_addr: 'Coming Soon...',
    map_nashik_branch: 'Nashik Branch',
    map_nashik_branch_addr: 'Coming Soon...',
    map_kolhapur_branch: 'Kolhapur Branch',
    map_kolhapur_branch_addr: 'Coming Soon...',
    map_solapur_branch: 'Solapur Branch',
    map_solapur_branch_addr: 'Coming Soon...',
    map_satara_branch: 'Satara Branch',
    map_satara_branch_addr: 'Coming Soon...',

    // Gujarat
    map_ahmedabad_branch: 'Ahmedabad Branch',
    map_ahmedabad_branch_addr: 'Coming Soon...',
    map_surat_branch: 'Surat Branch',
    map_surat_branch_addr: 'Coming Soon...',
    map_rajkot_branch: 'Rajkot Branch',
    map_rajkot_branch_addr: 'Coming Soon...',


    // Madhya Pradesh
    map_indore_branch: 'Indore Branch',
    map_indore_branch_addr: 'Coming Soon...',

    // Uttar Pradesh
    map_lucknow_branch: 'Lucknow Branch',
    map_lucknow_branch_addr: 'Coming Soon...',
    map_varanasi_branch: 'Varanasi Branch',
    map_varanasi_branch_addr: 'Coming Soon...',
    map_gorakhpur_branch: 'Gorakhpur Branch',
    map_gorakhpur_branch_addr: 'Coming Soon...',
    map_jhansi_branch: 'Jhansi Branch',
    map_jhansi_branch_addr: 'Coming Soon...',
    map_basti_branch: 'Basti Branch',
    map_basti_branch_addr: 'Coming Soon...',

    // Rajasthan
    map_state_rajasthan: 'Rajasthan',
    map_jaipur_branch: 'Jaipur Branch',
    map_jaipur_branch_addr: 'Coming Soon...',
    map_kota_branch: 'Kota Branch',
    map_kota_branch_addr: 'Coming Soon...',

    // Delhi
    map_state_delhi: 'Delhi',
    map_delhi_branch: 'New Delhi Branch',
    map_delhi_branch_addr: 'Coming Soon...',


    // States
    map_state_maharashtra: 'Maharashtra',
    map_state_gujarat: 'Gujarat',
    map_state_madhya_pradesh: 'Madhya Pradesh',
    map_state_uttar_pradesh: 'Uttar Pradesh',

    // Office count
    map_office_single: 'Office',
    map_office_multiple: 'Offices',

    map_load: 'Loading map...',
    map_load_error: '⚠️ Could not load map. Please check your connection and reload.',
    map_heading: 'Click on the highlighted states or pins to view branch details.',



    //------------------------------------------------------------------------------------------ Contact Page Ends

    //FAQ Page ------------------------------------------------------------------------------------------------------

    faq_title: 'Frequently Asked Questions',
    faq_subtitle: 'Find answers to common questions about our services, processes, and how we can help you,',

    faq_ques_1: 'Is Yashoda Total Solutions a law firm?',
    faq_ans_1: 'No. Yashoda Total Solutions operates as a professional legal support and consultancy service provider. We are not a law firm. Instead, we collaborate with a network of qualified and experienced advocates from various legal domains and allocate them to clients based on the specific nature of the matter.',
    faq_ques_2: 'Who will oversee and manage my case?',
    faq_ans_2: 'Your case will be coordinated and supervised by Yashoda Total Solutions. Our internal management team continuously monitors the progress of every assignment. If any delay, non-performance, or professional lapse is identified, the company takes immediate corrective measures, including reassignment of the matter to another suitable advocate if necessary.',
    faq_ques_3: 'How and where should service fees be paid?',
    faq_ans_3: 'All service fees, professional charges, and administrative costs are payable only to Yashoda Total Solutions. Advocates associated with our panel are not authorized to receive payments directly from clients. The company manages and disburses professional remuneration to the advocates as per the mutually agreed terms and the scope of work performed.',
    faq_ques_4: 'What if the advocate handling my matter withdraws or becomes unavailable?',
    faq_ans_4: 'In the unlikely event that an assigned advocate becomes unavailable or discontinues the assignment, Yashoda Total Solutions will promptly appoint an alternate advocate from its professional panel to ensure continuity and minimize any disruption to the client\'s matter.',
    faq_ques_5: 'Why should I engage Yashoda Total Solutions instead of a conventional law firm?',
    faq_ans_5: 'Engaging Yashoda Total Solutions offers several strategic advantages:',
    faq_ans_item_5: [
      "Outcome-focused services – Our approach emphasizes practical and efficient resolution of legal matters.",
      "Proactive case management – Matters are actively monitored to avoid unnecessary delays and procedural inefficiencies.",
      "Structured administrative oversight – A dedicated support and coordination team supervises the progress of each assignment.",
      "Extended professional support – Advocates receive assistance from our documentation and operational teams, enabling them to focus on core legal work.",
      "Flexible advocate allocation – If required, the company can quickly assign another suitable professional to the matter.",
      "Cost-effective service model – Our service structure is designed to remain economical while maintaining professional standards."],
    faq_ques_6: 'What are some common examples of insurance mis-selling?',
    faq_ans_6: 'Insurance mis-selling occurs when a policy is sold using false promises, misleading information, or hidden conditions. Some common examples include:',
    faq_ans_item_6: [
      "Policy sold as a Fixed Deposit (FD)",
      "Promise of interest-free loans",
      "Assurance of recovering money from a lapsed policy",
      "Offering \"free\" health insurance",
      "Incentives such as gold coins, gifts, or cash benefits",
      "Tower installation schemes",
      "Promise of regular monthly income",
      "False job or employment assurance"
    ],

    faq_stiil_have_questions: 'Still have questions?',
    faq_ans_still_have_questions: 'Can\'t find the answer you\'re looking for? Our team is here to help you with any queries.',
    faq_btn_contact: 'Contact Us',

    //------------------------------------------------------------------------------------------ FAQ Page Ends

    //Partner Page ------------------------------------------------------------------------------------------------------


    partner_title: 'Become Our Partner',
    partner_subtitle: 'Grow with Yashoda Total Solution',
    about_partner_desc1: 'Yashoda Total Solutions is growing across',
    about_partner_desc2: 'PAN India',
    about_partner_desc3: 'and is looking for freelancers, franchise partners, insurance professionals, and corporates to join our expanding network.',
    about_partner_desc4: 'As a partner, you will receive expert support and the opportunity to assist policyholders in resolving insurance issues effectively.',
    about_partner_desc5: 'Join Yashoda Total Solutions and grow with a purpose.',
    why_partner_title: 'Why Partner With Us?',
    why_partner_desc: 'Join a network that values growth, support, and making a difference',
    why_partner_benefit1: 'Growing Network',
    why_partner_benefit1_desc: 'Be part of a rapidly expanding Pan India network of professionals',
    why_partner_benefit2: 'Expert Support',
    why_partner_benefit2_desc: 'Receive comprehensive training and ongoing expert guidance',
    why_partner_benefit3: 'Growth Opportunity',
    why_partner_benefit3_desc: 'Unlock new revenue streams while helping policyholders',

    partner_form_title: 'Register as a Partner',
    partner_form_subtitle: 'Fill out the form below and we\'ll get back to you shortly',
    partner_name_label: 'Full Name *',
    partner_name_label_placeholder: 'Enter your full name',
    partner_mobile_label: 'Mobile Number *',
    partner_mobile_label_placeholder: '10-digit mobile number',
    partner_location_label: 'Location *',
    partner_location_label_placeholder: 'City, State',
    partner_email_label: 'Email Address *',
    partner_email_label_placeholder: 'Enter your email address',
    partner_type_label: 'Partner Type *',
    partner_type_label_placeholder: 'Select Partner Type',
    partner_type_label_option1: 'Freelancer',
    partner_type_label_option2: 'Franchise Partner',
    partner_type_label_option3: 'Advocate/Insurance Professional',
    partner_additional_info_label: 'Additional Information (About Yourself)',
    partner_additional_info_label_placeholder: 'Tell us about your experience, expertise, or any other relevant information...',
    partner_submitting: 'Submitting...',
    partner_submit_button: 'Submit Application',
    partner_submit_success: '✓ Application Submitted Successfully!',
    partner_submit_success_desc: 'We\'ll get back to you shortly.',

    //------------------------------------------------------------------------------------------ Partner Page Ends

  },
  hi: {
    // Navbar
    nav_home: 'होम',
    nav_about: 'हमारे बारे में',
    nav_services: 'सेवाएं',
    nav_gallery: 'गैलरी',
    nav_contact: 'संपर्क करें',
    nav_reviews: 'समीक्षाएं',
    nav_faqs: 'सामान्य प्रश्न',
    nav_partner: 'हमारे साथ साझेदारी करें',
    nav_login: 'लॉगिन',

    // Service Names (Mega Menu)
    service_insurance_dispute: 'बीमा विवाद समाधान',
    service_mis_selling: 'बीमा पॉलिसी की मिस-सेलिंग',
    service_claim_rejection: 'बीमा क्लेम अस्वीकृति',
    service_claim_delay: 'क्लेम प्रक्रिया में देरी',
    service_claim_short_settled: 'आंशिक क्लेम निपटान',
    service_health_reimbursement: 'हेल्थ क्लेम रिइम्बर्समेंट',
    service_pmsby: 'प्रधानमंत्री सुरक्षा बीमा योजना (PMSBY)',
    service_pmjjby: 'प्रधानमंत्री जीवन ज्योति बीमा योजना (PMJJBY)',
    service_state_cm_scheme: 'राज्य मुख्यमंत्री बीमा योजना सहायता',
    service_banking_atm: 'बैंकिंग और ATM कार्ड बीमा क्लेम',
    service_pf_accidental: 'PF दुर्घटना बीमा क्लेम सहायता',
    service_legal_consultation: 'कानूनी परामर्श',
    service_legal_drafting: 'कानूनी ड्राफ्टिंग और सत्यापन सहायता',
    service_consumer_cases: 'उपभोक्ता संरक्षण सहायता',
    service_civil_cases: 'दीवानी विवाद सहायता',
    service_cheque_bounce: 'चेक बाउंस मामले',

    // Home Page

    //Review on home page

    review_more_button: 'और समीक्षाएँ देखें',
    review_previous_button: 'पिछला',
    review_pagination_text: '{{total}} ग्राहक समीक्षाओं में से {{start}}–{{end}} दिखाई जा रही हैं',

    // Hero Section
    hero_headline: 'पॉलिसीधारकों को अपने बीमा पर नियंत्रण पाने और समस्याओं का तेजी से समाधान करने में मदद करना।',
    hero_subtext: 'यशोदा टोटल सोल्यूशन (सेवा प्रदाता) बीमा दावों, विवादों और कानूनी मामलों मे व्यक्तियों को सहायता प्रदान करता है; इसके लिए यह सरल भाषा में चरण-दर-चरण मार्गदर्शन देता है, जिससे ग्राहक पूरी प्रक्रिया को आसानी से समझ सकें।',
    hero_btn_contact: 'संपर्क करें',
    hero_btn_help: 'मदद लें अभी',
    hero_small1: '100% गोपनीय',
    hero_small2: 'विश्वसनीय सेवा',
    hero_small3: 'विशेषज्ञ टीम',
    hero_stats1: 'खुश ग्राहक',
    hero_stats2: 'सफलता दर',
    hero_stats3: '24/7 समर्थन',
    hero_stats4: '100% सुरक्षित',

    // About Section
    about_title: 'हम कौन हैं',
    about_desc: 'यशोदा टोटल सोल्यूशन बीमा दावों, बीमा विवादों और सभी डॉक्यूमेंट की मदद के लिए है। हम आपकी समस्याओं को समझते हैं और ईमानदारी से मार्गदर्शन प्रदान करते है।',
    about_card1_title: 'अनुभवी टीम',
    about_card1_desc: 'हमारी अनुभवी टीम आपको जटिल बीमा और कानूनी प्रक्रियाओं को समझाने में मदद करती है।',
    about_card2_title: 'सरल प्रक्रिया',
    about_card2_desc: 'हम सब कुछ सरल भाषा में समझाते हैं जो हर कोई समझ सके।',
    about_card3_title: 'त्वरित सहायता',
    about_card3_desc: 'हम जल्दी जवाब देते हैं और स्टेप बाय स्टेप आपकी समस्या हल करते हैं।',

    // Problems Section
    problems_title: 'सामान्य समस्याएं जिनका हम समाधान करते है',
    problems_subtitle: 'क्या आप इनमें से किसी समस्या का सामना कर रहे है?',
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
    why_title: 'यशोदा टोटल सोल्यूशन को क्यों चुनें?',
    why_subtitle: 'हम पेशेवर, पारदर्शी और ग्राहक-केंद्रित उत्कृष्ट सेवाएं प्रदान करते हैं।',
    why1_title: 'अनुभवी और पेशेवर टीम',
    why1_desc: 'उद्योग ज्ञान और कार्यानुभव रखने वाले योग्य विशेषज्ञ।',
    why2_title: 'तेज़ और पारदर्शी प्रक्रिया',
    why2_desc: 'स्पष्ट संचार और निगरानी के साथ व्यवस्थित कार्यप्रणाली।',
    why3_title: 'ग्राहक-प्रथम दृष्टिकोण',
    why3_desc: 'हर मामले को ध्यान, संवेदनशीलता और नैतिक जिम्मेदारी के साथ संभाला जाता है।',
    why4_title: 'तकनीक-आधारित निगरानी',
    why4_desc: 'उन्नत ट्रैकिंग सिस्टम जवाबदेही और नियमित अपडेट सुनिश्चित करते हैं।',
    why5_title: 'विश्वसनीय सेवा भागीदार',
    why5_desc: 'विश्वास, विश्वसनीयता और उत्कृष्ट सेवा पर आधारित दीर्घकालिक संबंधों पर केंद्रित।',

    // Testimonials Section
    testimonials_title: 'हमारे ग्राहक क्या कहते हैं',
    testimonials_subtitle: 'असली लोग, असली परिणाम',
    testimonial1_text: 'मेरा बीमा क्लेम 3 बार रिजेक्ट हुआ था। यशोदा टोटल सोल्यूशन ने मदद की और मुझे पूरे पैसे मिल गए। उनकी सेवा से बहुत खुश हूं।',
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

    // -------------------------------------------------------------------------- Home Page Ends

    // Footer Page Hindi --------------------------------------------------------------------


    footer_desc: 'यशोदा टोटल सोल्यूशन एक विश्वसनीय कानूनी और बीमा सलाहकार संस्था है, जो व्यक्तियों और व्यवसायों को विवादों का प्रभावी समाधान प्राप्त करने में सहायता करती है।',

    footer_quick_links: 'त्वरित लिंक',

    footer_services: 'सेवाएं',
    footer_services_insurance_heading: 'बीमा विवाद समाधान',

    footer_service_misselling: '• गलत विक्रय',
    footer_service_claimrejection: '• दावा अस्वीकृति',
    footer_service_claimdelay: '• दावा में देरी',
    footer_service_partialclaim: '• आंशिक दावा',
    footer_service_healthclaim: '• स्वास्थ्य दावा',
    footer_service_pmsby: '• PMSBY',
    footer_service_pmjjby: '• PMJJBY',
    footer_service_statescheme: '• राज्य योजना',
    footer_service_atminsurance: '• एटीएम बीमा',
    footer_service_pfaccident: '• पीएफ दुर्घटना',

    footer_service_legalconsultation: 'कानूनी परामर्श',
    footer_service_legaldrafting: 'कानूनी ड्राफ्टिंग',
    footer_service_consumerprotection: 'उपभोक्ता संरक्षण',
    footer_service_civildispute: 'सिविल विवाद',
    footer_service_chequebounce: 'चेक बाउंस',

    footer_contact: 'हमसे संपर्क करें',
    footer_phone: 'फोन',
    footer_email: 'ईमेल',
    footer_address: 'पता',
    footer_address_text: '2B 70, यशोदा टोटल सोल्यूशन, फीनिक्स पैरागॉन प्लाज़ा, लाल बहादुर शास्त्री मार्ग, कामानी, कुर्ला (पश्चिम), मुंबई, महाराष्ट्र 400070',

    footer_rights: '© 2026 यशोदा टोटल सोल्यूशन। सर्वाधिकार सुरक्षित।',
    footer_designed_by: 'डिज़ाइन एवं विकसित द्वारा',
    footer_designed_by_name: 'विंग्ज़स्फीयर टेक',

    // -------------------------------------------------------------------------- Footer Page Ends Hindi





    // About Us Page ----------------------------------------------------------------------------

    title: "यशोदा टोटल सोल्यूशन के बारे में",
    hero_subtitle: "पेशेवर बीमा दावा सहायता और कानूनी सहायता सेवाएं",

    about_title: "हमारे बारे में",
    about_intro: "यशोदा टोटल सोल्यूशन एक पेशेवर बीमा दावा सहायता और कानूनी सहायता सेवा संगठन है, जो व्यक्तियों, परिवारों और व्यवसायों को विभिन्न बीमा और विवाद संबंधी मामलों को संरचित, पारदर्शी और परिणाम-उन्मुख सेवाओं के माध्यम से प्रबंधित और समाधान करने में सहायता प्रदान करता है।",
    about_p2: "2025 में स्थापित, यह संगठन बीमा दावों, विवाद समाधान सहायता, पॉलिसी प्रबंधन सहायता और कानूनी दस्तावेज़ सुविधा के क्षेत्रों में सहायता और समन्वय सेवाएं प्रदान करने में विशेषज्ञ है। कंपनी ग्राहकों की ओर से जटिल प्रक्रियाओं को सरल बनाकर उन्हें वैध और नैतिक प्रक्रियाओं के माध्यम से उचित लाभ और न्यायसंगत समाधान प्राप्त करने में मदद करती है।",
    about_p3: "यशोदा टोटल सोल्यूशन एक सेवा प्रदाता और समन्वय भागीदार के रूप में कार्य करता है, जो ग्राहकों, बीमा कंपनियों, सलाहकारों और अधिकृत कानूनी पेशेवरों के बीच एक सेतु का काम करता है। व्यवस्थित मार्गदर्शन, दस्तावेज़ सहायता, प्रक्रियात्मक समन्वय और केस मॉनिटरिंग के माध्यम से, हम सुनिश्चित करते हैं कि ग्राहकों को उनके पूरे केस के दौरान संगठित और पेशेवर सहायता मिले।",
    about_p4: "संगठन एक सहज, पारदर्शी और समयबद्ध दावा और विवाद समाधान अनुभव प्रदान करने के लिए प्रतिबद्ध है, जिससे प्रक्रियात्मक देरी कम हो और गोपनीयता, अनुपालन और पेशेवर नैतिकता बनाए रखी जाए।",

    whatwedo_title: "हम क्या करते हैं",
    whatwedo_intro: "यशोदा टोटल सोल्यूशन विभिन्न प्रकार के विवाद और दावा मामलों के लिए संरचित सहायता सेवाएं प्रदान करता है, जिनमें शामिल हैं:",
    whatwedo_items: [
      "बीमा दावा सहायता और निपटान समन्वय",
      "बीमा मिस-सेलिंग और शिकायत सहायता",
      "उपभोक्ता विवाद सहायता",
      "वित्तीय और सेवा संबंधित विवाद समन्वय",
      "चेक बाउंस और रिकवरी मामलों में सहायता",
      "दस्तावेज़ और आवेदन प्रक्रिया सहायता",
      "पैनल में शामिल पेशेवरों और सलाहकारों के साथ समन्वय"
    ],
    whatwedo_outro: "हमारी भूमिका ग्राहकों की ओर से प्रक्रियाओं का मार्गदर्शन, सहायता और समन्वय करना है, साथ ही उचित फॉलो-अप और प्रक्रियात्मक अनुपालन सुनिश्चित करना।",

    features_title: "हमारी विशेषताएं",
    features_intro: "यशोदा टोटल सोल्यूशन पारंपरिक लॉ फर्म्स से अलग एक विशिष्ट सेवा मॉडल के साथ कार्य करता है। संगठन ने अनुभवी पेशेवरों और क्षेत्र विशेषज्ञों को जोड़कर संरचित और प्रभावी सेवा परिणाम सुनिश्चित किए हैं।",
    features_subtitle: "मुख्य विशेषताएं:",
    features: [
      "अनुभवी पेशेवर और प्रशिक्षित सपोर्ट टीम",
      "समर्पित बैकअप और संचालन टीम",
      "बहु-स्तरीय प्रशासनिक निगरानी प्रणाली",
      "नियमित केस प्रगति समीक्षा और ऑडिट",
      "तकनीक आधारित केस ट्रैकिंग और मॉनिटरिंग",
      "समय पर फॉलो-अप और ग्राहक सहायता",
      "फोन और डिजिटल माध्यम से नियमित अपडेट",
      "मजबूत डेटा गोपनीयता और सुरक्षा प्रणाली"
    ],

    strategy_title: "हमारी रणनीति और कार्य मॉडल",
    strategy_intro: "हम विवाद और दावा सहायता के लिए एक व्यवस्थित और क्रियान्वयन-आधारित दृष्टिकोण अपनाते हैं।",
    strategy_items: [
      "प्रत्येक केस का रणनीतिक मूल्यांकन किया जाता है।",
      "दस्तावेज़ विश्लेषण और प्रक्रियात्मक आवश्यकताओं के आधार पर केस योजना बनाई जाती है।",
      "प्रशासनिक और संचालन निगरानी के माध्यम से निरंतर मॉनिटरिंग की जाती है।",
      "समय-समय पर समीक्षा कर रणनीतियों में आवश्यक बदलाव किए जाते हैं।",
      "तकनीक आधारित ट्रैकिंग से पारदर्शिता और जवाबदेही सुनिश्चित होती है।"
    ],
    strategy_outro: "हम समयबद्ध कार्य प्रणाली का पालन करते हैं, जिसमें सक्रिय केस प्रगति और निरंतर फॉलो-अप पर ध्यान दिया जाता है ताकि अनावश्यक देरी से बचा जा सके।",

    approach_title: "हमारा दृष्टिकोण",
    approach_items: [
      "ग्राहक-केंद्रित सेवा मॉडल",
      "संरचित प्रक्रियात्मक मार्गदर्शन",
      "ग्राहक जानकारी की गोपनीयता",
      "पेशेवर और समय पर सेवा",
      "नैतिक और पारदर्शी कार्य प्रणाली",
      "निरंतर फॉलो-अप और समन्वय"
    ],

    commitment_title: "हमारी प्रतिबद्धता",
    commitment_text: "यशोदा टोटल सोल्यूशन में ग्राहक संतुष्टि और मानसिक शांति हमारी सर्वोच्च प्राथमिकताएं हैं। हम विश्वसनीय, नैतिक और पेशेवर सेवाएं प्रदान करने के लिए प्रतिबद्ध हैं, जिससे हम पूरे भारत में बीमा सहायता और विवाद समाधान सेवाओं के लिए एक भरोसेमंद भागीदार बनते हैं।",

    team_title: "हमारी समर्पित टीम से मिलें",
    md_title: "प्रबंध निदेशक",
    md_name: "राजेश वर्मा",
    md_desc1: "राजेश वर्मा एक अनुभवी पेशेवर हैं, जिनके पास बीमा दावा निपटान में 14 से अधिक वर्षों का अनुभव है। अपने पूरे करियर के दौरान, उन्होंने ग्राहकों के हितों की सुरक्षा और निष्पक्ष तथा समय पर दावा समाधान सुनिश्चित करने के लिए गहन उद्योग ज्ञान और रणनीतिक विशेषज्ञता विकसित की है।",
    md_desc2: "दावा प्रक्रियाओं, विवाद प्रबंधन और बीमा नियमों पर उनकी मजबूत पकड़ के साथ, उन्होंने जटिल मामलों को सफलतापूर्वक संभाला है और लगातार सकारात्मक परिणाम प्रदान किए हैं। उनका ग्राहक-प्रथम दृष्टिकोण, पारदर्शी कार्यशैली और समर्पित नेतृत्व हर चरण में पूर्ण समर्थन और संतुष्टि सुनिश्चित करता है।",
    md_quote: "आपका दावा हमारे लिए सिर्फ एक फाइल नहीं है — यह हमारी जिम्मेदारी है।",

    sales_title: "सेल्स टीम",
    sales_desc1: "यशोदा टोटल सोल्यूशन में, हमारी सेल्स टीम हर ग्राहक के लिए विश्वास और सहयोग का पहला स्तंभ है। वर्षों के व्यावहारिक अनुभव के साथ, हमारे समर्पित पेशेवर ईमानदारी, स्पष्टता और आत्मविश्वास के साथ ग्राहकों का मार्गदर्शन करने के लिए निरंतर प्रयास करते हैं।",
    sales_desc2: "हम समझते हैं कि आपकी मेहनत की कमाई आपके सपनों, सुरक्षा और भविष्य का प्रतीक है। इसी कारण हमारी टीम हर चरण में वास्तविक सलाह, पारदर्शी संवाद और पूर्ण सहायता प्रदान करने के लिए प्रतिबद्ध है। पहली सलाह से लेकर अंतिम समाधान तक, हम पूरी जिम्मेदारी और समर्पण के साथ आपके साथ खड़े रहते हैं।",
    sales_desc3: "हमारी ताकत हमारी मेहनती कार्यशैली, ग्राहक-केंद्रित सोच और हमारे कानूनी तथा दावा विशेषज्ञों के साथ मजबूत समन्वय में निहित है, जिससे आपके लिए सर्वोत्तम परिणाम सुनिश्चित किए जा सकें।",

    sales_motto: "आपका विश्वास हमारी प्रेरणा है। आपकी सफलता हमारी उपलब्धि है।",

    legal_title1: "कानूनी टीम",
    legal_desc1: "यशोदा टोटल सोल्यूशन में, हमारे पास बीमा विवाद समाधान प्रबंधन में विशेषज्ञता रखने वाली अत्यंत अनुभवी और समर्पित कानूनी टीम है। हमारे विशेषज्ञों ने बीमा मिस-सेलिंग, दावा निपटान विवाद और थर्ड-पार्टी क्लेम सेटलमेंट जैसे जटिल मामलों को सफलतापूर्वक संभाला है।",
    legal_desc2: "गहन उद्योग ज्ञान और रणनीतिक कानूनी विशेषज्ञता के साथ, हम अपने ग्राहकों के अधिकारों के लिए दृढ़ता से खड़े रहते हैं और सुनिश्चित करते हैं कि उन्हें वह न्याय और मुआवजा मिले जिसके वे हकदार हैं। हमारा अनूठा और परिणाम-उन्मुख दृष्टिकोण आपको आपकी मेहनत की कमाई वापस दिलाने में सक्षम बनाता है — यहां तक कि सबसे बड़ी और प्रभावशाली बीमा कंपनियों से भी।",
    legal_motto: "आपकी लड़ाई हमारी जिम्मेदारी है। आपका न्याय हमारा मिशन है।",

    view_profile: "प्रोफ़ाइल देखें",
    close: "बंद करें",

    //-------------------------------------------------------------------------------About Us Page Ends

    // Services Page 

    //Mis-Selling Page ------------------------------------------------------------------------------------


    mis_selling_title_backlink1: 'होम',
    mis_selling_title_backlink2: 'बीमा पॉलिसी का गलत विक्रय',

    mis_selling_title: 'बीमा पॉलिसी की गलत बिक्री',

    mis_selling_description: 'क्या आपको ऐसी बीमा पॉलिसी बेची गई है जो वादे के अनुसार नहीं है? बीमा मिस-सेलिंग तब होती है जब एजेंट या बैंक ग्राहकों को पॉलिसी की विशेषताओं, लाभों या शर्तों के बारे में गुमराह करते हैं। हम आपको न्याय और मुआवजा दिलाने में मदद करते हैं।',

    mis_selling_what_is: 'बीमा मिस-सेलिंग क्या है?',
    mis_selling_what_is_description1: 'बीमा मिस-सेलिंग तब होती है जब बीमा एजेंट, बैंक या वित्तीय संस्थान ग्राहकों को',
    mis_selling_what_is_description2: 'गलत जानकारी देकर, महत्वपूर्ण शर्तों को छिपाकर या भ्रामक वादे करके',
    mis_selling_what_is_description3: 'बीमा पॉलिसी बेचते हैं।',

    mis_selling_examples: 'सामान्य उदाहरण शामिल हैं:',
    mis_selling_example_1: '✗ ULIP (यूनिट लिंक्ड इंश्योरेंस प्लान) को फिक्स्ड डिपॉजिट के रूप में बेचना',
    mis_selling_example_2: '✗ पॉलिसी शुल्क, सरेंडर चार्ज या लॉक-इन अवधि को छिपाना',
    mis_selling_example_3: '✗ बाजार से जुड़े रिटर्न होने के बावजूद गारंटीड उच्च रिटर्न का वादा करना',
    mis_selling_example_4: '✗ पॉलिसी एक्सक्लूजन या क्लेम रिजेक्शन शर्तों को न समझाना',
    mis_selling_example_5: '✗ बिना उचित सहमति या हस्ताक्षर के पॉलिसी बेचना',
    mis_selling_example_6: '✗ बैंक खाता खोलते समय बिना जानकारी दिए बीमा उत्पाद बेचना',

    mis_selling_what_happens: 'मिस-सेलिंग के मामलों में क्या होता है?',
    mis_selling_what_happens_description: 'बीमा मिस-सेलिंग का आपके वित्त पर प्रभाव समझें',
    mis_selling_what_happens_1_title: 'वित्तीय नुकसान',
    mis_selling_what_happens_1_description: 'आप सरेंडर चार्ज, कम रिटर्न या ऐसी पॉलिसी के कारण पैसा खो सकते हैं जो आपकी जरूरतों को पूरा नहीं करती।',
    mis_selling_what_happens_2_title: 'गलत कवरेज',
    mis_selling_what_happens_2_description: 'पॉलिसी वह बीमा कवरेज या लाभ प्रदान नहीं कर सकती जो आपको वादा किया गया था।',
    mis_selling_what_happens_3_title: 'विश्वास टूटना',
    mis_selling_what_happens_3_description: 'बीमा एजेंट या बैंक पर आपका विश्वास टूट जाता है, जिससे मानसिक तनाव होता है।',

    mis_selling_why_choose_us: 'यशोदा टोटल सोल्यूशन को क्यों चुनें?',
    mis_selling_why_choose_us_description: 'मिस-सेलिंग मामलों को प्रभावी ढंग से हल करने के लिए विशेषज्ञ मार्गदर्शन',
    mis_selling_why_choose_us_1_title: 'विशेषज्ञ टीम',
    mis_selling_why_choose_us_1_description: 'हमें बीमा मिस-सेलिंग शिकायतों को संभालने का वर्षों का अनुभव है।',
    mis_selling_why_choose_us_2_title: 'पूर्ण दस्तावेज़ीकरण',
    mis_selling_why_choose_us_2_description: 'हम सभी आवश्यक दस्तावेज़, नोटिस और शिकायत पत्र तैयार करते हैं।',
    mis_selling_why_choose_us_3_title: 'कानूनी सहायता',
    mis_selling_why_choose_us_3_description: 'आवश्यकता पड़ने पर, हम कानूनी नोटिस तैयार करने और लोकपाल मे शिकायत दर्ज करने की सेवाएं प्रदान करते हैं।',
    mis_selling_why_choose_us_4_title: 'उच्च सफलता दर',
    mis_selling_why_choose_us_4_description: 'हमने सैकड़ों ग्राहकों को मुआवजा और पॉलिसी रद्द कराने में मदद की है।',

    mis_selling_process_flow: 'मिस-सेलिंग को हल करने की हमारी 6-स्टेप प्रक्रिया',
    mis_selling_process_flow_description: 'सरल, पारदर्शी और प्रभावी तरीका',
    mis_selling_process_flow1_title: 'परामर्श और केस विश्लेषण',
    mis_selling_process_flow1_description: 'हम आपके पॉलिसी दस्तावेज़ और बिक्री रिकॉर्ड की समीक्षा करते हैं और समझते हैं कि क्या वादा किया गया था और आपको क्या मिला।',
    mis_selling_process_flow2_title: 'सबूत संग्रह',
    mis_selling_process_flow2_description: 'हम सभी प्रमाण एकत्र करते हैं - पॉलिसी दस्तावेज़, एजेंट के वादे, ईमेल/एसएमएस रिकॉर्ड, बैंक स्टेटमेंट।',
    mis_selling_process_flow3_title: 'शिकायत तैयार करना',
    mis_selling_process_flow3_description: 'हम एक विस्तृत शिकायत पत्र तैयार करते हैं जिसमें मिस-सेलिंग और आपके नुकसान को दर्शाया जाता है।',
    mis_selling_process_flow4_title: 'शिकायत दर्ज करना',
    mis_selling_process_flow4_description: 'हम बीमा कंपनी के ग्रिवांस सेल में शिकायत दर्ज करते हैं और आवश्यकता होने पर हम मामले को आगे बढ़ाते हैं।',
    mis_selling_process_flow5_title: 'ओम्बड्समैन/IRDAI में शिकायत',
    mis_selling_process_flow5_description: 'यदि कंपनी जवाब नहीं देती, तो हम मामले को ओम्बड्समैन या IRDAI तक ले जाते हैं।',
    mis_selling_process_flow6_title: 'समाधान और मुआवजा',
    mis_selling_process_flow6_description: 'हम तब तक फॉलो-अप करते हैं जब तक आपको पॉलिसी रद्द, प्रीमियम रिफंड या मुआवजा नहीं मिल जाता।',


    mis_selling_example_scenarios: 'वास्तविक जीवन के मिस-सेलिंग उदाहरण',
    mis_selling_example_scenarios_subtitle: 'ये सामान्य स्थितियां हैं जिन्हें हम हल करने में मदद करते हैं',

    mis_selling_example_scenarios_case1_title: 'केस 1: ULIP को फिक्स्ड डिपॉजिट के रूप में बेचा गया',
    mis_selling_example_scenarios_case1_problem: 'रमेश को बैंक द्वारा बताया गया कि वह 5 साल का फिक्स्ड डिपॉजिट खोल रहा है जिसमें 8% गारंटीड रिटर्न मिलेगा।',
    mis_selling_example_scenarios_case1_reality: 'वास्तव में यह एक ULIP (मार्केट-लिंक्ड बीमा) था जिसमें 5 साल का लॉक-इन, उच्च शुल्क और कोई गारंटीड रिटर्न नहीं था।',
    mis_selling_example_scenarios_case1_solution: 'हमने रमेश की शिकायत दर्ज करने में मदद की। बीमा कंपनी ने उसका प्रीमियम वापस किया और पॉलिसी रद्द कर दी।',

    mis_selling_example_scenarios_case2_title: 'केस 2: पॉलिसी में छिपे हुए शुल्क',
    mis_selling_example_scenarios_case2_problem: 'सुनीता ने एक पेंशन प्लान खरीदा, लेकिन उसे यह नहीं बताया गया कि जल्दी निकालने पर 30% सरेंडर चार्ज लगेगा।',
    mis_selling_example_scenarios_case2_reality: 'जब उसने 2 साल बाद पैसा निकालने की कोशिश की, तो उसे ₹90,000 का नुकसान हुआ।',
    mis_selling_example_scenarios_case2_solution: 'हमने मामले को बीमा ओम्बड्समैन तक पहुंचाया। सुनीता को 60% सरेंडर चार्ज वापस मिला।',

    mis_selling_example_scenarios_case3_title: 'केस 3: बिना सहमति के पॉलिसी बेचना',
    mis_selling_example_scenarios_case3_problem: 'प्रकाश ने पाया कि उसके खाते से बिना जानकारी के बीमा प्रीमियम काटा जा रहा है।',
    mis_selling_example_scenarios_case3_reality: 'बैंक ने उसे बिना सही जानकारी या हस्ताक्षर के बीमा योजना में शामिल कर दिया था।',
    mis_selling_example_scenarios_case3_solution: 'हमने IRDAI में शिकायत दर्ज की। पॉलिसी रद्द हुई और पूरा प्रीमियम वापस मिला।',

    mis_selling_example_scenarios_case4_title: 'केस 4: फर्जी मैच्योरिटी वादे',
    mis_selling_example_scenarios_case4_problem: 'मीरा को एजेंट ने 10 साल बाद ₹10 लाख मिलने का वादा किया था।',
    mis_selling_example_scenarios_case4_reality: 'पॉलिसी में मार्केट-लिंक्ड रिटर्न था, कोई गारंटी नहीं थी। उसे कम राशि मिल सकती थी।',
    mis_selling_example_scenarios_case4_solution: 'हमने फ्री-लुक अवधि में पॉलिसी रद्द करवाई और पूरा पैसा वापस दिलाया।',

    mis_selling_example_scenarios_case_problem: '❌ समस्या:',
    mis_selling_example_scenarios_case_reality: '⚠️ वास्तविकता:',
    mis_selling_example_scenarios_case_solution: '✅ हमारा समाधान:',

    mis_selling_faqs: 'अक्सर पूछे जाने वाले प्रश्न',
    mis_selling_faq_subtitle: 'बीमा मिस-सेलिंग से जुड़े सामान्य प्रश्न',

    mis_selling_faq1_question: 'मुझे कैसे पता चलेगा कि मैं मिस-सेलिंग का शिकार हूँ?',
    mis_selling_faq1_answer: 'यदि आपको जो बताया गया था वह पॉलिसी दस्तावेज़ से मेल नहीं खाता या महत्वपूर्ण जानकारी छिपाई गई है, तो यह मिस-सेलिंग है।',

    mis_selling_faq2_question: 'मिस-सेलिंग शिकायत दर्ज करने की समय सीमा क्या है?',
    mis_selling_faq2_answer: 'आप खरीद की तारीख से 3 साल के भीतर शिकायत कर सकते हैं।',

    mis_selling_faq3_question: 'क्या मुझे पूरा रिफंड मिल सकता है?',
    mis_selling_faq3_answer: 'हाँ, कई मामलों में संभव है, विशेषकर फ्री-लुक अवधि में।',

    mis_selling_faq4_question: 'क्या एजेंट या बैंक पर कार्रवाई होगी?',
    mis_selling_faq4_answer: 'हाँ, IRDAI कार्रवाई कर सकता है और दंड लगा सकता है।',

    mis_selling_faq5_question: 'क्या मुझे वकील की आवश्यकता है?',
    mis_selling_faq5_answer: 'नहीं, हम पूरी प्रक्रिया संभालते हैं।',

    mis_selling_faq6_question: 'इस प्रक्रिया में कितना समय लगता है?',
    mis_selling_faq6_answer: 'कंपनी स्तर: 15-30 दिन, ओम्बड्समैन: 2-4 महीने।',

    mis_selling_cta_title: 'क्या आप बीमा मिस-सेलिंग के शिकार हैं?',
    mis_selling_cta_description: 'बीमा कंपनियों को बचने न दें। हम आपको न्याय, मुआवजा और पॉलिसी रद्द कराने में मदद करेंगे। आज ही हमसे संपर्क करें।',
    mis_selling_cta_button: 'मुफ्त परामर्श प्राप्त करें',
    mis_selling_cta_call_button: 'अभी कॉल करें',

    // ------------------------------------------------------------------------------------Mis-Selling Page Ends


    // Claim Rejection Page ------------------------------------------------------------------------------------


    claim_rej_title_backlink1: 'बीमा दावा अस्वीकृति',
    claim_rej_title_backlink2: 'होम',

    claim_rej_title: 'बीमा दावा अस्वीकृति सहायता',

    claim_rej_description: 'बीमा दावों की अस्वीकृति के कारणों को समझना और समस्या के समाधान के लिए उठाए जा सकने वाले कदमों का पता लगाना। बीमा दावा अस्वीकृत होना पॉलिसीधारकों के लिए निराशाजनक और भावनात्मक रूप से कठिन हो सकता है। बीमा दावा अस्वीकृति पॉलिसी की शर्तों, दस्तावेज़ीकरण संबंधी समस्याओं या पॉलिसी की शर्तों की व्याख्या में त्रुटि के कारण हो सकती है।',

    what_claim_rej_title: 'बीमा दावा अस्वीकृति क्या है?',
    what_claim_rej_description: 'बीमा दावा अस्वीकृति तब होती है जब बीमा कंपनी पॉलिसीधारक के दावे के निपटान के अनुरोध को अस्वीकार कर देती है।',
    what_claim_rej_description1: 'यह स्थिति कई कारणों से उत्पन्न हो सकती है, जिनमें शामिल हैं',
    what_claim_rej_description2: 'अपूर्ण दस्तावेज़, पॉलिसी एक्सक्लूजन, समय सीमा चूकना या कवरेज शर्तों पर असहमति।',
    what_claim_rej_description3: 'कई पॉलिसीधारक यह नहीं समझ पाते कि दावा अस्वीकृत होने पर क्या करना चाहिए। अस्वीकृति पत्र में तकनीकी जानकारी होती है जिसे समझना कठिन होता है, जिससे ग्राहकों को यह स्पष्ट नहीं होता कि निर्णय अंतिम है या आगे कदम उठाए जा सकते हैं।',

    what_claim_rej_common_reasons: 'सामान्य कारण शामिल हैं:',
    what_claim_rej_common_reasons1: '✗ अधूरे या गलत दस्तावेज़',
    what_claim_rej_common_reasons2: '✗ दावा प्रस्तुत करने में देरी',
    what_claim_rej_common_reasons3: '✗ पॉलिसी एक्सक्लूजन या सीमाएं',
    what_claim_rej_common_reasons4: '✗ पॉलिसी खरीद के समय महत्वपूर्ण जानकारी का खुलासा न करना',
    what_claim_rej_common_reasons5: '✗ दावा पात्रता पर असहमति',
    what_claim_rej_common_reasons6: '✗ पॉलिसी शर्तों की गलत व्याख्या',

    what_happens_after_claim_rej_title: 'दावा अस्वीकृति के बाद क्या होता है',
    what_happens_after_claim_rej_description: 'अस्वीकृति के बाद प्रभाव और अगले कदम समझें',

    what_happens_item1: 'पॉलिसी को लेकर भ्रम',
    what_happens_desc1: 'पॉलिसी की शर्तों और वास्तविक कवरेज बनाम वादों को लेकर अनिश्चितता।',

    what_happens_item2: 'तकनीकी विवरण',
    what_happens_desc2: 'अस्वीकृति पत्र में जटिल तकनीकी जानकारी हो सकती है जिसे समझना कठिन होता है।',

    what_happens_item3: 'अस्पष्ट अगले कदम',
    what_happens_desc3: 'पॉलिसीधारकों को यह स्पष्ट नहीं होता कि निर्णय अंतिम है या वे इसे चुनौती दे सकते हैं।',

    why_choose_claim_rej_title: 'यशोदा टोटल सोल्यूशन को क्यों चुनें?',
    why_choose_claim_rej_description: 'दावा अस्वीकृति मामलों को प्रभावी ढंग से हल करने के लिए विशेषज्ञ मार्गदर्शन',

    why_choose_claim_rej_item1: 'विशेषज्ञ टीम',
    why_choose_claim_rej_desc1: 'बीमा दावा अस्वीकृति मामलों को संभालने का वर्षों का अनुभव।',

    why_choose_claim_rej_item2: 'पूर्ण दस्तावेज़ीकरण',
    why_choose_claim_rej_desc2: 'हम सभी आवश्यक दस्तावेज़, नोटिस और शिकायत पत्र तैयार करते हैं।',

    why_choose_claim_rej_item3: 'कानूनी सहायता',
    why_choose_claim_rej_desc3: 'आवश्यक होने पर कानूनी नोटिस और ओम्बड्समैन शिकायत दाखिल करते हैं।',

    why_choose_claim_rej_item4: 'उच्च सफलता दर',
    why_choose_claim_rej_desc4: 'सैकड़ों ग्राहकों को मुआवजा और समाधान दिलाने में मदद की है।',

    process_flow_claim_rej_title: 'दावा अस्वीकृति समाधान के लिए हमारी 5-स्टेप प्रक्रिया',
    process_flow_claim_rej_description: 'दावा अस्वीकृति को संबोधित करने का व्यवस्थित तरीका',

    process_flow_claim_rej_item1: 'केस समीक्षा और विश्लेषण',
    process_flow_claim_rej_desc1: 'हम आपकी पॉलिसी, अस्वीकृति पत्र और कारणों की समीक्षा करते हैं।',

    process_flow_claim_rej_item2: 'सबूत संग्रह',
    process_flow_claim_rej_desc2: 'हम सभी संबंधित दस्तावेज़ और प्रमाण एकत्र करते हैं।',

    process_flow_claim_rej_item3: 'उत्तर तैयार करना',
    process_flow_claim_rej_desc3: 'हम अस्वीकृति के कारणों का बिंदुवार उत्तर तैयार करते हैं।',

    process_flow_claim_rej_item4: 'शिकायत दर्ज करना',
    process_flow_claim_rej_desc4: 'हम बीमा कंपनी में शिकायत दर्ज करते हैं।',

    process_flow_claim_rej_item5: 'ओम्बड्समैन एस्केलेशन',
    process_flow_claim_rej_desc5: 'जरूरत होने पर ओम्बड्समैन या IRDAI तक मामला ले जाते हैं।',

    ex_scenario_claim_rej_title: 'वास्तविक जीवन का दावा अस्वीकृति उदाहरण',
    ex_scenario_claim_rej_description: 'सामान्य स्थितियां जिन्हें हम हल करते हैं',

    ex_scenario_claim_rej_example1_title: 'उदाहरण 1 – मेडिकल दस्तावेज़ की कमी',
    ex_scenario_claim_rej_example1_problem: 'पॉलिसीधारक अस्पताल उपचार के बाद दावा करता है।',
    ex_scenario_claim_rej_example1_reality: 'दस्तावेज़ अधूरे होने के कारण दावा अस्वीकृत हो जाता है।',
    ex_scenario_claim_rej_example1_solution: 'हमने दस्तावेज़ पूरे करवाए और दावा स्वीकृत हुआ।',

    ex_scenario_claim_rej_example2_title: 'उदाहरण 2 – पॉलिसी एक्सक्लूजन क्लॉज',
    ex_scenario_claim_rej_example2_problem: 'ग्राहक बीमारी के लिए दावा करता है।',
    ex_scenario_claim_rej_example2_reality: 'बीमारी एक्सक्लूजन में होने के कारण दावा अस्वीकृत होता है।',
    ex_scenario_claim_rej_example2_solution: 'हमने पॉलिसी समझाकर मार्गदर्शन किया।',

    ex_scenario_claim_rej_example3_title: 'उदाहरण 3 – देर से दावा जमा करना',
    ex_scenario_claim_rej_example3_problem: 'दुर्घटना के बाद देर से सूचना दी जाती है।',
    ex_scenario_claim_rej_example3_reality: 'समय सीमा पार होने पर दावा अस्वीकृत होता है।',
    ex_scenario_claim_rej_example3_solution: 'हमने अपील कर आंशिक दावा स्वीकृत कराया।',

    ex_scenario_claim_rej_example4_title: 'उदाहरण 4 – पूर्व-विद्यमान बीमारी विवाद',
    ex_scenario_claim_rej_example4_problem: 'दावा पूर्व बीमारी के कारण अस्वीकृत होता है।',
    ex_scenario_claim_rej_example4_reality: 'बीमाकर्ता मानता है कि बीमारी पहले से थी।',
    ex_scenario_claim_rej_example4_solution: 'हमने प्रमाण देकर दावा स्वीकृत कराया।',

    ex_scenario_claim_rej_example_head1: '❌ समस्या:',
    ex_scenario_claim_rej_example_head2: '⚠️ वास्तविकता:',
    ex_scenario_claim_rej_example_head3: '✅ हमारा समाधान:',

    faq_claim_rej_title: 'अक्सर पूछे जाने वाले प्रश्न',
    faq_claim_rej_description: 'दावा अस्वीकृति से जुड़े सामान्य प्रश्न',

    faq_claim_rej_q1: 'बीमा दावा अस्वीकृति का क्या मतलब है?',
    faq_claim_rej_a1: 'इसका मतलब है कि बीमा कंपनी ने दावा अस्वीकार कर दिया है।',

    faq_claim_rej_q2: 'क्या अस्वीकृत दावा फिर से देखा जा सकता है?',
    faq_claim_rej_a2: 'कुछ मामलों में समीक्षा संभव है।',

    faq_claim_rej_q3: 'दावे के लिए कौन से दस्तावेज़ आवश्यक हैं?',
    faq_claim_rej_a3: 'पॉलिसी, फॉर्म, मेडिकल रिपोर्ट आदि।',

    faq_claim_rej_q4: 'दावे अस्वीकृत क्यों होते हैं?',
    faq_claim_rej_a4: 'दस्तावेज़, देरी या पॉलिसी शर्तों के कारण।',

    cta_claim_rej_title: 'दावा अस्वीकृति के बाद भ्रम में हैं?',
    cta_claim_rej_description: 'कारण समझना आपके लिए महत्वपूर्ण है। हमसे संपर्क करें।',
    cta_claim_rej_description2: 'मुफ्त परामर्श प्राप्त करें',
    cta_claim_rej_button: 'अभी कॉल करें',

    //-------------------------------------------------------------------------------------Claim Rejection Page Ends

    //Claim Delay Page ------------------------------------------------------------------------------------


    claim_delay_title_backlink1: 'होम',
    claim_delay_title_backlink2: 'दावा प्रक्रिया में देरी',

    claim_delay_title: 'बीमा दावा प्रक्रिया में देरी',

    claim_delay_description: 'यह समझना कि बीमा दावे कभी-कभी अपेक्षा से अधिक समय क्यों लेते हैं और पॉलिसीधारक इस प्रक्रिया को बेहतर तरीके से कैसे समझ सकते हैं। दस्तावेज़ सत्यापन, आंतरिक जांच, पॉलिसी शर्तों या बीमा कंपनियों द्वारा अपनाई जाने वाली प्रशासनिक प्रक्रियाओं के कारण देरी हो सकती है।',

    what_claim_delay_title: 'दावा प्रक्रिया में देरी को समझना',

    what_claim_delay_description: 'बीमा दावा प्रक्रिया एक संरचित प्रक्रिया है जिसमें कई चरणों में सत्यापन और दस्तावेज़ों की समीक्षा शामिल होती है।',

    what_claim_delay_description1: 'कभी-कभी दावों को संसाधित होने में अपेक्षा से अधिक समय लग सकता है। ये देरी कई कारणों से हो सकती है जैसे',

    what_claim_delay_description2: 'अतिरिक्त दस्तावेज़ों की मांग, आंतरिक समीक्षा प्रक्रियाएं या पॉलिसी से संबंधित स्पष्टीकरण की आवश्यकता।',

    what_claim_delay_description3: 'पॉलिसीधारकों के लिए यह प्रतीक्षा अवधि निराशाजनक और अनिश्चित हो सकती है, विशेष रूप से जब वे दुर्घटनाओं, चिकित्सा उपचार या अन्य बीमित घटनाओं से जुड़े वित्तीय खर्चों को कवर करने के लिए दावा निपटान पर निर्भर होते हैं।',

    what_claim_delay_common_reasons: 'देरी के सामान्य कारण शामिल हैं:',
    what_claim_delay_common_reasons1: '• अधूरे दावा दस्तावेज़',
    what_claim_delay_common_reasons2: '• बीमा कंपनी द्वारा अतिरिक्त सत्यापन या जांच',
    what_claim_delay_common_reasons3: '• अस्पताल या सेवा प्रदाता द्वारा दस्तावेज़ में देरी',
    what_claim_delay_common_reasons4: '• संसाधित किए जा रहे दावों की अधिक संख्या',
    what_claim_delay_common_reasons5: '• अतिरिक्त मूल्यांकन की आवश्यकता वाली पॉलिसी शर्तें',
    what_claim_delay_common_reasons6: '• संबंधित पक्षों के बीच संचार में अंतर',

    what_happens_after_claim_delay_title: 'दावा समीक्षा के दौरान क्या होता है',
    what_happens_after_claim_delay_description: 'समीक्षा प्रक्रिया को समझना जो देरी का कारण बन सकती है',

    what_happens_claim_delay_item1: 'दस्तावेज़ सत्यापन',
    what_happens_claim_delay_desc1: 'बीमा कंपनी सभी जमा किए गए दस्तावेज़ों और प्रमाणों की जांच करती है।',

    what_happens_claim_delay_item2: 'मेडिकल समीक्षा',
    what_happens_claim_delay_desc2: 'मेडिकल रिपोर्ट, दुर्घटना विवरण या उपचार रिकॉर्ड की विस्तृत समीक्षा।',

    what_happens_claim_delay_item3: 'पॉलिसी जांच',
    what_happens_claim_delay_desc3: 'पॉलिसी पात्रता शर्तों और कवरेज की पुष्टि।',

    what_happens_claim_delay_item4: 'अतिरिक्त जानकारी',
    what_happens_claim_delay_desc4: 'यदि प्रारंभिक दस्तावेज़ अधूरे हों तो अतिरिक्त दस्तावेज़ों का अनुरोध।',

    why_choose_claim_delay_title: 'यशोदा टोटल सोल्यूशन को क्यों चुनें?',
    why_choose_claim_delay_description: 'दावा प्रक्रिया मार्गदर्शन के लिए विशेषज्ञ सहायता',

    why_choose_claim_delay_item1: 'विशेषज्ञ टीम',
    why_choose_claim_delay_desc1: 'बीमा दावा अस्वीकृति और विवादों को संभालने का वर्षों का अनुभव।',

    why_choose_claim_delay_item2: 'पूर्ण दस्तावेज़ीकरण',
    why_choose_claim_delay_desc2: 'हम आपके लिए सभी आवश्यक दस्तावेज़, नोटिस और शिकायत पत्र तैयार करते हैं।',

    why_choose_claim_delay_item3: 'कानूनी सहायता',
    why_choose_claim_delay_desc3: 'आवश्यक होने पर कानूनी नोटिस और ओम्बड्समैन शिकायत दाखिल करते हैं।',

    why_choose_claim_delay_item4: 'उच्च सफलता दर',
    why_choose_claim_delay_desc4: 'सैकड़ों ग्राहकों को मुआवजा और समाधान दिलाने में मदद की है।',

    process_flow_claim_delay_title: 'दावा सहायता के लिए हमारी 5-स्टेप प्रक्रिया',
    process_flow_claim_delay_description: 'दावा देरी को प्रभावी ढंग से संभालने में आपकी मदद करना',

    process_flow_claim_delay_item1: 'दस्तावेज़ समीक्षा',
    process_flow_claim_delay_desc1: 'हम आपके दस्तावेज़ों की समीक्षा करते हैं और सुनिश्चित करते हैं कि सभी आवश्यक कागजात पूर्ण और सही हैं।',

    process_flow_claim_delay_item2: 'स्थिति ट्रैकिंग',
    process_flow_claim_delay_desc2: 'हम आपको आपके दावे की स्थिति समझने में मदद करते हैं।',

    process_flow_claim_delay_item3: 'फॉलो-अप सहायता',
    process_flow_claim_delay_desc3: 'दावा प्रक्रिया को तेज करने के लिए नियमित फॉलो-अप।',

    process_flow_claim_delay_item4: 'अतिरिक्त दस्तावेज़',
    process_flow_claim_delay_desc4: 'यदि अतिरिक्त दस्तावेज़ मांगे जाते हैं, तो हम उन्हें एकत्र करने में मदद करते हैं।',

    process_flow_claim_delay_item5: 'समाधान सहायता',
    process_flow_claim_delay_desc5: 'हम पूरे प्रक्रिया में आपका मार्गदर्शन करते हैं जब तक दावा निपटान नहीं हो जाता।',

    ex_scenario_claim_delay_title: 'वास्तविक जीवन के दावा देरी उदाहरण',
    ex_scenario_claim_delay_description: 'सामान्य स्थितियां जहां दावों में देरी होती है',

    ex_scenario_claim_delay_example1_title: 'उदाहरण 1 – अस्पताल दस्तावेज़ में देरी',
    ex_scenario_claim_delay_example1_problem: 'एक मरीज अस्पताल उपचार के बाद स्वास्थ्य बीमा दावा करता है।',
    ex_scenario_claim_delay_example1_reality: 'अतिरिक्त मेडिकल रिपोर्ट की प्रतीक्षा के कारण दावा लंबित रहता है।',
    ex_scenario_claim_delay_example1_solution: 'हमने अस्पताल के साथ समन्वय किया और दावा 2 सप्ताह में प्रोसेस हुआ।',

    ex_scenario_claim_delay_example2_title: 'उदाहरण 2 – दुर्घटना जांच',
    ex_scenario_claim_delay_example2_problem: 'मोटर दुर्घटना दावा अपेक्षा से अधिक समय लेता है।',
    ex_scenario_claim_delay_example2_reality: 'बीमा कंपनी जांच करती है।',
    ex_scenario_claim_delay_example2_solution: 'हमने सभी प्रमाण दिए और दावा 45 दिनों में निपटा।',

    ex_scenario_claim_delay_example3_title: 'उदाहरण 3 – अधूरे दस्तावेज़',
    ex_scenario_claim_delay_example3_problem: 'दावा अधूरे दस्तावेज़ के कारण रुका।',
    ex_scenario_claim_delay_example3_reality: 'कुछ दस्तावेज़ जमा नहीं हुए थे।',
    ex_scenario_claim_delay_example3_solution: 'हमने दस्तावेज़ जमा करवाए और दावा 10 दिनों में स्वीकृत हुआ।',

    ex_scenario_claim_delay_example4_title: 'उदाहरण 4 – पॉलिसी समीक्षा',
    ex_scenario_claim_delay_example4_problem: 'बीमा कंपनी अधिक समय लेती है।',
    ex_scenario_claim_delay_example4_reality: 'पॉलिसी कवरेज की जांच होती है।',
    ex_scenario_claim_delay_example4_solution: 'हमने स्पष्टीकरण दिया और दावा स्वीकृत हुआ।',

    ex_scenario_claim_delay_example_head1: '⏱️ समस्या:',
    ex_scenario_claim_delay_example_head2: '📋 वास्तविकता:',
    ex_scenario_claim_delay_example_head3: '✅ हमारा समाधान:',

    faq_claim_delay_title: 'अक्सर पूछे जाने वाले प्रश्न',
    faq_claim_delay_description: 'दावा देरी से जुड़े सामान्य प्रश्न',

    faq_claim_delay_q1: 'दावे में देरी क्यों होती है?',
    faq_claim_delay_a1: 'दस्तावेज़ सत्यापन और जांच के कारण।',

    faq_claim_delay_q2: 'दावा प्रक्रिया में कितना समय लगता है?',
    faq_claim_delay_a2: 'समय अलग-अलग हो सकता है।',

    faq_claim_delay_q3: 'देरी होने पर क्या करें?',
    faq_claim_delay_a3: 'स्थिति जांचें और फॉलो-अप करें।',

    faq_claim_delay_q4: 'क्या दस्तावेज़ देने के बाद भी देरी हो सकती है?',
    faq_claim_delay_a4: 'हाँ, अतिरिक्त जांच हो सकती है।',

    cta_claim_delay_title: 'क्या आपके दावे में देरी हो रही है?',
    cta_claim_delay_description: 'प्रक्रिया समझना मददगार हो सकता है। हमसे संपर्क करें।',
    cta_claim_delay_description2: 'मुफ्त परामर्श प्राप्त करें',
    cta_claim_delay_button: 'अभी कॉल करें',

    //-------------------------------------------------------------------------------------Claim Delay Page Ends

    //Partial Claim Settlement --------------------------------------------------------------------------------


    partial_claim_title_backlink1: 'होम',
    partial_claim_title_backlink2: 'आंशिक दावा निपटान',

    partial_claim_title: 'आंशिक दावा निपटान',

    partial_claim_description: 'उन स्थितियों को समझना जहां बीमा दावे को मंजूरी दी जाती है लेकिन अपेक्षित राशि से कम पर निपटान किया जाता है। कभी-कभी बीमा कंपनियां दावा मंजूर करती हैं लेकिन कुल दावा की गई राशि का केवल एक हिस्सा ही भुगतान करती हैं। इस स्थिति को आंशिक दावा निपटान कहा जाता है। कम की गई दावा राशि के पीछे के कारणों को समझना स्थिति का मूल्यांकन करने और आगे उठाए जाने वाले संभावित कदमों को निर्धारित करने के लिए महत्वपूर्ण है।',

    what_partial_claim_title: 'सेवा अवलोकन',

    what_partial_claim_description: 'आंशिक दावा निपटान तब होता है जब बीमा कंपनी दावा मंजूर करती है लेकिन कुल दावा की गई राशि का केवल एक हिस्सा ही भुगतान करती है।',

    what_partial_claim_description1: 'यह तब हो सकता है जब कुछ खर्च पॉलिसी कवरेज के बाहर आते हों या जब',

    what_partial_claim_description2: 'पॉलिसी की सीमाएं और कटौतियां लागू होती हैं।',

    what_partial_claim_description3: 'कई पॉलिसीधारकों के लिए दावा की गई राशि और स्वीकृत निपटान राशि के बीच का अंतर भ्रम और वित्तीय चिंता उत्पन्न कर सकता है।',

    what_partial_claim_description4: 'बीमा कंपनी दावा राशि की गणना कैसे करती है और पॉलिसी की शर्तों की सावधानीपूर्वक समीक्षा करना यह स्पष्ट करने में मदद कर सकता है कि आंशिक निपटान क्यों हुआ।',

    what_partial_claim_description5: 'यशोदा टोटल सोल्यूशन्स',

    what_partial_claim_description6: 'ऐसी स्थितियों की समीक्षा करके, निपटान के निर्णय के पीछे के संभावित कारणों को समझाकर और प्रक्रिया को समझने में ग्राहकों की सहायता करता है।',

    common_signs_partial_claim: 'आंशिक दावा निपटान के सामान्य संकेत',

    common_signs_partial_claim_description: 'जब दावा अपेक्षित राशि से कम पर निपटाया जाता है, तो पॉलिसीधारक कुछ संकेत देख सकते हैं',

    common_signs_partial_claim_title1: 'कम निपटान राशि',
    common_signs_partial_claim_desc1: 'स्वीकृत दावा राशि प्रस्तुत किए गए कुल खर्चों से काफी कम होती है',

    common_signs_partial_claim_title2: 'बहिष्कृत शुल्क',
    common_signs_partial_claim_desc2: 'कुछ अस्पताल या सेवा से संबंधित शुल्क निपटान में शामिल नहीं किए जाते हैं',

    common_signs_partial_claim_title3: 'पॉलिसी सीमाएं लागू होना',
    common_signs_partial_claim_desc3: 'अधिकतम कवरेज सीमा के कारण कुल प्रतिपूर्ति राशि कम हो जाती है',

    common_signs_partial_claim_title4: 'गैर-कवर्ड सेवाएं',
    common_signs_partial_claim_desc4: 'कुछ उपचार या सेवाएं पॉलिसी के अंतर्गत कवर नहीं होती हैं',

    common_signs_partial_claim_title5: 'कटौतियां लागू होना',
    common_signs_partial_claim_desc5: 'पॉलिसी की कटौतियां दावा राशि से घटाई जाती हैं',

    common_signs_partial_claim_title6: 'मूल्यह्रास कटौती',
    common_signs_partial_claim_desc6: 'मोटर या संपत्ति दावों में संपत्ति के मूल्यह्रास के कारण निपटान राशि कम हो जाती है',

    what_happens_after_partial_claim_title: 'आंशिक दावा निपटान मामलों में वास्तव में क्या होता है',

    what_happens_after_partial_claim_description: 'जब कोई दावा प्रस्तुत किया जाता है, तो बीमा कंपनी दस्तावेजों की समीक्षा करती है और पॉलिसी की शर्तों के अनुसार खर्चों का मूल्यांकन करती है।',

    what_happens_partial_claim_item1: 'पॉलिसी शर्तों का अनुप्रयोग',
    what_happens_partial_claim_desc1: 'मूल्यांकन के दौरान बीमाकर्ता कवरेज सीमाएं और पॉलिसी शर्तें लागू करता है।',

    what_happens_partial_claim_item2: 'कटौतियों की गणना',
    what_happens_partial_claim_desc2: 'मूल्यह्रास, कटौतियां या सह-भुगतान जैसी विभिन्न कटौतियों की गणना की जाती है।',

    what_happens_partial_claim_item3: 'तकनीकी स्पष्टीकरण',
    what_happens_partial_claim_desc3: 'निपटान रिपोर्ट में तकनीकी भाषा हो सकती है जिसे समझना कठिन होता है।',

    process_flow_partial_claim_title: 'दावा मूल्यांकन प्रक्रिया',

    process_flow_partial_claim_description: 'बीमा कंपनियां अंतिम दावा निपटान राशि कैसे निर्धारित करती हैं',

    process_flow_partial_claim_item1: 'दावा प्रस्तुत किया गया',
    process_flow_partial_claim_desc1: 'पॉलिसीधारक पूर्ण दस्तावेजों और खर्च विवरण के साथ दावा प्रस्तुत करता है।',

    process_flow_partial_claim_item2: 'दस्तावेजों का सत्यापन',
    process_flow_partial_claim_desc2: 'बीमा कंपनी सभी प्रस्तुत दस्तावेजों और बिलों का सत्यापन करती है।',

    process_flow_partial_claim_item3: 'पॉलिसी शर्तों का अनुप्रयोग',
    process_flow_partial_claim_desc3: 'कवरेज सीमाएं, बहिष्करण और पॉलिसी शर्तों का मूल्यांकन किया जाता है।',

    process_flow_partial_claim_item4: 'कटौतियों की गणना',
    process_flow_partial_claim_desc4: 'कटौतियां, मूल्यह्रास और अन्य लागू कटौतियों की गणना की जाती है।',

    process_flow_partial_claim_item5: 'अंतिम निपटान स्वीकृत',
    process_flow_partial_claim_desc5: 'कम की गई अंतिम राशि स्वीकृत की जाती है और पॉलिसीधारक को भुगतान किया जाता है।',

    ex_scenario_partial_claim_title: 'वास्तविक जीवन के आंशिक दावा निपटान उदाहरण',

    ex_scenario_partial_claim_description: 'सामान्य परिस्थितियां जहां दावे कम राशि पर निपटाए जाते हैं',

    ex_scenario_partial_claim_example1_title: 'उदाहरण 1 – अस्पताल कक्ष किराया सीमा',
    ex_scenario_partial_claim_example1_claimed: '₹1,20,000',
    ex_scenario_partial_claim_example1_settled: '₹80,000',
    ex_scenario_partial_claim_example1_solution: 'एक मरीज अस्पताल में उपचार प्राप्त करता है और ₹1,20,000 का दावा प्रस्तुत करता है। हालांकि, बीमा कंपनी केवल ₹80,000 का भुगतान करती है क्योंकि अस्पताल के कमरे का किराया पॉलिसी में निर्धारित सीमा से अधिक था।',

    ex_scenario_partial_claim_example2_title: 'उदाहरण 2 – गैर-कवर्ड चिकित्सा वस्तुएं',
    ex_scenario_partial_claim_example2_claimed: '₹90,000',
    ex_scenario_partial_claim_example2_settled: '₹65,000',
    ex_scenario_partial_claim_example2_solution: 'अस्पताल के बिल में कुछ वस्तुएं जैसे चिकित्सा उपकरण या विशेष सेवाएं शामिल थीं जो बीमा पॉलिसी के अंतर्गत कवर नहीं थीं। मूल्यांकन के दौरान इन शुल्कों को दावा राशि से हटा दिया गया।',

    ex_scenario_partial_claim_example3_title: 'उदाहरण 3 – मोटर बीमा में मूल्यह्रास',
    ex_scenario_partial_claim_example3_claimed: '₹70,000',
    ex_scenario_partial_claim_example3_settled: '₹50,000',
    ex_scenario_partial_claim_example3_solution: 'वाहन दुर्घटना के बाद मरम्मत बिल ₹70,000 था। बीमा कंपनी केवल ₹50,000 का भुगतान करती है क्योंकि कुछ बदले गए पार्ट्स पर मूल्यह्रास लागू होता है।',

    ex_scenario_partial_claim_example4_title: 'उदाहरण 4 – पॉलिसी उप-सीमाएं',
    ex_scenario_partial_claim_example4_claimed: '₹90,000',
    ex_scenario_partial_claim_example4_settled: '₹60,000',
    ex_scenario_partial_claim_example4_solution: 'पॉलिसी में कुछ उपचारों के लिए विशेष सीमाएं निर्धारित थीं। हालांकि कुल अस्पताल बिल ₹90,000 था, बीमा कंपनी केवल ₹60,000 का भुगतान करती है क्योंकि उस उपचार श्रेणी के लिए अधिकतम भुगतान सीमा तय थी।',

    ex_scenario_partial_claim_example_head1: 'दावा की गई राशि:',
    ex_scenario_partial_claim_example_head2: 'स्वीकृत निपटान राशि:',

    partial_claim_calculation_title: 'दावा निपटान गणना को समझना',

    partial_claim_calculation_description: 'वे प्रमुख कारक जो अंतिम निपटान राशि को निर्धारित करते हैं',

    partial_claim_calculation_item1: 'कवरेज सीमाएं',
    partial_claim_calculation_desc1: 'विशिष्ट उपचारों या क्षति के लिए अधिकतम सीमा।',

    partial_claim_calculation_item2: 'कटौतियां',
    partial_claim_calculation_desc2: 'वह राशि जो पॉलिसीधारक को स्वयं वहन करनी होती है।',

    partial_claim_calculation_item3: 'मूल्यह्रास',
    partial_claim_calculation_desc3: 'कुछ संपत्तियों या पार्ट्स के मूल्य में कमी।',

    partial_claim_calculation_item4: 'बहिष्करण',
    partial_claim_calculation_desc4: 'वे सेवाएं या उपचार जो पॉलिसी के अंतर्गत कवर नहीं होते।',

    why_choose_partial_claim_title: 'यशोदा टोटल सोल्यूशन को क्यों चुनें?',

    why_choose_partial_claim_description: 'दावा प्रक्रिया मार्गदर्शन के लिए विशेषज्ञ सहायता',

    why_choose_partial_claim_item1: 'विशेषज्ञ टीम',
    why_choose_partial_claim_desc1: 'बीमा दावा अस्वीकृति शिकायतों और विवादों को संभालने का वर्षों का अनुभव।',

    why_choose_partial_claim_item2: 'पूर्ण दस्तावेज़ीकरण',
    why_choose_partial_claim_desc2: 'हम आपके लिए सभी आवश्यक दस्तावेज, नोटिस और शिकायत पत्र तैयार करते हैं।',

    why_choose_partial_claim_item3: 'कानूनी सहायता',
    why_choose_partial_claim_desc3: 'आवश्यक होने पर कानूनी नोटिस ड्राफ्टिंग और ओम्बड्समैन शिकायत दाखिल करना।',

    why_choose_partial_claim_item4: 'उच्च सफलता दर',
    why_choose_partial_claim_desc4: 'सैकड़ों ग्राहकों को मुआवजा और पॉलिसी समाधान प्राप्त करने में सहायता की है।',

    faq_partial_claim_title: 'अक्सर पूछे जाने वाले प्रश्न',

    faq_partial_claim_description: 'आंशिक दावा निपटान से संबंधित सामान्य प्रश्न',

    faq_partial_claim_q1: 'शॉर्ट क्लेम सेटलमेंट का क्या मतलब है?',
    faq_partial_claim_a1: 'जब बीमा कंपनी दावा मंजूर करती है लेकिन पॉलिसी सीमाओं, कटौतियों या बहिष्करण के कारण केवल आंशिक भुगतान करती है, तो उसे शॉर्ट सेटलमेंट कहा जाता है।',

    faq_partial_claim_q2: 'बीमा कंपनियां दावा राशि क्यों कम करती हैं?',
    faq_partial_claim_a2: 'राशि में कमी पॉलिसी सीमाओं, बहिष्करण, मूल्यह्रास कटौती, कटौतियों या गैर-कवर्ड खर्चों के कारण हो सकती है।',

    faq_partial_claim_q3: 'क्या निपटान राशि अस्पताल बिल से अलग हो सकती है?',
    faq_partial_claim_a3: 'हाँ, स्वीकृत राशि पॉलिसी शर्तों, कवरेज सीमाओं और कवर सेवाओं पर निर्भर करती है।',

    faq_partial_claim_q4: 'पॉलिसीधारक निपटान गणना को कैसे समझ सकते हैं?',
    faq_partial_claim_a4: 'पॉलिसी दस्तावेज और निपटान रिपोर्ट की समीक्षा करके कटौतियों और कारणों को समझा जा सकता है।',

    cta_partial_claim_title: 'क्या आपको अपेक्षा से कम दावा राशि प्राप्त हुई है?',

    cta_partial_claim_description: 'दावा राशि की गणना कैसे की गई है, यह समझना पॉलिसीधारकों को स्थिति का मूल्यांकन करने और अपने विकल्पों की समीक्षा करने में मदद कर सकता है। अधिक जानकारी के लिए यशोदा टोटल सोल्यूशन से संपर्क करें।',

    cta_partial_claim_description2: 'मुफ्त परामर्श प्राप्त करें',

    cta_partial_claim_button: 'अभी कॉल करें',

    //-------------------------------------------------------------------------------------Partial Claim Settlement Page Ends

    //Health Reimbursement Page --------------------------------------------------------------------------------


    health_claim_title_backlink1: 'होम',
    health_claim_title_backlink2: 'स्वास्थ्य दावा प्रतिपूर्ति',

    health_claim_title: 'स्वास्थ्य दावा प्रतिपूर्ति सहायता',

    health_claim_description: 'प्रतिपूर्ति दावा प्रक्रिया को समझना और यह जानना कि पॉलिसीधारक चिकित्सा दावा प्रस्तुतिकरण को प्रभावी ढंग से कैसे प्रबंधित कर सकते हैं। स्वास्थ्य बीमा प्रतिपूर्ति दावे तब होते हैं जब पॉलिसीधारक पहले अपने चिकित्सा खर्चों का भुगतान करते हैं और बाद में बीमा कंपनी को बिल प्रस्तुत करके राशि की वापसी प्राप्त करते हैं।',

    what_health_claim_title: 'स्वास्थ्य दावा प्रतिपूर्ति क्या है?',

    what_health_claim_description: 'स्वास्थ्य दावा प्रतिपूर्ति एक ऐसी प्रक्रिया है जिसमें पॉलिसीधारक अस्पताल में चिकित्सा खर्च का भुगतान स्वयं करता है और बाद में बीमा कंपनी को दावा प्रस्तुत करता है ताकि पात्र राशि की प्रतिपूर्ति प्राप्त की जा सके।',

    what_health_claim_description1: 'कैशलेस अस्पताल में भर्ती के विपरीत,',

    what_health_claim_description2: 'प्रतिपूर्ति दावों में पॉलिसीधारकों को विस्तृत दस्तावेज प्रस्तुत करने होते हैं',

    what_health_claim_description3: 'जैसे अस्पताल के बिल, चिकित्सा रिपोर्ट, प्रिस्क्रिप्शन और डिस्चार्ज सारांश।',

    what_health_claim_description4: 'इस प्रक्रिया के दौरान कई ग्राहकों को कठिनाइयों का सामना करना पड़ता है क्योंकि दस्तावेज़ आवश्यकताएं जटिल हो सकती हैं और दावा समीक्षा प्रक्रिया में समय लग सकता है।',

    what_health_claim_common_reasons: 'सामान्य आवश्यकताओं में शामिल हैं:',
    what_health_claim_common_reasons1: '• अस्पताल के बिल और चालान',
    what_health_claim_common_reasons2: '• डिस्चार्ज सारांश और चिकित्सा रिपोर्ट',
    what_health_claim_common_reasons3: '• चिकित्सा प्रिस्क्रिप्शन',
    what_health_claim_common_reasons4: '• पूर्ण रूप से भरा हुआ दावा फॉर्म',
    what_health_claim_common_reasons5: '• पहचान प्रमाण और पॉलिसी विवरण',

    common_challenges_health_claim_title: 'प्रतिपूर्ति दावा से जुड़ी सामान्य चुनौतियां',

    common_challenges_health_claim_description: 'प्रतिपूर्ति दावों के दौरान पॉलिसीधारकों को जिन समस्याओं का सामना करना पड़ सकता है',

    common_challenges_health_claim_item1: 'दस्तावेजों की कमी',
    common_challenges_health_claim_desc1: 'सफल दावा प्रस्तुत करने के लिए किन दस्तावेजों की आवश्यकता है, इस बारे में भ्रम।',

    common_challenges_health_claim_item2: 'गलत दावा फॉर्म',
    common_challenges_health_claim_desc2: 'अधूरा या गलत तरीके से भरा गया दावा फॉर्म, जिससे प्रक्रिया में देरी होती है।',

    common_challenges_health_claim_item3: 'कवरेज को लेकर भ्रम',
    common_challenges_health_claim_desc3: 'कौन से खर्च पॉलिसी के अंतर्गत कवर हैं, इस बारे में अनिश्चितता।',

    common_challenges_health_claim_item4: 'सत्यापन में देरी',
    common_challenges_health_claim_desc4: 'दस्तावेज़ सत्यापन प्रक्रियाओं के कारण लंबा प्रोसेसिंग समय।',

    common_challenges_health_claim_item5: 'अधूरे मेडिकल रिकॉर्ड',
    common_challenges_health_claim_desc5: 'अस्पताल से मेडिकल रिपोर्ट या डिस्चार्ज सारांश का अभाव।',

    common_challenges_health_claim_item6: 'प्रतिपूर्ति राशि में अंतर',
    common_challenges_health_claim_desc6: 'दावा की गई राशि और स्वीकृत प्रतिपूर्ति राशि के बीच अंतर।',

    what_happens_after_health_claim_title: 'प्रतिपूर्ति मामलों में क्या होता है',

    what_happens_after_health_claim_description: 'प्रतिपूर्ति दावा समीक्षा प्रक्रिया को समझना',

    what_happens_health_claim_item1: 'मरीज पहले भुगतान करता है',
    what_happens_health_claim_desc1: 'पॉलिसीधारक उपचार के समय अस्पताल को सभी चिकित्सा खर्च सीधे भुगतान करता है।',

    what_happens_health_claim_item2: 'दस्तावेज संग्रह',
    what_happens_health_claim_desc2: 'उपचार के बाद सभी संबंधित बिल, रिपोर्ट और डिस्चार्ज सारांश एकत्र किए जाते हैं।',

    what_happens_health_claim_item3: 'बीमा समीक्षा',
    what_happens_health_claim_desc3: 'बीमा कंपनी दस्तावेजों का सत्यापन करती है और प्रक्रिया से पहले पॉलिसी पात्रता की जांच करती है।',

    why_choose_health_claim_title: 'यशोदा टोटल सोल्यूशन को क्यों चुनें?',

    why_choose_health_claim_description: 'प्रतिपूर्ति दावा मार्गदर्शन के लिए विशेषज्ञ सहायता',

    why_choose_health_claim_item1: 'विशेषज्ञ टीम',
    why_choose_health_claim_desc1: 'बीमा दावा अस्वीकृति शिकायतों और विवादों को संभालने का वर्षों का अनुभव।',

    why_choose_health_claim_item2: 'पूर्ण दस्तावेज़ीकरण',
    why_choose_health_claim_desc2: 'हम आपके लिए सभी आवश्यक दस्तावेज, नोटिस और शिकायत पत्र तैयार करते हैं।',

    why_choose_health_claim_item3: 'कानूनी सहायता',
    why_choose_health_claim_desc3: 'आवश्यक होने पर कानूनी नोटिस ड्राफ्टिंग और ओम्बड्समैन शिकायत दाखिल करना।',

    why_choose_health_claim_item4: 'उच्च सफलता दर',
    why_choose_health_claim_desc4: 'सैकड़ों ग्राहकों को मुआवजा और पॉलिसी समाधान प्राप्त करने में सहायता की है।',

    process_flow_health_claim_title: 'हमारी 5-स्टेप प्रतिपूर्ति सहायता प्रक्रिया',

    process_flow_health_claim_description: 'आपके प्रतिपूर्ति दावे के लिए सरल और व्यवस्थित मार्गदर्शन',

    process_flow_health_claim_item1: 'दस्तावेज चेकलिस्ट',
    process_flow_health_claim_desc1: 'हम आपके प्रतिपूर्ति दावे के लिए आवश्यक सभी दस्तावेजों की पूरी सूची प्रदान करते हैं।',

    process_flow_health_claim_item2: 'दस्तावेज समीक्षा',
    process_flow_health_claim_desc2: 'हम आपके सभी चिकित्सा बिल, रिपोर्ट और डिस्चार्ज सारांश की पूर्णता की जांच करते हैं।',

    process_flow_health_claim_item3: 'दावा फॉर्म सहायता',
    process_flow_health_claim_desc3: 'हम आपको सभी आवश्यक पॉलिसी विवरण के साथ दावा फॉर्म सही तरीके से भरने में मदद करते हैं।',

    process_flow_health_claim_item4: 'जमा सहायता',
    process_flow_health_claim_desc4: 'हम आपको यह मार्गदर्शन देते हैं कि दावा बीमा कंपनी को सही तरीके से कैसे प्रस्तुत करें।',

    process_flow_health_claim_item5: 'फॉलो-अप और ट्रैकिंग',
    process_flow_health_claim_desc5: 'हम आपके दावे की स्थिति को ट्रैक करने और प्रतिपूर्ति होने तक फॉलो-अप करने में मदद करते हैं।',

    ex_scenario_health_claim_title: 'वास्तविक जीवन के प्रतिपूर्ति उदाहरण',

    ex_scenario_health_claim_description: 'सामान्य परिस्थितियां जिन्हें हम हल करने में मदद करते हैं',

    ex_scenario_health_claim_example1_title: 'उदाहरण 1 – आपातकालीन अस्पताल में भर्ती',
    ex_scenario_health_claim_example1_problem: 'एक मरीज ऐसे अस्पताल में भर्ती होता है जहां कैशलेस बीमा सेवा उपलब्ध नहीं है।',
    ex_scenario_health_claim_example1_reality: 'मरीज पूरा अस्पताल बिल अग्रिम भुगतान करता है और बाद में प्रतिपूर्ति के लिए दावा करता है।',
    ex_scenario_health_claim_example1_solution: 'हमने सभी दस्तावेज व्यवस्थित किए और पूर्ण दावा प्रस्तुत किया; 3 सप्ताह में प्रतिपूर्ति प्राप्त हुई।',

    ex_scenario_health_claim_example2_title: 'उदाहरण 2 – मेडिकल दस्तावेजों की कमी',
    ex_scenario_health_claim_example2_problem: 'एक पॉलिसीधारक प्रतिपूर्ति दावा प्रस्तुत करता है लेकिन डिस्चार्ज सारांश संलग्न करना भूल जाता है।',
    ex_scenario_health_claim_example2_reality: 'बीमा कंपनी दावा प्रक्रिया को तब तक रोक देती है जब तक कि आवश्यक दस्तावेज जमा नहीं किए जाते।',
    ex_scenario_health_claim_example2_solution: 'हमने आवश्यक दस्तावेज की पहचान की, उसे अस्पताल से प्राप्त किया और दावा सफलतापूर्वक पुनः प्रस्तुत किया।',

    ex_scenario_health_claim_example3_title: 'उदाहरण 3 – नेटवर्क के बाहर उपचार',
    ex_scenario_health_claim_example3_problem: 'एक मरीज ऐसे अस्पताल में उपचार प्राप्त करता है जो बीमाकर्ता के नेटवर्क का हिस्सा नहीं है।',
    ex_scenario_health_claim_example3_reality: 'कैशलेस सुविधा उपलब्ध नहीं होने के कारण मरीज पहले भुगतान करता है और बाद में प्रतिपूर्ति के लिए दावा करता है।',
    ex_scenario_health_claim_example3_solution: 'हमने पूर्ण दस्तावेजीकरण में सहायता की; दावा पॉलिसी सीमाओं के भीतर स्वीकृत हुआ।',

    ex_scenario_health_claim_example4_title: 'उदाहरण 4 – गलत दावा फॉर्म',
    ex_scenario_health_claim_example4_problem: 'प्रतिपूर्ति दावा गलत पॉलिसी विवरण के साथ प्रस्तुत किया जाता है।',
    ex_scenario_health_claim_example4_reality: 'सही फॉर्म जमा होने तक दावा प्रक्रिया में देरी होती है।',
    ex_scenario_health_claim_example4_solution: 'हमने फॉर्म को सही किया और पुनः प्रस्तुत किया; दावा सुचारू रूप से प्रोसेस हुआ।',

    ex_scenario_health_claim_example_head1: '⏱️ समस्या:',
    ex_scenario_health_claim_example_head2: '📋 वास्तविकता:',
    ex_scenario_health_claim_example_head3: '✅ हमारा समाधान:',

    faq_health_claim_title: 'अक्सर पूछे जाने वाले प्रश्न',

    faq_health_claim_description: 'प्रतिपूर्ति दावों से संबंधित सामान्य प्रश्न',

    faq_health_claim_q1: 'स्वास्थ्य बीमा प्रतिपूर्ति दावा क्या है?',
    faq_health_claim_a1: 'प्रतिपूर्ति दावा तब किया जाता है जब पॉलिसीधारक पहले चिकित्सा खर्च का भुगतान करता है और बाद में पात्र राशि की वापसी के लिए बीमा कंपनी को बिल प्रस्तुत करता है।',

    faq_health_claim_q2: 'प्रतिपूर्ति दावों के लिए कौन से दस्तावेज आवश्यक होते हैं?',
    faq_health_claim_a2: 'आमतौर पर अस्पताल बिल, डिस्चार्ज सारांश, मेडिकल रिपोर्ट, प्रिस्क्रिप्शन, भरा हुआ दावा फॉर्म, पहचान प्रमाण और पॉलिसी विवरण आवश्यक होते हैं।',

    faq_health_claim_q3: 'प्रतिपूर्ति दावों को प्रोसेस होने में समय क्यों लगता है?',
    faq_health_claim_a3: 'दस्तावेज सत्यापन, पॉलिसी पात्रता जांच और चिकित्सा विवरण की समीक्षा के कारण समय लग सकता है।',

    faq_health_claim_q4: 'क्या अस्पताल से डिस्चार्ज के बाद प्रतिपूर्ति दावा किया जा सकता है?',
    faq_health_claim_a4: 'हाँ, सभी आवश्यक दस्तावेज उपलब्ध होने के बाद प्रतिपूर्ति दावा प्रस्तुत किया जाता है।',

    cta_health_claim_title: 'क्या आपको अपने प्रतिपूर्ति दावे को लेकर भ्रम है?',

    cta_health_claim_description: 'दस्तावेज़ और दावा प्रक्रिया को समझना पॉलिसीधारकों को अधिक आत्मविश्वास के साथ प्रतिपूर्ति प्रक्रिया को पूरा करने में मदद करता है। विशेषज्ञ सहायता के लिए यशोदा टोटल सोल्यूशन से संपर्क करें।',

    cta_health_claim_description2: 'मुफ्त परामर्श प्राप्त करें',

    cta_health_claim_button: 'अभी कॉल करें',

    //-------------------------------------------------------------------------------------Health Reimbursement Page Ends

    //PMSBY Page --------------------------------------------------------------------------------


    pmsby_title_backlink1: 'होम',
    pmsby_title_backlink2: 'PMSBY',

    pmsby_title: 'प्रधानमंत्री सुरक्षा बीमा योजना (PMSBY) सहायता',

    pmsby_description: 'PMSBY दुर्घटना बीमा योजना को समझना और यह जानना कि लाभार्थी दावा प्रक्रिया को कैसे संचालित कर सकते हैं। PMSBY एक सरकार समर्थित दुर्घटना बीमा योजना है जो बहुत ही किफायती प्रीमियम पर वित्तीय सुरक्षा प्रदान करती है। इस कार्यक्रम के अंतर्गत उपलब्ध बीमा लाभों का उपयोग करने के इच्छुक लाभार्थियों के लिए प्रक्रिया और आवश्यकताओं को समझना महत्वपूर्ण है।',

    what_pmsby_title: 'प्रधानमंत्री सुरक्षा बीमा योजना क्या है?',

    what_pmsby_description: 'प्रधानमंत्री सुरक्षा बीमा योजना (PMSBY) भारत सरकार द्वारा शुरू की गई एक दुर्घटना बीमा योजना है, जिसका उद्देश्य दुर्घटनाजनित मृत्यु या विकलांगता की स्थिति में वित्तीय सुरक्षा प्रदान करना है।',

    what_pmsby_description1: 'यह योजना प्रदान करती है',

    what_pmsby_description2: 'न्यूनतम वार्षिक प्रीमियम पर कवरेज',

    what_pmsby_description3: 'और यह पॉलिसीधारक के बैंक खाते से जुड़ी होती है। कई व्यक्ति इस योजना में अपने बैंक के माध्यम से नामांकन करते हैं, अक्सर बिना दावा प्रक्रिया या आवश्यक दस्तावेजों को पूरी तरह समझे।',

    what_pmsby_description4: 'जब कोई दुर्घटना होती है, तो लाभार्थियों को दावा प्रस्तुत करने के लिए आवश्यक चरणों को समझने या आवश्यक दस्तावेज एकत्र करने में कठिनाइयों का सामना करना पड़ सकता है।',

    what_pmsby_key_features: 'मुख्य विशेषताएं:',
    what_pmsby_key_feature1: '• किफायती वार्षिक प्रीमियम',
    what_pmsby_key_feature2: '• दुर्घटनाजनित मृत्यु या विकलांगता के लिए कवरेज',
    what_pmsby_key_feature3: '• बैंक खाते के माध्यम से नामांकन',
    what_pmsby_key_feature4: '• सरकार समर्थित योजना',
    what_pmsby_key_feature5: '• पात्र आयु समूहों के लिए उपलब्ध',

    common_challenges_pmsby_title: 'PMSBY दावा से जुड़ी सामान्य चुनौतियां',

    common_challenges_pmsby_description: 'दावा प्रस्तुत करने के दौरान लाभार्थियों को जिन समस्याओं का सामना करना पड़ सकता है',

    common_challenges_pmsby_item1: 'जागरूकता की कमी',
    common_challenges_pmsby_desc1: 'लाभार्थियों को यह जानकारी नहीं होती कि संबंधित व्यक्ति PMSBY योजना में नामांकित था।',

    common_challenges_pmsby_item2: 'पात्रता को लेकर भ्रम',
    common_challenges_pmsby_desc2: 'PMSBY के अंतर्गत दुर्घटना दावों के लिए पात्रता मानदंड को लेकर अनिश्चितता।',

    common_challenges_pmsby_item3: 'दस्तावेजों की कमी',
    common_challenges_pmsby_desc3: 'आवश्यक दुर्घटना रिपोर्ट और सहायक दस्तावेज एकत्र करने में कठिनाई।',

    common_challenges_pmsby_item4: 'प्रक्रिया को लेकर अनिश्चितता',
    common_challenges_pmsby_desc4: 'दावा प्रस्तुत करने और सत्यापन प्रक्रिया की समझ का अभाव।',

    common_challenges_pmsby_item5: 'बैंक समन्वय',
    common_challenges_pmsby_desc5: 'दावा शुरू करने के लिए बैंक से संपर्क करने को लेकर भ्रम।',

    common_challenges_pmsby_item6: 'सत्यापन में देरी',
    common_challenges_pmsby_desc6: 'अपूर्ण या गलत दस्तावेजों के कारण प्रक्रिया में देरी।',

    what_happens_after_pmsby_title: 'PMSBY दावा मामलों में क्या होता है',

    what_happens_after_pmsby_description: 'दावा खोज और प्रस्तुतिकरण प्रक्रिया को समझना',

    what_happens_pmsby_item1: 'कवरेज की जानकारी मिलना',
    what_happens_pmsby_desc1: 'परिवार के सदस्य अक्सर दुर्घटना के बाद ही PMSBY नामांकन के बारे में जान पाते हैं।',

    what_happens_pmsby_item2: 'दस्तावेज संग्रह',
    what_happens_pmsby_desc2: 'लाभार्थियों को दुर्घटना रिपोर्ट, पहचान प्रमाण और दावा फॉर्म एकत्र करने होते हैं।',

    what_happens_pmsby_item3: 'बैंक सत्यापन',
    what_happens_pmsby_desc3: 'बैंक और बीमा प्रदाता दस्तावेजों की समीक्षा करते हैं ताकि पात्रता और कवरेज की पुष्टि की जा सके।',

    why_choose_pmsby_title: 'यशोदा टोटल सोल्यूशन को क्यों चुनें?',

    why_choose_pmsby_description: 'PMSBY दावा सहायता के लिए विशेषज्ञ मार्गदर्शन',

    why_choose_pmsby_item1: 'विशेषज्ञ टीम',
    why_choose_pmsby_desc1: 'बीमा दावा अस्वीकृति शिकायतों और विवादों को संभालने का वर्षों का अनुभव।',

    why_choose_pmsby_item2: 'पूर्ण दस्तावेज़ीकरण',
    why_choose_pmsby_desc2: 'हम आपके लिए सभी आवश्यक दस्तावेज, नोटिस और शिकायत पत्र तैयार करते हैं।',

    why_choose_pmsby_item3: 'कानूनी सहायता',
    why_choose_pmsby_desc3: 'आवश्यक होने पर कानूनी नोटिस ड्राफ्टिंग और ओम्बड्समैन शिकायत दाखिल करना।',

    why_choose_pmsby_item4: 'उच्च सफलता दर',
    why_choose_pmsby_desc4: 'सैकड़ों ग्राहकों को मुआवजा और पॉलिसी समाधान प्राप्त करने में सहायता की है।',

    process_flow_pmsby_title: 'हमारी 5-स्टेप PMSBY दावा सहायता प्रक्रिया',

    process_flow_pmsby_description: 'PMSBY लाभार्थियों के लिए सरल मार्गदर्शन',

    process_flow_pmsby_item1: 'नामांकन सत्यापन',
    process_flow_pmsby_desc1: 'हम यह सत्यापित करने में मदद करते हैं कि व्यक्ति अपने बैंक खाते के माध्यम से PMSBY में नामांकित था या नहीं।',

    process_flow_pmsby_item2: 'पात्रता मूल्यांकन',
    process_flow_pmsby_desc2: 'हम दुर्घटना के विवरण की समीक्षा करते हैं ताकि PMSBY कवरेज शर्तों के अंतर्गत पात्रता की पुष्टि की जा सके।',

    process_flow_pmsby_item3: 'दस्तावेज संग्रह',
    process_flow_pmsby_desc3: 'हम दुर्घटना रिपोर्ट और पहचान प्रमाण सहित सभी आवश्यक दस्तावेज एकत्र करने में सहायता करते हैं।',

    process_flow_pmsby_item4: 'दावा फॉर्म तैयारी',
    process_flow_pmsby_desc4: 'हम सटीक जानकारी के साथ दावा आवेदन फॉर्म भरने में मदद करते हैं।',

    process_flow_pmsby_item5: 'बैंक में जमा एवं फॉलो-अप',
    process_flow_pmsby_desc5: 'हम आपको बैंक में दावा जमा करने की प्रक्रिया में मार्गदर्शन देते हैं और प्रक्रिया पूरी होने तक उसका ट्रैक रखते हैं।',

    ex_scenario_pmsby_title: 'वास्तविक जीवन के PMSBY दावा उदाहरण',

    ex_scenario_pmsby_description: 'सामान्य परिस्थितियां जिन्हें हम हल करने में सहायता करते हैं',

    ex_scenario_pmsby_example1_title: 'उदाहरण 1 – परिवार को योजना की जानकारी नहीं',
    ex_scenario_pmsby_example1_problem: 'एक बैंक ग्राहक स्वचालित नामांकन के माध्यम से PMSBY में शामिल होता है।',
    ex_scenario_pmsby_example1_reality: 'दुर्घटना के बाद परिवार को पता चलता है कि व्यक्ति कवर था, लेकिन दावा कैसे शुरू किया जाए यह स्पष्ट नहीं होता।',
    ex_scenario_pmsby_example1_solution: 'हमने नामांकन सत्यापित किया, प्रक्रिया समझाई और सफलतापूर्वक पूर्ण दावा प्रस्तुत करने में सहायता की।',

    ex_scenario_pmsby_example2_title: 'उदाहरण 2 – दुर्घटना दस्तावेजों की कमी',
    ex_scenario_pmsby_example2_problem: 'एक लाभार्थी PMSBY लाभ के लिए दावा प्रस्तुत करने का प्रयास करता है।',
    ex_scenario_pmsby_example2_reality: 'आवश्यक दुर्घटना रिपोर्ट और सहायक दस्तावेज अधूरे होने के कारण दावा प्रक्रिया में कठिनाई आती है।',
    ex_scenario_pmsby_example2_solution: 'हमने आवश्यक दुर्घटना रिपोर्ट संबंधित अधिकारियों से प्राप्त करने में सहायता की और दस्तावेज़ीकरण पूरा किया।',

    ex_scenario_pmsby_example3_title: 'उदाहरण 3 – दावा प्रस्तुत करने में भ्रम',
    ex_scenario_pmsby_example3_problem: 'दुर्घटना पीड़ित का परिवार बीमा लाभ प्राप्त करने के लिए बैंक से संपर्क करता है।',
    ex_scenario_pmsby_example3_reality: 'उन्हें PMSBY दावा प्रस्तुत करने के लिए आवश्यक दस्तावेज और फॉर्म के बारे में स्पष्ट जानकारी नहीं होती।',
    ex_scenario_pmsby_example3_solution: 'हमने पूर्ण चेकलिस्ट प्रदान की, फॉर्म भरने में सहायता की और बैंक में जमा प्रक्रिया में मार्गदर्शन दिया।',

    ex_scenario_pmsby_example4_title: 'उदाहरण 4 – पात्रता स्पष्ट करना',
    ex_scenario_pmsby_example4_problem: 'एक लाभार्थी PMSBY दावा दाखिल करना चाहता है लेकिन पात्रता को लेकर अनिश्चित है।',
    ex_scenario_pmsby_example4_reality: 'उसे यह समझने की आवश्यकता होती है कि क्या दुर्घटना योजना की शर्तों के अंतर्गत आती है या नहीं।',
    ex_scenario_pmsby_example4_solution: 'हमने दुर्घटना विवरण की समीक्षा की, पात्रता की पुष्टि की और दावा प्रस्तुत करने की प्रक्रिया आगे बढ़ाई।',

    ex_scenario_pmsby_example_head1: '⏱️ समस्या:',
    ex_scenario_pmsby_example_head2: '📋 वास्तविकता:',
    ex_scenario_pmsby_example_head3: '✅ हमारा समाधान:',

    faq_pmsby_title: 'अक्सर पूछे जाने वाले प्रश्न',

    faq_pmsby_description: 'PMSBY से संबंधित सामान्य प्रश्न',

    faq_pmsby_q1: 'प्रधानमंत्री सुरक्षा बीमा योजना (PMSBY) क्या है?',
    faq_pmsby_a1: 'PMSBY एक सरकारी दुर्घटना बीमा योजना है जो किफायती वार्षिक प्रीमियम पर दुर्घटनाजनित मृत्यु या विकलांगता के लिए वित्तीय सुरक्षा प्रदान करती है।',

    faq_pmsby_q2: 'PMSBY में कौन नामांकन कर सकता है?',
    faq_pmsby_a2: 'पात्र आयु समूह (आमतौर पर 18-70 वर्ष) के भीतर बचत बैंक खाता रखने वाले व्यक्ति अपने बैंक के माध्यम से इस योजना में नामांकन कर सकते हैं।',

    faq_pmsby_q3: 'PMSBY के अंतर्गत कौन से घटनाएं कवर होती हैं?',
    faq_pmsby_a3: 'यह योजना आमतौर पर दुर्घटनाजनित मृत्यु और कुछ प्रकार की स्थायी या आंशिक विकलांगता को कवर करती है, जैसा कि योजना की शर्तों में परिभाषित है।',

    faq_pmsby_q4: 'लाभार्थी कैसे जान सकते हैं कि कोई व्यक्ति PMSBY में नामांकित था?',
    faq_pmsby_a4: 'नामांकन आमतौर पर बैंक खाते से जुड़ा होता है। लाभार्थी संबंधित बैंक से संपर्क करके PMSBY कवरेज की पुष्टि कर सकते हैं।',

    cta_pmsby_title: 'क्या आपको PMSBY दावों को समझने में सहायता चाहिए?',

    cta_pmsby_description: 'योजना की आवश्यकताओं और दस्तावेज़ प्रक्रिया को समझना लाभार्थियों को दावा प्रक्रिया को अधिक आत्मविश्वास के साथ पूरा करने में मदद कर सकता है। PMSBY दावों के लिए विशेषज्ञ सहायता हेतु यशोदा टोटल सोल्यूशन से संपर्क करें।',

    cta_pmsby_description2: 'मुफ्त परामर्श प्राप्त करें',

    cta_pmsby_button: 'अभी कॉल करें',

    //-------------------------------------------------------------------------------------PMSBY Page Ends

    //PMJJBY Page --------------------------------------------------------------------------------


    pmjjby_title_backlink1: 'होम',
    pmjjby_title_backlink2: 'PMJJBY',

    pmjjby_title: 'प्रधानमंत्री जीवन ज्योति बीमा योजना (PMJJBY) सहायता',

    pmjjby_description: 'PMJJBY जीवन बीमा योजना को समझना और यह जानना कि लाभार्थी दावा प्रक्रिया को कैसे संचालित कर सकते हैं। PMJJBY एक सरकार समर्थित जीवन बीमा योजना है जो पात्र व्यक्तियों को किफायती जीवन बीमा कवरेज प्रदान करती है। इस योजना के कार्य करने के तरीके को समझना उन लाभार्थियों के लिए महत्वपूर्ण है जो बीमा लाभ प्राप्त करना चाहते हैं।',

    what_pmjjby_title: 'प्रधानमंत्री जीवन ज्योति बीमा योजना क्या है?',

    what_pmjjby_description: 'प्रधानमंत्री जीवन ज्योति बीमा योजना (PMJJBY) भारत सरकार द्वारा शुरू की गई एक जीवन बीमा योजना है, जिसका उद्देश्य पात्र नागरिकों को किफायती जीवन बीमा कवरेज प्रदान करना है।',

    what_pmjjby_description1: 'यह योजना सामान्यतः',

    what_pmjjby_description2: 'बचत बैंक खाते से जुड़ी होती है',

    what_pmjjby_description3: ', जिससे व्यक्ति अपने बैंक के माध्यम से आसानी से नामांकन कर सकते हैं। हालांकि यह योजना महत्वपूर्ण वित्तीय सुरक्षा प्रदान करती है, लेकिन लाभार्थियों को कभी-कभी दावा प्रक्रिया और आवश्यक दस्तावेजों को समझने में कठिनाई हो सकती है।',

    what_pmjjby_description4: 'कई परिस्थितियों में, परिवार के सदस्य या लाभार्थी इस पॉलिसी के बारे में केवल किसी दुर्भाग्यपूर्ण घटना के बाद ही जान पाते हैं, जिससे दावा प्रक्रिया को आगे बढ़ाने के बारे में अनिश्चितता उत्पन्न हो सकती है।',

    what_pmjjby_key_features: 'PMJJBY की मुख्य विशेषताएं:',
    what_pmjjby_key_feature1: '• जीवन बीमा कवरेज के लिए किफायती वार्षिक प्रीमियम',
    what_pmjjby_key_feature2: '• बचत बैंक खाते के माध्यम से नामांकन',
    what_pmjjby_key_feature3: '• सरकार समर्थित जीवन बीमा योजना',
    what_pmjjby_key_feature4: '• पात्र आयु समूहों के लिए कवरेज',
    what_pmjjby_key_feature5: '• सरल नवीनीकरण प्रक्रिया',

    common_challenges_pmjjby_title: 'PMJJBY दावा से जुड़ी सामान्य चुनौतियां',

    common_challenges_pmjjby_description: 'दावा प्रस्तुत करने के दौरान लाभार्थियों को जिन समस्याओं का सामना करना पड़ सकता है',

    common_challenges_pmjjby_item1: 'जागरूकता की कमी',
    common_challenges_pmjjby_desc1: 'लाभार्थियों को यह जानकारी नहीं होती कि पॉलिसीधारक PMJJBY योजना में नामांकित था।',

    common_challenges_pmjjby_item2: 'पात्रता को लेकर भ्रम',
    common_challenges_pmjjby_desc2: 'PMJJBY के अंतर्गत दावों के लिए पात्रता मानदंड को लेकर अनिश्चितता।',

    common_challenges_pmjjby_item3: 'दस्तावेजों की कमी',
    common_challenges_pmjjby_desc3: 'दावा प्रस्तुत करने के लिए आवश्यक दस्तावेज एकत्र करने में कठिनाई।',

    common_challenges_pmjjby_item4: 'प्रक्रिया को लेकर अनिश्चितता',
    common_challenges_pmjjby_desc4: 'दावा प्रक्रिया कैसे शुरू करें और पूरा करें, इस बारे में भ्रम।',

    common_challenges_pmjjby_item5: 'बैंक प्रक्रियाएं',
    common_challenges_pmjjby_desc5: 'बैंक द्वारा दावा प्रस्तुत करने और सत्यापन प्रक्रियाओं को समझना।',

    common_challenges_pmjjby_item6: 'सत्यापन में देरी',
    common_challenges_pmjjby_desc6: 'अपूर्ण या गलत दस्तावेजों के कारण प्रक्रिया में देरी।',

    what_happens_after_pmjjby_title: 'PMJJBY दावा मामलों में क्या होता है',

    what_happens_after_pmjjby_description: 'दावा खोज और प्रस्तुतिकरण प्रक्रिया को समझना',

    what_happens_pmjjby_item1: 'कवरेज की जानकारी मिलना',
    what_happens_pmjjby_desc1: 'परिवार के सदस्य अक्सर किसी दुर्भाग्यपूर्ण घटना के बाद ही PMJJBY नामांकन के बारे में जान पाते हैं।',

    what_happens_pmjjby_item2: 'दस्तावेज संग्रह',
    what_happens_pmjjby_desc2: 'लाभार्थियों को मृत्यु प्रमाण पत्र और दावा फॉर्म सहित आवश्यक दस्तावेज एकत्र करने होते हैं।',

    what_happens_pmjjby_item3: 'बैंक सत्यापन',
    what_happens_pmjjby_desc3: 'बैंक और बीमा प्रदाता दस्तावेजों की समीक्षा करते हैं ताकि पात्रता की पुष्टि की जा सके और दावा प्रक्रिया को आगे बढ़ाया जा सके।',

    why_choose_pmjjby_title: 'यशोदा टोटल सोल्यूशन को क्यों चुनें?',

    why_choose_pmjjby_description: 'PMJJBY दावा सहायता के लिए विशेषज्ञ मार्गदर्शन',

    why_choose_pmjjby_item1: 'विशेषज्ञ टीम',
    why_choose_pmjjby_desc1: 'बीमा दावा अस्वीकृति शिकायतों और विवादों को संभालने का वर्षों का अनुभव।',

    why_choose_pmjjby_item2: 'पूर्ण दस्तावेज़ीकरण',
    why_choose_pmjjby_desc2: 'हम आपके लिए सभी आवश्यक दस्तावेज, नोटिस और शिकायत पत्र तैयार करते हैं।',

    why_choose_pmjjby_item3: 'कानूनी सहायता',
    why_choose_pmjjby_desc3: 'आवश्यक होने पर कानूनी नोटिस ड्राफ्टिंग और ओम्बड्समैन शिकायत दाखिल करना।',

    why_choose_pmjjby_item4: 'उच्च सफलता दर',
    why_choose_pmjjby_desc4: 'सैकड़ों ग्राहकों को मुआवजा और पॉलिसी समाधान प्राप्त करने में सहायता की है।',

    process_flow_pmjjby_title: 'हमारी 5-स्टेप PMJJBY दावा सहायता प्रक्रिया',

    process_flow_pmjjby_description: 'PMJJBY लाभार्थियों के लिए सरल मार्गदर्शन',

    process_flow_pmjjby_item1: 'नामांकन सत्यापन',
    process_flow_pmjjby_desc1: 'हम यह सत्यापित करने में मदद करते हैं कि पॉलिसीधारक अपने बैंक खाते के माध्यम से PMJJBY में नामांकित था या नहीं।',

    process_flow_pmjjby_item2: 'पात्रता मूल्यांकन',
    process_flow_pmjjby_desc2: 'हम पॉलिसी विवरण की समीक्षा करते हैं ताकि पात्रता और सक्रिय कवरेज स्थिति की पुष्टि की जा सके।',

    process_flow_pmjjby_item3: 'दस्तावेज संग्रह',
    process_flow_pmjjby_desc3: 'हम मृत्यु प्रमाण पत्र और पहचान प्रमाण सहित सभी आवश्यक दस्तावेज एकत्र करने में सहायता करते हैं।',

    process_flow_pmjjby_item4: 'दावा फॉर्म तैयारी',
    process_flow_pmjjby_desc4: 'हम सभी आवश्यक जानकारी के साथ दावा आवेदन फॉर्म को सही ढंग से भरने में मदद करते हैं।',

    process_flow_pmjjby_item5: 'बैंक में जमा एवं फॉलो-अप',
    process_flow_pmjjby_desc5: 'हम आपको बैंक में दावा जमा करने की प्रक्रिया में मार्गदर्शन देते हैं और प्रक्रिया पूरी होने तक उसका ट्रैक रखते हैं।',

    ex_scenario_pmjjby_title: 'वास्तविक जीवन के PMJJBY दावा उदाहरण',

    ex_scenario_pmjjby_description: 'सामान्य परिस्थितियां जिन्हें हम हल करने में सहायता करते हैं',

    ex_scenario_pmjjby_example1_title: 'उदाहरण 1 – परिवार को जीवन बीमा कवरेज की जानकारी नहीं',
    ex_scenario_pmjjby_example1_problem: 'एक बैंक ग्राहक स्वचालित नामांकन के माध्यम से PMJJBY में शामिल होता है।',
    ex_scenario_pmjjby_example1_reality: 'पॉलिसीधारक के निधन के बाद परिवार को जीवन बीमा कवरेज के बारे में पता चलता है, लेकिन दावा कैसे शुरू करें यह स्पष्ट नहीं होता।',
    ex_scenario_pmjjby_example1_solution: 'हमने नामांकन सत्यापित किया, प्रक्रिया समझाई और सफलतापूर्वक पूर्ण दावा प्रस्तुत करने में सहायता की।',

    ex_scenario_pmjjby_example2_title: 'उदाहरण 2 – दस्तावेजों को लेकर भ्रम',
    ex_scenario_pmjjby_example2_problem: 'लाभार्थी PMJJBY लाभ के लिए दावा प्रस्तुत करने का प्रयास करता है।',
    ex_scenario_pmjjby_example2_reality: 'उसे यह स्पष्ट नहीं होता कि प्रस्तुत करने के लिए कौन से दस्तावेज आवश्यक हैं, जिसके कारण कठिनाइयां आती हैं।',
    ex_scenario_pmjjby_example2_solution: 'हमने संपूर्ण दस्तावेज चेकलिस्ट प्रदान की और सभी आवश्यक कागजात एकत्र करने में सहायता की।',

    ex_scenario_pmjjby_example3_title: 'उदाहरण 3 – बैंक दावा प्रक्रिया को लेकर अनिश्चितता',
    ex_scenario_pmjjby_example3_problem: 'परिवार बीमा लाभ प्राप्त करने के लिए बैंक से संपर्क करता है।',
    ex_scenario_pmjjby_example3_reality: 'उन्हें दावा फॉर्म और आवश्यक सत्यापन प्रक्रियाओं को समझने में कठिनाई होती है।',
    ex_scenario_pmjjby_example3_solution: 'हमने प्रत्येक चरण में मार्गदर्शन दिया, फॉर्म सही तरीके से भरने में मदद की और बैंक के साथ समन्वय किया।',

    ex_scenario_pmjjby_example4_title: 'उदाहरण 4 – पात्रता स्पष्ट करना',
    ex_scenario_pmjjby_example4_problem: 'एक लाभार्थी दावा दाखिल करना चाहता है लेकिन पात्रता को लेकर अनिश्चित है।',
    ex_scenario_pmjjby_example4_reality: 'उसे यह सत्यापित करने की आवश्यकता होती है कि पॉलिसीधारक ने उस समय PMJJBY की नामांकन शर्तों को पूरा किया था या नहीं।',
    ex_scenario_pmjjby_example4_solution: 'हमने बैंक के साथ नामांकन रिकॉर्ड की समीक्षा की, पात्रता की पुष्टि की और आगे की प्रक्रिया शुरू की।',

    ex_scenario_pmjjby_example_head1: '⏱️ समस्या:',
    ex_scenario_pmjjby_example_head2: '📋 वास्तविकता:',
    ex_scenario_pmjjby_example_head3: '✅ हमारा समाधान:',

    faq_pmjjby_title: 'अक्सर पूछे जाने वाले प्रश्न',

    faq_pmjjby_description: 'PMJJBY से संबंधित सामान्य प्रश्न',

    faq_pmjjby_q1: 'प्रधानमंत्री सुरक्षा बीमा योजना (PMJJBY) क्या है?',
    faq_pmjjby_a1: 'PMJJBY एक सरकार समर्थित जीवन बीमा योजना है जो किफायती वार्षिक प्रीमियम पर मृत्यु कवरेज प्रदान करती है।',

    faq_pmjjby_q2: 'PMJJBY में कौन नामांकन कर सकता है?',
    faq_pmjjby_a2: 'पात्र आयु समूह (आमतौर पर 18-70 वर्ष) के भीतर बचत बैंक खाता रखने वाले व्यक्ति अपने बैंक के माध्यम से इस योजना में नामांकन कर सकते हैं।',

    faq_pmjjby_q3: 'PMJJBY किस प्रकार का कवरेज प्रदान करता है?',
    faq_pmjjby_a3: 'यह योजना आमतौर पर मृत्यु के लिए कवरेज प्रदान करती है, जैसा कि योजना की शर्तों में परिभाषित है।',

    faq_pmjjby_q4: 'लाभार्थी कैसे जान सकते हैं कि कोई व्यक्ति PMJJBY में नामांकित था?',
    faq_pmjjby_a4: 'नामांकन आमतौर पर पॉलिसीधारक के बैंक खाते से जुड़ा होता है। लाभार्थी संबंधित बैंक से संपर्क करके PMJJBY कवरेज की पुष्टि कर सकते हैं।',

    cta_pmjjby_title: 'क्या आपको PMJJBY दावों को समझने में सहायता चाहिए?',

    cta_pmjjby_description: 'योजना की आवश्यकताओं और दस्तावेज़ प्रक्रिया को समझना लाभार्थियों को दावा प्रक्रिया को अधिक आत्मविश्वास के साथ पूरा करने में मदद कर सकता है। PMJJBY दावों के लिए विशेषज्ञ सहायता हेतु यशोदा टोटल सोल्यूशन से संपर्क करें।',

    cta_pmjjby_description2: 'मुफ्त परामर्श प्राप्त करें',

    cta_pmjjby_button: 'अभी कॉल करें',

    //-------------------------------------------------------------------------------------PMJJBY Page Ends

    //State CM Scheme Page --------------------------------------------------------------------------------


    state_cm_title_backlink1: 'होम',
    state_cm_title_backlink2: 'राज्य मुख्यमंत्री बीमा योजना',

    state_cm_title: 'राज्य मुख्यमंत्री बीमा योजना सहायता',

    state_cm_description: 'राज्य सरकार की बीमा योजनाओं को समझना और यह जानना कि लाभार्थी दावा और आवेदन प्रक्रिया को कैसे संचालित कर सकते हैं। कई राज्य सरकारें नागरिकों को वित्तीय सुरक्षा प्रदान करने के लिए बीमा योजनाएं उपलब्ध कराती हैं। इन योजनाओं के कार्य करने के तरीके को समझना उन व्यक्तियों के लिए महत्वपूर्ण है जो इन लाभों का उपयोग करना चाहते हैं।',

    what_state_cm_title: 'राज्य मुख्यमंत्री बीमा योजनाएं क्या हैं?',

    what_state_cm_description: 'राज्य मुख्यमंत्री बीमा योजनाएं सरकार द्वारा संचालित कार्यक्रम हैं, जिन्हें पात्र नागरिकों को वित्तीय सहायता और सुरक्षा प्रदान करने के लिए डिज़ाइन किया गया है, विशेष रूप से स्वास्थ्य संबंधी खर्चों या अन्य बीमित घटनाओं के लिए।',

    what_state_cm_description1: 'ये योजनाएं व्यक्तियों और परिवारों की सहायता करने के लिए बनाई गई हैं',

    what_state_cm_description2: 'चिकित्सा उपचार से जुड़े वित्तीय बोझ को कम करके',

    what_state_cm_description3: 'और अन्य पात्र स्थितियों में सहायता प्रदान करके।',

    what_state_cm_description4: 'हालांकि, कई लाभार्थियों को योजना की आवश्यकताओं, पात्रता मानदंड और दावा प्रक्रियाओं को समझने में कठिनाई होती है। दस्तावेज़ीकरण प्रक्रिया और आवेदन के चरण कभी-कभी जटिल हो सकते हैं, विशेष रूप से उन व्यक्तियों के लिए जो सरकारी बीमा प्रणालियों से परिचित नहीं हैं।',

    what_state_cm_key_features: 'राज्य बीमा योजनाओं के प्रमुख पहलू:',
    what_state_cm_key_feature1: '• सरकार समर्थित वित्तीय सुरक्षा कार्यक्रम',
    what_state_cm_key_feature2: '• पात्र नागरिकों के लिए स्वास्थ्य खर्च कवरेज',
    what_state_cm_key_feature3: '• राज्य-विशिष्ट पात्रता मानदंड और लाभ',
    what_state_cm_key_feature4: '• आवेदन और सत्यापन प्रक्रियाएं',
    what_state_cm_key_feature5: '• चिकित्सा आपात स्थितियों और उपचार के लिए सहायता',

    common_challenges_state_cm_title: 'योजना आवेदन से जुड़ी सामान्य चुनौतियां',

    common_challenges_state_cm_description: 'आवेदन या दावा प्रक्रिया के दौरान लाभार्थियों को जिन समस्याओं का सामना करना पड़ सकता है',

    common_challenges_state_cm_item1: 'पात्रता को लेकर भ्रम',
    common_challenges_state_cm_desc1: 'यह अनिश्चितता कि वे योजना के लाभों के लिए पात्र हैं या नहीं।',

    common_challenges_state_cm_item2: 'आवेदन में कठिनाई',
    common_challenges_state_cm_desc2: 'आवेदन प्रक्रिया और जमा करने की प्रक्रिया को लेकर भ्रम।',

    common_challenges_state_cm_item3: 'दस्तावेजों की कमी',
    common_challenges_state_cm_desc3: 'आवश्यक पहचान और पात्रता दस्तावेज एकत्र करने में कठिनाई।',

    common_challenges_state_cm_item4: 'सीमित जागरूकता',
    common_challenges_state_cm_desc4: 'उपलब्ध योजना लाभों और कवरेज के बारे में जानकारी का अभाव।',

    common_challenges_state_cm_item5: 'प्रक्रिया की जटिलता',
    common_challenges_state_cm_desc5: 'पहली बार आवेदन करने वालों के लिए सरकारी प्रक्रियाएं जटिल हो सकती हैं।',

    common_challenges_state_cm_item6: 'सत्यापन में देरी',
    common_challenges_state_cm_desc6: 'अपूर्ण या गलत आवेदन के कारण प्रक्रिया में देरी।',

    what_happens_after_state_cm_title: 'योजना दावा मामलों में क्या होता है',

    what_happens_after_state_cm_description: 'आवेदन और दावा प्रस्तुतिकरण प्रक्रिया को समझना',

    what_happens_state_cm_item1: 'योजना की जानकारी मिलना',
    what_happens_state_cm_desc1: 'लाभार्थियों को अक्सर योजना के बारे में तब पता चलता है जब उन्हें चिकित्सा उपचार या सहायता की आवश्यकता होती है।',

    what_happens_state_cm_item2: 'दस्तावेज संग्रह',
    what_happens_state_cm_desc2: 'आवश्यक पात्रता दस्तावेज, पहचान प्रमाण और चिकित्सा रिकॉर्ड एकत्र करना।',

    what_happens_state_cm_item3: 'सरकारी समीक्षा',
    what_happens_state_cm_desc3: 'प्राधिकरण दस्तावेजों की समीक्षा करते हैं ताकि पात्रता की पुष्टि की जा सके और लाभों को प्रोसेस किया जा सके।',

    why_choose_state_cm_title: 'यशोदा टोटल सोल्यूशन को क्यों चुनें?',

    why_choose_state_cm_description: 'राज्य बीमा योजना सहायता के लिए विशेषज्ञ मार्गदर्शन',

    why_choose_state_cm_item1: 'विशेषज्ञ टीम',
    why_choose_state_cm_desc1: 'बीमा दावा अस्वीकृति शिकायतों और विवादों को संभालने का वर्षों का अनुभव।',

    why_choose_state_cm_item2: 'पूर्ण दस्तावेज़ीकरण',
    why_choose_state_cm_desc2: 'हम आपके लिए सभी आवश्यक दस्तावेज, नोटिस और शिकायत पत्र तैयार करते हैं।',

    why_choose_state_cm_item3: 'कानूनी सहायता',
    why_choose_state_cm_desc3: 'आवश्यक होने पर कानूनी नोटिस ड्राफ्टिंग और ओम्बड्समैन शिकायत दाखिल करना।',

    why_choose_state_cm_item4: 'उच्च सफलता दर',
    why_choose_state_cm_desc4: 'सैकड़ों ग्राहकों को मुआवजा और पॉलिसी समाधान प्राप्त करने में सहायता की है।',

    process_flow_state_cm_title: 'हमारी 5-स्टेप योजना सहायता प्रक्रिया',

    process_flow_state_cm_description: 'राज्य बीमा योजना लाभार्थियों के लिए सरल मार्गदर्शन',

    process_flow_state_cm_item1: 'पात्रता मूल्यांकन',
    process_flow_state_cm_desc1: 'हम यह निर्धारित करने में मदद करते हैं कि आप आधिकारिक मानदंडों के आधार पर राज्य बीमा योजना के लिए पात्र हैं या नहीं।',

    process_flow_state_cm_item2: 'दस्तावेज तैयारी',
    process_flow_state_cm_desc2: 'हम सभी आवश्यक पहचान, पात्रता और चिकित्सा दस्तावेज एकत्र करने में सहायता करते हैं।',

    process_flow_state_cm_item3: 'आवेदन फॉर्म सहायता',
    process_flow_state_cm_desc3: 'हम सभी आवश्यक जानकारी के साथ आवेदन फॉर्म को सही तरीके से भरने में मदद करते हैं।',

    process_flow_state_cm_item4: 'जमा सहायता',
    process_flow_state_cm_desc4: 'हम आपको सरकारी प्राधिकरणों को आवेदन प्रस्तुत करने की प्रक्रिया में मार्गदर्शन देते हैं।',

    process_flow_state_cm_item5: 'फॉलो-अप और ट्रैकिंग',
    process_flow_state_cm_desc5: 'हम आपके आवेदन की स्थिति को ट्रैक करते हैं और लाभ प्राप्त होने तक फॉलो-अप करते हैं।',

    ex_scenario_state_cm_title: 'वास्तविक जीवन के योजना सहायता उदाहरण',

    ex_scenario_state_cm_description: 'सामान्य परिस्थितियां जिन्हें हम हल करने में सहायता करते हैं',

    ex_scenario_state_cm_example1_title: 'उदाहरण 1 – पात्रता को लेकर भ्रम',
    ex_scenario_state_cm_example1_problem: 'एक मरीज को चिकित्सा उपचार की आवश्यकता होती है और वह एक राज्य बीमा योजना के बारे में जानता है।',
    ex_scenario_state_cm_example1_reality: 'उसे यह स्पष्ट नहीं होता कि वह योजना के लाभों के लिए पात्र है या नहीं।',
    ex_scenario_state_cm_example1_solution: 'हमने पात्रता मानदंड की समीक्षा की, दस्तावेजों का सत्यापन किया और योजना के लिए पात्रता की पुष्टि की।',

    ex_scenario_state_cm_example2_title: 'उदाहरण 2 – दस्तावेज एकत्र करने में कठिनाई',
    ex_scenario_state_cm_example2_problem: 'एक लाभार्थी योजना के अंतर्गत लाभ के लिए आवेदन करने का प्रयास करता है।',
    ex_scenario_state_cm_example2_reality: 'उसे आवश्यक पहचान और पात्रता दस्तावेज एकत्र करने में कठिनाई होती है।',
    ex_scenario_state_cm_example2_solution: 'हमने दस्तावेज चेकलिस्ट प्रदान की और सभी आवश्यक कागजात एकत्र करने में सहायता की।',

    ex_scenario_state_cm_example3_title: 'उदाहरण 3 – दावा प्रक्रिया को लेकर अनिश्चितता',
    ex_scenario_state_cm_example3_problem: 'एक परिवार का सदस्य अस्पताल उपचार के बाद दावा प्रस्तुत करना चाहता है।',
    ex_scenario_state_cm_example3_reality: 'उसे आवेदन प्रक्रिया और सत्यापन प्रक्रियाओं के बारे में अनिश्चितता होती है।',
    ex_scenario_state_cm_example3_solution: 'हमने उन्हें चरण-दर-चरण आवेदन प्रक्रिया और सरकारी प्रक्रियाओं में मार्गदर्शन दिया।',

    ex_scenario_state_cm_example4_title: 'उदाहरण 4 – उपचार के बाद जागरूकता',
    ex_scenario_state_cm_example4_problem: 'एक मरीज अस्पताल में उपचार प्राप्त करता है।',
    ex_scenario_state_cm_example4_reality: 'बाद में उसे पता चलता है कि यह उपचार राज्य योजना के अंतर्गत सहायता के लिए पात्र हो सकता था।',
    ex_scenario_state_cm_example4_solution: 'हमने रेट्रोस्पेक्टिव दावा दाखिल करने में मदद की और सफलतापूर्वक आंशिक लाभ प्राप्त किए।',

    ex_scenario_state_cm_example_head1: '⏱️ समस्या:',
    ex_scenario_state_cm_example_head2: '📋 वास्तविकता:',
    ex_scenario_state_cm_example_head3: '✅ हमारा समाधान:',

    faq_state_cm_title: 'अक्सर पूछे जाने वाले प्रश्न',

    faq_state_cm_description: 'राज्य बीमा योजनाओं से संबंधित सामान्य प्रश्न',

    faq_state_cm_q1: 'राज्य मुख्यमंत्री बीमा योजनाएं क्या हैं?',
    faq_state_cm_a1: 'ये सरकारी बीमा कार्यक्रम हैं जिन्हें पात्र नागरिकों को स्वास्थ्य सेवा या अन्य बीमित घटनाओं के लिए वित्तीय सहायता प्रदान करने के लिए डिज़ाइन किया गया है, जो प्रत्येक राज्य के अनुसार अलग-अलग होते हैं।',

    faq_state_cm_q2: 'इन योजनाओं से कौन लाभ प्राप्त कर सकता है?',
    faq_state_cm_a2: 'पात्रता विशेष योजना और राज्य सरकार द्वारा निर्धारित मानदंडों पर निर्भर करती है, जो आमतौर पर आय, निवास और अन्य कारकों पर आधारित होती है।',

    faq_state_cm_q3: 'आवेदन या दावा के लिए कौन से दस्तावेज आवश्यक होते हैं?',
    faq_state_cm_a3: 'आम दस्तावेजों में पहचान प्रमाण (आधार, मतदाता पहचान पत्र), पात्रता सत्यापन, आय प्रमाण पत्र, चिकित्सा रिकॉर्ड और आवेदन फॉर्म शामिल हो सकते हैं।',

    faq_state_cm_q4: 'लाभार्थी योजना के लिए पात्रता की पुष्टि कैसे कर सकते हैं?',
    faq_state_cm_a4: 'पात्रता आमतौर पर सरकारी पोर्टल पर उपलब्ध आधिकारिक दिशा-निर्देशों के माध्यम से या संबंधित सरकारी विभाग से संपर्क करके सत्यापित की जा सकती है।',

    cta_state_cm_title: 'क्या आपको राज्य बीमा योजनाओं के साथ सहायता की आवश्यकता है?',

    cta_state_cm_description: 'पात्रता आवश्यकताओं और दस्तावेज़ प्रक्रिया को समझना लाभार्थियों को आवेदन और दावा प्रक्रिया को अधिक आत्मविश्वास के साथ पूरा करने में मदद कर सकता है। विशेषज्ञ सहायता के लिए यशोदा टोटल सोल्यूशन से संपर्क करें।',

    cta_state_cm_description2: 'मुफ्त परामर्श प्राप्त करें',

    cta_state_cm_button: 'अभी कॉल करें',

    //-------------------------------------------------------------------------------------State CM Scheme Page Ends

    // Banking & ATM Page -------------------------------------------------------------------------


    atm_title_backlink1: 'होम',
    atm_title_backlink2: 'बैंकिंग एवं एटीएम कार्ड बीमा दावा सहायता',

    atm_title: 'बैंकिंग एवं एटीएम कार्ड बीमा दावा सहायता',
    atm_description: 'बैंक खातों और एटीएम कार्ड से जुड़े बीमा लाभों को समझना और यह जानना कि लाभार्थी दावा प्रक्रिया को कैसे संचालित कर सकते हैं। कई बैंक एटीएम या डेबिट कार्ड से जुड़े बीमा कवरेज प्रदान करते हैं, जो दुर्घटनाजनित मृत्यु, विकलांगता या अन्य पात्र घटनाओं के मामले में वित्तीय सुरक्षा प्रदान करता है।',

    what_atm_title: 'सेवा अवलोकन',
    what_atm_description: 'कई बैंक अपनी बैंकिंग सेवाओं के हिस्से के रूप में डेबिट कार्ड या एटीएम कार्ड से जुड़े बीमा कवरेज प्रदान करते हैं। ये पॉलिसियां कार्डधारकों या उनके लाभार्थियों को दुर्घटनाजनित मृत्यु, विकलांगता या अन्य कवर की गई स्थितियों में वित्तीय सुरक्षा प्रदान कर सकती हैं।',
    what_atm_description1: 'हालांकि, कई ग्राहक इस प्रकार के बीमा कवरेज के अस्तित्व से अनजान रहते हैं या इसमें शामिल दावा प्रक्रिया को नहीं समझते।',
    what_atm_description2: 'जब कोई पात्र घटना होती है, तो लाभार्थियों को यह निर्धारित करने में कठिनाई हो सकती है कि क्या बीमा लाभ लागू होता है और दावा प्रस्तुत करने के लिए कौन से दस्तावेज आवश्यक हैं।',
    what_atm_description3: 'यशोदा टोटल सोल्यूशन',
    what_atm_description4: 'ग्राहकों को पात्रता मानदंड समझने, आवश्यक दस्तावेज तैयार करने और दावा प्रस्तुत करने की प्रक्रिया में मार्गदर्शन करने में सहायता करता है, ताकि वे बैंक से जुड़े बीमा पॉलिसियों के अंतर्गत उपलब्ध लाभ प्राप्त कर सकें।',

    what_atm_key_features: 'सामान्य एटीएम कार्ड बीमा दावा प्रक्रिया:',
    what_atm_key_feature1: '• बैंक द्वारा एटीएम कार्ड जारी → कार्ड से बीमा कवरेज जुड़ा',
    what_atm_key_feature2: '• दुर्घटना की घटना घटित होती है',
    what_atm_key_feature3: '• लाभार्थी दावा प्रस्तुत करता है',
    what_atm_key_feature4: '• दावा सत्यापन और प्रोसेसिंग',

    common_challenges_atm_title: 'एटीएम कार्ड बीमा दावा से जुड़ी सामान्य चुनौतियां',
    common_challenges_atm_description: 'लाभार्थियों को लाभ प्राप्त करने का प्रयास करते समय कई चुनौतियों का सामना करना पड़ सकता है',

    common_challenges_atm_item1: 'जागरूकता की कमी',
    common_challenges_atm_desc1: 'लाभार्थियों को यह जानकारी नहीं होती कि एटीएम कार्ड में बीमा कवरेज शामिल था।',

    common_challenges_atm_item2: 'पात्रता को लेकर भ्रम',
    common_challenges_atm_desc2: 'बीमा दावों के लिए पात्रता शर्तों को लेकर भ्रम।',

    common_challenges_atm_item3: 'दस्तावेजों की कमी',
    common_challenges_atm_desc3: 'आवश्यक दस्तावेज एकत्र करने में कठिनाई।',

    common_challenges_atm_item4: 'दावा प्रक्रिया को लेकर अनिश्चितता',
    common_challenges_atm_desc4: 'दावा प्रस्तुत करने की प्रक्रिया को लेकर अनिश्चितता।',

    common_challenges_atm_item5: 'सत्यापन में देरी',
    common_challenges_atm_desc5: 'अपूर्ण या गलत दस्तावेजों के कारण होने वाली देरी।',

    what_happens_after_atm_title: 'एटीएम कार्ड बीमा दावा मामलों में वास्तव में क्या होता है',
    what_happens_after_atm_description: 'कई स्थितियों में, कार्डधारकों को अपने बैंक से एटीएम या डेबिट कार्ड प्राप्त करते समय स्वचालित रूप से बीमा कवरेज में शामिल कर लिया जाता है।',
    what_happens_atm_description1: 'हालांकि, ग्राहक अक्सर इस कवरेज के बारे में तब तक अनजान रहते हैं जब तक कोई पात्र घटना नहीं हो जाती। जब ऐसी घटना होती है, तो लाभार्थियों को बाद में पता चल सकता है कि कार्डधारक बीमा लाभ के लिए पात्र था।',
    what_happens_atm_description2: 'उस समय, लाभार्थियों को दावा प्रक्रिया को समझना होता है और दावा आवेदन प्रस्तुत करने के लिए आवश्यक दस्तावेज एकत्र करने होते हैं।',
    what_happens_atm_description3: 'बैंक और बीमा प्रदाता आमतौर पर प्रस्तुत दस्तावेजों की समीक्षा करते हैं ताकि पात्रता की पुष्टि की जा सके और यह सुनिश्चित किया जा सके कि दावा पॉलिसी की शर्तों को पूरा करता है या नहीं।',
    what_happens_atm_description4: 'दावा समीक्षा प्रक्रिया:',
    what_happens_atm_item1: '• पात्र घटना घटित होती है',
    what_happens_atm_item2: '• लाभार्थी एटीएम कार्ड बीमा के बारे में जानता है',
    what_happens_atm_item3: '• दावा आवेदन तैयार किया जाता है',
    what_happens_atm_item4: '• दस्तावेज जमा किए जाते हैं',
    what_happens_atm_item5: '• दावा सत्यापन और निर्णय',

    ex_scenario_atm_title: 'उदाहरण परिदृश्य',
    ex_scenario_atm_description: 'वास्तविक जीवन की स्थितियां जहां एटीएम कार्ड बीमा दावे उत्पन्न होते हैं',

    ex_scenario_atm_example1_title: 'उदाहरण 1 – परिवार को एटीएम कार्ड बीमा की जानकारी नहीं',
    ex_scenario_atm_example1_desc: 'एक बैंक ग्राहक के पास सक्रिय एटीएम कार्ड होता है जिसमें दुर्घटना बीमा कवरेज शामिल होता है। एक दुर्भाग्यपूर्ण दुर्घटना के बाद, परिवार को बाद में पता चलता है कि कार्डधारक एटीएम कार्ड से जुड़े बीमा लाभों के लिए पात्र था।',

    ex_scenario_atm_example2_title: 'उदाहरण 2 – पात्रता आवश्यकताओं को लेकर भ्रम',
    ex_scenario_atm_example2_desc: 'एक लाभार्थी दावा प्रस्तुत करने का प्रयास करता है लेकिन उसे पता चलता है कि कुछ पात्रता शर्तों को पूरा करना आवश्यक है, जैसे हाल ही में एटीएम कार्ड का उपयोग या सक्रिय खाता स्थिति।',

    ex_scenario_atm_example3_title: 'उदाहरण 3 – दस्तावेज़ संबंधी चुनौतियां',
    ex_scenario_atm_example3_desc: 'एक परिवार का सदस्य दावा प्रस्तुत करने का प्रयास करता है लेकिन बैंक और बीमा प्रदाता द्वारा आवश्यक दस्तावेज एकत्र करने में संघर्ष करता है।',

    ex_scenario_atm_example4_title: 'उदाहरण 4 – दावा प्रक्रिया को लेकर अनिश्चितता',
    ex_scenario_atm_example4_desc: 'एक लाभार्थी बीमा लाभ प्राप्त करने के लिए बैंक से संपर्क करता है लेकिन दावा प्रस्तुत करने के लिए आवश्यक सही प्रक्रिया और दस्तावेजों के बारे में अनिश्चित होता है।',

    documentation_atm_title: 'एटीएम कार्ड बीमा दावा आवश्यकताओं को समझना',
    documentation_atm_description: 'एटीएम कार्ड बीमा दावों के लिए आमतौर पर पात्रता की पुष्टि करने और दावा प्रक्रिया को पूरा करने हेतु कुछ दस्तावेज और जानकारी की आवश्यकता होती है।',
    documentation_atm_list: [
      'पात्र घटना का प्रमाण',
      'पहचान और बैंक खाता विवरण',
      'एटीएम या डेबिट कार्ड की जानकारी',
      'दावा आवेदन फॉर्म',
      'कार्ड से जुड़े बीमा कवरेज का सत्यापन'
    ],
    documentation_atm_description1: 'इन दस्तावेज आवश्यकताओं को समझना लाभार्थियों को दावा आवेदन सही तरीके से तैयार करने में मदद करता है।',
    documentation_atm_description2: 'दस्तावेज़ संरचना:',
    documentation_atm_description3: 'कार्डधारक सत्यापन → घटना दस्तावेजीकरण → दावा आवेदन फॉर्म → बैंक खाता सत्यापन → दावा मूल्यांकन',

    why_choose_atm_title: 'यशोदा टोटल सोल्यूशन को क्यों चुनें?',
    why_choose_atm_description: 'बैंकिंग और एटीएम कार्ड बीमा दावों के लिए विश्वसनीय सहायता',

    why_choose_atm_item1: 'विशेषज्ञ टीम',
    why_choose_atm_desc1: 'बीमा दावा अस्वीकृति शिकायतों और विवादों को संभालने का वर्षों का अनुभव।',

    why_choose_atm_item2: 'पूर्ण दस्तावेज़ीकरण',
    why_choose_atm_desc2: 'हम आपके लिए सभी आवश्यक दस्तावेज, नोटिस और शिकायत पत्र तैयार करते हैं।',

    why_choose_atm_item3: 'कानूनी सहायता',
    why_choose_atm_desc3: 'आवश्यक होने पर कानूनी नोटिस ड्राफ्टिंग और ओम्बड्समैन शिकायत दाखिल करना।',

    why_choose_atm_item4: 'उच्च सफलता दर',
    why_choose_atm_desc4: 'सैकड़ों ग्राहकों को मुआवजा और पॉलिसी समाधान प्राप्त करने में सहायता की है।',

    faq_atm_title: 'अक्सर पूछे जाने वाले प्रश्न',

    faq_atm_q1: 'एटीएम कार्ड बीमा कवरेज क्या है?',
    faq_atm_a1: 'कुछ बैंक कुछ पात्र घटनाओं के लिए एटीएम या डेबिट कार्ड से जुड़े बीमा लाभ प्रदान करते हैं।',

    faq_atm_q2: 'एटीएम कार्ड बीमा लाभ कौन दावा कर सकता है?',
    faq_atm_a2: 'पॉलिसी की शर्तों के आधार पर कार्डधारक के लाभार्थी लाभ का दावा करने के पात्र हो सकते हैं।',

    faq_atm_q3: 'कोई व्यक्ति कैसे जान सकता है कि उसके एटीएम कार्ड में बीमा कवरेज शामिल है?',
    faq_atm_a3: 'बैंक या कार्ड जारी करने वाली संस्था यह पुष्टि कर सकती है कि एटीएम कार्ड से बीमा कवरेज जुड़ा हुआ है या नहीं।',

    faq_atm_q4: 'एटीएम कार्ड बीमा दावों के लिए कौन से दस्तावेज आवश्यक होते हैं?',
    faq_atm_a4: 'आवश्यक दस्तावेजों में पहचान सत्यापन, घटना से संबंधित दस्तावेज और दावा फॉर्म शामिल हो सकते हैं।',

    cta_atm_title: 'क्या आपको एटीएम कार्ड बीमा दावा प्रक्रियाओं को समझने में सहायता चाहिए?',
    cta_atm_description: 'पात्रता शर्तों और दस्तावेज आवश्यकताओं को समझना लाभार्थियों को दावा प्रक्रिया को अधिक आत्मविश्वास के साथ संचालित करने में मदद कर सकता है।',
    cta_atm_description2: 'बैंकिंग और एटीएम कार्ड बीमा दावा सहायता के बारे में अधिक जानने के लिए यशोदा टोटल सोल्यूशन से संपर्क करें।',
    cta_atm_button: 'अभी संपर्क करें',

    //-------------------------------------------------------------------------- Banking & ATM Page Ends

    // PF Page ----------------------------------------------------------------------------


    pf_title_backlink1: 'होम',
    pf_title_backlink2: 'पीएफ दुर्घटना बीमा दावा सहायता',

    pf_title: 'पीएफ दुर्घटना बीमा दावा सहायता',
    pf_description: 'प्रोविडेंट फंड योजनाओं से जुड़े दुर्घटना बीमा लाभों को समझना और यह जानना कि लाभार्थी दावा प्रक्रिया को कैसे संचालित कर सकते हैं। कुछ पीएफ योजनाएं पात्र सदस्यों को दुर्घटना बीमा लाभ प्रदान करती हैं, हालांकि कई लोग इन लाभों के बारे में अनजान रहते हैं या दावा प्रक्रियाओं में कठिनाइयों का सामना करते हैं।',

    what_pf_title: 'सेवा अवलोकन',
    what_pf_description: 'कुछ प्रोविडेंट फंड योजनाएं कर्मचारी लाभ कार्यक्रमों के हिस्से के रूप में पात्र सदस्यों को दुर्घटना बीमा कवरेज प्रदान करती हैं। ये लाभ दुर्घटनाजनित मृत्यु या विकलांगता की स्थिति में सदस्य या उनके लाभार्थियों को वित्तीय सहायता प्रदान कर सकते हैं।',
    what_pf_description1: 'हालांकि, कई व्यक्तियों को यह जानकारी नहीं होती कि उनके पीएफ सदस्यता के अंतर्गत ऐसा कवरेज उपलब्ध है। जब कोई दुर्घटना होती है, तो लाभार्थियों को पात्रता शर्तों, दावा प्रक्रिया और दस्तावेज़ आवश्यकताओं के बारे में भ्रम का सामना करना पड़ सकता है।',
    what_pf_description2: 'कई मामलों में, पीएफ सदस्यता विवरण का सत्यापन और आवश्यक दस्तावेज तैयार करने की प्रक्रिया जटिल हो सकती है।',
    what_pf_description3: 'यशोदा टोटल सोल्यूशन',
    what_pf_description4: 'ग्राहकों को पात्रता मानदंड समझाने, आवश्यक दस्तावेज तैयार करने में सहायता करने और दावा प्रस्तुत करने की प्रक्रिया में मार्गदर्शन देने में मदद करता है, ताकि वे पीएफ से संबंधित योजनाओं के अंतर्गत उपलब्ध बीमा लाभ प्राप्त कर सकें।',

    what_pf_key_features: 'पीएफ दुर्घटना बीमा दावा प्रक्रिया:',
    what_pf_key_feature1: '• पीएफ सदस्यता सक्रिय',
    what_pf_key_feature2: '• दुर्घटना की घटना घटित होती है',
    what_pf_key_feature3: '• लाभार्थी दावा प्रारंभ करता है',
    what_pf_key_feature4: '• सत्यापन के लिए दस्तावेज जमा किए जाते हैं',
    what_pf_key_feature5: '• दावा मूल्यांकन और प्रोसेसिंग',

    common_challenges_pf_title: 'पीएफ बीमा दावा से जुड़ी सामान्य चुनौतियां',
    common_challenges_pf_description: 'लाभार्थियों को लाभ प्राप्त करने का प्रयास करते समय कई चुनौतियों का सामना करना पड़ सकता है',

    common_challenges_pf_item1: 'जागरूकता की कमी',
    common_challenges_pf_desc1: 'लाभार्थियों को यह जानकारी नहीं होती कि पीएफ सदस्यता में दुर्घटना बीमा कवरेज शामिल है।',

    common_challenges_pf_item2: 'पात्रता को लेकर भ्रम',
    common_challenges_pf_desc2: 'दावा के लिए पात्रता शर्तों को लेकर भ्रम।',

    common_challenges_pf_item3: 'दस्तावेजों की कमी',
    common_challenges_pf_desc3: 'पीएफ सदस्यता विवरण और आवश्यक दस्तावेज एकत्र करने में कठिनाई।',

    common_challenges_pf_item4: 'पीएफ रिकॉर्ड सत्यापन',
    common_challenges_pf_desc4: 'दावा प्रस्तुत करने की प्रक्रिया को लेकर अनिश्चितता।',

    common_challenges_pf_item5: 'दावा प्रक्रिया में देरी',
    common_challenges_pf_desc5: 'अपूर्ण दस्तावेजों के कारण होने वाली देरी।',

    what_happens_after_pf_title: 'पीएफ दुर्घटना बीमा दावा मामलों में वास्तव में क्या होता है',
    what_happens_after_pf_description: 'कई स्थितियों में, कर्मचारियों को उनके कार्यस्थल के माध्यम से पीएफ योजनाओं में शामिल किया जाता है, बिना यह पूरी तरह समझे कि कार्यक्रम से जुड़े बीमा लाभ क्या हो सकते हैं।',
    what_happens_pf_description1: 'दुर्घटना होने के बाद, लाभार्थियों को बाद में पता चल सकता है कि पीएफ सदस्य दुर्घटना बीमा लाभ के लिए पात्र था।',
    what_happens_pf_description2: 'उस चरण पर, लाभार्थियों को दावा आवेदन प्रस्तुत करने से पहले आवश्यक दस्तावेज एकत्र करने और पीएफ सदस्यता विवरण का सत्यापन करना होता है।',
    what_happens_pf_description3: 'इसके बाद संबंधित प्राधिकरण और बीमा प्रदाता प्रस्तुत दस्तावेजों की समीक्षा करते हैं ताकि पात्रता की पुष्टि की जा सके और यह निर्धारित किया जा सके कि दावा योजना के अंतर्गत निर्धारित शर्तों को पूरा करता है या नहीं।',
    what_happens_pf_description4: 'इन चरणों को समझना लाभार्थियों को दावा प्रक्रिया को अधिक प्रभावी ढंग से संचालित करने में मदद करता है।',
    what_happens_pf_description5: 'पीएफ बीमा दावा समीक्षा प्रक्रिया:',
    what_happens_pf_item1: '• दुर्घटना की घटना घटित होती है',
    what_happens_pf_item2: '• लाभार्थी पीएफ बीमा कवरेज के बारे में जानता है',
    what_happens_pf_item3: '• दावा आवेदन तैयार किया जाता है',
    what_happens_pf_item4: '• दस्तावेज जमा किए जाते हैं',
    what_happens_pf_item5: '• सत्यापन और दावा निर्णय',

    ex_scenario_pf_title: 'उदाहरण परिदृश्य',
    ex_scenario_pf_description: 'वास्तविक जीवन की स्थितियां जहां पीएफ दुर्घटना बीमा दावे उत्पन्न होते हैं',

    ex_scenario_pf_example1_title: 'उदाहरण 1 – परिवार को पीएफ बीमा कवरेज की जानकारी नहीं',
    ex_scenario_pf_example1_desc: 'एक कर्मचारी अपने नियोक्ता के माध्यम से पीएफ योजना में नामांकित होता है। एक दुर्घटना के बाद, परिवार को बाद में पता चलता है कि पीएफ सदस्यता में दुर्घटना बीमा लाभ शामिल था।',

    ex_scenario_pf_example2_title: 'उदाहरण 2 – पीएफ सदस्यता सत्यापन',
    ex_scenario_pf_example2_desc: 'एक लाभार्थी दावा प्रस्तुत करने का प्रयास करता है लेकिन पहले उसे पीएफ सदस्यता विवरण और बीमा लाभ से संबंधित पात्रता शर्तों की पुष्टि करनी होती है।',

    ex_scenario_pf_example3_title: 'उदाहरण 3 – दस्तावेज एकत्र करने में कठिनाई',
    ex_scenario_pf_example3_desc: 'एक परिवार का सदस्य दावा प्रस्तुत करने का प्रयास करता है लेकिन पीएफ रिकॉर्ड और दुर्घटना सत्यापन से संबंधित आवश्यक दस्तावेज एकत्र करने में कठिनाई का सामना करता है।',

    ex_scenario_pf_example4_title: 'उदाहरण 4 – दावा प्रक्रिया को लेकर भ्रम',
    ex_scenario_pf_example4_desc: 'एक लाभार्थी लाभ प्राप्त करने के लिए संबंधित प्राधिकरण से संपर्क करता है लेकिन दावा प्रस्तुत करने की सही प्रक्रिया को समझने में कठिनाई होती है।',

    documentation_pf_title: 'पीएफ बीमा दावा आवश्यकताओं को समझना',
    documentation_pf_description: 'पीएफ दुर्घटना बीमा दावों के लिए आमतौर पर पात्रता की पुष्टि करने और दावा प्रक्रिया को पूरा करने हेतु कुछ दस्तावेज और जानकारी की आवश्यकता होती है।',
    documentation_pf_list: [
      'दुर्घटना घटना का प्रमाण',
      'पीएफ सदस्यता या खाता विवरण',
      'पहचान और लाभार्थी की जानकारी',
      'दावा आवेदन फॉर्म',
      'पीएफ योजना के अंतर्गत पात्रता का सत्यापन'
    ],
    documentation_pf_description1: 'इन दस्तावेज आवश्यकताओं को समझना लाभार्थियों को दावा आवेदन सही तरीके से तैयार करने में मदद करता है।',
    documentation_pf_description2: 'पीएफ बीमा दावा दस्तावेज़ संरचना:',
    documentation_pf_description3: 'पीएफ सदस्यता सत्यापन → घटना दस्तावेजीकरण → दावा आवेदन फॉर्म → लाभार्थी पहचान → दावा मूल्यांकन',

    why_choose_pf_title: 'यशोदा टोटल सोल्यूशन क्यों चुनें?',
    why_choose_pf_description: 'पीएफ दुर्घटना बीमा दावों के लिए विश्वसनीय सहायता',

    why_choose_pf_item1: 'अनुभवी और पेशेवर टीम',
    why_choose_pf_desc1: 'उद्योग ज्ञान और संचालन विशेषज्ञता वाले योग्य पेशेवर।',

    why_choose_pf_item2: 'त्वरित और पारदर्शी प्रोसेसिंग',
    why_choose_pf_desc2: 'स्पष्ट संचार और निगरानी द्वारा समर्थित व्यवस्थित कार्यप्रवाह।',

    why_choose_pf_item3: 'ग्राहक-प्रथम दृष्टिकोण',
    why_choose_pf_desc3: 'हर मामले को ध्यान, सहानुभूति और नैतिक जिम्मेदारी के साथ संभाला जाता है।',

    why_choose_pf_item4: 'प्रौद्योगिकी-आधारित निगरानी',
    why_choose_pf_desc4: 'उन्नत ट्रैकिंग सिस्टम जवाबदेही और नियमित अपडेट सुनिश्चित करते हैं।',

    why_choose_pf_item5: 'विश्वसनीय सेवा भागीदार',
    why_choose_pf_desc5: 'विश्वास, विश्वसनीयता और सेवा उत्कृष्टता पर आधारित दीर्घकालिक संबंधों पर केंद्रित।',

    faq_pf_title: 'अक्सर पूछे जाने वाले प्रश्न',

    faq_pf_q1: 'पीएफ दुर्घटना बीमा कवरेज क्या है?',
    faq_pf_a1: 'कुछ प्रोविडेंट फंड योजनाएं पात्र सदस्यों के लिए दुर्घटना बीमा लाभ प्रदान करती हैं।',

    faq_pf_q2: 'पीएफ दुर्घटना बीमा लाभ कौन दावा कर सकता है?',
    faq_pf_a2: 'योजना की शर्तों के आधार पर पीएफ सदस्य के लाभार्थी लाभ का दावा करने के पात्र हो सकते हैं।',

    faq_pf_q3: 'लाभार्थी पीएफ बीमा कवरेज की पुष्टि कैसे कर सकते हैं?',
    faq_pf_a3: 'पीएफ रिकॉर्ड और संबंधित योजना विवरण यह सत्यापित करने में मदद कर सकते हैं कि बीमा कवरेज लागू होता है या नहीं।',

    faq_pf_q4: 'पीएफ दुर्घटना बीमा दावों के लिए कौन से दस्तावेज आवश्यक होते हैं?',
    faq_pf_a4: 'आवश्यक दस्तावेजों में पीएफ सदस्यता विवरण, घटना का प्रमाण और दावा आवेदन फॉर्म शामिल हो सकते हैं।',

    cta_pf_title: 'क्या आपको पीएफ दुर्घटना बीमा दावा प्रक्रियाओं को समझने में सहायता चाहिए?',
    cta_pf_description: 'पात्रता शर्तों और दस्तावेज आवश्यकताओं को समझना लाभार्थियों को दावा प्रक्रिया को अधिक आत्मविश्वास के साथ संचालित करने में मदद कर सकता है।',
    cta_pf_description2: 'पीएफ दुर्घटना बीमा दावा सहायता के बारे में अधिक जानने के लिए यशोदा टोटल सोल्यूशन से संपर्क करें।',
    cta_pf_button: 'अभी संपर्क करें',

    //----------------------------------------------------------------- PF Page Details

    // Legal Consulation Page


    legal_title_backlink1: 'होम',
    legal_title_backlink2: 'कानूनी परामर्श',

    legal_title: 'कानूनी परामर्श',
    legal_description: 'कानूनी स्थितियों को स्पष्ट रूप से समझना और औपचारिक कानूनी कार्रवाई करने से पहले संभावित विकल्पों का मूल्यांकन करना। कानूनी परामर्श व्यक्तियों को उनकी कानूनी स्थिति, अधिकारों और संभावित विकल्पों को समझने में मदद करता है, इससे पहले कि वे किसी औपचारिक कानूनी प्रक्रिया की शुरुआत करें।',

    what_legal_title: 'सेवा अवलोकन',
    what_legal_description: 'कानूनी परामर्श वह प्रक्रिया है जिसमें किसी कानूनी मुद्दे पर अनुभवी पेशेवरों के साथ चर्चा की जाती है ताकि तथ्यों को समझा जा सके, दस्तावेजों की समीक्षा की जा सके और संभावित कानूनी विकल्पों का मूल्यांकन किया जा सके।',
    what_legal_description1: 'कई व्यक्तियों को विवादों, बीमा से संबंधित मुद्दों, वित्तीय संघर्षों या अन्य कानूनी मामलों से निपटते समय अनिश्चितता का सामना करना पड़ता है। उचित मार्गदर्शन के बिना यह निर्धारित करना कठिन हो सकता है कि किसी मामले में मजबूत कानूनी आधार है या नहीं, या आगे कौन से कदम उठाए जाने चाहिए।',
    what_legal_description2: 'परामर्श के माध्यम से ग्राहक अपनी स्थिति प्रस्तुत कर सकते हैं और अपने दस्तावेजों तथा साक्ष्यों की संरचित समीक्षा प्राप्त कर सकते हैं।',
    what_legal_description3: 'पर',
    what_legal_description4: 'यशोदा टोटल सोल्यूशन',
    what_legal_description5: ', कानूनी परामर्श का उद्देश्य तथ्यों की सावधानीपूर्वक समीक्षा करके और आगे बढ़ने से पहले संभावित जोखिमों और अवसरों की पहचान करके स्थिति की यथार्थ समझ प्रदान करना है।',

    what_legal_key_features: 'कानूनी परामर्श प्रक्रिया प्रवाह:',
    what_legal_key_feature1: '• ग्राहक अपनी समस्या प्रस्तुत करता है',
    what_legal_key_feature2: '• मामले के विवरण की समीक्षा की जाती है',
    what_legal_key_feature3: '• दस्तावेजों और साक्ष्यों का मूल्यांकन किया जाता है',
    what_legal_key_feature4: '• कानूनी स्थिति का विश्लेषण किया जाता है',
    what_legal_key_feature5: '• संभावित समाधान पहचाने जाते हैं',

    common_situations_legal_title: 'सामान्य स्थितियां जहां कानूनी परामर्श की आवश्यकता होती है',
    common_situations_legal_description: 'व्यक्ति और व्यवसाय अक्सर तब कानूनी परामर्श लेते हैं जब उन्हें ऐसी स्थितियों का सामना करना पड़ता है जिनमें स्पष्टता की आवश्यकता होती है',

    common_situations_legal_item1: 'वित्तीय विवाद',
    common_situations_legal_desc1: 'वित्तीय लेनदेन से संबंधित विवाद जिनमें कानूनी स्पष्टता और मूल्यांकन की आवश्यकता होती है।',

    common_situations_legal_item2: 'बीमा संबंधी मुद्दे',
    common_situations_legal_desc2: 'बीमा दावों या निपटान से संबंधित भ्रम, जिनके लिए कानूनी मूल्यांकन आवश्यक होता है।',

    common_situations_legal_item3: 'अनुबंध संबंधी विवाद',
    common_situations_legal_desc3: 'अनुबंधों या सेवाओं से संबंधित असहमति, जिनकी कानूनी समीक्षा आवश्यक होती है।',

    common_situations_legal_item4: 'कानूनी नोटिस',
    common_situations_legal_desc4: 'दूसरी पार्टी से प्राप्त कानूनी नोटिस, जिनके लिए पेशेवर मार्गदर्शन की आवश्यकता होती है।',

    common_situations_legal_item5: 'अनिश्चित कानूनी स्थिति',
    common_situations_legal_desc5: 'आगे बढ़ने से पहले किसी मामले की कानूनी मजबूती को लेकर अनिश्चितता।',

    why_choose_legal_title: 'यशोदा टोटल सोल्यूशन क्यों चुनें?',
    why_choose_legal_description: 'कानूनी परामर्श और केस मूल्यांकन के लिए विश्वसनीय सहायता',

    why_choose_legal_item1: 'अनुभवी और पेशेवर टीम',
    why_choose_legal_desc1: 'उद्योग ज्ञान और संचालन विशेषज्ञता वाले योग्य पेशेवर।',

    why_choose_legal_item2: 'त्वरित और पारदर्शी प्रक्रिया',
    why_choose_legal_desc2: 'स्पष्ट संचार और निगरानी द्वारा समर्थित व्यवस्थित कार्यप्रवाह।',

    why_choose_legal_item3: 'ग्राहक-प्रथम दृष्टिकोण',
    why_choose_legal_desc3: 'हर मामले को ध्यान, सहानुभूति और नैतिक जिम्मेदारी के साथ संभाला जाता है।',

    why_choose_legal_item4: 'विश्वसनीय सेवा भागीदार',
    why_choose_legal_desc4: 'विश्वास, विश्वसनीयता और सेवा उत्कृष्टता पर आधारित दीर्घकालिक संबंधों पर केंद्रित।',

    process_legal_title: 'हमारी 5-स्टेप कानूनी परामर्श प्रक्रिया',
    process_legal_description: 'सरल, पारदर्शी और प्रभावी दृष्टिकोण',

    process_legal_step1_title: 'प्रारंभिक परामर्श और केस समीक्षा',
    process_legal_step1_desc: 'हम आपकी स्थिति सुनते हैं, पृष्ठभूमि को समझते हैं और आपके द्वारा प्रदान किए गए सभी संबंधित दस्तावेजों और तथ्यों की समीक्षा करते हैं।',

    process_legal_step2_title: 'साक्ष्य और दस्तावेज विश्लेषण',
    process_legal_step2_desc: 'हम आपके दस्तावेजों, समझौतों, संचार और साक्ष्यों की सावधानीपूर्वक जांच करते हैं ताकि कानूनी स्थिति का आकलन किया जा सके।',

    process_legal_step3_title: 'कानूनी मजबूती का मूल्यांकन',
    process_legal_step3_desc: 'हम आपके मामले के कानूनी गुणों का विश्लेषण करते हैं, उसकी ताकत, कमजोरियां और संभावित जोखिमों की पहचान करते हैं।',

    process_legal_step4_title: 'विकल्प और रणनीति पर चर्चा',
    process_legal_step4_desc: 'हम तथ्यों और साक्ष्यों के आधार पर संभावित कानूनी विकल्पों, रणनीतियों और वास्तविक परिणामों को समझाते हैं।',

    process_legal_step5_title: 'सिफारिश और आगे के कदम',
    process_legal_step5_desc: 'हम स्पष्ट सिफारिशें प्रदान करते हैं और आपके मामले के समाधान के लिए सर्वोत्तम कदमों के बारे में मार्गदर्शन करते हैं।',

    ex_scenario_legal_title: 'वास्तविक जीवन के परामर्श उदाहरण',
    ex_scenario_legal_description: 'ये कुछ सामान्य स्थितियां हैं जिनका हम मूल्यांकन करने में सहायता करते हैं',

    ex_scenario_legal_problem_label: '❌ समस्या:',
    ex_scenario_legal_reality_label: '⚠️ वास्तविकता:',
    ex_scenario_legal_solution_label: '✅ हमारा समाधान:',

    ex_scenario_legal_case1_title: 'केस 1: बीमा दावा विवाद',
    ex_scenario_legal_case1_problem: 'एक पॉलिसीधारक को लगता है कि उसका बीमा दावा सही तरीके से संभाला नहीं गया है और वह आगे बढ़ने से पहले यह समझना चाहता है कि क्या इस स्थिति में कानूनी आधार है।',
    ex_scenario_legal_case1_reality: 'पॉलिसी दस्तावेजों और दावा पत्राचार की समीक्षा के बाद पाया गया कि दावा अस्वीकृति में प्रक्रियात्मक त्रुटियां थीं।',
    ex_scenario_legal_case1_solution: 'हमने अस्वीकृति को चुनौती देने के कानूनी आधार को समझाते हुए परामर्श प्रदान किया। ग्राहक ने ओम्बड्समैन के पास शिकायत दर्ज की।',

    ex_scenario_legal_case2_title: 'केस 2: अनुबंध संबंधी विवाद',
    ex_scenario_legal_case2_problem: 'दो पक्ष एक समझौते में प्रवेश करते हैं, लेकिन एक पक्ष सहमत शर्तों को पूरा करने में विफल रहता है। प्रभावित पक्ष संभावित कानूनी विकल्पों को समझने के लिए परामर्श चाहता है।',
    ex_scenario_legal_case2_reality: 'अनुबंध की समीक्षा से अनुबंध उल्लंघन की विशिष्ट धाराएं और गैर-प्रदर्शन के स्पष्ट साक्ष्य सामने आए।',
    ex_scenario_legal_case2_solution: 'हमने कानूनी उपाय विकल्पों के बारे में सलाह दी, जिसमें नोटिस अवधि और अनुबंध के अंतर्गत संभावित मुआवजा दावे शामिल थे।',

    ex_scenario_legal_case3_title: 'केस 3: वित्तीय लेनदेन विवाद',
    ex_scenario_legal_case3_problem: 'एक व्यक्ति किसी अन्य पक्ष को दिए गए धन से संबंधित विवाद का सामना करता है और जानना चाहता है कि क्या कानूनी कार्रवाई संभव है।',
    ex_scenario_legal_case3_reality: 'सीमित दस्तावेज उपलब्ध थे, जिससे लेनदेन की शर्तों और पुनर्भुगतान समझौते को साबित करना कठिन था।',
    ex_scenario_legal_case3_solution: 'हमने लिखित साक्ष्यों के महत्व को समझाया और कानूनी कार्रवाई से पहले वैकल्पिक विवाद समाधान का सुझाव दिया।',

    ex_scenario_legal_case4_title: 'केस 4: कानूनी नोटिस प्राप्त होना',
    ex_scenario_legal_case4_problem: 'एक व्यक्ति को कानूनी नोटिस प्राप्त होता है और वह उसके प्रभाव और उचित उत्तर को समझना चाहता है।',
    ex_scenario_legal_case4_reality: 'कानूनी नोटिस में कुछ दावे आंशिक रूप से सही थे लेकिन उनमें तथ्यात्मक त्रुटियां भी थीं।',
    ex_scenario_legal_case4_solution: 'हमने प्रत्येक बिंदु का विस्तार से उत्तर तैयार करने में सहायता की और समझौता वार्ता का सुझाव दिया।',

    faq_legal_title: 'अक्सर पूछे जाने वाले प्रश्न',
    faq_legal_description: 'कानूनी परामर्श से संबंधित सामान्य प्रश्न',

    faq_legal_q1: 'कानूनी परामर्श क्या है?',
    faq_legal_a1: 'कानूनी परामर्श एक प्रक्रिया है जिसमें कानूनी पेशेवरों के साथ चर्चा करके किसी कानूनी मुद्दे को समझा जाता है और संभावित विकल्पों का मूल्यांकन किया जाता है।',

    faq_legal_q2: 'कानूनी परामर्श के लिए क्या लेकर जाना चाहिए?',
    faq_legal_a2: 'संबंधित दस्तावेज, समझौते और विवाद से जुड़ी जानकारी स्थिति को बेहतर समझने में सहायता कर सकते हैं।',

    faq_legal_q3: 'क्या कानूनी परामर्श यह निर्धारित करने में मदद कर सकता है कि मामला मजबूत है या नहीं?',
    faq_legal_a3: 'हाँ, दस्तावेजों और तथ्यों की समीक्षा करके मामले की मजबूती और संभावित जोखिमों की पहचान की जा सकती है।',

    faq_legal_q4: 'क्या कानूनी नोटिस भेजने से पहले परामर्श उपयोगी है?',
    faq_legal_a4: 'हाँ, परामर्श यह निर्धारित करने में मदद कर सकता है कि कानूनी नोटिस भेजना या आगे की कार्रवाई करना उचित है या नहीं।',

    cta_legal_title: 'क्या आपको अपनी कानूनी स्थिति के बारे में स्पष्टता चाहिए?',
    cta_legal_description: 'तथ्यों, दस्तावेजों और संभावित कानूनी विकल्पों को समझना व्यक्तियों को सूचित निर्णय लेने में मदद करता है। आज ही पेशेवर कानूनी परामर्श के लिए हमसे संपर्क करें।',
    cta_legal_button1: 'मुफ्त परामर्श प्राप्त करें',
    cta_legal_button2: 'अभी कॉल करें',

    // -----------------------------------------------------------------Legal Consulation Page Ends

    // Legal Drafting Page Hindi -----------------------------------------------------------------


    drafting_title_backlink1: 'होम',
    drafting_title_backlink2: 'कानूनी ड्राफ्टिंग एवं सत्यापन सहायता',

    drafting_title: 'कानूनी ड्राफ्टिंग एवं सत्यापन सहायता',
    drafting_description: 'महत्वपूर्ण दस्तावेजों और समझौतों में स्पष्टता, सटीकता और कानूनी सुरक्षा सुनिश्चित करना। कानूनी दस्तावेज कई व्यक्तिगत, वित्तीय और व्यावसायिक निर्णयों की नींव होते हैं। एक छोटी सी गलती या अस्पष्ट शब्दावली भी बाद में गलतफहमियां या कानूनी जटिलताएं उत्पन्न कर सकती है।',

    what_drafting_title: 'सेवा अवलोकन',
    what_drafting_description: 'कानूनी ड्राफ्टिंग में ऐसे दस्तावेज तैयार करना शामिल होता है जो पक्षों के बीच अधिकारों, जिम्मेदारियों और समझौतों को स्पष्ट रूप से परिभाषित करते हैं। इन दस्तावेजों में अनुबंध, नोटिस, समझौते या अन्य कानूनी अभिलेख शामिल हो सकते हैं, जो व्यक्तिगत, व्यावसायिक या प्रशासनिक मामलों में उपयोग किए जाते हैं।',
    what_drafting_description1: 'कानूनी दस्तावेजों का सत्यापन भी उतना ही महत्वपूर्ण है। किसी दस्तावेज पर हस्ताक्षर करने या प्रस्तुत करने से पहले उसकी समीक्षा करने से अस्पष्ट शर्तों, अधूरी धाराओं या संभावित कानूनी जोखिमों की पहचान करने में मदद मिलती है।',
    what_drafting_description2: 'कई व्यक्ति और व्यवसाय दस्तावेजों में प्रयुक्त कानूनी भाषा को पूरी तरह समझ नहीं पाते, जिससे भ्रम या अनपेक्षित परिणाम उत्पन्न हो सकते हैं।',
    what_drafting_description3: 'यशोदा टोटल सोल्यूशन',
    what_drafting_description4: 'ग्राहकों की सहायता करता है दस्तावेजों की सावधानीपूर्वक समीक्षा करके, कानूनी संरचना की पुष्टि करके और सुव्यवस्थित ड्राफ्ट तैयार करके, जो इच्छित शर्तों और नियमों को स्पष्ट रूप से व्यक्त करते हैं।',

    what_drafting_key_features: 'कानूनी ड्राफ्टिंग प्रक्रिया प्रवाह:',
    what_drafting_key_feature1: '• ग्राहक अपनी आवश्यकता बताता है',
    what_drafting_key_feature2: '• दस्तावेज विवरण एकत्र किए जाते हैं',
    what_drafting_key_feature3: '• ड्राफ्ट तैयार किया जाता है या मौजूदा दस्तावेज की समीक्षा की जाती है',
    what_drafting_key_feature4: '• कानूनी शर्तों को स्पष्ट रूप से संरचित किया जाता है',
    what_drafting_key_feature5: '• अंतिम दस्तावेज का सत्यापन किया जाता है',

    common_situations_drafting_title: 'सामान्य स्थितियां जहां कानूनी ड्राफ्टिंग की आवश्यकता होती है',
    common_situations_drafting_description: 'कई ऐसी स्थितियों में कानूनी ड्राफ्टिंग और सत्यापन की आवश्यकता हो सकती है जहां लिखित समझौते आवश्यक होते हैं',

    common_situations_drafting_item1: 'व्यावसायिक समझौते',
    common_situations_drafting_desc1: 'पक्षों के बीच स्पष्ट शर्तों और जिम्मेदारियों के साथ अनुबंध या समझौते तैयार करना।',

    common_situations_drafting_item2: 'संपत्ति से संबंधित दस्तावेज',
    common_situations_drafting_desc2: 'संपत्ति या किराया समझौते तैयार करना जो अधिकारों और दायित्वों को परिभाषित करते हैं।',

    common_situations_drafting_item3: 'कानूनी नोटिस',
    common_situations_drafting_desc3: 'उचित संरचना और भाषा के साथ कानूनी नोटिस का उत्तर देना या जारी करना।',

    common_situations_drafting_item4: 'आधिकारिक आवेदन',
    common_situations_drafting_desc4: 'आधिकारिक प्रस्तुतिकरण के लिए औपचारिक शिकायतें या कानूनी बयान तैयार करना।',

    common_situations_drafting_item5: 'अनुबंध सत्यापन',
    common_situations_drafting_desc5: 'हस्ताक्षर करने या प्रस्तुत करने से पहले दस्तावेजों की समीक्षा करना ताकि जोखिमों की पहचान की जा सके।',

    why_choose_drafting_title: 'यशोदा टोटल सोल्यूशन क्यों चुनें?',
    why_choose_drafting_description: 'कानूनी ड्राफ्टिंग और दस्तावेज सत्यापन के लिए विश्वसनीय सहायता',

    why_choose_drafting_item1: 'अनुभवी और पेशेवर टीम',
    why_choose_drafting_desc1: 'उद्योग ज्ञान और संचालन विशेषज्ञता वाले योग्य पेशेवर।',

    why_choose_drafting_item2: 'त्वरित और पारदर्शी प्रक्रिया',
    why_choose_drafting_desc2: 'स्पष्ट संचार और निगरानी द्वारा समर्थित व्यवस्थित कार्यप्रवाह।',

    why_choose_drafting_item3: 'ग्राहक-प्रथम दृष्टिकोण',
    why_choose_drafting_desc3: 'हर मामले को ध्यान, सहानुभूति और नैतिक जिम्मेदारी के साथ संभाला जाता है।',

    why_choose_drafting_item4: 'विश्वसनीय सेवा भागीदार',
    why_choose_drafting_desc4: 'विश्वास, विश्वसनीयता और सेवा उत्कृष्टता पर आधारित दीर्घकालिक संबंधों पर केंद्रित।',

    process_drafting_title: 'हमारी 5-स्टेप दस्तावेज ड्राफ्टिंग प्रक्रिया',
    process_drafting_description: 'सरल, पारदर्शी और प्रभावी दृष्टिकोण',

    process_drafting_step1_title: 'आवश्यकता की समझ',
    process_drafting_step1_desc: 'हम आपकी आवश्यकताओं पर चर्चा करते हैं, दस्तावेज के उद्देश्य को समझते हैं और संबंधित पक्षों के बारे में सभी आवश्यक जानकारी एकत्र करते हैं।',

    process_drafting_step2_title: 'जानकारी और साक्ष्य संग्रह',
    process_drafting_step2_desc: 'हम सभी आवश्यक विवरण, सहायक दस्तावेज और तथ्य एकत्र करते हैं जो कानूनी दस्तावेज तैयार करने या सत्यापित करने के लिए आवश्यक होते हैं।',

    process_drafting_step3_title: 'दस्तावेज ड्राफ्टिंग या समीक्षा',
    process_drafting_step3_desc: 'हम स्पष्ट कानूनी शर्तों के साथ एक सुव्यवस्थित ड्राफ्ट तैयार करते हैं या मौजूदा दस्तावेजों की स्पष्टता और पूर्णता के लिए गहन समीक्षा करते हैं।',

    process_drafting_step4_title: 'कानूनी संरचना सत्यापन',
    process_drafting_step4_desc: 'हम सुनिश्चित करते हैं कि सभी कानूनी शर्तें, धाराएं और नियम उचित रूप से परिभाषित हों और आवश्यकताओं के अनुरूप हों।',

    process_drafting_step5_title: 'अंतिम दस्तावेज प्रदान करना',
    process_drafting_step5_desc: 'हम अंतिम सत्यापित दस्तावेज प्रदान करते हैं, प्रमुख शर्तों की व्याख्या करते हैं और आपके किसी भी प्रश्न का उत्तर देते हैं।',

    ex_scenario_drafting_title: 'वास्तविक जीवन के ड्राफ्टिंग और सत्यापन उदाहरण',
    ex_scenario_drafting_description: 'ये कुछ सामान्य परिस्थितियां हैं जिनमें हम सहायता करते हैं',

    ex_scenario_drafting_problem_label: '❌ समस्या:',
    ex_scenario_drafting_reality_label: '⚠️ वास्तविकता:',
    ex_scenario_drafting_solution_label: '✅ हमारा समाधान:',

    ex_scenario_drafting_case1_title: 'केस 1: व्यावसायिक समझौता ड्राफ्टिंग',
    ex_scenario_drafting_case1_problem: 'दो व्यावसायिक साझेदार एक संयुक्त उद्यम शुरू करने की योजना बनाते हैं और अपनी भूमिकाओं, वित्तीय योगदान और जिम्मेदारियों को स्पष्ट करने के लिए एक लिखित समझौते की आवश्यकता होती है।',
    ex_scenario_drafting_case1_reality: 'स्पष्ट दस्तावेजीकरण के बिना, भूमिकाओं और लाभ वितरण को लेकर भविष्य में विवाद उत्पन्न हो सकते हैं, जिससे व्यावसायिक संघर्ष हो सकता है।',
    ex_scenario_drafting_case1_solution: 'हमने एक व्यापक साझेदारी समझौता तैयार किया जिसमें प्रत्येक साझेदार के कर्तव्य, पूंजी योगदान, लाभ वितरण और निकास शर्तों को स्पष्ट रूप से परिभाषित किया गया।',

    ex_scenario_drafting_case2_title: 'केस 2: संपत्ति किराया समझौता',
    ex_scenario_drafting_case2_problem: 'एक संपत्ति मालिक ऐसा किराया समझौता तैयार करना चाहता है जिसमें किराया, अवधि और दोनों पक्षों की जिम्मेदारियां स्पष्ट रूप से निर्धारित हों।',
    ex_scenario_drafting_case2_reality: 'कई किराया विवाद रखरखाव, किराया वृद्धि और नोटिस अवधि से संबंधित अस्पष्ट शर्तों के कारण उत्पन्न होते हैं।',
    ex_scenario_drafting_case2_solution: 'हमने एक विस्तृत किराया समझौता तैयार किया जिसमें किराया भुगतान शर्तें, रखरखाव जिम्मेदारियां, सुरक्षा जमा और समाप्ति धाराएं शामिल थीं।',

    ex_scenario_drafting_case3_title: 'केस 3: कानूनी नोटिस का उत्तर',
    ex_scenario_drafting_case3_problem: 'एक व्यक्ति को कानूनी नोटिस प्राप्त होता है और उसे अपनी स्थिति स्पष्ट करने तथा नोटिस में उल्लिखित दावों का उत्तर देने के लिए एक संरचित उत्तर तैयार करने की आवश्यकता होती है।',
    ex_scenario_drafting_case3_reality: 'कानूनी नोटिस में ऐसे आरोप शामिल थे जिनका बिंदुवार उत्तर देना और तथ्यात्मक तथा कानूनी संदर्भों के साथ स्पष्ट करना आवश्यक था।',
    ex_scenario_drafting_case3_solution: 'हमने एक विस्तृत उत्तर नोटिस तैयार किया जिसमें प्रत्येक आरोप का उत्तर दिया गया, तथ्य स्पष्ट किए गए और कानूनी अधिकार सुरक्षित रखे गए।',

    ex_scenario_drafting_case4_title: 'केस 4: हस्ताक्षर से पहले दस्तावेज सत्यापन',
    ex_scenario_drafting_case4_problem: 'एक व्यक्ति को एक अनुबंध पर हस्ताक्षर करने के लिए कहा जाता है और वह हस्ताक्षर करने से पहले यह सुनिश्चित करना चाहता है कि शर्तें स्पष्ट और कानूनी रूप से उचित हैं।',
    ex_scenario_drafting_case4_reality: 'अनुबंध में भुगतान शर्तों, देयता सीमाओं और समाप्ति शर्तों से संबंधित अस्पष्ट धाराएं थीं।',
    ex_scenario_drafting_case4_solution: 'हमने अनुबंध की समीक्षा की, समस्याग्रस्त धाराओं को चिन्हित किया, संशोधन सुझाए और बेहतर शर्तों के लिए बातचीत में सहायता की।',

    faq_drafting_title: 'अक्सर पूछे जाने वाले प्रश्न',
    faq_drafting_description: 'कानूनी ड्राफ्टिंग और सत्यापन से संबंधित सामान्य प्रश्न',

    faq_drafting_q1: 'कानूनी ड्राफ्टिंग क्या है?',
    faq_drafting_a1: 'कानूनी ड्राफ्टिंग लिखित कानूनी दस्तावेजों जैसे समझौते, नोटिस या अनुबंध तैयार करने की प्रक्रिया है।',

    faq_drafting_q2: 'दस्तावेज सत्यापन क्यों महत्वपूर्ण है?',
    faq_drafting_a2: 'सत्यापन दस्तावेज के उपयोग से पहले अस्पष्ट धाराओं, अधूरी जानकारी या संभावित कानूनी जोखिमों की पहचान करने में मदद करता है।',

    faq_drafting_q3: 'किसे कानूनी ड्राफ्टिंग सेवाओं की आवश्यकता हो सकती है?',
    faq_drafting_a3: 'व्यक्ति, व्यवसाय मालिक, संपत्ति मालिक और संगठन विभिन्न कानूनी दस्तावेजों के लिए ड्राफ्टिंग सहायता की आवश्यकता रख सकते हैं।',

    faq_drafting_q4: 'क्या मौजूदा दस्तावेजों की समीक्षा हस्ताक्षर से पहले की जा सकती है?',
    faq_drafting_a4: 'हाँ, दस्तावेजों की समीक्षा और सत्यापन किया जा सकता है ताकि शर्तें स्पष्ट और उपयुक्त हों।',

    cta_drafting_title: 'क्या आपको दस्तावेज ड्राफ्टिंग या सत्यापन में सहायता चाहिए?',
    cta_drafting_description: 'दस्तावेजों की संरचना और कानूनी भाषा को समझना भ्रम से बचने और विवादों की संभावना को कम करने में मदद कर सकता है। पेशेवर ड्राफ्टिंग सहायता के लिए आज ही हमसे संपर्क करें।',
    cta_drafting_button1: 'मुफ्त परामर्श प्राप्त करें',
    cta_drafting_button2: 'अभी कॉल करें',

    // ----------------------------------------------------------- Legal Drafting Page Hindi Ends


    // Consumer cases page hindi --------------------------------------------------------------


    consumer_title_backlink1: 'होम',
    consumer_title_backlink2: 'उपभोक्ता संरक्षण सहायता',

    consumer_title: 'उपभोक्ता संरक्षण सहायता',
    consumer_description: 'उपभोक्ता अधिकारों को समझना और दोषपूर्ण उत्पादों, खराब सेवाओं या अनुचित व्यापार प्रथाओं से संबंधित विवादों का समाधान करना। उपभोक्ता संरक्षण अधिनियम, 2019 के अंतर्गत उपभोक्ताओं को कानूनी अधिकार प्राप्त हैं जो उन्हें दोषपूर्ण उत्पादों, खराब सेवा गुणवत्ता, भ्रामक विज्ञापनों और अनुचित व्यापार प्रथाओं से संरक्षण प्रदान करते हैं।',

    what_consumer_title: 'सेवा अवलोकन',
    what_consumer_description: 'उपभोक्ता संरक्षण कानून इस उद्देश्य से बनाए गए हैं कि ग्राहकों को उत्पाद या सेवाएं खरीदते समय उचित व्यवहार प्राप्त हो।',
    what_consumer_description1: 'हालांकि, कई उपभोक्ताओं को तब कठिनाइयों का सामना करना पड़ता है जब उन्हें दोषपूर्ण उत्पाद, खराब सेवा गुणवत्ता, भ्रामक विज्ञापन या रिफंड से इनकार जैसी समस्याओं का सामना करना पड़ता है।',
    what_consumer_description2: 'ऐसी परिस्थितियों में उपभोक्ता संरक्षण प्रक्रिया और उपलब्ध विकल्पों को समझना महत्वपूर्ण हो जाता है।',
    what_consumer_description3: 'उपभोक्ता संरक्षण सहायता व्यक्तियों को उनके उपभोक्ता अधिकारों और व्यवसायों या सेवा प्रदाताओं के साथ विवादों के समाधान की प्रक्रियाओं को समझने में मदद करती है।',
    what_consumer_description4: 'यशोदा टोटल सोल्यूशन',
    what_consumer_description5: 'ग्राहकों को उपभोक्ता संरक्षण प्रक्रियाओं को समझने, आवश्यक दस्तावेज तैयार करने और उपभोक्ता विवादों को हल करने के लिए उचित कदमों में मार्गदर्शन देकर सहायता करता है।',

    what_consumer_key_features: 'उपभोक्ता विवाद समाधान प्रक्रिया:',
    what_consumer_key_feature1: '• उत्पाद या सेवा खरीदी जाती है',
    what_consumer_key_feature2: '• उपभोक्ता समस्या का सामना करता है',
    what_consumer_key_feature3: '• शिकायत दर्ज की जाती है',
    what_consumer_key_feature4: '• प्राधिकरण द्वारा मामले की समीक्षा की जाती है',
    what_consumer_key_feature5: '• समाधान या मुआवजा प्रदान किया जाता है',

    common_disputes_consumer_title: 'उपभोक्ता विवादों के सामान्य प्रकार',
    common_disputes_consumer_description: 'उपभोक्ताओं को वस्तुएं खरीदते समय या सेवाओं का उपयोग करते समय विभिन्न प्रकार के विवादों का सामना करना पड़ सकता है',

    common_disputes_consumer_item1: 'दोषपूर्ण उत्पाद',
    common_disputes_consumer_desc1: 'ऐसे उत्पाद जो खराब हों या अपेक्षित या वादा किए अनुसार कार्य न करें।',

    common_disputes_consumer_item2: 'सेवा में कमी',
    common_disputes_consumer_desc2: 'कम गुणवत्ता वाली या अधूरी सेवाएं जो निर्धारित मानकों को पूरा नहीं करती हैं।',

    common_disputes_consumer_item3: 'भ्रामक विज्ञापन',
    common_disputes_consumer_desc3: 'विज्ञापनों में झूठे दावे या बढ़ा-चढ़ाकर किए गए वादे जो उपभोक्ताओं को भ्रमित करते हैं।',

    common_disputes_consumer_item4: 'अधिक शुल्क लेना',
    common_disputes_consumer_desc4: 'निर्धारित मूल्य से अधिक शुल्क लेना या बिना जानकारी दिए छिपे हुए शुल्क जोड़ना।',

    common_disputes_consumer_item5: 'रिफंड से इनकार',
    common_disputes_consumer_desc5: 'दोषपूर्ण या अनुपयुक्त उत्पादों के लिए रिफंड या प्रतिस्थापन देने से इनकार करना।',

    why_choose_consumer_title: 'यशोदा टोटल सोल्यूशन क्यों चुनें?',
    why_choose_consumer_description: 'उपभोक्ता संरक्षण और विवाद समाधान के लिए विश्वसनीय सहायता',

    why_choose_consumer_item1: 'अनुभवी और पेशेवर टीम',
    why_choose_consumer_desc1: 'उद्योग ज्ञान और संचालन विशेषज्ञता वाले योग्य पेशेवर।',

    why_choose_consumer_item2: 'त्वरित और पारदर्शी प्रक्रिया',
    why_choose_consumer_desc2: 'स्पष्ट संचार और निगरानी द्वारा समर्थित व्यवस्थित कार्यप्रवाह।',

    why_choose_consumer_item3: 'ग्राहक-प्रथम दृष्टिकोण',
    why_choose_consumer_desc3: 'हर मामले को ध्यान, सहानुभूति और नैतिक जिम्मेदारी के साथ संभाला जाता है।',

    why_choose_consumer_item4: 'विश्वसनीय सेवा भागीदार',
    why_choose_consumer_desc4: 'विश्वास, विश्वसनीयता और सेवा उत्कृष्टता पर आधारित दीर्घकालिक संबंधों पर केंद्रित।',

    process_consumer_title: 'हमारी 6-स्टेप उपभोक्ता शिकायत प्रक्रिया',
    process_consumer_description: 'सरल, पारदर्शी और प्रभावी दृष्टिकोण',

    process_consumer_step1_title: 'केस की समझ और दस्तावेज समीक्षा',
    process_consumer_step1_desc: 'हम आपकी समस्या को समझते हैं, खरीद से संबंधित दस्तावेजों की समीक्षा करते हैं और विवाद की प्रकृति का मूल्यांकन करते हैं।',

    process_consumer_step2_title: 'उपभोक्ता अधिकार मूल्यांकन',
    process_consumer_step2_desc: 'हम उपभोक्ता संरक्षण कानूनों के अंतर्गत आपके अधिकारों का मूल्यांकन करते हैं और आपकी शिकायत की वैधता निर्धारित करते हैं।',

    process_consumer_step3_title: 'साक्ष्य और प्रमाण संग्रह',
    process_consumer_step3_desc: 'हम खरीद बिल, संचार रिकॉर्ड और उत्पाद विवरण सहित सभी आवश्यक साक्ष्य एकत्र करने में मदद करते हैं।',

    process_consumer_step4_title: 'शिकायत ड्राफ्टिंग और दाखिल करना',
    process_consumer_step4_desc: 'हम विस्तृत उपभोक्ता शिकायत तैयार करते हैं और उसे संबंधित उपभोक्ता फोरम या प्राधिकरण में दाखिल करते हैं।',

    process_consumer_step5_title: 'फॉलो-अप और एस्केलेशन',
    process_consumer_step5_desc: 'हम आपकी शिकायत पर फॉलो-अप करते हैं और समाधान के लिए आवश्यक होने पर उच्च स्तर पर मामला आगे बढ़ाते हैं।',

    process_consumer_step6_title: 'समाधान और मुआवजा',
    process_consumer_step6_desc: 'हम सुनिश्चित करते हैं कि आपको उचित मुआवजा, प्रतिस्थापन, रिफंड या सुधारात्मक कार्रवाई प्राप्त हो।',

    ex_scenario_consumer_title: 'वास्तविक जीवन के उपभोक्ता विवाद उदाहरण',
    ex_scenario_consumer_description: 'ये कुछ सामान्य परिस्थितियां हैं जिनका समाधान करने में हम सहायता करते हैं',

    ex_scenario_consumer_problem_label: '❌ समस्या:',
    ex_scenario_consumer_reality_label: '⚠️ वास्तविकता:',
    ex_scenario_consumer_solution_label: '✅ हमारा समाधान:',

    ex_scenario_consumer_case1_title: 'केस 1: दोषपूर्ण उत्पाद',
    ex_scenario_consumer_case1_problem: 'एक ग्राहक एक घरेलू उपकरण खरीदता है जो खरीद के कुछ समय बाद काम करना बंद कर देता है। कई बार विक्रेता से संपर्क करने के बावजूद समस्या का समाधान नहीं होता।',
    ex_scenario_consumer_case1_reality: 'विक्रेता ने उत्पाद को बदलने से इनकार कर दिया, यह दावा करते हुए कि वारंटी अवधि समाप्त हो चुकी है, जबकि दोष वारंटी अवधि के भीतर हुआ था।',
    ex_scenario_consumer_case1_solution: 'हमने दोष के समय-सीमा को सिद्ध करने वाले दस्तावेजों के साथ उपभोक्ता शिकायत दर्ज की। उपभोक्ता फोरम ने पूर्ण प्रतिस्थापन और असुविधा के लिए मुआवजा देने का आदेश दिया।',

    ex_scenario_consumer_case2_title: 'केस 2: खराब सेवा गुणवत्ता',
    ex_scenario_consumer_case2_problem: 'एक ग्राहक सेवा के लिए भुगतान करता है लेकिन उसे सेवा प्रदाता से अधूरी या असंतोषजनक सेवा प्राप्त होती है।',
    ex_scenario_consumer_case2_reality: 'सेवा प्रदाता ने केवल 50% कार्य पूरा किया और शेष कार्य पूरा करने या रिफंड देने से इनकार कर दिया।',
    ex_scenario_consumer_case2_solution: 'हमने उपभोक्ता संरक्षण कानून के अंतर्गत शिकायत दर्ज की। प्रदाता को सेवा पूरी करने और कमी के लिए दंड देने का आदेश दिया गया।',

    ex_scenario_consumer_case3_title: 'केस 3: भ्रामक विज्ञापन',
    ex_scenario_consumer_case3_problem: 'एक उपभोक्ता विज्ञापन के दावों के आधार पर उत्पाद खरीदता है जो बाद में गलत या अतिरंजित साबित होते हैं।',
    ex_scenario_consumer_case3_reality: 'विज्ञापित उत्पाद की विशेषताएं पूरी तरह गलत थीं और वास्तविक उत्पाद निम्न गुणवत्ता का था तथा उसमें कई विशेषताएं अनुपस्थित थीं।',
    ex_scenario_consumer_case3_solution: 'हमने साक्ष्यों के साथ भ्रामक विज्ञापन सिद्ध किया। उपभोक्ता को पूर्ण रिफंड और अनुचित व्यापार प्रथा के लिए मुआवजा प्राप्त हुआ।',

    ex_scenario_consumer_case4_title: 'केस 4: ऑनलाइन खरीद विवाद',
    ex_scenario_consumer_case4_problem: 'एक ग्राहक ई-कॉमर्स प्लेटफॉर्म से उत्पाद ऑर्डर करता है लेकिन उसे अलग उत्पाद प्राप्त होता है और रिफंड या प्रतिस्थापन प्राप्त करने में कठिनाई होती है।',
    ex_scenario_consumer_case4_reality: 'ई-कॉमर्स प्लेटफॉर्म विभिन्न प्रक्रियात्मक कारणों का हवाला देते हुए रिफंड में देरी करता रहा और केवल आंशिक मुआवजा देने की पेशकश की।',
    ex_scenario_consumer_case4_solution: 'हमने गलत उत्पाद वितरण के प्रमाण के साथ उपभोक्ता फोरम में मामला उठाया। पूर्ण रिफंड और उत्पीड़न के लिए मुआवजा प्रदान करने का आदेश दिया गया।',

    faq_consumer_title: 'अक्सर पूछे जाने वाले प्रश्न',
    faq_consumer_description: 'उपभोक्ता संरक्षण से संबंधित सामान्य प्रश्न',

    faq_consumer_q1: 'उपभोक्ता संरक्षण सहायता क्या है?',
    faq_consumer_a1: 'इसमें उपभोक्ता अधिकारों को समझना और उत्पादों या सेवाओं से संबंधित विवादों का समाधान करना शामिल है, जो उपभोक्ता संरक्षण अधिनियम के अंतर्गत आते हैं।',

    faq_consumer_q2: 'उपभोक्ता संरक्षण के अंतर्गत किन समस्याओं को उठाया जा सकता है?',
    faq_consumer_a2: 'दोषपूर्ण वस्तुएं, खराब सेवा, भ्रामक विज्ञापन और रिफंड विवाद जैसी समस्याएं उपभोक्ता संरक्षण कानूनों के अंतर्गत उठाई जा सकती हैं।',

    faq_consumer_q3: 'उपभोक्ता शिकायत के लिए कौन से दस्तावेज आवश्यक होते हैं?',
    faq_consumer_a3: 'सामान्य दस्तावेजों में खरीद बिल, संचार रिकॉर्ड, उत्पाद विवरण और समस्या का विवरण शामिल होता है।',

    faq_consumer_q4: 'क्या ऑनलाइन खरीद से जुड़े विवाद उपभोक्ता संरक्षण कानूनों के अंतर्गत उठाए जा सकते हैं?',
    faq_consumer_a4: 'हाँ, ई-कॉमर्स प्लेटफॉर्म से संबंधित विवाद भी उपभोक्ता संरक्षण नियमों के अंतर्गत आते हैं।',

    cta_consumer_title: 'क्या आपको किसी उत्पाद या सेवा से संबंधित समस्या का सामना करना पड़ रहा है?',
    cta_consumer_description: 'अपने उपभोक्ता अधिकारों और शिकायत प्रक्रिया को समझना आपको विवादों का अधिक प्रभावी ढंग से समाधान करने में मदद कर सकता है। पेशेवर उपभोक्ता संरक्षण सहायता के लिए आज ही हमसे संपर्क करें।',
    cta_consumer_button1: 'मुफ्त परामर्श प्राप्त करें',
    cta_consumer_button2: 'अभी कॉल करें',

    // ---------------------------------------------------------------------- Consumer cases page hindi ends

    // Civil Dispute Support Page Hindi ---------------------------------------------------------------


    civil_title_backlink1: 'होम',
    civil_title_backlink2: 'सिविल विवाद सहायता',

    civil_title: 'सिविल विवाद सहायता',
    civil_description: 'सिविल विवादों को समझना और व्यक्तिगत, वित्तीय तथा संपत्ति से संबंधित संघर्षों के समाधान के लिए उपयुक्त कानूनी दृष्टिकोण की पहचान करना। व्यक्तियों या व्यवसायों के बीच होने वाले कई मतभेद आपराधिक कानून के बजाय सिविल कानून के अंतर्गत आते हैं।',

    what_civil_title: 'सेवा अवलोकन',
    what_civil_description: 'सिविल विवाद वे कानूनी मतभेद होते हैं जो व्यक्तियों, संगठनों या व्यवसायों के बीच अधिकारों, जिम्मेदारियों या दायित्वों से संबंधित होते हैं।',
    what_civil_description1: 'इन विवादों में संपत्ति संबंधी मामले, अनुबंध संबंधी मतभेद, वित्तीय वसूली या परिवार से संबंधित कानूनी मुद्दे शामिल हो सकते हैं।',
    what_civil_description2: 'आपराधिक मामलों के विपरीत, सिविल मामलों का समाधान सामान्यतः कानूनी मंचों या न्यायालयों के माध्यम से किया जाता है, जहां साक्ष्यों, समझौतों और संबंधित कानूनों की जांच के बाद निर्णय लिया जाता है।',
    what_civil_description3: 'हालांकि, कई व्यक्तियों को सिविल विवाद प्रक्रिया जटिल लग सकती है क्योंकि इसमें दस्तावेज़ीकरण, कानूनी प्रक्रियाएं और साक्ष्यों का सावधानीपूर्वक मूल्यांकन शामिल होता है।',
    what_civil_description4: 'यशोदा टोटल सोल्यूशन',
    what_civil_description5: 'ग्राहकों को उनके विवाद की प्रकृति समझने, आवश्यक दस्तावेज व्यवस्थित करने और सिविल मामलों से निपटने के लिए उपयुक्त चरणों में मार्गदर्शन देकर सहायता करता है।',

    what_civil_key_features: 'सिविल विवाद समाधान प्रक्रिया:',
    what_civil_key_feature1: '• विवाद की पहचान',
    what_civil_key_feature2: '• मामले के विवरण की जांच',
    what_civil_key_feature3: '• साक्ष्य और दस्तावेज एकत्रित किए जाते हैं',
    what_civil_key_feature4: '• कानूनी रणनीति निर्धारित की जाती है',
    what_civil_key_feature5: '• समाधान प्रक्रिया शुरू की जाती है',

    common_types_civil_title: 'सिविल विवादों के सामान्य प्रकार',
    common_types_civil_description: 'सिविल विवाद विभिन्न व्यक्तिगत और व्यावसायिक परिस्थितियों में उत्पन्न हो सकते हैं',

    common_types_civil_item1: 'संपत्ति विवाद',
    common_types_civil_desc1: 'संपत्ति या भूमि स्वामित्व से संबंधित मतभेद, जिनमें सीमा विवाद और स्वामित्व से जुड़े मुद्दे शामिल होते हैं।',

    common_types_civil_item2: 'परिवार एवं उत्तराधिकार संबंधी मामले',
    common_types_civil_desc2: 'उत्तराधिकार विवाद और परिवार से संबंधित कानूनी मामले जिनके समाधान की आवश्यकता होती है।',

    common_types_civil_item3: 'वित्तीय वसूली संबंधी मुद्दे',
    common_types_civil_desc3: 'वित्तीय या ऋण वसूली से संबंधित मामले, जिनमें ऋण चुकौती विवाद शामिल होते हैं।',

    common_types_civil_item4: 'किरायेदार एवं मकान मालिक विवाद',
    common_types_civil_desc4: 'किराया, रखरखाव या बेदखली से संबंधित मकान मालिक और किरायेदार के बीच विवाद।',

    common_types_civil_item5: 'अनुबंध उल्लंघन',
    common_types_civil_desc5: 'व्यावसायिक या व्यक्तिगत मामलों में पक्षों के बीच अनुबंध या समझौते का उल्लंघन।',

    why_choose_civil_title: 'यशोदा टोटल सोल्यूशन क्यों चुनें?',
    why_choose_civil_description: 'सिविल विवाद समाधान और कानूनी सहायता के लिए विश्वसनीय समर्थन',

    why_choose_civil_item1: 'अनुभवी एवं पेशेवर टीम',
    why_choose_civil_desc1: 'उद्योग ज्ञान और संचालन विशेषज्ञता वाले योग्य पेशेवर।',

    why_choose_civil_item2: 'त्वरित एवं पारदर्शी प्रक्रिया',
    why_choose_civil_desc2: 'स्पष्ट संचार और निगरानी द्वारा समर्थित व्यवस्थित कार्यप्रवाह।',

    why_choose_civil_item3: 'ग्राहक-प्रथम दृष्टिकोण',
    why_choose_civil_desc3: 'प्रत्येक मामले को ध्यान, सहानुभूति और नैतिक जिम्मेदारी के साथ संभाला जाता है।',

    why_choose_civil_item4: 'विश्वसनीय सेवा भागीदार',
    why_choose_civil_desc4: 'विश्वास, विश्वसनीयता और सेवा उत्कृष्टता पर आधारित दीर्घकालिक संबंधों पर केंद्रित।',

    process_civil_title: 'हमारी 6-स्टेप सिविल विवाद समाधान प्रक्रिया',
    process_civil_description: 'सरल, पारदर्शी और प्रभावी दृष्टिकोण',

    process_civil_step1_title: 'विवाद की समझ एवं मूल्यांकन',
    process_civil_step1_desc: 'हम आपके सिविल विवाद को समझते हैं, स्थिति की समीक्षा करते हैं और मामले की प्रकृति तथा उसकी वैधता का मूल्यांकन करते हैं।',

    process_civil_step2_title: 'दस्तावेज़ एवं साक्ष्य समीक्षा',
    process_civil_step2_desc: 'हम विवाद से संबंधित सभी दस्तावेज़, समझौते, रिकॉर्ड और साक्ष्यों की जांच करते हैं।',

    process_civil_step3_title: 'कानूनी स्थिति का मूल्यांकन',
    process_civil_step3_desc: 'हम लागू सिविल कानूनों के अंतर्गत आपकी कानूनी स्थिति, अधिकारों और दायित्वों का मूल्यांकन करते हैं।',

    process_civil_step4_title: 'रणनीति एवं समझौता चर्चा',
    process_civil_step4_desc: 'हम संभावित समाधान रणनीतियों पर चर्चा करते हैं, जिनमें समझौते के विकल्प और कानूनी कार्यवाही शामिल होती है।',

    process_civil_step5_title: 'कानूनी कार्रवाई एवं दाखिला',
    process_civil_step5_desc: 'यदि आवश्यक हो, तो हम उचित कानूनी मंचों में मामला दर्ज कराने और आवश्यक दस्तावेज तैयार करने में सहायता करते हैं।',

    process_civil_step6_title: 'फॉलो-अप एवं समाधान',
    process_civil_step6_desc: 'हम मामले की प्रगति पर नजर रखते हैं और निष्पक्ष समाधान प्राप्त करने के लिए कार्य करते हैं।',

    ex_scenario_civil_title: 'वास्तविक जीवन के सिविल विवाद उदाहरण',
    ex_scenario_civil_description: 'ये कुछ सामान्य स्थितियां हैं जिनका समाधान करने में हम सहायता करते हैं',

    ex_scenario_civil_problem_label: '❌ समस्या:',
    ex_scenario_civil_reality_label: '⚠️ वास्तविकता:',
    ex_scenario_civil_solution_label: '✅ हमारा समाधान:',

    ex_scenario_civil_case1_title: 'केस 1: संपत्ति स्वामित्व विवाद',
    ex_scenario_civil_case1_problem: 'दो परिवार के सदस्य एक ही पैतृक संपत्ति के स्वामित्व का दावा करते हैं, जिससे अधिकारों और उपयोग को लेकर विवाद उत्पन्न होता है।',
    ex_scenario_civil_case1_reality: 'दोनों पक्षों के पास आंशिक दस्तावेज थे लेकिन स्पष्ट पंजीकृत स्वामित्व नहीं था। वर्षों तक बिना कानूनी स्पष्टता के कब्जे ने विवाद को बढ़ा दिया।',
    ex_scenario_civil_case1_solution: 'हमने सभी दस्तावेजों की समीक्षा की, कानूनी समय-सीमा स्थापित की और विभाजन का मुकदमा दायर किया। संपत्ति को कानूनी उत्तराधिकार अधिकारों के आधार पर विभाजित किया गया।',

    ex_scenario_civil_case2_title: 'केस 2: वित्तीय वसूली समस्या',
    ex_scenario_civil_case2_problem: 'एक व्यक्ति दूसरे व्यक्ति को धन उधार देता है लेकिन बार-बार अनुरोध के बावजूद राशि वापस प्राप्त करने में कठिनाई का सामना करता है।',
    ex_scenario_civil_case2_reality: 'उधारकर्ता ने मौखिक रूप से ऋण स्वीकार किया लेकिन कानूनी दस्तावेज़ के अभाव में वित्तीय कठिनाई का हवाला देकर भुगतान से इंकार कर दिया।',
    ex_scenario_civil_case2_solution: 'हमने बैंक लेनदेन और संचार सहित साक्ष्य एकत्र किए। वसूली के लिए सिविल मुकदमा दायर किया और अदालत से भुगतान का आदेश प्राप्त किया।',

    ex_scenario_civil_case3_title: 'केस 3: किरायेदार और मकान मालिक विवाद',
    ex_scenario_civil_case3_problem: 'एक मकान मालिक को किराया भुगतान में देरी की समस्या होती है, जबकि किरायेदार किराया समझौते में उल्लिखित कुछ शर्तों का विरोध करता है।',
    ex_scenario_civil_case3_reality: 'किराया समझौते में रखरखाव जिम्मेदारियों से संबंधित अस्पष्ट धाराएं थीं, जिससे भुगतान विवाद उत्पन्न हुआ।',
    ex_scenario_civil_case3_solution: 'हमने समझौते की शर्तों को स्पष्ट किया, मध्यस्थता कराई और रखरखाव विवाद को हल करने के लिए स्पष्ट परिशिष्ट तैयार करने में सहायता की।',

    ex_scenario_civil_case4_title: 'केस 4: अनुबंध उल्लंघन',
    ex_scenario_civil_case4_problem: 'दो पक्षों के बीच एक व्यावसायिक समझौता किया जाता है, लेकिन एक पक्ष सहमत जिम्मेदारियों को पूरा करने में विफल रहता है।',
    ex_scenario_civil_case4_reality: 'एक पक्ष ने निम्न स्तर का कार्य प्रदान किया और समय-सीमा का पालन नहीं किया, जिससे दूसरे पक्ष को वित्तीय नुकसान हुआ।',
    ex_scenario_civil_case4_solution: 'हमने दस्तावेजों के माध्यम से अनुबंध उल्लंघन सिद्ध किया, सिविल मुकदमा दायर किया और नुकसान की भरपाई तथा अनुबंध समाप्ति सुनिश्चित की।',

    faq_civil_title: 'अक्सर पूछे जाने वाले प्रश्न',
    faq_civil_description: 'सिविल विवादों से संबंधित सामान्य प्रश्न',

    faq_civil_q1: 'सिविल विवाद क्या होता है?',
    faq_civil_a1: 'सिविल विवाद व्यक्तियों या संगठनों के बीच अधिकारों, जिम्मेदारियों या दायित्वों से संबंधित कानूनी मतभेद होता है।',

    faq_civil_q2: 'कौन-कौन से मुद्दे सिविल विवाद के अंतर्गत आते हैं?',
    faq_civil_a2: 'संपत्ति विवाद, वित्तीय वसूली, अनुबंध उल्लंघन, मकान मालिक-किरायेदार विवाद और परिवार से संबंधित कानूनी मामले सिविल विवादों के अंतर्गत आते हैं।',

    faq_civil_q3: 'क्या सिविल विवाद बिना अदालत जाए सुलझाए जा सकते हैं?',
    faq_civil_a3: 'कुछ मामलों में, औपचारिक कानूनी कार्यवाही से पहले बातचीत, मध्यस्थता या समझौते के माध्यम से विवाद सुलझाए जा सकते हैं।',

    faq_civil_q4: 'सिविल विवादों में सामान्यतः कौन से दस्तावेज आवश्यक होते हैं?',
    faq_civil_a4: 'संबंधित समझौते, संपत्ति रिकॉर्ड, वित्तीय दस्तावेज, संचार इतिहास और विवाद से जुड़े साक्ष्य सामान्यतः आवश्यक होते हैं।',

    cta_civil_title: 'क्या आप संपत्ति, वित्त या समझौतों से संबंधित सिविल विवाद का सामना कर रहे हैं?',
    cta_civil_description: 'विवाद की प्रकृति को समझना और आवश्यक दस्तावेजों को व्यवस्थित करना व्यक्तियों को सिविल मामलों को अधिक प्रभावी ढंग से संभालने में मदद कर सकता है। पेशेवर सिविल विवाद सहायता के लिए आज ही हमसे संपर्क करें।',
    cta_civil_button1: 'मुफ्त परामर्श प्राप्त करें',
    cta_civil_button2: 'अभी कॉल करें',

    // ---------------------------------------------------------------- Civil Dispute Support Hindi Page Ends

    // Cheque Bounce Page Hindi ---------------------------------------------------------------------------


    cheque_title_backlink1: 'होम',
    cheque_title_backlink2: 'चेक बाउंस मामले',

    cheque_title: 'चेक बाउंस केस सहायता',
    cheque_description: 'चेक बाउंस की स्थितियों को समझना और बकाया राशि की वसूली के लिए उपलब्ध कानूनी प्रक्रिया की पहचान करना। चेक बाउंस तब होता है जब बैंक अपर्याप्त धनराशि या खाते से संबंधित समस्याओं जैसे कारणों के चलते चेक को संसाधित करने से इनकार कर देता है, जिससे भुगतान की अपेक्षा कर रहे व्यक्तियों या व्यवसायों के लिए वित्तीय तनाव उत्पन्न होता है।',

    what_cheque_title: 'सेवा अवलोकन',
    what_cheque_description: 'चेक बाउंस के मामले तब उत्पन्न होते हैं जब एक पक्ष द्वारा जारी किया गया चेक बैंक द्वारा बिना भुगतान के वापस कर दिया जाता है। यह अपर्याप्त धनराशि, बंद खाते, हस्ताक्षर में असंगति या अन्य बैंकिंग कारणों से हो सकता है।',
    what_cheque_description1: 'भुगतान की अपेक्षा करने वाले व्यक्ति के लिए बाउंस हुआ चेक वित्तीय अनिश्चितता और देय राशि प्राप्त करने में देरी उत्पन्न कर सकता है।',
    what_cheque_description2: 'ऐसी स्थितियों में कानून द्वारा निर्धारित विशिष्ट प्रक्रियाओं का पालन करना आवश्यक होता है। इन प्रक्रियाओं में चेक रिटर्न मेमो प्राप्त करना, निर्धारित समय सीमा के भीतर कानूनी नोटिस भेजना और भुगतान न होने पर आगे की कानूनी कार्यवाही शुरू करना शामिल है।',
    what_cheque_description3: 'यशोदा टोटल सोल्यूशन',
    what_cheque_description4: 'व्यक्तियों और व्यवसायों को चेक बाउंस मामलों में शामिल प्रक्रिया को समझने में सहायता करता है और इस समस्या के समाधान के लिए आवश्यक दस्तावेज़ीकरण तथा प्रक्रियात्मक चरणों में मार्गदर्शन प्रदान करता है।',

    what_cheque_key_features: 'चेक बाउंस कानूनी प्रक्रिया प्रवाह:',
    what_cheque_key_feature1: '• चेक जारी किया गया',
    what_cheque_key_feature2: '• चेक जमा किया गया',
    what_cheque_key_feature3: '• चेक बाउंस हुआ',
    what_cheque_key_feature4: '• बैंक द्वारा रिटर्न मेमो जारी किया गया',
    what_cheque_key_feature5: '• कानूनी नोटिस भेजा गया',

    common_indicators_cheque_title: 'चेक बाउंस स्थितियों के सामान्य संकेत',
    common_indicators_cheque_description: 'कुछ स्थितियां यह संकेत दे सकती हैं कि चेक बाउंस की समस्या उत्पन्न हुई है',

    common_indicators_cheque_item1: 'चेक वापस होना',
    common_indicators_cheque_desc1: 'बैंक चेक को अपर्याप्त धनराशि या अन्य कारणों से बिना भुगतान के वापस कर देता है।',

    common_indicators_cheque_item2: 'रिटर्न मेमो जारी होना',
    common_indicators_cheque_desc2: 'बैंक द्वारा चेक बाउंस का कारण बताते हुए रिटर्न मेमो जारी किया जाता है।',

    common_indicators_cheque_item3: 'भुगतान में देरी',
    common_indicators_cheque_desc3: 'वादा किए गए भुगतान में देरी वित्तीय अनिश्चितता उत्पन्न करती है।',

    common_indicators_cheque_item4: 'संचार विवाद',
    common_indicators_cheque_desc4: 'भुगतान को लेकर भुगतानकर्ता और प्राप्तकर्ता के बीच संचार में विवाद।',

    common_indicators_cheque_item5: 'कानूनी कार्रवाई पर विचार',
    common_indicators_cheque_desc5: 'राशि की वसूली के लिए आगे की कानूनी प्रक्रिया को लेकर अनिश्चितता।',

    why_choose_cheque_title: 'यशोदा टोटल सोल्यूशन क्यों चुनें?',
    why_choose_cheque_description: 'चेक बाउंस मामलों के समाधान और वसूली के लिए विश्वसनीय सहायता',

    why_choose_cheque_item1: 'अनुभवी एवं पेशेवर टीम',
    why_choose_cheque_desc1: 'उद्योग ज्ञान और संचालन विशेषज्ञता वाले योग्य पेशेवर।',

    why_choose_cheque_item2: 'त्वरित एवं पारदर्शी प्रक्रिया',
    why_choose_cheque_desc2: 'स्पष्ट संचार और निगरानी द्वारा समर्थित व्यवस्थित कार्यप्रवाह।',

    why_choose_cheque_item3: 'ग्राहक-प्रथम दृष्टिकोण',
    why_choose_cheque_desc3: 'प्रत्येक मामले को ध्यान, सहानुभूति और नैतिक जिम्मेदारी के साथ संभाला जाता है।',

    why_choose_cheque_item4: 'विश्वसनीय सेवा भागीदार',
    why_choose_cheque_desc4: 'विश्वास, विश्वसनीयता और सेवा उत्कृष्टता पर आधारित दीर्घकालिक संबंधों पर केंद्रित।',

    process_cheque_title: 'हमारी 6-स्टेप चेक बाउंस समाधान प्रक्रिया',
    process_cheque_description: 'सरल, पारदर्शी और प्रभावी दृष्टिकोण',

    process_cheque_step1_title: 'मामले की समीक्षा एवं दस्तावेज़ जांच',
    process_cheque_step1_desc: 'हम बाउंस हुए चेक, बैंक रिटर्न मेमो की समीक्षा करते हैं और पूरी स्थिति तथा समयरेखा को समझते हैं।',

    process_cheque_step2_title: 'साक्ष्य संग्रह एवं सत्यापन',
    process_cheque_step2_desc: 'हम मूल चेक, रिटर्न मेमो और लेनदेन रिकॉर्ड सहित सभी दस्तावेजों को एकत्रित और सत्यापित करते हैं।',

    process_cheque_step3_title: 'कानूनी नोटिस की तैयारी',
    process_cheque_step3_desc: 'हम निर्धारित समय सीमा के भीतर चेक जारी करने वाले को कानूनी रूप से वैध नोटिस तैयार कर भेजते हैं।',

    process_cheque_step4_title: 'प्रतिक्रिया निगरानी एवं फॉलो-अप',
    process_cheque_step4_desc: 'हम कानूनी नोटिस पर प्राप्त प्रतिक्रिया की निगरानी करते हैं और निर्धारित समय सीमा के भीतर फॉलो-अप करते हैं।',

    process_cheque_step5_title: 'शिकायत दाखिल एवं न्यायालयीन कार्यवाही',
    process_cheque_step5_desc: 'यदि भुगतान नहीं किया जाता है, तो हम परक्राम्य लिखत अधिनियम की धारा 138 के अंतर्गत शिकायत दर्ज करने में सहायता करते हैं।',

    process_cheque_step6_title: 'वसूली एवं समाधान',
    process_cheque_step6_desc: 'हम न्यायालयीन कार्यवाही पर निगरानी रखते हैं और भुगतान की वसूली या कानूनी समाधान प्राप्त करने की दिशा में कार्य करते हैं।',

    ex_scenario_cheque_title: 'वास्तविक जीवन के चेक बाउंस उदाहरण',
    ex_scenario_cheque_description: 'ये कुछ सामान्य स्थितियां हैं जिनका समाधान करने में हम सहायता करते हैं',

    ex_scenario_cheque_problem_label: '❌ समस्या:',
    ex_scenario_cheque_reality_label: '⚠️ वास्तविकता:',
    ex_scenario_cheque_solution_label: '✅ हमारा समाधान:',

    ex_scenario_cheque_case1_title: 'केस 1: व्यावसायिक भुगतान विवाद',
    ex_scenario_cheque_case1_problem: 'एक व्यवसाय मालिक को ग्राहक से माल की आपूर्ति के भुगतान के लिए चेक प्राप्त होता है। जब चेक जमा किया जाता है, तो बैंक अपर्याप्त धनराशि के कारण उसे वापस कर देता है।',
    ex_scenario_cheque_case1_reality: 'ग्राहक ने वित्तीय कठिनाई का हवाला दिया और कई महीनों तक भुगतान में देरी की, जिससे व्यवसाय की नकदी प्रवाह और संचालन प्रभावित हुए।',
    ex_scenario_cheque_case1_solution: 'हमने बाउंस होने के 30 दिनों के भीतर कानूनी नोटिस भेजा। भुगतान न होने पर धारा 138 के तहत शिकायत दर्ज की। न्यायालय ने ब्याज और दंड सहित भुगतान का आदेश दिया।',

    ex_scenario_cheque_case2_title: 'केस 2: व्यक्तिगत ऋण पुनर्भुगतान',
    ex_scenario_cheque_case2_problem: 'एक व्यक्ति अपने मित्र को पैसा उधार देता है, जो बाद में पुनर्भुगतान के लिए चेक देता है। यह चेक बैंक द्वारा बिना भुगतान के वापस कर दिया जाता है।',
    ex_scenario_cheque_case2_reality: 'मित्र ने कॉल और संदेशों का जवाब देना बंद कर दिया, जिससे उधार देने वाले के पास राशि की वसूली का कोई सीधा विकल्प नहीं बचा।',
    ex_scenario_cheque_case2_solution: 'हमने कानूनी नोटिस जारी किया, सभी साक्ष्यों को संकलित किया और आपराधिक शिकायत दर्ज की। उत्पीड़न के लिए मुआवजे सहित वसूली का आदेश प्राप्त हुआ।',

    ex_scenario_cheque_case3_title: 'केस 3: वाणिज्यिक लेनदेन',
    ex_scenario_cheque_case3_problem: 'एक आपूर्तिकर्ता को वितरित उत्पादों के भुगतान के लिए एक खुदरा विक्रेता से चेक प्राप्त होता है, लेकिन खाते में पर्याप्त राशि न होने के कारण चेक वापस हो जाता है।',
    ex_scenario_cheque_case3_reality: 'लगातार कई चेक बाउंस हुए, जिससे भुगतान दायित्वों से जानबूझकर बचने का संकेत मिला।',
    ex_scenario_cheque_case3_solution: 'हमने सभी बाउंस चेक के लिए शिकायत दर्ज की, गैर-भुगतान के पैटर्न को स्थापित किया और पूर्ण वसूली के साथ हर्जाना प्राप्त किया।',

    ex_scenario_cheque_case4_title: 'केस 4: विलंबित निपटान',
    ex_scenario_cheque_case4_problem: 'एक व्यक्ति को वित्तीय समझौते के हिस्से के रूप में चेक प्राप्त होता है, लेकिन चेक बिना भुगतान के वापस हो जाता है, जिससे वादा की गई राशि की वसूली को लेकर अनिश्चितता उत्पन्न होती है।',
    ex_scenario_cheque_case4_reality: 'जारीकर्ता ने चेक जारी करने के तुरंत बाद बैंक खाता बंद कर दिया, जिससे धोखाधड़ी की मंशा स्पष्ट हुई।',
    ex_scenario_cheque_case4_solution: 'हमने बैंक रिकॉर्ड के माध्यम से धोखाधड़ी की मंशा सिद्ध की, आपराधिक शिकायत दर्ज की और भुगतान वसूली के साथ कठोर दंड का आदेश प्राप्त किया।',

    faq_cheque_title: 'अक्सर पूछे जाने वाले प्रश्न',
    faq_cheque_description: 'चेक बाउंस मामलों से संबंधित सामान्य प्रश्न',

    faq_cheque_q1: 'चेक बाउंस का क्या अर्थ है?',
    faq_cheque_a1: 'चेक बाउंस तब होता है जब बैंक अपर्याप्त धनराशि, खाता बंद होने, हस्ताक्षर असंगति या अन्य बैंकिंग कारणों से चेक को संसाधित करने से इनकार कर देता है।',

    faq_cheque_q2: 'चेक रिटर्न मेमो क्या होता है?',
    faq_cheque_a2: 'चेक रिटर्न मेमो बैंक द्वारा जारी किया गया एक दस्तावेज होता है जो यह बताता है कि चेक को क्यों संसाधित नहीं किया गया और बिना भुगतान के वापस कर दिया गया।',

    faq_cheque_q3: 'क्या चेक बाउंस मामलों में कानूनी कार्रवाई की जा सकती है?',
    faq_cheque_a3: 'हाँ, परक्राम्य लिखत अधिनियम की धारा 138 के अंतर्गत चेक अनादर के लिए कानूनी कार्यवाही शुरू की जा सकती है।',

    faq_cheque_q4: 'चेक बाउंस मामलों में कौन से दस्तावेज आवश्यक होते हैं?',
    faq_cheque_a4: 'आवश्यक दस्तावेजों में मूल चेक, बैंक रिटर्न मेमो, जमा पर्ची और पक्षों के बीच संचार रिकॉर्ड शामिल होते हैं।',

    cta_cheque_title: 'क्या आप बाउंस हुए चेक के कारण समस्याओं का सामना कर रहे हैं?',
    cta_cheque_description: 'कानूनी प्रक्रिया और दस्तावेज़ी आवश्यकताओं को समझना व्यक्तियों और व्यवसायों को चेक बाउंस स्थितियों से अधिक प्रभावी ढंग से निपटने में मदद कर सकता है। पेशेवर चेक बाउंस केस सहायता के लिए आज ही हमसे संपर्क करें।',
    cta_cheque_button1: 'मुफ्त परामर्श प्राप्त करें',
    cta_cheque_button2: 'अभी कॉल करें',

    // ------------------------------------------------------------------------------- Cheque Bounce Page Hindi Ends

    // Reviews Page Hindi
    reviews_page_title: 'अपनी समीक्षा सबमिट करें',
    reviews_page_subtitle: 'अपना अनुभव साझा करें और दूसरों को सूचित निर्णय लेने में मदद करें',
    reviews_form_title: 'अपनी प्रतिक्रिया साझा करें',
    reviews_form_subtitle: 'हम आपकी राय को महत्व देते हैं। कृपया यशोदा टोटल सोल्यूशन के साथ अपना अनुभव साझा करें।',
    reviews_name_label: 'आपका नाम',
    reviews_name_placeholder: 'अपना पूरा नाम दर्ज करें',
    reviews_city_label: 'आपका शहर',
    reviews_city_placeholder: 'अपना शहर दर्ज करें',
    reviews_rating_label: 'आपकी रेटिंग',
    reviews_message_label: 'आपकी समीक्षा',
    reviews_message_placeholder: 'हमारे साथ अपना अनुभव साझा करें...',
    reviews_submit_btn: 'समीक्षा सबमिट करें',
    reviews_submitting: 'सबमिट हो रहा है...',
    reviews_success_title: 'आपकी प्रतिक्रिया के लिए धन्यवाद!',
    reviews_success_message: 'आपकी समीक्षा अनुमोदन के बाद प्रकाशित की जाएगी। आपने अपना अनुभव साझा करने के लिए समय निकाला, इसके लिए हम आपकी सराहना करते हैं।',
    reviews_another_btn: 'एक और समीक्षा सबमिट करें',
    reviews_why_title: 'आपकी समीक्षा क्यों मायने रखती है',
    reviews_why1_title: 'दूसरों की मदद करता है',
    reviews_why1_desc: 'आपकी ईमानदार प्रतिक्रिया दूसरों को हमारी सेवाओं के बारे में सूचित निर्णय लेने में मदद करती है।',
    reviews_why2_title: 'सेवा में सुधार करता है',
    reviews_why2_desc: 'हम आपकी प्रतिक्रिया का उपयोग लगातार सुधार और बेहतर सेवा प्रदान करने के लिए करते हैं।',
    reviews_why3_title: 'विश्वास बनाता है',
    reviews_why3_desc: 'प्रामाणिक समीक्षाएं हमारे समुदाय में विश्वास और पारदर्शिता बनाती हैं।',

    // Contact Page Hindi -------------------------------------------------------------------

    contact_page_title: 'संपर्क करें',
    contact_page_subtitle: 'किसी भी सहायता के लिए हमसे संपर्क करें',

    contact_info_title: 'संपर्क जानकारी',
    contact_info_subtitle: 'नीचे दिए गए किसी भी माध्यम से हमसे संपर्क करें',

    contact_phone_title: 'फोन नंबर',
    contact_phone_number: '+91 9649647790',

    contact_email_title: 'ईमेल पता',
    contact_email_address: 'info@yashodatotalsolution.com',

    contact_address_title: 'मुख्य कार्यालय',
    contact_address_text: '2B 70, यशोदा टोटल सोल्यूशन, फीनिक्स पैरागन प्लाज़ा, लाल बहादुर शास्त्री मार्ग, कमानी, कुर्ला (पश्चिम), मुंबई, महाराष्ट्र 400070',

    contact_form_title: 'हमें संदेश भेजें',
    contact_form_subtitle: 'कोई समस्या है? अपने विवरण सबमिट करें, हमारी टीम जल्द ही आपसे संपर्क करेगी।',

    contact_name_label: 'आपका नाम',
    contact_name_placeholder: 'अपना पूरा नाम दर्ज करें',

    contact_phone_label: 'फोन नंबर',
    contact_phone_placeholder: 'अपना फोन नंबर दर्ज करें',

    contact_message_label: 'आपका संदेश',
    contact_message_placeholder: 'अपनी समस्या या प्रश्न का विवरण दें...',

    contact_submit_btn: 'संदेश भेजें',
    contact_submitting: 'भेजा जा रहा है...',

    contact_success_title: 'संदेश सफलतापूर्वक भेजा गया!',
    contact_success_message: 'हमसे संपर्क करने के लिए धन्यवाद। हमारी टीम जल्द ही आपसे संपर्क करेगी।',

    contact_another_btn: 'एक और संदेश भेजें',
    contact_whatsapp_btn: 'चैट करें',
    chat_prefix: "",
    yashify_name: "यशिफाय",
    chat_suffix: "से चैट करें",

    contact_map_title: 'गूगल मैप पर स्थान',

    contact_location_label: "स्थान",
    contact_location_placeholder: "अपना शहर या क्षेत्र दर्ज करें",

    contact_service_label: "सेवा चुनें",
    contact_service_placeholder: "एक सेवा चुनें",

    service_mis_selling1: 'बीमा पॉलिसी की गलत बिक्री',
    service_claim_rejection1: 'बीमा दावा अस्वीकृति',
    service_claim_delay1: 'दावा प्रक्रिया में देरी',
    service_claim_short_settled1: 'आंशिक दावा निपटान',
    service_health_reimbursement1: 'स्वास्थ्य दावा प्रतिपूर्ति',
    service_pmsby1: 'प्रधानमंत्री सुरक्षा बीमा योजना (PMSBY)',
    service_pmjjby1: 'प्रधानमंत्री जीवन ज्योति बीमा योजना (PMJJBY)',
    service_state_cm_scheme1: 'राज्य मुख्यमंत्री बीमा योजना',
    service_banking_atm1: 'बैंकिंग और एटीएम कार्ड बीमा दावा',
    service_pf_accidental1: 'पीएफ आकस्मिक बीमा दावा',
    service_legal_consultation1: 'कानूनी परामर्श',
    service_legal_drafting1: 'कानूनी ड्राफ्टिंग और सत्यापन सहायता',
    service_consumer_cases1: 'उपभोक्ता संरक्षण सहायता',
    service_civil_cases1: 'सिविल विवाद सहायता',
    service_cheque_bounce1: 'चेक बाउंस मामले',
    service_other1: 'अन्य सेवाएं',

    our_network_title: 'हमारा नेटवर्क',
    our_network_desc1: 'यशोदा टोटल सोल्यूशन अपने परिचालन विस्तार को ',
    our_network_desc2: 'पूरे भारत में',
    our_network_desc3: ' बढ़ा रहा है, ताकि देशभर में सेवाएं सुलभ हो सकें।',
    our_network_desc4: 'हमारा बढ़ता हुआ नेटवर्क विभिन्न राज्यों में प्रशिक्षित सेल्स और सपोर्ट टीमों के साथ संरचित सेवाएं प्रदान करने का लक्ष्य रखता है।',

    network_stat1_number: 'पूरे भारत में',
    network_stat1_desc: 'देशव्यापी कवरेज',

    network_stat2_number: 'बढ़ता हुआ',
    network_stat2_desc: 'प्रशिक्षित सेल्स और सपोर्ट टीम',

    network_stat3_number: 'विभिन्न',
    network_stat3_desc: 'राज्य और शहर',

    network_cta_button: 'हमारी उत्कृष्ट सेवाओ के बढ़ते नेटवर्क मे सामील हो',

    // India Map Branches 

    map_mumbai_branch: 'मुंबई मुख्य कार्यालय',
    map_mumbai_branch_addr: '2B 70, यशोदा टोटल सोल्यूशन, फीनिक्स पैरागॉन प्लाज़ा, लाल बहादुर शास्त्री मार्ग, कामानी, कुर्ला (पश्चिम), मुंबई, महाराष्ट्र 400070',
    map_pune_branch: 'पुणे शाखा',
    map_pune_branch_addr: 'जल्द आ रहा है...',
    map_nagpur_branch: 'नागपुर शाखा',
    map_nagpur_branch_addr: 'जल्द आ रहा है...',
    map_nashik_branch: 'नासिक शाखा',
    map_nashik_branch_addr: 'जल्द आ रहा है...',
    map_kolhapur_branch: 'कोल्हापुर शाखा',
    map_kolhapur_branch_addr: 'जल्द आ रहा है...',
    map_solapur_branch: 'सोलापुर शाखा',
    map_solapur_branch_addr: 'जल्द आ रहा है...',
    map_satara_branch: 'सतारा शाखा',
    map_satara_branch_addr: 'जल्द आ रहा है...',

    map_ahmedabad_branch: 'अहमदाबाद शाखा',
    map_ahmedabad_branch_addr: 'जल्द आ रहा है...',
    map_surat_branch: 'सूरत शाखा',
    map_surat_branch_addr: 'जल्द आ रहा है...',
    map_rajkot_branch: 'राजकोट शाखा',
    map_rajkot_branch_addr: 'जल्द आ रहा है...',

    map_indore_branch: 'इंदौर शाखा',
    map_indore_branch_addr: 'जल्द आ रहा है...',

    map_lucknow_branch: 'लखनऊ शाखा',
    map_lucknow_branch_addr: 'जल्द आ रहा है...',
    map_varanasi_branch: 'वाराणसी शाखा',
    map_varanasi_branch_addr: 'जल्द आ रहा है...',
    map_gorakhpur_branch: 'गोरखपुर शाखा',
    map_gorakhpur_branch_addr: 'जल्द आ रहा है...',
    map_jhansi_branch: 'झांसी शाखा',
    map_jhansi_branch_addr: 'जल्द आ रहा है...',
    map_basti_branch: 'बस्ती शाखा',
    map_basti_branch_addr: 'जल्द आ रहा है...',

    // Rajasthan
    map_state_rajasthan: 'राजस्थान',
    map_jaipur_branch: 'जयपुर शाखा',
    map_jaipur_branch_addr: 'जल्द आ रहा है...',
    map_kota_branch: 'कोटा शाखा',
    map_kota_branch_addr: 'जल्द आ रहा है...',

    // Delhi
    map_state_delhi: 'दिल्ली',
    map_delhi_branch: 'नई दिल्ली शाखा',
    map_delhi_branch_addr: 'जल्द आ रहा है...',


    map_state_maharashtra: 'महाराष्ट्र',
    map_state_gujarat: 'गुजरात',
    map_state_madhya_pradesh: 'मध्य प्रदेश',
    map_state_uttar_pradesh: 'उत्तर प्रदेश',

    map_office_single: 'कार्यालय',
    map_office_multiple: 'कार्यालय',

    map_load: 'मैप लोड हो रहा है...',
    map_load_error: '⚠️ मैप लोड नहीं हो सका। कृपया अपना कनेक्शन जांचें और पुनः लोड करें।',
    map_heading: 'ब्रांच विवरण देखने के लिए हाइलाइट किए गए राज्यों या पिन पर क्लिक करें。',

    // -------------------------------------------------------------------------- Contact Page Ends

    //FAQ Page -------------------------------------------------------------------------------------


    faq_title: 'अक्सर पूछे जाने वाले प्रश्न',
    faq_subtitle: 'हमारी सेवाओं, प्रक्रियाओं और हम आपकी कैसे मदद कर सकते हैं, इससे जुड़े सामान्य प्रश्नों के उत्तर प्राप्त करें',

    faq_ques_1: 'क्या यशोदा टोटल सोल्यूशन्स एक लॉ फर्म है?',
    faq_ans_1: 'नहीं। यशोदा टोटल सोल्यूशन्स एक पेशेवर कानूनी सहायता और कंसल्टेंसी सेवा प्रदाता के रूप में कार्य करता है। हम एक लॉ फर्म नहीं हैं। इसके बजाय, हम विभिन्न कानूनी क्षेत्रों के योग्य और अनुभवी वकीलों के नेटवर्क के साथ सहयोग करते हैं और मामले की प्रकृति के आधार पर उन्हें क्लाइंट को सौंपते हैं।',

    faq_ques_2: 'मेरे केस की निगरानी और प्रबंधन कौन करेगा?',
    faq_ans_2: 'आपके केस का समन्वय और पर्यवेक्षण यशोदा टोटल सोल्यूशन्स द्वारा किया जाएगा। हमारी आंतरिक प्रबंधन टीम प्रत्येक केस की प्रगति पर लगातार नजर रखती है। यदि किसी प्रकार की देरी, गैर-प्रदर्शन या पेशेवर कमी पाई जाती है, तो कंपनी तुरंत सुधारात्मक कदम उठाती है, जिसमें आवश्यकता होने पर किसी अन्य उपयुक्त वकील को मामला सौंपना शामिल है।',

    faq_ques_3: 'सेवा शुल्क कैसे और कहाँ जमा करना चाहिए?',
    faq_ans_3: 'सभी सेवा शुल्क, पेशेवर शुल्क और प्रशासनिक लागत केवल यशोदा टोटल सोल्यूशन्स को ही देय हैं। हमारे पैनल से जुड़े वकीलों को क्लाइंट से सीधे भुगतान प्राप्त करने की अनुमति नहीं है। कंपनी आपसी सहमति और कार्य के दायरे के अनुसार वकीलों को भुगतान करती है।',

    faq_ques_4: 'यदि मेरे केस को संभालने वाला वकील उपलब्ध नहीं रहता या हट जाता है तो क्या होगा?',
    faq_ans_4: 'यदि किसी कारण से नियुक्त वकील उपलब्ध नहीं रहता या कार्य छोड़ देता है, तो यशोदा टोटल सोल्यूशन्स तुरंत अपने पैनल से एक अन्य उपयुक्त वकील नियुक्त करेगा, ताकि केस में निरंतरता बनी रहे और कोई व्यवधान न आए।',

    faq_ques_5: 'मुझे पारंपरिक लॉ फर्म के बजाय यशोदा टोटल सोल्यूशन्स क्यों चुनना चाहिए?',
    faq_ans_5: 'यशोदा टोटल सोल्यूशन्स के साथ जुड़ने से कई रणनीतिक लाभ मिलते हैं:',

    faq_ans_item_5: [
      "परिणाम-केंद्रित सेवाएं – हमारा दृष्टिकोण कानूनी मामलों के व्यावहारिक और प्रभावी समाधान पर केंद्रित है।",
      "सक्रिय केस प्रबंधन – मामलों की लगातार निगरानी की जाती है ताकि अनावश्यक देरी और प्रक्रियात्मक बाधाओं से बचा जा सके।",
      "संरचित प्रशासनिक निगरानी – एक समर्पित सपोर्ट और समन्वय टीम प्रत्येक केस की प्रगति पर नजर रखती है।",
      "विस्तृत पेशेवर सहायता – वकीलों को हमारे दस्तावेज़ और संचालन टीम का सहयोग मिलता है, जिससे वे अपने मुख्य कानूनी कार्य पर ध्यान केंद्रित कर सकें।",
      "लचीला वकील आवंटन – आवश्यकता पड़ने पर कंपनी तुरंत किसी अन्य उपयुक्त पेशेवर को केस सौंप सकती है।",
      "किफायती सेवा मॉडल – हमारी सेवा संरचना पेशेवर मानकों को बनाए रखते हुए किफायती है।"
    ],

    faq_ques_6: 'बीमा मिस-सेलिंग के कुछ सामान्य उदाहरण क्या हैं?',
    faq_ans_6: 'बीमा मिस-सेलिंग तब होती है जब पॉलिसी को गलत वादों, भ्रामक जानकारी या छिपी हुई शर्तों के साथ बेचा जाता है। कुछ सामान्य उदाहरण हैं:',

    faq_ans_item_6: [
      "पॉलिसी को फिक्स्ड डिपॉजिट (FD) के रूप में बेचना",
      "बिना ब्याज के लोन का वादा करना",
      "लैप्स पॉलिसी से पैसा वापस दिलाने का आश्वासन",
      "“फ्री” हेल्थ इंश्योरेंस का ऑफर",
      "सोने के सिक्के, गिफ्ट या कैश बेनिफिट जैसे प्रलोभन देना",
      "टावर इंस्टॉलेशन योजनाएं",
      "नियमित मासिक आय का वादा",
      "नौकरी या रोजगार का झूठा आश्वासन"
    ],

    faq_stiil_have_questions: 'क्या अभी भी कोई प्रश्न है?',
    faq_ans_still_have_questions: 'क्या आपको अपना उत्तर नहीं मिला? हमारी टीम आपकी सहायता के लिए तैयार है।',
    faq_btn_contact: 'संपर्क करें',

    // -------------------------------------------------------------------------------------FAQ Page Ends

    // Partner Page -------------------------------------------------------------------------------------


    partner_title: 'हमारे पार्टनर बनें',
    partner_subtitle: 'यशोदा टोटल सोल्यूशन के साथ आगे बढ़ें',

    about_partner_desc1: 'यशोदा टोटल सोल्यूशन्स पूरे',
    about_partner_desc2: 'भारत में',
    about_partner_desc3: 'विस्तार कर रहा है और अपने बढ़ते नेटवर्क में शामिल होने के लिए फ्रीलांसर, फ्रेंचाइज़ पार्टनर, बीमा पेशेवर और कॉर्पोरेट्स की तलाश कर रहा है।',
    about_partner_desc4: 'एक पार्टनर के रूप में, आपको विशेषज्ञ सहायता मिलेगी और पॉलिसीधारकों को बीमा समस्याओं को प्रभावी ढंग से हल करने में मदद करने का अवसर मिलेगा।',
    about_partner_desc5: 'यशोदा टोटल सोल्यूशन्स के साथ जुड़ें और उद्देश्य के साथ आगे बढ़ें।',

    why_partner_title: 'हमारे साथ पार्टनर क्यों बनें?',
    why_partner_desc: 'ऐसे नेटवर्क से जुड़ें जो विकास, समर्थन और सकारात्मक प्रभाव को महत्व देता है',

    why_partner_benefit1: 'विकसित होता नेटवर्क',
    why_partner_benefit1_desc: 'तेजी से बढ़ते पैन इंडिया पेशेवर नेटवर्क का हिस्सा बनें',

    why_partner_benefit2: 'विशेषज्ञ सहायता',
    why_partner_benefit2_desc: 'व्यापक प्रशिक्षण और निरंतर विशेषज्ञ मार्गदर्शन प्राप्त करें',

    why_partner_benefit3: 'विकास के अवसर',
    why_partner_benefit3_desc: 'नई आय के अवसर प्राप्त करें और पॉलिसीधारकों की मदद करें',

    partner_form_title: 'पार्टनर के रूप में पंजीकरण करें',
    partner_form_subtitle: 'नीचे दिया गया फॉर्म भरें, हम जल्द ही आपसे संपर्क करेंगे',

    partner_name_label: 'पूरा नाम *',
    partner_name_label_placeholder: 'अपना पूरा नाम दर्ज करें',

    partner_mobile_label: 'मोबाइल नंबर *',
    partner_mobile_label_placeholder: '10 अंकों का मोबाइल नंबर',

    partner_location_label: 'स्थान *',
    partner_location_label_placeholder: 'शहर, राज्य',

    partner_email_label: 'ईमेल पता *',
    partner_email_label_placeholder: 'अपना ईमेल पता दर्ज करें',

    partner_type_label: 'पार्टनर प्रकार *',
    partner_type_label_placeholder: 'पार्टनर प्रकार चुनें',
    partner_type_label_option1: 'फ्रीलांसर',
    partner_type_label_option2: 'फ्रेंचाइज़ पार्टनर',
    partner_type_label_option3: 'वकील / बीमा पेशेवर',

    partner_additional_info_label: 'अतिरिक्त जानकारी (अपने बारे में)',
    partner_additional_info_label_placeholder: 'अपने अनुभव, विशेषज्ञता या किसी अन्य संबंधित जानकारी के बारे में बताएं...',

    partner_submitting: 'सबमिट किया जा रहा है...',
    partner_submit_button: 'आवेदन सबमिट करें',

    partner_submit_success: '✓ आवेदन सफलतापूर्वक सबमिट किया गया!',
    partner_submit_success_desc: 'हम जल्द ही आपसे संपर्क करेंगे。',

    //--------------------------------------------------------------------------------------Partner Page Ends
  },
  mr: {
    // Navbar
    nav_home: 'होम',
    nav_about: 'आमच्याबद्दल',
    nav_services: 'सेवा',
    nav_gallery: 'गॅलरी',
    nav_contact: 'संपर्क',
    nav_reviews: 'प्रतिक्रिया',
    nav_faqs: 'वारंवार विचारले जाणारे प्रश्न',
    nav_partner: 'आमच्यासोबत भागीदारी करा',
    nav_login: 'लॉगिन',

    // Service Names (Mega Menu)
    service_insurance_dispute: 'विमा वाद निराकरण',
    service_mis_selling: 'विमा पॉलिसीची मिस-सेलिंग',
    service_claim_rejection: 'विमा क्लेम नाकारणे',
    service_claim_delay: 'क्लेम प्रक्रियेत विलंब',
    service_claim_short_settled: 'आंशिक क्लेम निपटान',
    service_health_reimbursement: 'आरोग्य क्लेम परतावा',
    service_pmsby: 'प्रधानमंत्री सुरक्षा विमा योजना (PMSBY)',
    service_pmjjby: 'प्रधानमंत्री जीवन ज्योती विमा योजना (PMJJBY)',
    service_state_cm_scheme: 'राज्य मुख्यमंत्री विमा योजना सहाय्य',
    service_banking_atm: 'बँकिंग आणि ATM कार्ड विमा क्लेम',
    service_pf_accidental: 'PF अपघात विमा क्लेम सहाय्य',
    service_legal_consultation: 'कायदेशीर सल्ला',
    service_legal_drafting: 'कायदेशीर ड्राफ्टिंग आणि सत्यापन सहाय्य',
    service_consumer_cases: 'ग्राहक संरक्षण सहाय्य',
    service_civil_cases: 'दिवाणी वाद सहाय्य',
    service_cheque_bounce: 'चेक बाउंस प्रकरणे',

    // Hero Section

    //review on home page
    review_more_button: 'अधिक समीक्षा पहा',
    review_previous_button: 'मागील',
    review_pagination_text: '{{total}} ग्राहक रिव्ह्यूंपैकी {{start}}–{{end}} दाखवले जात आहेत',

    hero_headline: 'पॉलिसीधारकांना त्यांच्या विम्यावर नियंत्रण मिळविण्यास आणि समस्या लवकर सोडविण्यास मदत करणे.',
    hero_subtext: 'यशोदा टोटल सोल्यूशन्स (सेवा प्रदाता) व्यक्तींना विमा दावे, वाद आणि कायदेशीर बाबींमध्ये सहाय्य करते; यासाठी ते सोप्या भाषेत टप्प्याटप्प्याने मार्गदर्शन प्रदान करते, ज्यामुळे ग्राहकांना संपूर्ण प्रक्रिया सहज समजते.',
    hero_btn_contact: 'संपर्क करा',
    hero_btn_help: 'आता मदत घ्या',
    hero_small1: '100% गोपनीय',
    hero_small2: 'विश्वसनीय सेवा',
    hero_small3: 'विशेषज्ञ टीम',
    hero_stats1: 'आनंदी ग्राहक',
    hero_stats2: 'यशस्वीता दर',
    hero_stats3: '24/7 समर्थन',
    hero_stats4: '100% सुरक्षित',

    // About Section
    about_title: 'आम्ही कोण आहोत',
    about_desc: 'यशोदा टोटल सोल्यूशन तुमच्या विमा क्लेम, विमा वाद आणि सर्व कागदपत्रांच्या मदतीसाठी येथे आहे. आम्ही तुमच्या समस्या समजतो आणि प्रामाणिक मार्गदर्शन देतो.',
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
    why_title: 'यशोदा टोटल सोल्यूशन का निवडावे?',
    why_subtitle: 'आम्ही व्यावसायिक, पारदर्शक आणि ग्राहक-केंद्रित उत्कृष्ट सेवा प्रदान करतो.',
    why1_title: 'अनुभवी व व्यावसायिक टीम',
    why1_desc: 'उद्योगाचे ज्ञान आणि कार्यानुभव असलेले पात्र तज्ञ.',
    why2_title: 'जलद व पारदर्शक प्रक्रिया',
    why2_desc: 'स्पष्ट संवाद आणि देखरेखीने समर्थित सुव्यवस्थित कार्यपद्धती.',
    why3_title: 'ग्राहक-केंद्रित दृष्टिकोन',
    why3_desc: 'प्रत्येक प्रकरण लक्षपूर्वक, सहानुभूतीने आणि नैतिक जबाबदारीने हाताळले जाते.',
    why4_title: 'तंत्रज्ञानावर आधारित देखरेख',
    why4_desc: 'प्रगत ट्रॅकिंग प्रणाली जबाबदारी आणि नियमित अद्यतने सुनिश्चित करतात.',
    why5_title: 'विश्वासार्ह सेवा भागीदार',
    why5_desc: 'विश्वास, विश्वासार्हता आणि उत्कृष्ट सेवांवर आधारित दीर्घकालीन संबंधांवर भर.',

    // Testimonials Section
    testimonials_title: 'आमचे ग्राहक काय म्हणतात',
    testimonials_subtitle: 'खरे लोक, खरे परिणाम',
    testimonial1_text: 'माझा विमा क्लेम 3 वेळा नाकारला गेला होता. यशोदा टोटल सोल्यूशनने मदत केली आणि मला माझे पूर्ण पैसे मिळाले. त्यांच्या सेवेने खूप समाधान.',
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


    //-------------------------------------------------------------------------------- Home Page Ends

    // Footer Page Marathi ---------------------------------------------------------------------


    footer_desc: 'यशोदा टोटल सोल्यूशन ही एक विश्वासार्ह कायदेशीर आणि विमा सल्लागार संस्था आहे, जी व्यक्ती आणि व्यवसायांना वाद प्रभावीपणे सोडवण्यासाठी मदत करते.',

    footer_quick_links: 'त्वरित दुवे',

    footer_services: 'सेवा',
    footer_services_insurance_heading: 'विमा वाद निराकरण',

    footer_service_misselling: '• चुकीची विक्री',
    footer_service_claimrejection: '• दावा नकार',
    footer_service_claimdelay: '• दाव्यात विलंब',
    footer_service_partialclaim: '• अंशतः दावा',
    footer_service_healthclaim: '• आरोग्य दावा',
    footer_service_pmsby: '• PMSBY',
    footer_service_pmjjby: '• PMJJBY',
    footer_service_statescheme: '• राज्य योजना',
    footer_service_atminsurance: '• एटीएम विमा',
    footer_service_pfaccident: '• पीएफ अपघात',

    footer_service_legalconsultation: 'कायदेशीर सल्ला',
    footer_service_legaldrafting: 'कायदेशीर मसुदा',
    footer_service_consumerprotection: 'ग्राहक संरक्षण',
    footer_service_civildispute: 'सिव्हिल वाद',
    footer_service_chequebounce: 'चेक बाउन्स',

    footer_contact: 'संपर्क करा',
    footer_phone: 'फोन',
    footer_email: 'ईमेल',
    footer_address: 'पत्ता',
    footer_address_text: '2B 70, यशोदा टोटल सोल्यूशन, फिनिक्स पॅरागॉन प्लाझा, लाल बहादूर शास्त्री मार्ग, कामानी, कुर्ला (पश्चिम), मुंबई, महाराष्ट्र 400070',

    footer_rights: '© 2026 यशोदा टोटल सोल्यूशन. सर्व हक्क राखीव.',
    footer_designed_by: 'डिझाइन व विकसित केले',
    footer_designed_by_name: 'विंग्जस्फीयर टेक',

    // --------------------------------------------------------------------- Footer Page Marathi Ends 


    // About Us Page ---------------------------------------------------------------------------------------

    title: "यशोदा टोटल सोल्यूशन्स बद्दल",
    hero_subtitle: "व्यावसायिक विमा दावा सहाय्य आणि कायदेशीर सेवा",

    about_title: "आमच्याबद्दल",
    about_intro: "यशोदा टोटल सोल्यूशन्स ही एक व्यावसायिक विमा दावा सहाय्य आणि कायदेशीर सेवा देणारी संस्था आहे.",
    about_p2: "2025 मध्ये स्थापन झालेली ही संस्था विमा दावे, वाद निराकरण आणि दस्तऐवज प्रक्रियेत सहाय्य करते.",
    about_p3: "ही संस्था ग्राहक, विमा कंपन्या आणि कायदेशीर तज्ञ यांच्यात समन्वय साधते.",
    about_p4: "आम्ही पारदर्शक आणि वेळेत सेवा देण्यास बांधील आहोत.",

    whatwedo_title: "आम्ही काय करतो",
    whatwedo_intro: "आम्ही खालील सेवा प्रदान करतो:",
    whatwedo_items: [
      "विमा दावा सहाय्य",
      "मिस-सेलिंग तक्रार सहाय्य",
      "ग्राहक वाद सहाय्य",
      "आर्थिक व सेवा वाद समन्वय",
      "चेक बाउन्स सहाय्य",
      "दस्तऐवज प्रक्रिया सहाय्य",
      "तज्ञांसोबत समन्वय"
    ],
    whatwedo_outro: "आम्ही ग्राहकांना संपूर्ण प्रक्रियेत मार्गदर्शन करतो.",

    features_title: "आमच्या वैशिष्ट्ये",
    features_intro: "आमची सेवा प्रणाली वेगळी आणि प्रभावी आहे.",
    features_subtitle: "मुख्य वैशिष्ट्ये:",
    features: [
      "अनुभवी टीम",
      "सपोर्ट टीम",
      "प्रशासनिक देखरेख",
      "नियमित ऑडिट",
      "टेक्नॉलॉजी आधारित ट्रॅकिंग",
      "वेळेवर फॉलो-अप",
      "नियमित अपडेट्स",
      "डेटा गोपनीयता"
    ],

    strategy_title: "आमची कार्यपद्धती",
    strategy_intro: "आम्ही व्यवस्थित पद्धतीने काम करतो.",
    strategy_items: [
      "प्रत्येक केसचे मूल्यांकन",
      "योग्य योजना तयार करणे",
      "निरंतर मॉनिटरिंग",
      "नियमित पुनरावलोकन",
      "टेक्नॉलॉजी वापर"
    ],
    strategy_outro: "वेळेत काम पूर्ण करण्यावर आमचा भर आहे.",

    approach_title: "आमचा दृष्टिकोन",
    approach_items: [
      "ग्राहक प्रथम",
      "व्यवस्थित मार्गदर्शन",
      "गोपनीयता",
      "वेळेवर सेवा",
      "पारदर्शकता",
      "सतत फॉलो-अप"
    ],

    commitment_title: "आमची बांधिलकी",
    commitment_text: "ग्राहक समाधान आमची सर्वोच्च प्राथमिकता आहे.",

    team_title: "आमची टीम",
    md_title: "व्यवस्थापकीय संचालक",
    md_name: "राजेश वर्मा",
    md_desc1: "राजेश वर्मा हे अनुभवी व्यावसायिक असून त्यांना विमा दावा निकाली काढण्याचा 14 वर्षांहून अधिक अनुभव आहे. त्यांच्या संपूर्ण कारकिर्दीत त्यांनी ग्राहकांच्या हिताचे संरक्षण करण्यासाठी आणि योग्य व वेळेवर दावा निकाली काढण्यासाठी सखोल उद्योगज्ञान आणि धोरणात्मक कौशल्य विकसित केले आहे.",
    md_desc2: "दावा प्रक्रिया, वाद व्यवस्थापन आणि विमा नियमांवरील मजबूत पकडीमुळे त्यांनी गुंतागुंतीच्या प्रकरणांचे यशस्वीपणे व्यवस्थापन केले आहे आणि सातत्याने सकारात्मक परिणाम दिले आहेत. त्यांचा ग्राहक-केंद्रित दृष्टिकोन, पारदर्शक कार्यपद्धती आणि समर्पित नेतृत्व प्रत्येक टप्प्यावर पूर्ण सहाय्य आणि समाधान सुनिश्चित करते.",
    md_quote: "तुमचा दावा आमच्यासाठी फक्त एक फाईल नाही — ती आमची जबाबदारी आहे.",

    sales_title: "सेल्स टीम",
    sales_desc1: "यशोदा टोटल सोल्यूशन्समध्ये, आमची सेल्स टीम प्रत्येक ग्राहकासाठी विश्वास आणि सहाय्याचा पहिला आधार आहे. अनेक वर्षांच्या प्रत्यक्ष अनुभवासह, आमचे समर्पित व्यावसायिक प्रामाणिकपणा, स्पष्टता आणि आत्मविश्वासाने ग्राहकांना मार्गदर्शन करण्यासाठी सतत कार्यरत असतात.",
    sales_desc2: "आम्हाला समजते की तुमची मेहनतीची कमाई तुमच्या स्वप्नांचे, सुरक्षिततेचे आणि भविष्याचे प्रतीक आहे. त्यामुळे आमची टीम प्रत्येक टप्प्यावर प्रामाणिक सल्ला, पारदर्शक संवाद आणि संपूर्ण सहाय्य देण्यासाठी वचनबद्ध आहे. पहिल्या सल्ल्यापासून अंतिम निकालापर्यंत आम्ही पूर्ण जबाबदारीने तुमच्या सोबत उभे राहतो.",
    sales_desc3: "आमची ताकद आमच्या मेहनती दृष्टिकोनात, ग्राहक-केंद्रित विचारसरणीत आणि आमच्या कायदेशीर व दावा तज्ञांसोबतच्या मजबूत समन्वयात आहे, ज्यामुळे तुमच्यासाठी सर्वोत्तम परिणाम सुनिश्चित होतात.",
    sales_motto: "तुमचा विश्वास आम्हाला प्रेरणा देतो. तुमचे यश आमचे यश आहे.",

    legal_title1: "कायदेशीर टीम",
    legal_desc1: "यशोदा टोटल सोल्यूशन्समध्ये आमच्याकडे विमा वाद निराकरण व्यवस्थापनात तज्ज्ञ असलेली अत्यंत अनुभवी आणि समर्पित कायदेशीर टीम आहे. आमच्या तज्ञांनी विमा मिस-सेलिंग, दावा सेटलमेंट वाद आणि थर्ड-पार्टी क्लेम सेटलमेंटसारख्या गुंतागुंतीच्या प्रकरणांचे यशस्वीपणे हाताळले आहे.",
    legal_desc2: "सखोल उद्योगज्ञान आणि धोरणात्मक कायदेशीर कौशल्याच्या जोरावर आम्ही आमच्या ग्राहकांच्या हक्कांसाठी ठामपणे उभे राहतो आणि त्यांना योग्य न्याय व भरपाई मिळवून देतो. आमचा परिणाम-केंद्रित दृष्टिकोन तुम्हाला तुमची मेहनतीची कमाई परत मिळवून देण्यासाठी सक्षम करतो — अगदी मोठ्या आणि प्रभावशाली विमा कंपन्यांकडूनसुद्धा.",
    legal_motto: "तुमचा लढा ही आमची जबाबदारी आहे. तुमचा न्याय हे आमचे ध्येय आहे.",

    view_profile: "प्रोफाइल पहा",
    close: "बंद करा",

    // --------------------------------------------------------------------------------About Us Page Ends

    // Services Page Marathi

    // Mis-Selling Page Marathi ------------------------------------------------------------------------------------

    mis_selling_title_backlink1: 'मुख्यपृष्ठ',
    mis_selling_title_backlink2: 'विमा पॉलिसीचे चुकीचे विक्रीकरण',

    mis_selling_title: 'विमा पॉलिसीची चुकीची विक्री',

    mis_selling_description: 'तुम्हाला अशी विमा पॉलिसी विकली गेली आहे का जी सांगितल्याप्रमाणे नाही? विमा मिस-सेलिंग तेव्हा होते जेव्हा एजंट किंवा बँका ग्राहकांना पॉलिसीच्या वैशिष्ट्यांबद्दल, फायद्यांबद्दल किंवा अटींबद्दल चुकीची माहिती देतात. आम्ही तुम्हाला न्याय आणि भरपाई मिळवून देतो.',

    mis_selling_what_is: 'विमा मिस-सेलिंग म्हणजे काय?',
    mis_selling_what_is_description1: 'विमा मिस-सेलिंग तेव्हा होते जेव्हा विमा एजंट, बँका किंवा आर्थिक संस्था ग्राहकांना',
    mis_selling_what_is_description2: 'खोटी माहिती देऊन, महत्त्वाच्या अटी लपवून किंवा दिशाभूल करणारी आश्वासने देऊन',
    mis_selling_what_is_description3: 'विमा पॉलिसी विकतात.',

    mis_selling_examples: 'सामान्य उदाहरणे:',
    mis_selling_example_1: '✗ ULIP (युनिट लिंक्ड इन्शुरन्स प्लॅन) ला फिक्स्ड डिपॉझिट म्हणून विकणे',
    mis_selling_example_2: '✗ पॉलिसी शुल्क, सरेंडर चार्ज किंवा लॉक-इन कालावधी लपवणे',
    mis_selling_example_3: '✗ मार्केटशी संबंधित रिटर्न असूनही हमीदार उच्च परतावा देण्याचे आश्वासन देणे',
    mis_selling_example_4: '✗ पॉलिसी एक्सक्लूजन किंवा क्लेम रिजेक्शन अटी समजावून न सांगणे',
    mis_selling_example_5: '✗ ग्राहकाची योग्य संमती किंवा स्वाक्षरी न घेता पॉलिसी विकणे',
    mis_selling_example_6: '✗ बँक खाते उघडताना माहिती न देता विमा विकणे',

    mis_selling_what_happens: 'मिस-सेलिंग प्रकरणांमध्ये काय घडते?',
    mis_selling_what_happens_description: 'विमा मिस-सेलिंगचा तुमच्या आर्थिक स्थितीवर होणारा परिणाम समजून घ्या',
    mis_selling_what_happens_1_title: 'आर्थिक नुकसान',
    mis_selling_what_happens_1_description: 'सरेंडर चार्ज, कमी परतावा किंवा तुमच्या गरजांना न बसणाऱ्या पॉलिसीमुळे तुम्हाला नुकसान होऊ शकते.',
    mis_selling_what_happens_2_title: 'चुकीचे कव्हरेज',
    mis_selling_what_happens_2_description: 'पॉलिसी तुम्हाला सांगितल्याप्रमाणे संरक्षण किंवा फायदे देत नाही.',
    mis_selling_what_happens_3_title: 'विश्वासघात',
    mis_selling_what_happens_3_description: 'एजंट किंवा बँकेवरचा तुमचा विश्वास तुटतो आणि मानसिक त्रास होतो.',

    mis_selling_why_choose_us: 'यशोदा टोटल सोल्यूशन्स का निवडावे?',
    mis_selling_why_choose_us_description: 'मिस-सेलिंग प्रकरणे प्रभावीपणे सोडवण्यासाठी तज्ज्ञ मार्गदर्शन',
    mis_selling_why_choose_us_1_title: 'तज्ज्ञ टीम',
    mis_selling_why_choose_us_1_description: 'आम्हाला विमा मिस-सेलिंग प्रकरणांचा दीर्घ अनुभव आहे.',
    mis_selling_why_choose_us_2_title: 'संपूर्ण दस्तऐवजीकरण',
    mis_selling_why_choose_us_2_description: 'आम्ही सर्व आवश्यक कागदपत्रे आणि तक्रार पत्रे तयार करतो.',
    mis_selling_why_choose_us_3_title: 'कायदेशीर सहाय्य',
    mis_selling_why_choose_us_3_description: 'आवश्यक असल्यास आम्ही कायदेशीर नोटीस आणि ओम्बड्समन तक्रार करतो.',
    mis_selling_why_choose_us_4_title: 'उच्च यशदर',
    mis_selling_why_choose_us_4_description: 'आम्ही अनेक ग्राहकांना भरपाई आणि पॉलिसी रद्द करण्यात मदत केली आहे.',

    mis_selling_process_flow: 'मिस-सेलिंग सोडवण्यासाठी आमची 6-स्टेप प्रक्रिया',
    mis_selling_process_flow_description: 'सोपे, पारदर्शक आणि प्रभावी पद्धत',
    mis_selling_process_flow1_title: 'सल्ला व केस विश्लेषण',
    mis_selling_process_flow1_description: 'आम्ही तुमची पॉलिसी आणि विक्री तपशील तपासतो आणि फरक समजतो.',
    mis_selling_process_flow2_title: 'पुरावे गोळा करणे',
    mis_selling_process_flow2_description: 'सर्व कागदपत्रे, ईमेल, एसएमएस आणि बँक नोंदी गोळा करतो.',
    mis_selling_process_flow3_title: 'तक्रार तयार करणे',
    mis_selling_process_flow3_description: 'तुमच्या नुकसानीसह सविस्तर तक्रार तयार करतो.',
    mis_selling_process_flow4_title: 'तक्रार नोंदवणे',
    mis_selling_process_flow4_description: 'विमा कंपनीकडे तक्रार नोंदवतो.',
    mis_selling_process_flow5_title: 'ओम्बड्समन/IRDAI कडे तक्रार',
    mis_selling_process_flow5_description: 'प्रतिक्रिया न मिळाल्यास पुढे नेतो.',
    mis_selling_process_flow6_title: 'निराकरण व भरपाई',
    mis_selling_process_flow6_description: 'पूर्ण निराकरण होईपर्यंत पाठपुरावा करतो.',


    mis_selling_example_scenarios: 'प्रत्यक्ष जीवनातील मिस-सेलिंग उदाहरणे',
    mis_selling_example_scenarios_subtitle: 'ही सामान्य परिस्थिती आहेत ज्या आम्ही सोडवतो',

    mis_selling_example_scenarios_case1_title: 'केस 1: ULIP फिक्स्ड डिपॉझिट म्हणून विकला',
    mis_selling_example_scenarios_case1_problem: 'रमेशला सांगण्यात आले की तो 5 वर्षांचा FD उघडत आहे ज्यावर 8% हमी परतावा आहे.',
    mis_selling_example_scenarios_case1_reality: 'तो प्रत्यक्षात ULIP होता ज्यात लॉक-इन आणि जास्त शुल्क होते.',
    mis_selling_example_scenarios_case1_solution: 'आम्ही तक्रार केली आणि त्याला परतावा मिळवून दिला.',

    mis_selling_example_scenarios_case2_title: 'केस 2: लपवलेले शुल्क',
    mis_selling_example_scenarios_case2_problem: 'सुनीताला सरेंडर चार्जची माहिती दिली नव्हती.',
    mis_selling_example_scenarios_case2_reality: 'तिने ₹90,000 गमावले.',
    mis_selling_example_scenarios_case2_solution: 'ओम्बड्समनकडे तक्रार करून परतावा मिळवला.',

    mis_selling_example_scenarios_case3_title: 'केस 3: संमतीशिवाय पॉलिसी',
    mis_selling_example_scenarios_case3_problem: 'प्रकाशच्या खात्यातून पैसे कापले गेले.',
    mis_selling_example_scenarios_case3_reality: 'त्याला माहिती न देता पॉलिसी देण्यात आली.',
    mis_selling_example_scenarios_case3_solution: 'IRDAI मध्ये तक्रार करून पूर्ण रक्कम परत मिळवली.',

    mis_selling_example_scenarios_case4_title: 'केस 4: खोटे परताव्याचे आश्वासन',
    mis_selling_example_scenarios_case4_problem: 'मीराला ₹10 लाख परताव्याचे आश्वासन दिले गेले.',
    mis_selling_example_scenarios_case4_reality: 'कोणतीही हमी नव्हती.',
    mis_selling_example_scenarios_case4_solution: 'पॉलिसी रद्द करून पूर्ण रक्कम मिळवली.',

    mis_selling_example_scenarios_case_problem: '❌ समस्या:',
    mis_selling_example_scenarios_case_reality: '⚠️ वास्तविकता:',
    mis_selling_example_scenarios_case_solution: '✅ आमचे समाधान:',

    mis_selling_faqs: 'वारंवार विचारले जाणारे प्रश्न',
    mis_selling_faq_subtitle: 'मिस-सेलिंग संदर्भातील सामान्य प्रश्न',

    mis_selling_faq1_question: 'मी मिस-सेलिंगचा बळी आहे हे कसे ओळखावे?',
    mis_selling_faq1_answer: 'जर सांगितलेले आणि प्रत्यक्ष पॉलिसी वेगळी असेल तर ते मिस-सेलिंग आहे.',

    mis_selling_faq2_question: 'तक्रार करण्याची वेळ मर्यादा काय आहे?',
    mis_selling_faq2_answer: '3 वर्षांच्या आत तक्रार करता येते.',

    mis_selling_faq3_question: 'मला पूर्ण परतावा मिळू शकतो का?',
    mis_selling_faq3_answer: 'हो, काही प्रकरणांमध्ये शक्य आहे.',

    mis_selling_faq4_question: 'एजंटवर कारवाई होईल का?',
    mis_selling_faq4_answer: 'हो, IRDAI कारवाई करू शकते.',

    mis_selling_faq5_question: 'मला वकील लागेल का?',
    mis_selling_faq5_answer: 'नाही, आम्ही सर्व हाताळतो.',

    mis_selling_faq6_question: 'प्रक्रिया किती वेळ घेते?',
    mis_selling_faq6_answer: '15-30 दिवस ते 2-4 महिने.',

    mis_selling_cta_title: 'तुम्ही विमा मिस-सेलिंगचे बळी आहात का?',
    mis_selling_cta_description: 'विमा कंपन्यांना सुटू देऊ नका. आम्ही तुम्हाला न्याय आणि भरपाई मिळवून देतो.',
    mis_selling_cta_button: 'मोफत सल्ला घ्या',
    mis_selling_cta_call_button: 'आता कॉल करा',

    // ------------------------------------------------------------------------------------Mis-Selling Page Ends

    // Claim Rejection Page Marathi ------------------------------------------------------------------------------------



    claim_rej_title_backlink1: 'विमा दावा नाकारला',
    claim_rej_title_backlink2: 'मुख्यपृष्ठ',

    claim_rej_title: 'विमा दावा नकार सहाय्य',

    claim_rej_description: 'नाकारलेल्या विमा दाव्यांमागील कारणे समजून घेणे आणि त्या समस्येचे निराकरण करण्यासाठी मदत करू शकणाऱ्या टप्प्यांचा अभ्यास करणे. विमा दावा नाकारला जाणे हे पॉलिसीधारकांसाठी निराशाजनक आणि भावनिकदृष्ट्या कठीण असू शकते. पॉलिसीच्या अटी, कागदपत्रांमधील त्रुटी किंवा अटींच्या व्याख्येमुळे दावा नाकारला जाऊ शकतो.',

    what_claim_rej_title: 'विमा दावा नकार म्हणजे काय?',
    what_claim_rej_description: 'विमा दावा नकार तेव्हा होतो जेव्हा विमा कंपनी पॉलिसीधारकाचा दावा सेटलमेंटसाठी केलेला अर्ज नाकारते.',
    what_claim_rej_description1: 'ही परिस्थिती अनेक कारणांमुळे उद्भवू शकते, ज्यामध्ये समाविष्ट आहे',
    what_claim_rej_description2: 'अपूर्ण कागदपत्रे, पॉलिसीतील अपवाद (exclusions), वेळेची मर्यादा चुकणे किंवा कव्हरेज अटींबाबत मतभेद.',
    what_claim_rej_description3: 'अनेक पॉलिसीधारकांना दावा नाकारल्यानंतर पुढे काय करावे हे समजत नाही. नकार पत्रामध्ये तांत्रिक स्पष्टीकरण असू शकते जे समजणे कठीण असते, त्यामुळे ग्राहकांना हा निर्णय अंतिम आहे की पुढील पावले उचलता येतील याबाबत संभ्रम निर्माण होतो.',

    what_claim_rej_common_reasons: 'सामान्य कारणे खालीलप्रमाणे आहेत:',
    what_claim_rej_common_reasons1: '✗ अपूर्ण किंवा चुकीची कागदपत्रे',
    what_claim_rej_common_reasons2: '✗ दावा सादर करण्यात झालेला विलंब',
    what_claim_rej_common_reasons3: '✗ पॉलिसीतील अपवाद किंवा मर्यादा',
    what_claim_rej_common_reasons4: '✗ पॉलिसी खरेदी करताना महत्त्वाची माहिती न देणे',
    what_claim_rej_common_reasons5: '✗ दावा पात्रतेबाबत मतभेद',
    what_claim_rej_common_reasons6: '✗ पॉलिसीच्या अटींचा चुकीचा अर्थ लावणे',

    what_happens_after_claim_rej_title: 'दावा नाकारल्यानंतर काय होते',
    what_happens_after_claim_rej_description: 'नकारानंतरचा परिणाम आणि पुढील पावले समजून घेणे',

    what_happens_item1: 'पॉलिसीबाबत संभ्रम',
    what_happens_desc1: 'पॉलिसीच्या अटी आणि प्रत्यक्षात काय कव्हर होते व काय सांगितले गेले होते याबाबत अनिश्चितता निर्माण होते.',

    what_happens_item2: 'तांत्रिक स्पष्टीकरण',
    what_happens_desc2: 'नकार पत्रामध्ये जटिल तांत्रिक माहिती असते जी समजणे कठीण असते.',

    what_happens_item3: 'पुढील पावले अस्पष्ट',
    what_happens_desc3: 'पॉलिसीधारकांना निर्णय अंतिम आहे की त्यावर आक्षेप घेता येईल याबाबत स्पष्टता नसते.',

    why_choose_claim_rej_title: 'यशोदा टोटल सोल्यूशन्स का निवडावे?',
    why_choose_claim_rej_description: 'दावा नकार प्रकरणे प्रभावीपणे सोडवण्यासाठी तज्ज्ञ मार्गदर्शन',

    why_choose_claim_rej_item1: 'तज्ज्ञ टीम',
    why_choose_claim_rej_desc1: 'विमा दावा नकार प्रकरणे आणि वाद हाताळण्याचा अनेक वर्षांचा अनुभव.',

    why_choose_claim_rej_item2: 'संपूर्ण कागदपत्रे',
    why_choose_claim_rej_desc2: 'आम्ही सर्व आवश्यक कागदपत्रे, नोटिसा आणि तक्रार पत्रे तयार करतो.',

    why_choose_claim_rej_item3: 'कायदेशीर सहाय्य',
    why_choose_claim_rej_desc3: 'आवश्यक असल्यास कायदेशीर नोटीस तयार करणे आणि ओम्बड्समनकडे तक्रार दाखल करणे.',

    why_choose_claim_rej_item4: 'उच्च यशदर',
    why_choose_claim_rej_desc4: 'शेकडो ग्राहकांना भरपाई आणि पॉलिसी समाधान मिळवून देण्यात मदत केली आहे.',

    process_flow_claim_rej_title: 'दावा नकार सोडवण्यासाठी आमची 5-टप्प्यांची प्रक्रिया',
    process_flow_claim_rej_description: 'दावा नकार हाताळण्यासाठी संरचित आणि व्यवस्थित पद्धत',

    process_flow_claim_rej_item1: 'केस पुनरावलोकन आणि विश्लेषण',
    process_flow_claim_rej_desc1: 'आम्ही तुमची पॉलिसी कागदपत्रे, नकार पत्र आणि नकाराची कारणे समजून घेतो.',

    process_flow_claim_rej_item2: 'पुरावे संकलन',
    process_flow_claim_rej_desc2: 'आम्ही तुमच्या दाव्याशी संबंधित सर्व कागदपत्रे, पॉलिसी अटी आणि संवाद नोंदी गोळा करतो.',

    process_flow_claim_rej_item3: 'उत्तर तयार करणे',
    process_flow_claim_rej_desc3: 'नकाराच्या कारणांवर मुद्देसूद उत्तर तयार करतो.',

    process_flow_claim_rej_item4: 'तक्रार दाखल करणे',
    process_flow_claim_rej_desc4: 'आम्ही विमा कंपनीच्या ग्रिव्हन्स सेलमध्ये तक्रार दाखल करतो आणि आवश्यक असल्यास पुढे नेतो.',

    process_flow_claim_rej_item5: 'ओम्बड्समनकडे एस्कलेशन',
    process_flow_claim_rej_desc5: 'प्रकरण सुटले नाही तर आम्ही ते विमा ओम्बड्समन किंवा IRDAI कडे पुढील कारवाईसाठी नेतो.',

    ex_scenario_claim_rej_title: 'प्रत्यक्ष जीवनातील दावा नकार उदाहरण',
    ex_scenario_claim_rej_description: 'सामान्य परिस्थिती ज्या आम्ही सोडवण्यास मदत करतो',

    ex_scenario_claim_rej_example1_title: 'उदाहरण 1 – वैद्यकीय कागदपत्रांचा अभाव',
    ex_scenario_claim_rej_example1_problem: 'पॉलिसीधारक हॉस्पिटल उपचारानंतर आरोग्य विमा दावा सादर करतो.',
    ex_scenario_claim_rej_example1_reality: 'काही आवश्यक वैद्यकीय अहवाल सादर न केल्यामुळे दावा नाकारला जातो.',
    ex_scenario_claim_rej_example1_solution: 'आम्ही आवश्यक कागदपत्रे गोळा करून नवीन दावा सादर केला जो मंजूर झाला.',

    ex_scenario_claim_rej_example2_title: 'उदाहरण 2 – पॉलिसी अपवाद अट',
    ex_scenario_claim_rej_example2_problem: 'ग्राहक विशिष्ट आजारासाठी दावा सादर करतो.',
    ex_scenario_claim_rej_example2_reality: 'तो आजार पॉलिसीच्या अपवाद यादीत असल्यामुळे दावा नाकारला जातो.',
    ex_scenario_claim_rej_example2_solution: 'आम्ही पॉलिसी अटी समजावून सांगितल्या आणि मार्गदर्शन केले.',

    ex_scenario_claim_rej_example3_title: 'उदाहरण 3 – उशिरा दावा सादर करणे',
    ex_scenario_claim_rej_example3_problem: 'वाहन अपघातानंतर पॉलिसीधारक विमा कंपनीला उशिरा माहिती देतो.',
    ex_scenario_claim_rej_example3_reality: 'निश्चित वेळेत माहिती न दिल्यामुळे दावा नाकारला जातो.',
    ex_scenario_claim_rej_example3_solution: 'आम्ही विलंबाचे कारण स्पष्ट करून अपील दाखल केले; अंशतः दावा पुन्हा विचारात घेतला गेला.',

    ex_scenario_claim_rej_example4_title: 'उदाहरण 4 – पूर्व-अस्तित्वातील आजार वाद',
    ex_scenario_claim_rej_example4_problem: 'आरोग्य विमा दावा पूर्व-अस्तित्वातील आजारामुळे नाकारला जातो.',
    ex_scenario_claim_rej_example4_reality: 'विमा कंपनीला वाटते की आजार पॉलिसीपूर्वी अस्तित्वात होता.',
    ex_scenario_claim_rej_example4_solution: 'आम्ही वैद्यकीय पुरावे सादर करून दावा मंजूर करून घेतला.',

    ex_scenario_claim_rej_example_head1: '❌ समस्या:',
    ex_scenario_claim_rej_example_head2: '⚠️ वास्तविकता:',
    ex_scenario_claim_rej_example_head3: '✅ आमचे समाधान:',

    faq_claim_rej_title: 'वारंवार विचारले जाणारे प्रश्न',
    faq_claim_rej_description: 'दावा नकाराशी संबंधित सामान्य प्रश्न',

    faq_claim_rej_q1: 'विमा दावा नकार म्हणजे काय?',
    faq_claim_rej_a1: 'याचा अर्थ विमा कंपनीने पॉलिसी अटी किंवा कागदपत्रांमुळे दावा नाकारला आहे.',

    faq_claim_rej_q2: 'नाकारलेला दावा पुन्हा तपासता येतो का?',
    faq_claim_rej_a2: 'काही प्रकरणांमध्ये पॉलिसीधारक दावा तपशील पुन्हा पाहू शकतात.',

    faq_claim_rej_q3: 'दाव्यासाठी कोणती कागदपत्रे आवश्यक असतात?',
    faq_claim_rej_a3: 'पॉलिसी कागदपत्रे, दावा फॉर्म, वैद्यकीय अहवाल आणि बिले.',

    faq_claim_rej_q4: 'दावे का नाकारले जातात?',
    faq_claim_rej_a4: 'कागदपत्रे, विलंब किंवा पॉलिसी अटींमुळे.',

    cta_claim_rej_title: 'दावा नकारानंतर संभ्रमात आहात का?',
    cta_claim_rej_description: 'दावा नाकारण्यामागील कारण समजून घेणे महत्त्वाचे आहे. अधिक माहितीसाठी आमच्याशी संपर्क साधा.',
    cta_claim_rej_description2: 'मोफत सल्ला घ्या',
    cta_claim_rej_button: 'आता कॉल करा',

    //--------------------------------------------------------------------------------Claim Rejection Page Ends

    // Claim Delay Page Marathi ------------------------------------------------------------------------------------


    claim_delay_title_backlink1: 'मुख्यपृष्ठ',
    claim_delay_title_backlink2: 'दावा प्रक्रियेत विलंब',

    claim_delay_title: 'विमा दावा प्रक्रियेत विलंब',

    claim_delay_description: 'विमा दावे कधी कधी अपेक्षेपेक्षा अधिक वेळ का घेतात हे समजून घेणे आणि पॉलिसीधारकांनी ही प्रक्रिया अधिक चांगल्या प्रकारे कशी समजून घ्यावी याचा अभ्यास करणे. दस्तऐवज पडताळणी, अंतर्गत तपासणी, पॉलिसीच्या अटी किंवा विमा कंपन्यांनी अनुसरलेल्या प्रशासकीय प्रक्रियांमुळे विलंब होऊ शकतो.',

    what_claim_delay_title: 'दावा प्रक्रियेतील विलंब समजून घेणे',

    what_claim_delay_description: 'विमा दावा प्रक्रिया ही एक संरचित प्रक्रिया आहे ज्यामध्ये अनेक टप्प्यांमध्ये पडताळणी आणि दस्तऐवजांचे सविस्तर पुनरावलोकन केले जाते.',

    what_claim_delay_description1: 'कधी कधी दावे प्रक्रिया होण्यासाठी अपेक्षेपेक्षा अधिक वेळ लागू शकतो. असे विलंब अनेक कारणांमुळे होऊ शकतात जसे की',

    what_claim_delay_description2: 'अतिरिक्त कागदपत्रांची मागणी, अंतर्गत पुनरावलोकन प्रक्रिया किंवा पॉलिसीशी संबंधित स्पष्टीकरणाची आवश्यकता.',

    what_claim_delay_description3: 'पॉलिसीधारकांसाठी ही प्रतीक्षा कालावधी त्रासदायक आणि अनिश्चित असू शकतो, विशेषतः जेव्हा ते अपघात, वैद्यकीय उपचार किंवा इतर विमा अंतर्गत येणाऱ्या घटनांशी संबंधित आर्थिक खर्च भागवण्यासाठी दावा निपटाऱ्यावर अवलंबून असतात.',

    what_claim_delay_common_reasons: 'विलंबाची सामान्य कारणे खालीलप्रमाणे आहेत:',
    what_claim_delay_common_reasons1: '• अपूर्ण किंवा आवश्यक कागदपत्रांचा अभाव',
    what_claim_delay_common_reasons2: '• विमा कंपनीकडून अतिरिक्त पडताळणी किंवा तपासणी प्रक्रिया',
    what_claim_delay_common_reasons3: '• हॉस्पिटल किंवा सेवा प्रदात्याकडून कागदपत्रे उशिरा मिळणे',
    what_claim_delay_common_reasons4: '• मोठ्या प्रमाणात दावे एकाच वेळी प्रक्रिया होत असणे',
    what_claim_delay_common_reasons5: '• पॉलिसीच्या अटींनुसार अतिरिक्त मूल्यांकनाची आवश्यकता',
    what_claim_delay_common_reasons6: '• संबंधित पक्षांमधील संवादातील अंतर किंवा समन्वयाचा अभाव',

    what_happens_after_claim_delay_title: 'दावा पुनरावलोकनादरम्यान काय घडते',
    what_happens_after_claim_delay_description: 'विलंब होण्यास कारणीभूत ठरणाऱ्या पुनरावलोकन प्रक्रियेचे समजून घेणे',

    what_happens_claim_delay_item1: 'कागदपत्र पडताळणी',
    what_happens_claim_delay_desc1: 'विमा कंपनी सादर केलेली सर्व कागदपत्रे आणि पूरक पुरावे तपासते आणि त्यांची खात्री करते.',

    what_happens_claim_delay_item2: 'वैद्यकीय पुनरावलोकन',
    what_happens_claim_delay_desc2: 'वैद्यकीय अहवाल, अपघाताचे तपशील किंवा उपचार नोंदींचे सखोल परीक्षण केले जाते.',

    what_happens_claim_delay_item3: 'पॉलिसी तपासणी',
    what_happens_claim_delay_desc3: 'पॉलिसीची पात्रता, अटी आणि कव्हरेज तपासून त्याची पुष्टी केली जाते.',

    what_happens_claim_delay_item4: 'अतिरिक्त माहितीची मागणी',
    what_happens_claim_delay_desc4: 'प्रारंभिक सादरीकरण अपूर्ण असल्यास अतिरिक्त कागदपत्रे किंवा माहिती मागवली जाते.',

    why_choose_claim_delay_title: 'यशोदा टोटल सोल्यूशन्स का निवडावे?',
    why_choose_claim_delay_description: 'दावा प्रक्रियेसाठी तज्ज्ञ मार्गदर्शन आणि सहाय्य',

    why_choose_claim_delay_item1: 'तज्ज्ञ टीम',
    why_choose_claim_delay_desc1: 'विमा दावा नकार आणि वाद हाताळण्याचा अनेक वर्षांचा अनुभव असलेली टीम.',

    why_choose_claim_delay_item2: 'संपूर्ण कागदपत्रे तयारी',
    why_choose_claim_delay_desc2: 'आम्ही तुमच्यासाठी सर्व आवश्यक कागदपत्रे, नोटिसा आणि तक्रार पत्रे व्यवस्थित तयार करतो.',

    why_choose_claim_delay_item3: 'कायदेशीर सहाय्य',
    why_choose_claim_delay_desc3: 'आवश्यकतेनुसार कायदेशीर नोटीस तयार करणे आणि ओम्बड्समनकडे तक्रार दाखल करण्यास मदत करतो.',

    why_choose_claim_delay_item4: 'उच्च यशदर',
    why_choose_claim_delay_desc4: 'शेकडो ग्राहकांना भरपाई आणि पॉलिसी निपटारा मिळवून देण्यात यशस्वी मदत केली आहे.',

    process_flow_claim_delay_title: 'दावा सहाय्यासाठी आमची 5-टप्प्यांची प्रक्रिया',
    process_flow_claim_delay_description: 'दावा विलंब प्रभावीपणे हाताळण्यासाठी मार्गदर्शन',

    process_flow_claim_delay_item1: 'कागदपत्रांचे पुनरावलोकन',
    process_flow_claim_delay_desc1: 'आम्ही तुमची सर्व दावा कागदपत्रे तपासतो आणि ती पूर्ण व अचूक आहेत याची खात्री करतो.',

    process_flow_claim_delay_item2: 'स्थितीचा मागोवा (ट्रॅकिंग)',
    process_flow_claim_delay_desc2: 'आम्ही तुम्हाला तुमच्या दाव्याची सध्याची स्थिती समजून घेण्यास मदत करतो.',

    process_flow_claim_delay_item3: 'नियमित पाठपुरावा सहाय्य',
    process_flow_claim_delay_desc3: 'दावा प्रक्रिया जलद होण्यासाठी विमा कंपनीसोबत नियमित पाठपुरावा केला जातो.',

    process_flow_claim_delay_item4: 'अतिरिक्त कागदपत्रांची व्यवस्था',
    process_flow_claim_delay_desc4: 'जर अतिरिक्त कागदपत्रांची मागणी झाली तर आम्ही ती गोळा करून योग्य वेळी सादर करण्यास मदत करतो.',

    process_flow_claim_delay_item5: 'निपटारा सहाय्य',
    process_flow_claim_delay_desc5: 'तुमचा दावा यशस्वीरित्या निपटारा होईपर्यंत आम्ही संपूर्ण प्रक्रियेत मार्गदर्शन करतो.',

    ex_scenario_claim_delay_title: 'प्रत्यक्ष जीवनातील दावा विलंब उदाहरणे',
    ex_scenario_claim_delay_description: 'दाव्यांमध्ये विलंब होणाऱ्या सामान्य परिस्थिती',

    ex_scenario_claim_delay_example1_title: 'उदाहरण 1 – हॉस्पिटल कागदपत्रांमध्ये विलंब',
    ex_scenario_claim_delay_example1_problem: 'एक रुग्ण हॉस्पिटल उपचारानंतर आरोग्य विमा दावा सादर करतो.',
    ex_scenario_claim_delay_example1_reality: 'विमा कंपनी हॉस्पिटलकडून अतिरिक्त वैद्यकीय अहवालांची प्रतीक्षा करत असल्यामुळे दावा प्रलंबित राहतो.',
    ex_scenario_claim_delay_example1_solution: 'आम्ही हॉस्पिटलशी समन्वय साधून अहवाल लवकर सादर करून घेतले आणि दावा 2 आठवड्यांत प्रक्रिया झाला.',

    ex_scenario_claim_delay_example2_title: 'उदाहरण 2 – अपघात तपासणी',
    ex_scenario_claim_delay_example2_problem: 'मोटार अपघाताशी संबंधित दावा अपेक्षेपेक्षा अधिक वेळ घेतो.',
    ex_scenario_claim_delay_example2_reality: 'दावा मंजूर करण्यापूर्वी विमा कंपनी अपघाताच्या तपशीलांची पडताळणी करण्यासाठी तपासणी करते.',
    ex_scenario_claim_delay_example2_solution: 'आम्ही सर्व आवश्यक पुरावे सादर केले आणि नियमित पाठपुरावा केला; दावा 45 दिवसांत निपटला.',

    ex_scenario_claim_delay_example3_title: 'उदाहरण 3 – अपूर्ण पूरक कागदपत्रे',
    ex_scenario_claim_delay_example3_problem: 'अपूर्ण कागदपत्रांमुळे दावा विलंबित होतो.',
    ex_scenario_claim_delay_example3_reality: 'डिस्चार्ज सारांश आणि बिलांसारखी काही कागदपत्रे सुरुवातीला सादर केली गेली नव्हती.',
    ex_scenario_claim_delay_example3_solution: 'आम्ही सर्व आवश्यक कागदपत्रे गोळा करून पुन्हा सादर केली; दावा 10 दिवसांत मंजूर झाला.',

    ex_scenario_claim_delay_example4_title: 'उदाहरण 4 – पॉलिसी अटींचे पुनरावलोकन',
    ex_scenario_claim_delay_example4_problem: 'विमा कंपनी दावा तपासण्यासाठी अधिक वेळ घेते.',
    ex_scenario_claim_delay_example4_reality: 'घटना पॉलिसीच्या कव्हरेजमध्ये येते का याची पडताळणी करण्यासाठी वेळ घेतला जातो.',
    ex_scenario_claim_delay_example4_solution: 'आम्ही पॉलिसीशी संबंधित स्पष्टीकरण आणि आवश्यक कागदपत्रे सादर केली; दावा यशस्वीरित्या प्रक्रिया झाला.',

    ex_scenario_claim_delay_example_head1: '⏱️ समस्या:',
    ex_scenario_claim_delay_example_head2: '📋 वास्तविकता:',
    ex_scenario_claim_delay_example_head3: '✅ आमचे समाधान:',

    faq_claim_delay_title: 'वारंवार विचारले जाणारे प्रश्न',
    faq_claim_delay_description: 'दावा प्रक्रियेत होणाऱ्या विलंबासंबंधी सामान्य प्रश्न',

    faq_claim_delay_q1: 'विमा दावे कधी कधी अपेक्षेपेक्षा अधिक वेळ का घेतात?',
    faq_claim_delay_a1: 'दावा प्रक्रियेत दस्तऐवज पडताळणी, तपासणी आणि पॉलिसीचे मूल्यांकन आवश्यक असते, त्यामुळे प्रकरणाच्या गुंतागुंतीनुसार वेळ वाढू शकतो.',

    faq_claim_delay_q2: 'दावा प्रक्रिया साधारणतः किती वेळ घेते?',
    faq_claim_delay_a2: 'दाव्याचा प्रकार, आवश्यक कागदपत्रे आणि पॉलिसीच्या अटी यावर वेळ अवलंबून असतो. काही दावे काही दिवसांत पूर्ण होतात तर काहींना आठवडे लागू शकतात.',

    faq_claim_delay_q3: 'दावा विलंबित झाल्यास पॉलिसीधारकांनी काय करावे?',
    faq_claim_delay_a3: 'दाव्याची स्थिती तपासा, सर्व आवश्यक कागदपत्रे सादर केली आहेत याची खात्री करा आणि विमा कंपनीशी संपर्क साधून अद्यतन मिळवा.',

    faq_claim_delay_q4: 'सर्व कागदपत्रे दिल्यानंतरही दावा विलंबित होऊ शकतो का?',
    faq_claim_delay_a4: 'होय. काही वेळा विमा कंपन्या अतिरिक्त पडताळणी, तपासणी किंवा पॉलिसी पुनरावलोकन करतात.',

    cta_claim_delay_title: 'तुमच्या दावा प्रक्रियेत विलंब होत आहे का?',
    cta_claim_delay_description: 'दावा प्रक्रिया आणि आवश्यक कागदपत्रे समजून घेतल्यास परिस्थिती अधिक प्रभावीपणे हाताळता येते. अधिक माहितीसाठी यशोदा टोटल सोल्यूशन्सशी संपर्क साधा.',
    cta_claim_delay_description2: 'मोफत सल्ला घ्या',
    cta_claim_delay_button: 'आता कॉल करा',

    //--------------------------------------------------------------------------------Claim Delay Page Ends

    // Partial Claim Settlement Page Marathi ------------------------------------------------------------------------------------


    partial_claim_title_backlink1: 'मुख्यपृष्ठ',
    partial_claim_title_backlink2: 'आंशिक दावा सेटलमेंट',

    partial_claim_title: 'आंशिक दावा सेटलमेंट',

    partial_claim_description: 'ज्या परिस्थितींमध्ये विमा दावा मंजूर केला जातो परंतु अपेक्षित रकमेपेक्षा कमी रकमेवर सेटल केला जातो, अशा परिस्थितींचे समजून घेणे. काही वेळा विमा कंपन्या दावा मंजूर करतात परंतु एकूण दावा केलेल्या रकमेपैकी फक्त काही भागच देतात. या परिस्थितीला आंशिक दावा सेटलमेंट म्हटले जाते. कमी सेटलमेंट रकमेच्या मागील कारणांचे समजून घेणे परिस्थितीचे मूल्यांकन करण्यासाठी आणि पुढील योग्य पावले ठरवण्यासाठी महत्त्वाचे असते.',

    what_partial_claim_title: 'सेवा आढावा',

    what_partial_claim_description: 'आंशिक दावा सेटलमेंट तेव्हा होते जेव्हा विमा कंपनी दावा मंजूर करते परंतु एकूण दावा केलेल्या रकमेपैकी फक्त काही भागच अदा करते.',

    what_partial_claim_description1: 'ही परिस्थिती तेव्हा उद्भवू शकते जेव्हा काही खर्च पॉलिसी कव्हरेजच्या बाहेर येतात किंवा जेव्हा',

    what_partial_claim_description2: 'पॉलिसी मर्यादा आणि कपाती लागू होतात.',

    what_partial_claim_description3: 'अनेक पॉलिसीधारकांसाठी दावा केलेली रक्कम आणि मंजूर सेटलमेंट रक्कम यातील फरक गोंधळ आणि आर्थिक चिंता निर्माण करू शकतो.',

    what_partial_claim_description4: 'विमा कंपनी दावा रक्कम कशी गणना करते आणि पॉलिसीच्या अटींचे काळजीपूर्वक पुनरावलोकन केल्यास आंशिक सेटलमेंट का झाले हे स्पष्ट होऊ शकते.',

    what_partial_claim_description5: 'यशोदा टोटल सोल्यूशन्स',

    what_partial_claim_description6: 'अशा परिस्थितींचे पुनरावलोकन करून, सेटलमेंट निर्णयामागील संभाव्य कारणे स्पष्ट करून आणि प्रक्रियेचे समजून घेण्यासाठी ग्राहकांना मदत करते.',

    common_signs_partial_claim: 'आंशिक दावा सेटलमेंटची सामान्य चिन्हे',

    common_signs_partial_claim_description: 'जेव्हा दावा अपेक्षित रकमेपेक्षा कमी रकमेवर सेटल केला जातो तेव्हा पॉलिसीधारक काही विशिष्ट चिन्हे लक्षात घेऊ शकतात',

    common_signs_partial_claim_title1: 'कमी सेटलमेंट रक्कम',
    common_signs_partial_claim_desc1: 'मंजूर दावा रक्कम सादर केलेल्या खर्चापेक्षा लक्षणीयरीत्या कमी असते',

    common_signs_partial_claim_title2: 'वगळलेले शुल्क',
    common_signs_partial_claim_desc2: 'काही हॉस्पिटल किंवा सेवा संबंधित खर्च सेटलमेंटमध्ये समाविष्ट केले जात नाहीत',

    common_signs_partial_claim_title3: 'पॉलिसी मर्यादा लागू',
    common_signs_partial_claim_desc3: 'कमाल कव्हरेज मर्यादेमुळे परत मिळणारी रक्कम कमी होते',

    common_signs_partial_claim_title4: 'नॉन-कव्हर्ड सेवा',
    common_signs_partial_claim_desc4: 'काही उपचार किंवा सेवा पॉलिसी अंतर्गत कव्हर केलेल्या नसतात',

    common_signs_partial_claim_title5: 'कपाती लागू',
    common_signs_partial_claim_desc5: 'पॉलिसीतील कपाती दावा रकमेवरून वजा केल्या जातात',

    common_signs_partial_claim_title6: 'मूल्यह्रास कपात',
    common_signs_partial_claim_desc6: 'मोटर किंवा मालमत्ता दाव्यांमध्ये मूल्यह्रासामुळे सेटलमेंट रक्कम कमी होते',

    what_happens_after_partial_claim_title: 'आंशिक दावा सेटलमेंट प्रकरणांमध्ये प्रत्यक्षात काय घडते',

    what_happens_after_partial_claim_description: 'जेव्हा दावा सादर केला जातो तेव्हा विमा कंपनी कागदपत्रांचे पुनरावलोकन करते आणि पॉलिसी अटींनुसार खर्चाचे मूल्यांकन करते.',

    what_happens_partial_claim_item1: 'पॉलिसी अटींचा वापर',
    what_happens_partial_claim_desc1: 'मूल्यांकन दरम्यान विमा कंपनी कव्हरेज मर्यादा आणि पॉलिसी अटी लागू करते.',

    what_happens_partial_claim_item2: 'कपातींची गणना',
    what_happens_partial_claim_desc2: 'मूल्यह्रास, कपाती किंवा सह-भरणा (co-pay) यांसारख्या विविध कपाती लागू केल्या जातात.',

    what_happens_partial_claim_item3: 'तांत्रिक स्पष्टीकरण',
    what_happens_partial_claim_desc3: 'सेटलमेंट अहवालामध्ये तांत्रिक भाषा असू शकते जी समजणे कठीण असते.',

    process_flow_partial_claim_title: 'दावा मूल्यांकन प्रक्रिया',

    process_flow_partial_claim_description: 'विमा कंपन्या अंतिम दावा सेटलमेंट रक्कम कशी ठरवतात',

    process_flow_partial_claim_item1: 'दावा सादर केला',
    process_flow_partial_claim_desc1: 'पॉलिसीधारक पूर्ण कागदपत्रे आणि खर्च तपशीलांसह दावा सादर करतो.',

    process_flow_partial_claim_item2: 'कागदपत्र पडताळणी',
    process_flow_partial_claim_desc2: 'विमा कंपनी सर्व सादर केलेली कागदपत्रे आणि बिले पडताळते.',

    process_flow_partial_claim_item3: 'पॉलिसी अटींचा वापर',
    process_flow_partial_claim_desc3: 'कव्हरेज मर्यादा, अपवाद (exclusions) आणि पॉलिसी अटींचे मूल्यांकन केले जाते.',

    process_flow_partial_claim_item4: 'कपातींची गणना',
    process_flow_partial_claim_desc4: 'कपाती, मूल्यह्रास आणि इतर लागू कपातींची गणना केली जाते.',

    process_flow_partial_claim_item5: 'अंतिम सेटलमेंट मंजूर',
    process_flow_partial_claim_desc5: 'कमी केलेली अंतिम रक्कम मंजूर केली जाते आणि पॉलिसीधारकाला अदा केली जाते.',

    ex_scenario_partial_claim_title: 'प्रत्यक्ष जीवनातील आंशिक दावा सेटलमेंट उदाहरणे',

    ex_scenario_partial_claim_description: 'ज्या सामान्य परिस्थितींमध्ये दावे कमी रकमेवर सेटल केले जातात',

    ex_scenario_partial_claim_example1_title: 'उदाहरण 1 – हॉस्पिटल रूम भाडे मर्यादा',
    ex_scenario_partial_claim_example1_claimed: '₹1,20,000',
    ex_scenario_partial_claim_example1_settled: '₹80,000',
    ex_scenario_partial_claim_example1_solution: 'एक रुग्ण हॉस्पिटलमध्ये उपचार घेतो आणि ₹1,20,000 चा दावा सादर करतो. मात्र, विमा कंपनी फक्त ₹80,000 देते कारण रूम भाडे पॉलिसीमध्ये परवानगी असलेल्या मर्यादेपेक्षा जास्त होते.',

    ex_scenario_partial_claim_example2_title: 'उदाहरण 2 – नॉन-कव्हर्ड वैद्यकीय खर्च',
    ex_scenario_partial_claim_example2_claimed: '₹90,000',
    ex_scenario_partial_claim_example2_settled: '₹65,000',
    ex_scenario_partial_claim_example2_solution: 'हॉस्पिटल बिलमध्ये काही वस्तू जसे की वैद्यकीय उपकरणे किंवा विशेष सेवा समाविष्ट होत्या ज्या पॉलिसीमध्ये कव्हर नव्हत्या. या खर्चांना दावा रकमेतीलून वजा करण्यात आले.',

    ex_scenario_partial_claim_example3_title: 'उदाहरण 3 – मोटर विम्यातील मूल्यह्रास',
    ex_scenario_partial_claim_example3_claimed: '₹70,000',
    ex_scenario_partial_claim_example3_settled: '₹50,000',
    ex_scenario_partial_claim_example3_solution: 'वाहन अपघातानंतर दुरुस्ती खर्च ₹70,000 होता. विमा कंपनी फक्त ₹50,000 देते कारण काही भागांवर मूल्यह्रास लागू होतो.',

    ex_scenario_partial_claim_example4_title: 'उदाहरण 4 – पॉलिसी उप-सीमिती (Sub-Limits)',
    ex_scenario_partial_claim_example4_claimed: '₹90,000',
    ex_scenario_partial_claim_example4_settled: '₹60,000',
    ex_scenario_partial_claim_example4_solution: 'पॉलिसीमध्ये काही उपचारांसाठी विशिष्ट मर्यादा होत्या. जरी एकूण बिल ₹90,000 होते, तरी विमा कंपनी फक्त ₹60,000 मंजूर करते कारण त्या उपचारासाठी कमाल मर्यादा निश्चित होती.',

    ex_scenario_partial_claim_example_head1: 'दावा केलेली रक्कम:',
    ex_scenario_partial_claim_example_head2: 'मंजूर सेटलमेंट रक्कम:',

    partial_claim_calculation_title: 'दावा सेटलमेंट गणना समजून घेणे',

    partial_claim_calculation_description: 'अंतिम सेटलमेंट रक्कम ठरवणारे महत्त्वाचे घटक',

    partial_claim_calculation_item1: 'कव्हरेज मर्यादा',
    partial_claim_calculation_desc1: 'विशिष्ट उपचार किंवा नुकसानीसाठी कमाल मर्यादा.',

    partial_claim_calculation_item2: 'कपाती',
    partial_claim_calculation_desc2: 'पॉलिसीधारकाने स्वतः भरायची रक्कम.',

    partial_claim_calculation_item3: 'मूल्यह्रास',
    partial_claim_calculation_desc3: 'काही मालमत्ता किंवा भागांच्या किमतीत घट.',

    partial_claim_calculation_item4: 'अपवाद (Exclusions)',
    partial_claim_calculation_desc4: 'पॉलिसीमध्ये समाविष्ट नसलेल्या सेवा किंवा उपचार.',

    why_choose_partial_claim_title: 'यशोदा टोटल सोल्यूशन का निवडावे?',

    why_choose_partial_claim_description: 'दावा प्रक्रिया मार्गदर्शनासाठी तज्ज्ञ सहाय्य',

    why_choose_partial_claim_item1: 'तज्ज्ञ टीम',
    why_choose_partial_claim_desc1: 'विमा दावा नकार तक्रारी आणि वाद हाताळण्याचा अनेक वर्षांचा अनुभव.',

    why_choose_partial_claim_item2: 'संपूर्ण कागदपत्र तयारी',
    why_choose_partial_claim_desc2: 'आम्ही सर्व आवश्यक कागदपत्रे, नोटिसा आणि तक्रार पत्रे तयार करतो.',

    why_choose_partial_claim_item3: 'कायदेशीर सहाय्य',
    why_choose_partial_claim_desc3: 'आवश्यकतेनुसार कायदेशीर नोटीस तयार करणे आणि ओम्बड्समन तक्रार दाखल करणे.',

    why_choose_partial_claim_item4: 'उच्च यशदर',
    why_choose_partial_claim_desc4: 'शेकडो ग्राहकांना भरपाई आणि पॉलिसी समाधान मिळवून देण्यात मदत केली आहे.',

    faq_partial_claim_title: 'वारंवार विचारले जाणारे प्रश्न',

    faq_partial_claim_description: 'आंशिक दावा सेटलमेंटशी संबंधित सामान्य प्रश्न',

    faq_partial_claim_q1: 'शॉर्ट क्लेम सेटलमेंट म्हणजे काय?',
    faq_partial_claim_a1: 'जेव्हा विमा कंपनी दावा मंजूर करते पण पॉलिसी मर्यादा, कपाती किंवा अपवादांमुळे फक्त काही भागाची रक्कम देते, तेव्हा त्याला शॉर्ट सेटलमेंट म्हणतात.',

    faq_partial_claim_q2: 'विमा कंपन्या दावा रक्कम का कमी करतात?',
    faq_partial_claim_a2: 'रक्कम पॉलिसी मर्यादा, अपवाद, मूल्यह्रास, कपाती किंवा नॉन-कव्हर्ड खर्चांमुळे कमी केली जाऊ शकते.',

    faq_partial_claim_q3: 'सेटलमेंट रक्कम हॉस्पिटल बिलपेक्षा वेगळी असू शकते का?',
    faq_partial_claim_a3: 'होय, मंजूर रक्कम पॉलिसी अटी, कव्हरेज मर्यादा आणि कव्हर केलेल्या सेवांवर अवलंबून असते.',

    faq_partial_claim_q4: 'पॉलिसीधारक सेटलमेंट गणना कशी समजू शकतात?',
    faq_partial_claim_a4: 'पॉलिसी दस्तऐवज आणि सेटलमेंट अहवाल पाहून कपाती आणि कारणे समजता येतात.',

    cta_partial_claim_title: 'अपेक्षेपेक्षा कमी दावा रक्कम मिळाली आहे का?',

    cta_partial_claim_description: 'दावा रक्कम कशी गणना केली गेली हे समजून घेतल्यास पॉलिसीधारकांना परिस्थितीचे मूल्यांकन करता येते आणि त्यांच्या उपलब्ध पर्यायांचा विचार करता येतो. अधिक माहितीसाठी यशोदा टोटल सोल्यूशनशी संपर्क साधा.',

    cta_partial_claim_description2: 'मोफत सल्ला घ्या',

    cta_partial_claim_button: 'आता कॉल करा',

    //--------------------------------------------------------------------------------Partial Claim Settlement Page Ends

    //Health Reimbursement Page Marathi ------------------------------------------------------------------------------------


    health_claim_title_backlink1: 'मुख्यपृष्ठ',
    health_claim_title_backlink2: 'आरोग्य दावा परतावा',

    health_claim_title: 'आरोग्य दावा परतावा सहाय्य',

    health_claim_description: 'परतावा दावा प्रक्रिया समजून घेणे आणि पॉलिसीधारकांनी वैद्यकीय दावा सादरीकरण प्रभावीपणे कसे व्यवस्थापित करावे हे जाणून घेणे. आरोग्य विमा परतावा दावे तेव्हा होतात जेव्हा पॉलिसीधारक प्रथम वैद्यकीय खर्च स्वतः भरतात आणि नंतर त्या खर्चाची परतफेड मिळवण्यासाठी विमा कंपनीकडे बिले सादर करतात.',

    what_health_claim_title: 'आरोग्य दावा परतावा म्हणजे काय?',

    what_health_claim_description: 'आरोग्य दावा परतावा ही एक प्रक्रिया आहे ज्यामध्ये पॉलिसीधारक हॉस्पिटलमध्ये वैद्यकीय खर्च स्वतः भरतो आणि नंतर पात्र रकमेची परतफेड मिळवण्यासाठी विमा कंपनीकडे दावा सादर करतो.',

    what_health_claim_description1: 'कॅशलेस हॉस्पिटलायझेशनच्या विपरीत,',

    what_health_claim_description2: 'परतावा दाव्यांसाठी पॉलिसीधारकांना सविस्तर कागदपत्रे सादर करावी लागतात',

    what_health_claim_description3: 'जसे की हॉस्पिटल बिले, वैद्यकीय अहवाल, प्रिस्क्रिप्शन आणि डिस्चार्ज सारांश.',

    what_health_claim_description4: 'या प्रक्रियेदरम्यान अनेक ग्राहकांना अडचणींचा सामना करावा लागतो कारण कागदपत्रांची आवश्यकता गुंतागुंतीची असू शकते आणि दावा पडताळणी प्रक्रियेस वेळ लागू शकतो.',

    what_health_claim_common_reasons: 'सामान्य आवश्यकता खालीलप्रमाणे आहेत:',
    what_health_claim_common_reasons1: '• हॉस्पिटल बिले आणि इनव्हॉइस',
    what_health_claim_common_reasons2: '• डिस्चार्ज सारांश आणि वैद्यकीय अहवाल',
    what_health_claim_common_reasons3: '• वैद्यकीय प्रिस्क्रिप्शन',
    what_health_claim_common_reasons4: '• पूर्ण भरलेला दावा फॉर्म',
    what_health_claim_common_reasons5: '• ओळखपत्र आणि पॉलिसी तपशील',

    common_challenges_health_claim_title: 'परतावा दावा प्रक्रियेमधील सामान्य अडचणी',

    common_challenges_health_claim_description: 'परतावा दावा करताना पॉलिसीधारकांना भेडसावणाऱ्या समस्या',

    common_challenges_health_claim_item1: 'कागदपत्रांची कमतरता',
    common_challenges_health_claim_desc1: 'यशस्वी दावा सादर करण्यासाठी कोणती कागदपत्रे आवश्यक आहेत याबाबत गोंधळ.',

    common_challenges_health_claim_item2: 'चुकीचा दावा फॉर्म',
    common_challenges_health_claim_desc2: 'अपूर्ण किंवा चुकीच्या पद्धतीने भरलेले दावा फॉर्म ज्यामुळे प्रक्रिया विलंबित होते.',

    common_challenges_health_claim_item3: 'कव्हरेजबाबत संभ्रम',
    common_challenges_health_claim_desc3: 'कोणते खर्च पॉलिसी अंतर्गत कव्हर होतात याबाबत अनिश्चितता.',

    common_challenges_health_claim_item4: 'पडताळणीतील विलंब',
    common_challenges_health_claim_desc4: 'कागदपत्र पडताळणी प्रक्रियेमुळे वाढलेला प्रक्रिया कालावधी.',

    common_challenges_health_claim_item5: 'अपूर्ण वैद्यकीय नोंदी',
    common_challenges_health_claim_desc5: 'हॉस्पिटलमधून वैद्यकीय अहवाल किंवा डिस्चार्ज सारांश उपलब्ध नसणे.',

    common_challenges_health_claim_item6: 'परतावा रकमेतील फरक',
    common_challenges_health_claim_desc6: 'दावा केलेली रक्कम आणि मंजूर परतावा रक्कम यामधील फरक.',

    what_happens_after_health_claim_title: 'परतावा प्रकरणांमध्ये काय घडते',

    what_happens_after_health_claim_description: 'परतावा दावा पडताळणी प्रक्रिया समजून घेणे',

    what_happens_health_claim_item1: 'रुग्ण प्रथम पैसे भरतो',
    what_happens_health_claim_desc1: 'पॉलिसीधारक उपचाराच्या वेळी सर्व वैद्यकीय खर्च थेट हॉस्पिटलला भरतो.',

    what_happens_health_claim_item2: 'कागदपत्र संकलन',
    what_happens_health_claim_desc2: 'उपचारानंतर सर्व संबंधित बिले, अहवाल आणि डिस्चार्ज सारांश गोळा केले जातात.',

    what_happens_health_claim_item3: 'विमा पडताळणी',
    what_happens_health_claim_desc3: 'विमा कंपनी कागदपत्रांची पडताळणी करते आणि प्रक्रिया सुरू करण्यापूर्वी पॉलिसी पात्रता तपासते.',

    why_choose_health_claim_title: 'यशोदा टोटल सोल्यूशन का निवडावे?',

    why_choose_health_claim_description: 'परतावा दावा मार्गदर्शनासाठी तज्ज्ञ सहाय्य',

    why_choose_health_claim_item1: 'तज्ज्ञ टीम',
    why_choose_health_claim_desc1: 'विमा दावा नकार तक्रारी आणि वाद हाताळण्याचा अनेक वर्षांचा अनुभव.',

    why_choose_health_claim_item2: 'संपूर्ण कागदपत्र तयारी',
    why_choose_health_claim_desc2: 'आम्ही सर्व आवश्यक कागदपत्रे, नोटिसा आणि तक्रार पत्रे तयार करतो.',

    why_choose_health_claim_item3: 'कायदेशीर सहाय्य',
    why_choose_health_claim_desc3: 'आवश्यकतेनुसार कायदेशीर नोटीस तयार करणे आणि ओम्बड्समन तक्रार दाखल करणे.',

    why_choose_health_claim_item4: 'उच्च यशदर',
    why_choose_health_claim_desc4: 'शेकडो ग्राहकांना भरपाई आणि पॉलिसी निपटारा मिळवून देण्यात मदत केली आहे.',

    process_flow_health_claim_title: 'आमची 5-टप्प्यांची परतावा सहाय्य प्रक्रिया',

    process_flow_health_claim_description: 'तुमच्या परतावा दाव्यासाठी सोपी आणि संरचित मार्गदर्शन प्रक्रिया',

    process_flow_health_claim_item1: 'कागदपत्रांची यादी (चेकलिस्ट)',
    process_flow_health_claim_desc1: 'आम्ही तुमच्या परतावा दाव्यासाठी आवश्यक सर्व कागदपत्रांची संपूर्ण यादी प्रदान करतो.',

    process_flow_health_claim_item2: 'कागदपत्र पुनरावलोकन',
    process_flow_health_claim_desc2: 'आम्ही तुमची सर्व वैद्यकीय बिले, अहवाल आणि डिस्चार्ज सारांश तपासतो आणि त्यांची पूर्णता सुनिश्चित करतो.',

    process_flow_health_claim_item3: 'दावा फॉर्म सहाय्य',
    process_flow_health_claim_desc3: 'आम्ही तुम्हाला सर्व आवश्यक पॉलिसी तपशीलांसह दावा फॉर्म योग्यरित्या भरण्यास मदत करतो.',

    process_flow_health_claim_item4: 'सादरीकरण सहाय्य',
    process_flow_health_claim_desc4: 'आम्ही तुम्हाला दावा विमा कंपनीकडे योग्य पद्धतीने कसा सादर करावा याबाबत मार्गदर्शन करतो.',

    process_flow_health_claim_item5: 'फॉलो-अप आणि ट्रॅकिंग',
    process_flow_health_claim_desc5: 'आम्ही तुमच्या दाव्याची स्थिती तपासण्यास मदत करतो आणि परतावा प्रक्रिया पूर्ण होईपर्यंत पाठपुरावा करतो.',

    ex_scenario_health_claim_title: 'प्रत्यक्ष जीवनातील परतावा उदाहरणे',

    ex_scenario_health_claim_description: 'ज्या सामान्य परिस्थितींमध्ये आम्ही मदत करतो',

    ex_scenario_health_claim_example1_title: 'उदाहरण 1 – आपत्कालीन हॉस्पिटलायझेशन',
    ex_scenario_health_claim_example1_problem: 'रुग्ण अशा हॉस्पिटलमध्ये दाखल होतो जिथे कॅशलेस विमा सुविधा उपलब्ध नाही.',
    ex_scenario_health_claim_example1_reality: 'रुग्ण संपूर्ण हॉस्पिटल बिल आधी भरतो आणि नंतर परताव्यासाठी दावा करतो.',
    ex_scenario_health_claim_example1_solution: 'आम्ही सर्व कागदपत्रे व्यवस्थित केली आणि पूर्ण दावा सादर केला; 3 आठवड्यांत परतावा मिळाला.',

    ex_scenario_health_claim_example2_title: 'उदाहरण 2 – वैद्यकीय कागदपत्रांची कमतरता',
    ex_scenario_health_claim_example2_problem: 'पॉलिसीधारक परतावा दावा सादर करतो पण डिस्चार्ज सारांश जोडण्यास विसरतो.',
    ex_scenario_health_claim_example2_reality: 'आवश्यक कागदपत्र सादर होईपर्यंत विमा कंपनी दावा प्रक्रिया विलंबित करते.',
    ex_scenario_health_claim_example2_solution: 'आम्ही आवश्यक कागदपत्र ओळखले, ते हॉस्पिटलमधून मिळवले आणि दावा यशस्वीरित्या पुन्हा सादर केला.',

    ex_scenario_health_claim_example3_title: 'उदाहरण 3 – नेटवर्कच्या बाहेरील हॉस्पिटलमध्ये उपचार',
    ex_scenario_health_claim_example3_problem: 'रुग्ण विमा कंपनीच्या नेटवर्कमध्ये नसलेल्या हॉस्पिटलमध्ये उपचार घेतो.',
    ex_scenario_health_claim_example3_reality: 'कॅशलेस सुविधा उपलब्ध नसल्यामुळे रुग्ण आधी पैसे भरतो आणि नंतर परताव्यासाठी दावा करतो.',
    ex_scenario_health_claim_example3_solution: 'आम्ही संपूर्ण कागदपत्रांमध्ये मदत केली; दावा पॉलिसी मर्यादेत मंजूर झाला.',

    ex_scenario_health_claim_example4_title: 'उदाहरण 4 – चुकीचा दावा फॉर्म',
    ex_scenario_health_claim_example4_problem: 'परतावा दावा चुकीच्या पॉलिसी तपशीलांसह सादर केला जातो.',
    ex_scenario_health_claim_example4_reality: 'सुधारित फॉर्म सादर होईपर्यंत दावा प्रक्रियेत विलंब होतो.',
    ex_scenario_health_claim_example4_solution: 'आम्ही फॉर्म योग्य केला आणि पुन्हा सादर करण्यात मदत केली; दावा सुरळीतपणे प्रक्रिया झाला.',

    ex_scenario_health_claim_example_head1: '⏱️ समस्या:',
    ex_scenario_health_claim_example_head2: '📋 वास्तविकता:',
    ex_scenario_health_claim_example_head3: '✅ आमचे समाधान:',

    faq_health_claim_title: 'वारंवार विचारले जाणारे प्रश्न',

    faq_health_claim_description: 'परतावा दाव्यांबाबत सामान्य प्रश्न',

    faq_health_claim_q1: 'आरोग्य विमा परतावा दावा म्हणजे काय?',
    faq_health_claim_a1: 'परतावा दावा तेव्हा केला जातो जेव्हा पॉलिसीधारक प्रथम वैद्यकीय खर्च भरतो आणि नंतर पात्र रकमेच्या परतफेडीसाठी विमा कंपनीकडे बिले सादर करतो.',

    faq_health_claim_q2: 'परतावा दाव्यासाठी कोणती कागदपत्रे आवश्यक असतात?',
    faq_health_claim_a2: 'साधारणपणे हॉस्पिटल बिले, डिस्चार्ज सारांश, वैद्यकीय अहवाल, प्रिस्क्रिप्शन, भरलेला दावा फॉर्म, ओळखपत्र आणि पॉलिसी तपशील आवश्यक असतात.',

    faq_health_claim_q3: 'परतावा दावे प्रक्रिया होण्यास वेळ का लागतो?',
    faq_health_claim_a3: 'कागदपत्र पडताळणी, पॉलिसी पात्रता तपासणी आणि वैद्यकीय तपशीलांचे पुनरावलोकन यामुळे वेळ लागू शकतो.',

    faq_health_claim_q4: 'हॉस्पिटलमधून डिस्चार्ज झाल्यानंतर परतावा दावा सादर करता येतो का?',
    faq_health_claim_a4: 'होय, सर्व आवश्यक कागदपत्रे उपलब्ध झाल्यानंतर परतावा दावा सादर केला जातो.',

    cta_health_claim_title: 'तुमच्या परतावा दाव्याबाबत संभ्रम आहे का?',

    cta_health_claim_description: 'दस्तऐवज आणि दावा प्रक्रिया समजून घेतल्यास पॉलिसीधारकांना परतावा प्रक्रिया अधिक आत्मविश्वासाने हाताळता येते. तज्ज्ञ सहाय्यासाठी यशोदा टोटल सोल्यूशनशी संपर्क साधा.',

    cta_health_claim_description2: 'मोफत सल्ला घ्या',

    cta_health_claim_button: 'आता कॉल करा',

    //--------------------------------------------------------------------------------Health Reimbursement Page Ends

    //PMSBY Page Marathi ------------------------------------------------------------------------------------


    pmsby_title_backlink1: 'मुख्यपृष्ठ',
    pmsby_title_backlink2: 'PMSBY',

    pmsby_title: 'प्रधानमंत्री सुरक्षा विमा योजना (PMSBY) सहाय्य',

    pmsby_description: 'PMSBY अपघात विमा योजनेचे समजून घेणे आणि लाभार्थ्यांनी दावा प्रक्रिया कशी पार पाडावी हे जाणून घेणे. PMSBY ही सरकार समर्थित अपघात विमा योजना आहे जी अतिशय परवडणाऱ्या प्रीमियमवर आर्थिक संरक्षण प्रदान करते. या योजनेअंतर्गत उपलब्ध असलेल्या विमा लाभांचा लाभ घेऊ इच्छिणाऱ्या लाभार्थ्यांसाठी प्रक्रिया आणि आवश्यक अटी समजून घेणे अत्यंत महत्त्वाचे आहे.',

    what_pmsby_title: 'प्रधानमंत्री सुरक्षा विमा योजना म्हणजे काय?',

    what_pmsby_description: 'प्रधानमंत्री सुरक्षा विमा योजना (PMSBY) ही भारत सरकारने सुरू केलेली एक अपघात विमा योजना आहे जी अपघाती मृत्यू किंवा अपंगत्वाच्या परिस्थितीत आर्थिक संरक्षण प्रदान करण्यासाठी तयार करण्यात आली आहे.',

    what_pmsby_description1: 'ही योजना प्रदान करते',

    what_pmsby_description2: 'किमान वार्षिक प्रीमियमवर कव्हरेज',

    what_pmsby_description3: 'आणि ती पॉलिसीधारकाच्या बँक खात्याशी जोडलेली असते. अनेक व्यक्ती आपल्या बँकांमार्फत या योजनेत नोंदणी करतात, परंतु अनेकदा त्यांना दावा प्रक्रिया किंवा आवश्यक कागदपत्रांची पूर्ण माहिती नसते.',

    what_pmsby_description4: 'अपघात झाल्यानंतर, लाभार्थ्यांना दावा सादर करण्यासाठी आवश्यक टप्पे समजून घेणे किंवा आवश्यक कागदपत्रे गोळा करणे कठीण जाऊ शकते.',

    what_pmsby_key_features: 'मुख्य वैशिष्ट्ये:',
    what_pmsby_key_feature1: '• परवडणारा वार्षिक प्रीमियम',
    what_pmsby_key_feature2: '• अपघाती मृत्यू किंवा अपंगत्वासाठी कव्हरेज',
    what_pmsby_key_feature3: '• बँक खात्यामार्फत नोंदणी',
    what_pmsby_key_feature4: '• सरकार समर्थित योजना',
    what_pmsby_key_feature5: '• पात्र वयोगटासाठी उपलब्ध',

    common_challenges_pmsby_title: 'PMSBY दावा प्रक्रियेमधील सामान्य अडचणी',

    common_challenges_pmsby_description: 'दावा सादर करताना लाभार्थ्यांना भेडसावणाऱ्या समस्या',

    common_challenges_pmsby_item1: 'जागरूकतेचा अभाव',
    common_challenges_pmsby_desc1: 'लाभार्थ्यांना संबंधित व्यक्ती PMSBY योजनेत नोंदणीकृत होती याची माहिती नसते.',

    common_challenges_pmsby_item2: 'पात्रतेबाबत संभ्रम',
    common_challenges_pmsby_desc2: 'PMSBY अंतर्गत अपघात दाव्यांसाठी पात्रतेच्या निकषांबाबत अनिश्चितता.',

    common_challenges_pmsby_item3: 'कागदपत्रांची कमतरता',
    common_challenges_pmsby_desc3: 'आवश्यक अपघात अहवाल आणि पूरक कागदपत्रे गोळा करण्यात अडचणी येतात.',

    common_challenges_pmsby_item4: 'प्रक्रियेबाबत अनिश्चितता',
    common_challenges_pmsby_desc4: 'दावा सादरीकरण आणि पडताळणी प्रक्रियेबाबत समज नसणे.',

    common_challenges_pmsby_item5: 'बँक समन्वयातील अडचणी',
    common_challenges_pmsby_desc5: 'दावा सुरू करण्यासाठी बँकेशी कसा संपर्क साधावा याबाबत गोंधळ.',

    common_challenges_pmsby_item6: 'पडताळणीतील विलंब',
    common_challenges_pmsby_desc6: 'अपूर्ण किंवा चुकीच्या कागदपत्रांमुळे प्रक्रिया विलंबित होणे.',

    what_happens_after_pmsby_title: 'PMSBY दावा प्रकरणांमध्ये काय घडते',

    what_happens_after_pmsby_description: 'दावा शोध आणि सादरीकरण प्रक्रिया समजून घेणे',

    what_happens_pmsby_item1: 'कव्हरेजची माहिती मिळणे',
    what_happens_pmsby_desc1: 'अपघात झाल्यानंतरच कुटुंबीयांना PMSBY अंतर्गत नोंदणी झाल्याची माहिती मिळते.',

    what_happens_pmsby_item2: 'कागदपत्र संकलन',
    what_happens_pmsby_desc2: 'लाभार्थ्यांनी अपघात अहवाल, ओळखपत्र आणि दावा फॉर्म गोळा करणे आवश्यक असते.',

    what_happens_pmsby_item3: 'बँक आणि विमा पडताळणी',
    what_happens_pmsby_desc3: 'बँक आणि विमा कंपनी कागदपत्रांची पडताळणी करून पात्रता आणि कव्हरेजची खात्री करतात.',

    why_choose_pmsby_title: 'यशोदा टोटल सोल्यूशन का निवडावे?',

    why_choose_pmsby_description: 'PMSBY दावा सहाय्यासाठी तज्ज्ञ मार्गदर्शन',

    why_choose_pmsby_item1: 'तज्ज्ञ टीम',
    why_choose_pmsby_desc1: 'विमा दावा नकार तक्रारी आणि वाद हाताळण्याचा अनेक वर्षांचा अनुभव.',

    why_choose_pmsby_item2: 'संपूर्ण कागदपत्र तयारी',
    why_choose_pmsby_desc2: 'आम्ही सर्व आवश्यक कागदपत्रे, नोटिसा आणि तक्रार पत्रे तयार करतो.',

    why_choose_pmsby_item3: 'कायदेशीर सहाय्य',
    why_choose_pmsby_desc3: 'आवश्यकतेनुसार कायदेशीर नोटीस तयार करणे आणि ओम्बड्समन तक्रार दाखल करणे.',

    why_choose_pmsby_item4: 'उच्च यशदर',
    why_choose_pmsby_desc4: 'शेकडो ग्राहकांना भरपाई आणि पॉलिसी निपटारा मिळवून देण्यात मदत केली आहे.',

    process_flow_pmsby_title: 'आमची 5-टप्प्यांची PMSBY दावा सहाय्य प्रक्रिया',

    process_flow_pmsby_description: 'PMSBY लाभार्थ्यांसाठी सुलभ मार्गदर्शन',

    process_flow_pmsby_item1: 'नोंदणी पडताळणी',
    process_flow_pmsby_desc1: 'आम्ही व्यक्ती PMSBY अंतर्गत बँक खात्यामार्फत नोंदणीकृत होती का हे पडताळण्यास मदत करतो.',

    process_flow_pmsby_item2: 'पात्रता मूल्यांकन',
    process_flow_pmsby_desc2: 'आम्ही अपघाताचे तपशील तपासून PMSBY कव्हरेज अंतर्गत पात्रता निश्चित करतो.',

    process_flow_pmsby_item3: 'कागदपत्र संकलन',
    process_flow_pmsby_desc3: 'आम्ही अपघात अहवाल आणि ओळखपत्रांसह सर्व आवश्यक कागदपत्रे गोळा करण्यात मदत करतो.',

    process_flow_pmsby_item4: 'दावा फॉर्म तयारी',
    process_flow_pmsby_desc4: 'आम्ही अचूक माहितीच्या आधारे दावा फॉर्म योग्यरित्या भरून देण्यात मदत करतो.',

    process_flow_pmsby_item5: 'बँक सादरीकरण आणि पाठपुरावा',
    process_flow_pmsby_desc5: 'आम्ही तुम्हाला बँकेत दावा सादर करण्याच्या प्रक्रियेत मार्गदर्शन करतो आणि प्रक्रिया पूर्ण होईपर्यंत त्याचा मागोवा घेतो.',

    ex_scenario_pmsby_title: 'प्रत्यक्ष जीवनातील PMSBY दावा उदाहरणे',

    ex_scenario_pmsby_description: 'ज्या सामान्य परिस्थितींमध्ये आम्ही मदत करतो',

    ex_scenario_pmsby_example1_title: 'उदाहरण 1 – कुटुंबाला योजनेची माहिती नसणे',
    ex_scenario_pmsby_example1_problem: 'एक बँक ग्राहक स्वयंचलित नोंदणीद्वारे PMSBY योजनेत सहभागी झाला आहे.',
    ex_scenario_pmsby_example1_reality: 'अपघातानंतर कुटुंबाला समजते की संबंधित व्यक्ती कव्हर होती, पण दावा कसा सुरू करायचा याबाबत त्यांना माहिती नसते.',
    ex_scenario_pmsby_example1_solution: 'आम्ही नोंदणी पडताळली, प्रक्रिया समजावून सांगितली आणि पूर्ण दावा यशस्वीरित्या सादर करण्यात मदत केली.',

    ex_scenario_pmsby_example2_title: 'उदाहरण 2 – अपघात कागदपत्रांची कमतरता',
    ex_scenario_pmsby_example2_problem: 'एक लाभार्थी PMSBY अंतर्गत दावा सादर करण्याचा प्रयत्न करतो.',
    ex_scenario_pmsby_example2_reality: 'आवश्यक अपघात अहवाल आणि पूरक कागदपत्रे अपूर्ण असल्यामुळे दावा प्रक्रियेत अडचणी येतात.',
    ex_scenario_pmsby_example2_solution: 'आम्ही संबंधित अधिकाऱ्यांकडून आवश्यक अपघात अहवाल मिळवून दिले आणि दस्तऐवजीकरण पूर्ण केले.',

    ex_scenario_pmsby_example3_title: 'उदाहरण 3 – दावा सादरीकरणाबाबत संभ्रम',
    ex_scenario_pmsby_example3_problem: 'अपघातग्रस्त व्यक्तीचे कुटुंब विमा लाभ मिळवण्यासाठी बँकेत संपर्क साधते.',
    ex_scenario_pmsby_example3_reality: 'त्यांना PMSBY दावा सादर करण्यासाठी आवश्यक कागदपत्रे आणि फॉर्म याबाबत स्पष्ट माहिती नसते.',
    ex_scenario_pmsby_example3_solution: 'आम्ही संपूर्ण चेकलिस्ट दिली, फॉर्म भरायला मदत केली आणि बँक सादरीकरण प्रक्रियेत मार्गदर्शन केले.',

    ex_scenario_pmsby_example4_title: 'उदाहरण 4 – पात्रता स्पष्ट करणे',
    ex_scenario_pmsby_example4_problem: 'एक लाभार्थी PMSBY दावा दाखल करू इच्छितो पण पात्रतेबाबत अनिश्चित आहे.',
    ex_scenario_pmsby_example4_reality: 'त्याला हे समजून घ्यायचे असते की अपघात योजनेच्या अटींमध्ये बसतो की नाही.',
    ex_scenario_pmsby_example4_solution: 'आम्ही अपघाताचे तपशील तपासले, पात्रता निश्चित केली आणि दावा सादरीकरणाची प्रक्रिया पुढे नेली.',

    ex_scenario_pmsby_example_head1: '⏱️ समस्या:',
    ex_scenario_pmsby_example_head2: '📋 वास्तविकता:',
    ex_scenario_pmsby_example_head3: '✅ आमचे समाधान:',

    faq_pmsby_title: 'वारंवार विचारले जाणारे प्रश्न',

    faq_pmsby_description: 'PMSBY संदर्भातील सामान्य प्रश्न',

    faq_pmsby_q1: 'प्रधानमंत्री सुरक्षा विमा योजना (PMSBY) म्हणजे काय?',
    faq_pmsby_a1: 'PMSBY ही सरकारद्वारे समर्थित अपघात विमा योजना आहे जी परवडणाऱ्या वार्षिक प्रीमियमवर अपघाती मृत्यू किंवा अपंगत्वासाठी आर्थिक संरक्षण प्रदान करते.',

    faq_pmsby_q2: 'PMSBY मध्ये कोण सहभागी होऊ शकतो?',
    faq_pmsby_a2: 'पात्र वयोगटातील (साधारणपणे 18-70 वर्षे) बचत बँक खाते असलेले व्यक्ती आपल्या बँकेमार्फत या योजनेत सहभागी होऊ शकतात.',

    faq_pmsby_q3: 'PMSBY अंतर्गत कोणत्या प्रकारच्या घटना कव्हर केल्या जातात?',
    faq_pmsby_a3: 'ही योजना सामान्यतः अपघाती मृत्यू आणि काही प्रकारच्या कायमस्वरूपी किंवा अंशतः अपंगत्वासाठी कव्हरेज प्रदान करते, जे योजनेच्या अटींमध्ये नमूद केलेले असते.',

    faq_pmsby_q4: 'लाभार्थ्यांना कसे कळेल की कोणीतरी PMSBY मध्ये नोंदणीकृत होते?',
    faq_pmsby_a4: 'नोंदणी सहसा बँक खात्याशी जोडलेली असते. लाभार्थी संबंधित बँकेत चौकशी करून PMSBY कव्हरेजची खात्री करू शकतात.',

    cta_pmsby_title: 'PMSBY दावे समजून घेण्यासाठी मदत हवी आहे का?',

    cta_pmsby_description: 'योजनेच्या अटी आणि कागदपत्र प्रक्रिया समजून घेतल्यास लाभार्थ्यांना दावा प्रक्रिया अधिक आत्मविश्वासाने पार पाडता येते. PMSBY दाव्यांसाठी तज्ज्ञ सहाय्यासाठी यशोदा टोटल सोल्यूशनशी संपर्क साधा.',

    cta_pmsby_description2: 'मोफत सल्ला घ्या',

    cta_pmsby_button: 'आता कॉल करा',

    //--------------------------------------------------------------------------------PMSBY Page Ends

    //PMJJBY Page Marathi ------------------------------------------------------------------------------------


    pmjjby_title_backlink1: 'मुख्यपृष्ठ',
    pmjjby_title_backlink2: 'PMJJBY',

    pmjjby_title: 'प्रधानमंत्री जीवन ज्योती विमा योजना (PMJJBY) सहाय्य',

    pmjjby_description: 'PMJJBY जीवन विमा योजनेचे समजून घेणे आणि लाभार्थ्यांनी दावा प्रक्रिया कशी पार पाडावी हे जाणून घेणे. PMJJBY ही सरकार समर्थित जीवन विमा योजना आहे जी पात्र व्यक्तींना परवडणाऱ्या दरात जीवन विमा कव्हरेज प्रदान करते. या योजनेचे कार्य कसे चालते हे समजून घेणे त्या लाभार्थ्यांसाठी महत्त्वाचे आहे जे विमा लाभ प्राप्त करू इच्छितात.',

    what_pmjjby_title: 'प्रधानमंत्री जीवन ज्योती विमा योजना म्हणजे काय?',

    what_pmjjby_description: 'प्रधानमंत्री जीवन ज्योती विमा योजना (PMJJBY) ही भारत सरकारने सुरू केलेली जीवन विमा योजना आहे जी पात्र नागरिकांना परवडणाऱ्या दरात जीवन विमा कव्हरेज प्रदान करण्यासाठी तयार करण्यात आली आहे.',

    what_pmjjby_description1: 'ही योजना सामान्यतः',

    what_pmjjby_description2: 'बचत बँक खात्याशी जोडलेली असते',

    what_pmjjby_description3: ', ज्यामुळे व्यक्तींना त्यांच्या बँकेमार्फत सहजपणे नोंदणी करता येते. जरी ही योजना महत्त्वाचे आर्थिक संरक्षण प्रदान करते, तरी लाभार्थ्यांना कधीकधी दावा प्रक्रिया आणि आवश्यक कागदपत्रे समजून घेण्यात अडचणी येऊ शकतात.',

    what_pmjjby_description4: 'अनेक प्रसंगी, कुटुंबीय किंवा लाभार्थ्यांना या पॉलिसीबद्दल माहिती केवळ एखादी दुर्दैवी घटना घडल्यानंतरच मिळते, ज्यामुळे दावा प्रक्रिया पुढे कशी सुरू करावी याबाबत अनिश्चितता निर्माण होऊ शकते.',

    what_pmjjby_key_features: 'PMJJBY ची प्रमुख वैशिष्ट्ये:',
    what_pmjjby_key_feature1: '• जीवन विमा कव्हरेजसाठी परवडणारा वार्षिक प्रीमियम',
    what_pmjjby_key_feature2: '• बचत बँक खात्यामार्फत नोंदणी',
    what_pmjjby_key_feature3: '• सरकार समर्थित जीवन विमा योजना',
    what_pmjjby_key_feature4: '• पात्र वयोगटांसाठी कव्हरेज',
    what_pmjjby_key_feature5: '• सोपी नूतनीकरण प्रक्रिया',

    common_challenges_pmjjby_title: 'PMJJBY दावा प्रक्रियेमधील सामान्य अडचणी',

    common_challenges_pmjjby_description: 'दावा सादर करताना लाभार्थ्यांना भेडसावणाऱ्या समस्या',

    common_challenges_pmjjby_item1: 'जागरूकतेचा अभाव',
    common_challenges_pmjjby_desc1: 'लाभार्थ्यांना हे माहित नसते की पॉलिसीधारक PMJJBY योजनेत नोंदणीकृत होता.',

    common_challenges_pmjjby_item2: 'पात्रतेबाबत संभ्रम',
    common_challenges_pmjjby_desc2: 'PMJJBY अंतर्गत दाव्यांसाठी पात्रतेच्या निकषांबाबत अनिश्चितता.',

    common_challenges_pmjjby_item3: 'कागदपत्रांची कमतरता',
    common_challenges_pmjjby_desc3: 'दावा सादर करण्यासाठी आवश्यक कागदपत्रे गोळा करण्यात अडचणी येतात.',

    common_challenges_pmjjby_item4: 'प्रक्रियेबाबत अनिश्चितता',
    common_challenges_pmjjby_desc4: 'दावा प्रक्रिया कशी सुरू करावी आणि पूर्ण करावी याबाबत गोंधळ.',

    common_challenges_pmjjby_item5: 'बँक प्रक्रिया समजण्यातील अडचणी',
    common_challenges_pmjjby_desc5: 'बँकेद्वारे दावा सादरीकरण आणि पडताळणी प्रक्रिया समजण्यात अडचणी येतात.',

    common_challenges_pmjjby_item6: 'पडताळणीतील विलंब',
    common_challenges_pmjjby_desc6: 'अपूर्ण किंवा चुकीच्या कागदपत्रांमुळे प्रक्रिया विलंबित होणे.',

    what_happens_after_pmjjby_title: 'PMJJBY दावा प्रकरणांमध्ये काय घडते',

    what_happens_after_pmjjby_description: 'दावा शोध आणि सादरीकरण प्रक्रिया समजून घेणे',

    what_happens_pmjjby_item1: 'कव्हरेजची माहिती मिळणे',
    what_happens_pmjjby_desc1: 'कुटुंबीयांना अनेकदा दुर्दैवी घटनेनंतरच PMJJBY अंतर्गत नोंदणी झाल्याची माहिती मिळते.',

    what_happens_pmjjby_item2: 'कागदपत्र संकलन',
    what_happens_pmjjby_desc2: 'लाभार्थ्यांनी मृत्यू प्रमाणपत्र आणि दावा फॉर्मसह आवश्यक कागदपत्रे गोळा करणे आवश्यक असते.',

    what_happens_pmjjby_item3: 'बँक आणि विमा पडताळणी',
    what_happens_pmjjby_desc3: 'बँक आणि विमा कंपनी कागदपत्रांची पडताळणी करून पात्रता निश्चित करतात आणि दावा प्रक्रिया पुढे नेतात.',

    why_choose_pmjjby_title: 'यशोदा टोटल सोल्यूशन का निवडावे?',

    why_choose_pmjjby_description: 'PMJJBY दावा सहाय्यासाठी तज्ज्ञ मार्गदर्शन',

    why_choose_pmjjby_item1: 'तज्ज्ञ टीम',
    why_choose_pmjjby_desc1: 'विमा दावा नकार तक्रारी आणि वाद हाताळण्याचा अनेक वर्षांचा अनुभव.',

    why_choose_pmjjby_item2: 'संपूर्ण कागदपत्र तयारी',
    why_choose_pmjjby_desc2: 'आम्ही सर्व आवश्यक कागदपत्रे, नोटिसा आणि तक्रार पत्रे तयार करतो.',

    why_choose_pmjjby_item3: 'कायदेशीर सहाय्य',
    why_choose_pmjjby_desc3: 'आवश्यकतेनुसार कायदेशीर नोटीस तयार करणे आणि ओम्बड्समन तक्रार दाखल करणे.',

    why_choose_pmjjby_item4: 'उच्च यशदर',
    why_choose_pmjjby_desc4: 'शेकडो ग्राहकांना भरपाई आणि पॉलिसी निपटारा मिळवून देण्यात मदत केली आहे.',

    process_flow_pmjjby_title: 'आमची 5-टप्प्यांची PMJJBY दावा सहाय्य प्रक्रिया',

    process_flow_pmjjby_description: 'PMJJBY लाभार्थ्यांसाठी सुलभ मार्गदर्शन',

    process_flow_pmjjby_item1: 'नोंदणी पडताळणी',
    process_flow_pmjjby_desc1: 'आम्ही पॉलिसीधारक PMJJBY अंतर्गत बँक खात्यामार्फत नोंदणीकृत होता का हे पडताळण्यास मदत करतो.',

    process_flow_pmjjby_item2: 'पात्रता मूल्यांकन',
    process_flow_pmjjby_desc2: 'आम्ही पॉलिसी तपशील तपासून पात्रता आणि सक्रिय कव्हरेज स्थिती निश्चित करतो.',

    process_flow_pmjjby_item3: 'कागदपत्र संकलन',
    process_flow_pmjjby_desc3: 'आम्ही मृत्यू प्रमाणपत्र आणि ओळखपत्रांसह सर्व आवश्यक कागदपत्रे गोळा करण्यात मदत करतो.',

    process_flow_pmjjby_item4: 'दावा फॉर्म तयारी',
    process_flow_pmjjby_desc4: 'आम्ही सर्व आवश्यक माहितीच्या आधारे दावा अर्ज फॉर्म अचूकपणे भरून देण्यात मदत करतो.',

    process_flow_pmjjby_item5: 'बँक सादरीकरण आणि पाठपुरावा',
    process_flow_pmjjby_desc5: 'आम्ही तुम्हाला बँकेत दावा सादर करण्याच्या प्रक्रियेत मार्गदर्शन करतो आणि प्रक्रिया पूर्ण होईपर्यंत त्याचा मागोवा घेतो.',

    ex_scenario_pmjjby_title: 'प्रत्यक्ष जीवनातील PMJJBY दावा उदाहरणे',

    ex_scenario_pmjjby_description: 'ज्या सामान्य परिस्थितींमध्ये आम्ही मदत करतो',

    ex_scenario_pmjjby_example1_title: 'उदाहरण 1 – कुटुंबाला जीवन विमा कव्हरेजबद्दल माहिती नसणे',
    ex_scenario_pmjjby_example1_problem: 'एक बँक ग्राहक स्वयंचलित नोंदणीद्वारे PMJJBY योजनेत सहभागी झाला आहे.',
    ex_scenario_pmjjby_example1_reality: 'पॉलिसीधारकाच्या निधनानंतर कुटुंबाला जीवन विमा कव्हरेजबद्दल माहिती मिळते, परंतु दावा प्रक्रिया कशी सुरू करावी याबाबत अनिश्चितता असते.',
    ex_scenario_pmjjby_example1_solution: 'आम्ही नोंदणी पडताळली, प्रक्रिया समजावून सांगितली आणि पूर्ण दावा यशस्वीरित्या सादर करण्यात मदत केली.',

    ex_scenario_pmjjby_example2_title: 'उदाहरण 2 – कागदपत्रांबाबत संभ्रम',
    ex_scenario_pmjjby_example2_problem: 'लाभार्थी PMJJBY लाभांसाठी दावा सादर करण्याचा प्रयत्न करतो.',
    ex_scenario_pmjjby_example2_reality: 'कोणती कागदपत्रे आवश्यक आहेत याबाबत स्पष्टता नसल्यामुळे अडचणी निर्माण होतात.',
    ex_scenario_pmjjby_example2_solution: 'आम्ही संपूर्ण कागदपत्रांची यादी दिली आणि सर्व आवश्यक कागदपत्रे गोळा करण्यात मदत केली.',

    ex_scenario_pmjjby_example3_title: 'उदाहरण 3 – बँक दावा प्रक्रियेबाबत अनिश्चितता',
    ex_scenario_pmjjby_example3_problem: 'कुटुंब विमा लाभ मिळवण्यासाठी बँकेत संपर्क साधते.',
    ex_scenario_pmjjby_example3_reality: 'दावा फॉर्म आणि पडताळणी प्रक्रिया समजण्यात त्यांना अडचणी येतात.',
    ex_scenario_pmjjby_example3_solution: 'आम्ही प्रत्येक टप्प्यावर मार्गदर्शन केले, फॉर्म योग्य प्रकारे भरायला मदत केली आणि बँकेसोबत समन्वय साधला.',

    ex_scenario_pmjjby_example4_title: 'उदाहरण 4 – पात्रता स्पष्ट करणे',
    ex_scenario_pmjjby_example4_problem: 'एक लाभार्थी दावा दाखल करू इच्छितो पण पात्रतेबाबत अनिश्चित आहे.',
    ex_scenario_pmjjby_example4_reality: 'पॉलिसीधारकाने त्या वेळी PMJJBY नोंदणीच्या अटी पूर्ण केल्या होत्या का हे तपासणे आवश्यक असते.',
    ex_scenario_pmjjby_example4_solution: 'आम्ही बँकेसोबत नोंदणी रेकॉर्ड तपासले, पात्रता निश्चित केली आणि पुढील प्रक्रिया सुरू केली.',

    ex_scenario_pmjjby_example_head1: '⏱️ समस्या:',
    ex_scenario_pmjjby_example_head2: '📋 वास्तविकता:',
    ex_scenario_pmjjby_example_head3: '✅ आमचे समाधान:',

    faq_pmjjby_title: 'वारंवार विचारले जाणारे प्रश्न',

    faq_pmjjby_description: 'PMJJBY संदर्भातील सामान्य प्रश्न',

    faq_pmjjby_q1: 'प्रधानमंत्री जीवन ज्योती विमा योजना (PMJJBY) म्हणजे काय?',
    faq_pmjjby_a1: 'PMJJBY ही सरकार समर्थित जीवन विमा योजना आहे जी परवडणाऱ्या वार्षिक प्रीमियमवर मृत्यूसाठी आर्थिक संरक्षण प्रदान करते.',

    faq_pmjjby_q2: 'PMJJBY मध्ये कोण सहभागी होऊ शकतो?',
    faq_pmjjby_a2: 'पात्र वयोगटातील (साधारणपणे 18-70 वर्षे) बचत बँक खाते असलेले व्यक्ती आपल्या बँकेमार्फत या योजनेत सहभागी होऊ शकतात.',

    faq_pmjjby_q3: 'PMJJBY कोणत्या प्रकारचे कव्हरेज प्रदान करते?',
    faq_pmjjby_a3: 'ही योजना सामान्यतः मृत्यूच्या घटनांसाठी कव्हरेज प्रदान करते, जसे की योजनेच्या अटींमध्ये नमूद केलेले आहे.',

    faq_pmjjby_q4: 'लाभार्थ्यांना कसे कळेल की कोणीतरी PMJJBY मध्ये नोंदणीकृत होते?',
    faq_pmjjby_a4: 'नोंदणी सहसा पॉलिसीधारकाच्या बँक खात्याशी जोडलेली असते. लाभार्थी संबंधित बँकेत चौकशी करून PMJJBY कव्हरेजची खात्री करू शकतात.',

    cta_pmjjby_title: 'PMJJBY दावे समजून घेण्यासाठी मदत हवी आहे का?',

    cta_pmjjby_description: 'योजनेच्या अटी आणि कागदपत्र प्रक्रिया समजून घेतल्यास लाभार्थ्यांना दावा प्रक्रिया अधिक आत्मविश्वासाने पूर्ण करता येते. PMJJBY दाव्यांसाठी तज्ज्ञ सहाय्यासाठी यशोदा टोटल सोल्यूशनशी संपर्क साधा.',

    cta_pmjjby_description2: 'मोफत सल्ला घ्या',

    cta_pmjjby_button: 'आता कॉल करा',

    //--------------------------------------------------------------------------------PMJJBY Page Ends


    // State CM Scheme Page Marathi ------------------------------------------------------------------------------------


    state_cm_title_backlink1: 'मुख्यपृष्ठ',
    state_cm_title_backlink2: 'राज्य मुख्यमंत्री विमा योजना',

    state_cm_title: 'राज्य मुख्यमंत्री विमा योजना सहाय्य',

    state_cm_description: 'राज्य सरकारच्या विमा योजनांचे समजून घेणे आणि लाभार्थ्यांनी दावा व अर्ज प्रक्रिया कशी पार पाडावी हे जाणून घेणे. अनेक राज्य सरकारे नागरिकांना आर्थिक संरक्षण प्रदान करण्यासाठी विमा योजना उपलब्ध करून देतात. या योजनांची कार्यपद्धती समजून घेणे त्या व्यक्तींसाठी महत्त्वाचे आहे जे या लाभांचा उपयोग करू इच्छितात.',

    what_state_cm_title: 'राज्य मुख्यमंत्री विमा योजना म्हणजे काय?',

    what_state_cm_description: 'राज्य मुख्यमंत्री विमा योजना या सरकारद्वारे राबविलेल्या योजना आहेत ज्या पात्र नागरिकांना आर्थिक सहाय्य आणि संरक्षण प्रदान करण्यासाठी तयार करण्यात आल्या आहेत, विशेषतः आरोग्य खर्च किंवा इतर विमित घटनांसाठी.',

    what_state_cm_description1: 'या योजना व्यक्ती आणि कुटुंबांना सहाय्य करण्यासाठी तयार करण्यात आल्या आहेत',

    what_state_cm_description2: 'वैद्यकीय उपचारांशी संबंधित आर्थिक भार कमी करून',

    what_state_cm_description3: 'आणि इतर पात्र परिस्थितींमध्ये मदत करून.',

    what_state_cm_description4: 'तथापि, अनेक लाभार्थ्यांना योजनेच्या अटी, पात्रता निकष आणि दावा प्रक्रियेचे समजण्यात अडचणी येतात. दस्तऐवजीकरण प्रक्रिया आणि अर्जाच्या टप्प्यांमध्ये कधीकधी गुंतागुंत असू शकते, विशेषतः जे लोक सरकारी विमा प्रणालीशी परिचित नाहीत त्यांच्यासाठी.',

    what_state_cm_key_features: 'राज्य विमा योजनांची प्रमुख वैशिष्ट्ये:',
    what_state_cm_key_feature1: '• सरकार समर्थित आर्थिक संरक्षण योजना',
    what_state_cm_key_feature2: '• पात्र नागरिकांसाठी आरोग्य खर्चाचे कव्हरेज',
    what_state_cm_key_feature3: '• राज्यनिहाय पात्रता निकष आणि लाभ',
    what_state_cm_key_feature4: '• अर्ज आणि पडताळणी प्रक्रिया',
    what_state_cm_key_feature5: '• वैद्यकीय आपत्कालीन परिस्थिती आणि उपचारांसाठी सहाय्य',

    common_challenges_state_cm_title: 'योजना अर्ज प्रक्रियेमधील सामान्य अडचणी',

    common_challenges_state_cm_description: 'अर्ज किंवा दावा प्रक्रियेदरम्यान लाभार्थ्यांना भेडसावणाऱ्या समस्या',

    common_challenges_state_cm_item1: 'पात्रतेबाबत संभ्रम',
    common_challenges_state_cm_desc1: 'ते योजनेच्या लाभांसाठी पात्र आहेत की नाही याबाबत अनिश्चितता.',

    common_challenges_state_cm_item2: 'अर्ज प्रक्रियेत अडचणी',
    common_challenges_state_cm_desc2: 'अर्ज प्रक्रिया आणि सादरीकरण प्रक्रियेबाबत गोंधळ.',

    common_challenges_state_cm_item3: 'कागदपत्रांची कमतरता',
    common_challenges_state_cm_desc3: 'आवश्यक ओळख आणि पात्रता कागदपत्रे गोळा करण्यात अडचणी येतात.',

    common_challenges_state_cm_item4: 'मर्यादित जागरूकता',
    common_challenges_state_cm_desc4: 'उपलब्ध योजनेच्या लाभांबद्दल आणि कव्हरेजबद्दल माहितीचा अभाव.',

    common_challenges_state_cm_item5: 'प्रक्रियेची गुंतागुंत',
    common_challenges_state_cm_desc5: 'पहिल्यांदाच अर्ज करणाऱ्यांसाठी सरकारी प्रक्रिया गुंतागुंतीची असू शकते.',

    common_challenges_state_cm_item6: 'पडताळणीतील विलंब',
    common_challenges_state_cm_desc6: 'अपूर्ण किंवा चुकीच्या अर्जांमुळे प्रक्रिया विलंबित होणे.',

    what_happens_after_state_cm_title: 'योजना दावा प्रकरणांमध्ये काय घडते',

    what_happens_after_state_cm_description: 'अर्ज आणि दावा सादरीकरण प्रक्रिया समजून घेणे',

    what_happens_state_cm_item1: 'योजनेची माहिती मिळणे',
    what_happens_state_cm_desc1: 'लाभार्थ्यांना अनेकदा योजना तेव्हा कळते जेव्हा त्यांना वैद्यकीय उपचार किंवा सहाय्याची गरज भासते.',

    what_happens_state_cm_item2: 'कागदपत्र संकलन',
    what_happens_state_cm_desc2: 'आवश्यक पात्रता कागदपत्रे, ओळखपत्रे आणि वैद्यकीय नोंदी गोळा करणे.',

    what_happens_state_cm_item3: 'सरकारी पडताळणी',
    what_happens_state_cm_desc3: 'प्राधिकरण कागदपत्रांची पडताळणी करून पात्रता निश्चित करतात आणि लाभ प्रक्रिया करतात.',

    why_choose_state_cm_title: 'यशोदा टोटल सोल्यूशन का निवडावे?',

    why_choose_state_cm_description: 'राज्य विमा योजना सहाय्यासाठी तज्ज्ञ मार्गदर्शन',

    why_choose_state_cm_item1: 'तज्ज्ञ टीम',
    why_choose_state_cm_desc1: 'विमा दावा नकार तक्रारी आणि वाद हाताळण्याचा अनेक वर्षांचा अनुभव.',

    why_choose_state_cm_item2: 'संपूर्ण कागदपत्र तयारी',
    why_choose_state_cm_desc2: 'आम्ही सर्व आवश्यक कागदपत्रे, नोटिसा आणि तक्रार पत्रे तयार करतो.',

    why_choose_state_cm_item3: 'कायदेशीर सहाय्य',
    why_choose_state_cm_desc3: 'आवश्यकतेनुसार कायदेशीर नोटीस तयार करणे आणि ओम्बड्समन तक्रार दाखल करणे.',

    why_choose_state_cm_item4: 'उच्च यशदर',
    why_choose_state_cm_desc4: 'शेकडो ग्राहकांना भरपाई आणि पॉलिसी निपटारा मिळवून देण्यात मदत केली आहे.',

    process_flow_state_cm_title: 'आमची 5-टप्प्यांची योजना सहाय्य प्रक्रिया',

    process_flow_state_cm_description: 'राज्य विमा योजना लाभार्थ्यांसाठी सुलभ मार्गदर्शन',

    process_flow_state_cm_item1: 'पात्रता मूल्यांकन',
    process_flow_state_cm_desc1: 'अधिकृत निकषांच्या आधारे आपण राज्य विमा योजनेसाठी पात्र आहात की नाही हे निश्चित करण्यात आम्ही मदत करतो.',

    process_flow_state_cm_item2: 'कागदपत्र तयारी',
    process_flow_state_cm_desc2: 'आम्ही सर्व आवश्यक ओळख, पात्रता आणि वैद्यकीय कागदपत्रे गोळा करण्यात मदत करतो.',

    process_flow_state_cm_item3: 'अर्ज फॉर्म सहाय्य',
    process_flow_state_cm_desc3: 'आम्ही सर्व आवश्यक माहितींसह अर्ज फॉर्म अचूकपणे भरून देण्यात मदत करतो.',

    process_flow_state_cm_item4: 'सादरीकरण सहाय्य',
    process_flow_state_cm_desc4: 'आम्ही तुम्हाला सरकारी प्राधिकरणांकडे अर्ज सादर करण्याच्या प्रक्रियेत मार्गदर्शन करतो.',

    process_flow_state_cm_item5: 'फॉलो-अप आणि ट्रॅकिंग',
    process_flow_state_cm_desc5: 'आम्ही तुमच्या अर्जाची स्थिती तपासतो आणि लाभ प्रक्रिया पूर्ण होईपर्यंत पाठपुरावा करतो.',

    ex_scenario_state_cm_title: 'प्रत्यक्ष जीवनातील योजना सहाय्य उदाहरणे',

    ex_scenario_state_cm_description: 'ज्या सामान्य परिस्थितींमध्ये आम्ही मदत करतो',

    ex_scenario_state_cm_example1_title: 'उदाहरण 1 – पात्रतेबाबत संभ्रम',
    ex_scenario_state_cm_example1_problem: 'एका रुग्णाला वैद्यकीय उपचाराची आवश्यकता असते आणि त्याला राज्य विमा योजनेबद्दल माहिती मिळते.',
    ex_scenario_state_cm_example1_reality: 'तो योजनेच्या लाभांसाठी पात्र आहे की नाही याबाबत अनिश्चित असतो.',
    ex_scenario_state_cm_example1_solution: 'आम्ही पात्रता निकष तपासले, कागदपत्रांची पडताळणी केली आणि योजनेसाठी पात्रता निश्चित केली.',

    ex_scenario_state_cm_example2_title: 'उदाहरण 2 – कागदपत्र गोळा करण्यात अडचण',
    ex_scenario_state_cm_example2_problem: 'एक लाभार्थी योजनेअंतर्गत लाभांसाठी अर्ज करण्याचा प्रयत्न करतो.',
    ex_scenario_state_cm_example2_reality: 'त्याला आवश्यक ओळख आणि पात्रता कागदपत्रे गोळा करण्यात अडचणी येतात.',
    ex_scenario_state_cm_example2_solution: 'आम्ही कागदपत्रांची यादी दिली आणि सर्व आवश्यक कागदपत्रे गोळा करण्यात मदत केली.',

    ex_scenario_state_cm_example3_title: 'उदाहरण 3 – दावा प्रक्रियेबाबत अनिश्चितता',
    ex_scenario_state_cm_example3_problem: 'एक कुटुंब सदस्य हॉस्पिटल उपचारानंतर दावा सादर करू इच्छितो.',
    ex_scenario_state_cm_example3_reality: 'त्याला अर्ज प्रक्रिया आणि पडताळणी प्रक्रियेबद्दल अनिश्चितता असते.',
    ex_scenario_state_cm_example3_solution: 'आम्ही त्यांना टप्प्याटप्प्याने अर्ज प्रक्रिया आणि सरकारी प्रक्रियांमध्ये मार्गदर्शन केले.',

    ex_scenario_state_cm_example4_title: 'उदाहरण 4 – उपचारानंतर माहिती मिळणे',
    ex_scenario_state_cm_example4_problem: 'एक रुग्ण हॉस्पिटलमध्ये उपचार घेतो.',
    ex_scenario_state_cm_example4_reality: 'नंतर त्याला समजते की हा उपचार राज्य योजनेअंतर्गत सहाय्यासाठी पात्र असू शकतो.',
    ex_scenario_state_cm_example4_solution: 'आम्ही रेट्रोस्पेक्टिव्ह दावा दाखल करण्यात मदत केली आणि यशस्वीरित्या आंशिक लाभ मिळवून दिले.',

    ex_scenario_state_cm_example_head1: '⏱️ समस्या:',
    ex_scenario_state_cm_example_head2: '📋 वास्तविकता:',
    ex_scenario_state_cm_example_head3: '✅ आमचे समाधान:',

    faq_state_cm_title: 'वारंवार विचारले जाणारे प्रश्न',

    faq_state_cm_description: 'राज्य विमा योजनांबाबत सामान्य प्रश्न',

    faq_state_cm_q1: 'राज्य मुख्यमंत्री विमा योजना म्हणजे काय?',
    faq_state_cm_a1: 'या सरकारद्वारे चालवल्या जाणाऱ्या विमा योजना आहेत ज्या पात्र नागरिकांना आरोग्य सेवा किंवा इतर विमित घटनांसाठी आर्थिक सहाय्य प्रदान करण्यासाठी तयार करण्यात आल्या आहेत, आणि त्या प्रत्येक राज्यासाठी वेगवेगळ्या असू शकतात.',

    faq_state_cm_q2: 'या योजनांचा लाभ कोण घेऊ शकतो?',
    faq_state_cm_a2: 'पात्रता ही संबंधित योजना आणि राज्य सरकारने ठरवलेल्या निकषांवर अवलंबून असते, जी साधारणपणे उत्पन्न, राहण्याचे ठिकाण आणि इतर घटकांवर आधारित असते.',

    faq_state_cm_q3: 'अर्ज किंवा दावा करण्यासाठी कोणती कागदपत्रे आवश्यक असतात?',
    faq_state_cm_a3: 'सामान्य कागदपत्रांमध्ये ओळखपत्र (आधार, मतदार ओळखपत्र), पात्रता पडताळणी, उत्पन्न प्रमाणपत्र, वैद्यकीय नोंदी आणि अर्ज फॉर्म समाविष्ट असू शकतात.',

    faq_state_cm_q4: 'लाभार्थी योजनेसाठी पात्रता कशी तपासू शकतात?',
    faq_state_cm_a4: 'पात्रता सामान्यतः सरकारी पोर्टलवरील अधिकृत मार्गदर्शक तत्त्वांद्वारे किंवा संबंधित सरकारी विभागाशी संपर्क साधून तपासली जाऊ शकते.',

    cta_state_cm_title: 'राज्य विमा योजनांसाठी मदत हवी आहे का?',

    cta_state_cm_description: 'पात्रता अटी आणि कागदपत्र प्रक्रिया समजून घेतल्यास लाभार्थ्यांना अर्ज आणि दावा प्रक्रिया अधिक आत्मविश्वासाने पूर्ण करता येते. तज्ज्ञ सहाय्यासाठी यशोदा टोटल सोल्यूशनशी संपर्क साधा.',

    cta_state_cm_description2: 'मोफत सल्ला घ्या',

    cta_state_cm_button: 'आता कॉल करा',

    //--------------------------------------------------------------------------------State CM Scheme Page Ends

    // Banking & ATM Page -------------------------------------------------------------------


    atm_title_backlink1: 'मुख्यपृष्ठ',
    atm_title_backlink2: 'बँकिंग व एटीएम कार्ड विमा दावा सहाय्य',

    atm_title: 'बँकिंग व एटीएम कार्ड विमा दावा सहाय्य',
    atm_description: 'बँक खाते आणि एटीएम कार्डशी संबंधित विमा लाभ समजून घेणे आणि लाभार्थ्यांनी दावा प्रक्रिया कशी पार पाडावी हे जाणून घेणे. अनेक बँका एटीएम किंवा डेबिट कार्डशी संबंधित विमा कव्हरेज प्रदान करतात, जे अपघाती मृत्यू, अपंगत्व किंवा इतर पात्र घटनांच्या बाबतीत आर्थिक संरक्षण प्रदान करते.',

    what_atm_title: 'सेवा आढावा',
    what_atm_description: 'अनेक बँका त्यांच्या बँकिंग सेवांचा भाग म्हणून डेबिट कार्ड किंवा एटीएम कार्डशी संबंधित विमा कव्हरेज देतात. या पॉलिसी कार्डधारकांना किंवा त्यांच्या लाभार्थ्यांना अपघाती मृत्यू, अपंगत्व किंवा इतर कव्हर केलेल्या परिस्थितींमध्ये आर्थिक संरक्षण प्रदान करू शकतात.',
    what_atm_description1: 'तथापि, अनेक ग्राहकांना अशा प्रकारचे विमा कव्हरेज अस्तित्वात आहे याची माहिती नसते किंवा दावा प्रक्रियेबद्दल समज नसते.',
    what_atm_description2: 'जेव्हा पात्र घटना घडते, तेव्हा लाभार्थ्यांना विमा लाभ लागू होतो की नाही आणि दावा सादर करण्यासाठी कोणती कागदपत्रे आवश्यक आहेत हे निश्चित करण्यात अडचण येऊ शकते.',
    what_atm_description3: 'यशोदा टोटल सोल्यूशन',
    what_atm_description4: 'ग्राहकांना पात्रता निकष समजून घेणे, आवश्यक कागदपत्रे तयार करणे आणि दावा सादरीकरण प्रक्रियेत मार्गदर्शन करणे यासाठी मदत करते, ज्यामुळे ते बँक-लिंक्ड विमा पॉलिसी अंतर्गत उपलब्ध लाभ मिळवू शकतात.',

    what_atm_key_features: 'सामान्य एटीएम कार्ड विमा दावा प्रक्रिया:',
    what_atm_key_feature1: '• बँकेद्वारे एटीएम कार्ड जारी → कार्डशी विमा कव्हरेज जोडलेले',
    what_atm_key_feature2: '• अपघाती घटना घडते',
    what_atm_key_feature3: '• लाभार्थी दावा सादर करतो',
    what_atm_key_feature4: '• दावा पडताळणी आणि प्रक्रिया',

    common_challenges_atm_title: 'एटीएम कार्ड विमा दावा प्रक्रियेमधील सामान्य अडचणी',
    common_challenges_atm_description: 'लाभार्थ्यांना लाभ मिळवण्याचा प्रयत्न करताना अनेक अडचणींचा सामना करावा लागू शकतो',

    common_challenges_atm_item1: 'जागरूकतेचा अभाव',
    common_challenges_atm_desc1: 'लाभार्थ्यांना एटीएम कार्डमध्ये विमा कव्हरेज समाविष्ट होते याची माहिती नसते.',

    common_challenges_atm_item2: 'पात्रतेबाबत संभ्रम',
    common_challenges_atm_desc2: 'विमा दाव्यासाठी पात्रता अटींबाबत गोंधळ.',

    common_challenges_atm_item3: 'कागदपत्रांची कमतरता',
    common_challenges_atm_desc3: 'आवश्यक कागदपत्रे गोळा करण्यात अडचणी येतात.',

    common_challenges_atm_item4: 'दावा प्रक्रियेबाबत अनिश्चितता',
    common_challenges_atm_desc4: 'दावा सादर करण्याच्या प्रक्रियेबाबत अनिश्चितता.',

    common_challenges_atm_item5: 'पडताळणीतील विलंब',
    common_challenges_atm_desc5: 'अपूर्ण किंवा चुकीच्या कागदपत्रांमुळे होणारा विलंब.',

    what_happens_after_atm_title: 'एटीएम कार्ड विमा दावा प्रकरणांमध्ये प्रत्यक्षात काय घडते',
    what_happens_after_atm_description: 'अनेक वेळा, कार्डधारकांना त्यांच्या बँकेतून एटीएम किंवा डेबिट कार्ड मिळाल्यावर आपोआप विमा कव्हरेजमध्ये समाविष्ट केले जाते.',
    what_happens_atm_description1: 'तथापि, ग्राहकांना ही माहिती अनेकदा पात्र घटना घडेपर्यंत नसते. जेव्हा अशी घटना घडते, तेव्हा लाभार्थ्यांना नंतर कळू शकते की कार्डधारक विमा लाभांसाठी पात्र होता.',
    what_happens_atm_description2: 'त्या वेळी, लाभार्थ्यांनी दावा प्रक्रिया समजून घेणे आणि दावा अर्ज सादर करण्यासाठी आवश्यक कागदपत्रे गोळा करणे आवश्यक असते.',
    what_happens_atm_description3: 'बँक आणि विमा प्रदाता सादर केलेल्या कागदपत्रांची पडताळणी करतात जेणेकरून पात्रता निश्चित करता येईल आणि दावा पॉलिसीच्या अटी पूर्ण करतो की नाही हे तपासले जाईल.',
    what_happens_atm_description4: 'दावा पुनरावलोकन प्रक्रिया:',
    what_happens_atm_item1: '• पात्र घटना घडते',
    what_happens_atm_item2: '• लाभार्थ्याला एटीएम कार्ड विमाबद्दल माहिती मिळते',
    what_happens_atm_item3: '• दावा अर्ज तयार केला जातो',
    what_happens_atm_item4: '• कागदपत्रे सादर केली जातात',
    what_happens_atm_item5: '• दावा पडताळणी आणि निर्णय',

    ex_scenario_atm_title: 'उदाहरण परिस्थिती',
    ex_scenario_atm_description: 'एटीएम कार्ड विमा दावे उद्भवणाऱ्या वास्तविक जीवनातील परिस्थिती',

    ex_scenario_atm_example1_title: 'उदाहरण 1 – कुटुंबाला एटीएम कार्ड विमाबद्दल माहिती नसणे',
    ex_scenario_atm_example1_desc: 'एका बँक ग्राहकाकडे सक्रिय एटीएम कार्ड असते ज्यामध्ये अपघाती विमा कव्हरेज समाविष्ट असते. एका दुर्दैवी अपघातानंतर कुटुंबाला नंतर समजते की कार्डधारक एटीएम कार्डशी संबंधित विमा लाभांसाठी पात्र होता.',

    ex_scenario_atm_example2_title: 'उदाहरण 2 – पात्रता अटींबाबत संभ्रम',
    ex_scenario_atm_example2_desc: 'एक लाभार्थी दावा सादर करण्याचा प्रयत्न करतो परंतु त्याला कळते की काही पात्रता अटी पूर्ण करणे आवश्यक आहे, जसे की अलीकडील एटीएम कार्ड वापर किंवा सक्रिय खाते स्थिती.',

    ex_scenario_atm_example3_title: 'उदाहरण 3 – कागदपत्रांशी संबंधित अडचणी',
    ex_scenario_atm_example3_desc: 'एक कुटुंब सदस्य दावा सादर करण्याचा प्रयत्न करतो पण बँक आणि विमा प्रदात्याने आवश्यक असलेली कागदपत्रे गोळा करण्यात अडचण येते.',

    ex_scenario_atm_example4_title: 'उदाहरण 4 – दावा प्रक्रियेबाबत अनिश्चितता',
    ex_scenario_atm_example4_desc: 'एक लाभार्थी विमा लाभ मिळवण्यासाठी बँकेशी संपर्क साधतो पण दावा सादर करण्यासाठी योग्य प्रक्रिया आणि आवश्यक कागदपत्रांबाबत अनिश्चित असतो.',

    documentation_atm_title: 'एटीएम कार्ड विमा दावा आवश्यकतांचे समजून घेणे',
    documentation_atm_description: 'एटीएम कार्ड विमा दाव्यासाठी पात्रता पडताळण्यासाठी आणि दावा प्रक्रिया पूर्ण करण्यासाठी काही कागदपत्रे आणि माहिती आवश्यक असते.',
    documentation_atm_list: [
      'पात्र घटनेचा पुरावा',
      'ओळख आणि बँक खाते तपशील',
      'एटीएम किंवा डेबिट कार्डची माहिती',
      'दावा अर्ज फॉर्म',
      'कार्डशी संबंधित विमा कव्हरेजची पडताळणी'
    ],
    documentation_atm_description1: 'या कागदपत्र आवश्यकतांचे समजून घेतल्यास लाभार्थ्यांना दावा अर्ज योग्य पद्धतीने तयार करता येतो.',
    documentation_atm_description2: 'दस्तऐवज संरचना:',
    documentation_atm_description3: 'कार्डधारक पडताळणी → घटना दस्तऐवजीकरण → दावा अर्ज फॉर्म → बँक खाते पडताळणी → दावा मूल्यांकन',

    why_choose_atm_title: 'यशोदा टोटल सोल्यूशन का निवडावे?',
    why_choose_atm_description: 'बँकिंग आणि एटीएम कार्ड विमा दाव्यांसाठी विश्वासार्ह सहाय्य',

    why_choose_atm_item1: 'तज्ज्ञ टीम',
    why_choose_atm_desc1: 'विमा दावा नकार तक्रारी आणि वाद हाताळण्याचा अनेक वर्षांचा अनुभव.',

    why_choose_atm_item2: 'संपूर्ण कागदपत्र तयारी',
    why_choose_atm_desc2: 'आम्ही सर्व आवश्यक कागदपत्रे, नोटिसा आणि तक्रार पत्रे तयार करतो.',

    why_choose_atm_item3: 'कायदेशीर सहाय्य',
    why_choose_atm_desc3: 'आवश्यकतेनुसार कायदेशीर नोटीस तयार करणे आणि ओम्बड्समन तक्रार दाखल करणे.',

    why_choose_atm_item4: 'उच्च यशदर',
    why_choose_atm_desc4: 'शेकडो ग्राहकांना भरपाई आणि पॉलिसी निपटारा मिळवून देण्यात मदत केली आहे.',

    faq_atm_title: 'वारंवार विचारले जाणारे प्रश्न',

    faq_atm_q1: 'एटीएम कार्ड विमा कव्हरेज म्हणजे काय?',
    faq_atm_a1: 'काही बँका विशिष्ट पात्र घटनांसाठी एटीएम किंवा डेबिट कार्डशी संबंधित विमा लाभ प्रदान करतात.',

    faq_atm_q2: 'एटीएम कार्ड विमा लाभ कोण दावा करू शकतो?',
    faq_atm_a2: 'पॉलिसीच्या अटींनुसार कार्डधारकाचे लाभार्थी दावा करण्यास पात्र असू शकतात.',

    faq_atm_q3: 'एखाद्या व्यक्तीला कसे कळेल की त्याच्या एटीएम कार्डमध्ये विमा कव्हरेज आहे?',
    faq_atm_a3: 'बँक किंवा कार्ड जारी करणारी संस्था एटीएम कार्डशी विमा कव्हरेज जोडलेले आहे की नाही हे निश्चित करू शकते.',

    faq_atm_q4: 'एटीएम कार्ड विमा दाव्यासाठी कोणती कागदपत्रे आवश्यक असतात?',
    faq_atm_a4: 'आवश्यक कागदपत्रांमध्ये ओळख पडताळणी, घटनेशी संबंधित दस्तऐवज आणि दावा फॉर्म समाविष्ट असू शकतात.',

    cta_atm_title: 'एटीएम कार्ड विमा दावा प्रक्रिया समजून घेण्यासाठी मदत हवी आहे का?',
    cta_atm_description: 'पात्रता अटी आणि कागदपत्र आवश्यकतांचे समजून घेतल्यास लाभार्थ्यांना दावा प्रक्रिया अधिक आत्मविश्वासाने पूर्ण करता येते.',
    cta_atm_description2: 'बँकिंग आणि एटीएम कार्ड विमा दावा सहाय्याबद्दल अधिक जाणून घेण्यासाठी यशोदा टोटल सोल्यूशनशी संपर्क साधा.',
    cta_atm_button: 'आता संपर्क साधा',

    //-------------------------------------------------------------- Banking & ATM Page

    // PF Page Details ----------------------------------------------------------------------


    pf_title_backlink1: 'मुख्यपृष्ठ',
    pf_title_backlink2: 'पीएफ अपघाती विमा दावा सहाय्य',

    pf_title: 'पीएफ अपघाती विमा दावा सहाय्य',
    pf_description: 'प्रोविडेंट फंड योजनांशी संबंधित अपघाती विमा लाभ समजून घेणे आणि लाभार्थ्यांनी दावा प्रक्रिया कशी पार पाडावी हे जाणून घेणे. काही पीएफ योजना पात्र सदस्यांना अपघाती विमा लाभ प्रदान करतात, परंतु अनेकांना या लाभांची माहिती नसते किंवा दावा प्रक्रियेत अडचणी येतात.',

    what_pf_title: 'सेवा आढावा',
    what_pf_description: 'काही प्रोविडेंट फंड योजना कर्मचारी लाभ कार्यक्रमांचा भाग म्हणून पात्र सदस्यांना अपघाती विमा कव्हरेज प्रदान करतात. या लाभांमुळे अपघाती मृत्यू किंवा अपंगत्वाच्या परिस्थितीत सदस्य किंवा त्यांच्या लाभार्थ्यांना आर्थिक सहाय्य मिळू शकते.',
    what_pf_description1: 'तथापि, अनेक व्यक्तींना त्यांच्या पीएफ सदस्यत्वाखाली असे कव्हरेज उपलब्ध आहे याची माहिती नसते. अपघात घडल्यास, लाभार्थ्यांना पात्रता अटी, दावा प्रक्रिया आणि आवश्यक कागदपत्रांबाबत गोंधळ निर्माण होऊ शकतो.',
    what_pf_description2: 'अनेक प्रकरणांमध्ये, पीएफ सदस्यत्वाची पडताळणी आणि आवश्यक कागदपत्रांची तयारी ही प्रक्रिया गुंतागुंतीची असू शकते.',
    what_pf_description3: 'यशोदा टोटल सोल्यूशन',
    what_pf_description4: 'ग्राहकांना पात्रता निकष समजावून सांगणे, आवश्यक कागदपत्रे तयार करण्यात मदत करणे आणि दावा सादरीकरण प्रक्रियेत मार्गदर्शन करणे यासाठी सहाय्य करते, ज्यामुळे ते पीएफ संबंधित योजनांअंतर्गत उपलब्ध विमा लाभ मिळवू शकतात.',

    what_pf_key_features: 'पीएफ अपघाती विमा दावा प्रक्रिया:',
    what_pf_key_feature1: '• पीएफ सदस्यत्व सक्रिय',
    what_pf_key_feature2: '• अपघाती घटना घडते',
    what_pf_key_feature3: '• लाभार्थी दावा सुरू करतो',
    what_pf_key_feature4: '• पडताळणीसाठी कागदपत्रे सादर केली जातात',
    what_pf_key_feature5: '• दावा मूल्यांकन आणि प्रक्रिया',

    common_challenges_pf_title: 'पीएफ विमा दावा प्रक्रियेमधील सामान्य अडचणी',
    common_challenges_pf_description: 'लाभार्थ्यांना लाभ मिळवण्याचा प्रयत्न करताना विविध अडचणींचा सामना करावा लागू शकतो',

    common_challenges_pf_item1: 'जागरूकतेचा अभाव',
    common_challenges_pf_desc1: 'लाभार्थ्यांना पीएफ सदस्यत्वामध्ये अपघाती विमा कव्हरेज समाविष्ट आहे याची माहिती नसते.',

    common_challenges_pf_item2: 'पात्रतेबाबत संभ्रम',
    common_challenges_pf_desc2: 'दावा करण्यासाठी आवश्यक पात्रता अटींबाबत गोंधळ.',

    common_challenges_pf_item3: 'कागदपत्रांची कमतरता',
    common_challenges_pf_desc3: 'पीएफ सदस्यत्व तपशील आणि आवश्यक कागदपत्रे गोळा करण्यात अडचणी येतात.',

    common_challenges_pf_item4: 'पीएफ नोंद पडताळणी',
    common_challenges_pf_desc4: 'दावा सादरीकरण प्रक्रियेबाबत अनिश्चितता.',

    common_challenges_pf_item5: 'दावा प्रक्रियेत विलंब',
    common_challenges_pf_desc5: 'अपूर्ण कागदपत्रांमुळे होणारा विलंब.',

    what_happens_after_pf_title: 'पीएफ अपघाती विमा दावा प्रकरणांमध्ये प्रत्यक्षात काय घडते',
    what_happens_after_pf_description: 'अनेक वेळा, कर्मचाऱ्यांना त्यांच्या कार्यस्थळाद्वारे पीएफ योजनांमध्ये समाविष्ट केले जाते, परंतु त्या योजनेशी संबंधित विमा लाभांविषयी पूर्ण माहिती नसते.',
    what_happens_pf_description1: 'अपघात घडल्यानंतर, लाभार्थ्यांना नंतर समजते की पीएफ सदस्य अपघाती विमा लाभासाठी पात्र होता.',
    what_happens_pf_description2: 'त्या टप्प्यावर, लाभार्थ्यांनी दावा अर्ज सादर करण्यापूर्वी आवश्यक कागदपत्रे गोळा करणे आणि पीएफ सदस्यत्वाची पडताळणी करणे आवश्यक असते.',
    what_happens_pf_description3: 'यानंतर संबंधित प्राधिकरण आणि विमा प्रदाता सादर केलेल्या कागदपत्रांची पडताळणी करतात जेणेकरून पात्रता निश्चित करता येईल आणि दावा योजनेच्या अटींनुसार योग्य आहे की नाही हे ठरवता येईल.',
    what_happens_pf_description4: 'या टप्प्यांचे समजून घेतल्याने लाभार्थ्यांना दावा प्रक्रिया अधिक प्रभावीपणे हाताळता येते.',
    what_happens_pf_description5: 'पीएफ विमा दावा पुनरावलोकन प्रक्रिया:',
    what_happens_pf_item1: '• अपघाती घटना घडते',
    what_happens_pf_item2: '• लाभार्थ्याला पीएफ विमा कव्हरेजबद्दल माहिती मिळते',
    what_happens_pf_item3: '• दावा अर्ज तयार केला जातो',
    what_happens_pf_item4: '• कागदपत्रे सादर केली जातात',
    what_happens_pf_item5: '• पडताळणी आणि दावा निर्णय',

    ex_scenario_pf_title: 'उदाहरण परिस्थिती',
    ex_scenario_pf_description: 'पीएफ अपघाती विमा दावे उद्भवणाऱ्या वास्तविक जीवनातील परिस्थिती',

    ex_scenario_pf_example1_title: 'उदाहरण 1 – कुटुंबाला पीएफ विमा कव्हरेजबद्दल माहिती नसणे',
    ex_scenario_pf_example1_desc: 'एक कर्मचारी आपल्या नियोक्त्याद्वारे पीएफ योजनेत समाविष्ट असतो. अपघातानंतर कुटुंबाला नंतर समजते की पीएफ सदस्यत्वामध्ये अपघाती विमा लाभ समाविष्ट होता.',

    ex_scenario_pf_example2_title: 'उदाहरण 2 – पीएफ सदस्यत्व पडताळणी',
    ex_scenario_pf_example2_desc: 'एक लाभार्थी दावा सादर करण्याचा प्रयत्न करतो परंतु त्याला प्रथम पीएफ सदस्यत्व तपशील आणि विमा लाभाशी संबंधित पात्रता अटींची पडताळणी करावी लागते.',

    ex_scenario_pf_example3_title: 'उदाहरण 3 – कागदपत्र संकलनातील अडचणी',
    ex_scenario_pf_example3_desc: 'एक कुटुंब सदस्य दावा सादर करण्याचा प्रयत्न करतो परंतु पीएफ नोंदी आणि अपघात पडताळणीसंबंधित आवश्यक कागदपत्रे गोळा करण्यात अडचणी येतात.',

    ex_scenario_pf_example4_title: 'उदाहरण 4 – दावा प्रक्रियेबाबत संभ्रम',
    ex_scenario_pf_example4_desc: 'एक लाभार्थी लाभ मिळवण्यासाठी संबंधित प्राधिकरणाकडे जातो परंतु दावा सादर करण्याची योग्य प्रक्रिया समजण्यात अडचण येते.',

    documentation_pf_title: 'पीएफ विमा दावा आवश्यकतांचे समजून घेणे',
    documentation_pf_description: 'पीएफ अपघाती विमा दाव्यांसाठी पात्रता पडताळण्यासाठी आणि दावा प्रक्रिया पूर्ण करण्यासाठी काही कागदपत्रे आणि माहिती आवश्यक असते.',
    documentation_pf_list: [
      'अपघाती घटनेचा पुरावा',
      'पीएफ सदस्यत्व किंवा खाते तपशील',
      'ओळख आणि लाभार्थी माहिती',
      'दावा अर्ज फॉर्म',
      'पीएफ योजनेअंतर्गत पात्रतेची पडताळणी'
    ],
    documentation_pf_description1: 'या कागदपत्र आवश्यकतांचे समजून घेतल्यास लाभार्थ्यांना दावा अर्ज योग्य प्रकारे तयार करता येतो.',
    documentation_pf_description2: 'पीएफ विमा दावा दस्तऐवज संरचना:',
    documentation_pf_description3: 'पीएफ सदस्यत्व पडताळणी → घटना दस्तऐवजीकरण → दावा अर्ज फॉर्म → लाभार्थी ओळख → दावा मूल्यांकन',

    why_choose_pf_title: 'यशोदा टोटल सोल्यूशन का निवडावे?',
    why_choose_pf_description: 'पीएफ अपघाती विमा दाव्यांसाठी विश्वासार्ह सहाय्य',

    why_choose_pf_item1: 'अनुभवी आणि व्यावसायिक टीम',
    why_choose_pf_desc1: 'उद्योगातील ज्ञान आणि कार्यात्मक कौशल्य असलेले पात्र व्यावसायिक.',

    why_choose_pf_item2: 'त्वरित आणि पारदर्शक प्रक्रिया',
    why_choose_pf_desc2: 'स्पष्ट संवाद आणि निरीक्षणाद्वारे समर्थित प्रणालीबद्ध कार्यप्रवाह.',

    why_choose_pf_item3: 'ग्राहक-केंद्रित दृष्टिकोन',
    why_choose_pf_desc3: 'प्रत्येक प्रकरण लक्षपूर्वक, सहानुभूतीने आणि नैतिक जबाबदारीने हाताळले जाते.',

    why_choose_pf_item4: 'तंत्रज्ञान-आधारित मॉनिटरिंग',
    why_choose_pf_desc4: 'प्रगत ट्रॅकिंग प्रणाली जबाबदारी आणि नियमित अद्यतने सुनिश्चित करते.',

    why_choose_pf_item5: 'विश्वासार्ह सेवा भागीदार',
    why_choose_pf_desc5: 'विश्वास, विश्वसनीयता आणि सेवा उत्कृष्टतेवर आधारित दीर्घकालीन संबंधांवर लक्ष केंद्रित.',

    faq_pf_title: 'वारंवार विचारले जाणारे प्रश्न',

    faq_pf_q1: 'पीएफ अपघाती विमा कव्हरेज म्हणजे काय?',
    faq_pf_a1: 'काही प्रोविडेंट फंड योजना पात्र सदस्यांसाठी अपघाती विमा लाभ प्रदान करतात.',

    faq_pf_q2: 'पीएफ अपघाती विमा लाभ कोण दावा करू शकतो?',
    faq_pf_a2: 'योजनेच्या अटींनुसार पीएफ सदस्याचे लाभार्थी दावा करण्यास पात्र असू शकतात.',

    faq_pf_q3: 'लाभार्थी पीएफ विमा कव्हरेजची खात्री कशी करू शकतात?',
    faq_pf_a3: 'पीएफ नोंदी आणि संबंधित योजनेची माहिती यावरून विमा कव्हरेज लागू आहे की नाही हे तपासता येते.',

    faq_pf_q4: 'पीएफ अपघाती विमा दाव्यासाठी कोणती कागदपत्रे आवश्यक असतात?',
    faq_pf_a4: 'आवश्यक कागदपत्रांमध्ये पीएफ सदस्यत्व तपशील, अपघाताचा पुरावा आणि दावा अर्ज फॉर्म समाविष्ट असू शकतात.',

    cta_pf_title: 'पीएफ अपघाती विमा दावा प्रक्रिया समजून घेण्यासाठी मदत हवी आहे का?',
    cta_pf_description: 'पात्रता अटी आणि कागदपत्र आवश्यकतांचे समजून घेतल्यास लाभार्थ्यांना दावा प्रक्रिया अधिक आत्मविश्वासाने पार पाडता येते.',
    cta_pf_description2: 'पीएफ अपघाती विमा दावा सहाय्याबद्दल अधिक जाणून घेण्यासाठी यशोदा टोटल सोल्यूशनशी संपर्क साधा.',
    cta_pf_button: 'आता संपर्क साधा',

    // -------------------------------------------------------------------------- PF Page Ends 

    // Legal Consulation Page Marathi ----------------------------------------------------------


    legal_title_backlink1: 'मुख्यपृष्ठ',
    legal_title_backlink2: 'कायदेशीर सल्ला',

    legal_title: 'कायदेशीर सल्ला',
    legal_description: 'कायदेशीर परिस्थिती स्पष्टपणे समजून घेणे आणि औपचारिक कायदेशीर कारवाई करण्यापूर्वी संभाव्य पर्यायांचे मूल्यांकन करणे. कायदेशीर सल्ला व्यक्तींना त्यांची कायदेशीर स्थिती, अधिकार आणि संभाव्य पर्याय समजून घेण्यास मदत करतो, कोणतीही औपचारिक कायदेशीर प्रक्रिया सुरू करण्यापूर्वी.',

    what_legal_title: 'सेवा आढावा',
    what_legal_description: 'कायदेशीर सल्ला ही प्रक्रिया आहे ज्यामध्ये अनुभवी व्यावसायिकांसोबत कायदेशीर विषयावर चर्चा केली जाते, ज्यामुळे तथ्य समजून घेता येतात, कागदपत्रांची तपासणी करता येते आणि संभाव्य कायदेशीर पर्यायांचे मूल्यांकन करता येते.',
    what_legal_description1: 'अनेक व्यक्तींना वाद, विमा विषयक समस्या, आर्थिक संघर्ष किंवा इतर कायदेशीर बाबी हाताळताना अनिश्चिततेचा सामना करावा लागतो. योग्य मार्गदर्शनाशिवाय एखाद्या प्रकरणाला मजबूत कायदेशीर आधार आहे की नाही किंवा पुढील कोणती पावले उचलावीत हे ठरवणे कठीण होऊ शकते.',
    what_legal_description2: 'सल्लामसलतीद्वारे ग्राहक त्यांची परिस्थिती मांडू शकतात आणि त्यांच्या कागदपत्रे व पुराव्यांचे संरचित पुनरावलोकन प्राप्त करू शकतात.',
    what_legal_description3: 'येथे',
    what_legal_description4: 'यशोदा टोटल सोल्यूशन',
    what_legal_description5: ', कायदेशीर सल्ला देताना तथ्यांची काळजीपूर्वक तपासणी करून आणि पुढे जाण्यापूर्वी संभाव्य धोके आणि संधी ओळखून परिस्थितीचे वास्तव आकलन करून दिले जाते.',

    what_legal_key_features: 'कायदेशीर सल्ला प्रक्रिया प्रवाह:',
    what_legal_key_feature1: '• ग्राहक समस्या मांडतो',
    what_legal_key_feature2: '• प्रकरणाच्या तपशीलांचे पुनरावलोकन केले जाते',
    what_legal_key_feature3: '• कागदपत्रे आणि पुरावे तपासले जातात',
    what_legal_key_feature4: '• कायदेशीर स्थितीचे विश्लेषण केले जाते',
    what_legal_key_feature5: '• संभाव्य उपाय ओळखले जातात',

    common_situations_legal_title: 'ज्या सामान्य परिस्थितींमध्ये कायदेशीर सल्ल्याची आवश्यकता असते',
    common_situations_legal_description: 'व्यक्ती आणि व्यवसायांना स्पष्टता आवश्यक असलेल्या परिस्थितींमध्ये ते अनेकदा कायदेशीर सल्ला घेतात',

    common_situations_legal_item1: 'आर्थिक वाद',
    common_situations_legal_desc1: 'आर्थिक व्यवहारांशी संबंधित वाद ज्यासाठी कायदेशीर स्पष्टता आणि मूल्यांकन आवश्यक असते.',

    common_situations_legal_item2: 'विमा संबंधित समस्या',
    common_situations_legal_desc2: 'विमा दावे किंवा निपटारा यासंबंधीचा गोंधळ ज्यासाठी कायदेशीर मूल्यांकन आवश्यक असते.',

    common_situations_legal_item3: 'करार संबंधित वाद',
    common_situations_legal_desc3: 'करार किंवा सेवांशी संबंधित मतभेद ज्यासाठी कायदेशीर पुनरावलोकन आवश्यक असते.',

    common_situations_legal_item4: 'कायदेशीर नोटीस',
    common_situations_legal_desc4: 'दुसऱ्या पक्षाकडून प्राप्त झालेल्या कायदेशीर नोटिसा ज्यासाठी व्यावसायिक मार्गदर्शन आवश्यक असते.',

    common_situations_legal_item5: 'अनिश्चित कायदेशीर स्थिती',
    common_situations_legal_desc5: 'पुढे जाण्यापूर्वी प्रकरणाची कायदेशीर ताकद निश्चित नसणे.',

    why_choose_legal_title: 'यशोदा टोटल सोल्यूशन का निवडावे?',
    why_choose_legal_description: 'कायदेशीर सल्ला आणि प्रकरण मूल्यांकनासाठी विश्वासार्ह सहाय्य',

    why_choose_legal_item1: 'अनुभवी व व्यावसायिक टीम',
    why_choose_legal_desc1: 'उद्योगातील ज्ञान आणि कार्यात्मक कौशल्य असलेले पात्र व्यावसायिक.',

    why_choose_legal_item2: 'त्वरित आणि पारदर्शक प्रक्रिया',
    why_choose_legal_desc2: 'स्पष्ट संवाद आणि देखरेखीने समर्थित प्रणालीबद्ध कार्यप्रवाह.',

    why_choose_legal_item3: 'ग्राहक-केंद्रित दृष्टिकोन',
    why_choose_legal_desc3: 'प्रत्येक प्रकरण लक्षपूर्वक, सहानुभूतीने आणि नैतिक जबाबदारीने हाताळले जाते.',

    why_choose_legal_item4: 'विश्वासार्ह सेवा भागीदार',
    why_choose_legal_desc4: 'विश्वास, विश्वासार्हता आणि सेवा उत्कृष्टतेवर आधारित दीर्घकालीन संबंधांवर लक्ष केंद्रित.',

    process_legal_title: 'आमची 5-टप्प्यांची कायदेशीर सल्ला प्रक्रिया',
    process_legal_description: 'सोपे, पारदर्शक आणि प्रभावी दृष्टिकोन',

    process_legal_step1_title: 'प्रारंभिक सल्लामसलत आणि प्रकरण पुनरावलोकन',
    process_legal_step1_desc: 'आम्ही तुमची परिस्थिती ऐकतो, पार्श्वभूमी समजून घेतो आणि तुम्ही दिलेली सर्व संबंधित कागदपत्रे आणि तथ्ये तपासतो.',

    process_legal_step2_title: 'पुरावे आणि कागदपत्र विश्लेषण',
    process_legal_step2_desc: 'आम्ही तुमची कागदपत्रे, करार, संवाद आणि पुरावे काळजीपूर्वक तपासतो, जेणेकरून कायदेशीर स्थितीचे मूल्यांकन करता येईल.',

    process_legal_step3_title: 'कायदेशीर ताकदीचे मूल्यांकन',
    process_legal_step3_desc: 'आम्ही तुमच्या प्रकरणाचे कायदेशीर गुणधर्म तपासतो आणि त्यातील ताकद, कमकुवत बाजू आणि संभाव्य धोके ओळखतो.',

    process_legal_step4_title: 'पर्याय आणि धोरण चर्चा',
    process_legal_step4_desc: 'तथ्ये आणि पुराव्यांच्या आधारे संभाव्य कायदेशीर पर्याय, धोरणे आणि वास्तव परिणाम समजावून सांगतो.',

    process_legal_step5_title: 'शिफारस आणि पुढील पावले',
    process_legal_step5_desc: 'आम्ही स्पष्ट शिफारसी देतो आणि तुमच्या प्रकरणाच्या समाधानासाठी सर्वोत्तम मार्गदर्शन करतो.',

    ex_scenario_legal_title: 'वास्तविक जीवनातील सल्ला उदाहरणे',
    ex_scenario_legal_description: 'ही काही सामान्य परिस्थिती आहेत ज्यांचे मूल्यांकन करण्यात आम्ही मदत करतो',

    ex_scenario_legal_problem_label: '❌ समस्या:',
    ex_scenario_legal_reality_label: '⚠️ वास्तव:',
    ex_scenario_legal_solution_label: '✅ आमचे समाधान:',

    ex_scenario_legal_case1_title: 'प्रकरण 1: विमा दावा वाद',
    ex_scenario_legal_case1_problem: 'एका पॉलिसीधारकाला वाटते की त्याचा विमा दावा योग्य प्रकारे हाताळला गेला नाही आणि पुढे जाण्यापूर्वी तो कायदेशीर आधार आहे की नाही हे समजून घेऊ इच्छितो.',
    ex_scenario_legal_case1_reality: 'पॉलिसी कागदपत्रे आणि दावा पत्रव्यवहार तपासल्यानंतर असे आढळले की दावा नाकारण्यात प्रक्रियात्मक चुका होत्या.',
    ex_scenario_legal_case1_solution: 'आम्ही नकाराला आव्हान देण्यासाठी कायदेशीर आधार स्पष्ट करणारा सल्ला दिला. ग्राहकाने ओम्बड्समनकडे तक्रार दाखल केली.',

    ex_scenario_legal_case2_title: 'प्रकरण 2: करार संबंधित मतभेद',
    ex_scenario_legal_case2_problem: 'दोन पक्ष करार करतात, परंतु एक पक्ष ठरलेल्या अटी पूर्ण करण्यात अपयशी ठरतो. प्रभावित पक्ष संभाव्य कायदेशीर पर्याय समजून घेण्यासाठी सल्ला घेतो.',
    ex_scenario_legal_case2_reality: 'कराराच्या पुनरावलोकनातून करार उल्लंघनाच्या विशिष्ट तरतुदी आणि कार्य न केल्याचे स्पष्ट पुरावे समोर आले.',
    ex_scenario_legal_case2_solution: 'आम्ही कायदेशीर उपायांबद्दल मार्गदर्शन केले, ज्यामध्ये नोटीस कालावधी आणि करारांतर्गत संभाव्य नुकसानभरपाई दावे समाविष्ट होते.',

    ex_scenario_legal_case3_title: 'प्रकरण 3: आर्थिक व्यवहार वाद',
    ex_scenario_legal_case3_problem: 'एक व्यक्ती दुसऱ्या पक्षाला दिलेल्या पैशांबाबत वादाचा सामना करतो आणि कायदेशीर कारवाई शक्य आहे का हे जाणून घेऊ इच्छितो.',
    ex_scenario_legal_case3_reality: 'मर्यादित कागदपत्रे उपलब्ध असल्यामुळे व्यवहाराच्या अटी आणि परतफेडीचा करार सिद्ध करणे कठीण होते.',
    ex_scenario_legal_case3_solution: 'आम्ही लिखित पुराव्याचे महत्त्व स्पष्ट केले आणि कायदेशीर कारवाईपूर्वी पर्यायी वाद निराकरण सुचवले.',

    ex_scenario_legal_case4_title: 'प्रकरण 4: कायदेशीर नोटीस प्राप्त होणे',
    ex_scenario_legal_case4_problem: 'एका व्यक्तीला कायदेशीर नोटीस मिळते आणि त्याचे परिणाम व योग्य प्रतिसाद समजून घ्यायचा असतो.',
    ex_scenario_legal_case4_reality: 'कायदेशीर नोटिसमध्ये काही दावे अंशतः योग्य होते, परंतु त्यात तथ्यात्मक त्रुटीही होत्या.',
    ex_scenario_legal_case4_solution: 'आम्ही प्रत्येक मुद्द्यावर सविस्तर उत्तर तयार करण्यास मदत केली आणि समझोता चर्चेचा सल्ला दिला.',

    faq_legal_title: 'वारंवार विचारले जाणारे प्रश्न',
    faq_legal_description: 'कायदेशीर सल्ल्याबद्दल सामान्य प्रश्न',

    faq_legal_q1: 'कायदेशीर सल्ला म्हणजे काय?',
    faq_legal_a1: 'कायदेशीर सल्ला म्हणजे कायदेशीर व्यावसायिकांसोबत चर्चा करून कायदेशीर मुद्दा समजून घेणे आणि संभाव्य पर्यायांचे मूल्यांकन करणे.',

    faq_legal_q2: 'कायदेशीर सल्ल्यासाठी काय आणावे?',
    faq_legal_a2: 'संबंधित कागदपत्रे, करार आणि वादाशी संबंधित तपशील परिस्थिती अधिक स्पष्टपणे समजून घेण्यास मदत करतात.',

    faq_legal_q3: 'कायदेशीर सल्ल्याद्वारे प्रकरण मजबूत आहे की नाही हे ठरवता येते का?',
    faq_legal_a3: 'होय, कागदपत्रे आणि तथ्यांचे पुनरावलोकन करून प्रकरणाची ताकद आणि संभाव्य धोके ओळखता येतात.',

    faq_legal_q4: 'कायदेशीर नोटीस पाठवण्यापूर्वी सल्ला घेणे उपयुक्त आहे का?',
    faq_legal_a4: 'होय, सल्लामसलत केल्याने कायदेशीर नोटीस पाठवणे किंवा पुढील कारवाई करणे योग्य आहे की नाही हे ठरवता येते.',

    cta_legal_title: 'तुमच्या कायदेशीर परिस्थितीबद्दल स्पष्टता हवी आहे का?',
    cta_legal_description: 'तथ्ये, कागदपत्रे आणि संभाव्य कायदेशीर पर्याय समजून घेतल्यास व्यक्तींना योग्य निर्णय घेण्यास मदत होते. आजच व्यावसायिक कायदेशीर सल्ल्यासाठी आमच्याशी संपर्क साधा.',
    cta_legal_button1: 'मोफत सल्ला घ्या',
    cta_legal_button2: 'आता कॉल करा',

    //------------------------------------------------------------- Legal Conuslation Page Marathi Ends

    // Legal Drafting Page Marathi ---------------------------------------------------------------


    drafting_title_backlink1: 'मुख्यपृष्ठ',
    drafting_title_backlink2: 'कायदेशीर मसुदा तयार करणे व पडताळणी सहाय्य',

    drafting_title: 'कायदेशीर मसुदा तयार करणे व पडताळणी सहाय्य',
    drafting_description: 'महत्त्वपूर्ण कागदपत्रे आणि करारांमध्ये स्पष्टता, अचूकता आणि कायदेशीर संरक्षण सुनिश्चित करणे. कायदेशीर कागदपत्रे अनेक वैयक्तिक, आर्थिक आणि व्यावसायिक निर्णयांची पायाभूत आधार असतात. अगदी छोटी चूक किंवा अस्पष्ट शब्दरचना देखील पुढे गैरसमज किंवा कायदेशीर गुंतागुंत निर्माण करू शकते.',

    what_drafting_title: 'सेवा आढावा',
    what_drafting_description: 'कायदेशीर मसुदा तयार करणे म्हणजे असे कागदपत्र तयार करणे ज्यामध्ये पक्षांमधील अधिकार, जबाबदाऱ्या आणि करार स्पष्टपणे मांडले जातात. या कागदपत्रांमध्ये करार, नोटिसा, करारपत्रे किंवा इतर कायदेशीर नोंदींचा समावेश होऊ शकतो, जे वैयक्तिक, व्यावसायिक किंवा प्रशासकीय बाबींमध्ये वापरले जातात.',
    what_drafting_description1: 'कायदेशीर कागदपत्रांची पडताळणी देखील तितकीच महत्त्वाची आहे. कागदपत्रावर स्वाक्षरी करण्यापूर्वी किंवा सादर करण्यापूर्वी त्याची तपासणी केल्यास अस्पष्ट अटी, अपूर्ण तरतुदी किंवा संभाव्य कायदेशीर धोके ओळखण्यास मदत होते.',
    what_drafting_description2: 'अनेक व्यक्ती आणि व्यवसायांना कागदपत्रांमध्ये वापरली जाणारी कायदेशीर भाषा पूर्णपणे समजत नाही, ज्यामुळे गोंधळ किंवा अनपेक्षित परिणाम उद्भवू शकतात.',
    what_drafting_description3: 'यशोदा टोटल सोल्यूशन',
    what_drafting_description4: 'ग्राहकांना कागदपत्रांचे काळजीपूर्वक पुनरावलोकन करून, कायदेशीर रचना पडताळून आणि स्पष्ट अटी व शर्ती मांडणारे सुव्यवस्थित मसुदे तयार करून मदत करते.',

    what_drafting_key_features: 'कायदेशीर मसुदा प्रक्रिया प्रवाह:',
    what_drafting_key_feature1: '• ग्राहक आपली आवश्यकता स्पष्ट करतो',
    what_drafting_key_feature2: '• कागदपत्रांचे तपशील संकलित केले जातात',
    what_drafting_key_feature3: '• मसुदा तयार केला जातो किंवा विद्यमान कागदपत्राचे पुनरावलोकन केले जाते',
    what_drafting_key_feature4: '• कायदेशीर अटी स्पष्टपणे संरचित केल्या जातात',
    what_drafting_key_feature5: '• अंतिम कागदपत्राची पडताळणी केली जाते',

    common_situations_drafting_title: 'ज्या सामान्य परिस्थितींमध्ये कायदेशीर मसुद्याची आवश्यकता असते',
    common_situations_drafting_description: 'ज्या परिस्थितींमध्ये लिखित करार आवश्यक असतात अशा अनेक प्रसंगी कायदेशीर मसुदा तयार करणे आणि पडताळणी आवश्यक ठरू शकते',

    common_situations_drafting_item1: 'व्यावसायिक करार',
    common_situations_drafting_desc1: 'पक्षांमधील स्पष्ट अटी आणि जबाबदाऱ्यांसह करार तयार करणे.',

    common_situations_drafting_item2: 'मालमत्ता संबंधित कागदपत्रे',
    common_situations_drafting_desc2: 'मालमत्ता किंवा भाडे करार तयार करणे जे अधिकार आणि कर्तव्ये स्पष्ट करतात.',

    common_situations_drafting_item3: 'कायदेशीर नोटिसा',
    common_situations_drafting_desc3: 'योग्य रचना आणि भाषेसह कायदेशीर नोटिसा तयार करणे किंवा उत्तर देणे.',

    common_situations_drafting_item4: 'अधिकृत अर्ज',
    common_situations_drafting_desc4: 'अधिकृत सादरीकरणासाठी औपचारिक तक्रारी किंवा कायदेशीर निवेदने तयार करणे.',

    common_situations_drafting_item5: 'करार पडताळणी',
    common_situations_drafting_desc5: 'स्वाक्षरी करण्यापूर्वी किंवा सादर करण्यापूर्वी कागदपत्रांचे पुनरावलोकन करून जोखमी ओळखणे.',

    why_choose_drafting_title: 'यशोदा टोटल सोल्यूशन का निवडावे?',
    why_choose_drafting_description: 'कायदेशीर मसुदा आणि कागदपत्र पडताळणीसाठी विश्वासार्ह सहाय्य',

    why_choose_drafting_item1: 'अनुभवी व व्यावसायिक टीम',
    why_choose_drafting_desc1: 'उद्योगातील ज्ञान आणि कार्यात्मक कौशल्य असलेले पात्र व्यावसायिक.',

    why_choose_drafting_item2: 'त्वरित आणि पारदर्शक प्रक्रिया',
    why_choose_drafting_desc2: 'स्पष्ट संवाद आणि देखरेखीने समर्थित प्रणालीबद्ध कार्यप्रवाह.',

    why_choose_drafting_item3: 'ग्राहक-केंद्रित दृष्टिकोन',
    why_choose_drafting_desc3: 'प्रत्येक प्रकरण लक्षपूर्वक, सहानुभूतीने आणि नैतिक जबाबदारीने हाताळले जाते.',

    why_choose_drafting_item4: 'विश्वासार्ह सेवा भागीदार',
    why_choose_drafting_desc4: 'विश्वास, विश्वासार्हता आणि सेवा उत्कृष्टतेवर आधारित दीर्घकालीन संबंधांवर लक्ष केंद्रित.',

    process_drafting_title: 'आमची 5-टप्प्यांची कागदपत्र मसुदा प्रक्रिया',
    process_drafting_description: 'सोपे, पारदर्शक आणि प्रभावी दृष्टिकोन',

    process_drafting_step1_title: 'आवश्यकता समजून घेणे',
    process_drafting_step1_desc: 'आम्ही तुमच्या गरजांवर चर्चा करतो, कागदपत्राचा उद्देश समजून घेतो आणि संबंधित पक्षांबद्दल सर्व आवश्यक माहिती गोळा करतो.',

    process_drafting_step2_title: 'माहिती व पुरावा संकलन',
    process_drafting_step2_desc: 'कायदेशीर कागदपत्र तयार करण्यासाठी किंवा पडताळणीसाठी आवश्यक सर्व तपशील, पूरक कागदपत्रे आणि तथ्ये आम्ही गोळा करतो.',

    process_drafting_step3_title: 'कागदपत्र मसुदा किंवा पुनरावलोकन',
    process_drafting_step3_desc: 'आम्ही स्पष्ट कायदेशीर अटींसह सुव्यवस्थित मसुदा तयार करतो किंवा विद्यमान कागदपत्रांची स्पष्टता आणि पूर्णतेसाठी सखोल तपासणी करतो.',

    process_drafting_step4_title: 'कायदेशीर रचना पडताळणी',
    process_drafting_step4_desc: 'आम्ही खात्री करतो की सर्व कायदेशीर अटी, तरतुदी आणि नियम योग्य प्रकारे परिभाषित केलेले आहेत आणि आवश्यकतांशी सुसंगत आहेत.',

    process_drafting_step5_title: 'अंतिम कागदपत्र सुपूर्द करणे',
    process_drafting_step5_desc: 'आम्ही अंतिम पडताळलेले कागदपत्र प्रदान करतो, महत्त्वाच्या अटी स्पष्ट करतो आणि तुमच्या सर्व प्रश्नांची उत्तरे देतो.',

    ex_scenario_drafting_title: 'वास्तविक जीवनातील मसुदा व पडताळणी उदाहरणे',
    ex_scenario_drafting_description: 'ही काही सामान्य परिस्थिती आहेत ज्यामध्ये आम्ही मदत करतो',

    ex_scenario_drafting_problem_label: '❌ समस्या:',
    ex_scenario_drafting_reality_label: '⚠️ वास्तव:',
    ex_scenario_drafting_solution_label: '✅ आमचे समाधान:',

    ex_scenario_drafting_case1_title: 'प्रकरण 1: व्यावसायिक करार मसुदा',
    ex_scenario_drafting_case1_problem: 'दोन व्यावसायिक भागीदार संयुक्त उपक्रम सुरू करण्याची योजना आखतात आणि त्यांच्या भूमिका, आर्थिक योगदान आणि जबाबदाऱ्या स्पष्ट करणारा लेखी करार आवश्यक असतो.',
    ex_scenario_drafting_case1_reality: 'स्पष्ट कागदपत्रांशिवाय भविष्यात भूमिका आणि नफा वाटपाबाबत मतभेद निर्माण होऊ शकतात, ज्यामुळे व्यावसायिक वाद उद्भवू शकतात.',
    ex_scenario_drafting_case1_solution: 'आम्ही एक सविस्तर भागीदारी करार तयार केला ज्यामध्ये प्रत्येक भागीदाराची जबाबदारी, भांडवली योगदान, नफा वाटप आणि निर्गमन अटी स्पष्ट केल्या.',

    ex_scenario_drafting_case2_title: 'प्रकरण 2: मालमत्ता भाडे करार',
    ex_scenario_drafting_case2_problem: 'एक मालमत्ता मालक असा भाडे करार तयार करू इच्छितो ज्यामध्ये भाडे, कालावधी आणि दोन्ही पक्षांच्या जबाबदाऱ्या स्पष्टपणे नमूद केलेल्या असतील.',
    ex_scenario_drafting_case2_reality: 'अनेक भाडे वाद हे देखभाल, भाडेवाढ आणि नोटीस कालावधीशी संबंधित अस्पष्ट अटींमुळे उद्भवतात.',
    ex_scenario_drafting_case2_solution: 'आम्ही भाडे देय अटी, देखभाल जबाबदाऱ्या, जामीन रक्कम आणि समाप्ती तरतुदी समाविष्ट असलेला सविस्तर भाडे करार तयार केला.',

    ex_scenario_drafting_case3_title: 'प्रकरण 3: कायदेशीर नोटीस उत्तर',
    ex_scenario_drafting_case3_problem: 'एका व्यक्तीला कायदेशीर नोटीस प्राप्त होते आणि त्याला आपली भूमिका स्पष्ट करणारा आणि नोटीसमध्ये नमूद केलेल्या दाव्यांना उत्तर देणारा संरचित प्रतिसाद तयार करायचा असतो.',
    ex_scenario_drafting_case3_reality: 'कायदेशीर नोटीसमध्ये असे आरोप होते ज्यांना मुद्देनिहाय उत्तर देणे आणि तथ्य व कायदेशीर संदर्भांसह स्पष्ट करणे आवश्यक होते.',
    ex_scenario_drafting_case3_solution: 'आम्ही एक सविस्तर उत्तर नोटीस तयार केली ज्यामध्ये प्रत्येक आरोपाला उत्तर देण्यात आले, तथ्य स्पष्ट केले गेले आणि कायदेशीर हक्क सुरक्षित ठेवले गेले.',

    ex_scenario_drafting_case4_title: 'प्रकरण 4: स्वाक्षरीपूर्वी कागदपत्र पडताळणी',
    ex_scenario_drafting_case4_problem: 'एका व्यक्तीला करारावर स्वाक्षरी करण्यास सांगितले जाते आणि तो स्वाक्षरी करण्यापूर्वी अटी व शर्ती स्पष्ट आणि कायदेशीरदृष्ट्या योग्य आहेत याची खात्री करू इच्छितो.',
    ex_scenario_drafting_case4_reality: 'करारामध्ये देयक अटी, जबाबदारी मर्यादा आणि समाप्ती अटींबाबत अस्पष्ट तरतुदी होत्या.',
    ex_scenario_drafting_case4_solution: 'आम्ही कराराचे पुनरावलोकन केले, समस्यात्मक तरतुदी अधोरेखित केल्या, सुधारणा सुचवल्या आणि अधिक चांगल्या अटींसाठी वाटाघाटी करण्यात मदत केली.',

    faq_drafting_title: 'वारंवार विचारले जाणारे प्रश्न',
    faq_drafting_description: 'कायदेशीर मसुदा आणि पडताळणीबद्दल सामान्य प्रश्न',

    faq_drafting_q1: 'कायदेशीर मसुदा म्हणजे काय?',
    faq_drafting_a1: 'कायदेशीर मसुदा म्हणजे करार, नोटीस किंवा करारपत्र यांसारखी लिखित कायदेशीर कागदपत्रे तयार करण्याची प्रक्रिया.',

    faq_drafting_q2: 'कागदपत्र पडताळणी का महत्त्वाची आहे?',
    faq_drafting_a2: 'पडताळणीमुळे कागदपत्र वापरण्यापूर्वी अस्पष्ट तरतुदी, अपूर्ण माहिती किंवा संभाव्य कायदेशीर धोके ओळखता येतात.',

    faq_drafting_q3: 'कायदेशीर मसुदा सेवांची गरज कोणाला असू शकते?',
    faq_drafting_a3: 'व्यक्ती, व्यवसाय मालक, मालमत्ता मालक आणि संस्था विविध कायदेशीर कागदपत्रांसाठी मसुदा सहाय्य घेऊ शकतात.',

    faq_drafting_q4: 'मौजूदा कागदपत्रे स्वाक्षरीपूर्वी तपासली जाऊ शकतात का?',
    faq_drafting_a4: 'होय, कागदपत्रांची पडताळणी करून अटी स्पष्ट आणि योग्य आहेत याची खात्री केली जाऊ शकते.',

    cta_drafting_title: 'कागदपत्र मसुदा किंवा पडताळणीसाठी मदत हवी आहे का?',
    cta_drafting_description: 'कागदपत्रांची रचना आणि कायदेशीर शब्दरचना समजून घेतल्यास गोंधळ टाळता येतो आणि वादांची शक्यता कमी होते. व्यावसायिक मसुदा सहाय्यासाठी आजच आमच्याशी संपर्क साधा.',
    cta_drafting_button1: 'मोफत सल्ला घ्या',
    cta_drafting_button2: 'आता कॉल करा',

    // ------------------------------------------------------------------------ Legal Drafting Page Marathi Ends

    // Consumer cases page marathi ------------------------------------------------------------------


    consumer_title_backlink1: 'मुख्यपृष्ठ',
    consumer_title_backlink2: 'ग्राहक संरक्षण सहाय्य',

    consumer_title: 'ग्राहक संरक्षण सहाय्य',
    consumer_description: 'ग्राहक हक्क समजून घेणे आणि दोषपूर्ण उत्पादने, निकृष्ट सेवा किंवा अन्यायकारक व्यापार पद्धतींशी संबंधित वाद हाताळणे. ग्राहक संरक्षण अधिनियम, 2019 अंतर्गत ग्राहकांना कायदेशीर हक्क प्रदान केलेले आहेत, जे त्यांना दोषपूर्ण उत्पादने, निकृष्ट सेवा गुणवत्ता, दिशाभूल करणाऱ्या जाहिराती आणि अन्यायकारक व्यापार पद्धतींपासून संरक्षण देतात.',

    what_consumer_title: 'सेवा आढावा',
    what_consumer_description: 'ग्राहक संरक्षण कायदे हे ग्राहकांना उत्पादने किंवा सेवा खरेदी करताना न्याय्य वागणूक मिळावी यासाठी तयार केलेले आहेत.',
    what_consumer_description1: 'तथापि, अनेक ग्राहकांना दोषपूर्ण वस्तू, निकृष्ट सेवा गुणवत्ता, दिशाभूल करणाऱ्या जाहिराती किंवा परताव्याचा नकार अशा समस्यांचा सामना करताना अडचणी येतात.',
    what_consumer_description2: 'अशा परिस्थितीत ग्राहक संरक्षण प्रक्रिया आणि उपलब्ध पर्याय समजून घेणे महत्त्वाचे ठरते.',
    what_consumer_description3: 'ग्राहक संरक्षण सहाय्य व्यक्तींना ग्राहक म्हणून त्यांच्या हक्कांची आणि व्यवसाय किंवा सेवा प्रदात्यांशी संबंधित वाद हाताळण्याच्या प्रक्रियेची माहिती करून देते.',
    what_consumer_description4: 'यशोदा टोटल सोल्यूशन',
    what_consumer_description5: 'ग्राहकांना ग्राहक संरक्षण प्रक्रिया समजून घेण्यासाठी, आवश्यक कागदपत्रे तयार करण्यासाठी आणि ग्राहक वाद सोडवण्यासाठी योग्य पावले उचलण्याबाबत मार्गदर्शन करून मदत करते.',

    what_consumer_key_features: 'ग्राहक वाद निराकरण प्रक्रिया:',
    what_consumer_key_feature1: '• उत्पादन किंवा सेवा खरेदी केली जाते',
    what_consumer_key_feature2: '• ग्राहकाला समस्या उद्भवते',
    what_consumer_key_feature3: '• तक्रार नोंदवली जाते',
    what_consumer_key_feature4: '• प्राधिकरणांकडून प्रकरणाचे परीक्षण केले जाते',
    what_consumer_key_feature5: '• निराकरण किंवा नुकसानभरपाई दिली जाते',

    common_disputes_consumer_title: 'ग्राहक वादांचे सामान्य प्रकार',
    common_disputes_consumer_description: 'ग्राहकांना वस्तू खरेदी करताना किंवा सेवा वापरताना विविध प्रकारचे वाद उद्भवू शकतात',

    common_disputes_consumer_item1: 'दोषपूर्ण उत्पादने',
    common_disputes_consumer_desc1: 'अशा वस्तू ज्या अपेक्षित किंवा वचन दिल्याप्रमाणे कार्य करत नाहीत किंवा बिघडलेल्या असतात.',

    common_disputes_consumer_item2: 'सेवेतील त्रुटी',
    common_disputes_consumer_desc2: 'निकृष्ट किंवा अपूर्ण सेवा जी निर्धारित मानकांची पूर्तता करत नाही.',

    common_disputes_consumer_item3: 'दिशाभूल करणाऱ्या जाहिराती',
    common_disputes_consumer_desc3: 'जाहिरातींमधील खोटे दावे किंवा अतिशयोक्तीपूर्ण आश्वासने जी ग्राहकांना दिशाभूल करतात.',

    common_disputes_consumer_item4: 'जास्त शुल्क आकारणे',
    common_disputes_consumer_desc4: 'निर्धारित किंमतीपेक्षा अधिक शुल्क आकारणे किंवा माहिती न देता लपविलेले शुल्क लावणे.',

    common_disputes_consumer_item5: 'परतावा नाकारणे',
    common_disputes_consumer_desc5: 'दोषपूर्ण किंवा अयोग्य उत्पादनांसाठी परतावा किंवा बदल देण्यास नकार देणे.',

    why_choose_consumer_title: 'यशोदा टोटल सोल्यूशन का निवडावे?',
    why_choose_consumer_description: 'ग्राहक संरक्षण आणि वाद निराकरणासाठी विश्वासार्ह सहाय्य',

    why_choose_consumer_item1: 'अनुभवी व व्यावसायिक टीम',
    why_choose_consumer_desc1: 'उद्योगातील ज्ञान आणि कार्यात्मक कौशल्य असलेले पात्र व्यावसायिक.',

    why_choose_consumer_item2: 'त्वरित आणि पारदर्शक प्रक्रिया',
    why_choose_consumer_desc2: 'स्पष्ट संवाद आणि देखरेखीने समर्थित प्रणालीबद्ध कार्यप्रवाह.',

    why_choose_consumer_item3: 'ग्राहक-केंद्रित दृष्टिकोन',
    why_choose_consumer_desc3: 'प्रत्येक प्रकरण लक्षपूर्वक, सहानुभूतीने आणि नैतिक जबाबदारीने हाताळले जाते.',

    why_choose_consumer_item4: 'विश्वासार्ह सेवा भागीदार',
    why_choose_consumer_desc4: 'विश्वास, विश्वासार्हता आणि सेवा उत्कृष्टतेवर आधारित दीर्घकालीन संबंधांवर लक्ष केंद्रित.',

    process_consumer_title: 'आमची 6-टप्प्यांची ग्राहक तक्रार प्रक्रिया',
    process_consumer_description: 'सोपे, पारदर्शक आणि प्रभावी दृष्टिकोन',

    process_consumer_step1_title: 'प्रकरण समजून घेणे व कागदपत्र तपासणी',
    process_consumer_step1_desc: 'आम्ही तुमची समस्या समजून घेतो, खरेदीसंबंधित कागदपत्रे तपासतो आणि वादाचे स्वरूप मूल्यांकन करतो.',

    process_consumer_step2_title: 'ग्राहक हक्क मूल्यांकन',
    process_consumer_step2_desc: 'ग्राहक संरक्षण कायद्यांनुसार तुमचे हक्क तपासतो आणि तक्रारीची वैधता निश्चित करतो.',

    process_consumer_step3_title: 'पुरावे व माहिती संकलन',
    process_consumer_step3_desc: 'खरेदी बिल, संवाद नोंदी आणि उत्पादन तपशील यांसह सर्व आवश्यक पुरावे गोळा करण्यात मदत करतो.',

    process_consumer_step4_title: 'तक्रार मसुदा व सादरीकरण',
    process_consumer_step4_desc: 'आम्ही सविस्तर ग्राहक तक्रार तयार करून ती संबंधित ग्राहक मंच किंवा प्राधिकरणाकडे सादर करतो.',

    process_consumer_step5_title: 'पाठपुरावा व उन्नतीकरण',
    process_consumer_step5_desc: 'आम्ही तुमच्या तक्रारीवर पाठपुरावा करतो आणि आवश्यक असल्यास उच्च प्राधिकरणांकडे प्रकरण पुढे नेतो.',

    process_consumer_step6_title: 'निराकरण व नुकसानभरपाई',
    process_consumer_step6_desc: 'तुम्हाला योग्य नुकसानभरपाई, बदल, परतावा किंवा सुधारात्मक कारवाई मिळेल याची खात्री करतो.',

    ex_scenario_consumer_title: 'वास्तविक जीवनातील ग्राहक वाद उदाहरणे',
    ex_scenario_consumer_description: 'ही काही सामान्य परिस्थिती आहेत ज्यांचे निराकरण करण्यात आम्ही मदत करतो',

    ex_scenario_consumer_problem_label: '❌ समस्या:',
    ex_scenario_consumer_reality_label: '⚠️ वास्तव:',
    ex_scenario_consumer_solution_label: '✅ आमचे समाधान:',

    ex_scenario_consumer_case1_title: 'प्रकरण 1: दोषपूर्ण उत्पादन',
    ex_scenario_consumer_case1_problem: 'एक ग्राहक घरगुती उपकरण खरेदी करतो जे खरेदी केल्यानंतर काही काळातच काम करणे बंद करते. विक्रेत्याशी अनेकदा संपर्क साधूनही समस्या सुटत नाही.',
    ex_scenario_consumer_case1_reality: 'विक्रेत्याने उत्पादन बदलण्यास नकार दिला आणि वारंटी कालावधी संपल्याचे सांगितले, जरी दोष वारंटी कालावधीतच झाला होता.',
    ex_scenario_consumer_case1_solution: 'आम्ही दोषाच्या कालावधीचे पुरावे सादर करून ग्राहक तक्रार दाखल केली. ग्राहक मंचाने पूर्ण बदल आणि असुविधेसाठी नुकसानभरपाई देण्याचा आदेश दिला.',

    ex_scenario_consumer_case2_title: 'प्रकरण 2: निकृष्ट सेवा गुणवत्ता',
    ex_scenario_consumer_case2_problem: 'एक ग्राहक सेवेसाठी पैसे भरतो परंतु सेवा प्रदात्याकडून अपूर्ण किंवा असमाधानकारक सेवा मिळते.',
    ex_scenario_consumer_case2_reality: 'सेवा प्रदात्याने केवळ 50% काम पूर्ण केले आणि उर्वरित काम पूर्ण करण्यास किंवा परतावा देण्यास नकार दिला.',
    ex_scenario_consumer_case2_solution: 'आम्ही ग्राहक संरक्षण कायद्यांतर्गत तक्रार दाखल केली. प्रदात्यास सेवा पूर्ण करण्याचे आणि त्रुटीसाठी दंड भरण्याचे आदेश देण्यात आले.',

    ex_scenario_consumer_case3_title: 'प्रकरण 3: दिशाभूल करणारी जाहिरात',
    ex_scenario_consumer_case3_problem: 'एक ग्राहक जाहिरातीतील दाव्यांवर आधारित उत्पादन खरेदी करतो, जे नंतर चुकीचे किंवा अतिशयोक्तीपूर्ण असल्याचे सिद्ध होते.',
    ex_scenario_consumer_case3_reality: 'जाहिरात केलेल्या वैशिष्ट्यांमध्ये पूर्णपणे असत्य माहिती होती आणि प्रत्यक्ष उत्पादन निकृष्ट दर्जाचे होते तसेच अनेक वैशिष्ट्ये अनुपस्थित होती.',
    ex_scenario_consumer_case3_solution: 'आम्ही पुराव्यांसह दिशाभूल करणारी जाहिरात सिद्ध केली. ग्राहकाला पूर्ण परतावा आणि अन्यायकारक व्यापार पद्धतीसाठी नुकसानभरपाई मिळाली.',

    ex_scenario_consumer_case4_title: 'प्रकरण 4: ऑनलाइन खरेदी वाद',
    ex_scenario_consumer_case4_problem: 'एक ग्राहक ई-कॉमर्स प्लॅटफॉर्मवरून उत्पादन ऑर्डर करतो पण त्याला वेगळे उत्पादन मिळते आणि परतावा किंवा बदल मिळवण्यात अडचण येते.',
    ex_scenario_consumer_case4_reality: 'ई-कॉमर्स प्लॅटफॉर्म विविध प्रक्रियात्मक कारणे सांगून परतावा देण्यात विलंब करत राहतो आणि केवळ आंशिक नुकसानभरपाई देण्याची ऑफर देतो.',
    ex_scenario_consumer_case4_solution: 'आम्ही चुकीचे उत्पादन वितरित झाल्याचे पुरावे सादर करून ग्राहक मंचात प्रकरण दाखल केले. पूर्ण परतावा आणि त्रासासाठी नुकसानभरपाई देण्याचा आदेश देण्यात आला.',

    faq_consumer_title: 'वारंवार विचारले जाणारे प्रश्न',
    faq_consumer_description: 'ग्राहक संरक्षणासंबंधी सामान्य प्रश्न',

    faq_consumer_q1: 'ग्राहक संरक्षण सहाय्य म्हणजे काय?',
    faq_consumer_a1: 'यामध्ये ग्राहक हक्क समजून घेणे आणि ग्राहक संरक्षण कायद्यांतर्गत उत्पादने किंवा सेवांशी संबंधित वाद सोडवणे समाविष्ट आहे.',

    faq_consumer_q2: 'ग्राहक संरक्षण अंतर्गत कोणत्या प्रकारच्या समस्या मांडता येतात?',
    faq_consumer_a2: 'दोषपूर्ण वस्तू, निकृष्ट सेवा, दिशाभूल करणाऱ्या जाहिराती आणि परतावा वाद या समस्या ग्राहक संरक्षण कायद्यांतर्गत मांडता येतात.',

    faq_consumer_q3: 'ग्राहक तक्रारीसाठी कोणती कागदपत्रे आवश्यक असतात?',
    faq_consumer_a3: 'सामान्यतः खरेदी बिल, संवाद नोंदी, उत्पादन तपशील आणि समस्येचे वर्णन आवश्यक असते.',

    faq_consumer_q4: 'ऑनलाइन खरेदीशी संबंधित वाद ग्राहक संरक्षण अंतर्गत मांडता येतात का?',
    faq_consumer_a4: 'होय, ई-कॉमर्स प्लॅटफॉर्मवरील खरेदीशी संबंधित वाद देखील ग्राहक संरक्षण नियमांखाली येतात.',

    cta_consumer_title: 'उत्पादन किंवा सेवेसंदर्भात समस्या येत आहे का?',
    cta_consumer_description: 'तुमचे ग्राहक हक्क आणि तक्रार प्रक्रिया समजून घेतल्यास तुम्ही वाद अधिक प्रभावीपणे सोडवू शकता. व्यावसायिक ग्राहक संरक्षण सहाय्यासाठी आजच आमच्याशी संपर्क साधा.',
    cta_consumer_button1: 'मोफत सल्ला घ्या',
    cta_consumer_button2: 'आता कॉल करा',

    // ----------------------------------------------------------------------- Consumer cases page ends marathi

    // Civil Dispute Support Page Marathi -----------------------------------------------------------------


    civil_title_backlink1: 'मुख्यपृष्ठ',
    civil_title_backlink2: 'सिव्हिल वाद सहाय्य',

    civil_title: 'सिव्हिल वाद सहाय्य',
    civil_description: 'सिव्हिल वाद समजून घेणे आणि वैयक्तिक, आर्थिक तसेच मालमत्तेशी संबंधित संघर्ष सोडवण्यासाठी योग्य कायदेशीर दृष्टिकोन ओळखणे. व्यक्ती किंवा व्यवसायांमधील अनेक मतभेद हे फौजदारी कायद्याऐवजी सिव्हिल कायद्यांतर्गत येतात.',

    what_civil_title: 'सेवा आढावा',
    what_civil_description: 'सिव्हिल वाद म्हणजे व्यक्ती, संस्था किंवा व्यवसाय यांच्यातील अधिकार, जबाबदाऱ्या किंवा कर्तव्यांशी संबंधित कायदेशीर मतभेद.',
    what_civil_description1: 'या वादांमध्ये मालमत्ता संबंधित बाबी, करारातील मतभेद, आर्थिक वसुली किंवा कुटुंबाशी संबंधित कायदेशीर मुद्दे समाविष्ट असू शकतात.',
    what_civil_description2: 'फौजदारी प्रकरणांप्रमाणे नसून, सिव्हिल प्रकरणे सामान्यतः कायदेशीर मंच किंवा न्यायालयांद्वारे सोडवली जातात, जिथे पुरावे, करार आणि संबंधित कायद्यांचा अभ्यास करून निर्णय घेतला जातो.',
    what_civil_description3: 'तथापि, अनेक व्यक्तींना सिव्हिल वाद प्रक्रिया गुंतागुंतीची वाटू शकते कारण त्यामध्ये कागदपत्री प्रक्रिया, कायदेशीर कार्यपद्धती आणि पुराव्यांचे सखोल मूल्यांकन समाविष्ट असते.',
    what_civil_description4: 'यशोदा टोटल सोल्यूशन',
    what_civil_description5: 'ग्राहकांना त्यांच्या वादाचे स्वरूप समजून घेण्यास, आवश्यक कागदपत्रे व्यवस्थित करण्यास आणि सिव्हिल प्रकरणे हाताळण्यासाठी योग्य पावले उचलण्यास मार्गदर्शन करून मदत करते.',

    what_civil_key_features: 'सिव्हिल वाद निराकरण प्रक्रिया:',
    what_civil_key_feature1: '• वाद ओळखला जातो',
    what_civil_key_feature2: '• प्रकरणाचे तपशील तपासले जातात',
    what_civil_key_feature3: '• पुरावे आणि कागदपत्रे गोळा केली जातात',
    what_civil_key_feature4: '• कायदेशीर धोरण निश्चित केले जाते',
    what_civil_key_feature5: '• निराकरण प्रक्रिया सुरू केली जाते',

    common_types_civil_title: 'सिव्हिल वादांचे सामान्य प्रकार',
    common_types_civil_description: 'सिव्हिल वाद विविध वैयक्तिक आणि व्यावसायिक परिस्थितींमध्ये उद्भवू शकतात',

    common_types_civil_item1: 'मालमत्ता वाद',
    common_types_civil_desc1: 'मालमत्ता किंवा जमिनीच्या मालकीबाबतचे मतभेद, ज्यामध्ये सीमा वाद आणि हक्कांशी संबंधित प्रश्नांचा समावेश होतो.',

    common_types_civil_item2: 'कुटुंब व वारसा संबंधित बाबी',
    common_types_civil_desc2: 'वारसा वाद आणि कुटुंबाशी संबंधित कायदेशीर प्रकरणे ज्यांचे निराकरण आवश्यक असते.',

    common_types_civil_item3: 'आर्थिक वसुलीचे मुद्दे',
    common_types_civil_desc3: 'आर्थिक किंवा कर्ज वसुलीशी संबंधित प्रकरणे, ज्यामध्ये कर्ज परतफेड वादांचा समावेश होतो.',

    common_types_civil_item4: 'भाडेकरू व मालक वाद',
    common_types_civil_desc4: 'भाडे, देखभाल किंवा बेदखली संदर्भातील मालक आणि भाडेकरू यांच्यातील मतभेद.',

    common_types_civil_item5: 'करार उल्लंघन',
    common_types_civil_desc5: 'व्यावसायिक किंवा वैयक्तिक व्यवहारांमध्ये पक्षांदरम्यान करार किंवा समझोत्याचे उल्लंघन.',

    why_choose_civil_title: 'यशोदा टोटल सोल्यूशन का निवडावे?',
    why_choose_civil_description: 'सिव्हिल वाद निराकरण आणि कायदेशीर सहाय्यासाठी विश्वासार्ह समर्थन',

    why_choose_civil_item1: 'अनुभवी व व्यावसायिक टीम',
    why_choose_civil_desc1: 'उद्योगातील ज्ञान आणि कार्यात्मक कौशल्य असलेले पात्र व्यावसायिक.',

    why_choose_civil_item2: 'त्वरित व पारदर्शक प्रक्रिया',
    why_choose_civil_desc2: 'स्पष्ट संवाद आणि देखरेखीने समर्थित प्रणालीबद्ध कार्यप्रवाह.',

    why_choose_civil_item3: 'ग्राहक-केंद्रित दृष्टिकोन',
    why_choose_civil_desc3: 'प्रत्येक प्रकरण लक्षपूर्वक, सहानुभूतीने आणि नैतिक जबाबदारीने हाताळले जाते.',

    why_choose_civil_item4: 'विश्वासार्ह सेवा भागीदार',
    why_choose_civil_desc4: 'विश्वास, विश्वासार्हता आणि सेवा उत्कृष्टतेवर आधारित दीर्घकालीन संबंधांवर लक्ष केंद्रित.',

    process_civil_title: 'आमची 6-टप्प्यांची सिव्हिल वाद निराकरण प्रक्रिया',
    process_civil_description: 'सोपे, पारदर्शक आणि प्रभावी दृष्टिकोन',

    process_civil_step1_title: 'वाद समजून घेणे व मूल्यांकन',
    process_civil_step1_desc: 'आम्ही तुमचा सिव्हिल वाद समजून घेतो, परिस्थितीचे पुनरावलोकन करतो आणि प्रकरणाचे स्वरूप व वैधता तपासतो.',

    process_civil_step2_title: 'कागदपत्रे व पुरावे तपासणी',
    process_civil_step2_desc: 'आम्ही वादाशी संबंधित सर्व कागदपत्रे, करार, नोंदी आणि पुरावे तपासतो.',

    process_civil_step3_title: 'कायदेशीर स्थितीचे मूल्यांकन',
    process_civil_step3_desc: 'लागू सिव्हिल कायद्यांनुसार तुमची कायदेशीर स्थिती, हक्क आणि जबाबदाऱ्या तपासतो.',

    process_civil_step4_title: 'धोरण व समझोता चर्चा',
    process_civil_step4_desc: 'आम्ही संभाव्य निराकरण धोरणांवर चर्चा करतो, ज्यामध्ये समझोता पर्याय आणि कायदेशीर कार्यवाहीचा समावेश असतो.',

    process_civil_step5_title: 'कायदेशीर कारवाई व दाखल',
    process_civil_step5_desc: 'गरज असल्यास, आम्ही योग्य कायदेशीर मंचात प्रकरण दाखल करण्यात आणि आवश्यक कागदपत्रे तयार करण्यात मदत करतो.',

    process_civil_step6_title: 'पाठपुरावा व निराकरण',
    process_civil_step6_desc: 'आम्ही प्रकरणाच्या कार्यवाहीवर लक्ष ठेवतो आणि न्याय्य निराकरण साध्य करण्यासाठी प्रयत्न करतो.',

    ex_scenario_civil_title: 'वास्तविक जीवनातील सिव्हिल वाद उदाहरणे',
    ex_scenario_civil_description: 'ही काही सामान्य परिस्थिती आहेत ज्यांचे निराकरण करण्यात आम्ही मदत करतो',

    ex_scenario_civil_problem_label: '❌ समस्या:',
    ex_scenario_civil_reality_label: '⚠️ वास्तव:',
    ex_scenario_civil_solution_label: '✅ आमचे समाधान:',

    ex_scenario_civil_case1_title: 'प्रकरण 1: मालमत्ता मालकी वाद',
    ex_scenario_civil_case1_problem: 'दोन कुटुंब सदस्य एकाच पिढीजात मालमत्तेवर मालकी हक्क सांगतात, ज्यामुळे हक्क आणि वापराबाबत वाद निर्माण होतो.',
    ex_scenario_civil_case1_reality: 'दोन्ही पक्षांकडे अंशतः कागदपत्रे होती पण स्पष्ट नोंदणीकृत मालकी नव्हती. अनेक वर्षे कायदेशीर स्पष्टता नसल्यामुळे वाद वाढत गेला.',
    ex_scenario_civil_case1_solution: 'आम्ही सर्व कागदपत्रे तपासली, कायदेशीर वेळापत्रक निश्चित केले आणि विभागणीचा दावा दाखल केला. मालमत्ता कायदेशीर वारसाहक्कानुसार विभाजित करण्यात आली.',

    ex_scenario_civil_case2_title: 'प्रकरण 2: आर्थिक वसुली समस्या',
    ex_scenario_civil_case2_problem: 'एक व्यक्ती दुसऱ्या व्यक्तीस पैसे उधार देतो पण वारंवार विनंती करूनही पैसे परत मिळवण्यात अडचण येते.',
    ex_scenario_civil_case2_reality: 'उधार घेणाऱ्या व्यक्तीने तोंडी कर्ज मान्य केले पण कायदेशीर कागदपत्रांच्या अभावामुळे आर्थिक अडचणीचे कारण देऊन परतफेड नाकारली.',
    ex_scenario_civil_case2_solution: 'आम्ही बँक व्यवहार आणि संवाद यांसह पुरावे गोळा केले. वसुलीसाठी सिव्हिल दावा दाखल केला आणि न्यायालयाचा परतफेडीचा आदेश मिळवला.',

    ex_scenario_civil_case3_title: 'प्रकरण 3: भाडेकरू व मालक वाद',
    ex_scenario_civil_case3_problem: 'एक मालकाला भाडे उशिरा मिळण्याची समस्या आहे, तर भाडेकरू भाडे करारातील काही अटींवर आक्षेप घेतो.',
    ex_scenario_civil_case3_reality: 'भाडे करारामध्ये देखभाल जबाबदाऱ्यांबाबत अस्पष्ट तरतुदी होत्या, ज्यामुळे भाडे संबंधित वाद निर्माण झाला.',
    ex_scenario_civil_case3_solution: 'आम्ही करारातील अटी स्पष्ट केल्या, मध्यस्थी केली आणि देखभाल वाद सोडवण्यासाठी स्पष्ट परिशिष्ट तयार करण्यास मदत केली.',

    ex_scenario_civil_case4_title: 'प्रकरण 4: करार उल्लंघन',
    ex_scenario_civil_case4_problem: 'दोन पक्षांमध्ये व्यावसायिक करार केला जातो, पण एक पक्ष ठरलेल्या जबाबदाऱ्या पूर्ण करत नाही.',
    ex_scenario_civil_case4_reality: 'एका पक्षाने निकृष्ट काम केले आणि वेळमर्यादा पाळली नाही, ज्यामुळे दुसऱ्या पक्षाला आर्थिक नुकसान झाले.',
    ex_scenario_civil_case4_solution: 'आम्ही कागदपत्रांच्या आधारे करार उल्लंघन सिद्ध केले, सिव्हिल दावा दाखल केला आणि नुकसानभरपाई तसेच करार समाप्ती सुनिश्चित केली.',

    faq_civil_title: 'वारंवार विचारले जाणारे प्रश्न',
    faq_civil_description: 'सिव्हिल वादांबाबत सामान्य प्रश्न',

    faq_civil_q1: 'सिव्हिल वाद म्हणजे काय?',
    faq_civil_a1: 'सिव्हिल वाद म्हणजे व्यक्ती किंवा संस्थांमध्ये अधिकार, जबाबदाऱ्या किंवा कर्तव्यांशी संबंधित कायदेशीर मतभेद.',

    faq_civil_q2: 'कोणते मुद्दे सिव्हिल वादांतर्गत येतात?',
    faq_civil_a2: 'मालमत्ता वाद, आर्थिक वसुली, करार उल्लंघन, मालक-भाडेकरू वाद आणि कुटुंबाशी संबंधित कायदेशीर बाबी सिव्हिल वादांतर्गत येतात.',

    faq_civil_q3: 'सिव्हिल वाद न्यायालयात न जाता सोडवता येतात का?',
    faq_civil_a3: 'काही प्रकरणांमध्ये, औपचारिक कायदेशीर कारवाईपूर्वी संवाद, मध्यस्थी किंवा समझोत्याद्वारे वाद सोडवता येतात.',

    faq_civil_q4: 'सिव्हिल वादांसाठी कोणती कागदपत्रे आवश्यक असतात?',
    faq_civil_a4: 'संबंधित करार, मालमत्ता नोंदी, आर्थिक कागदपत्रे, संवाद इतिहास आणि वादाशी संबंधित पुरावे आवश्यक असतात.',

    cta_civil_title: 'तुम्हाला मालमत्ता, आर्थिक व्यवहार किंवा करारांशी संबंधित सिव्हिल वादाचा सामना करावा लागत आहे का?',
    cta_civil_description: 'वादाचे स्वरूप समजून घेणे आणि आवश्यक कागदपत्रे व्यवस्थित करणे यामुळे व्यक्तींना सिव्हिल प्रकरणे अधिक प्रभावीपणे हाताळता येतात. व्यावसायिक सिव्हिल वाद सहाय्यासाठी आजच आमच्याशी संपर्क साधा.',
    cta_civil_button1: 'मोफत सल्ला घ्या',
    cta_civil_button2: 'आता कॉल करा',

    // ----------------------------------------------------------- Civil Dispute Support Page Ends Marathi

    //Cheque Bounce Page Marathi ----------------------------------------------------------------------


    cheque_title_backlink1: 'मुख्यपृष्ठ',
    cheque_title_backlink2: 'चेक बाउन्स प्रकरणे',

    cheque_title: 'चेक बाउन्स प्रकरण सहाय्य',
    cheque_description: 'चेक बाउन्सच्या परिस्थिती समजून घेणे आणि थकित रकमेची वसुली करण्यासाठी उपलब्ध कायदेशीर प्रक्रियेची ओळख करून घेणे. चेक बाउन्स तेव्हा होतो जेव्हा बँक अपुरी शिल्लक किंवा खात्याशी संबंधित समस्यांमुळे चेक प्रक्रिया करण्यास नकार देते, ज्यामुळे पेमेंटची अपेक्षा असलेल्या व्यक्ती किंवा व्यवसायांसाठी आर्थिक ताण निर्माण होतो.',

    what_cheque_title: 'सेवा आढावा',
    what_cheque_description: 'चेक बाउन्स प्रकरणे तेव्हा उद्भवतात जेव्हा एका पक्षाने दिलेला चेक बँकेकडून अपूर्ण (अनपेड) परत केला जातो. हे अपुरी शिल्लक, बंद खाते, स्वाक्षरीतील विसंगती किंवा इतर बँकिंग कारणांमुळे होऊ शकते.',
    what_cheque_description1: 'पेमेंटची अपेक्षा असलेल्या व्यक्तीसाठी बाउन्स झालेला चेक आर्थिक अनिश्चितता निर्माण करू शकतो आणि देय रक्कम मिळण्यात विलंब होऊ शकतो.',
    what_cheque_description2: 'अशा परिस्थितीत कायद्याने ठरवलेल्या विशिष्ट प्रक्रियांचे पालन करणे आवश्यक असते. या प्रक्रियांमध्ये चेक रिटर्न मेमो प्राप्त करणे, निर्धारित कालावधीत कायदेशीर नोटीस पाठवणे आणि पेमेंट न झाल्यास पुढील कायदेशीर कारवाई सुरू करणे यांचा समावेश होतो.',
    what_cheque_description3: 'यशोदा टोटल सोल्यूशन',
    what_cheque_description4: 'व्यक्ती आणि व्यवसायांना चेक बाउन्स प्रकरणांतील प्रक्रिया समजून घेण्यासाठी मदत करते आणि या समस्येचे निराकरण करण्यासाठी आवश्यक कागदपत्रे व प्रक्रियात्मक टप्प्यांमध्ये मार्गदर्शन करते.',

    what_cheque_key_features: 'चेक बाउन्स कायदेशीर प्रक्रिया प्रवाह:',
    what_cheque_key_feature1: '• चेक जारी केला जातो',
    what_cheque_key_feature2: '• चेक जमा केला जातो',
    what_cheque_key_feature3: '• चेक बाउन्स होतो',
    what_cheque_key_feature4: '• बँकेकडून रिटर्न मेमो जारी केला जातो',
    what_cheque_key_feature5: '• कायदेशीर नोटीस पाठवली जाते',

    common_indicators_cheque_title: 'चेक बाउन्स परिस्थितीची सामान्य लक्षणे',
    common_indicators_cheque_description: 'काही परिस्थिती चेक बाउन्सची समस्या उद्भवल्याचे संकेत देऊ शकतात',

    common_indicators_cheque_item1: 'चेक परत येणे',
    common_indicators_cheque_desc1: 'बँक अपुरी शिल्लक किंवा इतर कारणांमुळे चेक न भरता परत करते.',

    common_indicators_cheque_item2: 'रिटर्न मेमो जारी होणे',
    common_indicators_cheque_desc2: 'चेक बाउन्सचे कारण स्पष्ट करणारा रिटर्न मेमो बँकेकडून दिला जातो.',

    common_indicators_cheque_item3: 'पेमेंटमध्ये विलंब',
    common_indicators_cheque_desc3: 'वचन दिलेल्या पेमेंटमध्ये विलंब झाल्यामुळे आर्थिक अनिश्चितता निर्माण होते.',

    common_indicators_cheque_item4: 'संवादातील वाद',
    common_indicators_cheque_desc4: 'पेमेंट संदर्भात देणारा आणि घेणारा यांच्यातील संवादातील मतभेद.',

    common_indicators_cheque_item5: 'कायदेशीर कारवाईचा विचार',
    common_indicators_cheque_desc5: 'रक्कम वसुलीसाठी पुढील कायदेशीर पावले कोणती असावीत याबद्दल अनिश्चितता.',

    why_choose_cheque_title: 'यशोदा टोटल सोल्यूशन का निवडावे?',
    why_choose_cheque_description: 'चेक बाउन्स प्रकरणांचे निराकरण आणि वसुलीसाठी विश्वासार्ह सहाय्य',

    why_choose_cheque_item1: 'अनुभवी व व्यावसायिक टीम',
    why_choose_cheque_desc1: 'उद्योगातील ज्ञान आणि कार्यात्मक कौशल्य असलेले पात्र व्यावसायिक.',

    why_choose_cheque_item2: 'त्वरित व पारदर्शक प्रक्रिया',
    why_choose_cheque_desc2: 'स्पष्ट संवाद आणि देखरेखीने समर्थित प्रणालीबद्ध कार्यप्रवाह.',

    why_choose_cheque_item3: 'ग्राहक-केंद्रित दृष्टिकोन',
    why_choose_cheque_desc3: 'प्रत्येक प्रकरण लक्षपूर्वक, सहानुभूतीने आणि नैतिक जबाबदारीने हाताळले जाते.',

    why_choose_cheque_item4: 'विश्वासार्ह सेवा भागीदार',
    why_choose_cheque_desc4: 'विश्वास, विश्वासार्हता आणि सेवा उत्कृष्टतेवर आधारित दीर्घकालीन संबंधांवर लक्ष केंद्रित.',

    process_cheque_title: 'आमची 6-टप्प्यांची चेक बाउन्स निराकरण प्रक्रिया',
    process_cheque_description: 'सोपे, पारदर्शक आणि प्रभावी दृष्टिकोन',

    process_cheque_step1_title: 'प्रकरण पुनरावलोकन व कागदपत्र तपासणी',
    process_cheque_step1_desc: 'आम्ही बाउन्स झालेला चेक, बँक रिटर्न मेमो तपासतो आणि संपूर्ण परिस्थिती व कालरेषा समजून घेतो.',

    process_cheque_step2_title: 'पुरावे संकलन व पडताळणी',
    process_cheque_step2_desc: 'मूळ चेक, रिटर्न मेमो आणि व्यवहार नोंदींसह सर्व कागदपत्रे गोळा करून पडताळणी करतो.',

    process_cheque_step3_title: 'कायदेशीर नोटीस तयारी',
    process_cheque_step3_desc: 'आम्ही निर्धारित कालावधीत चेक देणाऱ्यास कायदेशीरदृष्ट्या वैध नोटीस तयार करून पाठवतो.',

    process_cheque_step4_title: 'प्रतिक्रिया निरीक्षण व पाठपुरावा',
    process_cheque_step4_desc: 'कायदेशीर नोटीसवरील प्रतिसादावर लक्ष ठेवतो आणि ठरलेल्या वेळेत पाठपुरावा करतो.',

    process_cheque_step5_title: 'तक्रार दाखल व न्यायालयीन प्रक्रिया',
    process_cheque_step5_desc: 'पेमेंट न झाल्यास, परक्राम्य लिखत अधिनियमाच्या कलम 138 अंतर्गत तक्रार दाखल करण्यास मदत करतो.',

    process_cheque_step6_title: 'वसुली व निराकरण',
    process_cheque_step6_desc: 'आम्ही न्यायालयीन प्रक्रियेवर लक्ष ठेवतो आणि रकमेची वसुली किंवा कायदेशीर निराकरण साध्य करण्यासाठी कार्य करतो.',

    ex_scenario_cheque_title: 'वास्तविक जीवनातील चेक बाउन्स उदाहरणे',
    ex_scenario_cheque_description: 'ही काही सामान्य परिस्थिती आहेत ज्यांचे निराकरण करण्यात आम्ही मदत करतो',

    ex_scenario_cheque_problem_label: '❌ समस्या:',
    ex_scenario_cheque_reality_label: '⚠️ वास्तव:',
    ex_scenario_cheque_solution_label: '✅ आमचे समाधान:',

    ex_scenario_cheque_case1_title: 'प्रकरण 1: व्यावसायिक पेमेंट वाद',
    ex_scenario_cheque_case1_problem: 'एक व्यावसायिक मालकाला पुरवलेल्या मालाच्या पेमेंटसाठी ग्राहकाकडून चेक मिळतो. चेक जमा केल्यानंतर बँक अपुरी शिल्लक असल्यामुळे तो परत करते.',
    ex_scenario_cheque_case1_reality: 'ग्राहकाने आर्थिक अडचणीचे कारण देत अनेक महिने पेमेंट लांबवले, ज्यामुळे व्यवसायाचा रोख प्रवाह आणि कामकाज प्रभावित झाले.',
    ex_scenario_cheque_case1_solution: 'आम्ही बाउन्स झाल्यानंतर 30 दिवसांच्या आत कायदेशीर नोटीस पाठवली. पेमेंट न झाल्यास कलम 138 अंतर्गत तक्रार दाखल केली. न्यायालयाने व्याज व दंडासह पेमेंट करण्याचा आदेश दिला.',

    ex_scenario_cheque_case2_title: 'प्रकरण 2: वैयक्तिक कर्ज परतफेड',
    ex_scenario_cheque_case2_problem: 'एक व्यक्ती आपल्या मित्राला पैसे उधार देतो, जो नंतर परतफेडीसाठी चेक देतो. हा चेक बँकेकडून न भरता परत केला जातो.',
    ex_scenario_cheque_case2_reality: 'मित्राने कॉल व संदेशांना प्रतिसाद देणे बंद केले, ज्यामुळे कर्ज देणाऱ्याला रक्कम वसूल करण्यासाठी कोणताही थेट मार्ग उरला नाही.',
    ex_scenario_cheque_case2_solution: 'आम्ही कायदेशीर नोटीस दिली, सर्व पुरावे संकलित केले आणि फौजदारी तक्रार दाखल केली. त्रासासाठी नुकसानभरपाईसह वसुलीचा आदेश मिळवला.',

    ex_scenario_cheque_case3_title: 'प्रकरण 3: व्यावसायिक व्यवहार',
    ex_scenario_cheque_case3_problem: 'एक पुरवठादाराला वितरित मालासाठी किरकोळ विक्रेत्याकडून चेक मिळतो, पण खात्यात पुरेशी रक्कम नसल्यामुळे चेक परत होतो.',
    ex_scenario_cheque_case3_reality: 'सलग अनेक चेक बाउन्स झाले, ज्यामुळे पेमेंट टाळण्याचा हेतुपुरस्सर प्रयत्न दिसून आला.',
    ex_scenario_cheque_case3_solution: 'आम्ही सर्व बाउन्स चेकसाठी तक्रारी दाखल केल्या, न भरपाईचा नमुना सिद्ध केला आणि पूर्ण वसुलीसह नुकसानभरपाई मिळवली.',

    ex_scenario_cheque_case4_title: 'प्रकरण 4: विलंबित सेटलमेंट',
    ex_scenario_cheque_case4_problem: 'एका व्यक्तीस आर्थिक सेटलमेंटचा भाग म्हणून चेक मिळतो, पण तो न भरता परत होतो, ज्यामुळे वचन दिलेल्या रकमेच्या वसुलीबाबत अनिश्चितता निर्माण होते.',
    ex_scenario_cheque_case4_reality: 'चेक देणाऱ्याने चेक दिल्यानंतर लगेचच बँक खाते बंद केले, ज्यामुळे फसवणुकीचा हेतू स्पष्ट झाला.',
    ex_scenario_cheque_case4_solution: 'आम्ही बँक नोंदींच्या आधारे फसवणूक सिद्ध केली, फौजदारी तक्रार दाखल केली आणि कठोर शिक्षा तसेच रक्कम वसुलीचा आदेश मिळवला.',

    faq_cheque_title: 'वारंवार विचारले जाणारे प्रश्न',
    faq_cheque_description: 'चेक बाउन्स प्रकरणांबाबत सामान्य प्रश्न',

    faq_cheque_q1: 'चेक बाउन्स म्हणजे काय?',
    faq_cheque_a1: 'चेक बाउन्स तेव्हा होतो जेव्हा बँक अपुरी शिल्लक, खाते बंद होणे, स्वाक्षरी विसंगती किंवा इतर कारणांमुळे चेक प्रक्रिया करण्यास नकार देते.',

    faq_cheque_q2: 'चेक रिटर्न मेमो म्हणजे काय?',
    faq_cheque_a2: 'चेक रिटर्न मेमो हा बँकेकडून दिलेला दस्तऐवज असतो जो चेक का प्रक्रिया झाला नाही आणि न भरता परत का करण्यात आला हे स्पष्ट करतो.',

    faq_cheque_q3: 'चेक बाउन्स प्रकरणांमध्ये कायदेशीर कारवाई करता येते का?',
    faq_cheque_a3: 'होय, परक्राम्य लिखत अधिनियमाच्या कलम 138 अंतर्गत चेक अनादरासाठी कायदेशीर कारवाई करता येते.',

    faq_cheque_q4: 'चेक बाउन्स प्रकरणांमध्ये कोणती कागदपत्रे आवश्यक असतात?',
    faq_cheque_a4: 'आवश्यक कागदपत्रांमध्ये मूळ चेक, बँक रिटर्न मेमो, जमा पावती आणि पक्षांमधील संवाद नोंदी यांचा समावेश होतो.',

    cta_cheque_title: 'बाउन्स झालेल्या चेकमुळे अडचणींचा सामना करत आहात का?',
    cta_cheque_description: 'कायदेशीर प्रक्रिया आणि कागदपत्रांच्या आवश्यकतांची समज व्यक्ती आणि व्यवसायांना चेक बाउन्स परिस्थिती अधिक प्रभावीपणे हाताळण्यास मदत करू शकते. व्यावसायिक चेक बाउन्स सहाय्यासाठी आजच आमच्याशी संपर्क साधा.',
    cta_cheque_button1: 'मोफत सल्ला घ्या',
    cta_cheque_button2: 'आता कॉल करा',

    // --------------------------------------------------------------------- Cheque Bounce Page Marathi Ends

    // Reviews Page Marathi
    reviews_page_title: 'तुमची समीक्षा सबमिट करा',
    reviews_page_subtitle: 'तुमचा अनुभव शेअर करा आणि इतरांना माहितीपूर्ण निर्णय घेण्यास मदत करा',
    reviews_form_title: 'तुमचा अभिप्राय शेअर करा',
    reviews_form_subtitle: 'आम्ही तुमच्या मताची कदर करतो. कृपया यशोदा टोटल सोल्यूशनसोबतचा तुमचा अनुभव शेअर करा.',
    reviews_name_label: 'तुमचे नाव',
    reviews_name_placeholder: 'तुमचे पूर्ण नाव टाका',
    reviews_city_label: 'तुमचे शहर',
    reviews_city_placeholder: 'तुमचे शहर टाका',
    reviews_rating_label: 'तुमचे रेटिंग',
    reviews_message_label: 'तुमची समीक्षा',
    reviews_message_placeholder: 'आमच्यासोबतचा तुमचा अनुभव शेअर करा...',
    reviews_submit_btn: 'समीक्षा सबमिट करा',
    reviews_submitting: 'सबमिट होत आहे...',
    reviews_success_title: 'तुमच्या अभिप्रायासाठी धन्यवाद!',
    reviews_success_message: 'तुमची समीक्षा मंजुरीनंतर प्रकाशित केली जाईल. तुम्ही तुमचा अनुभव शेअर करण्यासाठी वेळ काढला याबद्दल आम्ही तुमचे कौतुक करतो.',
    reviews_another_btn: 'दुसरी समीक्षा सबमिट करा',
    reviews_why_title: 'तुमची समीक्षा का महत्त्वाची आहे',
    reviews_why1_title: 'इतरांना मदत करते',
    reviews_why1_desc: 'तुमचा प्रामाणिक अभिप्राय इतरांना आमच्या सेवांबद्दल माहितीपूर्ण निर्णय घेण्यास मदत करतो.',
    reviews_why2_title: 'सेवा सुधारते',
    reviews_why2_desc: 'आम्ही तुमच्या अभिप्रायाचा वापर सतत सुधारणा आणि चांगली सेवा देण्यासाठी करतो.',
    reviews_why3_title: 'विश्वास निर्माण करते',
    reviews_why3_desc: 'प्रामाणिक समीक्षा आमच्या समुदायात विश्वास आणि पारदर्शकता निर्माण करतात.',

    // Contact Page Marathi -------------------------------------------------------------------


    contact_page_title: 'संपर्क करा',
    contact_page_subtitle: 'कोणत्याही सहाय्यासाठी आमच्याशी संपर्क साधा',

    contact_info_title: 'संपर्क माहिती',
    contact_info_subtitle: 'खालील कोणत्याही माध्यमातून आमच्याशी संपर्क साधा',

    contact_phone_title: 'फोन नंबर',
    contact_phone_number: '+91 9649647790',

    contact_email_title: 'ईमेल पत्ता',
    contact_email_address: 'info@yashodatotalsolution.com',

    contact_address_title: 'मुख्य कार्यालय',
    contact_address_text: '2B 70, यशोदा टोटल सोल्यूशन्स, फिनिक्स पॅरागॉन प्लाझा, लाल बहादुर शास्त्री मार्ग, कमानी, कुर्ला (पश्चिम), मुंबई, महाराष्ट्र 400070',

    contact_form_title: 'आम्हाला संदेश पाठवा',
    contact_form_subtitle: 'काही समस्या आहे का? तुमची माहिती सबमिट करा, आमची टीम लवकरच तुमच्याशी संपर्क साधेल।',

    contact_name_label: 'तुमचे नाव',
    contact_name_placeholder: 'तुमचे पूर्ण नाव प्रविष्ट करा',

    contact_phone_label: 'फोन नंबर',
    contact_phone_placeholder: 'तुमचा फोन नंबर प्रविष्ट करा',

    contact_message_label: 'तुमचा संदेश',
    contact_message_placeholder: 'तुमची समस्या किंवा प्रश्न लिहा...',

    contact_submit_btn: 'संदेश पाठवा',
    contact_submitting: 'पाठवले जात आहे...',

    contact_success_title: 'संदेश यशस्वीरित्या पाठवला गेला!',
    contact_success_message: 'आमच्याशी संपर्क साधल्याबद्दल धन्यवाद. आमची टीम लवकरच तुमच्याशी संपर्क साधेल.',

    contact_another_btn: 'आणखी एक संदेश पाठवा',
    contact_whatsapp_btn: 'चॅट करा',
    chat_prefix: "",
    yashify_name: "यशिफाय",
    chat_suffix: "सोबत चॅट करा",

    contact_map_title: 'गूगल मॅपवरील स्थान',

    contact_location_label: "स्थान",
    contact_location_placeholder: "तुमचे शहर किंवा परिसर प्रविष्ट करा",

    contact_service_label: "सेवा निवडा",
    contact_service_placeholder: "एक सेवा निवडा",

    service_mis_selling1: 'विमा पॉलिसीची चुकीची विक्री',
    service_claim_rejection1: 'विमा दावा नाकारला जाणे',
    service_claim_delay1: 'दावा प्रक्रियेत विलंब',
    service_claim_short_settled1: 'आंशिक दावा सेटलमेंट',
    service_health_reimbursement1: 'आरोग्य दावा परतावा',
    service_pmsby1: 'प्रधानमंत्री सुरक्षा विमा योजना (PMSBY)',
    service_pmjjby1: 'प्रधानमंत्री जीवन ज्योती विमा योजना (PMJJBY)',
    service_state_cm_scheme1: 'राज्य मुख्यमंत्री विमा योजना',
    service_banking_atm1: 'बँकिंग आणि एटीएम कार्ड विमा दावा',
    service_pf_accidental1: 'पीएफ अपघाती विमा दावा',
    service_legal_consultation1: 'कायदेशीर सल्ला',
    service_legal_drafting1: 'कायदेशीर मसुदा आणि पडताळणी सहाय्य',
    service_consumer_cases1: 'ग्राहक संरक्षण सहाय्य',
    service_civil_cases1: 'सिव्हिल वाद सहाय्य',
    service_cheque_bounce1: 'चेक बाऊन्स प्रकरणे',
    service_other1: 'इतर सेवा',

    our_network_title: 'आमचे नेटवर्क',
    our_network_desc1: 'यशोदा टोटल सोल्यूशन्स आपले कार्यक्षेत्र विस्तारत आहे ',
    our_network_desc2: 'संपूर्ण भारतभर',
    our_network_desc3: ' जेणेकरून देशभर सेवा उपलब्ध होतील.',
    our_network_desc4: 'आमचे वाढते नेटवर्क विविध राज्यांमध्ये प्रशिक्षित सेल्स आणि सपोर्ट टीमसह सेवा प्रदान करण्याचे उद्दिष्ट ठेवते.',

    network_stat1_number: 'संपूर्ण भारतभर',
    network_stat1_desc: 'देशव्यापी सेवा',

    network_stat2_number: 'वाढत आहे',
    network_stat2_desc: 'प्रशिक्षित सेल्स आणि सपोर्ट टीम',

    network_stat3_number: 'अनेक',
    network_stat3_desc: 'राज्ये आणि शहरे',

    network_cta_button: 'आमच्या वाढत्या सेवा नेटवर्कमध्ये सामील व्हा',

    // India Map Branches

    map_mumbai_branch: 'मुंबई मुख्य कार्यालय',
    map_mumbai_branch_addr: '2B 70, यशोदा टोटल सोल्यूशन, फिनिक्स पॅरागॉन प्लाझा, लाल बहादूर शास्त्री मार्ग, कामानी, कुर्ला (पश्चिम), मुंबई, महाराष्ट्र 400070',
    map_pune_branch: 'पुणे शाखा',
    map_pune_branch_addr: 'लवकरच उपलब्ध...',
    map_nagpur_branch: 'नागपूर शाखा',
    map_nagpur_branch_addr: 'लवकरच उपलब्ध...',
    map_nashik_branch: 'नाशिक शाखा',
    map_nashik_branch_addr: 'लवकरच उपलब्ध...',
    map_kolhapur_branch: 'कोल्हापूर शाखा',
    map_kolhapur_branch_addr: 'लवकरच उपलब्ध...',
    map_solapur_branch: 'सोलापूर शाखा',
    map_solapur_branch_addr: 'लवकरच उपलब्ध...',
    map_satara_branch: 'सातारा शाखा',
    map_satara_branch_addr: 'लवकरच उपलब्ध...',

    map_ahmedabad_branch: 'अहमदाबाद शाखा',
    map_ahmedabad_branch_addr: 'लवकरच उपलब्ध...',
    map_surat_branch: 'सुरत शाखा',
    map_surat_branch_addr: 'लवकरच उपलब्ध...',
    map_rajkot_branch: 'राजकोट शाखा',
    map_rajkot_branch_addr: 'लवकरच उपलब्ध...',

    map_indore_branch: 'इंदौर शाखा',
    map_indore_branch_addr: 'लवकरच उपलब्ध...',

    map_lucknow_branch: 'लखनऊ शाखा',
    map_lucknow_branch_addr: 'लवकरच उपलब्ध...',
    map_varanasi_branch: 'वाराणसी शाखा',
    map_varanasi_branch_addr: 'लवकरच उपलब्ध...',
    map_gorakhpur_branch: 'गोरखपूर शाखा',
    map_gorakhpur_branch_addr: 'लवकरच उपलब्ध...',
    map_jhansi_branch: 'झांसी शाखा',
    map_jhansi_branch_addr: 'लवकरच उपलब्ध...',
    map_basti_branch: 'बस्ती शाखा',
    map_basti_branch_addr: 'लवकरच उपलब्ध...',

    // Rajasthan
    map_state_rajasthan: 'राजस्थान',
    map_jaipur_branch: 'जयपूर शाखा',
    map_jaipur_branch_addr: 'लवकरच उपलब्ध...',
    map_kota_branch: 'कोटा शाखा',
    map_kota_branch_addr: 'लवकरच उपलब्ध...',

    // Delhi
    map_state_delhi: 'दिल्ली',
    map_delhi_branch: 'नवी दिल्ली शाखा',
    map_delhi_branch_addr: 'लवकरच उपलब्ध...',


    map_state_maharashtra: 'महाराष्ट्र',
    map_state_gujarat: 'गुजरात',
    map_state_madhya_pradesh: 'मध्य प्रदेश',
    map_state_uttar_pradesh: 'उत्तर प्रदेश',

    map_office_single: 'कार्यालय',
    map_office_multiple: 'कार्यालये',

    map_load: 'नकाशा लोड होत आहे...',
    map_load_error: '⚠️ नकाशा लोड होऊ शकला नाही. कृपया तुमचे कनेक्शन तपासा आणि पुन्हा लोड करा.',
    map_heading: 'ब्रांच तपशील पाहण्यासाठी हायलाइट केलेल्या राज्यांवर किंवा पिनवर क्लिक करा。',


    // FAQ Page Marathi --------------------------------------------------------------------------------


    faq_title: 'वारंवार विचारले जाणारे प्रश्न',
    faq_subtitle: 'आमच्या सेवा, प्रक्रिया आणि आम्ही तुम्हाला कशी मदत करू शकतो याबद्दल सामान्य प्रश्नांची उत्तरे मिळवा',

    faq_ques_1: 'यशोदा टोटल सोल्यूशन्स ही लॉ फर्म आहे का?',
    faq_ans_1: 'नाही. यशोदा टोटल सोल्यूशन्स ही एक व्यावसायिक कायदेशीर सहाय्य आणि सल्लागार सेवा प्रदाता संस्था आहे. आम्ही लॉ फर्म नाही. आम्ही विविध कायदेशीर क्षेत्रातील अनुभवी व पात्र वकिलांच्या नेटवर्कसोबत काम करतो आणि प्रकरणाच्या स्वरूपानुसार त्यांची नियुक्ती करतो.',

    faq_ques_2: 'माझ्या प्रकरणाचे व्यवस्थापन कोण करेल?',
    faq_ans_2: 'तुमच्या प्रकरणाचे समन्वय आणि देखरेख यशोदा टोटल सोल्यूशन्सद्वारे केली जाईल. आमची व्यवस्थापन टीम प्रत्येक प्रकरणावर सतत लक्ष ठेवते. विलंब किंवा त्रुटी आढळल्यास त्वरित उपाययोजना केल्या जातात.',

    faq_ques_3: 'सेवा शुल्क कसे आणि कुठे भरायचे?',
    faq_ans_3: 'सर्व शुल्क फक्त यशोदा टोटल सोल्यूशन्सला भरायचे आहे. आमच्या पॅनेलवरील वकिलांना थेट पैसे देण्यास परवानगी नाही. कंपनी ठरलेल्या अटींनुसार त्यांना मोबदला देते.',

    faq_ques_4: 'वकील उपलब्ध नसल्यास काय होईल?',
    faq_ans_4: 'जर नियुक्त वकील उपलब्ध नसेल तर आम्ही त्वरित दुसरा योग्य वकील नियुक्त करतो.',

    faq_ques_5: 'पारंपरिक लॉ फर्मऐवजी आम्हाला का निवडावे?',
    faq_ans_5: 'यशोदा टोटल सोल्यूशन्स निवडल्यास खालील फायदे मिळतात:',

    faq_ans_item_5: [
      "परिणाम-केंद्रित सेवा – आम्ही प्रभावी निकालावर लक्ष केंद्रित करतो.",
      "सक्रिय केस व्यवस्थापन – विलंब टाळण्यासाठी सतत देखरेख केली जाते.",
      "संरचित प्रशासन – समर्पित टीम देखरेख करते.",
      "व्यावसायिक सहाय्य – वकिलांना अतिरिक्त सपोर्ट मिळतो.",
      "लवचिक नियुक्ती – आवश्यकतेनुसार वकील बदलता येतो.",
      "किफायतशीर सेवा – व्यावसायिक दर्जा राखून कमी खर्चात सेवा."
    ],

    faq_ques_6: 'विमा मिस-सेलिंगची सामान्य उदाहरणे कोणती?',
    faq_ans_6: 'मिस-सेलिंग तेव्हा होते जेव्हा पॉलिसी चुकीच्या माहितीवर विकली जाते. काही उदाहरणे:',

    faq_ans_item_6: [
      "पॉलिसी FD म्हणून विकणे",
      "व्याजमुक्त कर्जाचे आश्वासन",
      "लॅप्स पॉलिसीमधून पैसे मिळण्याचे आश्वासन",
      "फ्री हेल्थ इन्शुरन्स ऑफर",
      "गिफ्ट किंवा रोख लाभ देणे",
      "टॉवर योजना",
      "मासिक उत्पन्नाचे आश्वासन",
      "खोटे नोकरीचे आश्वासन"
    ],

    faq_stiil_have_questions: 'अजून काही प्रश्न आहेत का?',
    faq_ans_still_have_questions: 'तुम्हाला तुमचे उत्तर सापडले नाही का? आमची टीम मदतीसाठी तयार आहे.',
    faq_btn_contact: 'संपर्क करा',

    //--------------------------------------------------------------------------------FAQ Page Ends

    //Partner Page Marathi --------------------------------------------------------------------------------


    partner_title: 'आमचे पार्टनर बना',
    partner_subtitle: 'यशोदा टोटल सोल्यूशन्ससोबत वाढ करा',

    about_partner_desc1: 'यशोदा टोटल सोल्यूशन्स संपूर्ण',
    about_partner_desc2: 'भारतभर',
    about_partner_desc3: 'विस्तार करत आहे आणि आपल्या वाढत्या नेटवर्कमध्ये सहभागी होण्यासाठी फ्रीलान्सर, फ्रँचायझी पार्टनर, विमा व्यावसायिक आणि कॉर्पोरेट्स शोधत आहे।',
    about_partner_desc4: 'पार्टनर म्हणून तुम्हाला तज्ज्ञ मार्गदर्शन मिळेल आणि पॉलिसीधारकांना त्यांच्या विमा समस्यांचे प्रभावी निराकरण करण्यात मदत करण्याची संधी मिळेल।',
    about_partner_desc5: 'यशोदा टोटल सोल्यूशन्समध्ये सामील व्हा आणि उद्देशासह प्रगती करा।',

    why_partner_title: 'आमच्यासोबत पार्टनर का व्हावे?',
    why_partner_desc: 'वाढ, समर्थन आणि सकारात्मक परिणामाला महत्त्व देणाऱ्या नेटवर्कमध्ये सामील व्हा',

    why_partner_benefit1: 'वाढते नेटवर्क',
    why_partner_benefit1_desc: 'जलद गतीने वाढणाऱ्या पॅन इंडिया नेटवर्कचा भाग बना',

    why_partner_benefit2: 'तज्ज्ञ सहाय्य',
    why_partner_benefit2_desc: 'संपूर्ण प्रशिक्षण आणि सतत तज्ज्ञ मार्गदर्शन मिळवा',

    why_partner_benefit3: 'वाढीच्या संधी',
    why_partner_benefit3_desc: 'नवीन उत्पन्नाचे मार्ग मिळवा आणि पॉलिसीधारकांना मदत करा',

    partner_form_title: 'पार्टनर म्हणून नोंदणी करा',
    partner_form_subtitle: 'खालील फॉर्म भरा, आम्ही लवकरच तुमच्याशी संपर्क करू',

    partner_name_label: 'पूर्ण नाव *',
    partner_name_label_placeholder: 'तुमचे पूर्ण नाव प्रविष्ट करा',

    partner_mobile_label: 'मोबाइल नंबर *',
    partner_mobile_label_placeholder: '10 अंकी मोबाइल नंबर',

    partner_location_label: 'स्थान *',
    partner_location_label_placeholder: 'शहर, राज्य',

    partner_email_label: 'ईमेल पत्ता *',
    partner_email_label_placeholder: 'तुमचा ईमेल पत्ता प्रविष्ट करा',

    partner_type_label: 'पार्टनर प्रकार *',
    partner_type_label_placeholder: 'पार्टनर प्रकार निवडा',
    partner_type_label_option1: 'फ्रीलान्सर',
    partner_type_label_option2: 'फ्रँचायझी पार्टनर',
    partner_type_label_option3: 'वकील / विमा व्यावसायिक',

    partner_additional_info_label: 'अतिरिक्त माहिती (तुमच्याबद्दल)',
    partner_additional_info_label_placeholder: 'तुमचा अनुभव, कौशल्ये किंवा इतर संबंधित माहिती आम्हाला सांगा...',

    partner_submitting: 'सबमिट होत आहे...',
    partner_submit_button: 'अर्ज सबमिट करा',

    partner_submit_success: '✓ अर्ज यशस्वीरित्या सबमिट झाला!',
    partner_submit_success_desc: 'आम्ही लवकरच तुमच्याशी संपर्क करू。',

    //--------------------------------------------------------------------------------Partner Page Ends

  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key, variables = {}) => {
    let text = translations[language]?.[key] ?? key;

    Object.keys(variables).forEach((varKey) => {
      text = text.replace(
        new RegExp(`{{${varKey}}}`, 'g'),
        variables[varKey]
      );
    });

    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};