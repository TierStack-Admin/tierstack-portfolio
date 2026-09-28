import React from 'react';
import { motion } from 'framer-motion';

const WhoWeAreSection = () => {
  return (
    <section className="py-16 md:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center space-x-3 mb-4">
          <span className="w-8 h-1 bg-accent-dark-green rounded-full" />
          <span className="text-xs font-bold tracking-widest text-accent-dark-green uppercase">
            WHO WE ARE
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-on-surface mb-8">
          Architects of the Digital Future
        </h2>

        <div className="space-y-6 text-base sm:text-lg text-on-surface-variant font-sans leading-relaxed">
          <p>
            Founded on the principles of precision engineering and modern professionalism, TierStack emerged from a need for reliable, high-performance software architecture. We are a collective of systems thinkers, dedicated to translating complex business challenges into elegant, scalable technological solutions.
          </p>
          <p>
            Our expertise lies in bridging the gap between legacy infrastructure and bleeding-edge innovation, ensuring our partners remain agile and authoritative in an ever-evolving digital landscape.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default WhoWeAreSection;
