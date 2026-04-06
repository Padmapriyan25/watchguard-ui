import { SelectField } from '../../components/common';

interface RenewalsCustomerFilterProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

const RenewalsCustomerFilter = ({ value, options, onChange }: RenewalsCustomerFilterProps) => {
  return <SelectField value={value} options={options} onChange={onChange} className="min-w-[180px]" />;
};

export default RenewalsCustomerFilter;
