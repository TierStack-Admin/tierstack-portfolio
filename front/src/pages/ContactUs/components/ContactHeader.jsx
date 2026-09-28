import React from 'react';
import { motion } from 'framer-motion';

const ContactHeader = () => {
  return (
    <div className="max-w-3xl mx-auto text-center mb-10">
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl sm:text-5xl font-display font-bold text-accent-dark-green tracking-tight mb-3"
      >
        Get in Touch
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-lg text-on-surface-variant font-sans"
      >
        How can we help accelerate your business?
      </motion.p>
    </div>
  );
};

export default ContactHeader;
