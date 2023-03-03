import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SpecialitiesResultsTable from "../../components/SpecialitiesResultsTable";
import clienteAxios from "../../config/axios";

export default function SpecialtiesRegisterPanel() {
  //Variable para obtener la ruta actual y realizar validaciones en las vistas
  const location = useLocation();

  //States para recoger la informacion de los inputs
  const [specialityIdRef, setSpecialityIdRef] = useState("");
  const [specialityNameRef, setSpecialityNameRef] = useState("");

  //States para guardar los datos de "obtenerEspecialidades" Axios
  const [specialities, setSpecialities] = useState([]);

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

  //useEffect para ejecutar al menos una vez la solicitud a la API, cada vez que se visita la pagina
  useEffect(() => {
    obtenerEspecialidades();
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
      const respuesta = await clienteAxios.post(
        "/api/medical_speciality_information",
        datos
      );
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }

    setSpecialityIdRef("");
    setSpecialityNameRef("");

    swal({
      title: "Realizado",
      text: "Envio de formulario exitosamente",
      icon: "success",
      button: "Aceptar",
    });

    obtenerEspecialidades();
  };

  //Return del HTML a mostrar
  return (
    <div className="">
      {/* Validacion con ternario para saber en que locacion estamos con useLocation y asi decidir que contenido se muestra */}
      {location.pathname === "/administrator/specialties_panel" ? (
        <>
          {/* Informacion que le aparece unicamente al rol de administrador */}
          {/* Contenedor de Form Registro Especialidad */}
          <div className="bg-white shadow-xl rounded-md mt-10 mx-20 px-5 py-10">
            <h1 className="text-4xl font-black text-center mb-10">
              Registra una nueva Especialidad
            </h1>
            {/* Form Registro Especialidad */}
            <form className="grid grid-cols-2" onSubmit={handleSubmit}>
              {/* Input para escribir el ID de especialidad */}
              <div className="mb-4 mx-3 mt-">
                <label htmlFor="speciality_id">Especialidad ID:</label>
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
          {/* Fin Contenedor de Form Registro Especialidad */}
          {/* Contendor de la tabla */}
          <div className=" bg-white rounded-2xl my-5 container-info-citas overflow-auto mt-10 mx-20">
            <h1 className="text-center font-bold text-3xl text-indigo-700 pt-5">
              Especialidades:
            </h1>
            <div className="flex align-items-center p-5 bg-white rounded-2xl container info-container">
              <table className="table text-center align-middle">
                <thead>
                  <tr>
                    <th className="w-25" scope="col">
                      ID
                    </th>
                    <th className="w-25" scope="col">
                      Nombre
                    </th>
                    <th className="w-25" scope="col">
                      Doctores
                    </th>
                    <th className="w-25" scope="col">
                      Hospitales
                    </th>
                    <th colSpan="2">Acciones</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {specialities.map((specialities) => (
                    <SpecialitiesResultsTable
                      key={specialities.id}
                      specialities={specialities}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Fin Contendor de la tabla */}
          {/* Fin Informacion que le aparece unicamente al rol de administrador */}
        </>
      ) : (
        <>
          {/* Informacion que le aparece a cualquiera que esta logeado */}
          <div className=" bg-white rounded-2xl my-5 container-info-citas overflow-auto mt-10 mx-20">
            <h1 className="text-center font-bold text-3xl text-indigo-700 pt-5">
              Especialidades:
            </h1>
            <div className="flex align-items-center p-5 bg-white rounded-2xl container info-container">
              {/* Tabla */}
              <table className="table text-center align-middle">
                <thead>
                  <tr>
                    <th className="w-25" scope="col">
                      ID
                    </th>
                    <th className="w-25" scope="col">
                      Nombre
                    </th>
                    <th className="w-25" scope="col">
                      Doctores
                    </th>
                    <th className="w-25" scope="col">
                      Hospitales
                    </th>
                  </tr>
                </thead>
                {/* Cuerpo de la tabla que se genera por un map en un componente aparte */}
                <tbody className="table-group-divider">
                  {specialities.map((specialities) => (
                    <SpecialitiesResultsTable
                      key={specialities.id}
                      specialities={specialities}
                    />
                  ))}
                </tbody>
                {/* Fin Cuerpo de la tabla que se genera por un map en un componente aparte */}
              </table>
              {/* Fin Tabla */}
            </div>
          </div>
          {/* Informacion que le aparece a cualquiera que esta logeado */}
        </>
      )}
    </div>
  );
}
