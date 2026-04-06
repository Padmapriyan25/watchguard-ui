import { Download } from 'lucide-react';
import { billingInvoicesData } from '../../data/mockData';

const InvoicesTable = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-[#1A2333]">Invoices</h2>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Customers</option>
        </select>
        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Time</option>
        </select>
        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Status</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-100">
        <table className="min-w-[700px] w-full text-sm text-left">
          <thead className="text-xs text-gray-500 uppercase font-semibold bg-gray-50">
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
              <tr
                key={idx}
                className="border-t border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="px-4 py-4 text-gray-700 whitespace-nowrap">
                  {inv.customer}
                </td>

                <td className="px-4 py-4 font-semibold text-slate-800 whitespace-nowrap">
                  {inv.id}
                </td>

                <td className="px-4 py-4 text-gray-600 whitespace-nowrap">
                  {inv.date}
                </td>

                <td className="px-4 py-4 text-gray-600 max-w-[220px] truncate">
                  {inv.description}
                </td>

                <td className="px-4 py-4 font-semibold text-slate-800 whitespace-nowrap">
                  {inv.amount}
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide inline-block
                      ${
                        inv.status === 'Paid'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                  >
                    {inv.status}
                  </span>
                </td>

                <td className="px-4 py-4">
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <button className="text-blue-600 hover:text-blue-800 text-xs font-medium">
                      View
                    </button>

                    <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-xs font-medium">
                      <Download className="w-3 h-3" /> PDF
                    </button>

                    {inv.status === 'Outstanding' && (
                      <button className="text-red-600 hover:text-red-800 text-xs font-semibold">
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

      {/* Mobile Cards (Optional Enhancement) */}
      <div className="sm:hidden mt-4 space-y-4">
        {billingInvoicesData.map((inv, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-xl p-4 shadow-sm"
          >
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-slate-800">{inv.id}</span>
              <span className="text-xs text-gray-500">{inv.date}</span>
            </div>

            <p className="text-sm text-gray-700 mb-2">{inv.customer}</p>

            <p className="text-sm text-gray-500 mb-2 line-clamp-2">
              {inv.description}
            </p>

            <div className="flex justify-between items-center mb-3">
              <span className="font-semibold">{inv.amount}</span>
              <span
                className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase
                  ${
                    inv.status === 'Paid'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
              >
                {inv.status}
              </span>
            </div>

            <div className="flex gap-3 text-xs">
              <button className="text-blue-600">View</button>
              <button className="flex items-center gap-1 text-blue-600">
                <Download className="w-3 h-3" /> PDF
              </button>
              {inv.status === 'Outstanding' && (
                <button className="text-red-600">Pay Now</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvoicesTable;