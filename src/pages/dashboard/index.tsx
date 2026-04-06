import React from 'react';
import SummaryCards from './SummaryCards';
import ActiveSubscriptions from './ActiveSubscriptions';
import AccountHealth from './AccountHealth';
import QuickActions from './QuickActions';
import RecentInvoices from './RecentInvoices';
import AccountExecutive from './AccountExecutive';
import OrgHierarchy from './OrgHierarchy';

export default function DashboardPage() {
  return (
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
  );
}
