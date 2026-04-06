import { ChevronLeft, Minus, Plus } from 'lucide-react';
import type { Product, PurchaseConfig } from '../../models/purchaseModel';
import { Panel, SelectField } from '../../components/common';
import { formatMoney } from './purchaseUi';

interface ConfigureStepProps {
  selectedProduct: Product;
  configuration: PurchaseConfig;
  onBack: () => void;
  onConfigurationChange: (changes: Partial<PurchaseConfig>) => void;
  onToggleAddOn: (addOnId: string) => void;
  onAddToCart: () => void;
}

const ConfigureStep = ({
  selectedProduct,
  configuration,
  onBack,
  onConfigurationChange,
  onToggleAddOn,
  onAddToCart,
}: ConfigureStepProps) => {
  const selectedAddOns = selectedProduct.addOns.filter((addOn) => configuration.addOns.includes(addOn.id));
  const discount = selectedProduct.termDiscounts[String(configuration.termYears)] ?? 0;
  const addOnsTotal = selectedAddOns.reduce((sum, addOn) => sum + addOn.price, 0);
  const total = (selectedProduct.priceValue + addOnsTotal) * configuration.quantity * configuration.termYears * (1 - discount);

  return (
    <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_290px]">
      <Panel className="rounded-[26px] p-5 md:p-6">
        <button onClick={onBack} className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-[#007ac9]">
          <ChevronLeft className="h-4 w-4" />
          Back to Products
        </button>

        <h2 className="mb-6 text-[2rem] font-bold tracking-tight text-[#1A2333]">{selectedProduct.name}</h2>

        <div className="mb-6">
          <p className="mb-3 text-sm font-semibold text-slate-700">Term Length</p>
          <div className="grid gap-3 md:grid-cols-3">
            {[1, 2, 3].map((year) => {
              const isSelected = configuration.termYears === year;
              const savings = selectedProduct.termDiscounts[String(year)] ?? 0;

              return (
                <button
                  key={year}
                  onClick={() => onConfigurationChange({ termYears: year })}
                  className={`rounded-[18px] border px-4 py-4 text-center transition ${
                    isSelected
                      ? 'border-[#ff5a4d] bg-[#fff8f7] shadow-[0_12px_28px_rgba(255,90,77,0.08)]'
                      : 'border-slate-200 hover:border-slate-300 hover:shadow-[0_10px_22px_rgba(15,23,42,0.04)]'
                  }`}
                >
                  <div className="text-[1.35rem] font-bold text-[#24355a]">{year} Year{year > 1 ? 's' : ''}</div>
                  <div className="mt-1 text-xs text-slate-400">
                    {savings > 0 ? `Save ${Math.round(savings * 100)}%` : 'Standard term'}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-6">
          <p className="mb-3 text-sm font-semibold text-slate-700">Number of Licenses/Seats</p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onConfigurationChange({ quantity: Math.max(1, configuration.quantity - 1) })}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition hover:bg-slate-200"
            >
              <Minus className="h-4 w-4" />
            </button>
            <div className="flex h-10 flex-1 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-lg font-bold text-[#1A2333]">
              {configuration.quantity}
            </div>
            <button
              onClick={() => onConfigurationChange({ quantity: configuration.quantity + 1 })}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition hover:bg-slate-200"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-3 block text-sm font-semibold text-slate-700">Billing Cycle</label>
          <SelectField
            value={configuration.billingCycle}
            options={selectedProduct.billingCycles}
            onChange={(value) => onConfigurationChange({ billingCycle: value })}
            className="[&_select]:h-12 [&_select]:rounded-xl [&_select]:border-slate-200 [&_select]:bg-white [&_select]:px-4 [&_select]:text-base"
          />
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-slate-700">Add-ons (Optional)</p>
          <div className="space-y-3">
            {selectedProduct.addOns.map((addOn) => (
              <label
                key={addOn.id}
                className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 px-4 py-3 transition hover:border-slate-300 hover:bg-slate-50"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={configuration.addOns.includes(addOn.id)}
                    onChange={() => onToggleAddOn(addOn.id)}
                    className="h-4 w-4 rounded border-slate-300 text-[#f97316] focus:ring-[#f97316]"
                  />
                  <span className="font-medium text-slate-700">{addOn.name}</span>
                </div>
                <span className="text-sm font-semibold text-slate-500">{formatMoney(addOn.price)}</span>
              </label>
            ))}
          </div>
        </div>
      </Panel>

      <Panel className="h-fit rounded-[26px] p-5">
        <h3 className="mb-5 text-[1.75rem] font-bold tracking-tight text-[#24355a]">Price Summary</h3>
        <div className="space-y-3 border-b border-slate-200 pb-5 text-sm text-slate-500">
          <div className="flex items-center justify-between">
            <span>Unit Price</span>
            <span className="font-semibold text-slate-700">{formatMoney(selectedProduct.priceValue)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Quantity</span>
            <span className="font-semibold text-slate-700">{configuration.quantity} licenses</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Term</span>
            <span className="font-semibold text-slate-700">{configuration.termYears} Year</span>
          </div>
        </div>
        <div className="py-5">
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Total</div>
          <div className="text-[2.4rem] font-bold tracking-tight text-[#d90416]">{formatMoney(total)}</div>
        </div>
        <button
          onClick={onAddToCart}
          className="w-full rounded-xl bg-[#f97316] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#ea6a0a]"
        >
          Add to Cart
        </button>
      </Panel>
    </div>
  );
};

export default ConfigureStep;
