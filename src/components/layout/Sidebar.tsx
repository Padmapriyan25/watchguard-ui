import { NavLink } from 'react-router-dom';
import { Home, ShoppingCart, RefreshCw, FileText, Award, X } from 'lucide-react';
import watchguardLogo from '../../assets/watchguard-logo.png';
import { sidebarPartnerData } from '../../data/mockData';

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
  const activeClass = 'group flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-[#22314a] shadow-[0_16px_30px_-24px_rgba(15,23,42,0.7)]';
  const inactiveClass = 'group flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-300 transition-all hover:bg-white/8 hover:text-white';

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto bg-[linear-gradient(180deg,#27324a_0%,#20283d_100%)] px-4 py-4 text-slate-300 lg:w-[260px]">
      <div className="flex min-h-[78px] items-center justify-between rounded-[24px] border border-white/10 bg-white/6 px-4">
        <div className="flex items-center gap-3">
          <img
            src={watchguardLogo}
            alt="WatchGuard"
            className="block h-9 w-auto max-w-[148px] object-contain opacity-95 [filter:brightness(0)_invert(0.92)]"
          />
        </div>
        {onClose && (
          <button onClick={onClose} className="rounded-2xl p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white lg:hidden">
            <X className="h-6 w-6" />
          </button>
        )}
      </div>

      <nav className="mt-6 flex-1">
        <ul className="space-y-1">
          <li className="mb-1">
            <NavLink to="/" end onClick={onClose} className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
              <Home className="h-5 w-5 text-[#f15a3d] group-hover:text-white" />
              Dashboard
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink to="/purchase" onClick={onClose} className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
              <ShoppingCart className="h-5 w-5 text-[#7eb1ff] group-hover:text-white" />
              New Purchase
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink to="/renewals" onClick={onClose} className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
              <RefreshCw className="h-5 w-5 text-[#84d0b2] group-hover:text-white" />
              Renewals
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink to="/billing" onClick={onClose} className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
              <FileText className="h-5 w-5 text-[#f6d26b] group-hover:text-white" />
              Invoices & Billing
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="mt-auto shrink-0 rounded-[24px] border border-white/10 bg-white/8 p-4 shadow-inner">
        <div className="mb-2 flex items-center gap-2">
          <Award className="h-5 w-5 text-yellow-400" />
          <span className="text-sm font-semibold text-white">{sidebarPartnerData.tierLabel}</span>
        </div>
        <div className="text-xs">
          <p className="mb-1 text-slate-400">{sidebarPartnerData.managerLabel}</p>
          <p className="font-medium text-white">{sidebarPartnerData.managerName}</p>
          <a href={sidebarPartnerData.supportHref} className="mt-2 inline-block font-medium text-[#9ec0ff] hover:text-white">{sidebarPartnerData.supportLabel}</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
