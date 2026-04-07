import { Download } from 'lucide-react';
import { dashboardPageData } from '../../data/mockData';

export default function ProductPanel() {
  return (
    <aside className="rounded-[18px] border border-[#dde5ec] bg-white px-4 py-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[13px] font-semibold text-[#25313a]">{dashboardPageData.sidePanelTitle}</h2>
        <button type="button" className="text-[#61717d] transition hover:text-[#202124]" aria-label="Download products">
          <Download className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-6 space-y-6">
        {dashboardPageData.products.map((product) => {
          const Icon = product.icon;

          return (
            <div key={product.name} className="flex items-center gap-3 rounded-xl px-1 py-1">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#e3e8ed] bg-[#fbfcfd] text-[#55656f]">
                <Icon className="h-5 w-5" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] leading-5 font-semibold text-[#27333b]">{product.name}</p>
                <p className="text-[11px] font-medium text-[#7f8a93]">{product.accounts}</p>
              </div>

              <span
                className={[
                  'hidden rounded-full px-2.5 py-1 text-[10px] font-semibold leading-none sm:inline-flex',
                  product.owned ? 'bg-[#edf7ef] text-[#5d8665]' : 'bg-[#f1f3f5] text-[#757b80]',
                ].join(' ')}
              >
                {product.owned ? dashboardPageData.badges.owned : dashboardPageData.badges.notOwned}
              </span>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
