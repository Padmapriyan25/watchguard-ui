import { ChevronDown, Lock } from 'lucide-react';
import type { Category, Product } from '../../models/purchaseModel';
import { categoryIcons, formatMoney, productIcons } from './purchaseUi';

interface BrowseStepProps {
  customers: string[];
  selectedCustomer: string;
  categories: Category[];
  selectedCategory: string;
  filteredProducts: Product[];
  onCustomerChange: (customer: string) => void;
  onCategoryChange: (categoryId: string) => void;
  onSelectProduct: (productId: string) => void;
}

const BrowseStep = ({
  customers,
  selectedCustomer,
  categories,
  selectedCategory,
  filteredProducts,
  onCustomerChange,
  onCategoryChange,
  onSelectProduct,
}: BrowseStepProps) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <h2 className="mb-5 text-[1.75rem] font-bold text-[#1A2333]">Browse Products</h2>

      <div className="mb-6">
        <label className="mb-2 block text-sm font-semibold text-slate-700">Select Customer</label>
        <div className="relative">
          <select
            value={selectedCustomer}
            onChange={(e) => onCustomerChange(e.target.value)}
            className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-3 pr-10 text-slate-700 outline-none transition focus:border-[#007ac9] focus:ring-2 focus:ring-[#007ac9]/15"
          >
            {customers.map((customer) => (
              <option key={customer} value={customer}>
                {customer}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      <div className="mb-6 grid grid-cols-2 gap-3 xl:grid-cols-4">
        {categories.map((category) => {
          const isActive = category.id === selectedCategory;
          const Icon = categoryIcons[category.id as keyof typeof categoryIcons] ?? Lock;

          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`rounded-xl border bg-white p-4 text-left transition ${
                isActive
                  ? 'border-[#ff5a4d] shadow-[0_0_0_1px_rgba(255,90,77,0.2)]'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <Icon className={`mb-3 h-7 w-7 ${category.accent}`} />
              <div className="text-base font-bold text-[#1A2333]">{category.name}</div>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        {filteredProducts.map((product) => {
          const Icon = productIcons[product.icon];

          return (
            <div key={product.id} className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Icon className="mb-4 h-7 w-7 text-[#f97316]" />
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-[#24355a]">{product.name}</h3>
              <p className="mb-6 flex-1 text-sm leading-6 text-slate-500">{product.description}</p>
              <div className="mb-4">
                <span className="text-sm text-slate-400">{product.priceTag} </span>
                <span className="text-3xl font-bold text-[#1A2333]">{formatMoney(product.priceValue)}</span>
                <span className="ml-1 text-sm font-medium text-slate-400">{product.priceUnit}</span>
              </div>
              <button
                onClick={() => onSelectProduct(product.id)}
                className="rounded-lg bg-[#007ac9] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0069ad]"
              >
                Configure {'->'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrowseStep;
