// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { useLanguage } from '../contexts/LanguageContext';
// import { 
//   FileCheck, Shield, Landmark, Award, Banknote, FileText,
//   CheckCircle, Users, Lock, Target, ArrowRight, ListChecks
// } from 'lucide-react';

// const Services = () => {
//   const { t } = useLanguage();

//   const fadeUp = {
//     initial: { opacity: 0, y: 30 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true },
//     transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
//   };

//   return (
//     <div className="min-h-screen bg-[#F5F7F9]">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] text-white py-20 md:py-32">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <span className="px-4 py-2 bg-[#F39C12] text-white rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg">
//               {t('nav_services')}
//             </span>
//             <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-4" data-testid="services-hero-title">
//               {t('services_title')}
//             </h1>
//             <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
//               {t('services_subtitle')}
//             </p>
//           </motion.div>
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}></div>
//       </section>

//       {/* Introduction Section */}
//       <section className="relative -mt-16 z-10 py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             {...fadeUp}
//             className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12 text-center"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-6">
//               {t('services_intro_title')}
//             </h2>
//             <p className="text-lg text-[#52606D] leading-relaxed max-w-4xl mx-auto">
//               {t('services_intro_desc')}
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-16 md:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div {...fadeUp} className="text-center mb-16">
//             <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4">
//               {t('services_detail_title')}
//             </h2>
//             <p className="text-lg text-[#52606D]">
//               {t('services_detail_subtitle')}
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { icon: FileCheck, title: t('service1_title'), desc: t('service1_desc'), gradient: 'from-blue-500 to-cyan-500' },
//               { icon: Shield, title: t('service2_title'), desc: t('service2_desc'), gradient: 'from-green-500 to-emerald-500' },
//               { icon: Banknote, title: t('service3_title'), desc: t('service3_desc'), gradient: 'from-orange-500 to-red-500' },
//               { icon: Landmark, title: t('service4_title'), desc: t('service4_desc'), gradient: 'from-purple-500 to-pink-500' },
//               { icon: FileText, title: t('service5_title'), desc: t('service5_desc'), gradient: 'from-red-500 to-orange-500' },
//               { icon: Users, title: t('service6_title'), desc: t('service6_desc'), gradient: 'from-teal-500 to-cyan-500' },
//             ].map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -8, scale: 1.02 }}
//                 data-testid={`service-card-${index + 1}`}
//                 className="group relative bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(15,122,74,0.15)] transition-all duration-500 overflow-hidden"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
//                 <div className="relative p-8 z-10">
//                   <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                     <service.icon className="h-8 w-8 text-white" />
//                   </div>
//                   <h3 className="text-xl font-semibold text-[#1F2933] group-hover:text-white mb-3 transition-colors duration-500">{service.title}</h3>
//                   <p className="text-base text-[#52606D] group-hover:text-white/90 leading-relaxed transition-colors duration-500">{service.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-16 md:py-24 bg-[#F5F7F9]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div {...fadeUp} className="text-center mb-16">
//             <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4">
//               {t('services_benefits_title')}
//             </h2>
//             <p className="text-lg text-[#52606D]">
//               {t('services_benefits_subtitle')}
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {icon: Users, title: t('services_benefit1_title'), desc: t('services_benefit1_desc'), color: 'bg-blue-50', iconBg: 'bg-blue-600'},
//               {icon: Target, title: t('services_benefit2_title'), desc: t('services_benefit2_desc'), color: 'bg-green-50', iconBg: 'bg-green-600'},
//               {icon: FileCheck, title: t('services_benefit3_title'), desc: t('services_benefit3_desc'), color: 'bg-orange-50', iconBg: 'bg-orange-600'},
//               {icon: CheckCircle, title: t('services_benefit4_title'), desc: t('services_benefit4_desc'), color: 'bg-purple-50', iconBg: 'bg-purple-600'},
//               {icon: Lock, title: t('services_benefit5_title'), desc: t('services_benefit5_desc'), color: 'bg-red-50', iconBg: 'bg-red-600'},
//             ].map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -8, scale: 1.02 }}
//                 className={`${benefit.color} rounded-2xl p-8 transition-all duration-300`}
//               >
//                 <div className={`w-16 h-16 ${benefit.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
//                   <benefit.icon className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-[#1F2933] mb-3">{benefit.title}</h3>
//                 <p className="text-base text-[#52606D] leading-relaxed">{benefit.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <motion.section
//         {...fadeUp}
//         className="relative py-20 md:py-32 bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] overflow-hidden"
//       >
//         <div className="absolute inset-0 opacity-10"></div>

//         <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <h2 className="text-3xl md:text-5xl font-bold text-white">
//               {t('services_cta_title')}
//             </h2>
//             <p className="text-lg md:text-xl text-white/90">
//               {t('services_cta_desc')}
//             </p>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Link
//                 to="/contact"
//                 data-testid="services-cta-btn"
//                 className="inline-flex items-center justify-center bg-[#F39C12] hover:bg-[#d68910] text-white px-12 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(243,156,18,0.5)]"
//               >
//                 {t('hero_btn_contact')}
//                 <ArrowRight className="ml-2 h-6 w-6" />
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default Services;
