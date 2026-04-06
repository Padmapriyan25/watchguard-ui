import { billingSummaryData } from '../../data/mockData';

const BillingSummary = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-6">
      <h3 className="text-lg font-bold text-[#1A2333] mb-6">Billing Summary</h3>
      
      <div className="mb-6 pb-6 border-b border-gray-100">
        <p className="text-sm text-slate-500 mb-1">Current Balance</p>
        <p className="text-3xl font-bold text-[#CC0000]">{billingSummaryData.currentBalance}</p>
      </div>
      
      <div className="mb-6">
        <p className="text-sm text-slate-500 mb-1">Last Payment</p>
        <div className="flex justify-between items-baseline">
          <p className="text-lg font-bold text-slate-800">{billingSummaryData.lastPaymentAmount}</p>
          <p className="text-xs text-slate-400">{billingSummaryData.lastPaymentDate}</p>
        </div>
      </div>
      
      <div className="mb-6">
        <p className="text-sm text-slate-500 mb-1">Next Invoice Due</p>
        <p className="text-sm font-bold text-slate-800">{billingSummaryData.nextInvoiceDue}</p>
      </div>
      
      <button className="w-full bg-[#CC0000] hover:bg-red-800 text-white font-bold py-3 px-4 rounded transition-colors text-sm">
        Pay Outstanding Balance
      </button>
    </div>
  );
};

export default BillingSummary;
