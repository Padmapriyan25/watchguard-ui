import { Bell, CheckCircle2, Download, ShoppingCart } from 'lucide-react';
import type { PlacedOrder } from '../../models/purchaseModel';
import { purchaseConfirmationData } from '../../data/mockData';

interface ConfirmationStepProps {
  placedOrder: PlacedOrder | null;
  onRestart: () => void;
}

const getStepIcon = (iconId: string) => {
  switch (iconId) {
    case 'bell':
      return <Bell className="mx-auto mb-3 h-7 w-7 text-[#f59e0b]" />;
    case 'shopping':
      return <ShoppingCart className="mx-auto mb-3 h-7 w-7 text-[#7c3aed]" />;
    default:
      return <CheckCircle2 className="mx-auto mb-3 h-7 w-7 text-[#22c55e]" />;
  }
};

const ConfirmationStep = ({ placedOrder, onRestart }: ConfirmationStepProps) => {
  return (
    <div className="rounded-[26px] border border-slate-200 bg-white px-5 py-10 shadow-[0_10px_24px_rgba(15,23,42,0.07)] md:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <CheckCircle2 className="mx-auto mb-5 h-16 w-16 text-[#22c55e]" />
        <h2 className="text-[2.1rem] font-bold tracking-tight text-[#24355a]">{purchaseConfirmationData.title}</h2>
        <p className="mt-3 text-lg text-slate-500">
          Order Number: <span className="font-bold text-[#24355a]">{placedOrder?.orderNumber}</span>
        </p>
        <p className="mt-3 text-sm text-slate-500">{purchaseConfirmationData.emailMessage}</p>

        <div className="mt-8">
          <p className="mb-4 text-base font-semibold text-[#24355a]">{purchaseConfirmationData.nextTitle}</p>
          <div className="grid gap-3 md:grid-cols-3">
            {purchaseConfirmationData.nextSteps.map((step) => (
              <div
                key={step.id}
                className="rounded-[20px] bg-slate-50 p-4 shadow-[inset_0_0_0_1px_rgba(226,232,240,0.8)]"
              >
                {getStepIcon(step.iconId)}
                <p className="font-semibold text-[#24355a]">{step.title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 md:flex-row">
          <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#007ac9] px-5 py-2.5 text-sm font-semibold text-[#007ac9]">
            <Download className="h-4 w-4" />
            {purchaseConfirmationData.downloadLabel}
          </button>
          <button onClick={onRestart} className="rounded-xl bg-[#d90416] px-5 py-2.5 text-sm font-semibold text-white">
            {purchaseConfirmationData.restartLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationStep;
