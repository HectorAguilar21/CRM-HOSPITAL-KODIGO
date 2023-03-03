import React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import clienteAxios from "../../config/axios";

export default function SecretaryEdit() {
  //Variable para obtener la ruta actual y realizar validaciones en las vistas
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const idSecretary = searchParams.get("id");

  //States para recoger la informacion de los inputs
  const [typeIdRef, setTypeIdRef] = useState("4");
  const [userIdRef, setUserIdRef] = useState("");
  const [nameRef, setNameRef] = useState("");
  const [lastNameRef, setLastNameRef] = useState("");
  const [hospitalRef, setHospitalIdRef] = useState("");
  const [userRef, setUserRef] = useState("");
  const [emailRef, setEmialRef] = useState("");

  //States para guardar los datos de "obtenerHospitales" axions
  const [hospitals, setHospitals] = useState([]);

  //state para guardar los datos de "obtenerSecretaria"
  const [secretary, setSecretary] = useState({});

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
  const obtenerSecretaria = async () => {
    try {
      const { data } = await clienteAxios(
        `/api/secretary_information/${idSecretary}`
      );
      setSecretary(data);
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

  //useEffect para ejecutar al menos una vez las solicitudes a la API, cada vez que se visita la pagina
  useEffect(() => {
    obtenerHospitales();
    obtenerSecretaria();
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
      hospital_id: hospitalRef,
      user: userRef,
      email: emailRef,
    };

    //Try Catch para realizar la peticion y recoger los errores si los hubiese
    try {
      const respuesta = await clienteAxios.put(
        `/api/secretary_information/${idSecretary}`,
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
    setEmialRef("");
  };

  //Return del HTML a mostrar
  return (
    <div className="">
      {/* Contenedor de Form Registro Secretarias */}
      <div className="bg-white shadow-xl rounded-md mt-10 px-5 py-10 mx-20">
        <h1 className="text-4xl font-black text-center mb-10">
          Actualización de Secretaría
        </h1>
        {/* Form Registro Secretaria */}
        <form className="grid grid-cols-2" onSubmit={handleSubmit} noValidate>
          {/* Input para seleccionar el rol */}
          <div className="mb-4 mx-3">
            <label htmlFor="type_id">Rol:</label>
            <input
              type="number"
              id="type_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="type_id"
              placeholder="Ingresa el Rol del Usuario"
              value={typeIdRef}
              onChange={(e) => setTypeIdRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para seleccionar el hospital */}
          {/* Input para el Id de la Secretaria */}
          <div className="mb-4 mx-3">
            <label htmlFor="user_id">
              Secretaria ID:
              <span className="text-indigo-200"> {secretary.user_id}</span>
            </label>
            <input
              type="text"
              id="user_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="user_id"
              placeholder="Ingresa el ID de la Secretaría"
              value={userIdRef}
              onChange={(e) => setUserIdRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para el Id de la Secretaría */}
          {/* Input para el Nombre de la Secretaría */}
          <div className="mb-4 mx-3">
            <label htmlFor="name">
              Nombres:
              <span className="text-indigo-200"> {secretary.name}</span>
            </label>
            <input
              type="text"
              id="name"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="name"
              placeholder="Ingresa los nombres de la Secretaría"
              value={nameRef}
              onChange={(e) => setNameRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para el Nombre de la Secretaría */}
          {/* Input para los Apellidos de la Secretaría */}
          <div className="mb-4 mx-3">
            <label htmlFor="last_name">
              Apellidos:
              <span className="text-indigo-200"> {secretary.last_name}</span>
            </label>
            <input
              type="text"
              id="last_name"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="last_name"
              placeholder="Ingresa los apellidos de la Secretaría"
              value={lastNameRef}
              onChange={(e) => setLastNameRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para los Apellidos de la Secretaría */}
          {/* Input para seleccionar el hospital */}
          <div className="mb-4 mx-3">
            <label htmlFor="hospital_id">
              Hospital donde laboral ID:
              <span className="text-indigo-200"> {secretary.hospital_id}</span>
            </label>
            <select
              id="hospital_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              value={hospitalRef}
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
          {/* Fin Input para seleccionar el hospital */}
          {/* Input para el Usuario de la Secretaría */}
          <div className="mb-4 mx-3">
            <label htmlFor="user">
              Usuario:
              <span className="text-indigo-200"> {secretary.user}</span>
            </label>
            <input
              type="text"
              id="user"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="user"
              placeholder="Ingresa el usuario de la Secretaría"
              value={userRef}
              onChange={(e) => setUserRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para el Usuario de la Secretaría */}
          {/* Input para el correol de la Secretaría */}
          <div className="mb-4 mx-3">
            <label htmlFor="email">
              Email:
              <span className="text-indigo-200"> {secretary.email}</span>
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="email"
              placeholder="Ingresa el correo de la Secretaría"
              value={emailRef}
              onChange={(e) => setEmialRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para el correo de la Secretaria */}
          <input
            type="submit"
            value="Actualizar Usuario"
            className="button-login text-3xl text-center text-white mt-4 font-bold cursor-pointer"
          />
        </form>
        {/* Fin Form Registro Secretarias */}
      </div>
      {/* Fin Contenedor de Form Registro Secretarias */}
    </div>
  );
}
