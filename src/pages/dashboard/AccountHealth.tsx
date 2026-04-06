import { CheckCircle2, AlertCircle } from 'lucide-react';

const AccountHealth = () => {
  return (
    <div className="app-panel flex h-full flex-col p-5">
      <div className="mb-4">
        <h2 className="text-[1.02rem] font-semibold tracking-tight text-slate-800">Account Health Review</h2>
      </div>

      <div className="mb-5 flex justify-center">
        <div className="relative h-28 w-28">
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
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Status</span>
            <span className="text-xl font-bold text-green-500">Good</span>
          </div>
        </div>
      </div>

      <div className="mt-auto space-y-3 pt-1">
        <div className="flex items-start gap-2">
          <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-green-500" />
          <span className="text-xs text-gray-600">5/6 subscriptions current</span>
        </div>
        <div className="flex items-start gap-2">
          <AlertCircle className="h-4.5 w-4.5 shrink-0 text-orange-500" />
          <span className="text-xs text-gray-600">1 subscription expiring in 30 days</span>
        </div>
        <div className="flex items-start gap-2">
          <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-green-500" />
          <span className="text-xs text-gray-600">Auto-renew enabled on 4 subs</span>
        </div>
      </div>
    </div>
  );
};

export default AccountHealth;
