import type { ReactNode } from 'react';
import type { RenewalManagedSubscription } from '../../models/renewalsModel';
import { Panel } from '../../components/common';
import { formatRenewalMoney } from './renewalsUi';

interface RenewalsRenewPanelProps {
  subscriptions: RenewalManagedSubscription[];
  selectedIds: string[];
  onToggle: (id: string) => void;
  headerRight?: ReactNode;
}

const RenewalsRenewPanel = ({ subscriptions, selectedIds, onToggle, headerRight }: RenewalsRenewPanelProps) => {
  return (
    <Panel>
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h3 className="text-xl font-bold text-[#24355a]">Subscriptions Due for Renewal</h3>
        <div className="w-full md:w-auto">{headerRight}</div>
      </div>

      <div className="space-y-3">
        {subscriptions.map((subscription) => (
          <label
            key={subscription.id}
            className="flex cursor-pointer flex-col gap-3 rounded-xl border border-slate-200 px-4 py-4 md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={selectedIds.includes(subscription.id)}
                onChange={() => onToggle(subscription.id)}
                className="mt-1 h-4 w-4 rounded border-slate-300"
              />
              <div>
                <div className="text-xs text-slate-400">{subscription.customer}</div>
                <div className="font-semibold text-[#24355a]">{subscription.product}</div>
                <div className="text-sm text-slate-500">
                  {subscription.licenses} licenses | Expires {subscription.renewalDate}
                </div>
              </div>
            </div>
            <div className="text-left md:min-w-[110px] md:text-right">
              <div className="font-bold text-[#24355a]">{formatRenewalMoney(subscription.renewalPrice, true)}</div>
              <div className="text-xs text-slate-400">per year</div>
            </div>
          </label>
        ))}
      </div>
    </Panel>
  );
};

export default RenewalsRenewPanel;
