import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { purchaseCustomersData, purchaseCategoriesData, productsData } from '../data/mockData';
import type { Category, Product } from '../models/purchaseModel';

interface PurchaseState {
  customers: string[];
  selectedCustomer: string;
  activeStep: number;
  categories: Category[];
  selectedCategory: string;
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: PurchaseState = {
  customers: purchaseCustomersData,
  selectedCustomer: purchaseCustomersData[0],
  activeStep: 1,
  categories: purchaseCategoriesData,
  selectedCategory: purchaseCategoriesData[0].id,
  products: productsData as Product[],
  loading: false,
  error: null,
};

const purchaseSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {
    setSelectedCustomer: (state, action: PayloadAction<string>) => {
      state.selectedCustomer = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setActiveStep: (state, action: PayloadAction<number>) => {
      state.activeStep = action.payload;
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
  }
});

export const { setSelectedCustomer, setSelectedCategory, setActiveStep, setLoading, setError, clearError } = purchaseSlice.actions;
export default purchaseSlice.reducer;
