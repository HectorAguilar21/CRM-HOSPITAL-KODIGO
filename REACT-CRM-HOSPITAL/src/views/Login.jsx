import { useLocation } from "react-router-dom";
// import { createRef } from "react";
// import clienteAxios from "../config/axios";

export default function Login() {
  //Variable para obtener la ruta actual y realizar validaciones en las vistas
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userType = searchParams.get("type");

  //Variables para almacenar el resultado del switch
  let title;
  let image;

  //switch para seleccionar segun el parametro que se le pase del tipo de usuario
  switch (userType) {
    case "admin":
      image = "../img/administrador.png";
      break;
    case "secretary":
      image = "../img/mostrador.png";
      break;
    case "doctor":
      image = "../img/equipo-medico.png";
      break;
    default:
      title = "ACCESO";
      image = "../img/caduceo.png";
      break;
  }

  // HTML a rendereziar
  return (
    <>
      <div className="container container-form-login rounded-md mt-10 px-5 py-10">
        <div className="flex justify-center mb-10">
          <img src={image} alt="imagen-administrador" className=" w-44" />
        </div>
        <form
          // onSubmit={handleSubmit}
          noValidate
        >
          <div className="container-form">
            <div className="mb-3">
              <label htmlFor="user" className="form-label text-3xl">
                Usuario:
              </label>
              <input
                type="text"
                className="form-control placeholder-gray-300"
                id="user"
                placeholder="Ingresa el usuario"
                // ref={userRef}
              />
            </div>{" "}
            <div className="mb-3">
              <label for="password" className="form-label text-3xl">
                Contraseña:
              </label>
              <input
                type="password"
                className="form-control placeholder-gray-300"
                id="password"
                placeholder="Ingresa la contraseña"
                // ref={passwordRef}
              />
            </div>
            <div className="flex justify-center">
              <input
                type="submit"
                value="INICIAR  SESION"
                className="button-login text-3xl text-center text-white mt-4 font-bold cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
