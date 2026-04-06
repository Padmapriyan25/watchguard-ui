import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const AccountHealth = () => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm h-full flex flex-col">
      <h2 className="text-lg font-bold text-slate-800 mb-6">Account Health Review</h2>
      
      <div className="flex justify-center mb-8">
        <div className="relative w-32 h-32">
          {/* SVG Donut Chart */}
          <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#f1f5f9"
              strokeWidth="8"
            />
            {/* Foreground circle (approx 80%) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#22c55e"
              strokeWidth="8"
              strokeDasharray="251.2"
              strokeDashoffset="50.24" // 20% offset = 80% filled
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-green-500">Good</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-3 mt-auto">
        <div className="flex items-start gap-2">
          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
          <span className="text-sm text-gray-600">5/6 subscriptions current</span>
        </div>
        <div className="flex items-start gap-2">
          <AlertCircle className="w-5 h-5 text-orange-500 shrink-0" />
          <span className="text-sm text-gray-600">1 subscription expiring in 30 days</span>
        </div>
        <div className="flex items-start gap-2">
          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
          <span className="text-sm text-gray-600">Auto-renew enabled on 4 subs</span>
        </div>
      </div>
    </div>
  );
};

export default AccountHealth;
