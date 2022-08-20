import Container from "./styles";
import { BiErrorCircle } from "react-icons/bi";
import { AiFillCloseCircle, AiOutlineCheckCircle, AiOutlineWarning } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { ToastContext } from "../../context/ToastContext";

interface IToastProps {
  message: string,
  description: string | undefined,
  type: string,
  id: string,
}

const Toast = ({ message, description, type, id}:IToastProps) => {
  const [isLeave, setIsLeave] = useState(false);
  const { removeToast } = useContext(ToastContext)

  const icons: {
    [key: string]: JSX.Element
  } = {
    success: <AiOutlineCheckCircle fontSize={24}/>,
    error: <BiErrorCircle fontSize={24} />,
    warning: <AiOutlineWarning fontSize={24} />
  }

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if(isLeave) {
      timer = setTimeout(() => {
        removeToast(id)
      }, 750)
    } else {
      timer = setTimeout(() => {
        setIsLeave(true)
      }, 3000)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [id, isLeave, removeToast])

  return(
      <Container type={type} isLeave={isLeave}>
        {icons[type]}

        <div className="infos">
          <h2>{message}</h2>
          {description && (<p>{description}</p>)}
        </div>
      
        <button onClick={() => setIsLeave(true)}>
          <AiFillCloseCircle size={24} />
        </button>
      </Container>
  )
}

export default Toast
