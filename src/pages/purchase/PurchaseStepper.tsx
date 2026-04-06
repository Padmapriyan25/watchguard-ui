import React from 'react';
import { Check } from 'lucide-react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { purchaseStepsData } from '../../data/mockData';

const PurchaseStepper = () => {
  const { activeStep } = useSelector((state: RootState) => state.purchase);

  return (
    <div className="mb-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        {purchaseStepsData.map((step, index) => {
          const isActive = step.number === activeStep;
          const isPassed = step.number < activeStep;

          return (
            <React.Fragment key={step.number}>
              <div className="flex min-w-0 items-center gap-2.5">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                    isPassed
                      ? 'bg-[#22c55e] text-white'
                      : isActive
                        ? 'bg-[#d90416] text-white'
                        : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {isPassed ? <Check className="h-4 w-4" /> : step.number}
                </div>
                <div className="min-w-0">
                  <p className={`text-sm font-bold ${isActive || isPassed ? 'text-slate-800' : 'text-slate-500'}`}>
                    {step.label}
                  </p>
                  <p className="text-xs text-slate-400">{step.subtitle}</p>
                </div>
              </div>

              {index < purchaseStepsData.length - 1 && (
                <div className="hidden h-1 flex-1 rounded-full bg-slate-200 lg:block">
                  <div
                    className={`h-full rounded-full transition-all ${
                      isPassed ? 'bg-[#22c55e]' : 'bg-transparent'
                    }`}
                    style={{ width: isPassed ? '100%' : '0%' }}
                  />
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
