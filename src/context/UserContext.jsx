import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../service/api";

export const UserContext = createContext({});

export const UserProvide = ({ children }) => {
  const [modalLoading, setModalLoading] = useState(false);
  const [infoUser, setInfoUser] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem("@tokenkenziehub");

    if (token) {
      setModalLoading(true);
      api.defaults.headers.authorization = `Bearer ${token}`;

      async function loadUser() {
        try {
          await api.get('/profile').then(res => {
            setUser(res.data.id);
            navigate("dashboard", { replace: true });
          })
        } catch(e) {
          setModalLoading(false);
        }
      }

      loadUser();
    }

  }, [navigate]);

  const getInfoUser = async () => {
    if (user) {
      setModalLoading(true);
      await api.get(`/users/${user}`)
        .then(res => {
          setInfoUser(res.data)})
        .catch(err => toast.error(err.response.data.message));
        
      setModalLoading(false)
    }
  }
  
  const singIn = async (data) => {
    setModalLoading(true)

    await api.post("/sessions", {...data})
    .then(res => {
      const {token, user: { id }} = res.data;

      localStorage.clear()
      localStorage.setItem("@tokenkenziehub", token);
      localStorage.setItem("@useridkenziehub", id);
      setUser(id)
      api.defaults.headers.authorization = `Bearer ${token}`;
      
      toast.success('Login feito com sucesso');
      navigate("dashboard", { replace: true });
    })
    .catch(err => toast.error(err.response.data.message));

    setModalLoading(false);
  }

  const createNewTechUser = async (data) => {
    setModalLoading(true);
    await api.post("users/techs", data)
      .then(async res => {
        await getInfoUser()
        toast.success("Tecnologia adicionada")
      })
      .catch(err => toast.error("Está tecnologia já existe."))
    setModalLoading(false);
  }

  const deleteTech = async (id) => {
    setModalLoading(true);
    await api.delete(`/users/techs/${id}`)
      .then(async res => {
        await getInfoUser();
        toast.success("Tecnologia excluida");
      }).catch(err => toast.error("Erro ao excluir tecnologia"));
    setModalLoading(false);
  }

  const updateTech = async (id, data) => {
    setModalLoading(true);
    await api.put(`/users/techs/${id}`, data)
      .then(async res => {
        await getInfoUser();
        toast.success("Nivel da tecnologia atualizado")
      }).catch(err => toast.error("Erro ao atualizar a tecnologia"));
    setModalLoading(false)
  }

  const registerUser = async ({ email, password, name, bio, contact, course_module }) => {
    const dataRegister = { email, password, name, bio, contact, course_module };
    setModalLoading(true);
    api.post("/users", dataRegister)
      .then(res => {
        toast.success("Usuario criado com sucesso.")
        navigate("/", { replace: true })
      })
      .catch(err => {
        toast.error("Email já cadastrado");
      })
      setModalLoading(false);
  }

  return (
    <UserContext.Provider value={{singIn, modalLoading, user, navigate, getInfoUser, infoUser, createNewTechUser, deleteTech, updateTech, registerUser}}>
      {children}
    </UserContext.Provider>
  )

}