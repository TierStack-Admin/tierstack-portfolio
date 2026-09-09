import React from 'react';

const TabSwitcher = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="bg-[#dcf3e7] p-1.5 rounded-2xl flex max-w-md w-full shadow-inner border border-outline-variant/30">
        <button
          type="button"
          onClick={() => onTabChange('general')}
          className={`flex-1 py-3 px-6 rounded-xl font-display font-semibold text-sm transition-all duration-200 ${
            activeTab === 'general'
              ? 'bg-white text-accent-dark-green shadow-md scale-[1.02]'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          General
        </button>
        <button
          type="button"
          onClick={() => onTabChange('request')}
          className={`flex-1 py-3 px-6 rounded-xl font-display font-semibold text-sm transition-all duration-200 ${
            activeTab === 'request'
              ? 'bg-white text-accent-dark-green shadow-md scale-[1.02]'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          Request Services
        </button>
      </div>
    </div>
  );
};

export default TabSwitcher;
