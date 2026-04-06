import { createSlice } from '@reduxjs/toolkit';

export interface Subscription {
  id: string;
  customer: string;
  product: string;
  category: {
    name: string;
    type: 'identity' | 'network' | 'cloud';
  };
  licenses: number;
  utilized: number;
  status: 'Active' | 'Expiring Soon';
  renewal: string;
}

export interface Invoice {
  id: string;
  description: string;
  details: string;
  amount: number;
  date: string;
  status: 'Paid' | 'Outstanding';
}

export interface HierarchyNode {
  id: string;
  name: string;
  percentage: number;
}

interface DashboardState {
  metrics: {
    activeCustomers: { count: number; subtext: string };
    activeSubscriptions: { count: number; subtext: string };
    totalLicenses: { count: number; utilized: number; available: number };
    outstandingBalance: { amount: number; dueText: string };
    renewalsDue: { count: number; nextDate: string };
  };
  subscriptions: Subscription[];
  invoices: Invoice[];
  hierarchy: {
    parent: HierarchyNode;
    children: HierarchyNode[];
  };
}

const initialState: DashboardState = {
  metrics: {
    activeCustomers: { count: 4, subtext: "6 subscriptions" },
    activeSubscriptions: { count: 5, subtext: "Across 4 product lines" },
    totalLicenses: { count: 1400, utilized: 1161, available: 239 },
    outstandingBalance: { amount: 4280, dueText: "Due by Apr 15, 2025" },
    renewalsDue: { count: 1, nextDate: "Next: May 3, 2025" },
  },
  subscriptions: [
    {
      id: "1",
      customer: "TechCorp Industries",
      product: "AuthPoint MFA",
      category: { name: "Identity", type: "identity" },
      licenses: 200,
      utilized: 178,
      status: "Active",
      renewal: "Jun 2025"
    },
    {
      id: "2",
      customer: "Financial Services Group",
      product: "Firebox T45 Bundle",
      category: { name: "Network Security", type: "network" },
      licenses: 50,
      utilized: 50,
      status: "Expiring Soon",
      renewal: "May 2025"
    },
    {
      id: "3",
      customer: "TechCorp Industries",
      product: "DNSWatchGO",
      category: { name: "Network Security", type: "network" },
      licenses: 500,
      utilized: 340,
      status: "Active",
      renewal: "Dec 2025"
    },
    {
      id: "4",
      customer: "Healthcare Plus",
      product: "WatchGuard Cloud",
      category: { name: "Cloud", type: "cloud" },
      licenses: 100,
      utilized: 88,
      status: "Active",
      renewal: "Mar 2026"
    }
  ],
  invoices: [
    {
      id: "INV-2025-0312",
      description: "AuthPoint MFA Renewal",
      details: "200 licenses",
      amount: 12400,
      date: "3/1/2025",
      status: "Paid"
    },
    {
      id: "INV-2025-0211",
      description: "DNSWatchGO Additional Licenses",
      details: "100 seats",
      amount: 3200,
      date: "2/1/2025",
      status: "Paid"
    },
    {
      id: "INV-2025-0401",
      description: "Panda Adaptive Defense 360 Renewal",
      details: "",
      amount: 4280,
      date: "4/1/2025",
      status: "Outstanding"
    }
  ],
  hierarchy: {
    parent: { id: "p1", name: "Acme IT Solutions", percentage: 100.00 },
    children: [
      { id: "c1", name: "Financial Services Group", percentage: 84.54 },
      { id: "c2", name: "TechCorp Industries", percentage: 7.67 },
      { id: "c3", name: "Retail Solutions Inc", percentage: 4.96 },
      { id: "c4", name: "Healthcare Plus", percentage: 2.83 },
    ]
  }
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {}
});

export default dashboardSlice.reducer;
