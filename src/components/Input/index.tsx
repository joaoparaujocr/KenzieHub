import { InputHTMLAttributes, ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import InputStyle from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  children?: ReactNode;
  isVisiblePassword?: boolean;
  register?: UseFormRegisterReturn;
}

const Input = ({ children, isVisiblePassword, register, ...rest }:InputProps) => {
  return (
    <InputStyle>
      <input {...rest} {...register} type={isVisiblePassword ? "text" : rest.type}/>
      {children && children}
    </InputStyle>
  )
}

export default Input