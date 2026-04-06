import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { purchaseCustomersData, purchaseCategoriesData, productsData } from '../data/mockData';

export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  priceTag: string;
  priceValue: number;
  priceUnit: string;
  categoryId: string;
}

interface PurchaseState {
  customers: string[];
  selectedCustomer: string;
  activeStep: number;
  categories: Category[];
  selectedCategory: string;
  products: Product[];
}

const initialState: PurchaseState = {
  customers: purchaseCustomersData,
  selectedCustomer: purchaseCustomersData[0],
  activeStep: 1,
  categories: purchaseCategoriesData,
  selectedCategory: purchaseCategoriesData[0].id,
  products: productsData
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
    }
  }
});

export const { setSelectedCustomer, setSelectedCategory, setActiveStep } = purchaseSlice.actions;
export default purchaseSlice.reducer;
