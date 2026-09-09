import React from 'react';
import { motion } from 'framer-motion';
import ProcessStepCard from '../../../components/common/ProcessStepCard';

const EngineeringProcessSection = ({ steps = [] }) => {
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
          Our Engineering Process
        </h2>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          A disciplined, transparent delivery framework engineered for rapid deployment and maximum reliability.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.stepNumber}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            whileHover={{ y: -6 }}
            className="h-full"
          >
            <ProcessStepCard
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EngineeringProcessSection;
