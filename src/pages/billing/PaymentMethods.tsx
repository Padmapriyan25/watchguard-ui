import React from 'react';
import { CreditCard, Plus } from 'lucide-react';
import { defaultPaymentMethod } from '../../data/mockData';

const PaymentMethods = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-[#1A2333]">Payment Methods</h3>
        <button className="text-sm font-bold text-blue-600 flex items-center hover:text-blue-800">
          <Plus className="w-4 h-4 mr-1" /> Add New
        </button>
      </div>
      
      <div className="border border-blue-400 bg-blue-50/30 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CreditCard className="w-6 h-6 text-slate-600" />
          <div>
            <p className="text-sm font-bold text-[#1A2333]">{defaultPaymentMethod.type} ending in {defaultPaymentMethod.last4}</p>
            <p className="text-xs text-slate-500">Expires {defaultPaymentMethod.expiry}</p>
          </div>
        </div>
        {defaultPaymentMethod.isDefault && (
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Default</span>
        )}
      </div>
    </div>
  );
};

export default PaymentMethods;
