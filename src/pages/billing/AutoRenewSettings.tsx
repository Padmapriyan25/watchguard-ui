import { useState } from 'react';

const AutoRenewSettings = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <h3 className="text-lg font-bold text-[#1A2333] mb-4">Auto-Renew Settings</h3>
      
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-slate-700">Enable auto-renew for all subscriptions</span>
        
        {/* Toggle Switch */}
        <button 
          onClick={() => setEnabled(!enabled)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${enabled ? 'bg-green-500' : 'bg-gray-300'}`}
        >
          <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'}`} />
        </button>
      </div>
      
      <p className="text-xs text-slate-500 leading-tight">
        When enabled, your subscriptions will automatically renew before expiration using your default payment method.
      </p>
    </div>
  );
};

export default AutoRenewSettings;
