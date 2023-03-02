import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function AppointmentsResultsTable(props) {
  //Variable para obtener la ruta actual y realizar validaciones en las vistas
  const location = useLocation();

  //Se define una variable Path para guardar el resultado del switch
  let pathEditStatus;
  let pathAppointmentsComments;
  let pathAppointmentsCommentsAdd;

  //Se realiza u switch para validar la ruta actual y asi elegir el path de redireccionamiento
  switch (location.pathname) {
    case "/administrator/appointment_panel":
      pathEditStatus = "/administrator/appointments_editStatus";
      pathAppointmentsComments = "/administrator/appointment_comment";
      pathAppointmentsCommentsAdd = "/administrator/appointment_comment_add";
      break;
    case "/doctor/appointment_panel":
      pathEditStatus = "/doctor/appointments_editStatus";
      pathAppointmentsComments = "/doctor/appointment_comment";
      pathAppointmentsCommentsAdd = "/doctor/appointment_comment_add";
      break;
    case "/secretary/appointment_panel":
      pathEditStatus = "/secretary/appointments_editStatus";
      pathAppointmentsComments = "/secretary/appointment_comment";
      pathAppointmentsCommentsAdd = "/secretary/appointment_comment_add";
      break;
    default:
      pathEditStatus = "http://localhost:5173";
      break;
  }
  return (
    <tr>
      {/* Informacion la tabla */}
      <th scope="row">{props.appointment.id}</th>
      <td>{props.appointment.doctor.name}</td>
      <td>{props.appointment.speciality.speciality_name}</td>
      <td>{props.appointment.hospital.hospital_name}</td>
      <td>{props.appointment.patient.name}</td>
      <td>{props.appointment.status.status_type_name}</td>
      <td>
        <Link
          to={`${pathEditStatus}?id=${props.appointment.id}`}
          type="button"
          class="btn text-white bg-indigo-500 hover:bg-indigo-800"
        >
          Editar Estado
        </Link>
      </td>
      <td>
        <Link
          to={`${pathAppointmentsComments}?id=${props.appointment.id}`}
          type="button"
          class="btn text-white bg-sky-700 hover:bg-sky-800"
        >
          Ver mas
        </Link>
      </td>
      <td>
        <Link
          to={`${pathAppointmentsCommentsAdd}?id=${props.appointment.id}`}
          type="button"
          class="btn text-white bg-amber-500 hover:bg-amber-600"
        >
          Comentario
        </Link>
      </td>
    </tr>
  );
}
