import React from 'react';
import Button from './Button';

const JobCard = ({ department, type = 'Full-time', title, location, experience, applyLink = '#' }) => {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 bg-secondary-fixed text-accent-dark-green text-xs font-bold uppercase tracking-wider rounded-md">
          {department}
        </span>
        <div className="flex items-center text-on-surface-variant text-sm font-medium">
          <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {type}
        </div>
      </div>
      
      <h3 className="text-2xl font-display font-semibold text-on-surface mb-4">
        {title}
      </h3>
      
      <div className="flex flex-col gap-2 mb-8">
        <div className="flex items-center text-on-surface-variant text-sm">
          <svg className="w-5 h-5 mr-3 text-outline-variant" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </div>
        <div className="flex items-center text-on-surface-variant text-sm">
          <svg className="w-5 h-5 mr-3 text-outline-variant" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {experience}
        </div>
      </div>
      
      <div className="mt-auto">
        <Button variant="outline" className="w-full" onClick={() => window.location.href = applyLink}>
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
