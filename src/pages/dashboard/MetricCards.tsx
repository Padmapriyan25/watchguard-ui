import { dashboardPageData } from '../../data/mockData';

export default function MetricCards() {
  return (
    <div className="grid gap-3 min-[520px]:grid-cols-2 xl:grid-cols-5">
      {dashboardPageData.metrics.map((metric) => {
        const Icon = metric.icon;

        return (
          <article
            key={metric.title}
            className="rounded-[18px] border border-[#dde5ec] bg-white px-4 py-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[1.1rem] leading-none font-semibold tracking-[-0.03em] text-[#111827] sm:text-[1.9rem]">
                  {metric.value}
                </p>
                <h2 className="mt-3 text-[13px] leading-5 font-semibold text-[#33424d]">{metric.title}</h2>
                <p className="mt-1 text-[11px] font-medium text-[#75818b]">{metric.subtitle}</p>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e9f7fb] text-[#5a8fa9]">
                <Icon className="h-4.5 w-4.5" />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
