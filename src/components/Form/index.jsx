import FormStyle from "./style";

const FormContainer = ({ children, onSubmit })  => (
  <FormStyle>
    {children}
  </FormStyle>
)

export default FormContainer;