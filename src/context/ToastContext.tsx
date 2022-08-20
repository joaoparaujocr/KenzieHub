import { v4 as uuidv4 } from 'uuid';
import { createContext, ReactNode, useState } from "react";

interface IToastProps {
  children: ReactNode;
}

interface IToast {
  id:  string;
  type: string;
  message: string;
  description?: string | undefined;
}

interface IToastValue {
  messages: IToast[];
  removeToast: (idRemove: string) => void;
  addToast: (type:string, message:string, description?: string | undefined) => void;
}

export const ToastContext = createContext<IToastValue>({} as IToastValue);

const ToastProvider = ({ children }:IToastProps) => {
  const [messages, setMessages] = useState<IToast[]>([]);

  const removeToast = (idRemove: string): void => {
    const newArray:IToast[] = messages.filter(({ id }) => id !== idRemove)
    setMessages(newArray);
  }

  const addToast = (type:string, message:string, description:string | undefined = undefined): void => {
    setMessages([...messages, { id: uuidv4(), type, message, description}])
  }

  return (
    <ToastContext.Provider value={{messages, removeToast, addToast}}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;