import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import clienteAxios from "../../config/axios";

export default function DoctorEdit() {
  //Variable para obtener la ruta actual y realizar validaciones en las vistas
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const idDoctor = searchParams.get("id");

  //States para recoger la informacion de los inputs
  const [typeIdRef, setTypeIdRef] = useState("2");
  const [userIdRef, setUserIdRef] = useState("");
  const [nameRef, setNameRef] = useState("");
  const [lastNameRef, setLastNameRef] = useState("");
  const [specialityRef, setSpecialityRef] = useState("");
  const [hospitalRef, setHospitalRef] = useState("");
  const [userRef, setUserRef] = useState("");
  const [emailRef, setEmailRef] = useState("");

  //States para guardar los datos de "obtenerHospitales" y "obtenerEspecialidades" Axios
  const [hospitals, setHospitals] = useState([]);
  const [specialities, setSpecialities] = useState([]);

  //States para guardar los datos del Doctor
  const [doctor, setDoctor] = useState({});

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
  const obtenerEspecialidades = async () => {
    try {
      const { data } = await clienteAxios(
        "/api/medical_speciality_information"
      );
      setSpecialities(data);
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

  //Funcion para solicitar la info a la API
  const obtenerDoctor = async () => {
    try {
      const { data } = await clienteAxios(
        `/api/doctor_information/${idDoctor}`
      );
      setDoctor(data);
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

  //useEffect para ejecutar al menos una vez las solicitudes a la API, cada vez que se visita la pagina
  useEffect(() => {
    obtenerHospitales();
    obtenerEspecialidades();
    obtenerDoctor();
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
      speciality_id: specialityRef,
      hospital_id: hospitalRef,
      user: userRef,
      email: emailRef,
    };

    //Try Catch para realizar la peticion y recoger los errores si los hubiese
    try {
      const respuesta = await clienteAxios.put(
        `/api/doctor_information/${idDoctor}`,
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
    setSpecialityRef("");
    setHospitalRef("");
    setUserRef("");
    setEmailRef("");
  };

  return (
    <div className="bg-white shadow-xl rounded-md mt-10 mx-20 px-5 py-10">
      {/* Contenedor de Form Registro Doctor */}
      <h1 className="text-4xl font-black text-center mb-10">
        Actualización de Doctor
      </h1>
      {/* Form Registro Doctor */}
      <form className="grid grid-cols-2" onSubmit={handleSubmit} noValidate>
        {/* Input para seleccionar el Rol */}
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
        {/* Input para el Id del Doctor */}
        <div className="mb-4 mx-3">
          <label htmlFor="user_id">
            Doctor ID:
            <span className="text-indigo-200"> {doctor.user_id}</span>
          </label>
          <input
            type="text"
            id="user_id"
            className="mt-2 w-full p-2 bg-slate-100 rounded-md"
            name="user_id"
            placeholder="Ingresa el ID del Doctor"
            value={userIdRef}
            onChange={(e) => setUserIdRef(e.target.value)}
            required
          />
        </div>
        {/* Fin Input para el Id del Doctor */}
        {/* Input para el Nombre del Doctor */}
        <div className="mb-4 mx-3">
          <label htmlFor="name">
            Nombres:
            <span className="text-indigo-200"> {doctor.name}</span>
          </label>
          <input
            type="text"
            id="name"
            className="mt-2 w-full p-2 bg-slate-100 rounded-md"
            name="name"
            placeholder="Ingresa los nombres del Doctor"
            value={nameRef}
            onChange={(e) => setNameRef(e.target.value)}
            required
          />
        </div>
        {/* Fin Input para el Nombre del Doctor */}
        {/* Input para el Apellido del Doctor */}
        <div className="mb-4 mx-3">
          <label htmlFor="last_name">
            Apellidos:
            <span className="text-indigo-200"> {doctor.last_name}</span>
          </label>
          <input
            type="text"
            id="last_name"
            className="mt-2 w-full p-2 bg-slate-100 rounded-md"
            name="last_name"
            placeholder="Ingresa los apellidos del Doctor"
            value={lastNameRef}
            onChange={(e) => setLastNameRef(e.target.value)}
            required
          />
        </div>
        {/* Fin Input para el Apellido del Doctor */}
        {/* Input para seleccionar la especialidad */}
        <div className="mb-4 mx-3">
          <label htmlFor="speciality_id">
            Especialidad ID:
            <span className="text-indigo-200">
              {" "}
              {/* {doctor.speciality.speciality_name} */}
            </span>
          </label>
          <select
            id="speciality_id"
            className="mt-2 w-full p-2 bg-slate-100 rounded-md"
            value={specialityRef}
            onChange={(e) => setSpecialityRef(e.target.value)}
            required
          >
            <option value="--Default--" selected>
              --Seleccione una opcion--
            </option>
            {specialities.map((speciality) => (
              <option key={speciality.id} value={speciality.id}>
                {speciality.speciality_name}
              </option>
            ))}
          </select>
        </div>
        {/* Fin Input para seleccionar la especialidad */}
        {/* Input para seleccionar el hospital */}
        <div className="mb-4 mx-3">
          <label htmlFor="hospital_id">
            Hospital ID:
            <span className="text-indigo-200">
              {" "}
              {/* {doctor.hospital.hospital_name} */}
            </span>
          </label>
          <select
            id="hospital_id"
            className="mt-2 w-full p-2 bg-slate-100 rounded-md"
            value={hospitalRef}
            onChange={(e) => setHospitalRef(e.target.value)}
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
        {/* Input para el Usuario del Doctor */}
        <div className="mb-4 mx-3">
          <label htmlFor="user">
            Usuario:
            <span className="text-indigo-200"> {doctor.user}</span>
          </label>
          <input
            type="text"
            id="user"
            className="mt-2 w-full p-2 bg-slate-100 rounded-md"
            name="user"
            placeholder="Ingresa el usuario del Doctor"
            value={userRef}
            onChange={(e) => setUserRef(e.target.value)}
            required
          />
        </div>
        {/* Fin Input para el Usuario del Doctor */}
        {/* Input para el Correo del Doctor */}
        <div className="mb-4 mx-3">
          <label htmlFor="email">
            Email:
            <span className="text-indigo-200"> {doctor.email}</span>
          </label>
          <input
            type="email"
            id="email"
            className="mt-2 w-full p-2 bg-slate-100 rounded-md"
            name="email"
            placeholder="Ingresa el correo del Doctor"
            value={emailRef}
            onChange={(e) => setEmailRef(e.target.value)}
            required
          />
        </div>
        {/* Fin Input para el Correo del Doctor */}
        <input
          type="submit"
          value="Actualiza Usuario"
          className="button-login text-3xl text-center text-white mt-4 font-bold cursor-pointer"
        />
      </form>
      {/* Fin Form Registro Doctores */}
      {/* Fin Contenedor de Form Registro Doctores */}
    </div>
  );
}
