import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { toast } from 'react-toastify';
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ModalLoading from "../../components/ModalLoading";
import schemaLogin from "../../validations/userLogin";
import FormContainer from "../../components/Form";
import 'react-toastify/dist/ReactToastify.css';
import Input from "../../components/Input";
import ContainerMain from "./style";
import api from "../../service/api";
import React from 'react';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("@tokenkenziehub") && localStorage.getItem("@useridkenziehub")) {
      navigate("/dashboard", { replace: true })
    }
  })

  const [isVisiblePassword, setVisiblePassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaLogin)
  });

  const onSumitForm = data => {
    setModalVisible(true);

    api.post("/sessions", {...data})
      .then(res => {
        const token = res.data.token;
        const userid = res.data.user.id;
        
        localStorage.clear()
        localStorage.setItem("@tokenkenziehub", token);
        localStorage.setItem("@useridkenziehub", userid);

        toast.success('Login feito com sucesso');
        navigate("dashboard", { replace: true });
      })
      .catch(err => {
        setModalVisible(false)
        toast.error(err.response.data.message);
      })
  };

  return (
    <ContainerMain>
      {modalVisible && <ModalLoading />}
      <h1>Kenzie Hub</h1>
      <FormContainer>
        <h3>Login</h3>
        <form action="" onSubmit={handleSubmit(onSumitForm)}>
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