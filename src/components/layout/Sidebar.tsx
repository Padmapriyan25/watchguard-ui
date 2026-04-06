import { NavLink } from 'react-router-dom';
import { Home, ShoppingCart, RefreshCw, FileText, Award, X } from 'lucide-react';
import watchguardLogo from '../../assets/watchguard-logo.png';
import { sidebarPartnerData } from '../../data/mockData';

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
  const activeClass = "flex items-center gap-3 px-4 py-3 bg-[#1A2333]/50 border-l-4 border-red-600 text-red-500 font-medium rounded-r-md";
  const inactiveClass = "flex items-center gap-3 px-4 py-3 border-l-4 border-transparent hover:text-white transition-colors cursor-pointer text-slate-400";

  return (
    <div className="w-full lg:w-[260px] bg-[#2A3447] h-full text-slate-300 flex flex-col overflow-y-auto">
      <div className="flex items-center justify-between px-5 h-[80px] shrink-0 border-b border-white/5">
        <div className="flex items-center">
          <img
            src={watchguardLogo}
            alt="WatchGuard"
            className="block h-10 w-auto max-w-[185px] object-contain opacity-95 [filter:brightness(0)_invert(0.92)]"
          />
        </div>
        {onClose && (
          <button onClick={onClose} className="lg:hidden p-2 -mr-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/10">
            <X className="w-6 h-6" />
          </button>
        )}
      </div>

      <nav className="flex-1 mt-6">
        <ul className="space-y-1">
          <li className="mb-1">
            <NavLink to="/" end onClick={onClose} className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              <Home className="w-5 h-5" />
              Dashboard
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink to="/purchase" onClick={onClose} className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              <ShoppingCart className="w-5 h-5" />
              New Purchase
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink to="/renewals" onClick={onClose} className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              <RefreshCw className="w-5 h-5" />
              Renewals
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink to="/billing" onClick={onClose} className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              <FileText className="w-5 h-5" />
              Invoices & Billing
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="p-4 mx-4 mb-6 bg-[#1F293A] rounded-lg mt-auto shrink-0 border border-slate-700/50 shadow-inner">
        <div className="flex items-center gap-2 mb-2">
          <Award className="w-5 h-5 text-yellow-500" />
          <span className="text-white font-semibold text-sm">{sidebarPartnerData.tierLabel}</span>
        </div>
        <div className="text-xs">
          <p className="text-slate-400 mb-1">{sidebarPartnerData.managerLabel}</p>
          <p className="text-white font-medium">{sidebarPartnerData.managerName}</p>
          <a href={sidebarPartnerData.supportHref} className="text-blue-400 hover:text-blue-300 mt-1 inline-block font-medium">{sidebarPartnerData.supportLabel}</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
