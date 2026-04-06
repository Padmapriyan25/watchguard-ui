import type { ReactNode } from 'react';

interface IconActionCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  active?: boolean;
  align?: 'left' | 'center';
  onClick?: () => void;
}

export const IconActionCard = ({
  title,
  description,
  icon,
  active = false,
  align = 'left',
  onClick,
}: IconActionCardProps) => {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <button
      onClick={onClick}
      className={`flex flex-col rounded-[24px] border p-5 transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(15,23,42,0.45)] ${alignment} ${
        active
          ? 'border-[#f26749]/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,244,240,0.92))] shadow-[0_18px_40px_-24px_rgba(242,103,73,0.45)]'
          : 'border-white/70 bg-white/82 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.32)]'
      }`}
    >
      <div className="mb-4">{icon}</div>
      <div className="text-lg leading-snug font-bold text-[#24355a]">{title}</div>
      <div className="mt-2 text-sm leading-6 text-slate-500">{description}</div>
    </button>
  );
};
