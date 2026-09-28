import React from 'react';
import { motion } from 'framer-motion';

const AboutHeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-16 md:pt-24 md:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      {/* Infinite Floating Ambient Glow */}
      <motion.div
        animate={{
          x: [0, 25, -20, 0],
          y: [0, -25, 20, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-1/4 w-96 h-96 bg-secondary-fixed/20 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-on-surface tracking-tight mb-6">
          Engineering{' '}
          <span className="text-accent-dark-green block sm:inline">Progress</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-on-surface-variant font-sans max-w-3xl mx-auto leading-relaxed mb-12">
          We build resilient, scalable software systems that empower high-growth enterprises to navigate the digital frontier with precision and confidence.
        </p>

        {/* Collaborative Visual Representation with subtle floating animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/30 max-w-4xl mx-auto aspect-[16/9] sm:aspect-[21/9] bg-gradient-to-tr from-accent-dark-green via-[#152e22] to-[#254236] flex items-center justify-center p-8"
        >
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#a7f2cb_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative z-10 text-center text-surface-off-white max-w-lg">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-16 h-16 rounded-2xl bg-secondary-fixed/20 border border-secondary-fixed/40 flex items-center justify-center mx-auto mb-4 backdrop-blur-md shadow-lg"
            >
              <svg className="w-8 h-8 text-secondary-fixed" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </motion.div>
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-2">Systems Thinkers & Digital Architects</h3>
            <p className="text-xs sm:text-sm text-surface-light-gray/80 font-sans">
              A distributed engineering collective dedicated to tackling high-complexity problems.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutHeroSection;
