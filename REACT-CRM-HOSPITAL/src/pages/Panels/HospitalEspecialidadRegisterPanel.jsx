import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SpecialitiesResultsTable from "../../components/SpecialitiesResultsTable";
import clienteAxios from "../../config/axios";

export default function HospitalEspecialidadRegisterPanel() {
  //Variable para obtener la ruta actual y realizar validaciones en las vistas
  const location = useLocation();

  //States para recoger la informacion de los inputs
  const [hospitalIdRef, setHospitalIdRef] = useState("");
  const [specialityIdRef, setSpecialityIdRef] = useState("");

  //States para guardar los datos de "obtenerHospitales" y "obtenerEspecialidades" Axios
  const [hospitals, setHospitals] = useState([]);
  const [specialities, setSpecialities] = useState([]);

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

  //useEffect para ejecutar al menos una vez las solicitudes a la API, cada vez que se visita la pagina
  useEffect(() => {
    obtenerHospitales();
    obtenerEspecialidades();
  }, []);

  //Funcion para enviar el Formulario a traves de un boton y no por el form directamente
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Se guardan los datos que se recogieron en los states, y se pasan a objetos
    const datos = {
      hospital_information_id: hospitalIdRef,
      medical_speciality_information_id: specialityIdRef,
    };

    //Try Catch para realizar la peticion y recoger los errores si los hubiese
    try {
      const respuesta = await clienteAxios.post(
        "/api/hospital_specialities",
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

    setHospitalIdRef("");
    setSpecialityIdRef("");

    obtenerHospitales();
    obtenerEspecialidades();
  };

  //Return del HTML a mostrar
  return (
    <div className="">
      {/* Validacion con ternario para saber en que locacion estamos con useLocation y asi decidir que contenido se muestra */}
      {location.pathname === "/administrator/hospital_specialties_panel" && (
        <>
          {/* Informacion que le aparece unicamente al rol de administrador */}
          {/* Contenedor de Form Registro Especialidad */}
          <div className="bg-white shadow-xl rounded-md mt-10 mx-20 px-5 py-10">
            <h1 className="text-4xl font-black text-center mb-10">
              Registra una nueva Relación Hospital-Especialidad
            </h1>
            {/* Form Registro Especialidad */}
            <form
              className="grid grid-cols-2"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Input para seleccionar el hospital */}
              <div className="mb-4 mx-3">
                <label htmlFor="hospital_speciality_id">Hospital:</label>
                <select
                  id="hospital_speciality_id"
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
              {/* Fin Input para seleccionar el hospital */}
              {/* Input para seleccionar la especialidad */}
              <div className="mb-4 mx-3">
                <label htmlFor="speciality_speciality_id">Especialidad:</label>
                <select
                  id="speciality_speciality_id"
                  className="mt-2 w-full p-2 bg-slate-100 rounded-md"
                  value={specialityIdRef}
                  onChange={(e) => setSpecialityIdRef(e.target.value)}
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
              <input
                type="submit"
                value="Agregar Relación"
                className="button-login text-3xl text-center text-white mt-4 font-bold cursor-pointer uppercase"
              />
            </form>
            {/* Fin Form Registro Especialidad */}
          </div>
        </>
      )}
    </div>
  );
}
