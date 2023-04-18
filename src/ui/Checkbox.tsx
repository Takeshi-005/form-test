import { UseFormRegisterReturn } from 'react-hook-form';
import { Option } from "./Select"


type Props = {
  title?: string
  options?: Option[]
  registration: Partial<UseFormRegisterReturn>;
}


export const CheckBox = ({
  title,
  options,
  registration
}: Props) => {
  return (
      <>
        <p className='text-lg font-bold mb-1 block'>
          { title }
        </p>
        {options?.map(_ => {
          return <span
            key={`checkbox-${_}`}
            className='flex gap-3'

          >
            <input
              {...registration}
              type="checkbox"
              id={`${_.value}`}
              value={_.value}
            />
            <label htmlFor={`${_.value}`}>
              {_.label}
            </label>
          </span>
        })}
      </>
  )
}
