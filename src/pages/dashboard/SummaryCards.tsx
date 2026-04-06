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
      icon: Users,
      accent: 'from-[#ffd5c7] to-[#fff3ef]',
      iconClass: 'text-[#f15a3d]',
    },
    {
      title: 'Active Subscriptions',
      value: metrics.activeSubscriptions.count,
      subtext: metrics.activeSubscriptions.subtext,
      icon: Box,
      accent: 'from-[#dce8ff] to-[#f4f8ff]',
      iconClass: 'text-[#4f7fff]',
    },
    {
      title: 'Total Licenses',
      value: metrics.totalLicenses.count.toLocaleString(),
      subtext: `${metrics.totalLicenses.utilized.toLocaleString()} utilized / ${metrics.totalLicenses.available} available`,
      icon: Key,
      accent: 'from-[#d9f4e8] to-[#f4fffa]',
      iconClass: 'text-[#1fa971]',
    },
    {
      title: 'Outstanding Balance',
      value: `$${metrics.outstandingBalance.amount.toLocaleString()}`,
      subtext: metrics.outstandingBalance.dueText,
      subtextClass: 'text-[#db4b39] font-semibold',
      icon: DollarSign,
      accent: 'from-[#ffe3db] to-[#fff6f2]',
      iconClass: 'text-[#db4b39]',
    },
    {
      title: 'Renewals Due',
      value: metrics.renewalsDue.count,
      subtext: metrics.renewalsDue.nextDate,
      subtextClass: 'text-[#b46d00] font-semibold',
      icon: Calendar,
      accent: 'from-[#fff1ca] to-[#fff9ec]',
      iconClass: 'text-[#c58b00]',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5">
      {cards.map((card, idx) => {
        const Icon = card.icon;

        return (
          <div key={idx} className="app-panel overflow-hidden p-5 lg:p-6">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${card.accent}`}>
              <Icon className={`h-5 w-5 ${card.iconClass}`} />
            </div>
            <div className="mt-4 text-3xl font-bold tracking-tight text-slate-800">{card.value}</div>
            <div className="mt-1 text-sm font-semibold text-slate-700">{card.title}</div>
            <div className={`mt-2 text-xs ${card.subtextClass || 'text-slate-500'}`}>
              {card.subtext}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SummaryCards;
