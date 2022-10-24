import React from "react";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../components/services/api";

interface IUserContext {
  loadUser(data: IUserLogin): void;
  registerUser(data: IUserRegister): void;
  users: IUserLogin[];
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister {
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
  techs: [];
  works: [];
  avatar_url: null;
}

interface IUserProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<IUserContext>({} as IUserContext);

const AuthProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadingUser() {
      const token = localStorage.getItem("@kenzie-hub:token");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get("/sessions");

          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
    }
    loadingUser();
  }, []);

  async function loadUser(data: IUserLogin) {
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

  async function registerUser(data: IUserRegister) {
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
