import { ReactNode } from "react";
import FormStyle from "./style";

interface IFormContainerProps {
  children: ReactNode;
}

const FormContainer = ({ children }: IFormContainerProps)  => (
  <FormStyle>
    {children}
  </FormStyle>
)

export default FormContainer;