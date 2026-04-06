import React from 'react';
import { Download } from 'lucide-react';

const InvoicesTable = () => {
  const invoices = [
    {
      customer: 'TechCorp Industries',
      id: 'INV-2025-0312',
      date: '3/1/2025',
      description: 'AuthPoint MFA Renewal - 200 licenses',
      amount: '$12,400',
      status: 'Paid',
    },
    {
      customer: 'TechCorp Industries',
      id: 'INV-2025-0211',
      date: '2/1/2025',
      description: 'DNSWatchGO Additional Licenses - 100 seats',
      amount: '$3,200',
      status: 'Paid',
    },
    {
      customer: 'Financial Services Group',
      id: 'INV-2025-0401',
      date: '4/1/2025',
      description: 'Panda Adaptive Defense 360 Renewal',
      amount: '$4,280',
      status: 'Outstanding',
    },
    {
      customer: 'Financial Services Group',
      id: 'INV-2025-0115',
      date: '1/15/2025',
      description: 'Firebox T45 Bundle Annual Service',
      amount: '$8,900',
      status: 'Paid',
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 h-full flex flex-col">
      <h2 className="text-xl font-bold text-[#1A2333] mb-6">Invoices</h2>
      
      <div className="flex flex-wrap gap-4 mb-6">
        <select className="border border-gray-300 rounded p-2 text-sm text-slate-700 min-w-[200px] outline-none focus:border-blue-500">
          <option>All Customers</option>
        </select>
        <select className="border border-gray-300 rounded p-2 text-sm text-slate-700 min-w-[150px] outline-none focus:border-blue-500">
          <option>All Time</option>
        </select>
        <select className="border border-gray-300 rounded p-2 text-sm text-slate-700 min-w-[150px] outline-none focus:border-blue-500">
          <option>All Status</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-500 uppercase font-semibold border-b border-gray-200">
            <tr>
              <th className="pb-3 font-medium">Customer</th>
              <th className="pb-3 font-medium">Invoice #</th>
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 font-medium">Description</th>
              <th className="pb-3 font-medium">Amount</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv, idx) => (
              <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                <td className="py-4 text-gray-700 w-[15%]">{inv.customer}</td>
                <td className="py-4 font-bold text-slate-800 w-[10%]">{inv.id}</td>
                <td className="py-4 text-gray-700 w-[10%]">{inv.date}</td>
                <td className="py-4 text-gray-700 w-[25%] pr-4">{inv.description}</td>
                <td className="py-4 font-bold text-slate-800 w-[10%]">{inv.amount}</td>
                <td className="py-4 w-[10%]">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider
                    ${inv.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-[#fef3c7] text-[#d97706]'}`}>
                    {inv.status}
                  </span>
                </td>
                <td className="py-4 text-center w-[20%]">
                  <div className="flex items-center justify-center gap-3 text-blue-600 text-xs font-semibold">
                    <button className="flex items-center gap-1 hover:text-blue-800">
                      View
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-800">
                      <Download className="w-3 h-3" /> PDF
                    </button>
                    {inv.status === 'Outstanding' && (
                      <button className="text-[#CC0000] hover:text-red-800 ml-2">
                        Pay<br/>Now
                      </button>
                    )}
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

export default InvoicesTable;
