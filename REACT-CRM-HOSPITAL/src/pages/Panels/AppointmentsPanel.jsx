import { useEffect, useState } from "react";
import AppointmentsResultsTable from "../../components/AppointmentsResultsTable";
import clienteAxios from "../../config/axios";

export default function AppointmentsRegisterPanel() {
  //States para recoger la informacion de los inputs
  const [appointmentDoctorIdRef, setAppointmentDoctorIdRef] = useState("");
  const [appointmentSpecialityIdRef, setAppointmentSpecialityIdRef] =
    useState("");
  const [appointmentHospitalIdRef, setAppointmentHospitalIdRef] = useState("");
  const [appointmentPatientIdRef, setAppointmentPatientIdRef] = useState("");
  const [appointmentDateRef, setAppointmentDateRef] = useState("");
  const [appointmentHourRef, setAppointmentHourRef] = useState("");
  const [appointmentDescriptionRef, setAppointmentDescriptionRef] =
    useState("");
  const [appointmentStatusRef, setAppointmentStatusRef] = useState("");

  //States para guardar los datos de "obtenerHospitales", "obtenerEspecialidades" "obtenerEstados" Axios
  const [hospitals, setHospitals] = useState([]);
  const [specialities, setSpecialities] = useState([]);
  const [status, setStatus] = useState([]);

  //States para guardar los datos de "obtenerCitas"
  const [appointments, setAppointments] = useState([]);

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

  //Funcion para solicitar la info a la API
  const obtenerEstados = async () => {
    try {
      const { data } = await clienteAxios("/api/status_type_information");
      setStatus(data);
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

  //Funcion para solicitar la info a la API
  const obtenerCitas = async () => {
    try {
      const { data } = await clienteAxios("/api/appointment_information");
      setAppointments(data);
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

  //useEffect para ejecutar al menos una vez las solicitudes a la API, cada vez que se visita la pagina
  useEffect(() => {
    obtenerHospitales();
    obtenerEspecialidades();
    obtenerEstados();
    obtenerCitas();
  }, []);

  //Funcion para enviar el Formulario a traves de un boton y no por el form directamente
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Se guardan los datos que se recogieron en los states, y se pasan a objetos
    const datosForm = {
      appointment_doctor_id: appointmentDoctorIdRef,
      appointment_speciality_id: appointmentSpecialityIdRef,
      appointment_hospital_id: appointmentHospitalIdRef,
      appointment_patient_id: appointmentPatientIdRef,
      appointment_date: appointmentDateRef,
      appointment_hour: appointmentHourRef,
      appointment_description: appointmentDescriptionRef,
      appointment_status: appointmentStatusRef,
    };

    //Try Catch para realizar la peticion y recoger los errores si los hubiese
    try {
      const respuesta = await clienteAxios.post(
        "/api/appointment_information",
        datosForm
      );
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }

    setAppointmentDoctorIdRef("");
    setAppointmentSpecialityIdRef("");
    setAppointmentHospitalIdRef("");
    setAppointmentPatientIdRef("");
    setAppointmentDateRef("");
    setAppointmentHourRef("");
    setAppointmentDescriptionRef("");
    setAppointmentStatusRef("");

    swal({
      title: "Realizado",
      text: "Envio de formulario exitosamente",
      icon: "success",
      button: "Aceptar",
    });

    obtenerHospitales();
    obtenerEspecialidades();
    obtenerEstados();
    obtenerCitas();
  };

  //Return del HTML a mostrar
  return (
    <div className="">
      {/* Contenedor de Form Registro Citas */}
      <div className="bg-white shadow-xl rounded-md mt-10 mx-20 px-5 py-10">
        <h1 className="text-4xl font-black text-center mb-10">
          Añade nueva Cita
        </h1>
        {/* Form Registro Cita */}
        <form className="grid grid-cols-2" onSubmit={handleSubmit}>
          {/* Input para escribir el Id del Doctor */}
          <div className="mb-4 mx-3">
            <label htmlFor="appointment_doctor_id">Doctor ID</label>
            <input
              type="text"
              id="appointment_doctor_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="appointment_doctor_id"
              placeholder="Ingresa el ID del Doctor"
              value={appointmentDoctorIdRef}
              onChange={(e) => setAppointmentDoctorIdRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para escribir el Id del Doctor */}
          {/* Input para la especialidad de la cita */}
          <div className="mb-4 mx-3">
            <label htmlFor="appointment_speciality_id">Especialidad ID:</label>
            <select
              id="appointment_speciality_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              value={appointmentSpecialityIdRef}
              onChange={(e) => setAppointmentSpecialityIdRef(e.target.value)}
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
          {/* Fin Input para la especialidad de la cita */}
          {/* Input para el Hospital de la cita */}
          <div className="mb-4 mx-3">
            <label htmlFor="appointment_hospital_id">Hospital ID:</label>
            <select
              id="appointment_hospital_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              value={appointmentHospitalIdRef}
              onChange={(e) => setAppointmentHospitalIdRef(e.target.value)}
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
          {/* Fin Input para el Hospital de la cita */}
          {/* Input para el ID del paciente */}
          <div className="mb-4 mx-3">
            <label htmlFor="appointment_patient_id">Paciente ID:</label>
            <input
              type="text"
              id="appointment_patient_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="appointment_patient_id"
              placeholder="Ingresa el ID del paciente"
              value={appointmentPatientIdRef}
              onChange={(e) => setAppointmentPatientIdRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para el ID del paciente */}
          {/* Input para la fecha de la cita */}
          <div className="mb-4 mx-3">
            <label htmlFor="appointment_date">Fecha:</label>
            <input
              type="date"
              id="appointment_date"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="appointment_date"
              placeholder="Ingresa la fecha de la cita"
              value={appointmentDateRef}
              onChange={(e) => setAppointmentDateRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para la fecha de la cita */}
          {/* Input para la hora de la cita */}
          <div className="mb-4 mx-3">
            <label htmlFor="appointment_hour">Hora:</label>
            <input
              type="time"
              id="appointment_hour"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="appointment_hour"
              placeholder="Ingresa la hora de la cita"
              value={appointmentHourRef}
              onChange={(e) => setAppointmentHourRef(e.target.value)}
              required
            />
          </div>{" "}
          {/* Fin Input para la hora de la cita */}
          {/* Input para la Descripcion de la cita */}
          <div className="mb-4 mx-3">
            <label htmlFor="appointment_description">Descripcion:</label>
            <textarea
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="appointment_description"
              id="appointment_description"
              placeholder="Ingresa una breve descripción de la cita"
              cols="30"
              rows="1"
              value={appointmentDescriptionRef}
              onChange={(e) => setAppointmentDescriptionRef(e.target.value)}
              required
            ></textarea>
          </div>{" "}
          {/* Fin Input para la Descripcion de la cita */}
          {/* Input para el estado de la cita */}
          <div className="mb-4 mx-3">
            <label htmlFor="appointment_status">Estado:</label>
            <select
              id="appointment_status"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              value={appointmentStatusRef}
              onChange={(e) => setAppointmentStatusRef(e.target.value)}
              required
            >
              {status.map((status) => (
                <option value={status.id}>{status.status_type_name}</option>
              ))}
            </select>
          </div>
          {/* Fin Input para el estado de la cita */}
          <input
            type="submit"
            value="Crear Cita"
            className="button-login text-3xl text-center text-white mt-4 font-bold cursor-pointer"
          />
        </form>
        {/* Fin Form Registro Citas */}
      </div>
      {/* Fin Contenedor de Form Registro Citas */}
      {/* Contendor de la tabla */}
      <div className=" bg-white rounded-2xl my-5 container-info-citas overflow-auto mt-10 mx-20">
        <h1 className="text-center font-bold text-3xl text-indigo-700 pt-5">
          Registro de citas:
        </h1>
        <div className="flex align-items-center p-5 bg-white rounded-2xl container info-container">
          {/* Tabla */}
          <table class="table text-center align-middle">
            <thead>
              <tr>
                <th scope="col">Cita ID</th>
                <th scope="col">Doctor</th>
                <th scope="col">Especialidad</th>
                <th scope="col">Hospital</th>
                <th scope="col">Paciente</th>
                <th colSpan="2">Estado</th>
                <th colSpan="2">Acciones</th>
              </tr>
            </thead>
            {/* Cuerpo de la tabla que se genera por un map en un componente aparte */}
            <tbody class="table-group-divider">
              {appointments.map((appointment) => (
                <AppointmentsResultsTable
                  key={appointment.id}
                  appointment={appointment}
                />
              ))}
            </tbody>
            {/* Fin Cuerpo de la tabla que se genera por un map en un componente aparte */}
          </table>
          {/* Fin Tabla */}
        </div>
      </div>
    </div>
  );
}
