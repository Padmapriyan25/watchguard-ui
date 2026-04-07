import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Layers3, Sparkles } from 'lucide-react';
import type { RootState } from '../../store';
import SubscriptionsFilters from './SubscriptionsFilters';
import SubscriptionsQuickActions from './SubscriptionsQuickActions';
import SubscriptionsTable from './SubscriptionsTable';

const MySubscriptions = () => {
  const { subscriptions } = useSelector((state: RootState) => state.dashboard);
  const [search, setSearch] = useState('');
  const [customer, setCustomer] = useState('All Customers');
  const [category, setCategory] = useState('All Categories');
  const [status, setStatus] = useState('All Status');

  const customerOptions = ['All Customers', ...Array.from(new Set(subscriptions.map((item) => item.customer)))];
  const categoryOptions = ['All Categories', ...Array.from(new Set(subscriptions.map((item) => item.category.name)))];
  const statusOptions = ['All Status', ...Array.from(new Set(subscriptions.map((item) => item.status)))];

  const filteredSubscriptions = useMemo(() => {
    return subscriptions.filter((subscription) => {
      const matchesSearch =
        subscription.product.toLowerCase().includes(search.toLowerCase()) ||
        subscription.customer.toLowerCase().includes(search.toLowerCase()) ||
        subscription.productCode.toLowerCase().includes(search.toLowerCase());
      const matchesCustomer = customer === 'All Customers' || subscription.customer === customer;
      const matchesCategory = category === 'All Categories' || subscription.category.name === category;
      const matchesStatus = status === 'All Status' || subscription.status === status;

      return matchesSearch && matchesCustomer && matchesCategory && matchesStatus;
    });
  }, [subscriptions, search, customer, category, status]);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-5">
      <div className="app-surface-muted overflow-hidden px-5 py-5 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            {/* <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Partner Portal / My Subscriptions</p> */}
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#24355a]">Subscription portfolio</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-500">Monitor license usage, renewal timing, and account coverage with a cleaner table layout inspired by the reference dashboard style.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="app-chip">
              <Layers3 className="h-3.5 w-3.5 text-[#4f7fff]" />
              {filteredSubscriptions.length} visible
            </span>
            <span className="app-chip">
              <Sparkles className="h-3.5 w-3.5 text-[#f15a3d]" />
              Modernized view
            </span>
          </div>
        </div>
      </div>

      <SubscriptionsFilters
        search={search}
        customer={customer}
        category={category}
        status={status}
        customerOptions={customerOptions}
        categoryOptions={categoryOptions}
        statusOptions={statusOptions}
        onSearchChange={setSearch}
        onCustomerChange={setCustomer}
        onCategoryChange={setCategory}
        onStatusChange={setStatus}
      />

      <SubscriptionsTable subscriptions={filteredSubscriptions} />
      <SubscriptionsQuickActions />
    </div>
  );
};

export default MySubscriptions;
