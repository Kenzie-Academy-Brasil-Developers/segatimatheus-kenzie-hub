import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import Logo from "../../../assets/Logo.png";
import api from "../../services/api";
import { Header, Section, LiCard, Container, Div } from "./styled";
import { schemaTecnologie } from "../../../validations/registerUser";
import React from "react";

interface ITechsCreate {
  map(arg0: (tech: any) => JSX.Element): React.ReactNode;
  id: string;
  title: string | null;
  status: string | null;
}

interface ITechsUpdate {
  status: string;
}

interface IState {
  state: boolean;
}

const Home = () => {
  const [user, setUser] = useState("");
  const [curseMoodule, setCurseModule] = useState("");
  const [techs, setTechs] = useState<ITechsCreate>([]);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [li, setLi] = useState<ITechsCreate>({});
  const [state, setState] = useState<IState>(false);

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
  }, [state]);

  function logout() {
    localStorage.setItem("@kenzie-hub:token", "");
    localStorage.setItem("@kenzie-hub:user_id", "");
  }

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const openModal2 = (tech: ITechsCreate) => {
    setLi(tech);
    setOpen2(true);
  };
  const closeModal2 = () => setOpen2(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITechsCreate>({
    resolver: yupResolver(schemaTecnologie),
  });

  async function createTechnologie(data: ITechsCreate) {
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

      setState(status);
    } catch (error) {
      console.log(error);
    }
  }

  async function editTechnologie(data: ITechsUpdate) {
    try {
      const idCard = li.id;
      console.log(idCard);

      await api.put(`/users/techs/${idCard}`, data);

      setState(idCard);
    } catch (error) {
      console.log(error);
    }
  }

  async function delTechnologie() {
    try {
      const idCard = li.id;

      await api.delete(`/users/techs/${idCard}`);

      setState(false);
    } catch (error) {
      console.error(error);
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
            <select id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>

            <button type="submit">Cadastrar Tecnologia</button>
          </form>
        </Modal>
      </Container>

      <Container className="container">
        <Modal
          isOpen={open2}
          onRequestClose={closeModal2}
          contentLabel="Example Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
        >
          <Div>
            <h2>Tecnologias Detalhes</h2>
            <button onClick={closeModal2}>X</button>
          </Div>

          <form onSubmit={handleSubmit(editTechnologie)}>
            <label htmlFor="">Status</label>
            <select id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>

            <button type="submit">Atualizar</button>
            <button onClick={delTechnologie}>Excluir</button>
          </form>
        </Modal>
      </Container>

      <Section>
        <ul>
          {techs.map((tech) => (
            <>
              <LiCard key={tech.id} onClick={() => openModal2(tech)}>
                <p>{tech.title}</p>
                <p>{tech.status}</p>
              </LiCard>
            </>
          ))}
        </ul>
      </Section>
    </>
  );
};

export default Home;
