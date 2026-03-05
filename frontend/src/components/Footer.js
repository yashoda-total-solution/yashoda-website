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
              src="https://customer-assets.emergentagent.com/job_1d118af0-25cf-4c4f-95a3-4dceda4b57a9/artifacts/boa41pzj_YASHODA%20TOTAL%20SOLUTION%201%20%281%29.png" 
              alt="Yashoda Total Solution" 
              className="h-12 w-auto mb-4 brightness-0 invert"
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
              <li><Link to="/reviews" className="text-sm text-gray-300 hover:text-[#F39C12] transition-colors">{t('nav_reviews')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer_contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#F39C12] mt-0.5" />
                <div>
                  <p className="text-sm font-medium">{t('footer_phone')}</p>
                  <a href="tel:+919876543210" className="text-sm text-gray-300 hover:text-[#F39C12]">+91 98765 43210</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#F39C12] mt-0.5" />
                <div>
                  <p className="text-sm font-medium">{t('footer_email')}</p>
                  <a href="mailto:info@yashodatotalsolution.com" className="text-sm text-gray-300 hover:text-[#F39C12]">info@yashodatotalsolution.com</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#F39C12] mt-0.5" />
                <div>
                  <p className="text-sm font-medium">{t('footer_address')}</p>
                  <p className="text-sm text-gray-300">Maharashtra, India</p>
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