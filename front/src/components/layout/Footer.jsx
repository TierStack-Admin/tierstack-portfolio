import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ 
  companyLinks = [], 
  serviceLinks = [], 
  resourceLinks = [], 
  legalLinks = [], 
  contactInfo = {}
}) => {
  return (
    <footer className="bg-accent-dark-green text-surface-off-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-surface-off-white p-2 rounded-lg inline-flex items-center justify-center">
                <img src="/logo.png" alt="TierStack Logo" className="h-8 w-auto" />
              </div>
              <span className="font-display font-black text-2xl tracking-tight uppercase">
                <span className="text-[#7ec29a]">TIER</span><span className="text-primary-container">STACK</span>
              </span>
            </div>
            <p className="text-surface-light-gray text-sm leading-relaxed max-w-sm">
              Engineering the future of digital infrastructure with precision and scale.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-primary-container font-bold text-sm tracking-wider uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-surface-light-gray">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary-container font-bold text-sm tracking-wider uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-surface-light-gray">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary-container font-bold text-sm tracking-wider uppercase mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-surface-light-gray">
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary-container font-bold text-sm tracking-wider uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-surface-light-gray">
              <li>
                <a href={`mailto:${contactInfo.email || 'tierstack.software.house@gmail.com'}`} className="hover:text-white transition-colors">
                  {contactInfo.email || 'tierstack.software.house@gmail.com'}
                </a>
              </li>
              <li>
                <a href={`tel:${contactInfo.phone || '+1 (555) 123-4567'}`} className="hover:text-white transition-colors">
                  {contactInfo.phone || '+1 (555) 123-4567'}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-surface-light-gray">
          <p>&copy; {new Date().getFullYear()} TierStack Global. All rights reserved.</p>
          <div className="flex gap-4">
            {/* Share/Social placeholder */}
            <button className="hover:text-white transition-colors" aria-label="Share">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
