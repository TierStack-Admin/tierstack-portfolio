import React from 'react';
import { motion } from 'framer-motion';

const TrustedBySection = () => {
  const partners = [
    'ENTERPRISE CO.',
    'TECHSCALE AI',
    'HYPERCLOUD',
    'VENTUREFORGE',
    'DATADRIVE',
    'NEXUS SYSTEMS',
  ];

  // Repeat sufficiently so wide and ultrawide screens have a 100% continuous flow with no empty space
  const marqueeList = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="bg-accent-dark-green py-10 border-y border-white/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <p className="text-xs font-bold tracking-widest text-surface-light-gray/70 uppercase">
          TRUSTED BY INNOVATIVE TEAMS GLOBALLY
        </p>
      </div>

      {/* Left and Right Smooth Edge Gradient Fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-accent-dark-green via-accent-dark-green/90 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-accent-dark-green via-accent-dark-green/90 to-transparent z-10" />

      {/* Infinite Seamless Horizontal Marquee */}
      <div className="flex w-full overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="flex space-x-8 flex-shrink-0 items-center pr-8"
        >
          {marqueeList.map((partner, index) => (
            <div
              key={index}
              className="h-12 px-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-display font-semibold text-surface-off-white text-sm tracking-wider hover:bg-white/15 transition-colors cursor-default whitespace-nowrap shadow-sm"
            >
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;
