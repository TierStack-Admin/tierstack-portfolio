import { motion } from 'framer-motion';

const CareersHeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      {/* Infinite ambient glow */}
      <motion.div
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-5 right-1/4 w-80 h-80 bg-primary-container/15 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <motion.div
        animate={{ x: [0, -25, 15, 0], y: [0, 15, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-1/6 w-64 h-64 bg-secondary-fixed/15 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-block px-4 py-1.5 bg-secondary-fixed/30 text-accent-dark-green text-xs font-bold uppercase tracking-widest rounded-full mb-6"
        >
          We're Hiring
        </motion.span>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-on-surface tracking-tight mb-6">
          Build the{' '}
          <span className="text-accent-dark-green">Future</span>{' '}
          With Us
        </h1>

        <p className="text-lg sm:text-xl text-on-surface-variant font-sans max-w-2xl mx-auto leading-relaxed">
          Join a team of passionate engineers and designers crafting world-class digital solutions for enterprise clients worldwide.
        </p>
      </motion.div>
    </section>
  );
};

export default CareersHeroSection;
