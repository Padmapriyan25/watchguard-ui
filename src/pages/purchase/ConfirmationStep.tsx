import { Bell, CheckCircle2, Download, ShoppingCart } from 'lucide-react';
import type { PlacedOrder } from '../../models/purchaseModel';

interface ConfirmationStepProps {
  placedOrder: PlacedOrder | null;
  onRestart: () => void;
}

const ConfirmationStep = ({ placedOrder, onRestart }: ConfirmationStepProps) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-6 py-10 shadow-sm md:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <CheckCircle2 className="mx-auto mb-5 h-16 w-16 text-[#22c55e]" />
        <h2 className="text-4xl font-bold tracking-tight text-[#24355a]">Order Placed Successfully!</h2>
        <p className="mt-4 text-lg text-slate-500">
          Order Number: <span className="font-bold text-[#24355a]">{placedOrder?.orderNumber}</span>
        </p>
        <p className="mt-3 text-slate-500">A confirmation email has been sent to your registered email address.</p>

        <div className="mt-8">
          <p className="mb-4 text-base font-semibold text-[#24355a]">What&apos;s Next?</p>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-4">
              <CheckCircle2 className="mx-auto mb-3 h-7 w-7 text-[#22c55e]" />
              <p className="font-semibold text-[#24355a]">Account Provisioned</p>
              <p className="mt-1 text-sm text-slate-500">Your services are being set up</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <ShoppingCart className="mx-auto mb-3 h-7 w-7 text-[#7c3aed]" />
              <p className="font-semibold text-[#24355a]">Onboarding Resources</p>
              <p className="mt-1 text-sm text-slate-500">Check your email for guides</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <Bell className="mx-auto mb-3 h-7 w-7 text-[#f59e0b]" />
              <p className="font-semibold text-[#24355a]">Renewal Reminders</p>
              <p className="mt-1 text-sm text-slate-500">We&apos;ll notify you in advance</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 md:flex-row">
          <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#007ac9] px-5 py-2.5 text-sm font-semibold text-[#007ac9]">
            <Download className="h-4 w-4" />
            Download Invoice
          </button>
          <button onClick={onRestart} className="rounded-xl bg-[#d90416] px-5 py-2.5 text-sm font-semibold text-white">
            Start Another Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationStep;
