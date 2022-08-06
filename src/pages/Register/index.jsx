import ContainerMain from "./style";
import { Link, useNavigate } from "react-router-dom";
import FormContainer from "../../components/Form";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaRegister from "../../validations/userRegister";
import api from "../../service/api";
import { ToastContainer, toast } from "react-toastify";
import ModalLoading from "../../components/ModalLoading";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";

const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("@tokenkenziehub") && localStorage.getItem("@useridkenziehub")) {
      navigate("/dashboard", { replace: true })
    }
  })

  const [modalVisible, setModalVisible] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaRegister)
  });

  const submitForm = ({ email, password, name, bio, contact, course_module }) => {  
    setModalVisible(true);
    const dataRegister = { email, password, name, bio, contact, course_module };

    api.post("/users", dataRegister)
      .then(res => {
        navigate("/", { replace: true })
      })
      .catch(err => {
        setModalVisible(false);
        toast.error("Email já cadastrado", {
          position: "bottom-center",
          autoClose: 2200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })

  };

  return (
    <>
      {modalVisible && <ModalLoading />}
      <ContainerMain>
        <ToastContainer />
        <header>
          <h1>kenzie Hub</h1>
          <Link to="/">Voltar</Link>
        </header>

        <FormContainer>
          <h3>Crie sua conta</h3>
          <p>Rapido e grátis, vamos nessa</p>
          <form onSubmit={handleSubmit(submitForm)}>
            <label htmlFor="name">Nome</label>
            <Input register={register("name")} placeholder={"Digite seu nome"} id="name" />
            <span>{errors.name?.message}</span>

            <label htmlFor="email">Email</label>
            <Input register={register("email")} placeholder={"Digite seu email"} id="email" />
            <span>{errors.email?.message}</span>

            <label htmlFor="password">Senha</label>
            <Input type={"password"} register={register("password")} placeholder={"Digite sua senha"} id="password" />
            <span>{errors.password?.message}</span>

            <label htmlFor="confirm_password">Repetir senha</label>
            <Input type={"password"} register={register("confirmPassword")} placeholder={"Confirme a senha"} id="confirm_password" />
            <span>{errors.confirmPassword?.message}</span>

            <label htmlFor="bio">Bio</label>
            <Input register={register("bio")} placeholder={"Fale sobre você"} id="bio" />
            <span>{errors.bio?.message}</span>

            <label htmlFor="contact">Contato</label>
            <Input register={register("contact")} placeholder={"Opção de contato"} id="contact" />
            <span>{errors.contact?.message}</span>

            <label htmlFor="model">Selecione o modulo</label>
            <select {...register("course_module")} name="" id="model">
              <option value="modulo1">Modulo 1</option>
              <option value="">Modulo 2</option>
              <option value="">Modulo 3</option>
              <option value="">Modulo 4</option>
              <option value="">Modulo 5</option>
              <option value="">Modulo 6</option>
            </select>

            <button type="submit">Cadastrar</button>
          </form>
        </FormContainer>
      </ContainerMain>
    </>
  );
};

export default Register;
