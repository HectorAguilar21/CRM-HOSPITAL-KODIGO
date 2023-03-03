import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import clienteAxios from "../../config/axios";

export default function AdministratorsRegisterPanel() {
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

  //States para guardar los datos de "obtenerAdministradores" Axios
  const [administrators, setAdministrators] = useState([]);

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
  const obtenerAdministradores = async () => {
    try {
      const { data } = await clienteAxios("/api/administrator_information");
      setAdministrators(data);
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

  //useEffect para ejecutar al menos una vez la solicitud a la API, cada vez que se visita la pagina
  useEffect(() => {
    obtenerHospitales();
    obtenerAdministradores();
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
      const respuesta = await clienteAxios.post(
        "/api/administrator_information",
        datos
      );
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

  //Return del HTML a mostrar
  return (
    <div className="">
      {/* Contenedor de Form Registro Administradores */}
      <div className="bg-white shadow-xl rounded-md mt-10 mx-20 px-5 py-10">
        <h1 className="text-4xl font-black text-center mb-10">
          Añade nuevo Administrador
        </h1>
        {/* Form Registro Administradores */}
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
            <label htmlFor="user_id">Administrador ID:</label>
            <input
              type="text"
              id="user_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="user_id"
              placeholder="Ingresa el ID del Administrador"
              value={userIdRef}
              onChange={(e) => setUserIdRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para escribir el ID del usuario */}
          {/* Input para escribir los nombres del usuario */}
          <div className="mb-4 mx-3">
            <label htmlFor="name">Nombres:</label>
            <input
              type="text"
              id="name"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="name"
              placeholder="Ingresa los nombres del Administrador"
              value={nameRef}
              onChange={(e) => setNameRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para escribir los nombres del usuario */}
          {/* Input para escribir los apellidos del usuario */}
          <div className="mb-4 mx-3">
            <label htmlFor="last_name">Apellidos:</label>
            <input
              type="text"
              id="last_name"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="last_name"
              placeholder="Ingresa los apellidos del Administrador"
              value={lastNameRef}
              onChange={(e) => setLastNameRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para escribir los apellidos del usuario */}
          {/* Input para escribir el ID del hospital */}
          <div className="mb-4 mx-3">
            <label htmlFor="hospital_id">Hospital ID:</label>
            <select
              id="hospital_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              value={hospitalIdRef}
              onChange={(e) => setHospitalIdRef(e.target.value)}
              required
            >
              <option value="--Default--" selected>
                --Seleccione una opcion--
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
            <label htmlFor="user">Usuario:</label>
            <input
              type="text"
              id="user"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="user"
              placeholder="Ingresa el usuario del Administrador"
              value={userRef}
              onChange={(e) => setUserRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para escribir el usuario */}
          {/* Input para escribir el correo */}
          <div className="mb-4 mx-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="email"
              placeholder="Ingresa el correo del Administrador"
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
              value={passwordRef}
              onChange={(e) => setPasswordRef(e.target.value)}
              required
            />
          </div>
          {/* FinInput para escribir la contraseña */}
          <input
            type="submit"
            value="Crear Usuario"
            className="button-login text-3xl text-center text-white mt-4 font-bold cursor-pointer"
          />
        </form>
        {/* Fin Form Registro Administradores */}
      </div>
      {/* Fin Contenedor de Form Registro Administradores */}
      {/* Contendor de la tabla */}
      <div className=" bg-white rounded-2xl my-5 container-info-citas overflow-auto mt-10 mx-20">
        <h1 className="text-center font-bold text-3xl text-indigo-700 pt-5">
          Administradores:
        </h1>
        <div className="flex align-items-center p-5 bg-white rounded-2xl container info-container">
          {/* Tabla */}
          <table className="table text-center align-middle">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">Usuario</th>
                <th scope="col">Hospital</th>
                <th colSpan="2">Acciones</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {administrators.map((administrator) => (
                <tr key={administrator.id}>
                  <th scope="row">{administrator.user_id}</th>
                  <td>{`${administrator.name} ${administrator.last_name}`}</td>
                  <td>{administrator.email}</td>
                  <td>{administrator.user}</td>
                  <td>{administrator.hospital.hospital_name}</td>
                  <td>
                    <Link
                      to={`/administrator/administrators_edit?id=${administrator.id}`}
                      type="button"
                      className="btn text-white bg-indigo-500 hover:bg-indigo-800"
                    >
                      Editar
                    </Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn text-white bg-red-500 hover:bg-red-700"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Fin Tabla */}
        </div>
      </div>
    </div>
  );
}
