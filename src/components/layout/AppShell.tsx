import { Bell, CircleHelp, Menu } from 'lucide-react';
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

      <main className="w-full px-0 py-0">
        <Outlet />
      </main>
    </div>
  );
}
