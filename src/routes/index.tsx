import { Routes, Route, Navigate} from "react-router-dom"
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { AnimatePresence } from "framer-motion";

const ControlRoutes = () => (
  <AnimatePresence>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='*' element={<Navigate to="/" replace={true} />} />
    </Routes>
  </AnimatePresence>
)

export default ControlRoutes;