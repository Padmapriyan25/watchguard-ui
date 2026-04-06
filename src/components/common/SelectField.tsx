import { ChevronDown } from 'lucide-react';

interface SelectFieldProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
  className?: string;
}

export const SelectField = ({ value, options, onChange, className = '' }: SelectFieldProps) => {
  return (
    <div className={`relative ${className}`}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="app-input appearance-none pr-10"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
    </div>
  );
};
