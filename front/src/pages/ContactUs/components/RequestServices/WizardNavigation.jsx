import React from 'react';
import Button from '../../../../components/common/Button';

const WizardNavigation = ({ currentStep, totalSteps, onPrev, onNext, onSubmit, isSubmitting }) => {
  return (
    <div className="flex items-center justify-between pt-8 border-t border-outline-variant/30 mt-8">
      {currentStep > 1 ? (
        <Button type="button" variant="outline" onClick={onPrev}>
          ← Previous Step
        </Button>
      ) : (
        <div />
      )}

      {currentStep < totalSteps ? (
        <Button type="button" variant="primary" onClick={onNext}>
          Next Step →
        </Button>
      ) : (
        <Button
          type="button"
          variant="primary"
          size="lg"
          onClick={onSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting Request...' : 'Submit Service Request →'}
        </Button>
      )}
    </div>
  );
};

export default WizardNavigation;
