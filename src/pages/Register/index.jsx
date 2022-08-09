import ContainerMain from "./style";
import { Link } from "react-router-dom";
import FormContainer from "../../components/Form";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaRegister from "../../validations/userRegister";
import ModalLoading from "../../components/ModalLoading";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Register = () => {
  const { modalLoading, registerUser } = useContext(UserContext)

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaRegister)
  });

  return (
    <>
      {modalLoading && <ModalLoading />}
      <ContainerMain>
        <header>
          <h1>kenzie Hub</h1>
          <Link to="/">Voltar</Link>
        </header>

        <FormContainer>
          <h3>Crie sua conta</h3>
          <p>Rapido e grátis, vamos nessa</p>
          <form onSubmit={handleSubmit(registerUser)}>
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
