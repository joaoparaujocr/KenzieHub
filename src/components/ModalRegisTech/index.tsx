import Modal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";
import ModalGlobal from './style';
import Input from '../Input';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import schemaNewTech from "../../validations/newTech";
import { Dispatch, SetStateAction, useContext } from 'react';
import { INewTech, UserContext } from '../../context/UserContext';

Modal.setAppElement("#root");

interface IModalRegisTechProps {
  modalIsOpen: boolean;
  closeModal: Dispatch<SetStateAction<boolean>>
}

const ModalRegisTech = ({modalIsOpen, closeModal}: IModalRegisTechProps) => {
  const { createNewTechUser } = useContext(UserContext);
  const { register, handleSubmit, formState: {errors} } = useForm<INewTech>({
    resolver: yupResolver(schemaNewTech)
  })

  return (
    <>
      <ModalGlobal />
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
          {errors.status?.message}

          <button type='submit'>Cadastrar Tecnologia</button>
        </form>
      </Modal>
    </>
  )
}

export default ModalRegisTech;