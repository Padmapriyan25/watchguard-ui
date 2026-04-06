export interface DashboardMetrics {
  activeCustomers: { count: number; subtext: string };
  activeSubscriptions: { count: number; subtext: string };
  totalLicenses: { count: number; utilized: number; available: number };
  outstandingBalance: { amount: number; dueText: string };
  renewalsDue: { count: number; nextDate: string };
}

export interface Subscription {
  id: string;
  customer: string;
  product: string;
  category: { type: string; name: string };
  licenses: number;
  utilized: number;
  status: 'Active' | 'Expiring Soon' | 'Expired';
  renewal: string;
}

export interface Invoice {
  id: string;
  description: string;
  details: string;
  amount: number;
  date: string;
  status: 'Paid' | 'Upcoming';
}

export interface HierarchyData {
  parent: { name: string; percentage: number };
  children: { id: string; name: string; percentage: number }[];
}
