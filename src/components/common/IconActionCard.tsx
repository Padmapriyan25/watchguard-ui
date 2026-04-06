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
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <button
      onClick={onClick}
      className={`flex flex-col rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md ${alignment} ${
        active ? 'border-[#ff5a4d] bg-[#fff8f7]' : 'border-slate-200'
      }`}
    >
      <div className="mb-4">{icon}</div>
      <div className="text-lg font-bold text-[#24355a] leading-snug">{title}</div>
      <div className="mt-2 text-sm leading-6 text-slate-500">{description}</div>
    </button>
  );
};
