import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HospitalsResultsTable from "../../components/HospitalsResultsTable";
import clienteAxios from "../../config/axios";

export default function HospitalEdit() {
  //Variable para obtener la ruta actual y realizar validaciones en las vistas
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const idHospital = searchParams.get("id");

  //States para recoger la informacion de los inputs
  const [hospitalIdRef, setHospitalIdRef] = useState("");
  const [hospitalNameRef, setHospitalNameRef] = useState("");
  const [hospitalAddressRef, setHospitalAddressRef] = useState("");
  const [hospitalCityRef, setHospitalCityRef] = useState("");
  const [hospitalDepartmentRef, setHospitalDepartmentRef] = useState("");
  const [hospitalCountryRef, setHospitalCountryRef] = useState("");

  //States para guardar los datos de "obtenerHospital" Axios
  const [hospital, setHospital] = useState([]);

  //Funcion para solicitar la info a la API
  const obtenerHospital = async () => {
    try {
      const { data } = await clienteAxios(
        `/api/hospital_information/${idHospital}`
      );
      setHospital(data);
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

  //useEffect para ejecutar al menos una vez la solicitud a la API, cada vez que se visita la pagina
  useEffect(() => {
    obtenerHospital();
  }, []);

  //Funcion para enviar el Formulario a traves de un boton y no por el form directamente
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Se guardan los datos que se recogieron en los states, y se pasan a objetos
    const datos = {
      hospital_id: hospitalIdRef,
      hospital_name: hospitalNameRef,
      hospital_address: hospitalAddressRef,
      hospital_city: hospitalCityRef,
      hospital_department: hospitalDepartmentRef,
      hospital_country: hospitalCountryRef,
    };
    console.log(datos);

    //Try Catch para realizar la peticion y recoger los errores si los hubiese
    try {
      const respuesta = await clienteAxios.put(
        `/api/hospital_information/${idHospital}`,
        datos
      );
      console.log(respuesta);
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-md mt-10 mx-20 px-5 py-10">
      <h1 className="text-4xl font-black text-center mb-10">Actualizacion</h1>
      {/* Form Registro Hospitales */}
      <form className="grid grid-cols-2" onSubmit={handleSubmit}>
        {/* Input para escribir el ID del hospital */}
        <div className="mb-4 mx-3 mt-">
          <label htmlFor="hospital_id">
            Hospital ID:
            <span className="text-indigo-200"> {hospital.hospital_id}</span>
          </label>
          <input
            type="text"
            id="hospital_id"
            className="mt-2 w-full p-2 bg-slate-100 rounded-md"
            name="hospital_id"
            placeholder="Ingresa el ID del Hospital"
            value={hospitalIdRef}
            onChange={(e) => setHospitalIdRef(e.target.value)}
            required
          />
        </div>
        {/* Fin Input para escribir el ID del hospital */}
        {/* Input para escribir el nombre del hospital */}
        <div className="mb-4 mx-3">
          <label htmlFor="hospital_name">
            Nombre del Hospital:
            <span className="text-indigo-200"> {hospital.hospital_name}</span>
          </label>
          <input
            type="text"
            id="hospital_name"
            className="mt-2 w-full p-2 bg-slate-100 rounded-md"
            name="hospital_name"
            placeholder="Ingresa el nombre del Hospital"
            value={hospitalNameRef}
            onChange={(e) => setHospitalNameRef(e.target.value)}
            required
          />
        </div>
        {/* Fin Input para escribir el nombre del hospital */}
        {/* Input para escribir la direccion del hospital */}
        <div className="mb-4 mx-3">
          <label htmlFor="hospital_address">
            Direccion:
            <span className="text-indigo-200">
              {" "}
              {hospital.hospital_address}
            </span>
          </label>
          <input
            type="text"
            id="hospital_address"
            className="mt-2 w-full p-2 bg-slate-100 rounded-md"
            name="hospital_address"
            placeholder="Ingresa la direccion del hospital, sin ciudad, ni departamento, ni pais"
            value={hospitalAddressRef}
            onChange={(e) => setHospitalAddressRef(e.target.value)}
            required
          />
        </div>
        {/* Fin Input para escribir la direccion del hospital */}
        {/* Input para escribir la ciudad del hospital */}
        <div className="mb-4 mx-3">
          <label htmlFor="hospital_city">
            Ciudad:
            <span className="text-indigo-200"> {hospital.hospital_city}</span>
          </label>
          <input
            type="text"
            id="hospital_city"
            className="mt-2 w-full p-2 bg-slate-100 rounded-md"
            name="hospital_city"
            placeholder="Ingresa la ciudad del hospital"
            value={hospitalCityRef}
            onChange={(e) => setHospitalCityRef(e.target.value)}
            required
          />
        </div>
        {/* Fin Input para escribir la ciudad del hospital */}
        {/* Input para escribir el departamento del hospital */}
        <div className="mb-4 mx-3">
          <label htmlFor="hospital_department">
            Departamento:
            <span className="text-indigo-200">
              {" "}
              {hospital.hospital_department}
            </span>
          </label>
          <select
            id="hospital_department"
            className="mt-2 w-full p-2 bg-slate-100 rounded-md"
            value={hospitalDepartmentRef}
            onChange={(e) => setHospitalDepartmentRef(e.target.value)}
            required
          >
            <option value="--Default--" selected>
              --Seleccione una opcion--
            </option>
            <option value="Ahuachapan" name="hospital_department">
              Ahuachapan
            </option>
            <option value="Cabañas" name="hospital_department">
              Cabañas
            </option>
            <option value="Chalatenango" name="hospital_department">
              Chalatenango
            </option>
            <option value="Cuscatlan" name="hospital_department">
              Cuscatlan
            </option>
            <option value="La Libertad" name="hospital_department">
              La Libertad
            </option>
            <option value="Morazan" name="hospital_department">
              Morazan
            </option>
            <option value="La Paz" name="hospital_department">
              La Paz
            </option>
            <option value="Santa Ana" name="hospital_department">
              Santa Ana
            </option>
            <option value="San Miguel" name="hospital_department">
              San Miguel
            </option>
            <option value="San Salvador" name="hospital_department">
              San Salvador
            </option>
            <option value="San Vicente" name="hospital_department">
              San Vicente
            </option>
            <option value="Sonsonate" name="hospital_department">
              Sonsonate
            </option>
            <option value="La Union" name="hospital_department">
              La Union
            </option>
            <option value="Usulutan" name="hospital_department">
              Usulutan
            </option>
          </select>
        </div>
        {/* Fin Input para escribir el departamento del hospital */}
        {/* Input para escribir el pais del hospital */}
        <div className="mb-4 mx-3">
          <label htmlFor="hospital_country">
            Pais:
            <span className="text-indigo-200">
              {" "}
              {hospital.hospital_country}
            </span>
          </label>
          <select
            id="hospital_country"
            className="mt-2 w-full p-2 bg-slate-100 rounded-md"
            value={hospitalCountryRef}
            onChange={(e) => setHospitalCountryRef(e.target.value)}
            required
          >
            <option value="--Default--" selected>
              --Seleccione una opcion--
            </option>
            <option value="El Salvador" name="hospital_country">
              El Salvador
            </option>
          </select>
        </div>
        {/* Fin Input para escribir el pais del hospital */}
        <input
          type="submit"
          value="Actualizar"
          className="button-login text-3xl text-center text-white mt-4 font-bold cursor-pointer uppercase"
        />
      </form>
      {/* Fin Form Registro Hospitales */}
    </div>
  );
}