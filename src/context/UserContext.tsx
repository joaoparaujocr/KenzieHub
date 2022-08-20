import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { ToastContext } from "./ToastContext";
import api from "../service/api";

interface User {
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface SingInUser {
  email: string;
  password: string;
}

export interface INewTech {
  title: string;
  status: string;
}

interface IUserProps {
  children: ReactNode;
}

export interface ITech {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface IInfoUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: ITech[];
}

interface IUserContext {
  singIn: (data: SingInUser) => void;
  modalLoading: boolean;
  user: string;
  navigate: NavigateFunction;
  getInfoUser: () => Promise<void>;
  infoUser: IInfoUser;
  createNewTechUser: (data: INewTech) => void;
  deleteTech: (id: string) => void;
  updateTech: (id: string, data: IUpdateTech) => void;
  registerUser: (object: User) => void;
  setInfoUser: Dispatch<SetStateAction<IInfoUser>>
}

export interface IUpdateTech {
  status: string;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProps) => {
  const [modalLoading, setModalLoading] = useState(false);
  const [infoUser, setInfoUser] = useState<IInfoUser>({} as IInfoUser);
  const [user, setUser] = useState("");
  const { addToast } = useContext(ToastContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@tokenkenziehub");

    if (token) {
      setModalLoading(true);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      async function loadUser(): Promise<void> {
        try {
          await api.get("/profile").then((res) => {
            setUser(res.data.id);
            navigate("/dashboard", { replace: true });
          });
        } catch (e) {
          setModalLoading(false);
        }
      }

      loadUser();
    } else {
      navigate("/", { replace: true })
    }
    
  }, [navigate]);

  const getInfoUser = async ():Promise<void> => {
    if (user) {
      setModalLoading(true);
      await api
        .get(`/users/${user}`)
        .then((res) => {
          setInfoUser(res.data);
        })
        .catch((err) => addToast("error", err.response.data.message));

      setModalLoading(false);
    }
    setModalLoading(false);
  };

  const singIn = async (data: SingInUser):Promise<void> => {
    setModalLoading(true);

    await api
      .post("/sessions", { ...data })
      .then((res) => {
        const {
          token,
          user: { id },
        } = res.data;

        localStorage.clear();
        localStorage.setItem("@tokenkenziehub", token);
        localStorage.setItem("@useridkenziehub", id);
        setUser(id);
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        addToast("success", "Login feito com sucesso");
        navigate("dashboard", { replace: true });
      })
      .catch((err) =>
        addToast("error", "Falha ao fazer o login", "E-mail ou senha invalidos")
      );

    setModalLoading(false);
  };

  const createNewTechUser = async (data: INewTech):Promise<void> => {
    setModalLoading(true);
    await api
      .post("users/techs", data)
      .then(async (res) => {
        await getInfoUser();
        addToast("success", "Tecnologia adicionada");
      })
      .catch((err) => addToast("error", "Está tecnologia já existe."));
    setModalLoading(false);
  };

  const deleteTech = async (id: string):Promise<void> => {
    setModalLoading(true);
    await api
      .delete(`/users/techs/${id}`)
      .then(async (res) => {
        await getInfoUser();
        addToast("success", "Tecnologia excluida");
      })
      .catch((err) => addToast("error", "Erro ao excluir tecnologia"));
    setModalLoading(false);
  };

  const updateTech = async (id: string, data: IUpdateTech):Promise<void> => {
    setModalLoading(true);
    await api
      .put(`/users/techs/${id}`, data)
      .then(async (res) => {
        await getInfoUser();
        addToast("success", "Nivel da tecnologia atualizado");
      })
      .catch((err) => addToast("error", "Erro ao atualizar a tecnologia"));
    setModalLoading(false);
  };

  const registerUser = async ({
    email,
    password,
    name,
    bio,
    contact,
    course_module,
  }: User):Promise<void> => {
    const dataRegister = { email, password, name, bio, contact, course_module };
    setModalLoading(true);
    api
      .post("/users", dataRegister)
      .then((res) => {
        addToast("success", "Usuario criado com sucesso.");
        navigate("/", { replace: true });
      })
      .catch((err) => {
        addToast("error", "Email já cadastrado");
      });
    setModalLoading(false);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        singIn,
        modalLoading,
        navigate,
        getInfoUser,
        infoUser,
        createNewTechUser,
        deleteTech,
        updateTech,
        registerUser,
        setInfoUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
