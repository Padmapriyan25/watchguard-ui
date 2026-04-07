import { dashboardPageData } from '../../data/mockData';

export default function ActionCards() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
      {dashboardPageData.actionCards.map((card) => {
        const Icon = card.icon;

        return (
          <article
            key={card.title}
            className={`rounded-[18px] border border-[#dde5ec] bg-gradient-to-br ${card.tint} px-5 py-6 shadow-[0_10px_24px_rgba(15,23,42,0.04)]`}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#6e7881] shadow-[0_6px_16px_rgba(15,23,42,0.08)]">
              <Icon className="h-4.5 w-4.5" />
            </div>
            <h3 className="mt-5 text-[13px] leading-5 font-semibold text-[#22292f]">
              {card.title}
            </h3>
            <p className="mt-2 max-w-[13rem] text-[12px] leading-5 text-[#5f6d77]">{card.description}</p>
            <button type="button" className="mt-5 text-[12px] font-semibold text-[#6997b1] transition hover:text-[#4f809d]">
              {card.cta}
            </button>
          </article>
        );
      })}
    </div>
  );
}
