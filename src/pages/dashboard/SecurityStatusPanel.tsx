import { dashboardPageData } from '../../data/mockData';

function buildDonutGradient() {
  const total = dashboardPageData.deviceStatus.reduce((sum, item) => sum + item.value, 0);
  let progress = 0;

  return dashboardPageData.deviceStatus
    .map((item) => {
      const start = (progress / total) * 100;
      progress += item.value;
      const end = (progress / total) * 100;
      return `${item.color} ${start}% ${end}%`;
    })
    .join(', ');
}

export default function SecurityStatusPanel() {
  const totalDevices = dashboardPageData.deviceStatus.reduce((sum, item) => sum + item.value, 0);

  return (
    <article className="rounded-[18px] border border-[#dde5ec] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[13px] font-semibold text-[#33414c]">Firebox and Access Point Status</h2>
        <button type="button" className="text-[12px] font-medium text-[#6f9eb8] transition hover:text-[#567f96]">
          View All
        </button>
      </div>

      <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative mx-auto h-32 w-32 rounded-full" style={{ background: `conic-gradient(${buildDonutGradient()})` }}>
          <div className="absolute inset-[14px] flex flex-col items-center justify-center rounded-full bg-white shadow-[inset_0_0_0_1px_#e8ecef]">
            <span className="text-[1.1rem] leading-none font-semibold tracking-[-0.03em] text-[#111827] sm:text-[2rem]">
              {totalDevices}
            </span>
            <span className="mt-1 text-[12px] font-medium text-[#5d6972]">Devices</span>
          </div>
        </div>

        <div className="space-y-3 lg:min-w-[13rem]">
          {dashboardPageData.deviceStatus.map((item) => (
            <div key={item.label} className="flex items-center gap-3 text-[12px] text-[#43505a]">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="min-w-32 font-medium">{item.label}</span>
              <span className="font-semibold text-[#1f2937]">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
