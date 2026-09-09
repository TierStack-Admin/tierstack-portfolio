import React from 'react';
import { motion } from 'framer-motion';

const Step3TechnicalNeeds = ({ formData, onToggleArray, onChange }) => {
  const serviceOptions = [
    'Frontend Engineering',
    'Backend / Microservices',
    'API Integration',
    'Cloud / DevOps Architecture',
    'Database Optimization',
    'UI/UX Design Systems',
    'Security & Penetration Testing',
    'AI / ML Pipeline Integration',
  ];

  const platformOptions = ['Web / Desktop', 'iOS', 'Android', 'Cloud / Serverless'];

  const architectureOptions = [
    'Greenfield (Build from scratch)',
    'Refactoring & Modernizing an Existing System',
    'Cloud Migration / Infrastructure Scaling',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-xl font-display font-bold text-on-surface mb-1">
          Step 3: Technical Needs
        </h3>
        <p className="text-sm text-on-surface-variant">
          Select specific services, targets, and system requirements.
        </p>
      </div>

      {/* Services Needed */}
      <div>
        <label className="block text-sm font-semibold text-on-surface mb-3">
          Services Required (Select all that apply)
        </label>
        <div className="flex flex-wrap gap-2.5">
          {serviceOptions.map((service) => {
            const selected = formData.servicesNeeded.includes(service);
            return (
              <button
                key={service}
                type="button"
                onClick={() => onToggleArray('servicesNeeded', service)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  selected
                    ? 'bg-accent-dark-green text-surface-off-white shadow-sm'
                    : 'bg-surface-light-gray text-on-surface hover:bg-outline-variant/30'
                }`}
              >
                {selected ? '✓ ' : '+ '}
                {service}
              </button>
            );
          })}
        </div>
      </div>

      {/* Target Platforms */}
      <div>
        <label className="block text-sm font-semibold text-on-surface mb-3">
          Target Platforms
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {platformOptions.map((platform) => {
            const selected = formData.targetPlatforms.includes(platform);
            return (
              <button
                key={platform}
                type="button"
                onClick={() => onToggleArray('targetPlatforms', platform)}
                className={`p-3 text-center rounded-xl text-sm font-medium border transition-all ${
                  selected
                    ? 'border-accent-dark-green bg-[#e8f6ee] text-accent-dark-green font-semibold'
                    : 'border-outline-variant/50 bg-surface-off-white text-on-surface'
                }`}
              >
                {platform}
              </button>
            );
          })}
        </div>
      </div>

      {/* Infrastructure State */}
      <div>
        <label className="block text-sm font-semibold text-on-surface mb-3">
          Infrastructure State
        </label>
        <div className="space-y-2.5">
          {architectureOptions.map((arch) => (
            <label
              key={arch}
              className={`flex items-center p-3.5 rounded-xl border cursor-pointer transition-all ${
                formData.architecturePreference === arch
                  ? 'border-accent-dark-green bg-[#f3faf6]'
                  : 'border-outline-variant/40 hover:bg-surface-off-white'
              }`}
            >
              <input
                type="radio"
                name="architecturePreference"
                value={arch}
                checked={formData.architecturePreference === arch}
                onChange={(e) => onChange('architecturePreference', e.target.value)}
                className="text-accent-dark-green focus:ring-accent-dark-green h-4 w-4"
              />
              <span className="ml-3 text-sm font-medium text-on-surface">{arch}</span>
            </label>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Step3TechnicalNeeds;
