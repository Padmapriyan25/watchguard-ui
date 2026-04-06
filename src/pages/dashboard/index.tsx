import SummaryCards from './SummaryCards';
import ActiveSubscriptions from './ActiveSubscriptions';
import AccountHealth from './AccountHealth';
import QuickActions from './QuickActions';
import RecentInvoices from './RecentInvoices';
import AccountExecutive from './AccountExecutive';
import OrgHierarchy from './OrgHierarchy';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-5">
      <SummaryCards />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)] xl:grid-cols-[minmax(0,2.3fr)_320px]">
        <div className="flex flex-col gap-5">
          <ActiveSubscriptions />
          <RecentInvoices />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:flex xl:flex-col">
          <AccountHealth />
          <QuickActions />
          <AccountExecutive />
        </div>
      </div>
      <OrgHierarchy />
    </div>
  );
}
