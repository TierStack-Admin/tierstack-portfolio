import { motion } from 'framer-motion';

const PortfolioHeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      {/* Infinite ambient orbs */}
      <motion.div
        animate={{ x: [0, -25, 20, 0], y: [0, 20, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-1/5 w-72 h-72 bg-primary-container/15 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <motion.div
        animate={{ x: [0, 20, -20, 0], y: [0, -25, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-1/4 w-60 h-60 bg-secondary-fixed/15 rounded-full blur-3xl pointer-events-none -z-10"
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
          Our Work
        </motion.span>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-on-surface tracking-tight mb-6">
          Engineered{' '}
          <span className="text-accent-dark-green">Solutions</span>
        </h1>

        <p className="text-lg sm:text-xl text-on-surface-variant font-sans max-w-2xl mx-auto leading-relaxed">
          Explore our portfolio of enterprise-grade digital products crafted with precision engineering and modern design.
        </p>
      </motion.div>
    </section>
  );
};

export default PortfolioHeroSection;
