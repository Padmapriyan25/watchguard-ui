import { ShoppingCart, RefreshCw, FileText, Ticket } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    { title: 'New Purchase', icon: <ShoppingCart className="w-6 h-6 mb-2 text-blue-500" />, border: 'border-blue-500' },
    { title: 'Renew', icon: <RefreshCw className="w-6 h-6 mb-2 text-blue-500" />, border: 'border-blue-500' },
    { title: 'Invoices', icon: <FileText className="w-6 h-6 mb-2 text-gray-400" />, border: 'border-gray-200' },
    { title: 'Support', icon: <Ticket className="w-6 h-6 mb-2 text-gray-400" />, border: 'border-gray-200' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm h-full flex flex-col">
      <h2 className="text-lg font-bold text-slate-800 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4 flex-1">
        {actions.map((action, idx) => (
          <button key={idx} className={`border ${action.border} rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors`}>
            {action.icon}
            <span className="text-sm font-medium text-slate-700">{action.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
