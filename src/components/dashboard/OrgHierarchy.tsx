import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

const OrgHierarchy = () => {
  const { hierarchy } = useSelector((state: RootState) => state.dashboard);

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mt-6">
      <h2 className="text-lg font-bold text-slate-800 mb-6">Organization Hierarchy</h2>
      
      <div className="pl-2">
        {/* Parent Node */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-[150px] sm:w-[200px] md:w-[300px] h-6 bg-[#E51E25] rounded-r-md"></div>
          <div>
            <div className="text-sm font-bold text-slate-800">{hierarchy.parent.name}</div>
            <div className="text-xs text-gray-500">{hierarchy.parent.percentage.toFixed(2)}%</div>
          </div>
        </div>

        {/* Children Nodes Container */}
        <div className="relative pl-6 border-l-2 border-gray-200 ml-4 py-2 flex flex-col gap-4">
          {hierarchy.children.map((child, idx) => (
            <div key={child.id} className="flex flex-col relative">
              {/* Connector line for child */}
              <div className="absolute top-3 -left-6 w-6 border-t-2 border-gray-200"></div>
              
              <div className="flex items-center gap-3">
                <div 
                  className={`h-6 rounded-r-md ${idx === 0 ? 'bg-[#22c55e]' : 'bg-[#e2e8f0]'}`} 
                  style={{ width: `${Math.max(20, (child.percentage / 100) * 300)}px` }}
                ></div>
                <div>
                  <div className="text-sm font-bold text-slate-800">{child.name}</div>
                  <div className="text-xs text-gray-500">{child.percentage.toFixed(2)}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 flex justify-between items-center text-sm text-gray-500">
        <span>Click bars to expand and explore the hierarchy</span>
        <button className="text-blue-600 font-medium hover:text-blue-800">Expand All</button>
      </div>
    </div>
  );
};

export default OrgHierarchy;
