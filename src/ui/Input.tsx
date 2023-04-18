import clsx from "clsx"
import { UseFormRegisterReturn } from 'react-hook-form';


type Props = {
  className?: string;
  placeholder?: string
  type?: string //"text" | "email"
  registration: Partial<UseFormRegisterReturn>;
}


export const Input = ({
  registration,
  placeholder,
  className,
  type
}: Props) => {
  return (
    <input
      type={type}
      className={clsx(className, "form-input")}
      {...registration}
      placeholder={placeholder}
      autoComplete="off"
    />
  )
}
