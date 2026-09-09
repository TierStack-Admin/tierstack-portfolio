import React from 'react';
import { motion } from 'framer-motion';

const ContactSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="lg:col-span-4 space-y-6"
    >
      <div className="bg-[#10241B] text-surface-off-white rounded-3xl p-8 border border-white/10 shadow-lg relative overflow-hidden">
        {/* Infinite subtle background glow */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-36 h-36 bg-secondary-fixed/15 rounded-full blur-2xl pointer-events-none"
        />

        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-display font-bold text-primary-container">
            Our Office
          </h3>
          <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-white/10 text-secondary-fixed">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-ping" />
            <span>ONLINE</span>
          </span>
        </div>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-secondary-fixed">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-surface-off-white">Global Headquarters</h4>
              <p className="text-sm text-surface-light-gray/80 mt-1">
                100 Innovation Drive<br />
                Tech District, NY 10001
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-secondary-fixed">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-surface-off-white">Direct Email</h4>
              <a
                href="mailto:tierstack.software.house@gmail.com"
                className="text-sm text-secondary-fixed hover:underline mt-1 block break-all"
              >
                tierstack.software.house@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-secondary-fixed">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-surface-off-white">Response Time</h4>
              <p className="text-sm text-surface-light-gray/80 mt-1">
                Within 24 business hours
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-surface-light-gray/70 rounded-3xl p-6 border border-outline-variant/30">
        <h4 className="font-display font-semibold text-on-surface text-base mb-2">
          Enterprise Standards Guaranteed
        </h4>
        <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
          Every client inquiry is handled under strict confidentiality protocols. We sign standard NDAs prior to any codebase or technical audits.
        </p>
        <div className="flex items-center text-xs font-semibold text-accent-dark-green">
          <span className="w-2 h-2 rounded-full bg-accent-dark-green mr-2" />
          SOC-2 & GDPR Compliant Process
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSidebar;
