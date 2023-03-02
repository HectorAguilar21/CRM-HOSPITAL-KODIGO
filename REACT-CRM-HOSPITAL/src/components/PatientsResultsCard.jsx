import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function PatientsResultsCard(props) {
  //Variable para obtener la ruta actual y realizar validaciones en las vistas
  const location = useLocation();

  //Se define una variable Path para guardar el resultado del switch
  let path;

  //Se realiza u switch para validar la ruta actual y asi elegir el path de redireccionamiento
  switch (location.pathname) {
    case "/administrator/patients_panel":
      path = "/administrator/patients_edit";
      break;
    case "/doctor/patients_panel":
      path = "/doctor/patients_edit";
      break;
    case "/secretary/patients_panel":
      path = "/secretary/patients_edit";
      break;
    default:
      path = "http://localhost:5173";
      break;
  }
  return (
    <div className=" flex p-5 m-5 bg-cyan-100 rounded-2xl">
      <div className="w-4/5 float-left font-medium text-lg">
        <div className="text-indigo-600">
          ID:{" "}
          <span className="text-black text-xl">{props.patient.user_id}</span>
        </div>
        <div className="text-indigo-600">
          Nombre:{" "}
          <span className="text-black text-xl">{props.patient.name}</span>
        </div>
        <div className="text-indigo-600">
          Correo:{" "}
          <span className="text-black text-xl">{props.patient.email}</span>
        </div>
        <div className="text-indigo-600">
          Usuario:{" "}
          <span className="text-black text-xl">{props.patient.user}</span>
        </div>
        <div className="text-indigo-600">
          Fecha de nacimiento:{" "}
          <span className="text-black text-xl">
            {props.patient.date_of_birth}
          </span>
        </div>
        <div className="text-indigo-600">
          Numero de telefono:{" "}
          <span className="text-black text-xl">
            {props.patient.number_phone}
          </span>
        </div>
        <div className="text-indigo-600">
          Contacto de emergencia:{" "}
          <span className="text-black text-xl">
            {props.patient.emergency_number_phone}
          </span>
        </div>
        <div className="text-indigo-600">
          Direccion de residencia:{" "}
          <span className="text-black text-xl">{props.patient.address}</span>
        </div>
        <div className="text-indigo-600">
          Ciudad de residencia:{" "}
          <span className="text-black text-xl">{props.patient.city}</span>
        </div>
        <div className="text-indigo-600">
          Departamento de residencia:{" "}
          <span className="text-black text-xl">{props.patient.department}</span>
        </div>
        <div className="text-indigo-600">
          Pais de residencia:{" "}
          <span className="text-black text-xl">{props.patient.country}</span>
        </div>
      </div>
      <div className="w-1/5 border-l-2">
        <div className="m-2 h-full flex justify-center items-center">
          <div>
            <Link
              to={`${path}?id=${props.patient.id}`}
              class="btn text-white bg-indigo-500 hover:bg-indigo-800 w-full m-2"
              type="button"
            >
              Editar
            </Link>
            <button
              class="btn text-white bg-red-500 hover:bg-red-700 w-full m-2"
              type="button"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
