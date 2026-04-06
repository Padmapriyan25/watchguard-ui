import { X } from 'lucide-react';
import type { CartItem, OrderTotals } from '../../models/purchaseModel';
import { formatMoney } from './purchaseUi';

interface CartStepProps {
  cart: CartItem[];
  totals: OrderTotals;
  onRemoveItem: (itemId: string) => void;
  onContinueShopping: () => void;
  onProceed: () => void;
}

const CartStep = ({ cart, totals, onRemoveItem, onContinueShopping, onProceed }: CartStepProps) => {
  return (
    <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.07)] md:p-6">
      <h2 className="mb-5 text-[1.9rem] font-bold tracking-tight text-[#1A2333]">Review Cart</h2>

      <div className="space-y-3.5">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-3 rounded-[20px] border border-slate-200 px-4 py-4 shadow-[0_8px_18px_rgba(15,23,42,0.04)] md:flex-row md:items-center md:justify-between"
          >
            <div>
              <div className="text-[1.45rem] font-bold tracking-tight text-[#24355a]">{item.name}</div>
              <div className="mt-1 text-sm text-slate-500">
                {item.termYears} Year | {item.quantity} licenses | {item.billingCycle}
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="text-[1.65rem] font-bold tracking-tight text-[#24355a]">{formatMoney(item.subtotal)}</div>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="rounded-full p-1 text-[#ff5a4d] transition hover:bg-[#fff1ef]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-[20px] border border-slate-200 px-4 py-3.5 text-sm text-slate-400">Enter promo code</div>

      <div className="mt-5 space-y-3 border-b border-slate-200 pb-4 text-sm text-slate-500">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span>{formatMoney(totals.subtotal)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Tax (estimated)</span>
          <span>{formatMoney(totals.tax)}</span>
        </div>
      </div>

      <div className="mt-4 flex items-end justify-between gap-4">
        <div>
          <div className="text-[1.8rem] font-bold tracking-tight text-[#24355a]">Total Due</div>
        </div>
        <div className="text-[1.95rem] font-bold tracking-tight text-[#24355a]">{formatMoney(totals.total)}</div>
      </div>

      <div className="mt-6 flex flex-col gap-3 md:flex-row">
        <button
          onClick={onContinueShopping}
          className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700"
        >
          {'<-'} Continue Shopping
        </button>
        <button
          onClick={onProceed}
          disabled={cart.length === 0}
          className="flex-1 rounded-xl bg-[#f97316] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#ea6a0a] disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          Proceed to Review {'->'}
        </button>
      </div>
    </div>
  );
};

export default CartStep;
