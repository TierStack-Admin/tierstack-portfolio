import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../../../components/common/ServiceCard';

const ServicesSummarySection = ({ services = [] }) => {
  return (
    <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-on-surface mb-4">
          Technology Solutions Built Around Your Business
        </h2>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          We don't just write code; we engineer scalable systems tailored to solve your specific operational challenges.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="h-full"
          >
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
              tags={service.tags}
              link={service.link}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSummarySection;
