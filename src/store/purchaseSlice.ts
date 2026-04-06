import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { purchaseCustomersData, purchaseCategoriesData, productsData } from '../data/mockData';
import type {
  CartItem,
  Category,
  OrderTotals,
  PlacedOrder,
  Product,
  PurchaseConfig,
} from '../models/purchaseModel';

const TAX_RATE = 0.08;

const defaultConfig = (product?: Product): PurchaseConfig => ({
  termYears: 1,
  quantity: 1,
  billingCycle: product?.billingCycles[0] ?? 'Annual Upfront',
  addOns: [],
});

const calculateCartItem = (product: Product, config: PurchaseConfig): CartItem => {
  const discount = product.termDiscounts[String(config.termYears)] ?? 0;
  const addOnTotal = product.addOns
    .filter((addOn) => config.addOns.includes(addOn.id))
    .reduce((sum, addOn) => sum + addOn.price, 0);
  const unitPrice = Number(((product.priceValue + addOnTotal) * (1 - discount)).toFixed(2));
  const subtotal = Number((unitPrice * config.quantity * config.termYears).toFixed(2));

  return {
    id: `${product.id}-${config.termYears}-${config.quantity}-${Date.now()}`,
    productId: product.id,
    name: product.name,
    quantity: config.quantity,
    termYears: config.termYears,
    billingCycle: config.billingCycle,
    addOns: config.addOns,
    unitPrice,
    subtotal,
  };
};

const calculateTotals = (cart: CartItem[]): OrderTotals => {
  const subtotal = Number(cart.reduce((sum, item) => sum + item.subtotal, 0).toFixed(2));
  const tax = Number((subtotal * TAX_RATE).toFixed(2));
  const total = Number((subtotal + tax).toFixed(2));

  return { subtotal, tax, total };
};

interface PurchaseState {
  customers: string[];
  selectedCustomer: string;
  activeStep: number;
  categories: Category[];
  selectedCategory: string;
  products: Product[];
  selectedProductId: string | null;
  configuration: PurchaseConfig;
  cart: CartItem[];
  acceptedTerms: boolean;
  autoRenew: boolean;
  placedOrder: PlacedOrder | null;
  loading: boolean;
  error: string | null;
}

const initialProduct = productsData[0] as Product;

const initialState: PurchaseState = {
  customers: purchaseCustomersData,
  selectedCustomer: purchaseCustomersData[0],
  activeStep: 1,
  categories: purchaseCategoriesData as Category[],
  selectedCategory: purchaseCategoriesData[0].id,
  products: productsData as Product[],
  selectedProductId: null,
  configuration: defaultConfig(initialProduct),
  cart: [],
  acceptedTerms: false,
  autoRenew: true,
  placedOrder: null,
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
    selectProduct: (state, action: PayloadAction<string>) => {
      const product = state.products.find((item) => item.id === action.payload);
      if (!product) return;

      state.selectedProductId = product.id;
      state.configuration = defaultConfig(product);
      state.activeStep = 2;
    },
    updateConfiguration: (state, action: PayloadAction<Partial<PurchaseConfig>>) => {
      state.configuration = {
        ...state.configuration,
        ...action.payload,
      };
    },
    toggleAddOn: (state, action: PayloadAction<string>) => {
      const addOnId = action.payload;
      const addOns = state.configuration.addOns.includes(addOnId)
        ? state.configuration.addOns.filter((id) => id !== addOnId)
        : [...state.configuration.addOns, addOnId];

      state.configuration.addOns = addOns;
    },
    addConfiguredProductToCart: (state) => {
      const product = state.products.find((item) => item.id === state.selectedProductId);
      if (!product) return;

      const cartItem = calculateCartItem(product, state.configuration);
      state.cart = [cartItem];
      state.activeStep = 3;
    },
    removeCartItem: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      if (state.cart.length === 0) {
        state.activeStep = 1;
        state.selectedProductId = null;
      }
    },
    proceedToReview: (state) => {
      if (state.cart.length > 0) {
        state.activeStep = 4;
      }
    },
    goToCart: (state) => {
      state.activeStep = 3;
    },
    goToBrowse: (state) => {
      state.activeStep = 1;
      state.selectedProductId = null;
      state.configuration = defaultConfig(initialProduct);
    },
    goToConfigure: (state) => {
      if (state.selectedProductId) {
        state.activeStep = 2;
      }
    },
    setAcceptedTerms: (state, action: PayloadAction<boolean>) => {
      state.acceptedTerms = action.payload;
    },
    setAutoRenew: (state, action: PayloadAction<boolean>) => {
      state.autoRenew = action.payload;
    },
    placeOrder: (state) => {
      if (!state.acceptedTerms || state.cart.length === 0) return;

      const totals = calculateTotals(state.cart);
      state.placedOrder = {
        orderNumber: `WG-${Math.floor(1000000 + Math.random() * 9000000)}`,
        customer: state.selectedCustomer,
        ...totals,
      };
      state.activeStep = 5;
    },
    restartPurchase: (state) => {
      state.activeStep = 1;
      state.selectedCategory = purchaseCategoriesData[0].id;
      state.selectedProductId = null;
      state.configuration = defaultConfig(initialProduct);
      state.cart = [];
      state.acceptedTerms = false;
      state.autoRenew = true;
      state.placedOrder = null;
      state.error = null;
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

export const selectSelectedProduct = (state: { purchase: PurchaseState }) =>
  state.purchase.products.find((product) => product.id === state.purchase.selectedProductId) ?? null;

export const selectCartTotals = (state: { purchase: PurchaseState }) => calculateTotals(state.purchase.cart);

export const {
  setSelectedCustomer,
  setSelectedCategory,
  setActiveStep,
  selectProduct,
  updateConfiguration,
  toggleAddOn,
  addConfiguredProductToCart,
  removeCartItem,
  proceedToReview,
  goToCart,
  goToBrowse,
  goToConfigure,
  setAcceptedTerms,
  setAutoRenew,
  placeOrder,
  restartPurchase,
  setLoading,
  setError,
  clearError,
} = purchaseSlice.actions;
export default purchaseSlice.reducer;
