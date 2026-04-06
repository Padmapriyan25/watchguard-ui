import InvoicesTable from './InvoicesTable';
import BillingSummary from './BillingSummary';
import PaymentMethods from './PaymentMethods';
import BillingAddress from './BillingAddress';
import AutoRenewSettings from './AutoRenewSettings';

const InvoicesBilling = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto h-full">
      {/* Left Column - Invoices */}
      <div className="lg:col-span-2">
        <InvoicesTable />
      </div>
      
      {/* Right Column - Billing Modules */}
      <div className="flex flex-col">
        <BillingSummary />
        <PaymentMethods />
        <BillingAddress />
        <AutoRenewSettings />
      </div>
    </div>
  );
};

export default InvoicesBilling;
