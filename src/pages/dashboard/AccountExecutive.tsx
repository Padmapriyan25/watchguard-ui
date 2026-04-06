import { accountExecutiveData } from '../../data/mockData';

const AccountExecutive = () => {
  return (
    <div className="bg-[#2A3447] text-white p-6 rounded-lg shadow-sm h-full flex flex-col">
      <h2 className="text-lg font-bold mb-4">{accountExecutiveData.heading}</h2>

      <div className="mb-6 flex-1">
        <h3 className="font-bold text-base mb-1">{accountExecutiveData.name}</h3>
        <p className="text-sm text-slate-300 mb-4">{accountExecutiveData.role}</p>

        <div className="space-y-2 text-sm text-slate-300">
          <p>{accountExecutiveData.emailLabel}: <a href={`mailto:${accountExecutiveData.email}`} className="hover:text-white">{accountExecutiveData.email}</a></p>
          <p>{accountExecutiveData.phoneLabel}: <a href={`tel:${accountExecutiveData.phone}`} className="hover:text-white">{accountExecutiveData.phone}</a></p>
        </div>
      </div>

      <button className="w-full bg-[#E51E25] hover:bg-[#C91A20] text-white font-bold py-3 px-4 rounded transition-colors text-sm">
        {accountExecutiveData.ctaLabel}
      </button>
    </div>
  );
};

export default AccountExecutive;
