import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import { setSelectedCategory } from '../../store/purchaseSlice';
import { Lock, Shield, UserCheck, Cloud } from 'lucide-react';

const CategorySelector = () => {
  const { categories, selectedCategory } = useSelector((state: RootState) => state.purchase);
  const dispatch = useDispatch();

  const getIcon = (id: string, active: boolean) => {
    const className = `w-6 h-6 mb-3 ${active ? 'text-blue-500' : 'text-slate-500'}`;
    switch (id) {
      case 'network_security': return <Lock className={className} />;
      case 'endpoint': return <Shield className={className} />;
      case 'identity': return <UserCheck className={className} />;
      case 'cloud': return <Cloud className={className} />;
      default: return <Lock className={className} />;
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {categories.map((category) => {
        const isActive = category.id === selectedCategory;
        
        return (
          <button
            key={category.id}
            onClick={() => dispatch(setSelectedCategory(category.id))}
            className={`p-6 rounded-lg border-2 flex flex-col items-center justify-center transition-all bg-white
              ${isActive ? 'border-[#E51E25]' : 'border-gray-100 hover:border-gray-300'}`}
          >
            {getIcon(category.id, isActive)}
            <span className={`text-sm font-bold ${isActive ? 'text-[#3E1B23]' : 'text-slate-700'}`}>
              {category.name}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CategorySelector;
