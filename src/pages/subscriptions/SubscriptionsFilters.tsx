import { Search } from 'lucide-react';
import { Panel, SelectField } from '../../components/common';

interface SubscriptionsFiltersProps {
  search: string;
  customer: string;
  category: string;
  status: string;
  customerOptions: string[];
  categoryOptions: string[];
  statusOptions: string[];
  onSearchChange: (value: string) => void;
  onCustomerChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

const SubscriptionsFilters = ({
  search,
  customer,
  category,
  status,
  customerOptions,
  categoryOptions,
  statusOptions,
  onSearchChange,
  onCustomerChange,
  onCategoryChange,
  onStatusChange,
}: SubscriptionsFiltersProps) => {
  return (
    <Panel>
      <div className="grid gap-3 lg:grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,0.65fr))]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by product, customer, or code..."
            className="app-input pl-11"
          />
        </div>

        <SelectField value={customer} options={customerOptions} onChange={onCustomerChange} />
        <SelectField value={category} options={categoryOptions} onChange={onCategoryChange} />
        <SelectField value={status} options={statusOptions} onChange={onStatusChange} />
      </div>
    </Panel>
  );
};

export default SubscriptionsFilters;
