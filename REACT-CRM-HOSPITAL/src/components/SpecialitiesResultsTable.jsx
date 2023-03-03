import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../config/axios";

export default function SpecialitiesResultsTable(props) {
  const [doctors, setDoctors] = useState([]);

  const [hospitalsSpecialities, setHospitalsSpecialities] = useState([]);

  const obtenerDoctores = async () => {
    try {
      const { data } = await clienteAxios("/api/doctor_information");
      console.log(data);
      setDoctors(data);
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

  const obtenerHospitales = async () => {
    try {
      const { data } = await clienteAxios("/api/hospital_specialities");
      console.log(data);
      setHospitalsSpecialities(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerHospitales();
    obtenerDoctores();
  }, []);

  return (
    <tr>
      {/* ID y Nombre en la tabla */}
      <th scope="row">{props.specialities.speciality_id}</th>
      <td>{props.specialities.speciality_name}</td>
      {/* Fin ID y Nombre en la tabla */}
      {/* Boton para Listado de Doctores */}
      <td>
        <ul>
          {doctors.map(
            (doctor) =>
              props.specialities.id !== null &&
              doctor.speciality_id == props.specialities.id && (
                <li>{`♦ ${doctor.name} ${doctor.last_name}`}</li>
              )
          )}
        </ul>
      </td>
      {/* Fin Boton para Listado de Doctores */}
      {/* Boton para Listado de Hospitales */}
      <td>
        <ul>
          {hospitalsSpecialities.map(
            (hospitalSpeciality) =>
              props.specialities.id !== null &&
              hospitalSpeciality.medical_speciality_information_id ==
                props.specialities.id && (
                <li>{`♦ ${hospitalSpeciality.hospital.hospital_name}`}</li>
              )
          )}
        </ul>
      </td>
      {/* Fin Boton para Listado de Hospitales */}
      {/* Botones para Acciones de tabla (Editar y Eliminar) */}
      {/* Validacion con ternario para saber en que locacion estamos con useLocation y asi decidir que contenido se muestra */}
      {location.pathname === "/administrator/specialties_panel" && (
        <>
          <td>
            <Link
              to={`/administrator/specialties_edit?id=${props.specialities.id}`}
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
        </>
      )}
      {/* Fin Botones para Acciones de tabla (Editar y Eliminar) */}
    </tr>
  );
}
