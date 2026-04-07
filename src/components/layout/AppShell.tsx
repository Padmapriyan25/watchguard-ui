import { Bell, ChevronLeft, CircleHelp, Menu } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../../assets/watchguard-logo-white.png';
import { dashboardPageData } from '../../data/mockData';

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  [
    'relative flex items-center px-4 py-4 text-sm font-medium transition-colors',
    isActive ? 'bg-white/6 text-white' : 'text-slate-300 hover:text-white',
  ].join(' ');

export default function AppShell() {
  return (
    <div className="min-h-screen bg-[#f4f5f7] text-[#202124]">
      <header className="border-b border-white/10 bg-[#2f2f30] text-white shadow-[0_1px_0_rgba(255,255,255,0.04)]">
        <div className="flex min-h-14 items-center justify-between px-2 sm:px-3 lg:px-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-300 transition hover:bg-white/8 lg:hidden"
              aria-label="Open navigation"
            >
              <Menu className="h-5 w-5" />
            </button>

            <img src={logo} alt="WatchGuard" className="h-7 w-auto shrink-0 object-contain" />

            <nav className="hidden items-center lg:flex">
              {dashboardPageData.navItems.map((item) => (
                <NavLink key={item.label} to={item.href} end={item.href === '/'} className={navLinkClassName}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-300 transition hover:bg-white/8 hover:text-white"
              aria-label="Notifications"
            >
              <Bell className="h-4.5 w-4.5" />
            </button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-300 transition hover:bg-white/8 hover:text-white"
              aria-label="Help"
            >
              <CircleHelp className="h-4.5 w-4.5" />
            </button>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5f8fd8] text-sm font-semibold text-white">
              JS
            </div>
          </div>
        </div>
      </header>

      <main className="flex">
        <aside className="hidden w-8 shrink-0 border-r border-[#dbe2e8] bg-white lg:flex lg:flex-col lg:justify-end">
          <button
            type="button"
            className="mx-auto mb-2 flex h-6 w-6 items-center justify-center rounded-full text-[#7ea0b6] transition hover:bg-[#eef5f9] hover:text-[#5b859c]"
            aria-label="Collapsed sidebar"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        </aside>

        <div className="min-w-0 flex-1 bg-[#f4f7fa]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
