import React from 'react';
import { motion } from 'framer-motion';

const MissionVisionSection = ({ pillars = [] }) => {
  return (
    <section className="py-16 md:py-24 bg-accent-dark-green text-surface-off-white my-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 backdrop-blur-sm shadow-lg hover:border-white/20 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                {pillar.icon}
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-surface-off-white mb-4">
                {pillar.title}
              </h3>
              <p className="text-surface-light-gray/90 text-base sm:text-lg leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
