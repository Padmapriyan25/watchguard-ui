import { ChevronDown, Search } from 'lucide-react';

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

const selectClassName =
  'w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 text-sm text-slate-700 outline-none transition focus:border-[#007ac9] focus:ring-2 focus:ring-[#007ac9]/15';

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
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
      <div className="grid gap-3 lg:grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,0.65fr))]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by product name..."
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-[#007ac9] focus:ring-2 focus:ring-[#007ac9]/15"
          />
        </div>

        <div className="relative">
          <select value={customer} onChange={(e) => onCustomerChange(e.target.value)} className={selectClassName}>
            {customerOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>

        <div className="relative">
          <select value={category} onChange={(e) => onCategoryChange(e.target.value)} className={selectClassName}>
            {categoryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>

        <div className="relative">
          <select value={status} onChange={(e) => onStatusChange(e.target.value)} className={selectClassName}>
            {statusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionsFilters;
