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
          console.log(e);
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
          console.log(res.data)
          setInfoUser(res.data)})
        .catch(err => toast.error(err.response.data.message));
        
      setModalLoading(false)
    }
  }
  
  const singIn = async (data) => {
    setModalLoading(true)
    await api.post("/sessions", {...data})
    .then(res => {
      console.log(res.data)
      const {token, user: { id }} = res.data;

      localStorage.clear()
      localStorage.setItem("@tokenkenziehub", token);
      localStorage.setItem("@useridkenziehub", id);
      setUser(id)
      api.defaults.headers.authorization = `Bearer ${token}`;
      
      toast.success('Login feito com sucesso');
      navigate("dashboard", { replace: true });
    })
    .catch(err => {
      toast.error(err.response.data.message)
    })
    setModalLoading(false)
  }

  return (
    <UserContext.Provider value={{singIn, modalLoading, user, navigate, getInfoUser, infoUser}}>
      {children}
    </UserContext.Provider>
  )

}