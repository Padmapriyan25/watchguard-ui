import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import DashboardPage from '../pages/DashboardPage';
import PurchasePage from '../pages/PurchasePage';
import RenewalsPage from '../pages/RenewalsPage';
import BillingPage from '../pages/BillingPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="purchase" element={<PurchasePage />} />
        <Route path="renewals" element={<RenewalsPage />} />
        <Route path="billing" element={<BillingPage />} />
      </Route>
    </Routes>
  );
}
