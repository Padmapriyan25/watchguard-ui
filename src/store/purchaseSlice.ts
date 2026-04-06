import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

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
  customers: ['TechCorp Industries - Technology', 'Acme IT Solutions', 'Financial Services Group'],
  selectedCustomer: 'TechCorp Industries - Technology',
  activeStep: 1,
  categories: [
    { id: 'network_security', name: 'Network Security' },
    { id: 'endpoint', name: 'Endpoint' },
    { id: 'identity', name: 'Identity' },
    { id: 'cloud', name: 'Cloud' },
  ],
  selectedCategory: 'network_security',
  products: [
    {
      id: 'p1',
      name: 'Firebox M290',
      description: 'High-performance network security appliance for mid-size enterprises',
      priceTag: 'Starting from',
      priceValue: 2499,
      priceUnit: '/user/yr',
      categoryId: 'network_security'
    },
    {
      id: 'p2',
      name: 'Firebox T45',
      description: 'Tabletop firewall perfect for small offices and remote locations',
      priceTag: 'Starting from',
      priceValue: 899,
      priceUnit: '/user/yr',
      categoryId: 'network_security'
    },
    {
      id: 'p3',
      name: 'DNSWatchGO',
      description: 'Cloud-based DNS filtering and threat protection',
      priceTag: 'Starting from',
      priceValue: 1.2,
      priceUnit: '/user/yr',
      categoryId: 'network_security'
    }
  ]
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
