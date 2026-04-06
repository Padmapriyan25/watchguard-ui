import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './dashboardSlice';
import purchaseReducer from './purchaseSlice';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    purchase: purchaseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
