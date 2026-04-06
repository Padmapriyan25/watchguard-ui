import { createSlice } from '@reduxjs/toolkit';
import { renewalActionsData, renewalBenefitsData } from '../data/mockData';
import type { RenewalAction, RenewalBenefit } from '../models/renewalsModel';

interface RenewalsState {
  actions: RenewalAction[];
  benefits: RenewalBenefit[];
  loading: boolean;
  error: string | null;
}

const initialState: RenewalsState = {
  actions: renewalActionsData as RenewalAction[],
  benefits: renewalBenefitsData as RenewalBenefit[],
  loading: false,
  error: null,
};

const renewalsSlice = createSlice({
  name: 'renewals',
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

export const { setLoading, setError, clearError } = renewalsSlice.actions;
export default renewalsSlice.reducer;