import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

const PurchaseStepper = () => {
  const { activeStep } = useSelector((state: RootState) => state.purchase);

  const steps = [
    { number: 1, label: 'Step 1', subtitle: 'Browse' },
    { number: 2, label: 'Step 2', subtitle: 'Configure' },
    { number: 3, label: 'Step 3', subtitle: 'Review Cart' },
    { number: 4, label: 'Step 4', subtitle: 'Place Order' },
    { number: 5, label: 'Step 5', subtitle: 'Confirmation' },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-6">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        {steps.map((step, index) => {
          const isActive = step.number === activeStep;
          const isPassed = step.number < activeStep;
          
          return (
            <React.Fragment key={step.number}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm z-10 transition-colors
                  ${isActive ? 'bg-[#E51E25] text-white' : 
                    isPassed ? 'bg-green-500 text-white' : 
                    'bg-[#e2e8f0] text-slate-600'}`}>
                  {step.number}
                </div>
                <div className="hidden sm:block">
                  <p className={`text-sm font-bold ${isActive ? 'text-slate-800' : 'text-slate-500'}`}>{step.label}</p>
                  <p className="text-xs text-slate-400">{step.subtitle}</p>
                </div>
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 mx-4 bg-gray-200 relative">
                  <div 
                    className="absolute top-0 left-0 h-full bg-[#E51E25] transition-all" 
                    style={{ width: isPassed ? '100%' : '0%' }}
                  ></div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default PurchaseStepper;
