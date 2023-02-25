import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div>
      <div className="container-cards grid grid-cols-2 gap-9 mx-52 m-8 font-bold">
        <Link to="/auth/login?type=admin">
          <div className="container container-img admins p-4">
            <h1 className="text-4xl">ADMINISTRADORES</h1>
            <img
              className="img"
              src="../img/administrador.png"
              alt="Logo de Administrador"
            />
          </div>
        </Link>
        <Link to="/auth/login?type=secretary">
          <div className="container container-img secretarias p-4">
            <h1 className="text-4xl">SECRETARIAS</h1>
            <img
              className="img"
              src="../img/mostrador.png"
              alt="Logo de Secretaria"
            />
          </div>
        </Link>
      </div>
      <div className="container-cards gap-9 font-bold">
        <Link to="/auth/login?type=doctor">
          <div className="container container-img doctors p-4">
            <h1 className="text-4xl">DOCTORES</h1>
            <img
              className="img"
              src="../img/equipo-medico.png"
              alt="Logo de Doctor"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
