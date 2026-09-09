import React from 'react';
import { motion } from 'framer-motion';

const Step5FinalNotes = ({ formData, onChange }) => {
  const contactMethods = [
    { id: 'email', label: 'Email' },
    { id: 'phone', label: 'Phone Call' },
    { id: 'video', label: 'Video Call' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-xl font-display font-bold text-on-surface mb-1">
          Step 5: Final Review & Notes
        </h3>
        <p className="text-sm text-on-surface-variant">
          Review your submission preferences and any concluding notes.
        </p>
      </div>

      {/* Quick Review Summary */}
      <div className="p-5 rounded-2xl bg-surface-light-gray/60 border border-outline-variant/30 text-sm space-y-2">
        <div className="flex justify-between">
          <span className="text-on-surface-variant">Client:</span>
          <span className="font-semibold text-on-surface">
            {formData.fullName || '—'} ({formData.workEmail || '—'})
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-on-surface-variant">Project Type:</span>
          <span className="font-semibold text-on-surface">{formData.projectType}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-on-surface-variant">Budget & Timeline:</span>
          <span className="font-semibold text-on-surface">
            {formData.budgetRange} · {formData.timeline}
          </span>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-on-surface mb-2">
          Additional Notes / Specific Requirements
        </label>
        <textarea
          rows={4}
          value={formData.additionalNotes}
          onChange={(e) => onChange('additionalNotes', e.target.value)}
          placeholder="Any specific architectural preferences, non-functional requirements, compliance standards, etc."
          className="w-full px-4 py-3 rounded-xl border border-outline-variant/50 focus:border-accent-dark-green focus:ring-2 focus:ring-accent-dark-green/20 outline-none text-on-surface bg-surface-off-white resize-y"
        />
      </div>

      {/* Preferred Contact Method */}
      <div>
        <label className="block text-sm font-semibold text-on-surface mb-3">
          Preferred Contact Method
        </label>
        <div className="grid grid-cols-3 gap-3">
          {contactMethods.map((method) => (
            <button
              key={method.id}
              type="button"
              onClick={() => onChange('preferredContactMethod', method.id)}
              className={`py-3 px-3 text-center rounded-xl text-sm font-medium border transition-all ${
                formData.preferredContactMethod === method.id
                  ? 'border-accent-dark-green bg-accent-dark-green text-surface-off-white'
                  : 'border-outline-variant/50 bg-surface-off-white text-on-surface'
              }`}
            >
              {method.label}
            </button>
          ))}
        </div>
      </div>

      {/* NDA Checkbox */}
      <div className="pt-2">
        <label className="flex items-start cursor-pointer">
          <input
            type="checkbox"
            checked={formData.requiresNda}
            onChange={(e) => onChange('requiresNda', e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-outline-variant text-accent-dark-green focus:ring-accent-dark-green"
          />
          <span className="ml-3 text-sm text-on-surface-variant">
            We require a mutual Non-Disclosure Agreement (NDA) executed prior to deep architectural discussions.
          </span>
        </label>
      </div>
    </motion.div>
  );
};

export default Step5FinalNotes;
