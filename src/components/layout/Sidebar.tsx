import React from 'react';
import { Shield, Home, ShoppingCart, RefreshCw, FileText, BarChart2, Ticket, Settings, Award } from 'lucide-react';

interface SidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Sidebar = ({ activePage, setActivePage }: SidebarProps) => {
  const activeClass = "flex items-center gap-3 px-4 py-3 bg-[#1A2333]/50 border-l-4 border-red-600 text-red-500 font-medium rounded-r-md";
  const inactiveClass = "flex items-center gap-3 px-4 py-3 border-l-4 border-transparent hover:text-white transition-colors cursor-pointer text-slate-400";

  return (
    <div className="w-[260px] bg-[#2A3447] min-h-screen text-slate-300 flex flex-col fixed left-0 top-0 bottom-0 z-50">
      <div className="flex items-center px-6 h-[80px]">
        {/* Mock WatchGuard Logo */}
        <div className="flex items-center gap-2 text-white cursor-pointer" onClick={() => setActivePage('dashboard')}>
          <Shield className="w-8 h-8" />
          <span className="font-bold text-xl tracking-tight">WatchGuard</span>
        </div>
      </div>

      <nav className="flex-1 mt-4">
        <ul>
          <li className="mb-2">
            <a onClick={() => setActivePage('dashboard')} className={activePage === 'dashboard' ? activeClass : inactiveClass}>
              <Home className="w-5 h-5" />
              Dashboard
            </a>
          </li>
          <li className="mb-2">
            <a onClick={() => setActivePage('purchase')} className={activePage === 'purchase' ? activeClass : inactiveClass}>
              <ShoppingCart className="w-5 h-5" />
              New Purchase
            </a>
          </li>
          <li className="mb-2">
            <a onClick={() => setActivePage('renewals')} className={activePage === 'renewals' ? activeClass : inactiveClass}>
              <RefreshCw className="w-5 h-5" />
              Renewals
            </a>
          </li>
          <li className="mb-2">
            <a onClick={() => setActivePage('billing')} className={activePage === 'billing' ? activeClass : inactiveClass}>
              <FileText className="w-5 h-5" />
              Invoices & Billing
            </a>
          </li>
          {/* <li className="mb-2">
            <a className={inactiveClass}>
              <BarChart2 className="w-5 h-5" />
              Usage Reports
            </a>
          </li>
          <li className="mb-2">
            <a className={inactiveClass}>
              <Ticket className="w-5 h-5" />
              Support Tickets
            </a>
          </li>
          <li className="mb-2">
            <a className={inactiveClass}>
              <Settings className="w-5 h-5" />
              Account Settings
            </a>
          </li> */}
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
