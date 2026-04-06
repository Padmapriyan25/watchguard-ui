import { billingAddressData } from '../../data/mockData';

const BillingAddress = () => {
  return (
    <div className="app-panel p-6">
      <h3 className="mb-4 text-lg font-bold text-[#1A2333]">Billing Address</h3>

      <div className="mb-6 space-y-1 text-sm text-slate-600">
        <p className="font-bold text-[#1A2333]">{billingAddressData.company}</p>
        {billingAddressData.lines.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>

      <button className="text-sm font-bold text-[#315edf] hover:text-[#234bc0]">Edit Address</button>
    </div>
  );
};

export default BillingAddress;
