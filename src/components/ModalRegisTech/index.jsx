import Modal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";
import "./style.css"
import Input from '../Input';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import schemaNewTech from "../../validations/newTech";
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

Modal.setAppElement("#root");

const ModalRegisTech = ({modalIsOpen, closeModal}) => {
  const { createNewTechUser } = useContext(UserContext);
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schemaNewTech)
  })

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => closeModal(false)}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div>
          <h3>Cadastrar tecnologia</h3>
          <button onClick={() => closeModal(!modalIsOpen)} ><AiOutlineClose /></button>
        </div>

        <form onSubmit={handleSubmit((data) => {
          createNewTechUser(data);
          closeModal(!modalIsOpen);
        })}>
          <label htmlFor="title">Nome</label>
          <Input register={register("title")} placeholder="Nome da tecnologia" id="title" />
          {errors.title?.message}

          <label htmlFor="status">Nivel</label>
          <select {...register("status")} name="status" id="status">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediario</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.title?.status}

          <button type='submit'>Cadastrar Tecnologia</button>
        </form>
      </Modal>
    </>
  )
}

export default ModalRegisTech;