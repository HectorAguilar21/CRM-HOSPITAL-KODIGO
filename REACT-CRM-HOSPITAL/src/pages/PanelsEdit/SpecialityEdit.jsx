import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SpecialitiesResultsTable from "../../components/SpecialitiesResultsTable";
import clienteAxios from "../../config/axios";

export default function SpecialityEdit() {
  //Variable para obtener la ruta actual y realizar validaciones en las vistas
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const idSpeciality = searchParams.get("id");

  //States para recoger la informacion de los inputs
  const [specialityIdRef, setSpecialityIdRef] = useState("");
  const [specialityNameRef, setSpecialityNameRef] = useState("");

  //States para guardar los datos de "obtenerEspecialidad" Axios
  const [speciality, setSpeciality] = useState([]);

  //Funcion para solicitar la info a la API
  const obtenerEspecialidad = async () => {
    try {
      const { data } = await clienteAxios(
        `/api/medical_speciality_information/${idSpeciality}`
      );
      setSpeciality(data);
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

  //useEffect para ejecutar al menos una vez la solicitud a la API, cada vez que se visita la pagina
  useEffect(() => {
    obtenerEspecialidad();
  }, []);

  //Funcion para enviar el Formulario a traves de un boton y no por el form directamente
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Se guardan los datos que se recogieron en los states, y se pasan a objetos
    const datos = {
      speciality_id: specialityIdRef,
      speciality_name: specialityNameRef,
    };

    //Try Catch para realizar la peticion y recoger los errores si los hubiese
    try {
      const respuesta = await clienteAxios.put(
        `/api/medical_speciality_information/${idSpeciality}`,
        datos
      );
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-md mt-10 mx-20 px-5 py-10">
      <h1 className="text-4xl font-black text-center mb-10">
        Actualización de Especialidad
      </h1>
      {/* Form Registro Especialidad */}
      <form className="grid grid-cols-2" onSubmit={handleSubmit}>
        {/* Input para escribir el ID de especialidad */}
        <div className="mb-4 mx-3 mt-">
          <label htmlFor="speciality_id">
            Especialidad ID:
            <span className="text-indigo-200"> {speciality.speciality_id}</span>
          </label>
          <input
            type="text"
            id="speciality_id"
            className="mt-2 w-full p-2 bg-slate-100 rounded-md"
            name="speciality_id"
            placeholder="Ingresa el ID de la Especialidad"
            value={specialityIdRef}
            onChange={(e) => setSpecialityIdRef(e.target.value)}
            required
          />
        </div>
        {/* Fin Input para escribir el ID de especialidad */}
        {/* Input para escribir el nombre de especialidad */}
        <div className="mb-4 mx-3">
          <label htmlFor="speciality_name">
            Nombre de la Especialidad:
            <span className="text-indigo-200">
              {" "}
              {speciality.speciality_name}
            </span>
          </label>
          <input
            type="text"
            id="speciality_name"
            className="mt-2 w-full p-2 bg-slate-100 rounded-md"
            name="speciality_name"
            placeholder="Ingresa el nombre de la Espcialidad"
            value={specialityNameRef}
            onChange={(e) => setSpecialityNameRef(e.target.value)}
            required
          />
        </div>
        {/* Fin Input para escribir el nombre de especialidad */}
        <input
          type="submit"
          value="Crear Registro"
          className="button-login text-3xl text-center text-white mt-4 font-bold cursor-pointer uppercase"
        />
      </form>
      {/* Fin Form Registro Especialidad */}
    </div>
  );
}
