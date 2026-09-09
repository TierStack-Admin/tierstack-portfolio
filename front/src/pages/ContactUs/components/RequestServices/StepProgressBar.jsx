import React from 'react';

const StepProgressBar = ({ currentStep, totalSteps, stepsMeta, onGoToStep }) => {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between relative mb-4">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-surface-light-gray -translate-y-1/2 z-0" />
        <div
          className="absolute top-1/2 left-0 h-0.5 bg-accent-dark-green -translate-y-1/2 z-0 transition-all duration-300"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        />

        {stepsMeta.map((s) => {
          const isCompleted = s.number < currentStep;
          const isActive = s.number === currentStep;

          return (
            <button
              key={s.number}
              type="button"
              onClick={() => onGoToStep(s.number)}
              className="relative z-10 flex flex-col items-center group focus:outline-none"
            >
              <div
                className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-display font-bold text-sm transition-all duration-200 border-2 ${
                  isActive
                    ? 'bg-primary-container text-on-surface border-accent-dark-green ring-4 ring-primary-container/30'
                    : isCompleted
                    ? 'bg-accent-dark-green text-surface-off-white border-accent-dark-green'
                    : 'bg-surface-off-white text-on-surface-variant border-outline-variant/60'
                }`}
              >
                {isCompleted ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  s.number
                )}
              </div>
              <span
                className={`hidden sm:block text-xs font-semibold mt-2 ${
                  isActive ? 'text-accent-dark-green' : 'text-on-surface-variant'
                }`}
              >
                {s.title}
              </span>
            </button>
          );
        })}
      </div>

      <div className="sm:hidden text-center text-xs font-bold uppercase tracking-wider text-accent-dark-green mt-2">
        Step {currentStep} of {totalSteps}: {stepsMeta[currentStep - 1].title}
      </div>
    </div>
  );
};

export default StepProgressBar;
