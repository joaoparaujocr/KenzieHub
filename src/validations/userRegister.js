import * as yup from "yup";

const schemaRegister = yup.object().shape({
  name: yup.string().required("Nome obrigatorio"),
  email: yup.string().required("Email obrigatorio").email("O email é invalido"),
  password:yup.string().required("Senha obrigatoria").min(8).matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "deve conter ao menos 1 número")
    .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),
  confirmPassword: yup.string().required('Confirme sua senha').oneOf([yup.ref('password'), null], "Senhas não corresponde!"),
  bio: yup.string().required("Bio obrigatoria"),
  contact: yup.string().required("Contato obrigatorio"),
  course_module: yup.string().required("Modulo obrigatorio"),
})

export default schemaRegister;