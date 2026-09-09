import React from 'react';
import { motion } from 'framer-motion';

const Step2ProjectScope = ({ formData, onChange }) => {
  const projectTypes = [
    'Web Application Development',
    'Mobile Native Apps',
    'Cloud Infrastructure & DevOps',
    'AI Integration & ML Systems',
    'Enterprise Architecture Refactoring',
  ];

  const timelines = ['< 1 Month', '1 - 3 Months', '3 - 6 Months', '6+ Months'];
  const budgets = ['$10k - $25k', '$25k - $50k', '$50k - $100k', '$100k+'];

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-xl font-display font-bold text-on-surface mb-1">
          Step 2: Project Scope
        </h3>
        <p className="text-sm text-on-surface-variant">
          Define the parameters and timeframe of your initiative.
        </p>
      </div>

      {/* Project Type */}
      <div>
        <label className="block text-sm font-semibold text-on-surface mb-3">
          Project Type <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {projectTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => onChange('projectType', type)}
              className={`p-4 rounded-xl text-left border transition-all ${
                formData.projectType === type
                  ? 'border-accent-dark-green bg-[#e8f6ee] text-accent-dark-green font-semibold shadow-sm'
                  : 'border-outline-variant/50 hover:border-outline-variant bg-surface-off-white text-on-surface'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <label className="block text-sm font-semibold text-on-surface mb-3">
          Target Timeline
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {timelines.map((time) => (
            <button
              key={time}
              type="button"
              onClick={() => onChange('timeline', time)}
              className={`py-3 px-3 text-center rounded-xl text-sm font-medium border transition-all ${
                formData.timeline === time
                  ? 'border-accent-dark-green bg-accent-dark-green text-surface-off-white shadow-sm'
                  : 'border-outline-variant/50 hover:border-outline-variant bg-surface-off-white text-on-surface'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Budget Range */}
      <div>
        <label className="block text-sm font-semibold text-on-surface mb-3">
          Estimated Budget Range
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {budgets.map((budget) => (
            <button
              key={budget}
              type="button"
              onClick={() => onChange('budgetRange', budget)}
              className={`py-3 px-3 text-center rounded-xl text-sm font-medium border transition-all ${
                formData.budgetRange === budget
                  ? 'border-accent-dark-green bg-accent-dark-green text-surface-off-white shadow-sm'
                  : 'border-outline-variant/50 hover:border-outline-variant bg-surface-off-white text-on-surface'
              }`}
            >
              {budget}
            </button>
          ))}
        </div>
      </div>

      {/* Brief Summary */}
      <div>
        <label className="block text-sm font-semibold text-on-surface mb-2">
          Project Objective & Overview
        </label>
        <textarea
          rows={4}
          value={formData.projectSummary}
          onChange={(e) => onChange('projectSummary', e.target.value)}
          placeholder="Briefly describe what challenges this project aims to solve..."
          className="w-full px-4 py-3 rounded-xl border border-outline-variant/50 focus:border-accent-dark-green focus:ring-2 focus:ring-accent-dark-green/20 outline-none text-on-surface bg-surface-off-white resize-y"
        />
      </div>
    </motion.div>
  );
};

export default Step2ProjectScope;
