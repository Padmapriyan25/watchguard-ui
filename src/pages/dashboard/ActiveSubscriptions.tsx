import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RootState } from '../../store';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

const ActiveSubscriptions = () => {
  const { subscriptions } = useSelector((state: RootState) => state.dashboard);
  const visibleSubscriptions = subscriptions.slice(0, 4);

  const getUtilPct = (utilized: number, licenses: number) =>
    Math.min(Math.round((utilized / licenses) * 100), 100);

  const getCategoryStyle = (type: string) => {
    if (type === 'identity') return 'bg-emerald-100 text-emerald-700';
    if (type === 'network') return 'bg-blue-100 text-blue-700';
    if (type === 'endpoint') return 'bg-violet-100 text-violet-700';
    return 'bg-cyan-100 text-cyan-700';
  };

  return (
    <div className="app-panel col-span-1 flex h-full flex-col overflow-hidden lg:col-span-2">
      <div className="flex flex-col gap-4 border-b border-slate-100/80 px-4 py-4 sm:px-5 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-base font-semibold text-[#24355a]">Active Subscriptions</h2>

        <Link to="/subscriptions" className="inline-flex items-center gap-1 text-sm font-semibold text-[#315edf] hover:text-[#234bc0]">
          View All <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="md:hidden divide-y divide-slate-100/80">
        {visibleSubscriptions.map((sub) => {
          const pct = getUtilPct(sub.utilized, sub.licenses);
          const isExpiring = sub.status === 'Expiring Soon';

          return (
            <div key={sub.id} className="space-y-4 p-4 transition hover:bg-white/40">
              <div className="flex justify-between items-start gap-3">
                <div>
                  <p className="font-semibold text-sm text-[#24355a]">{sub.product}</p>
                  <p className="text-xs text-slate-400">{sub.customer}</p>
                </div>

                <span className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold ${isExpiring ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>
                  {isExpiring ? <AlertCircle className="h-3 w-3" /> : <CheckCircle2 className="h-3 w-3" />}
                  {sub.status}
                </span>
              </div>

              <span className={`inline-flex rounded-full px-2 py-1 text-[10px] font-semibold ${getCategoryStyle(sub.category.type)}`}>
                {sub.category.name}
              </span>

              <div>
                <div className="mb-1 flex justify-between text-xs text-slate-500">
                  <span>Utilization</span>
                  <span>{pct}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-gradient-to-r from-[#4f7fff] to-[#6ea8ff]" style={{ width: `${pct}%` }} />
                </div>
              </div>

              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-slate-700">{sub.utilized}/{sub.licenses}</span>
                <span className="text-xs text-slate-400">Renews {sub.renewal}</span>
              </div>

              <div className="flex gap-2">
                <button className="app-button-primary flex-1">Renew</button>
                <button className="app-button-secondary flex-1">Add Seats</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="hidden px-4 py-3 md:block sm:px-5">
        <div className="min-w-[700px] rounded-[22px] border border-slate-100 bg-white/55 px-4 py-3">
          <div className="grid grid-cols-[1.5fr_1.5fr_1fr_1fr_1fr_1fr_1fr] gap-4 border-b border-slate-100 pb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            <div>Customer</div>
            <div>Product</div>
            <div>Category</div>
            <div>Usage</div>
            <div>Status</div>
            <div className="hidden lg:block">Renewal</div>
            <div className="text-right">Actions</div>
          </div>

          {visibleSubscriptions.map((sub) => {
            const pct = getUtilPct(sub.utilized, sub.licenses);
            const isExpiring = sub.status === 'Expiring Soon';

            return (
              <div key={sub.id} className="grid min-w-[700px] grid-cols-[1.5fr_1.5fr_1fr_1fr_1fr_1fr_1fr] items-center gap-4 border-b border-slate-100 py-4 last:border-none">
                <div className="truncate text-sm text-[#24355a]">{sub.customer}</div>
                <div className="truncate text-sm font-semibold text-[#24355a]">{sub.product}</div>
                <span className={`w-fit rounded-full px-2 py-1 text-[10px] font-semibold ${getCategoryStyle(sub.category.type)}`}>
                  {sub.category.name}
                </span>

                <div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>{sub.utilized}/{sub.licenses}</span>
                    <span>{pct}%</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-slate-100">
                    <div className="h-1.5 rounded-full bg-gradient-to-r from-[#4f7fff] to-[#6ea8ff]" style={{ width: `${pct}%` }} />
                  </div>
                </div>

                <div>
                  <span className={`flex w-fit items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium ${isExpiring ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>
                    {isExpiring ? <AlertCircle className="h-3 w-3" /> : <CheckCircle2 className="h-3 w-3" />}
                    {sub.status}
                  </span>
                </div>

                <div className="hidden text-sm text-slate-500 lg:block">{sub.renewal}</div>

                <div className="flex justify-end gap-2">
                  <button className="app-button-secondary px-3 py-2 text-xs">Renew</button>
                  <button className="app-button-secondary px-3 py-2 text-xs">Add Seats</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActiveSubscriptions;
