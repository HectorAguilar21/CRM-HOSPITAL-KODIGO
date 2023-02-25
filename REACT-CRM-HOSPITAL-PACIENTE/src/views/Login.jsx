import React from "react";

export default function Login() {
  // const userRef = createRef();
  // const passwordRef = createRef();

  return (
    <>
      <div className="container container-form-login rounded-md mt-10 px-5 py-10">
        <div className="flex justify-center mb-10">
          <img
            src="/img/paciente.png"
            alt="imagen paciente"
            className=" w-44"
          />
        </div>
        <form noValidate>
          <div className="container-form">
            <div className="mb-3">
              <label htmlFor="user" className="form-label text-3xl">
                Usuario:
              </label>
              <input
                type="text"
                className="form-control placeholder-gray-300"
                id="user"
                placeholder="Ingresa tu usuario"
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
                placeholder="Ingresa tu contraseña"
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
