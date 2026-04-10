import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1F2933] text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:[grid-template-columns:1.2fr_1fr_1.5fr_1.2fr]">

          {/* Company Info */}
          <div>
            <img
              src="/logo.png"
              alt="Yashoda Total Solution"
              className="h-16 w-auto mb-4 object-contain"
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              {t('footer_desc')}
            </p>
            <p className="text-xs text-gray-400 mt-2 font-medium">
              UDYAM-MH-18-0509177
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.instagram.com/yashodatotalsolution/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#F39C12] transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/YOUR_FACEBOOK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#F39C12] transition-colors duration-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://youtube.com/@yashodatotalsolution?si=5dKRJ0FqYQcegO_p"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#F39C12] transition-colors duration-200"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer_quick_links')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-300 hover:text-[#F39C12] hover:translate-x-1 transition-all duration-200">
                  {t('nav_home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-[#F39C12] hover:translate-x-1 transition-all duration-200">
                  {t('nav_about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-300 hover:text-[#F39C12] hover:translate-x-1 transition-all duration-200">
                  {t('nav_contact')}
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-sm text-gray-300 hover:text-[#F39C12] hover:translate-x-1 transition-all duration-200">
                  {t('nav_faqs')}
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-sm text-gray-300 hover:text-[#F39C12] hover:translate-x-1 transition-all duration-200">
                  {t('nav_partner')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-gray-300 hover:text-[#F39C12] hover:translate-x-1 transition-all duration-200">
                  {t('nav_gallery')}
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-sm text-gray-300 hover:text-[#F39C12] hover:translate-x-1 transition-all duration-200">
                  {t('nav_reviews')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer_services')}</h3>
            <p className="text-sm text-white font-medium mb-2">
              {t('footer_services_insurance_heading')}
            </p>
            <div className="grid grid-cols-2 gap-x-4">
              <Link to="/mis-selling" className="text-sm text-gray-300 hover:text-[#F39C12]">{t('footer_service_misselling')}</Link>
              <Link to="/claim-rejection" className="text-sm text-gray-300 hover:text-[#F39C12]">{t('footer_service_claimrejection')}</Link>
              <Link to="/claim-delay" className="text-sm text-gray-300 hover:text-[#F39C12]">{t('footer_service_claimdelay')}</Link>
              <Link to="/claim-short-settled" className="text-sm text-gray-300 hover:text-[#F39C12]">{t('footer_service_partialclaim')}</Link>
              <Link to="/health-reimbursement" className="text-sm text-gray-300 hover:text-[#F39C12]">{t('footer_service_healthclaim')}</Link>
              <Link to="/pmsby" className="text-sm text-gray-300 hover:text-[#F39C12]">{t('footer_service_pmsby')}</Link>
              <Link to="/pmjjby" className="text-sm text-gray-300 hover:text-[#F39C12]">{t('footer_service_pmjjby')}</Link>
              <Link to="/state-cm-scheme" className="text-sm text-gray-300 hover:text-[#F39C12]">{t('footer_service_statescheme')}</Link>
              <Link to="/banking-atm-insurance" className="text-sm text-gray-300 hover:text-[#F39C12]">{t('footer_service_atminsurance')}</Link>
              <Link to="/pf-accidental-insurance" className="text-sm text-gray-300 hover:text-[#F39C12]">{t('footer_service_pfaccident')}</Link>
            </div>
            <div className="mt-4 space-y-1">
              <Link to="/legal-consultation" className="text-sm text-gray-300 hover:text-[#F39C12] block">{t('footer_service_legalconsultation')}</Link>
              <Link to="/legal-drafting" className="text-sm text-gray-300 hover:text-[#F39C12] block">{t('footer_service_legaldrafting')}</Link>
              <Link to="/consumer-cases" className="text-sm text-gray-300 hover:text-[#F39C12] block">{t('footer_service_consumerprotection')}</Link>
              <Link to="/civil-cases" className="text-sm text-gray-300 hover:text-[#F39C12] block">{t('footer_service_civildispute')}</Link>
              <Link to="/cheque-bounce-cases" className="text-sm text-gray-300 hover:text-[#F39C12] block">{t('footer_service_chequebounce')}</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer_contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#F39C12] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">{t('footer_phone')}</p>
                  <a href="tel:+919649647790" className="text-sm text-gray-300 hover:text-[#F39C12]">
                    +91 9649647790
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#F39C12] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">{t('footer_email')}</p>
                  <a
                    href="mailto:info@yashodatotalsolution.com?subject=Inquiry from Website"
                    className="text-sm text-gray-300 hover:text-[#F39C12] break-all"
                  >
                    info@yashodatotalsolution.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#F39C12] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">{t('footer_address')}</p>
                  <a
                    href="https://maps.app.goo.gl/cPCpCSAkAnVviuUR6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-[#F39C12]"
                  >
                    {t('footer_address_text')}
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center space-y-2">
          <p className="text-sm text-gray-400">
            {t('footer_rights')}
          </p>
          <p className="text-sm text-gray-400">
            {t('footer_designed_by')}{" "}
            <a
              href="https://www.wingzspheretech.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F39C12] hover:underline"
            >
              {t('footer_designed_by_name')}
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;