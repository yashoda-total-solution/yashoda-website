import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t('nav_home') },
    { path: '/about', label: t('nav_about') },
    { path: '/services', label: t('nav_services') },
    { path: '/gallery', label: t('nav_gallery') },
    { path: '/contact', label: t('nav_contact') },
    { path: '/reviews', label: t('nav_reviews') },
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
            {navLinks.map((link) => (
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
            ))}

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
            {navLinks.map((link) => (
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