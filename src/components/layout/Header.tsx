import { Bell, Search, Menu } from 'lucide-react';

interface HeaderProps {
  title: string;
  onMenuClick?: () => void;
}

const Header = ({ title, onMenuClick }: HeaderProps) => {
  return (
    <header className="h-[80px] bg-white border-b border-gray-200 shadow-sm flex items-center justify-between px-4 md:px-8 shrink-0">
      <div className="flex items-center gap-4 border-r border-gray-100 pr-4 md:border-r-0 md:pr-0">
        {onMenuClick && (
          <button onClick={onMenuClick} className="lg:hidden p-2 -ml-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        )}
        <h1 className="text-xl md:text-2xl font-bold text-[#1A2333] tracking-tight">{title}</h1>
      </div>
      
      <div className="flex items-center gap-2 md:gap-6 flex-1 justify-end">
        <div className="relative hidden lg:block max-w-md w-full ml-8">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search accounts or subscriptions..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium placeholder:font-normal placeholder:text-gray-400"
          />
        </div>
        
        <div className="flex items-center gap-2 md:gap-4 ml-auto">
          <button className="relative p-2 text-gray-500 hover:text-slate-800 hover:bg-slate-50 rounded-full transition-colors">
            <Bell className="w-5 h-5 md:w-6 md:h-6" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          
          <div className="flex items-center gap-3 border-l border-gray-200 pl-4 md:pl-6 ml-2 md:ml-0">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-bold text-slate-800">John Doe</p>
              <p className="text-xs text-gray-500 font-medium">MSP Admin</p>
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1A2333] flex items-center justify-center text-white font-bold shadow-sm">
              JD
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
