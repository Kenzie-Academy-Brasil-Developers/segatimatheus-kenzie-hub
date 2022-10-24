import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext } from "react";

import { Form, Div, Content } from "./styled";
import { Logo } from "../../../assets/Logo.png";

import { schema } from "../../../validations/registerUser";
import { AuthContext, IUserRegister } from "../../../contexts/AuthContext";
import { Link } from "react-router-dom";
import React from "react";

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <Content>
        <Div>
          <img src={Logo} alt="" />
          <Link to={"/"} className="btnVoltar">
            Voltar
          </Link>
        </Div>

        <Form onSubmit={handleSubmit(registerUser)}>
          <div>
            <h2>Crie sua Conta</h2>
            <h3>Rápido e grátis, vamos nessa</h3>
          </div>

          <label>Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>

          <label>Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>

          <label>Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>

          <label>Confitmar senha</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Digite novamente sua senha"
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword?.message}</p>

          <label>Bio</label>
          <input
            type="text"
            id="bio"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          <p>{errors.bio?.message}</p>

          <label>Contato</label>
          <input
            type="text"
            id="contact"
            placeholder="Opções de contato"
            {...register("contact")}
          />
          <p>{errors.contact?.message}</p>

          <label>Selecionar módulo</label>
          <select id="module" {...register("course_module")}>
            <option value="1">Primeiro módulo (Introdução ao Frontend)</option>
            <option value="2">Segundo módulo (Frontend Avançado)</option>
            <option value="3">Terceiro módulo (Introdução ao Backend)</option>
            <option value="4">Quarto módulo (Backend Avançado)</option>
          </select>

          <button type="submit">Cadastrar</button>
        </Form>
      </Content>
    </>
  );
};

export default Register;
