import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const Card = ({ children, className = '', noPadding = false }: CardProps) => {
  return (
    <div className={`app-panel ${noPadding ? '' : 'p-6'} ${className}`}>
      {children}
    </div>
  );
};
