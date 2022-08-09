import Modal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";
import "./style.css"
import Input from '../Input';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

Modal.setAppElement("#root");

const ModalUpdateTech = ({ setIdTech, modalIsOpen, closeModal, id = null}) => {
  const { updateTech, infoUser: {techs} } = useContext(UserContext);
  const { register, handleSubmit } = useForm()

  if(!id) return <></>

  const { title, status } = techs.find(({ id: idTechs }) => id === idTechs);

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => closeModal(false)}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div>
          <h3>Atualizar Nivel</h3>
          <button onClick={() => closeModal(!modalIsOpen)} ><AiOutlineClose /></button>
        </div>

        <form onSubmit={handleSubmit((data) => {
          updateTech(id, data);
          setIdTech(null);
          closeModal(!modalIsOpen);
        })}>
          <label htmlFor="title">Nome</label>
          <Input disabled={true} value={title} id="title" />

          <label htmlFor="status">Nivel</label>
          <select defaultValue={status} {...register("status")} name="status" id="status">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediario</option>
            <option value="Avançado">Avançado</option>
          </select>

          <button type='submit'>Atualizar Nivel</button>
        </form>
      </Modal>
    </>
  )
}

export default ModalUpdateTech;