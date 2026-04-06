import React from 'react';
import { Check } from 'lucide-react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { purchaseStepsData } from '../../data/mockData';

const PurchaseStepper = () => {
  const { activeStep } = useSelector((state: RootState) => state.purchase);

  return (
    <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white px-4 py-3.5 shadow-[0_10px_24px_rgba(15,23,42,0.07)]">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        {purchaseStepsData.map((step, index) => {
          const isActive = step.number === activeStep;
          const isPassed = step.number < activeStep;

          return (
            <React.Fragment key={step.number}>
              <div className="flex min-w-0 items-center gap-2.5">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                    isPassed
                      ? 'bg-[#22c55e] text-white'
                      : isActive
                        ? 'bg-[#d90416] text-white'
                        : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {isPassed ? <Check className="h-4.5 w-4.5" /> : step.number}
                </div>
                <div className="min-w-0">
                  <p className={`text-[15px] font-bold ${isActive || isPassed ? 'text-slate-800' : 'text-slate-500'}`}>
                    {step.label}
                  </p>
                  <p className="text-xs text-slate-400">{step.subtitle}</p>
                </div>
              </div>

              {index < purchaseStepsData.length - 1 && (
                <div className="hidden h-1 min-w-[56px] flex-1 rounded-full bg-slate-200 lg:block">
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
