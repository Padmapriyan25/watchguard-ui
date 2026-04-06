import { ShoppingCart, RefreshCw, FileText, Ticket } from 'lucide-react';
import { dashboardQuickActionsData } from '../../data/mockData';

const getIcon = (iconId: string, border: string) => {
  const blue = border.includes('blue');
  const className = `h-5 w-5 ${blue ? 'text-[#4f7fff]' : 'text-[#f15a3d]'}`;

  switch (iconId) {
    case 'refresh':
      return <RefreshCw className={className} />;
    case 'file':
      return <FileText className={className} />;
    case 'ticket':
      return <Ticket className={className} />;
    default:
      return <ShoppingCart className={className} />;
  }
};

const QuickActions = () => {
  return (
    <div className="app-panel flex h-full flex-col p-6">
      <div className="mb-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Quick Actions</h2>
          <p className="text-sm text-slate-500">Common tasks in a cleaner flow.</p>
        </div>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-4">
        {dashboardQuickActionsData.map((action) => (
          <button key={action.id} className="rounded-[22px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(247,249,252,0.9))] p-4 text-left transition hover:-translate-y-0.5 hover:shadow-[0_18px_35px_-26px_rgba(15,23,42,0.4)]">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-50">
              {getIcon(action.iconId, action.border)}
            </div>
            <span className="text-sm font-semibold text-slate-700">{action.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
