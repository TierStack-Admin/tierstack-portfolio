import { useState } from 'react';

const initialFormData = {
  fullName: '',
  workEmail: '',
  companyName: '',
  phoneNumber: '',
  role: '',
  projectType: 'Web Application Development',
  timeline: '1 - 3 Months',
  budgetRange: '$25,000 - $50,000',
  projectSummary: '',
  servicesNeeded: ['Frontend Engineering', 'API Integration'],
  targetPlatforms: ['Web / Desktop'],
  architecturePreference: 'Greenfield (Build from scratch)',
  specsUrl: '',
  repositoryUrl: '',
  fileName: '',
  additionalNotes: '',
  preferredContactMethod: 'email',
  requiresNda: false,
};

export const useRequestServicesForm = (totalSteps = 5) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [stepError, setStepError] = useState('');
  const [status, setStatus] = useState({ submitting: false, submitted: false });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setStepError('');
  };

  const handleToggleArray = (field, item) => {
    setFormData((prev) => {
      const list = prev[field] || [];
      const updated = list.includes(item) ? list.filter((i) => i !== item) : [...list, item];
      return { ...prev, [field]: updated };
    });
  };

  const validateStep = () => {
    if (currentStep === 1) {
      if (!formData.fullName.trim() || !formData.workEmail.trim()) {
        setStepError('Please enter both your full name and work email.');
        return false;
      }
      if (!/\S+@\S+\.\S+/.test(formData.workEmail)) {
        setStepError('Please provide a valid email address.');
        return false;
      }
    }
    if (currentStep === 2 && !formData.projectType) {
      setStepError('Please select a project type.');
      return false;
    }
    setStepError('');
    return true;
  };

  const nextStep = () => {
    if (validateStep() && currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 200, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setStepError('');
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 200, behavior: 'smooth' });
    }
  };

  const goToStep = (stepNumber) => {
    if (stepNumber < currentStep || validateStep()) {
      setCurrentStep(stepNumber);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    setStatus({ submitting: true, submitted: false });
    const payload = { ...formData, submittedAt: new Date().toISOString() };
    console.log('[API Payload - Request Services]:', payload);

    setTimeout(() => {
      setStatus({ submitting: false, submitted: true });
    }, 1000);
  };

  const resetForm = () => {
    setCurrentStep(1);
    setStatus({ submitting: false, submitted: false });
    setFormData(initialFormData);
  };

  return {
    currentStep,
    totalSteps,
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
  };
};
