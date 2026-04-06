import { SelectField } from '../../components/common';

interface RenewalsCustomerFilterProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

const RenewalsCustomerFilter = ({ value, options, onChange }: RenewalsCustomerFilterProps) => {
  return <SelectField value={value} options={options} onChange={onChange} className="w-full sm:min-w-[180px] sm:w-auto" />;
};

export default RenewalsCustomerFilter;
