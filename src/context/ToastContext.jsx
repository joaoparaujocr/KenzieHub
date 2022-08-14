import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const ToastContext = createContext({});

const ToastProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const removeToast = (id) => {
    const newArray = messages.filter(({ id: idToast }) => idToast !== id)
    setMessages(newArray);
  }

  const addToast = (type, message, description = undefined) => {
    setMessages(previousMenssages => [...previousMenssages, { id: uuidv4(), type, message, description}])
  }

  return (
    <ToastContext.Provider value={{messages, setMessages, removeToast, addToast}}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;