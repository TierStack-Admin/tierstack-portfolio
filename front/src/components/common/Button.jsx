import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-dark-green';
  
  const variants = {
    primary: 'bg-primary-container text-on-surface hover:brightness-95 shadow-sm',
    secondary: 'bg-accent-dark-green text-surface-off-white hover:bg-on-surface shadow-sm',
    outline: 'border-2 border-outline-variant text-on-surface bg-transparent hover:bg-surface-light-gray',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
