import React from 'react';
import { Bell, Settings, User } from 'lucide-react';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="h-[80px] bg-white border-b border-gray-200 flex items-center justify-between px-8 z-40 relative">
      <div>
        <h1 className="text-2xl font-bold text-[#1A2333]">{title}</h1>
        <div className="text-sm text-slate-500 flex gap-2">
          <span>Partner Portal</span>
          <span>/</span>
          <span className="text-slate-500">{title}</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-gray-500 hover:text-gray-700 relative">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <Settings className="w-5 h-5" />
        </button>
        
        <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-800">Acme IT Solutions</p>
            <p className="text-xs text-slate-500">Gold Partner</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#1A2333] flex items-center justify-center text-white">
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
