import { createSlice } from '@reduxjs/toolkit';
import { billingInvoicesData, billingAddressData, defaultPaymentMethod, billingSummaryData } from '../data/mockData';
import type { BillingInvoice, BillingAddress, PaymentMethod, BillingSummary } from '../models/billingModel';

interface BillingState {
  invoices: BillingInvoice[];
  address: BillingAddress;
  paymentMethod: PaymentMethod;
  summary: BillingSummary;
  loading: boolean;
  error: string | null;
}

const initialState: BillingState = {
  invoices: billingInvoicesData as BillingInvoice[],
  address: billingAddressData as BillingAddress,
  paymentMethod: defaultPaymentMethod as PaymentMethod,
  summary: billingSummaryData as BillingSummary,
  loading: false,
  error: null,
};

const billingSlice = createSlice({
  name: 'billing',
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
    updatePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
  },
});

export const { setLoading, setError, clearError, updatePaymentMethod } = billingSlice.actions;
export default billingSlice.reducer;