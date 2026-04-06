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
        className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-2.5 pr-10 text-sm text-slate-700 outline-none transition focus:border-[#007ac9] focus:ring-2 focus:ring-[#007ac9]/15"
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
