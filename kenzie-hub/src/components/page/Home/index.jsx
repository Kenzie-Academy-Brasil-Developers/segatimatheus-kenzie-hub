import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import Logo from "../../../assets/Logo.png";
import api from "../../services/api";
import { Header, Section, LiCard, Container, Div } from "./styled";
import "../Home/";
import { create } from "yup/lib/Reference";
import { schemaTecnologie } from "../../../validations/registerUser";

const Home = () => {
  const [user, setUser] = useState("");
  const [curseMoodule, setCurseModule] = useState("");
  const [techs, setTechs] = useState([]);
  const [open, setOpen] = useState(false);

  const token = localStorage.getItem("@kenzie-hub:token");

  useEffect(() => {
    async function getUser() {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;

        const userProfile = await api.get("/profile");

        const { name, course_module, techs } = userProfile.data;

        setUser(name);
        setCurseModule(course_module);
        setTechs(techs);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  function logout() {
    localStorage.setItem("@kenzie-hub:token", "");
    localStorage.setItem("@kenzie-hub:user_id", "");
  }

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaTecnologie),
  });

  async function createTechnologie(data) {
    try {
      const response = await api.post("/users/techs", data);

      const { status, title, id } = response.data;

      setTechs([
        ...techs,
        {
          id: id,
          title: title,
          status: status,
        },
      ]);

      console.log(status, title, id);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header>
        <img src={Logo} alt="" />
        <Link to={"/"} className="btnLogout" onClick={logout}>
          Logout
        </Link>
      </Header>

      <Section>
        <h2>{user}</h2>
        <h3>{curseMoodule}</h3>
      </Section>

      <Section>
        <h2>Tecnologias</h2>
        <button onClick={openModal}>+</button>
      </Section>

      <Container className="container">
        <Modal
          isOpen={open}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
        >
          <Div>
            <h2>Tecnologias Detalhes</h2>
            <button onClick={closeModal}>X</button>
          </Div>

          <form onSubmit={handleSubmit(createTechnologie)}>
            <label htmlFor="">Nome do projeto</label>
            <input
              type="text"
              placeholder="Digite o nome do projeto"
              {...register("title")}
            />

            <label htmlFor="">Status</label>
            <select name="" id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>

            <button type="submit">Cadastrar Tecnologia</button>
          </form>
        </Modal>
      </Container>

      <Section>
        <ul>
          {techs.map((tech) => (
            <LiCard key={tech.id} onClick={openModal}>
              <p>{tech.title}</p>
              <p>{tech.status}</p>
            </LiCard>
          ))}
        </ul>
      </Section>
    </>
  );
};

export default Home;
