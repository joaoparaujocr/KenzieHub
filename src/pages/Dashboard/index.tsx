import logo from "./../../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa"
import { IoMdAdd } from "react-icons/io";
import DashboardStyle from "./style";
import ModalLoading from "../../components/ModalLoading";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";
import ModalRegisTech from "../../components/ModalRegisTech";
import ModalUpdateTech from "../../components/ModalEditTech";

const Dashboard = () => {
  const { navigate, infoUser, modalLoading, getInfoUser, deleteTech, user } = useContext(UserContext);
  const [modalIsOpen, setModalOpen] = useState(false);
  const [modalUpdateTech, setModalUpdateTech] = useState(false);
  const [idTech, setIdTech] = useState("");

  useEffect(() => {
      getInfoUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const logout = () => {
    localStorage.clear()
    navigate("/", { replace: true });
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
              <div className="createTechs">
                <h3>Tecnologias</h3>
                <button onClick={() => setModalOpen(!modalIsOpen)}><IoMdAdd /></button>
                <ModalRegisTech modalIsOpen={modalIsOpen} closeModal={setModalOpen} />
              </div>
              <ul>
                <ModalUpdateTech setIdTech={setIdTech} id={idTech} modalIsOpen={modalUpdateTech} closeModal={setModalUpdateTech} />
                {infoUser?.techs?.length > 0 ? infoUser.techs.map(({ id, title, status }) => (
                  <li key={id}>
                    <h2>{title}</h2>

                    <div className="groupButtons">
                      <p>{status}</p>
                      <button onClick={() => deleteTech(id)} className="trash"><FaTrash /></button>
                      <button className="edit" onClick={() => {
                        setIdTech(id)
                        setModalUpdateTech(!modalUpdateTech)
                        }}><FaEdit /></button>
                    </div>
                  </li>
                )) : (
                  <h4>Sem tecnologias cadastradas</h4>
                )}
              </ul>
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
