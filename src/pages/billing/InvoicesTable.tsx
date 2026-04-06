import { Download, ReceiptText } from 'lucide-react';
import { billingInvoicesData } from '../../data/mockData';

const InvoicesTable = () => {
  return (
    <div className="app-panel flex h-full flex-col p-4 sm:p-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            <ReceiptText className="h-4 w-4 text-[#f15a3d]" />
            Billing center
          </div>
          <h2 className="mt-2 text-lg font-semibold text-[#1A2333] sm:text-xl">Invoices</h2>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <select className="app-input">
          <option>All Customers</option>
        </select>
        <select className="app-input">
          <option>All Time</option>
        </select>
        <select className="app-input">
          <option>All Status</option>
        </select>
      </div>

      <div className="overflow-x-auto rounded-[22px] border border-white/80 bg-white/60">
        <table className="w-full min-w-[700px] text-left text-sm">
          <thead className="bg-white/60 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
            <tr>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Invoice #</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {billingInvoicesData.map((inv, idx) => (
              <tr key={idx} className="border-t border-slate-100 hover:bg-white/55">
                <td className="px-4 py-4 whitespace-nowrap text-gray-700">{inv.customer}</td>
                <td className="px-4 py-4 whitespace-nowrap font-semibold text-slate-800">{inv.id}</td>
                <td className="px-4 py-4 whitespace-nowrap text-gray-600">{inv.date}</td>
                <td className="max-w-[220px] truncate px-4 py-4 text-gray-600">{inv.description}</td>
                <td className="px-4 py-4 whitespace-nowrap font-semibold text-slate-800">{inv.amount}</td>
                <td className="px-4 py-4">
                  <span className={`inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${inv.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {inv.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <button className="rounded-full bg-[#eef3ff] px-3 py-2 text-xs font-medium text-[#315edf]">View</button>
                    <button className="flex items-center gap-1 rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">
                      <Download className="h-3 w-3" /> PDF
                    </button>
                    {inv.status === 'Outstanding' && (
                      <button className="rounded-full bg-[#ffe6e1] px-3 py-2 text-xs font-semibold text-[#db4b39]">
                        Pay Now
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 space-y-4 sm:hidden">
        {billingInvoicesData.map((inv, idx) => (
          <div key={idx} className="rounded-[22px] border border-white/80 bg-white/75 p-4 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.35)]">
            <div className="mb-2 flex justify-between">
              <span className="font-semibold text-slate-800">{inv.id}</span>
              <span className="text-xs text-gray-500">{inv.date}</span>
            </div>

            <p className="mb-2 text-sm text-gray-700">{inv.customer}</p>
            <p className="mb-2 line-clamp-2 text-sm text-gray-500">{inv.description}</p>

            <div className="mb-3 flex items-center justify-between">
              <span className="font-semibold">{inv.amount}</span>
              <span className={`rounded-full px-2 py-1 text-[10px] font-bold uppercase ${inv.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                {inv.status}
              </span>
            </div>

            <div className="flex gap-2 text-xs">
              <button className="rounded-full bg-[#eef3ff] px-3 py-2 text-[#315edf]">View</button>
              <button className="flex items-center gap-1 rounded-full bg-slate-100 px-3 py-2 text-slate-700">
                <Download className="h-3 w-3" /> PDF
              </button>
              {inv.status === 'Outstanding' && <button className="rounded-full bg-[#ffe6e1] px-3 py-2 text-[#db4b39]">Pay Now</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvoicesTable;
