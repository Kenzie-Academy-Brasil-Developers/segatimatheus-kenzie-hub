import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Content } from "./styled";
import Logo from "../../../assets/Logo.png";
import { useContext } from "react";
import { schemaLogin } from "../../../validations/registerUser";
import { AuthContext } from "../../../contexts/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { loadUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  return (
    <>
      <Content>
        <img src={Logo} alt="" />
        <div>
          <Form onSubmit={handleSubmit(loadUser)}>
            <div>
              <h2>Login</h2>
            </div>

            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Digite seu email"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>

            <label htmlFor="">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>

            <button type="submit">Entrar</button>

            <div>
              <h3 className="registerAccount">Ainda não possui uma conta?</h3>
            </div>

            <Link to={"/register"} type="submit" className="register">
              Cadastre-se
            </Link>
          </Form>
        </div>
      </Content>
    </>
  );
};

export default Login;
