import React from 'react';
import StepProgressBar from './StepProgressBar';
import Step1ContactInfo from './Step1ContactInfo';
import Step2ProjectScope from './Step2ProjectScope';
import Step3TechnicalNeeds from './Step3TechnicalNeeds';
import Step4Attachments from './Step4Attachments';
import Step5FinalNotes from './Step5FinalNotes';
import RequestSuccessView from './RequestSuccessView';
import WizardNavigation from './WizardNavigation';
import { useRequestServicesForm } from './useRequestServicesForm';

const RequestServicesWizard = ({ onSwitchToGeneral }) => {
  const totalSteps = 5;
  const {
    currentStep,
    formData,
    stepError,
    status,
    handleChange,
    handleToggleArray,
    nextStep,
    prevStep,
    goToStep,
    handleSubmit,
    resetForm,
  } = useRequestServicesForm(totalSteps);

  const stepsMeta = [
    { number: 1, title: 'Contact Info' },
    { number: 2, title: 'Project Scope' },
    { number: 3, title: 'Technical Needs' },
    { number: 4, title: 'Attachments' },
    { number: 5, title: 'Final Notes' },
  ];

  if (status.submitted) {
    return (
      <RequestSuccessView
        clientName={formData.fullName}
        projectType={formData.projectType}
        contactMethod={formData.preferredContactMethod}
        onReset={resetForm}
        onSwitchToGeneral={onSwitchToGeneral}
      />
    );
  }

  return (
    <div>
      <StepProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        stepsMeta={stepsMeta}
        onGoToStep={goToStep}
      />

      {stepError && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center">
          <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {stepError}
        </div>
      )}

      {currentStep === 1 && <Step1ContactInfo formData={formData} onChange={handleChange} />}
      {currentStep === 2 && <Step2ProjectScope formData={formData} onChange={handleChange} />}
      {currentStep === 3 && <Step3TechnicalNeeds formData={formData} onToggleArray={handleToggleArray} onChange={handleChange} />}
      {currentStep === 4 && <Step4Attachments formData={formData} onChange={handleChange} />}
      {currentStep === 5 && <Step5FinalNotes formData={formData} onChange={handleChange} />}

      <WizardNavigation
        currentStep={currentStep}
        totalSteps={totalSteps}
        onPrev={prevStep}
        onNext={nextStep}
        onSubmit={handleSubmit}
        isSubmitting={status.submitting}
      />
    </div>
  );
};

export default RequestServicesWizard;
