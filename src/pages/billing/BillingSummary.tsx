import { billingSummaryData } from '../../data/mockData';

const BillingSummary = () => {
  return (
    <div className="app-panel p-6">
      <h3 className="mb-6 text-lg font-bold text-[#1A2333]">Billing Summary</h3>

      <div className="mb-6 rounded-[22px] border border-[#ffd9d2] bg-[linear-gradient(180deg,#fff7f4_0%,#fffdfc_100%)] p-5">
        <p className="mb-1 text-sm text-slate-500">Current Balance</p>
        <p className="text-3xl font-bold text-[#CC0000]">{billingSummaryData.currentBalance}</p>
      </div>

      <div className="mb-6">
        <p className="mb-1 text-sm text-slate-500">Last Payment</p>
        <div className="flex justify-between items-baseline gap-4">
          <p className="text-lg font-bold text-slate-800">{billingSummaryData.lastPaymentAmount}</p>
          <p className="text-xs text-slate-400">{billingSummaryData.lastPaymentDate}</p>
        </div>
      </div>

      <div className="mb-6">
        <p className="mb-1 text-sm text-slate-500">Next Invoice Due</p>
        <p className="text-sm font-bold text-slate-800">{billingSummaryData.nextInvoiceDue}</p>
      </div>

      <button className="app-button-primary w-full">Pay Outstanding Balance</button>
    </div>
  );
};

export default BillingSummary;
