import { useSelector } from 'react-redux';
import { Download } from 'lucide-react';
import type { RootState } from '../../store';

const RecentInvoices = () => {
  const { invoices } = useSelector((state: RootState) => state.dashboard);

  return (
    <div className="app-panel col-span-1 p-5 lg:col-span-2">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Recent Invoices</h2>
          <p className="text-sm text-slate-500">Billing activity at a glance.</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {invoices.map((invoice) => (
          <div key={invoice.id} className="flex flex-wrap items-center justify-between gap-4 rounded-[22px] border border-white/80 bg-white/70 p-4 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.45)]">
            <div className="min-w-[200px] flex-1">
              <div className="mb-1 text-sm font-bold text-slate-800">{invoice.id}</div>
              <div className="text-xs text-gray-500">
                {invoice.description} {invoice.details && <span className="mx-1">&bull;</span>} {invoice.details}
              </div>
            </div>

            <div className="min-w-[80px] text-right">
              <div className="text-sm font-bold text-slate-800">${invoice.amount.toLocaleString()}</div>
              <div className="text-xs text-gray-500">{invoice.date}</div>
            </div>

            <div className="w-[100px] text-center">
              <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${invoice.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                {invoice.status}
              </span>
            </div>

            <div className="w-[100px] text-right">
              <a href="#" className="inline-flex items-center justify-end gap-1 text-sm font-medium text-[#4f7fff] hover:text-[#315edf]">
                <Download className="h-4 w-4" />
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
