import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

export default function AppointmentsPanel() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const user = searchParams.get("user");
  const [appointments, setAppointments] = useState([]);

  const obtenerCita = async () => {
    try {
      const { data } = await axios(
        `http://localhost:8000/api/appointment_information/patient/${id}`
      );
      console.log(data);
      setAppointments(data);
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

  useEffect(() => {
    obtenerCita();
  }, []);
  return (
    <div className=" bg-white rounded-2xl my-5 container-info-citas overflow-auto">
      <h1 className="text-center font-bold text-3xl text-indigo-700 pt-5">
        Mira el regitro de tus citas aqui:
      </h1>
      <div className="flex align-items-center p-5 bg-white rounded-2xl container info-container">
        <table class="table text-center align-middle">
          <thead>
            <tr>
              <th scope="col">Cita ID</th>
              <th scope="col">Doctor</th>
              <th scope="col">Especialidad</th>
              <th scope="col">Hospital</th>
              <th scope="col">Fecha</th>
              <th scope="col">Hora</th>
              <th scope="col">Estado</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            {appointments.map((appointment) => (
              <tr>
                <th scope="row">{appointment.id}</th>
                <td>{`${appointment.doctor.name} ${appointment.doctor.last_name}`}</td>
                <td>{appointment.speciality.speciality_name}</td>
                <td>{appointment.hospital.hospital_name}</td>
                <td>{appointment.appointment_date}</td>
                <td>{appointment.appointment_hour}</td>
                <td>{appointment.status.status_type_name}</td>
                <td>
                  <Link
                    to={`/comments_panel?user=${user}&id=${appointment.id}`}
                    type="button"
                    class="btn text-white bg-amber-500 hover:bg-amber-600"
                  >
                    Comentario
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
