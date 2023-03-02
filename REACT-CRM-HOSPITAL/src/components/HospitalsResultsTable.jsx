import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function HospitalsResultsTable(props) {
  //Variable para obtener la ruta actual y realizar validaciones en las vistas
  const location = useLocation();

  return (
    <tr>
      {/* Informacion de la tabla */}
      <th scope="row">{props.hospital.hospital_id}</th>
      <td>{props.hospital.hospital_name}</td>
      <td>{props.hospital.hospital_address}</td>
      <td>{props.hospital.hospital_city}</td>
      <td>{props.hospital.hospital_department}</td>
      <td>{props.hospital.hospital_country}</td>
      {/* Fin Informacion la tabla */}
      {/* Botones para Acciones de tabla (Editar y Eliminar) */}
      {/* Validacion con ternario para saber en que locacion estamos con useLocation y asi decidir que contenido se muestra */}
      {location.pathname === "/administrator/hospital_panel" && (
        <>
          <td>
            <Link
              to={`/administrator/hospitals_edit?id=${props.hospital.id}`}
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
