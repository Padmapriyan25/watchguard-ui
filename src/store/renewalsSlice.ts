import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  renewalActionsData,
  renewalBenefitsData,
  renewalManagedSubscriptionsData,
  renewalTierPlansData,
} from '../data/mockData';
import type {
  RenewalAction,
  RenewalBenefit,
  RenewalManagedSubscription,
  RenewalTierPlan,
} from '../models/renewalsModel';

interface RenewalsState {
  actions: RenewalAction[];
  benefits: RenewalBenefit[];
  managedSubscriptions: RenewalManagedSubscription[];
  tierPlans: RenewalTierPlan[];
  selectedAction: RenewalAction['id'] | null;
  selectedCustomer: string;
  selectedRenewalIds: string[];
  seatQuantities: Record<string, number>;
  loading: boolean;
  error: string | null;
}

const initialState: RenewalsState = {
  actions: renewalActionsData as RenewalAction[],
  benefits: renewalBenefitsData as RenewalBenefit[],
  managedSubscriptions: renewalManagedSubscriptionsData as RenewalManagedSubscription[],
  tierPlans: renewalTierPlansData as RenewalTierPlan[],
  selectedAction: null,
  selectedCustomer: 'All Customers',
  selectedRenewalIds: [],
  seatQuantities: {},
  loading: false,
  error: null,
};

const renewalsSlice = createSlice({
  name: 'renewals',
  initialState,
  reducers: {
    setSelectedAction: (state, action: PayloadAction<RenewalAction['id'] | null>) => {
      state.selectedAction = action.payload;
    },
    setSelectedCustomer: (state, action: PayloadAction<string>) => {
      state.selectedCustomer = action.payload;
    },
    toggleRenewalSelection: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.selectedRenewalIds = state.selectedRenewalIds.includes(id)
        ? state.selectedRenewalIds.filter((item) => item !== id)
        : [...state.selectedRenewalIds, id];
    },
    setSeatQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      state.seatQuantities[action.payload.id] = Math.max(0, action.payload.quantity);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setSelectedAction,
  setSelectedCustomer,
  toggleRenewalSelection,
  setSeatQuantity,
  setLoading,
  setError,
  clearError,
} = renewalsSlice.actions;
export default renewalsSlice.reducer;
