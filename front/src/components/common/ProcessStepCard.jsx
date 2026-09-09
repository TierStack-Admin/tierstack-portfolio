import React from 'react';

const ProcessStepCard = ({ stepNumber, title, description }) => {
  return (
    <div className="bg-white rounded-2xl p-8 border border-outline-variant/30 shadow-sm flex flex-col items-center text-center relative pt-12 mt-6">
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent-dark-green text-surface-off-white font-display font-bold text-xl rounded-full flex items-center justify-center shadow-md border-4 border-surface-off-white">
        {stepNumber}
      </div>
      
      <h3 className="text-xl font-display font-semibold text-on-surface mb-3 mt-4">
        {title}
      </h3>
      
      <p className="text-on-surface-variant leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ProcessStepCard;
