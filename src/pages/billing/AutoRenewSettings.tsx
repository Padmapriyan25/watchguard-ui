import { useState } from 'react';

const AutoRenewSettings = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="app-panel p-6">
      <h3 className="mb-4 text-lg font-bold text-[#1A2333]">Auto-Renew Settings</h3>

      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="text-sm text-slate-700">Enable auto-renew for all subscriptions</span>

        <button
          onClick={() => setEnabled(!enabled)}
          className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none ${enabled ? 'bg-green-500' : 'bg-gray-300'}`}
        >
          <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'}`} />
        </button>
      </div>

      <p className="text-xs leading-tight text-slate-500">
        When enabled, your subscriptions will automatically renew before expiration using your default payment method.
      </p>
    </div>
  );
};

export default AutoRenewSettings;
