import React from 'react';

const BillingAddress = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-6">
      <h3 className="text-lg font-bold text-[#1A2333] mb-4">Billing Address</h3>
      
      <div className="text-sm text-slate-600 space-y-1 mb-6">
        <p className="font-bold text-[#1A2333]">Acme IT Solutions</p>
        <p>123 Business Park Drive</p>
        <p>Suite 400</p>
        <p>San Francisco, CA 94107</p>
        <p>United States</p>
      </div>
      
      <button className="text-sm font-bold text-blue-600 hover:text-blue-800">
        Edit Address
      </button>
    </div>
  );
};

export default BillingAddress;
