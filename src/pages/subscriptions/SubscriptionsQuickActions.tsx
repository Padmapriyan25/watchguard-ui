import { FileText, Headphones, RotateCw, TicketPercent } from 'lucide-react';

const actions = [
  { title: 'View Invoices', subtitle: 'Pay outstanding', icon: FileText, active: true },
  { title: 'Auto-Renew', subtitle: 'Manage settings', icon: RotateCw },
  { title: 'Promo Code', subtitle: 'Redeem code', icon: TicketPercent },
  { title: 'Support', subtitle: 'Get help', icon: Headphones },
];

const SubscriptionsQuickActions = () => {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <button
            key={action.title}
            className={`rounded-2xl border bg-white p-5 text-center shadow-sm transition hover:shadow-md ${action.active ? 'border-[#2491ff]' : 'border-slate-200'}`}
          >
            <Icon className={`mx-auto mb-3 h-7 w-7 ${action.active ? 'text-[#2491ff]' : 'text-slate-500'}`} />
            <div className="font-semibold text-[#24355a]">{action.title}</div>
            <div className="mt-1 text-sm text-slate-500">{action.subtitle}</div>
          </button>
        );
      })}
    </div>
  );
};

export default SubscriptionsQuickActions;
