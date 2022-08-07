import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"
import api from "../../service/api";
import DashboardStyle from "./style";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ModalLoading from "../../components/ModalLoading";

const Dashboard = () => {
  const navigation = useNavigate()
  const token = localStorage.getItem("@tokenkenziehub");
  const userid = localStorage.getItem("@useridkenziehub");
  const [infoUser, setInfoUser] = useState(null);

  useEffect(() => {
    if (token && userid) {
      api.get(`/users/${userid}`)
        .then(res => setInfoUser(res.data))
        .catch(err => toast.error(err.response.data.message));
      return
    }
    navigation("/", { replace: true })

  }, [navigation, token, userid])

  const logout = () => {
    localStorage.clear()
    navigation("/", { replace: true })
  }
  
  return (
    <>
      {infoUser ? (
        <DashboardStyle>
          <header>
            <div className="container">
              <img src={logo} alt="" />
              <button onClick={logout}>Sair</button>
            </div>
          </header>
          
          <section>
            <div className="container">
              <h2>Olá, {infoUser?.name}</h2>
              <p>{infoUser?.course_module}</p>
            </div>
          </section>

          <main>
            <div className="container">
              <h2>Que pena! Estamos em desenvolvimento :(</h2>
            </div>
          </main>
        </DashboardStyle>
      ) : (
        <ModalLoading />
      )}
    </>
    )
}

export default Dashboard;