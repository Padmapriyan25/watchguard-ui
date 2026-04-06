import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './dashboardSlice';
import purchaseReducer from './purchaseSlice';
import renewalsReducer from './renewalsSlice';
import billingReducer from './billingSlice';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    purchase: purchaseReducer,
    renewals: renewalsReducer,
    billing: billingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
