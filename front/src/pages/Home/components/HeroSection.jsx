import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/common/Button';
import HeroShowcase from './HeroShowcase';

const HeroSection = ({ onRequestService, onExploreServices }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Infinite Floating Ambient Orbs */}
      <motion.div
        animate={{
          x: [0, 35, -20, 0],
          y: [0, -30, 25, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-16 -left-16 w-80 h-80 bg-secondary-fixed/25 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 30, -25, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/3 -right-20 w-96 h-96 bg-primary-container/15 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-secondary-fixed text-accent-dark-green mb-6 shadow-sm">
              Next-Gen B2B Digital Engineering
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-accent-dark-green tracking-tight leading-[1.1] mb-6"
          >
            We Build Technology That Moves Businesses Forward
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto font-sans mb-10 leading-relaxed"
          >
            Transform your operations with scalable, secure, and innovative software solutions designed for the modern enterprise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto shadow-md"
              onClick={onRequestService}
            >
              Request a Service
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              onClick={onExploreServices}
            >
              Explore Services
            </Button>
          </motion.div>

          {/* Intuitive Technology Architecture Ecosystem Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <HeroShowcase />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
