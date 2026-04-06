import { Bell, Search, Menu, ChevronDown } from 'lucide-react';

interface HeaderProps {
  title: string;
  onMenuClick?: () => void;
  userName?: string;
  userRole?: string;
  userInitials?: string;
}

const Header = ({ title, onMenuClick, userName = 'John Doe', userRole = 'MSP Admin', userInitials = 'JD' }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-30 px-4 pt-4 md:px-6 md:pt-5 lg:px-8">
      <div className="app-surface flex min-h-[78px] items-center justify-between gap-4 px-4 py-3 md:px-5">
        <div className="flex items-center gap-4 pr-4 md:pr-0">
          {onMenuClick && (
            <button onClick={onMenuClick} className="rounded-2xl border border-white/80 bg-white/80 p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
          )}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">WatchGuard Partner Portal</p>
            <h1 className="text-xl font-bold tracking-tight text-[#1f2c44] md:text-[1.65rem]">{title}</h1>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2 md:gap-4 lg:gap-6">
          <div className="relative hidden w-full max-w-md lg:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search customers, invoices, renewals..."
              className="app-input py-2.5 pl-10"
            />
          </div>

          <button className="relative rounded-2xl border border-white/70 bg-white/80 p-2.5 text-gray-500 transition-colors hover:bg-slate-50 hover:text-slate-800">
            <Bell className="h-5 w-5 md:h-6 md:w-6" />
            <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500"></span>
          </button>

          <div className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/85 px-2 py-2 shadow-sm">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-bold text-slate-800">{userName}</p>
              <p className="text-xs font-medium text-gray-500">{userRole}</p>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-[#26314d] to-[#3d4c71] text-sm font-bold text-white shadow-sm md:h-10 md:w-10">
              {userInitials}
            </div>
            <ChevronDown className="hidden h-4 w-4 text-slate-400 sm:block" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
