import { ShoppingCart, RefreshCw, FileText, Ticket } from 'lucide-react';
import { dashboardQuickActionsData } from '../../data/mockData';

const getIcon = (iconId: string, border: string) => {
  const blue = border.includes('blue');
  const className = `w-6 h-6 mb-2 ${blue ? 'text-blue-500' : 'text-gray-400'}`;

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
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm h-full flex flex-col">
      <h2 className="text-lg font-bold text-slate-800 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4 flex-1">
        {dashboardQuickActionsData.map((action) => (
          <button key={action.id} className={`border ${action.border} rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors`}>
            {getIcon(action.iconId, action.border)}
            <span className="text-sm font-medium text-slate-700">{action.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
