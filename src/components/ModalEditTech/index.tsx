import Modal from 'react-modal';
import { Dispatch, SetStateAction } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import Input from '../Input';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { UserContext, IUpdateTech } from '../../context/UserContext';
import ModalGlobal from "./style"

Modal.setAppElement("#root");

type SttusName = "status"

export type Values = Record<SttusName, string>

interface IModalUpdateTechProps {
  setIdTech: Dispatch<SetStateAction<string>>;
  modalIsOpen: boolean;
  id: string ;
  closeModal: Dispatch<SetStateAction<boolean>>;
}

const ModalUpdateTech = ({ setIdTech, modalIsOpen, closeModal, id}: IModalUpdateTechProps) => {
  const { updateTech, infoUser: {techs} } = useContext(UserContext);
  const { register, handleSubmit } = useForm<IUpdateTech>()

  if(!id) return <></>

  const tech = techs?.find(({ id: idTechs }) => id === idTechs);

  const SubmitForm = (data: IUpdateTech) => {
    updateTech(id, data);
    setIdTech("");
    closeModal(!modalIsOpen);
  }

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
          <h3>Atualizar Nivel</h3>
          <button onClick={() => {
            setIdTech("");
            closeModal(!modalIsOpen);
          }} ><AiOutlineClose /></button>
        </div>

        <form onSubmit={handleSubmit(SubmitForm)}>
          <label htmlFor="title">Nome</label>
          <Input disabled={true} value={tech?.title} id="title" />

          <label htmlFor="status">Nivel</label>
          <select defaultValue={tech?.status} {...register("status")} name="status" id="status">
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