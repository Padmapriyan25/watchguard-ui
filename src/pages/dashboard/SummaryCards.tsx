import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { Users, Box, Key, DollarSign, Calendar } from 'lucide-react';

const SummaryCards = () => {
  const { metrics } = useSelector((state: RootState) => state.dashboard);

  const cards = [
    {
      title: 'Active Customers',
      value: metrics.activeCustomers.count,
      subtext: metrics.activeCustomers.subtext,
      icon: <Users className="w-6 h-6 text-green-500" />,
    },
    {
      title: 'Active Subscriptions',
      value: metrics.activeSubscriptions.count,
      subtext: metrics.activeSubscriptions.subtext,
      icon: <Box className="w-6 h-6 text-blue-500" />,
    },
    {
      title: 'Total Licenses',
      value: metrics.totalLicenses.count.toLocaleString(),
      subtext: `${metrics.totalLicenses.utilized.toLocaleString()} utilized / ${metrics.totalLicenses.available} available`,
      icon: <Key className="w-6 h-6 text-green-500" />,
    },
    {
      title: 'Outstanding Balance',
      value: `$${metrics.outstandingBalance.amount.toLocaleString()}`,
      subtext: metrics.outstandingBalance.dueText,
      subtextClass: 'text-red-500 font-medium',
      icon: <DollarSign className="w-6 h-6 text-red-500" />,
    },
    {
      title: 'Renewals Due',
      value: metrics.renewalsDue.count,
      subtext: metrics.renewalsDue.nextDate,
      subtextClass: 'text-orange-500 font-medium',
      icon: <Calendar className="w-6 h-6 text-orange-500" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
      {cards.map((card, idx) => (
        <div key={idx} className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="mb-3">{card.icon}</div>
            <div className="text-3xl font-bold text-slate-800 mb-1">{card.value}</div>
            <div className="text-sm font-medium text-slate-600 mb-1">{card.title}</div>
          </div>
          <div className={`text-xs ${card.subtextClass || 'text-slate-500'}`}>
            {card.subtext}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
