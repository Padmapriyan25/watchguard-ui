import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
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
      <div>
        <p className="text-sm text-slate-400">Partner Portal / My Subscriptions</p>
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
