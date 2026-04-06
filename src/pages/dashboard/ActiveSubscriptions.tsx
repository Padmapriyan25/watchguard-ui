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
    <div className="col-span-1 lg:col-span-2 flex h-full flex-col rounded-2xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between px-4 sm:px-5 py-4 border-b">
        <h2 className="text-base font-semibold text-[#24355a]">
          Active Subscriptions
        </h2>

        <Link
          to="/subscriptions"
          className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          View All <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden divide-y">
        {visibleSubscriptions.map((sub) => {
          const pct = getUtilPct(sub.utilized, sub.licenses);
          const isExpiring = sub.status === 'Expiring Soon';

          return (
            <div key={sub.id} className="p-4 hover:bg-gray-50 transition">

              {/* Top */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-sm text-[#24355a]">
                    {sub.product}
                  </p>
                  <p className="text-xs text-slate-400">
                    {sub.customer}
                  </p>
                </div>

                <span
                  className={`flex items-center gap-1 text-[10px] px-2 py-1 rounded-full font-semibold
                  ${isExpiring ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}
                >
                  {isExpiring ? <AlertCircle className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
                  {sub.status}
                </span>
              </div>

              {/* Category */}
              <div className="mt-2">
                <span className={`px-2 py-0.5 text-[10px] rounded-full ${getCategoryStyle(sub.category.type)}`}>
                  {sub.category.name}
                </span>
              </div>

              {/* Progress */}
              <div className="mt-3">
                <div className="flex justify-between text-xs mb-1 text-slate-500">
                  <span>Utilization</span>
                  <span>{pct}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-3 flex justify-between items-center text-sm">
                <span className="font-medium">{sub.utilized}/{sub.licenses}</span>
                <span className="text-xs text-slate-400">Renews {sub.renewal}</span>
              </div>

              {/* Actions */}
              <div className="mt-3 flex gap-2">
                <button className="flex-1 bg-blue-600 text-white text-xs py-2 rounded-md hover:bg-blue-700">
                  Renew
                </button>
                <button className="flex-1 border text-xs py-2 rounded-md text-slate-600 hover:bg-slate-800 hover:text-white">
                  Add Seats
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= TABLE ================= */}
      <div className="hidden md:block overflow-x-auto px-4 sm:px-5 py-3">

        {/* Header */}
        <div className="min-w-[700px] grid grid-cols-[1.5fr_1.5fr_1fr_1fr_1fr_1fr_1fr] gap-4 text-[11px] font-semibold uppercase text-slate-500 border-b pb-3">
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
            <div
              key={sub.id}
              className="min-w-[700px] grid grid-cols-[1.5fr_1.5fr_1fr_1fr_1fr_1fr_1fr] gap-4 py-4 border-b last:border-none items-center hover:bg-gray-50 transition"
            >
              <div className="truncate text-sm text-[#24355a]">
                {sub.customer}
              </div>

              <div className="truncate text-sm font-semibold text-[#24355a]">
                {sub.product}
              </div>

              <span className={`px-2 py-1 text-[10px] rounded-full w-fit ${getCategoryStyle(sub.category.type)}`}>
                {sub.category.name}
              </span>

              {/* Usage with progress */}
              <div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>{sub.utilized}/{sub.licenses}</span>
                  <span>{pct}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                  <div
                    className="bg-blue-600 h-1.5 rounded-full"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>

              {/* Status */}
              <div>
                <span
                  className={`flex items-center gap-1 text-[11px] px-2 py-1 rounded-full w-fit font-medium
                  ${isExpiring ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}
                >
                  {isExpiring ? <AlertCircle className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
                  {sub.status}
                </span>
              </div>

              {/* Renewal */}
              <div className="hidden lg:block text-sm text-slate-500">
                {sub.renewal}
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-2">
                <button className="px-3 py-1 text-xs rounded-md border border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white transition">
                  Renew
                </button>
                <button className="px-3 py-1 text-xs rounded-md border text-slate-600 hover:bg-slate-800 hover:text-white transition">
                  Add Seats
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActiveSubscriptions;