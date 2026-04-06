import { Cloud, Flame, Globe, Lock, Monitor, Search, Shield, UserRound } from 'lucide-react';

export const formatMoney = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: value < 10 ? 2 : 0,
    maximumFractionDigits: value < 10 ? 2 : 2,
  }).format(value);

export const categoryIcons = {
  network_security: Lock,
  endpoint: Shield,
  identity: UserRound,
  cloud: Cloud,
};

export const productIcons = {
  flame: Flame,
  shield: Shield,
  globe: Globe,
  lock: Lock,
  cloud: Cloud,
  monitor: Monitor,
  search: Search,
  user: UserRound,
};
