import { CheckCircle2, AlertCircle } from 'lucide-react';

const AccountHealth = () => {
  return (
    <div className="app-panel flex h-full flex-col p-6">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-800">Account Health Review</h2>
      </div>

      <div className="mb-8 flex justify-center">
        <div className="relative h-36 w-36">
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#eef2f7" strokeWidth="8" />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="url(#healthGradient)"
              strokeWidth="8"
              strokeDasharray="251.2"
              strokeDashoffset="50.24"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="healthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Status</span>
            <span className="text-xl font-bold text-green-500">Good</span>
          </div>
        </div>
      </div>

      <div className="mt-auto space-y-3">
        <div className="flex items-start gap-2 rounded-2xl bg-slate-50/90 px-3 py-3">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
          <span className="text-sm text-gray-600">5/6 subscriptions current</span>
        </div>
        <div className="flex items-start gap-2 rounded-2xl bg-slate-50/90 px-3 py-3">
          <AlertCircle className="h-5 w-5 shrink-0 text-orange-500" />
          <span className="text-sm text-gray-600">1 subscription expiring in 30 days</span>
        </div>
        <div className="flex items-start gap-2 rounded-2xl bg-slate-50/90 px-3 py-3">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
          <span className="text-sm text-gray-600">Auto-renew enabled on 4 subs</span>
        </div>
      </div>
    </div>
  );
};

export default AccountHealth;
