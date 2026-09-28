import React from 'react';
import Button from './Button';

const CtaBanner = ({ 
  headline, 
  subheadline, 
  buttonText = 'Get Started', 
  buttonAction, 
  variant = 'dark' 
}) => {
  const isDark = variant === 'dark';
  
  return (
    <div className={`py-16 px-6 md:px-12 rounded-3xl text-center flex flex-col items-center justify-center ${
      isDark ? 'bg-accent-dark-green text-surface-off-white' : 'bg-[#e3faed] text-on-surface'
    }`}>
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight max-w-3xl">
        {headline}
      </h2>
      
      {subheadline && (
        <p className={`text-lg md:text-xl max-w-2xl mb-8 ${isDark ? 'text-surface-light-gray' : 'text-on-surface-variant'}`}>
          {subheadline}
        </p>
      )}
      
      <Button 
        variant="primary" 
        size="lg" 
        onClick={buttonAction}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default CtaBanner;
