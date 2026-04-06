import type { RenewalBenefit } from '../../models/renewalsModel';
import { Panel } from '../../components/common';
import { benefitIcon } from './renewalsUi';

interface RenewalsBenefitsProps {
  benefits: RenewalBenefit[];
}

const RenewalsBenefits = ({ benefits }: RenewalsBenefitsProps) => {
  return (
    <Panel className="border-[#b7f0c9] bg-[#f4fff8] p-5 md:p-6">
      <h3 className="text-xl font-bold text-[#1A2333]">Outcome Benefits</h3>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="flex items-start gap-3">
            <div className="mt-0.5 shrink-0">{benefitIcon}</div>
            <div>
              <div className="font-semibold text-[#24355a]">{benefit.title}</div>
              <div className="text-sm text-slate-500">{benefit.description}</div>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
};

export default RenewalsBenefits;
