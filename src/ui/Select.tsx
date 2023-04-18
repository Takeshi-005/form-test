import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';

export type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type Props = {
  options?: Option[];
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
}


export const Select = ({
  registration,
  options,
}: Props) => {
  return (
    <select
      className=''
      {...registration}
    >
      {options?.map((opt, i) => {
        return <option
          key={`option-${i}`}
          value={opt.value}
        >
          {opt.label}
        </option>
      })}

    </select>
  )
}
