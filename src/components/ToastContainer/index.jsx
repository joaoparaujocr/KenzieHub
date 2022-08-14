import { useContext } from "react";
import { ToastContext } from "../../context/ToastContext";
import Toast from "../Toast";
import Container from "./styles";

const ToastContainer = ({children}) => {
  const { messages } = useContext(ToastContext);

  return (
    <>
      {messages && (
        <Container>
          {messages.map(({ message, description, type, id}) => {
            return (<Toast key={id} id={id} message={message} description={description} type={type} />)
          })}
        </Container>
      )}
    </>
  )
}

export default ToastContainer;
