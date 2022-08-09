import * as yup from "yup";

const schemaNewTech = yup.object().shape({
  title: yup.string().required("Campo obrigatorio"),
  status: yup.string().required("Campo obrigatorio")
})

export default schemaNewTech;