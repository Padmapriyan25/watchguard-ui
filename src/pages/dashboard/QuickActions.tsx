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
    <div className="app-panel flex h-full flex-col p-5">
      <div className="mb-4">
        <div>
          <h2 className="text-[1.02rem] font-semibold tracking-tight text-slate-800">Quick Actions</h2>
        </div>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-3">
        {dashboardQuickActionsData.map((action) => (
          <button key={action.id} className={`flex min-h-[78px] flex-col items-center justify-center rounded-[10px] border bg-white p-3 sm:min-h-[84px] sm:p-4 text-center transition ${action.border.includes('blue') ? 'border-[#0f80ff] text-[#0f66dc]' : 'border-slate-300 text-slate-700'} hover:bg-slate-50`}>
            <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full">
              {getIcon(action.iconId, action.border)}
            </div>
            <span className="text-[11px] font-medium">{action.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
