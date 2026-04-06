import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';

const ActiveSubscriptions = () => {
  const { subscriptions } = useSelector((state: RootState) => state.dashboard);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm col-span-1 lg:col-span-2 overflow-hidden flex flex-col h-full">
      <div className="p-5 flex justify-between items-center border-b border-gray-100">
        <h2 className="text-lg font-bold text-slate-800">Active Subscriptions</h2>
        <a href="#" className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
          View All <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
      
      <div className="overflow-x-auto p-5">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-500 uppercase font-semibold">
            <tr>
              <th className="pb-3 border-b border-gray-200 font-medium">Customer</th>
              <th className="pb-3 border-b border-gray-200 font-medium">Product</th>
              <th className="pb-3 border-b border-gray-200 font-medium text-center">Category</th>
              <th className="pb-3 border-b border-gray-200 font-medium text-center">Licenses</th>
              <th className="pb-3 border-b border-gray-200 font-medium text-center">Utilized</th>
              <th className="pb-3 border-b border-gray-200 font-medium text-center">Status</th>
              <th className="pb-3 border-b border-gray-200 font-medium text-center">Renewal</th>
              <th className="pb-3 border-b border-gray-200 font-medium text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((sub) => (
              <tr key={sub.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                <td className="py-4 text-gray-700 min-w-[120px]">{sub.customer}</td>
                <td className="py-4 font-semibold text-slate-800 min-w-[150px]">{sub.product}</td>
                <td className="py-4 text-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium 
                    ${sub.category.type === 'identity' ? 'bg-green-100 text-green-700' : 
                      sub.category.type === 'network' ? 'bg-blue-100 text-blue-700' : 
                      'bg-cyan-100 text-cyan-700'}`}>
                    {sub.category.name}
                  </span>
                </td>
                <td className="py-4 text-center text-gray-700">{sub.licenses}</td>
                <td className="py-4 text-center text-gray-700">{sub.utilized}</td>
                <td className="py-4">
                  <div className="flex items-center justify-center gap-1">
                    {sub.status === 'Active' ? (
                      <><CheckCircle2 className="w-4 h-4 text-green-500" /><span className="text-gray-700">Active</span></>
                    ) : (
                      <><Clock className="w-4 h-4 text-orange-500" /><span className="text-gray-700 whitespace-nowrap">Expiring Soon</span></>
                    )}
                  </div>
                </td>
                <td className="py-4 text-center text-gray-700">{sub.renewal}</td>
                <td className="py-4 text-center">
                  <div className="flex flex-col gap-1 items-center">
                    <button className="text-blue-600 hover:text-blue-800 text-xs font-medium">Renew</button>
                    <button className="text-blue-600 hover:text-blue-800 text-xs font-medium whitespace-nowrap">Add Seats</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveSubscriptions;
