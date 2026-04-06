import { CreditCard, Plus } from 'lucide-react';
import { defaultPaymentMethod } from '../../data/mockData';

const PaymentMethods = () => {
  return (
    <div className="app-panel p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-bold text-[#1A2333]">Payment Methods</h3>
        <button className="inline-flex items-center text-sm font-bold text-[#315edf] hover:text-[#234bc0]">
          <Plus className="mr-1 h-4 w-4" /> Add New
        </button>
      </div>

      <div className="flex items-center justify-between rounded-[22px] border border-blue-200 bg-[linear-gradient(180deg,#f7faff_0%,#ffffff_100%)] p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
            <CreditCard className="h-6 w-6 text-slate-600" />
          </div>
          <div>
            <p className="text-sm font-bold text-[#1A2333]">{defaultPaymentMethod.type} ending in {defaultPaymentMethod.last4}</p>
            <p className="text-xs text-slate-500">Expires {defaultPaymentMethod.expiry}</p>
          </div>
        </div>
        {defaultPaymentMethod.isDefault && (
          <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-bold text-green-700">Default</span>
        )}
      </div>
    </div>
  );
};

export default PaymentMethods;
