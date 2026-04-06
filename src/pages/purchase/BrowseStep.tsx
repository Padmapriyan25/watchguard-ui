import { Lock } from 'lucide-react';
import type { Category, Product } from '../../models/purchaseModel';
import { Panel, SelectField } from '../../components/common';
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
    <Panel className="rounded-[26px] p-5 md:p-6">
      <h2 className="mb-5 text-[1.9rem] font-bold tracking-tight text-[#1A2333]">Browse Products</h2>

      <div className="mb-6">
        <label className="mb-2.5 block text-sm font-semibold text-slate-700">Select Customer</label>
        <SelectField
          value={selectedCustomer}
          options={customers}
          onChange={onCustomerChange}
          className="[&_select]:h-12 [&_select]:rounded-xl [&_select]:border-slate-200 [&_select]:bg-white [&_select]:px-4 [&_select]:py-3 [&_select]:text-base [&_select]:font-medium"
        />
      </div>

      <div className="mb-6 grid grid-cols-2 gap-3.5 xl:grid-cols-4">
        {categories.map((category) => {
          const isActive = category.id === selectedCategory;
          const Icon = categoryIcons[category.id as keyof typeof categoryIcons] ?? Lock;

          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`rounded-[20px] border bg-white px-4 py-5 text-center transition ${
                isActive
                  ? 'border-[#ff5a4d] bg-[#fff8f7] shadow-[0_12px_30px_rgba(255,90,77,0.08)]'
                  : 'border-slate-200 hover:border-slate-300 hover:shadow-[0_10px_24px_rgba(15,23,42,0.05)]'
              }`}
            >
              <Icon className={`mx-auto mb-3 h-7 w-7 ${category.accent}`} />
              <div className="text-base font-bold text-[#1A2333]">{category.name}</div>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => {
          const Icon = productIcons[product.icon];

          return (
            <div
              key={product.id}
              className="flex min-h-[220px] flex-col rounded-[20px] border border-slate-200 bg-white p-5 shadow-[0_8px_20px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50">
                <Icon className="h-6 w-6 text-[#4b5563]" />
              </div>
              <h3 className="mb-2 text-[1.7rem] font-bold tracking-tight text-[#24355a]">{product.name}</h3>
              <p className="mb-5 flex-1 text-[15px] leading-6 text-slate-500">{product.description}</p>
              <div className="mb-4">
                <span className="text-sm text-slate-400">{product.priceTag} </span>
                <span className="text-[2rem] font-bold leading-none text-[#1A2333]">{formatMoney(product.priceValue)}</span>
                <span className="ml-1 text-sm font-medium text-slate-400">{product.priceUnit}</span>
              </div>
              <button
                onClick={() => onSelectProduct(product.id)}
                className="mt-auto w-full rounded-xl bg-[#007ac9] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0069ad]"
              >
                Configure {'->'}
              </button>
            </div>
          );
        })}
      </div>
    </Panel>
  );
};

export default BrowseStep;
