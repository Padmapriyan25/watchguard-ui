import type { Subscription } from '../../models/dashboardModel';
import { getCategoryStyle, getStatusStyle, getUtilBarColor, getUtilPct } from './subscriptionUi';

interface SubscriptionsTableProps {
  subscriptions: Subscription[];
}

const SubscriptionsTable = ({ subscriptions }: SubscriptionsTableProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full min-w-[1080px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-white text-left">
              {['Customer', 'Product', 'Category', 'Term', 'Total', 'Used', 'Utilization', 'Status', 'Auto-Renew', 'Renewal', 'Actions'].map((col) => (
                <th key={col} className="px-4 py-4 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((subscription) => {
              const pct = getUtilPct(subscription.utilized, subscription.licenses);

              return (
                <tr key={subscription.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/60">
                  <td className="px-4 py-4 text-sm text-slate-600">{subscription.customer}</td>
                  <td className="px-4 py-4">
                    <div className="font-semibold text-[#24355a]">{subscription.product}</div>
                    <div className="text-xs text-slate-400">{subscription.productCode}</div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${getCategoryStyle(subscription.category.type)}`}>
                      {subscription.category.name}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-600">{subscription.term}</td>
                  <td className="px-4 py-4 font-semibold text-slate-700">{subscription.licenses}</td>
                  <td className="px-4 py-4 text-sm text-slate-600">{subscription.utilized}</td>
                  <td className="px-4 py-4">
                    <div className="w-13 rounded-full bg-slate-100">
                      <div className={`h-1.5 rounded-full ${getUtilBarColor(pct)}`} style={{ width: `${pct}%` }} />
                    </div>
                    <div className="mt-1 text-xs font-semibold text-slate-600">{pct}%</div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusStyle(subscription.status)}`}>
                      {subscription.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <button
                      type="button"
                      aria-label={`Auto renew ${subscription.product}`}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${subscription.autoRenew ? 'bg-[#22c55e]' : 'bg-slate-200'}`}
                    >
                      <span className={`inline-block h-5 w-5 rounded-full bg-white shadow transition ${subscription.autoRenew ? 'translate-x-5' : 'translate-x-0.5'}`} />
                    </button>
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-600">{subscription.renewal}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3 text-xs font-medium text-[#007ac9]">
                      <button className="hover:text-[#005f9f]">Renew</button>
                      <button className="hover:text-[#005f9f]">Add Seats</button>
                      <button className="hover:text-[#005f9f]">View Details</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 p-4 lg:hidden">
        {subscriptions.map((subscription) => {
          const pct = getUtilPct(subscription.utilized, subscription.licenses);

          return (
            <div key={subscription.id} className="rounded-xl border border-slate-200 p-4 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-base font-bold text-[#24355a]">{subscription.product}</div>
                  <div className="mt-1 text-sm text-slate-500">{subscription.customer}</div>
                  <div className="text-xs text-slate-400">{subscription.productCode}</div>
                </div>
                <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusStyle(subscription.status)}`}>
                  {subscription.status}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-slate-400">Category</div>
                  <span className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${getCategoryStyle(subscription.category.type)}`}>
                    {subscription.category.name}
                  </span>
                </div>
                <div>
                  <div className="text-slate-400">Renewal</div>
                  <div className="mt-1 font-medium text-slate-700">{subscription.renewal}</div>
                </div>
                <div>
                  <div className="text-slate-400">Total</div>
                  <div className="mt-1 font-medium text-slate-700">{subscription.licenses}</div>
                </div>
                <div>
                  <div className="text-slate-400">Used</div>
                  <div className="mt-1 font-medium text-slate-700">{subscription.utilized}</div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm">
                <div>
                  <div className="text-slate-400">Auto-Renew</div>
                  <button
                    type="button"
                    aria-label={`Auto renew ${subscription.product}`}
                    className={`mt-1 relative inline-flex h-6 w-11 items-center rounded-full transition ${subscription.autoRenew ? 'bg-[#22c55e]' : 'bg-slate-200'}`}
                  >
                    <span className={`inline-block h-5 w-5 rounded-full bg-white shadow transition ${subscription.autoRenew ? 'translate-x-5' : 'translate-x-0.5'}`} />
                  </button>
                </div>
                <div className="text-right">
                  <div className="text-slate-400">Term</div>
                  <div className="mt-1 font-medium text-slate-700">{subscription.term}</div>
                </div>
              </div>

              <div className="mt-4">
                <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
                  <span>Utilization</span>
                  <span className="font-semibold text-slate-700">{pct}%</span>
                </div>
                <div className="rounded-full bg-slate-100">
                  <div className={`h-2 rounded-full ${getUtilBarColor(pct)}`} style={{ width: `${pct}%` }} />
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-[#007ac9]">
                <button className="rounded-lg bg-blue-50 px-3 py-2">Renew</button>
                <button className="rounded-lg bg-blue-50 px-3 py-2">Add Seats</button>
                <button className="rounded-lg bg-blue-50 px-3 py-2">View Details</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubscriptionsTable;
