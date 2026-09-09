import React from 'react';
import { motion } from 'framer-motion';

const Step4Attachments = ({ formData, onChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-xl font-display font-bold text-on-surface mb-1">
          Step 4: Attachments & Links
        </h3>
        <p className="text-sm text-on-surface-variant">
          Share wireframes, PRDs, Figma designs, or repo links (optional).
        </p>
      </div>

      <div>
        <label className="block text-sm font-semibold text-on-surface mb-2">
          Product Specs / Figma / Notion URL
        </label>
        <input
          type="url"
          value={formData.specsUrl}
          onChange={(e) => onChange('specsUrl', e.target.value)}
          placeholder="https://figma.com/file/... or https://notion.so/..."
          className="w-full px-4 py-3 rounded-xl border border-outline-variant/50 focus:border-accent-dark-green focus:ring-2 focus:ring-accent-dark-green/20 outline-none text-on-surface bg-surface-off-white"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-on-surface mb-2">
          Existing Code Repository URL (if applicable)
        </label>
        <input
          type="url"
          value={formData.repositoryUrl}
          onChange={(e) => onChange('repositoryUrl', e.target.value)}
          placeholder="https://github.com/organization/repo"
          className="w-full px-4 py-3 rounded-xl border border-outline-variant/50 focus:border-accent-dark-green focus:ring-2 focus:ring-accent-dark-green/20 outline-none text-on-surface bg-surface-off-white"
        />
      </div>

      {/* File Upload Simulator */}
      <div>
        <label className="block text-sm font-semibold text-on-surface mb-2">
          Upload Architecture Diagram / RFP Document
        </label>
        <div className="border-2 border-dashed border-outline-variant/60 rounded-2xl p-8 text-center bg-surface-off-white hover:bg-surface-light-gray/50 transition cursor-pointer relative">
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                onChange('fileName', file.name);
              }
            }}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="w-12 h-12 rounded-full bg-secondary-fixed/40 flex items-center justify-center mx-auto mb-3 text-accent-dark-green">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <p className="text-sm font-semibold text-on-surface">
            {formData.fileName ? (
              <span className="text-accent-dark-green">Selected: {formData.fileName}</span>
            ) : (
              'Drag & drop your files here, or click to browse'
            )}
          </p>
          <p className="text-xs text-on-surface-variant mt-1">
            PDF, DOCX, PNG, ZIP up to 50MB
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Step4Attachments;
