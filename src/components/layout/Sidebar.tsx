import React from 'react';
import { NavLink } from 'react-router-dom';
import { Shield, Home, ShoppingCart, RefreshCw, FileText, Award } from 'lucide-react';

const Sidebar = () => {
  const activeClass = "flex items-center gap-3 px-4 py-3 bg-[#1A2333]/50 border-l-4 border-red-600 text-red-500 font-medium rounded-r-md";
  const inactiveClass = "flex items-center gap-3 px-4 py-3 border-l-4 border-transparent hover:text-white transition-colors cursor-pointer text-slate-400";

  return (
    <div className="w-[260px] bg-[#2A3447] min-h-screen text-slate-300 flex flex-col fixed left-0 top-0 bottom-0 z-50">
      <div className="flex items-center px-6 h-[80px]">
        <div className="flex items-center gap-2 text-white cursor-pointer">
          <Shield className="w-8 h-8" />
          <span className="font-bold text-xl tracking-tight">WatchGuard</span>
        </div>
      </div>

      <nav className="flex-1 mt-4">
        <ul>
          <li className="mb-2">
            <NavLink to="/" end className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              <Home className="w-5 h-5" />
              Dashboard
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/purchase" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              <ShoppingCart className="w-5 h-5" />
              New Purchase
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/renewals" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              <RefreshCw className="w-5 h-5" />
              Renewals
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/billing" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              <FileText className="w-5 h-5" />
              Invoices & Billing
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="p-4 mx-4 mb-6 bg-[#1F293A] rounded-lg mt-auto">
        <div className="flex items-center gap-2 mb-2">
          <Award className="w-5 h-5 text-yellow-500" />
          <span className="text-white font-semibold text-sm">Gold Partner</span>
        </div>
        <div className="text-xs">
          <p className="text-slate-400 mb-1">Account Manager</p>
          <p className="text-white font-medium">Sarah Mitchell</p>
          <a href="#" className="text-blue-400 hover:text-blue-300 mt-1 inline-block">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
