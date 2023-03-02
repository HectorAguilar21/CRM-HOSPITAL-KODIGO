import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function DoctorsResultsTable(props) {
  //Variable para obtener la ruta actual y realizar validaciones en las vistas
  const location = useLocation();

  return (
    <tr>
      {/* ID y Nombre, correo, usuario y especialidad en la tabla */}
      <th scope="row">{props.doctor.user_id}</th>
      <td>{`${props.doctor.name} ${props.doctor.last_name}`}</td>
      <td>{props.doctor.email}</td>
      {location.pathname === "/administrator/doctors_panel" && (
        <td>{props.doctor.user}</td>
      )}
      <td>{props.doctor.speciality.speciality_name}</td>
      <td>{props.doctor.hospital.hospital_name}</td>
      {/* Fin ID y Nombre, correo, usuario y especialidad en la tabla */}
      {/* Validacion con ternario para saber en que locacion estamos con useLocation y asi decidir que contenido se muestra */}
      {location.pathname === "/administrator/doctors_panel" && (
        <>
          <td>
            <Link
              to={`/administrator/doctors_edit?id=${props.doctor.id}`}
              type="button"
              class="btn text-white bg-indigo-500 hover:bg-indigo-800"
            >
              Editar
            </Link>
          </td>
          <td>
            <button
              type="button"
              class="btn text-white bg-red-500 hover:bg-red-700"
            >
              Eliminar
            </button>
          </td>
        </>
      )}
    </tr>
  );
}
