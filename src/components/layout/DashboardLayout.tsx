import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { headerUserData } from '../../data/mockData';

const DashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  let headerTitle = 'Dashboard';
  if (location.pathname.includes('purchase')) headerTitle = 'New Purchase';
  else if (location.pathname.includes('subscriptions')) headerTitle = 'My Subscriptions';
  else if (location.pathname.includes('renewals')) headerTitle = 'Renewals & Account Management';
  else if (location.pathname.includes('billing')) headerTitle = 'Invoices & Billing';

  return (
    <div className="relative flex min-h-screen overflow-x-hidden font-sans">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-6rem] h-72 w-72 rounded-full bg-[#ffb6a3]/16 blur-3xl" />
        <div className="absolute right-[-7%] top-40 h-80 w-80 rounded-full bg-[#a7c8ff]/14 blur-3xl" />
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <aside className={`fixed inset-y-0 left-0 z-50 w-[280px] flex-shrink-0 transform shadow-2xl transition-transform duration-300 ease-in-out lg:w-[260px] lg:translate-x-0 lg:shadow-none ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar onClose={() => setIsMobileMenuOpen(false)} />
      </aside>

      <div className="relative flex min-h-screen min-w-0 flex-1 flex-col transition-all duration-300 ease-in-out lg:ml-[260px]">
        <Header
          title={headerTitle}
          onMenuClick={() => setIsMobileMenuOpen(true)}
          userName={headerUserData.name}
          userRole={headerUserData.role}
          userInitials={headerUserData.initials}
        />

        <main className="relative flex-1 overflow-y-auto px-4 pb-10 pt-4 md:px-6 md:pt-5 lg:px-8 lg:pb-6">
          <div className="mx-auto flex min-w-0 w-full max-w-[1320px] flex-col gap-5">
            <Outlet />
          </div>
        </main>

        <footer className="mt-auto border-t border-[#24314d] bg-[#25314c] px-4 py-4 text-center text-[11px] text-slate-300 md:px-6 lg:px-8">
          Copyright (c) 2025 WatchGuard Technologies, Inc. All Rights Reserved
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
