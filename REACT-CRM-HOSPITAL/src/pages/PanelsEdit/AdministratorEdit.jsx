import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import clienteAxios from "../../config/axios";

export default function AdministratorEdit() {
  //Variable para obtener la ruta actual y realizar validaciones en las vistas
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const idAdministrator = searchParams.get("id");

  //States para recoger la informacion de los inputs
  const [typeIdRef, setTypeIdRef] = useState("1");
  const [userIdRef, setUserIdRef] = useState("");
  const [nameRef, setNameRef] = useState("");
  const [lastNameRef, setLastNameRef] = useState("");
  const [hospitalIdRef, setHospitalIdRef] = useState("");
  const [userRef, setUserRef] = useState("");
  const [emailRef, setEmailRef] = useState("");
  const [passwordRef, setPasswordRef] = useState("");

  //States para guardar los datos de "obtenerEspecialidades" Axios
  const [hospitals, setHospitals] = useState([]);

  //States para guardar los datos de "obtenerAdministrador" Axios
  const [administrator, setAdministrator] = useState({});

  //Funcion para solicitar la info a la API
  const obtenerHospitales = async () => {
    try {
      const { data } = await clienteAxios("/api/hospital_information");
      setHospitals(data);
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

  //Funcion para solicitar la info a la API
  const obtenerAdministrador = async () => {
    try {
      const { data } = await clienteAxios(
        `/api/administrator_information/${idAdministrator}`
      );
      setAdministrator(data);
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

  //useEffect para ejecutar al menos una vez la solicitud a la API, cada vez que se visita la pagina
  useEffect(() => {
    obtenerHospitales();
    obtenerAdministrador();
  }, []);

  //Funcion para enviar el Formulario a traves de un boton y no por el form directamente
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Se guardan los datos que se recogieron en los states, y se pasan a objetos
    const datos = {
      type_id: typeIdRef,
      user_id: userIdRef,
      name: nameRef,
      last_name: lastNameRef,
      hospital_id: hospitalIdRef,
      user: userRef,
      email: emailRef,
      password: passwordRef,
    };

    //Try Catch para realizar la peticion y recoger los errores si los hubiese
    try {
      const respuesta = await clienteAxios.put(
        `/api/administrator_information/${idAdministrator}`,
        datos
      );
      swal({
        title: "Realizado",
        text: "Envio de formulario exitosamente",
        icon: "success",
        button: "Aceptar",
      });
    } catch (error) {
      swal({
        title: "Error",
        text: "Error en el envio del formulario",
        icon: "error",
        button: "Aceptar",
      });
      console.log(Object.values(error.response.data.errors));
    }

    setUserIdRef("");
    setNameRef("");
    setLastNameRef("");
    setHospitalIdRef("");
    setUserRef("");
    setEmailRef("");
    setPasswordRef("");
  };

  return (
    <div>
      {/* Contenedor de Form Edicion Administradores */}
      <div className="bg-white shadow-xl rounded-md mt-10 mx-20 px-5 py-10">
        <h1 className="text-4xl font-black text-center mb-10">
          Actualización de Usuario Administrador
        </h1>
        {/* Form Edicion Administradores */}
        <form className="grid grid-cols-2" onSubmit={handleSubmit} noValidate>
          {/* Input para escribir el rol del Usuario */}
          <div className="mb-4 mx-3">
            <label htmlFor="type_id">Rol:</label>
            <input
              type="number"
              id="type_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="type_id"
              placeholder="Ingresa el Rol del Usuario"
              value={typeIdRef}
              required
            />
          </div>
          {/* Fin Input para escribir el rol del Usuario */}
          {/* Input para escribir el ID del usuario */}
          <div className="mb-4 mx-3">
            <label htmlFor="user_id">
              Administrador ID:
              <span className="text-indigo-200"> {administrator.user_id}</span>
            </label>
            <input
              type="text"
              id="user_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="user_id"
              placeholder="Actualiza el ID del Administrador"
              value={userIdRef}
              onChange={(e) => setUserIdRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para escribir el ID del usuario */}
          {/* Input para escribir los nombres del usuario */}
          <div className="mb-4 mx-3">
            <label htmlFor="name">
              Nombres:
              <span className="text-indigo-200"> {administrator.name}</span>
            </label>
            <input
              type="text"
              id="name"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="name"
              placeholder="Actualiza los nombres del Administrador"
              value={nameRef}
              onChange={(e) => setNameRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para escribir los nombres del usuario */}
          {/* Input para escribir los apellidos del usuario */}
          <div className="mb-4 mx-3">
            <label htmlFor="last_name">
              Apellidos:
              <span className="text-indigo-200">
                {" "}
                {administrator.last_name}
              </span>
            </label>
            <input
              type="text"
              id="last_name"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="last_name"
              placeholder="Actualiza los apellidos del Administrador"
              value={lastNameRef}
              onChange={(e) => setLastNameRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para escribir los apellidos del usuario */}
          {/* Input para escribir el ID del hospital */}
          <div className="mb-4 mx-3">
            <label htmlFor="hospital_id">
              Hospital ID:
              <span className="text-indigo-200">
                {" "}
                {/* {administrator.hospital.hospital_name} */}
              </span>
            </label>
            <select
              id="hospital_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              value={hospitalIdRef}
              onChange={(e) => setHospitalIdRef(e.target.value)}
              required
            >
              <option value="--Default--" selected>
                --Seleccione la opción que se actualiza--
              </option>
              {hospitals.map((hospital) => (
                <option key={hospital.id} value={hospital.id}>
                  {hospital.hospital_name}
                </option>
              ))}
            </select>
          </div>
          {/* Fin Input para escribir el ID del hospital */}
          {/* Input para escribir el usuario */}
          <div className="mb-4 mx-3">
            <label htmlFor="user">
              Usuario:
              <span className="text-indigo-200"> {administrator.user}</span>
            </label>
            <input
              type="text"
              id="user"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="user"
              placeholder="Actualiza el usuario del Administrador"
              value={userRef}
              onChange={(e) => setUserRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para escribir el usuario */}
          {/* Input para escribir el correo */}
          <div className="mb-4 mx-3">
            <label htmlFor="email">
              Email:
              <span className="text-indigo-200"> {administrator.email}</span>
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="email"
              placeholder="Actualiza el correo del Administrador"
              value={emailRef}
              onChange={(e) => setEmailRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para escribir el correo */}
          {/* Input para escribir la contraseña */}
          <div className="mb-4 mx-3">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="password"
              placeholder="Ingresa la contraseña del Administrador"
              value={administrator.password}
              onChange={(e) => setPasswordRef(e.target.value)}
              required
            />
          </div>
          {/* FinInput para escribir la contraseña */}
          <input
            type="submit"
            value="Actualizar Usuario"
            className="button-login text-3xl text-center text-white mt-4 font-bold cursor-pointer"
          />
        </form>
        {/* Fin Form Edicion Administradores */}
      </div>
      {/* Fin Contenedor de Form Edicion Administradores */}
    </div>
  );
}
