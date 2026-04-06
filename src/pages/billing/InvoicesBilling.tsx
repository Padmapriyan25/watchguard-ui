import InvoicesTable from './InvoicesTable';
import BillingSummary from './BillingSummary';
import PaymentMethods from './PaymentMethods';
import BillingAddress from './BillingAddress';
import AutoRenewSettings from './AutoRenewSettings';

const InvoicesBilling = () => {
  return (
    <div className="grid h-full max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <InvoicesTable />
      </div>

      <div className="flex flex-col gap-6">
        <BillingSummary />
        <PaymentMethods />
        <BillingAddress />
        <AutoRenewSettings />
      </div>
    </div>
  );
};

export default InvoicesBilling;
