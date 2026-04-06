import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import DashboardPage from '../pages/dashboard';
import PurchasePage from '../pages/purchase';
import RenewalsPage from '../pages/renewals';
import BillingPage from '../pages/billing';
import SubscriptionsPage from '../pages/subscriptions';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="purchase" element={<PurchasePage />} />
        <Route path="renewals" element={<RenewalsPage />} />
        <Route path="billing" element={<BillingPage />} />
        <Route path="subscriptions" element={<SubscriptionsPage />} />
      </Route>
    </Routes>
  );
}
