import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import schemaLogin from "../../validations/userLogin";
import FormContainer from "../../components/Form";
import 'react-toastify/dist/ReactToastify.css';
import Input from "../../components/Input";
import ContainerMain from "./style";
import React from 'react';
import { UserContext } from "../../context/UserContext";
import ModalLoading from "../../components/ModalLoading";

const Login = () => {
  const { singIn, modalLoading } = useContext(UserContext)
  const [isVisiblePassword, setVisiblePassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaLogin)
  });

  return (
    <ContainerMain>
      {modalLoading && <ModalLoading />}
      <h1>Kenzie Hub</h1>
      <FormContainer>
        <h3>Login</h3>
        <form action="" onSubmit={handleSubmit(singIn)}>
          <label htmlFor="email">Email</label>
          <Input id={"email"} placeholder={"Digite seu email"} register={register("email")} name={"email"} />
          <span>{errors.email?.message}</span>

          <label htmlFor="password">Senha</label>
          <Input id={"password"} placeholder={"Digite sua senha"} register={register("password")} isVisiblePassword={isVisiblePassword} type={"password"}>
            <span onClick={() => setVisiblePassword(!isVisiblePassword)}>
              {isVisiblePassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </Input>
          <span>{errors.password?.message}</span>

          <button type="submit">Entrar</button>
        </form>

        <Link to='/register'>Ainda não possui conta? clique aqui</Link>
      </FormContainer>
    </ContainerMain>
  )
}

export default Login;