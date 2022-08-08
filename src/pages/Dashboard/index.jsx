import { useContext, useEffect } from "react";
import logo from "../../assets/logo.png"
import DashboardStyle from "./style";
import 'react-toastify/dist/ReactToastify.css';
import ModalLoading from "../../components/ModalLoading";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { navigate, infoUser, modalLoading, getInfoUser } = useContext(UserContext);

  useEffect(() => {
    getInfoUser()
  }, [getInfoUser])

  const logout = () => {
    localStorage.clear()
    navigate("/", { replace: true })
  }

  if(modalLoading) return <ModalLoading />

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
        <Navigate to="/" replace />
      )}
    </>
    )
}

export default Dashboard;