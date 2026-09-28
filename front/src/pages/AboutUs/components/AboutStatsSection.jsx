import React from 'react';
import { motion } from 'framer-motion';
import StatCard from '../../../components/common/StatCard';

const AboutStatsSection = ({ stats = [] }) => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <StatCard value={stat.value} label={stat.label} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutStatsSection;
