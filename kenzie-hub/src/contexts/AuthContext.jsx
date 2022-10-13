import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../components/services/api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  //   useEffect(() => {
  //     async function loadingUser() {
  //       const token = localStorage.getItem("@kenzie-hub:token");

  //       if (token) {
  //         try {
  //           api.defaults.headers.authorization = `Bearer ${token}`;

  //           const { data } = await api.get("/sessions");

  //           setUser(data);
  //         } catch (error) {
  //           console.error(error);
  //         }
  //       }
  //     }
  //     loadingUser();
  //   }, []);

  async function loadUser(data) {
    try {
      const response = await api.post("/sessions", data);

      const { user: userResponse, token } = response.data;

      localStorage.setItem("@kenzie-hub:token", token);
      localStorage.setItem("@kenzie-hub:user_id", userResponse.id);

      setUser(userResponse);

      navigate("/homepage");
    } catch (error) {
      console.error(error);
    }
  }

  async function registerUser(data) {
    try {
      const response = await api.post("/users", data);

      const { user: userResponse, token } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;

      setUser(userResponse);

      localStorage.setItem("@kenzie-hub:token", token);

      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthContext.Provider value={{ registerUser, loadUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
