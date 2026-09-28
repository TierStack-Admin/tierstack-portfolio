import React from 'react';
import Button from '../../../../components/common/Button';

const RequestSuccessView = ({ clientName, projectType, contactMethod, onReset, onSwitchToGeneral }) => {
  return (
    <div className="py-12 text-center bg-[#eefaf3] rounded-2xl p-8 border border-secondary-fixed">
      <div className="w-16 h-16 bg-secondary-fixed text-accent-dark-green rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-2xl sm:text-3xl font-display font-bold text-accent-dark-green mb-2">
        Service Request Received!
      </h3>
      <p className="text-on-surface-variant text-base max-w-lg mx-auto mb-6 leading-relaxed">
        Thank you, <span className="font-semibold text-on-surface">{clientName}</span>. We have logged your request for <span className="font-semibold text-on-surface">{projectType}</span>. Our solutions architect will review the specifications and reach out via {contactMethod}.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button variant="primary" onClick={onReset}>
          Submit Another Request
        </Button>
        <Button variant="outline" onClick={onSwitchToGeneral}>
          Back to General Inquiries
        </Button>
      </div>
    </div>
  );
};

export default RequestSuccessView;
