import { billingAddressData } from '../../data/mockData';

const BillingAddress = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-6">
      <h3 className="text-lg font-bold text-[#1A2333] mb-4">Billing Address</h3>
      
      <div className="text-sm text-slate-600 space-y-1 mb-6">
        <p className="font-bold text-[#1A2333]">{billingAddressData.company}</p>
        {billingAddressData.lines.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
      
      <button className="text-sm font-bold text-blue-600 hover:text-blue-800">
        Edit Address
      </button>
    </div>
  );
};

export default BillingAddress;
