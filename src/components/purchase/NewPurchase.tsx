import React from 'react';
import PurchaseStepper from './PurchaseStepper';
import CategorySelector from './CategorySelector';
import ProductGrid from './ProductGrid';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import { setSelectedCustomer } from '../../store/purchaseSlice';
import { ChevronDown } from 'lucide-react';

const NewPurchase = () => {
  const { customers, selectedCustomer } = useSelector((state: RootState) => state.purchase);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col h-full max-w-7xl mx-auto">
      <PurchaseStepper />
      
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 flex-1 relative">
        <h2 className="text-2xl font-bold text-[#1A2333] mb-6">Browse Products</h2>
        
        <div className="mb-6">
          <label className="block text-sm font-semibold text-slate-800 mb-2">Select Customer</label>
          <div className="relative">
            <select 
              value={selectedCustomer}
              onChange={(e) => dispatch(setSelectedCustomer(e.target.value))}
              className="w-full appearance-none bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              {customers.map(customer => (
                <option key={customer} value={customer}>{customer}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
        
        <CategorySelector />
        <ProductGrid />
      </div>

    </div>
  );
};

export default NewPurchase;
