import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, FileCheck, Banknote, Landmark, FileText, Users, CheckCircle, Phone, ArrowRight, Star } from 'lucide-react';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#F5F7F9]">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1F2933] leading-tight mb-6" data-testid="hero-headline">
                {t('hero_headline')}
              </h1>
              <p className="text-lg text-[#52606D] leading-relaxed mb-8" data-testid="hero-subtext">
                {t('hero_subtext')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  data-testid="hero-btn-contact"
                  className="inline-flex items-center justify-center bg-[#0F7A4A] hover:bg-[#0b5e38] text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors shadow-md"
                >
                  {t('hero_btn_contact')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+919876543210"
                  data-testid="hero-btn-help"
                  className="inline-flex items-center justify-center bg-[#F39C12] hover:bg-[#d68910] text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors shadow-md"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {t('hero_btn_help')}
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1681505531034-8d67054e07f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHw0fHxoYW5kc2hha2UlMjBidXNpbmVzcyUyMGNsb3NlJTIwdXB8ZW58MHx8fHwxNzcyNzA1MzcwfDA&ixlib=rb-4.1.0&q=85"
                alt="Trust and partnership"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]" data-testid="about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              {t('about_title')}
            </h2>
            <p className="text-lg text-[#52606D] leading-relaxed max-w-3xl mx-auto">
              {t('about_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: t('about_card1_title'), desc: t('about_card1_desc') },
              { icon: CheckCircle, title: t('about_card2_title'), desc: t('about_card2_desc') },
              { icon: Shield, title: t('about_card3_title'), desc: t('about_card3_desc') },
            ].map((item, index) => (
              <div
                key={index}
                data-testid={`about-card-${index + 1}`}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300"
              >
                <item.icon className="h-12 w-12 text-[#0F7A4A] mb-4" />
                <h3 className="text-xl font-semibold text-[#1F2933] mb-3">{item.title}</h3>
                <p className="text-base text-[#52606D] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 md:py-24 bg-white" data-testid="problems-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              {t('problems_title')}
            </h2>
            <p className="text-lg text-[#F39C12] font-semibold">
              {t('problems_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: t('problem1_title'), desc: t('problem1_desc'), icon: Shield },
              { title: t('problem2_title'), desc: t('problem2_desc'), icon: FileCheck },
              { title: t('problem3_title'), desc: t('problem3_desc'), icon: Banknote },
              { title: t('problem4_title'), desc: t('problem4_desc'), icon: Landmark },
            ].map((problem, index) => (
              <div
                key={index}
                data-testid={`problem-card-${index + 1}`}
                className="bg-[#F5F7F9] p-8 rounded-lg border-l-4 border-[#F39C12] hover:shadow-md transition-shadow"
              >
                <problem.icon className="h-10 w-10 text-[#F39C12] mb-4" />
                <h3 className="text-xl font-semibold text-[#1F2933] mb-3">{problem.title}</h3>
                <p className="text-base text-[#52606D] leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              {t('services_title')}
            </h2>
            <p className="text-lg text-[#52606D] max-w-3xl mx-auto">
              {t('services_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FileCheck, title: t('service1_title'), desc: t('service1_desc') },
              { icon: Shield, title: t('service2_title'), desc: t('service2_desc') },
              { icon: Banknote, title: t('service3_title'), desc: t('service3_desc') },
              { icon: Landmark, title: t('service4_title'), desc: t('service4_desc') },
              { icon: FileText, title: t('service5_title'), desc: t('service5_desc') },
              { icon: Users, title: t('service6_title'), desc: t('service6_desc') },
            ].map((service, index) => (
              <div
                key={index}
                data-testid={`service-card-${index + 1}`}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md border border-gray-100 flex flex-col items-start gap-4 transition-all duration-300"
              >
                <service.icon className="h-12 w-12 text-[#0F7A4A]" />
                <h3 className="text-xl font-semibold text-[#1F2933]">{service.title}</h3>
                <p className="text-base text-[#52606D] leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              data-testid="view-all-services-btn"
              className="inline-flex items-center justify-center border-2 border-[#0F7A4A] text-[#0F7A4A] hover:bg-[#0F7A4A] hover:text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white" data-testid="why-choose-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              {t('why_title')}
            </h2>
            <p className="text-lg text-[#52606D] max-w-3xl mx-auto">
              {t('why_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: t('why1_title'), desc: t('why1_desc') },
              { title: t('why2_title'), desc: t('why2_desc') },
              { title: t('why3_title'), desc: t('why3_desc') },
              { title: t('why4_title'), desc: t('why4_desc') },
            ].map((item, index) => (
              <div
                key={index}
                data-testid={`why-card-${index + 1}`}
                className="text-center p-6 rounded-lg bg-[#F5F7F9] border-2 border-transparent hover:border-[#0F7A4A] transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0F7A4A] text-white rounded-full mb-4 text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-[#1F2933] mb-3">{item.title}</h3>
                <p className="text-base text-[#52606D] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-[#F5F7F9]" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
              {t('testimonials_title')}
            </h2>
            <p className="text-lg text-[#52606D]">
              {t('testimonials_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: t('testimonial1_text'), name: t('testimonial1_name'), location: t('testimonial1_location') },
              { text: t('testimonial2_text'), name: t('testimonial2_name'), location: t('testimonial2_location') },
              { text: t('testimonial3_text'), name: t('testimonial3_name'), location: t('testimonial3_location') },
            ].map((testimonial, index) => (
              <div
                key={index}
                data-testid={`testimonial-card-${index + 1}`}
                className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#F39C12]"
              >
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-[#F39C12] fill-current" />
                  ))}
                </div>
                <p className="text-base text-[#52606D] leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-base font-semibold text-[#1F2933]">{testimonial.name}</p>
                  <p className="text-sm text-[#9AA5B1]">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-[#0F7A4A]" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('cta_title')}
          </h2>
          <p className="text-lg text-white/90 mb-8">
            {t('cta_subtitle')}
          </p>
          <Link
            to="/contact"
            data-testid="cta-contact-btn"
            className="inline-flex items-center justify-center bg-[#F39C12] hover:bg-[#d68910] text-white px-10 py-4 rounded-md font-semibold text-lg transition-colors shadow-lg"
          >
            {t('cta_btn')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;