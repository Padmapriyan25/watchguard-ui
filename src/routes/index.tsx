import { Route, Routes } from 'react-router-dom';
import AppShell from '../components/layout/AppShell';
import AdministrationPage from '../pages/administration';
import ConfigurePage from '../pages/configure';
import DashboardPage from '../pages/dashboard';
import InventoryPage from '../pages/inventory';
import MonitorPage from '../pages/monitor';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppShell />}>
        <Route index element={<DashboardPage />} />
        <Route path="monitor" element={<MonitorPage />} />
        <Route path="configure" element={<ConfigurePage />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="administration" element={<AdministrationPage />} />
      </Route>
    </Routes>
  );
}
