import { createSlice } from '@reduxjs/toolkit';
import { 
  dashboardMetrics, 
  subscriptionsData, 
  invoiceData, 
  hierarchyData 
} from '../data/mockData';
import type {
  DashboardMetrics,
  Subscription,
  Invoice,
  HierarchyData
} from '../models/dashboardModel';

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
