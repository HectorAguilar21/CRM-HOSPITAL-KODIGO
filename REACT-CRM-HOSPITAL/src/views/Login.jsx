import { useLocation } from "react-router-dom";
// import { createRef } from "react";
// import clienteAxios from "../config/axios";

export default function Login() {
  const location = useLocation();
  console.log(location);
  const searchParams = new URLSearchParams(location.search);
  console.log(searchParams);
  const userType = searchParams.get("type");
  console.log(userType);

  // const userRef = createRef();
  // const passwordRef = createRef();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const datos = {
  //     user: userRef.current.value,
  //     password: passwordRef.current.value,
  //   };

  //   console.log(datos);
  //   try {
  //     const respuesta = await clienteAxios.post("/api/login", datos);
  //     console.log(respuesta);
  //   } catch (error) {
  //     setErrores(error.response.data.errors);
  //   }
  // };

  let title;
  let image;

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
