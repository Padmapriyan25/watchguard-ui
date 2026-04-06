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
  loading: boolean;
  error: string | null;
}

const initialState: DashboardState = {
  metrics: dashboardMetrics,
  subscriptions: subscriptionsData as Subscription[],
  invoices: invoiceData as Invoice[],
  hierarchy: hierarchyData,
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setLoading, setError, clearError } = dashboardSlice.actions;
export default dashboardSlice.reducer;
