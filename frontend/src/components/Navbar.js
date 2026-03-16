import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isInsuranceOpen, setIsInsuranceOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t('nav_home') },
    { path: '/about', label: t('nav_about') },
    // Services will be handled separately as dropdown
    { path: '/contact', label: t('nav_contact') },
    { path: '/faqs', label: 'FAQs' },
    { path: '/partner', label: 'Partner with us' },
    { path: '/gallery', label: t('nav_gallery') },
    { path: '/reviews', label: t('nav_reviews') },
    { path: '/login', label: 'Login' },
  ];

  // Insurance Dispute Resolution (nested services)
  const insuranceServices = [
    { path: '/mis-selling', label: t('service_mis_selling') },
    { path: '/claim-rejection', label: t('service_claim_rejection') },
    { path: '/claim-delay', label: t('service_claim_delay') },
    { path: '/claim-short-settled', label: t('service_claim_short_settled') },
    { path: '/health-reimbursement', label: t('service_health_reimbursement') },
    { path: '/pmsby', label: t('service_pmsby') },
    { path: '/pmjjby', label: t('service_pmjjby') },
    { path: '/state-cm-scheme', label: t('service_state_cm_scheme') },
    { path: '/banking-atm-insurance', label: t('service_banking_atm') },
    { path: '/pf-accidental-insurance', label: t('service_pf_accidental') },
  ];

  // Main service categories
  const mainServices = [
    { label: t('service_insurance_dispute'), hasNested: true },
    { path: '/legal-consultation', label: t('service_legal_consultation') },
    { path: '/legal-drafting', label: t('service_legal_drafting') },
    { path: '/consumer-cases', label: t('service_consumer_cases') },
    { path: '/civil-cases', label: t('service_civil_cases') },
    { path: '/cheque-bounce-cases', label: t('service_cheque_bounce') },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'mr', name: 'मराठी' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" data-testid="navbar-logo">
            <img 
              src="https://customer-assets.emergentagent.com/job_1d118af0-25cf-4c4f-95a3-4dceda4b57a9/artifacts/boa41pzj_YASHODA%20TOTAL%20SOLUTION%201%20%281%29.png" 
              alt="Yashoda Total Solution" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Home Link */}
            <Link
              to="/"
              data-testid="nav-link-home"
              className={`text-base font-medium transition-colors ${
                isActive('/')
                  ? 'text-[#0F7A4A] font-semibold'
                  : 'text-[#1F2933] hover:text-[#0F7A4A]'
              }`}
            >
              {t('nav_home')}
            </Link>

            {/* Other Links - Insert Services dropdown in the correct position */}
            {navLinks.slice(1).map((link, index) => {
              // Insert Services dropdown after About Us (index 0)
              if (index === 1) {
                return (
                  <React.Fragment key="services-group">
                    {/* Services Mega Menu with Two Levels */}
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => {
                        setIsServicesOpen(false);
                        setIsInsuranceOpen(false);
                      }}
                    >
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        data-testid="nav-services-dropdown"
                        className="flex items-center space-x-1 text-base font-medium transition-colors text-[#1F2933] hover:text-[#0F7A4A]"
                      >
                        <span>Services</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>

                      {isServicesOpen && (
                        <div className="absolute left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-2">
                              {mainServices.map((service, index) => {
                                if (service.hasNested) {
                                  return (
                                    <div 
                                      key={index}
                                      className="relative"
                                      onMouseEnter={() => setIsInsuranceOpen(true)}
                                      onMouseLeave={() => setIsInsuranceOpen(false)}
                                    >
                                      <button
                                        onClick={() => setIsInsuranceOpen(!isInsuranceOpen)}
                                        className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-sm font-medium text-[#1F2933] hover:bg-[#0F7A4A] hover:text-white transition-all"
                                      >
                                        <span>{service.label}</span>
                                        <ChevronRight className="h-4 w-4" />
                                      </button>
                                      
                                      {/* Nested Insurance Dropdown */}
                                      {isInsuranceOpen && (
                                        <div className="absolute left-full top-0 ml-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                                          <div className="p-4">
                                            <div className="grid grid-cols-1 gap-2">
                                              {insuranceServices.map((insuranceService) => (
                                                <Link
                                                  key={insuranceService.path}
                                                  to={insuranceService.path}
                                                  onClick={() => {
                                                    setIsServicesOpen(false);
                                                    setIsInsuranceOpen(false);
                                                  }}
                                                  className="block px-4 py-2 rounded-lg text-sm font-medium text-[#1F2933] hover:bg-[#0F7A4A] hover:text-white transition-all"
                                                >
                                                  {insuranceService.label}
                                                </Link>
                                              ))}
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  );
                                }
                                
                                return (
                                  <Link
                                    key={service.path}
                                    to={service.path}
                                    onClick={() => setIsServicesOpen(false)}
                                    className="block px-4 py-2 rounded-lg text-sm font-medium text-[#1F2933] hover:bg-[#0F7A4A] hover:text-white transition-all"
                                  >
                                    {service.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <Link
                      key={link.path}
                      to={link.path}
                      data-testid={`nav-link-${link.path.slice(1) || 'home'}`}
                      className={`text-base font-medium transition-colors ${
                        isActive(link.path)
                          ? 'text-[#0F7A4A] font-semibold'
                          : 'text-[#1F2933] hover:text-[#0F7A4A]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </React.Fragment>
                );
              }
              
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`nav-link-${link.path.slice(1) || 'home'}`}
                  className={`text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-[#0F7A4A] font-semibold'
                      : 'text-[#1F2933] hover:text-[#0F7A4A]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                data-testid="language-switcher-btn"
                className="flex items-center space-x-2 px-3 py-2 rounded-md border border-gray-300 hover:border-[#0F7A4A] transition-colors"
              >
                <Globe className="h-5 w-5 text-[#0F7A4A]" />
                <span className="text-sm font-medium text-[#1F2933]">
                  {languages.find(l => l.code === language)?.name}
                </span>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg" data-testid="language-dropdown">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      data-testid={`lang-option-${lang.code}`}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                        language === lang.code ? 'bg-[#F5F7F9] text-[#0F7A4A] font-semibold' : 'text-[#1F2933]'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-btn"
            className="md:hidden p-2 rounded-md text-[#1F2933] hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white" data-testid="mobile-menu">
          <div className="px-4 py-4 space-y-3">
            {/* Home Link */}
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              data-testid="mobile-nav-link-home"
              className={`block px-4 py-3 rounded-md text-base font-medium ${
                isActive('/')
                  ? 'bg-[#0F7A4A] text-white'
                  : 'text-[#1F2933] hover:bg-gray-50'
              }`}
            >
              {t('nav_home')}
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                data-testid="mobile-services-dropdown"
                className="flex items-center justify-between w-full px-4 py-3 rounded-md text-base font-medium text-[#1F2933] hover:bg-gray-50"
              >
                <span>{t('nav_services')}</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  {/* Insurance Dispute Resolution with nested dropdown */}
                  <div>
                    <button
                      onClick={() => setIsInsuranceOpen(!isInsuranceOpen)}
                      className="flex items-center justify-between w-full px-4 py-2 rounded-md text-sm font-medium text-[#52606D] hover:bg-gray-50"
                    >
                      <span>{t('service_insurance_dispute')}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isInsuranceOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isInsuranceOpen && (
                      <div className="mt-2 pl-4 space-y-2">
                        {insuranceServices.map((service, index) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            onClick={() => {
                              setIsInsuranceOpen(false);
                              setIsServicesOpen(false);
                              setIsMenuOpen(false);
                            }}
                            data-testid={`mobile-insurance-service-link-${index + 1}`}
                            className={`block px-4 py-2 rounded-md text-sm font-medium ${
                              location.pathname === service.path
                                ? 'bg-[#0F7A4A] text-white'
                                : 'text-[#52606D] hover:bg-gray-50'
                            }`}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Other main service categories */}
                  {mainServices.slice(1).map((service, index) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => {
                        setIsServicesOpen(false);
                        setIsMenuOpen(false);
                      }}
                      data-testid={`mobile-service-link-${index + 2}`}
                      className={`block px-4 py-2 rounded-md text-sm font-medium ${
                        location.pathname === service.path
                          ? 'bg-[#0F7A4A] text-white'
                          : 'text-[#52606D] hover:bg-gray-50'
                      }`}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Links */}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                data-testid={`mobile-nav-link-${link.path.slice(1) || 'home'}`}
                className={`block px-4 py-3 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-[#0F7A4A] text-white'
                    : 'text-[#1F2933] hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Language Switcher */}
            <div className="pt-3 border-t border-gray-200">
              <div className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-[#52606D]">
                <Globe className="h-5 w-5 text-[#0F7A4A]" />
                <span>Language / भाषा</span>
              </div>
              <div className="space-y-1 mt-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsMenuOpen(false);
                    }}
                    data-testid={`mobile-lang-option-${lang.code}`}
                    className={`block w-full text-left px-4 py-2 text-base rounded-md ${
                      language === lang.code
                        ? 'bg-[#F39C12] text-white font-semibold'
                        : 'text-[#1F2933] hover:bg-gray-50'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;