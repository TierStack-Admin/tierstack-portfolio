import React from 'react';
import { motion } from 'framer-motion';

const Step1ContactInfo = ({ formData, onChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-xl font-display font-bold text-on-surface mb-1">
          Step 1: Contact Information
        </h3>
        <p className="text-sm text-on-surface-variant">
          Let us know who we are speaking with.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-on-surface mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => onChange('fullName', e.target.value)}
            placeholder="Sarah Connor"
            className="w-full px-4 py-3 rounded-xl border border-outline-variant/50 focus:border-accent-dark-green focus:ring-2 focus:ring-accent-dark-green/20 outline-none text-on-surface bg-surface-off-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-on-surface mb-2">
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={formData.workEmail}
            onChange={(e) => onChange('workEmail', e.target.value)}
            placeholder="sarah@enterprise.com"
            className="w-full px-4 py-3 rounded-xl border border-outline-variant/50 focus:border-accent-dark-green focus:ring-2 focus:ring-accent-dark-green/20 outline-none text-on-surface bg-surface-off-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-on-surface mb-2">
            Company / Organization
          </label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => onChange('companyName', e.target.value)}
            placeholder="TechCorp Global"
            className="w-full px-4 py-3 rounded-xl border border-outline-variant/50 focus:border-accent-dark-green focus:ring-2 focus:ring-accent-dark-green/20 outline-none text-on-surface bg-surface-off-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-on-surface mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => onChange('phoneNumber', e.target.value)}
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-3 rounded-xl border border-outline-variant/50 focus:border-accent-dark-green focus:ring-2 focus:ring-accent-dark-green/20 outline-none text-on-surface bg-surface-off-white"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold text-on-surface mb-2">
            Your Role
          </label>
          <input
            type="text"
            value={formData.role}
            onChange={(e) => onChange('role', e.target.value)}
            placeholder="e.g., VP of Engineering, CTO, Product Manager"
            className="w-full px-4 py-3 rounded-xl border border-outline-variant/50 focus:border-accent-dark-green focus:ring-2 focus:ring-accent-dark-green/20 outline-none text-on-surface bg-surface-off-white"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Step1ContactInfo;
