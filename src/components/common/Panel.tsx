import type { ReactNode } from 'react';

interface PanelProps {
  children: ReactNode;
  className?: string;
  padded?: boolean;
}

export const Panel = ({ children, className = '', padded = true }: PanelProps) => {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${padded ? 'p-4 md:p-5' : ''} ${className}`}>
      {children}
    </div>
  );
};
