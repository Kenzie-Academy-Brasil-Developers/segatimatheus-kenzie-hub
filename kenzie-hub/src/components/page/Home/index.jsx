import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
import api from "../../services/api";
import { Header, Section } from "./styled";

const Home = () => {
  const [user, setUser] = useState("");
  const [curseMoodule, setCurseModule] = useState("");
  const token = localStorage.getItem("@kenzie-hub:token");

  async function getUser() {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;

      const userProfile = await api.get("/profile");

      const { name, course_module } = userProfile.data;
      setUser(name);
      setCurseModule(course_module);
    } catch (error) {
      console.error(error);
    }
  }
  getUser();

  function logout() {
    localStorage.setItem("@kenzie-hub:token", "");
    localStorage.setItem("@kenzie-hub:user_id", "");
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
    </>
  );
};

export default Home;
