import { useMemo, useState } from 'react';
import type { Category, Product } from '../../models/purchaseModel';
import { Panel } from '../../components/common';
import { categoryIcons, formatMoney, productIcons } from '../purchase/purchaseUi';

interface RenewalsBrowsePanelProps {
  categories: Category[];
  products: Product[];
}

const RenewalsBrowsePanel = ({ categories, products }: RenewalsBrowsePanelProps) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id ?? '');

  const filteredProducts = useMemo(
    () => products.filter((product) => product.categoryId === selectedCategory),
    [products, selectedCategory]
  );

  return (
    <Panel>
      <h3 className="text-xl font-bold text-[#24355a]">Browse New Products</h3>
      <p className="mt-1 text-sm text-slate-500">Explore additional solutions you can add to the account.</p>

      <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
        {categories.map((category) => {
          const Icon = categoryIcons[category.id as keyof typeof categoryIcons];
          const isActive = category.id === selectedCategory;

          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-xl border p-4 text-center ${isActive ? 'border-[#ff5a4d] bg-[#fff8f7]' : 'border-slate-200'}`}
            >
              {Icon && <Icon className={`mx-auto mb-2 h-6 w-6 ${category.accent}`} />}
              <div className="text-sm font-semibold text-[#24355a]">{category.name}</div>
            </button>
          );
        })}
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.slice(0, 3).map((product) => {
          const Icon = productIcons[product.icon];

          return (
            <div key={product.id} className="rounded-xl border border-slate-200 p-5 shadow-sm">
              <Icon className="mb-4 h-7 w-7 text-slate-500" />
              <div className="text-xl font-bold text-[#24355a]">{product.name}</div>
              <p className="mt-2 min-h-[48px] text-sm text-slate-500">{product.description}</p>
              <div className="mt-4 text-sm text-slate-400">
                {product.priceTag} <span className="text-2xl font-bold text-[#24355a]">{formatMoney(product.priceValue)}</span>{product.priceUnit}
              </div>
              <button className="mt-4 w-full rounded-lg bg-[#007ac9] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0064a8]">
                Configure {'->'}
              </button>
            </div>
          );
        })}
      </div>
    </Panel>
  );
};

export default RenewalsBrowsePanel;
