import React from 'react';
import { motion } from 'framer-motion';
import StatCard from '../../../components/common/StatCard';

const StatsSection = ({ stats = [] }) => {
  return (
    <section className="py-16 bg-surface-light-gray/60 border-y border-outline-variant/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
            >
              <StatCard value={stat.value} label={stat.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
