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
    <Panel className="p-5 md:p-6">
      <h2 className="mb-5 text-[1.75rem] font-bold text-[#1A2333]">Browse Products</h2>

      <div className="mb-6">
        <label className="mb-2 block text-sm font-semibold text-slate-700">Select Customer</label>
        <SelectField
          value={selectedCustomer}
          options={customers}
          onChange={onCustomerChange}
          className="[&_select]:py-3"
        />
      </div>

      <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        {categories.map((category) => {
          const isActive = category.id === selectedCategory;
          const Icon = categoryIcons[category.id as keyof typeof categoryIcons] ?? Lock;

          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`rounded-xl border bg-white p-4 text-center transition ${
                isActive
                  ? 'border-[#ff5a4d] shadow-[0_0_0_1px_rgba(255,90,77,0.2)] bg-[#fff8f7]'
                  : 'border-slate-200 hover:border-slate-300'
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
            <div key={product.id} className="flex min-h-[230px] flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Icon className="mb-4 h-7 w-7 text-[#4b5563]" />
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
    </Panel>
  );
};

export default BrowseStep;
