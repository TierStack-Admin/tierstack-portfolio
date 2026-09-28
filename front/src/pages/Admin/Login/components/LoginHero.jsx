import { motion } from 'framer-motion';

const LoginHero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center px-4 pt-4 pb-2">
      {/* Ambient glow */}
      <motion.div
        animate={{ x: [0, 20, -15, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-1/3 w-72 h-72 bg-secondary-fixed/15 rounded-full blur-3xl pointer-events-none -z-10"
      />

      {/* Shield icon */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="w-14 h-14 rounded-2xl bg-accent-dark-green flex items-center justify-center mb-5 shadow-lg"
      >
        <svg className="w-7 h-7 text-secondary-fixed" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-display font-bold text-on-surface tracking-tight mb-2"
      >
        Admin Portal
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-on-surface-variant font-sans text-sm max-w-sm"
      >
        Sign in to manage your organization's portfolio, careers, and content.
      </motion.p>
    </div>
  );
};

export default LoginHero;
