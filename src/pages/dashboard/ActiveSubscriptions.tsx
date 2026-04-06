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
    <div className="app-panel flex h-full flex-col overflow-hidden p-5">
      <div className="flex flex-col gap-4 border-b border-slate-100/80 pb-4 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-[1.05rem] font-semibold tracking-tight text-[#24355a]">Active Subscriptions</h2>

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

              <span className={`inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-semibold ${getCategoryStyle(sub.category.type)}`}>
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

      <div className="hidden pt-3 md:block">
        <div className="overflow-x-auto">
          <div className="min-w-[700px]">
          <div className="grid grid-cols-[1.45fr_1.45fr_1.05fr_0.7fr_0.7fr_0.95fr_0.95fr_0.85fr] gap-4 border-b border-slate-100 pb-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
            <div>Customer</div>
            <div>Product</div>
            <div>Category</div>
            <div>Licenses</div>
            <div>Utilized</div>
            <div>Status</div>
            <div>Renewal</div>
            <div className="text-right">Actions</div>
          </div>

          {visibleSubscriptions.map((sub) => {
            const isExpiring = sub.status === 'Expiring Soon';

            return (
              <div key={sub.id} className="grid min-w-[700px] grid-cols-[1.45fr_1.45fr_1.05fr_0.7fr_0.7fr_0.95fr_0.95fr_0.85fr] items-center gap-4 border-b border-slate-100 py-4 last:border-none">
                <div className="text-xs leading-5 text-[#24355a]">{sub.customer}</div>
                <div className="text-xs font-semibold leading-5 text-[#24355a]">{sub.product}</div>
                <span className={`inline-flex w-fit items-center whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-medium ${getCategoryStyle(sub.category.type)}`}>
                  {sub.category.name}
                </span>
                <div className="text-xs text-slate-700">{sub.licenses}</div>
                <div className="text-xs text-slate-700">{sub.utilized}</div>

                <div>
                  <span className={`flex w-fit items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${isExpiring ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>
                    {isExpiring ? <AlertCircle className="h-3 w-3" /> : <CheckCircle2 className="h-3 w-3" />}
                    {sub.status}
                  </span>
                </div>

                <div className="text-xs text-slate-500">{sub.renewal}</div>

                <div className="flex flex-col items-end gap-1">
                  <button className="text-[10px] font-semibold text-[#315edf] hover:text-[#234bc0]">Renew</button>
                  <button className="text-[10px] font-semibold text-[#315edf] hover:text-[#234bc0]">Add Seats</button>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveSubscriptions;
