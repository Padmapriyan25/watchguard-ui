import { dashboardPageData } from '../../data/mockData';

function buildDonutGradient() {
  const total = dashboardPageData.deviceStatus.reduce(
    (sum, item) => sum + (item.arc ?? item.value),
    0
  );
  let progress = 0;

  return dashboardPageData.deviceStatus
    .map((item) => {
      const start = (progress / total) * 100;
      progress += item.arc ?? item.value;
      const end = (progress / total) * 100;
      return `${item.color} ${start}% ${end}%`;
    })
    .join(', ');
}

export default function SecurityStatusPanel() {
  const totalDevices = dashboardPageData.deviceStatusTotal;

  return (
    <article className="rounded-[14px] border border-[#dde5ec] bg-white px-5 pt-4 pb-5 shadow-[0_4px_16px_rgba(15,23,42,0.06)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[12px] font-semibold text-[#3a434a]">
          Firebox and Access Point Status
        </h2>
        <button
          type="button"
          className="text-[12px] font-medium text-[#7aa7bf] hover:text-[#567f96] transition-colors"
        >
          View All
        </button>
      </div>

      {/* Body: donut left, legend right */}
      <div className="flex items-center justify-center gap-15 mt-12">
        {/* Donut */}
        <div className="relative shrink-0 h-[120px] w-[120px]">
          <div
            className="h-full w-full rounded-full"
            style={{ background: `conic-gradient(${buildDonutGradient()})` }}
          />
          <div className="absolute inset-[26px] flex flex-col items-center justify-center rounded-full bg-white">
            <span className="text-[20px] font-bold leading-none text-[#1f2937]">
              {totalDevices}
            </span>
            <span className="mt-[3px] text-[10px] font-normal text-[#8a9ba8]">
              Devices
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col justify-center gap-[11px]">
          {dashboardPageData.deviceStatus.map((item) => (
            <div key={item.label} className="flex items-center gap-[7px]">
              <span
                className="inline-block h-[7px] w-[7px] shrink-0 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              {/* Label and value separated by a deliberate space gap */}
              <span className="text-[11.5px] text-[#555f68] whitespace-nowrap">
                {item.label}
              </span>
              <span className="text-[11.5px] font-semibold text-[#2a3440]">
                &nbsp;{item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}