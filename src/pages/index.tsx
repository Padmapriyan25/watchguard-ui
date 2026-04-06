import React, { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import SummaryCards from '../components/dashboard/SummaryCards';
import ActiveSubscriptions from '../components/dashboard/ActiveSubscriptions';
import AccountHealth from '../components/dashboard/AccountHealth';
import QuickActions from '../components/dashboard/QuickActions';
import RecentInvoices from '../components/dashboard/RecentInvoices';
import AccountExecutive from '../components/dashboard/AccountExecutive';
import OrgHierarchy from '../components/dashboard/OrgHierarchy';
import NewPurchase from '../components/purchase/NewPurchase';
import Renewals from '../components/renewals/Renewals';
import InvoicesBilling from '../components/billing/InvoicesBilling';

export default function App() {
  // We can default to 'purchase' to show off the new page to the user!
  const [activePage, setActivePage] = useState('purchase');

  return (
    <DashboardLayout activePage={activePage} setActivePage={setActivePage}>
      {activePage === 'dashboard' ? (
        <>
          <SummaryCards />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 flex flex-col gap-6">
              <ActiveSubscriptions />
              <RecentInvoices />
            </div>
            <div className="flex flex-col gap-6">
              <AccountHealth />
              <QuickActions />
              <AccountExecutive />
            </div>
          </div>
          
          <OrgHierarchy />
        </>
      ) : activePage === 'purchase' ? (
        <NewPurchase />
      ) : activePage === 'renewals' ? (
        <Renewals />
      ) : (
        <InvoicesBilling />
      )}
    </DashboardLayout>
  );
}
