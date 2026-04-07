import { dashboardPageData } from '../../data/mockData';

export default function HeroHeader() {
  const { user } = dashboardPageData;

  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6f9dde] text-base font-semibold text-white sm:h-14 sm:w-14 sm:text-lg">
        {user.initials}
      </div>
      <div className="min-w-0">
        <h1 className="text-[1.75rem] leading-none font-semibold tracking-[-0.03em] text-[#111827] sm:text-[2rem]">
          {user.name}
        </h1>
        <p className="mt-2 text-[12px] leading-5 font-medium text-[#55626c] sm:text-[13px]">
          {`${user.organization} - ${user.accounts} - ${user.delegatedAccounts}`}
        </p>
      </div>
    </div>
  );
}
