import { renewalsHeroData } from '../../data/mockData';

const RenewalsHero = () => {
  return (
    <div className="rounded-2xl bg-[#2e4268] px-6 py-6 text-white shadow-sm md:px-8">
      <h2 className="text-2xl font-bold tracking-tight">{renewalsHeroData.title}</h2>
      <p className="mt-2 text-sm text-slate-200 md:text-base">
        {renewalsHeroData.description}
      </p>
    </div>
  );
};

export default RenewalsHero;
