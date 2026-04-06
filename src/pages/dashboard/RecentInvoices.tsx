import { useSelector } from 'react-redux';
import { Download } from 'lucide-react';
import type { RootState } from '../../store';

const RecentInvoices = () => {
  const { invoices } = useSelector((state: RootState) => state.dashboard);

  return (
    <div className="app-panel p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-[1.02rem] font-semibold tracking-tight text-slate-800">Recent Invoices</h2>
          <p className="text-xs text-slate-500">Billing activity at a glance.</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {invoices.map((invoice) => (
          <div key={invoice.id} className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-3.5">
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
              <span className={`inline-block rounded-full px-3 py-1 text-[10px] font-medium ${invoice.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                {invoice.status}
              </span>
            </div>

            <div className="w-[100px] text-right">
              <a href="#" className="inline-flex items-center justify-end gap-1 text-xs font-semibold text-[#4f7fff] hover:text-[#315edf]">
                <Download className="h-3.5 w-3.5" />
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
