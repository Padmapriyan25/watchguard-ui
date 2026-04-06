import { createSlice } from '@reduxjs/toolkit';
import { 
  dashboardMetrics, 
  subscriptionsData, 
  invoiceData, 
  hierarchyData 
} from '../data/mockData';

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

interface DashboardState {
  metrics: DashboardMetrics;
  subscriptions: Subscription[];
  invoices: Invoice[];
  hierarchy: HierarchyData;
}

const initialState: DashboardState = {
  metrics: dashboardMetrics,
  subscriptions: subscriptionsData as Subscription[],
  invoices: invoiceData as Invoice[],
  hierarchy: hierarchyData
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {}
});

export default dashboardSlice.reducer;
