import InputStyle from "./style";

const Input = ({ value , placeholder, children, type = "text", isVisiblePassword, id, register, disabled = false }) => {
  return (
    <InputStyle>
      <input value={value} disabled={disabled} {...register} type={isVisiblePassword ? "text" : type} placeholder={placeholder} id={id}/>
      {children && children}
    </InputStyle>
  )
}

export default Input