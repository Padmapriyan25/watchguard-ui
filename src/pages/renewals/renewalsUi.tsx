import { CheckCircle2, Plus, RefreshCw, ShoppingCart, TrendingUp } from 'lucide-react';

export const formatRenewalMoney = (value: number, compact = false) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: compact ? 0 : value < 10 ? 1 : 0,
    maximumFractionDigits: compact ? 0 : value < 10 ? 1 : 0,
  }).format(value);

export const getRenewalActionIcon = (iconId: string, className: string) => {
  switch (iconId) {
    case 'refresh': return <RefreshCw className={className} />;
    case 'plus': return <Plus className={className} />;
    case 'trending': return <TrendingUp className={className} />;
    case 'shopping': return <ShoppingCart className={className} />;
    default: return <RefreshCw className={className} />;
  }
};

export const benefitIcon = <CheckCircle2 className="h-5 w-5 text-green-500" />;
