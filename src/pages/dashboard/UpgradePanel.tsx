import { dashboardPageData } from '../../data/mockData';

export default function UpgradePanel() {
  return (
    <article className="rounded-[18px] border border-[#dde5ec] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[13px] font-semibold text-[#33414c]">Firebox and Access Point Firmware Upgrades</h2>
        <button type="button" className="text-[12px] font-medium text-[#6f9eb8] transition hover:text-[#567f96]">
          View All
        </button>
      </div>

      <div className="mt-7">
        <p className="text-[1.1rem] leading-none font-semibold tracking-[-0.03em] text-[#111827] sm:text-[2rem]">
          {dashboardPageData.firmware.headline}
        </p>
        <p className="mt-1 text-[12px] font-medium text-[#5f6c75]">{dashboardPageData.firmware.subtitle}</p>
      </div>

      <div className="mt-8 space-y-6">
        {dashboardPageData.firmware.rows.map((row) => {
          const width = `${(row.completed / row.total) * 100}%`;

          return (
            <div key={row.label}>
              <div className="mb-2 flex items-center justify-between text-[12px] text-[#46545e]">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: row.color }} />
                  <span className="font-medium">{row.label}</span>
                </div>
                <span className="font-semibold text-[#1f2937]">
                  {row.completed} of {row.total}
                </span>
              </div>
              <div className="h-2.5 rounded-full bg-[#dcdcdc]">
                <div className="h-full rounded-full" style={{ width, backgroundColor: row.color }} />
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
