import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  let headerTitle = 'Dashboard';
  if (location.pathname.includes('purchase')) headerTitle = 'New Purchase';
  else if (location.pathname.includes('renewals')) headerTitle = 'Renewals & Account Management';
  else if (location.pathname.includes('billing')) headerTitle = 'Invoices & Billing';

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans overflow-x-hidden">
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden transition-opacity backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`fixed inset-y-0 left-0 z-50 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out w-[280px] lg:w-[260px] flex-shrink-0 shadow-2xl lg:shadow-none`}>
        <Sidebar onClose={() => setIsMobileMenuOpen(false)} />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-[260px] flex flex-col relative min-h-screen w-full transition-all duration-300 ease-in-out">
        <Header title={headerTitle} onMenuClick={() => setIsMobileMenuOpen(true)} />
        
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto relative pb-24 lg:pb-8">
          <div className="max-w-7xl mx-auto w-full">
            <Outlet />
          </div>
        </main>
        
        {/* Footer */}
        <footer className="py-4 text-center text-xs md:text-sm text-slate-400 bg-[#1A2333] mt-auto">
          Copyright © 2025 WatchGuard Technologies, Inc. All Rights Reserved
        </footer>
        
        {/* Floating Help Button */}
        <button className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-12 h-12 bg-[#E51E25] text-white rounded-full shadow-lg flex items-center justify-center font-bold text-lg hover:bg-red-800 transition-colors z-[35]">
          ?
        </button>
      </div>
    </div>
  );
};

export default DashboardLayout;
