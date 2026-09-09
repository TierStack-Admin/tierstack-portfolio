import React from 'react';
import { motion } from 'framer-motion';

const HeroShowcase = () => {
  return (
    <div className="relative rounded-3xl p-3 bg-gradient-to-b from-outline-variant/40 via-outline-variant/20 to-transparent border border-outline-variant/40 shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Infinite Ambient Sweeping Light Beam */}
      <motion.div
        animate={{ x: ['-120%', '280%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
        className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-secondary-fixed/20 to-transparent skew-x-12 pointer-events-none z-30"
      />

      {/* Browser / System Frame */}
      <div className="bg-[#0b1a13] rounded-2xl p-6 sm:p-10 text-left relative overflow-hidden border border-white/10">
        {/* Subtle Background Circuit Grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#a7f2cb_1px,transparent_1px)] [background-size:20px_20px]" />

        {/* Window Header */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-8 relative z-10">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400/90" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/90" />
            <div className="w-3 h-3 rounded-full bg-green-400/90" />
            <span className="ml-3 text-xs text-surface-light-gray/70 font-mono hidden sm:inline">
              tierstack.software/architecture-engine
            </span>
          </div>
          <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-secondary-fixed">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping" />
            <span>ARCHITECTURE ONLINE</span>
          </div>
        </div>

        {/* Central Architecture Ecosystem Display */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
          {/* Node 1: Modern Digital Applications */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-secondary-fixed/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-secondary-fixed/20 border border-secondary-fixed/40 flex items-center justify-center text-secondary-fixed mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-lg font-display font-bold text-white mb-1">Web & Mobile Apps</h4>
            <p className="text-xs text-surface-light-gray/75 leading-relaxed">
              Ultra-responsive platforms built with React, Next.js & native mobile frameworks.
            </p>
          </div>

          {/* Node 2: Resilient Cloud Core */}
          <div className="bg-[#12281e] rounded-2xl p-6 border border-secondary-fixed/50 shadow-lg relative">
            <span className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-primary-container text-on-surface uppercase tracking-wider">
              Core Engine
            </span>
            <div className="w-12 h-12 rounded-xl bg-primary-container/20 border border-primary-container/40 flex items-center justify-center text-primary-container mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h4 className="text-lg font-display font-bold text-white mb-1">Cloud Infrastructure</h4>
            <p className="text-xs text-surface-light-gray/75 leading-relaxed">
              Zero-downtime distributed systems engineered for maximum concurrency and scale.
            </p>
          </div>

          {/* Node 3: AI Intelligence Pipeline */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-secondary-fixed/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-secondary-fixed/20 border border-secondary-fixed/40 flex items-center justify-center text-secondary-fixed mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-display font-bold text-white mb-1">AI & Intelligence</h4>
            <p className="text-xs text-surface-light-gray/75 leading-relaxed">
              Custom automated machine learning pipelines delivering real-time enterprise insights.
            </p>
          </div>
        </div>

        {/* Floating Interactive Badges with Infinite Physics */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-surface-light-gray relative z-10">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10"
          >
            <span className="text-primary-container">✓</span>
            <span>Sub-second Global Latency</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10"
          >
            <span className="text-secondary-fixed">✓</span>
            <span>SOC-2 & Enterprise Security</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10"
          >
            <span className="text-primary-container">✓</span>
            <span>Continuous Deployment (CI/CD)</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroShowcase;
