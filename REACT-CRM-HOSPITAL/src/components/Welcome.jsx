import { useLocation } from "react-router-dom";
import clienteAxios from "../config/axios";

export default function Welcome() {
  return (
    <div>
      <div className="text-6xl font-bold flex justify-center mt-10">
        Bienvenido
      </div>
    </div>
  );
}
