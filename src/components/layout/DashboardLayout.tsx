import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = () => {
  const location = useLocation();
  
  let headerTitle = 'Dashboard';
  if (location.pathname.includes('purchase')) headerTitle = 'New Purchase';
  else if (location.pathname.includes('renewals')) headerTitle = 'Renewals & Account Management';
  else if (location.pathname.includes('billing')) headerTitle = 'Invoices & Billing';

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      <Sidebar />
      <div className="flex-1 ml-[260px] flex flex-col relative min-h-screen">
        <Header title={headerTitle} />
        <main className="flex-1 p-8 overflow-y-auto relative pb-24">
          <Outlet />
        </main>
        
        {/* Footer */}
        <footer className="py-4 text-center text-sm text-slate-400 bg-[#1A2333] mt-auto">
          Copyright © 2025 WatchGuard Technologies, Inc. All Rights Reserved
        </footer>
        
        {/* Floating Help Button */}
        <button className="fixed bottom-6 right-6 w-12 h-12 bg-[#CC0000] text-white rounded-full shadow-lg flex items-center justify-center font-bold text-lg hover:bg-red-800 transition-colors z-50">
          ?
        </button>
      </div>
    </div>
  );
};

export default DashboardLayout;
