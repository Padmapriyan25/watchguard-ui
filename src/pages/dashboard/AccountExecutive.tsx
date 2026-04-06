import { accountExecutiveData } from '../../data/mockData';

const AccountExecutive = () => {
  return (
    <div className="overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#293551_0%,#33456c_55%,#405884_100%)] p-6 text-white shadow-[0_28px_60px_-34px_rgba(31,41,55,0.7)]">
      <div className="mb-6">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">Support contact</div>
        <h2 className="mt-2 text-lg font-bold">{accountExecutiveData.heading}</h2>
      </div>

      <div className="mb-6 flex-1">
        <h3 className="mb-1 text-base font-bold">{accountExecutiveData.name}</h3>
        <p className="mb-4 text-sm text-slate-300">{accountExecutiveData.role}</p>

        <div className="space-y-2 text-sm text-slate-300">
          <p>{accountExecutiveData.emailLabel}: <a href={`mailto:${accountExecutiveData.email}`} className="text-white hover:text-slate-200">{accountExecutiveData.email}</a></p>
          <p>{accountExecutiveData.phoneLabel}: <a href={`tel:${accountExecutiveData.phone}`} className="text-white hover:text-slate-200">{accountExecutiveData.phone}</a></p>
        </div>
      </div>

      <button className="app-button-primary w-full">
        {accountExecutiveData.ctaLabel}
      </button>
    </div>
  );
};

export default AccountExecutive;
