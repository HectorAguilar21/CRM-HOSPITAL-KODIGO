import axios from "axios";
import React, { useEffect, useState } from "react";
import clienteAxios from "../config/axios";

export default function HospitalsPanel() {
  //States para guardar los datos de "obtenerHospitales" Axios
  const [hospitals, setHospitals] = useState([]);

  //Funcion para solicitar la info a la API
  const obtenerHospitales = async () => {
    try {
      const { data } = await axios(
        "http://localhost:8000/api/hospital_information"
      );
      setHospitals(data);
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

  //useEffect para ejecutar al menos una vez la solicitud a la API, cada vez que se visita la pagina
  useEffect(() => {
    obtenerHospitales();
  }, []);

  return (
    <div className=" bg-white rounded-2xl my-5 container-info-citas overflow-auto">
      <h1 className="text-center font-bold text-3xl text-indigo-700 pt-5">
        Hospitales:
      </h1>
      <div className="flex align-items-center p-5 bg-white rounded-2xl container info-container">
        <table className="table text-center align-middle">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Direccion</th>
              <th scope="col">Ciudad</th>
              <th scope="col">Departamento</th>
              <th scope="col">País</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {hospitals.map((hospital) => (
              <tr>
                <th scope="row">{hospital.hospital_id}</th>
                <td>{hospital.hospital_name}</td>
                <td>{hospital.hospital_address}</td>
                <td>{hospital.hospital_city}</td>
                <td>{hospital.hospital_department}</td>
                <td>{hospital.hospital_country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
