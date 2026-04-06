import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

const RecentInvoices = () => {
  const { invoices } = useSelector((state: RootState) => state.dashboard);

  return (
    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm col-span-1 lg:col-span-2">
      <h2 className="text-lg font-bold text-slate-800 mb-4">Recent Invoices</h2>
      <div className="flex flex-col gap-3">
        {invoices.map((invoice) => (
          <div key={invoice.id} className="border border-gray-200 rounded-lg p-4 flex flex-wrap justify-between items-center gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="font-bold text-slate-800 text-sm mb-1">{invoice.id}</div>
              <div className="text-xs text-gray-500">
                {invoice.description} {invoice.details && <span className="mx-1">•</span>} {invoice.details}
              </div>
            </div>
            
            <div className="text-right min-w-[80px]">
              <div className="font-bold text-slate-800 text-sm">${invoice.amount.toLocaleString()}</div>
              <div className="text-xs text-gray-500">{invoice.date}</div>
            </div>
            
            <div className="w-[100px] text-center">
              <span className={`px-3 py-1 rounded-full text-xs font-medium inline-block
                ${invoice.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                {invoice.status}
              </span>
            </div>
            
            <div className="w-[80px] text-right">
              <a href="#" className="flex justify-end text-sm font-medium text-blue-600 hover:text-blue-800">
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentInvoices;
