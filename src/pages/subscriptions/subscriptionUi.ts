import type { Subscription } from '../../models/dashboardModel';

export const getUtilPct = (utilized: number, licenses: number) =>
  Math.min(Math.round((utilized / licenses) * 100), 100);

export const getUtilBarColor = (pct: number) => {
  if (pct >= 90) return 'bg-[#ef4444]';
  if (pct >= 80) return 'bg-[#f59e0b]';
  return 'bg-[#22c55e]';
};

export const getCategoryStyle = (type: Subscription['category']['type']) => {
  if (type === 'identity') return 'bg-green-100 text-green-700';
  if (type === 'network') return 'bg-blue-100 text-blue-700';
  if (type === 'endpoint') return 'bg-violet-100 text-violet-700';
  return 'bg-cyan-100 text-cyan-700';
};

export const getStatusStyle = (status: Subscription['status']) => {
  if (status === 'Expiring Soon') return 'bg-amber-100 text-amber-700';
  if (status === 'Expired') return 'bg-red-100 text-red-700';
  return 'bg-green-100 text-green-700';
};
