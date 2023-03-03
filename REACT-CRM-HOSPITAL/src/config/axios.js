import axios from "axios";

//Se crea una variable de clienteAxios para almacenar parte de la URL que es constante
const clienteAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default clienteAxios;
