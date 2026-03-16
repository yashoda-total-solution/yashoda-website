import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1F2933] text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="https://customer-assets.emergentagent.com/job_f3313010-f5bf-4f8d-b7b6-9551ef787967/artifacts/86qi2683_logo.png" 
              alt="Yashoda Total Solution" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              {t('footer_desc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer_quick_links')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-300 hover:text-[#F39C12] transition-colors">{t('nav_home')}</Link></li>
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-[#F39C12] transition-colors">{t('nav_about')}</Link></li>
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-[#F39C12] transition-colors">{t('nav_services')}</Link></li>
              <li><Link to="/gallery" className="text-sm text-gray-300 hover:text-[#F39C12] transition-colors">{t('nav_gallery')}</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-[#F39C12] transition-colors">{t('nav_contact')}</Link></li>
              <li><Link to="/faqs" className="text-sm text-gray-300 hover:text-[#F39C12] transition-colors">FAQs</Link></li>
              <li><Link to="/partner" className="text-sm text-gray-300 hover:text-[#F39C12] transition-colors">Partner with Us</Link></li>
              <li><Link to="/reviews" className="text-sm text-gray-300 hover:text-[#F39C12] transition-colors">{t('nav_reviews')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer_contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#F39C12] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">{t('footer_phone')}</p>
                  <a href="tel:+919649647790" className="text-sm text-gray-300 hover:text-[#F39C12] transition-colors">+91 9649647790</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#F39C12] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">{t('footer_email')}</p>
                  <a href="mailto:info@yashodatotalsolution.com" className="text-sm text-gray-300 hover:text-[#F39C12] transition-colors break-all">info@yashodatotalsolution.com</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#F39C12] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">{t('footer_address')}</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    2 B-70, Floor No:2, PHOENIX PARAGON PLAZA, LBS Road, KURLA WEST, Mumbai, Maharashtra, 400070
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">{t('footer_rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;