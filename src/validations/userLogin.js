import * as yup from "yup";

const schemaLogin = yup.object().shape({
  email: yup.string().required("Email vazio").email("Email inválido"),
  password: yup.string().required("Senha vazia")
})

export default schemaLogin;