import Loading from "./styled";
import { motion } from "framer-motion";


const ModalLoading = () => {

  const spinTransition = {
    repeat: Infinity,
    duration: 1.3,
    ease: "easeInOut"
  }

  return (
    <Loading>
      <div className="blur"></div>
      <motion.span animate={{ rotate: 360 }} transition={spinTransition} />
    </Loading>
  )
}

export default ModalLoading;