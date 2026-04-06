import type { ReactNode } from 'react';
import { Minus, Plus } from 'lucide-react';
import type { RenewalManagedSubscription } from '../../models/renewalsModel';
import { Panel } from '../../components/common';
import { formatRenewalMoney } from './renewalsUi';

interface RenewalsSeatPanelProps {
  subscriptions: RenewalManagedSubscription[];
  seatQuantities: Record<string, number>;
  onQuantityChange: (id: string, quantity: number) => void;
  headerRight?: ReactNode;
}

const RenewalsSeatPanel = ({ subscriptions, seatQuantities, onQuantityChange, headerRight }: RenewalsSeatPanelProps) => {
  return (
    <Panel>
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h3 className="text-xl font-bold text-[#24355a]">Add Licenses to Existing Subscriptions</h3>
        <div className="w-full md:w-auto">{headerRight}</div>
      </div>

      <div className="space-y-4">
        {subscriptions.map((subscription) => {
          const quantity = seatQuantities[subscription.id] ?? 0;

          return (
            <div key={subscription.id} className="rounded-xl border border-slate-200 px-4 py-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xs text-slate-400">{subscription.customer}</div>
                  <div className="font-semibold text-[#24355a]">{subscription.product}</div>
                  <div className="text-sm text-slate-500">
                    Current: {subscription.utilized} / {subscription.licenses} licenses
                  </div>
                </div>
                <div className="text-left md:min-w-[120px] md:text-right">
                  <div className="text-sm font-semibold text-slate-500">{formatRenewalMoney(subscription.seatPrice)}/license/year</div>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm text-slate-500">Add licenses:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onQuantityChange(subscription.id, Math.max(0, quantity - 1))}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-700"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <div className="flex h-8 min-w-[48px] items-center justify-center rounded-lg border border-slate-200 px-3 text-sm font-semibold text-[#24355a]">
                      {quantity}
                    </div>
                    <button
                      onClick={() => onQuantityChange(subscription.id, quantity + 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-700"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <button className="w-full rounded-lg bg-[#007ac9] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0064a8] md:w-auto">
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Panel>
  );
};

export default RenewalsSeatPanel;
