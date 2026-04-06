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
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 shadow-[0_10px_28px_-24px_rgba(15,23,42,0.32)] backdrop-blur">
      <div className="mx-auto flex min-h-[70px] max-w-[1320px] items-center justify-between gap-3 px-4 md:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3 pr-2 md:pr-0">
          {onMenuClick && (
            <button onClick={onMenuClick} className="rounded-xl border border-slate-200 bg-white p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
          )}
          <div className="min-w-0">
            <h1 className="truncate text-lg font-bold tracking-tight text-[#1f2c44] sm:text-xl md:text-[1.35rem] xl:text-[1.55rem]">
              {title}
            </h1>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 md:gap-3 lg:gap-4">
          <button className="rounded-full p-2 text-gray-500 transition-colors hover:bg-slate-100 hover:text-slate-800 xl:hidden">
            <Search className="h-5 w-5" />
          </button>

          <div className="relative hidden w-full max-w-sm xl:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search accounts or subscriptions..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-[#315edf]/35 focus:ring-2 focus:ring-[#315edf]/10"
            />
          </div>

          <button className="relative rounded-full p-2 text-gray-500 transition-colors hover:bg-slate-100 hover:text-slate-800">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500"></span>
          </button>

          <div className="flex shrink-0 items-center gap-2 border-l border-slate-200 pl-2 sm:gap-3 sm:pl-3">
            <div className="hidden text-right lg:block xl:hidden">
              <p className="max-w-[132px] truncate text-sm font-bold text-slate-800">{userName}</p>
            </div>
            <div className="hidden text-right xl:block">
              <p className="text-sm font-bold text-slate-800">{userName}</p>
              <p className="text-xs font-medium text-gray-500">{userRole}</p>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25314c] text-sm font-bold text-white">
              {userInitials}
            </div>
            <ChevronDown className="hidden h-4 w-4 text-slate-400 xl:block" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
