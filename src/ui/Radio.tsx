import { UseFormRegisterReturn } from 'react-hook-form';
import { Option } from "./Select"

type Props = {
  options?: Option[]
  className?: string;
  placeholder?: string
  title?: string
  registration: Partial<UseFormRegisterReturn>;
}

export const Radio = ({
  title,
  registration,
  options
}: Props) => {
  return (
    <>
        <p className='text-lg font-bold mb-1 block'>
          { title }
        </p>
        {options?.map(_ => {
          return (
            <span
              key={`radio-${_.value}`}
              className='flex gap-3'
            >
            <input
              type="radio"
              {...registration}
              id={`${_.value}`}
              value={_.value}
            />
            <label htmlFor={`${_.value}`}>
              {_.label}
            </label>
          </span>
          )
        })}
      </>
  )
 }
