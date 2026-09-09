import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, tags = [], link = '#' }) => {
  return (
    <div className="bg-white rounded-2xl p-8 border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      <div className="w-12 h-12 bg-secondary-fixed rounded-lg flex items-center justify-center text-on-surface mb-6">
        {icon}
      </div>
      
      <h3 className="text-xl font-display font-semibold text-on-surface mb-3">
        {title}
      </h3>
      
      <p className="text-on-surface-variant leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-surface-light-gray text-on-surface-variant text-sm font-medium rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      <div className="mt-auto">
        <Link 
          to={link}
          className="inline-flex items-center text-accent-dark-green font-semibold hover:text-on-surface transition-colors"
        >
          Learn More
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
