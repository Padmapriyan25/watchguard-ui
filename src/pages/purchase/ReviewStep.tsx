import type { CartItem, OrderTotals } from '../../models/purchaseModel';
import { purchaseReviewContent } from '../../data/mockData';
import { formatMoney } from './purchaseUi';

interface ReviewStepProps {
  selectedCustomer: string;
  cart: CartItem[];
  totals: OrderTotals;
  acceptedTerms: boolean;
  autoRenew: boolean;
  onAcceptedTermsChange: (value: boolean) => void;
  onAutoRenewChange: (value: boolean) => void;
  onBack: () => void;
  onPlaceOrder: () => void;
}

const ReviewStep = ({
  selectedCustomer,
  cart,
  totals,
  acceptedTerms,
  autoRenew,
  onAcceptedTermsChange,
  onAutoRenewChange,
  onBack,
  onPlaceOrder,
}: ReviewStepProps) => {
  return (
    <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.07)] md:p-6">
      <h2 className="mb-5 text-[1.9rem] font-bold tracking-tight text-[#1A2333]">Review Order Summary</h2>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-[20px] border border-slate-200 p-4 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <h3 className="mb-3 text-[1.2rem] font-bold tracking-tight text-[#24355a]">Billing Details</h3>
          <div className="space-y-1.5 text-sm text-slate-500">
            <p>{selectedCustomer}</p>
            <p>{purchaseReviewContent.billingEmail}</p>
            <p>{purchaseReviewContent.paymentLabel}</p>
          </div>
        </div>
        <div className="rounded-[20px] border border-slate-200 p-4 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <h3 className="mb-3 text-[1.2rem] font-bold tracking-tight text-[#24355a]">Order Summary</h3>
          <div className="space-y-1.5 text-sm text-slate-500">
            <p>{cart.length} {purchaseReviewContent.orderSummaryProductSuffix}</p>
            <p>Total: {formatMoney(totals.total)}</p>
            <p className="text-[#22c55e]">{purchaseReviewContent.deliveryText}</p>
          </div>
        </div>
      </div>

      <label className="mt-4 flex items-center gap-3 rounded-[18px] border border-slate-200 px-4 py-3 text-sm text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
        <input
          type="checkbox"
          checked={acceptedTerms}
          onChange={(e) => onAcceptedTermsChange(e.target.checked)}
          className="h-4 w-4 rounded border-slate-300"
        />
        {purchaseReviewContent.termsLabel}
      </label>

      <label className="mt-3 flex items-center gap-3 rounded-[18px] border border-slate-200 px-4 py-3 text-sm text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
        <input
          type="checkbox"
          checked={autoRenew}
          onChange={(e) => onAutoRenewChange(e.target.checked)}
          className="h-4 w-4 rounded border-slate-300"
        />
        {purchaseReviewContent.autoRenewLabel}
      </label>

      <div className="mt-6 flex flex-col gap-3 md:flex-row">
        <button onClick={onBack} className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700">
          {'<-'} Back
        </button>
        <button
          onClick={onPlaceOrder}
          disabled={!acceptedTerms || cart.length === 0}
          className="flex-1 rounded-xl bg-[#f97316] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#ea6a0a] disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          Place Order {'->'}
        </button>
      </div>
    </div>
  );
};

export default ReviewStep;
