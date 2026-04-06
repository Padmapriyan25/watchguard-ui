import { CheckCircle2 } from 'lucide-react';
import type { RenewalTierPlan } from '../../models/renewalsModel';
import { Panel } from '../../components/common';
import { formatRenewalMoney } from './renewalsUi';

interface RenewalsUpgradePanelProps {
  plans: RenewalTierPlan[];
}

const RenewalsUpgradePanel = ({ plans }: RenewalsUpgradePanelProps) => {
  return (
    <Panel>
      <h3 className="text-xl font-bold text-[#24355a]">Upgrade Your Subscription Tiers</h3>

      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-xl border p-5 ${plan.isCurrent ? 'border-[#ff5a4d] bg-[#fff8f7]' : 'border-slate-200'}`}
          >
            <div className="text-2xl font-bold text-[#24355a]">{plan.name}</div>
            <div className="mt-2 text-4xl font-bold text-[#d90416]">
              {formatRenewalMoney(plan.monthlyPrice, true)}
              <span className="text-base font-semibold text-slate-500">/mo</span>
            </div>

            <div className="mt-5 space-y-3">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  {feature}
                </div>
              ))}
            </div>

            <button
              className={`mt-6 w-full rounded-lg px-4 py-2.5 text-sm font-semibold ${
                plan.isCurrent ? 'bg-[#d90416] text-white' : 'bg-slate-100 text-slate-500'
              }`}
            >
              {plan.isCurrent ? 'Current Plan' : 'Upgrade'}
            </button>
          </div>
        ))}
      </div>
    </Panel>
  );
};

export default RenewalsUpgradePanel;
