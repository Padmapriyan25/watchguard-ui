import React from 'react';
import { RefreshCw, Plus, TrendingUp, ShoppingCart, CheckCircle2 } from 'lucide-react';

const Renewals = () => {
  const actionCards = [
    {
      title: 'Renew Existing Subscriptions',
      description: 'Extend your current subscriptions',
      icon: <RefreshCw className="w-6 h-6 text-white" />,
      iconBg: 'bg-blue-500',
    },
    {
      title: 'Add Licenses / Seats',
      description: 'Increase capacity for existing products',
      icon: <Plus className="w-6 h-6 text-white" />,
      iconBg: 'bg-green-500',
    },
    {
      title: 'Upgrade Tier / Level',
      description: 'Access advanced features',
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      iconBg: 'bg-purple-500',
    },
    {
      title: 'Browse New Products',
      description: 'Explore additional solutions',
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
      iconBg: 'bg-orange-500',
    }
  ];

  const benefits = [
    {
      title: 'Subscriptions Updated',
      description: 'Licenses adjusted instantly',
    },
    {
      title: 'Confirmation + Invoice',
      description: 'Emailed to MSP',
    },
    {
      title: 'Auto-Provisioned',
      description: 'No manual steps',
    },
    {
      title: 'Health Review',
      description: 'Proactive alerts',
    }
  ];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto h-full">
      
      {/* Hero Banner */}
      <div className="bg-[#2A3447] text-white rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-2">Manage + Expand Subscriptions</h2>
        <p className="text-slate-300">Select an action below to renew, expand, or enhance your WatchGuard services</p>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {actionCards.map((card, idx) => (
          <div key={idx} className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col hover:border-gray-300 hover:shadow-md transition-all cursor-pointer">
            <div className={`w-12 h-12 ${card.iconBg} rounded-lg flex items-center justify-center mb-6`}>
              {card.icon}
            </div>
            <h3 className="text-lg font-bold text-[#1A2333] mb-2">{card.title}</h3>
            <p className="text-sm text-slate-500">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Outcome Benefits */}
      <div className="bg-[#F8FDFA] border border-[#A7F3D0] rounded-lg p-6 mt-4">
        <h3 className="text-lg font-bold text-[#1A2333] mb-6">Outcome Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                <h4 className="font-bold text-sm text-[#1A2333] leading-tight">{benefit.title}</h4>
              </div>
              <p className="text-xs text-slate-500 pl-8">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Renewals;
