import InputStyle from "./style";

const Input = ({ placeholder, children, type = "text", isVisiblePassword, id, register }) => {
  return (
    <InputStyle>
      <input {...register} type={isVisiblePassword ? "text" : type} placeholder={placeholder} id={id}/>
      {children && children}
    </InputStyle>
  )
}

export default Input