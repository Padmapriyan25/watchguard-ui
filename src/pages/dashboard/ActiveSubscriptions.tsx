import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RootState } from '../../store';
import { ArrowRight } from 'lucide-react';

const ActiveSubscriptions = () => {
  const { subscriptions } = useSelector((state: RootState) => state.dashboard);

  const getUtilPct = (utilized: number, licenses: number) =>
    Math.min(Math.round((utilized / licenses) * 100), 100);

  const getUtilColor = (pct: number) => {
    if (pct >= 100) return 'bg-red-500';
    if (pct >= 85) return 'bg-amber-400';
    return 'bg-green-500';
  };

  const getCategoryStyle = (type: string) => {
    if (type === 'identity') return 'bg-green-50 text-green-700';
    if (type === 'network') return 'bg-blue-50 text-blue-700';
    if (type === 'endpoint') return 'bg-violet-50 text-violet-700';
    return 'bg-teal-50 text-teal-700';
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm col-span-1 lg:col-span-2 overflow-hidden flex flex-col h-full">
      <div className="px-6 py-4 flex justify-between items-center border-b border-gray-100">
        <h2 className="text-sm font-semibold text-slate-800 tracking-wide uppercase">
          Active Subscriptions
        </h2>
        <Link to="/subscriptions" className="flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors">
          View All <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              {['Customer', 'Product', 'Category', 'Licenses', 'Utilized', 'Status', 'Renewal', 'Actions'].map((col, i) => (
                <th
                  key={col}
                  className={`px-5 py-3 text-[11px] font-semibold text-gray-400 uppercase tracking-wider whitespace-nowrap ${i >= 2 ? 'text-center' : 'text-left'}`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {subscriptions.slice(0, 4).map((sub) => {
              const pct = getUtilPct(sub.utilized, sub.licenses);
              const isExpiring = sub.status === 'Expiring Soon';

              return (
                <tr
                  key={sub.id}
                  className="border-b border-gray-50 last:border-0 hover:bg-gray-50/70 transition-colors"
                >
                  <td className="px-5 py-4 text-gray-600 text-xs whitespace-nowrap">
                    {sub.customer}
                  </td>

                  <td className="px-5 py-4 font-medium text-slate-800 whitespace-nowrap">
                    {sub.product}
                  </td>

                  <td className="px-5 py-4 text-center">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-[11px] font-medium ${getCategoryStyle(sub.category.type)}`}>
                      {sub.category.name}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-center text-gray-600 text-xs">
                    {sub.licenses.toLocaleString()}
                  </td>

                  <td className="px-5 py-4 text-center">
                    <div className="flex flex-col items-center gap-1.5">
                      <span className="text-xs text-gray-700">
                        {sub.utilized.toLocaleString()}
                        <span className="text-gray-400 ml-1">({pct}%)</span>
                      </span>
                      <div className="w-14 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${getUtilColor(pct)}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-center">
                    <div className="inline-flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${isExpiring ? 'bg-amber-400' : 'bg-green-500'}`} />
                      <span className={`text-xs font-medium ${isExpiring ? 'text-amber-700' : 'text-green-700'}`}>
                        {sub.status}
                      </span>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-center text-xs text-gray-500 whitespace-nowrap">
                    {sub.renewal}
                  </td>

                  <td className="px-5 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className="text-xs font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-2 py-1 rounded transition-colors">
                        Renew
                      </button>
                      <button className="text-xs font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-2 py-1 rounded transition-colors whitespace-nowrap">
                        Add Seats
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveSubscriptions;
