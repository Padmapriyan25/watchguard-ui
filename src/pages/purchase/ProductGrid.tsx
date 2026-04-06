import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { Flame, Shield, Globe } from 'lucide-react';

const ProductGrid = () => {
  const { products, selectedCategory } = useSelector((state: RootState) => state.purchase);
  
  // Filter by category in a real app, here we just show the mock items
  const filteredProducts = products.filter(p => p.categoryId === selectedCategory);

  const getProductIcon = (id: string) => {
    switch (id) {
      case 'p1': return <Flame className="w-8 h-8 text-orange-500 mb-4" />;
      case 'p2': return <Shield className="w-8 h-8 text-yellow-500 mb-4" />;
      case 'p3': return <Globe className="w-8 h-8 text-cyan-400 mb-4" />;
      default: return <Shield className="w-8 h-8 text-gray-500 mb-4" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map(product => (
        <div key={product.id} className="bg-white rounded-lg border border-gray-100 p-6 flex flex-col shadow-sm">
          {getProductIcon(product.id)}
          
          <h3 className="text-xl font-bold text-slate-800 mb-2">{product.name}</h3>
          <p className="text-sm text-slate-500 mb-8 flex-1">{product.description}</p>
          
          <div className="mb-4">
            <span className="text-sm text-slate-500">{product.priceTag} </span>
            <span className="text-xl font-bold text-slate-800">${product.priceValue}</span>
            <span className="text-sm text-slate-500">{product.priceUnit}</span>
          </div>
          
          <button className="w-full bg-[#007AC9] hover:bg-[#0060A0] text-white font-medium py-2.5 px-4 rounded transition-colors flex justify-center items-center">
            Configure <span className="ml-2">→</span>
          </button>
        </div>
      ))}
      
      {filteredProducts.length === 0 && (
        <div className="col-span-full py-12 text-center text-slate-500">
          No products available in this category.
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
