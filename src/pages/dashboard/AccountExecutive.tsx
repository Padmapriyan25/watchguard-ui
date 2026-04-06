import { accountExecutiveData } from '../../data/mockData';

const AccountExecutive = () => {
  return (
    <div className="flex min-h-[262px] flex-col overflow-hidden rounded-[10px] bg-[#314266] p-5 text-white shadow-[0_18px_40px_-28px_rgba(31,41,55,0.65)] sm:col-span-2 xl:col-span-1">
      <div className="mb-4">
        <h2 className="text-[1.02rem] font-semibold tracking-tight">{accountExecutiveData.heading}</h2>
      </div>

      <div className="mb-5 flex-1">
        <h3 className="mb-1 text-[1.02rem] font-medium tracking-tight text-white">{accountExecutiveData.name}</h3>
        <p className="mb-5 text-[13px] leading-5 text-slate-200">{accountExecutiveData.role}</p>

        <div className="space-y-1.5 text-[13px] leading-6 text-slate-100">
          <p>
            <span className="font-medium text-slate-100">{accountExecutiveData.emailLabel}:</span>{' '}
            <a href={`mailto:${accountExecutiveData.email}`} className="break-all text-white hover:text-slate-100">
              {accountExecutiveData.email}
            </a>
          </p>
          <p>
            <span className="font-medium text-slate-100">{accountExecutiveData.phoneLabel}:</span>{' '}
            <a href={`tel:${accountExecutiveData.phone}`} className="text-white hover:text-slate-100">
              {accountExecutiveData.phone}
            </a>
          </p>
        </div>
      </div>

      <button className="mt-auto w-full rounded-[8px] bg-[#e10600] px-4 py-2.5 text-[15px] font-semibold text-white transition hover:bg-[#cf0500]">
        {accountExecutiveData.ctaLabel}
      </button>
    </div>
  );
};

export default AccountExecutive;
