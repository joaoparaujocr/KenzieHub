import axios from "axios";

const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 8000
});

export default api;