import { dashboardPageData } from '../../data/mockData';

export default function HeroHeader() {
  const { user } = dashboardPageData;

  return (
    <div className="flex items-start gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6f9dde] text-lg font-semibold text-white">
        {user.initials}
      </div>
      <div>
        <h1 className="text-[2rem] leading-none font-semibold tracking-[-0.03em] text-[#111827]">
          {user.name}
        </h1>
        <p className="mt-2 text-[13px] font-medium text-[#55626c]">{`${user.organization} - ${user.accounts} - ${user.delegatedAccounts}`}</p>
      </div>
    </div>
  );
}
