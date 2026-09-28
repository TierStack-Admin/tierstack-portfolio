import React from 'react';

const StatCard = ({ value, label }) => {
  return (
    <div className="bg-white rounded-2xl p-8 border border-outline-variant/20 shadow-sm flex flex-col items-center justify-center text-center">
      <div className="text-4xl md:text-5xl font-display font-bold text-primary-container mb-2">
        {value}
      </div>
      <div className="text-sm font-semibold tracking-widest text-on-surface-variant uppercase">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
