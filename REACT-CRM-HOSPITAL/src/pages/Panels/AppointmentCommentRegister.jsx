import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import clienteAxios from "../../config/axios";

export default function AppointmentCommentRegister() {
  //Variable para obtener la ruta actual y realizar validaciones en las vistas
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const idAppointment = searchParams.get("id");

  //States para recoger la informacion de los inputs
  const [commentAppointmentIdRef, setCommentAppointmentIdRef] = useState("");
  const [commentDoctorIdRef, setCommentDoctorIdRef] = useState("");
  const [commentAppointmentRef, setCommentAppointmentRef] = useState("");

  //States para guardar los datos de "obtenerCitas"
  const [appointment, setAppointment] = useState({});

  //Funcion para solicitar la info a la API
  const obtenerCita = async () => {
    try {
      const { data } = await clienteAxios(
        `/api/appointment_information/${idAppointment}`
      );
      setAppointment(data);
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

  //useEffect para ejecutar al menos una vez las solicitudes a la API, cada vez que se visita la pagina
  useEffect(() => {
    obtenerCita();
  }, []);

  //Funcion para colcar la informacion necesaria en el form al dar click en el boton de cargar datos
  const setInputs = () => {
    setCommentAppointmentIdRef(appointment.id);
  };

  //Funcion para enviar el Formulario a traves de un boton y no por el form directamente
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Se guardan los datos que se recogieron en los states, y se pasan a objetos
    const datosForm = {
      comment_appointment_id: commentAppointmentIdRef,
      comment_doctor_id: commentDoctorIdRef,
      comment_appointment: commentAppointmentRef,
    };

    //Try Catch para realizar la peticion y recoger los errores si los hubiese
    try {
      const respuesta = await clienteAxios.post(
        `/api/comment_appointment_information`,
        datosForm
      );
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }

    setCommentDoctorIdRef("");
    setCommentAppointmentRef("");

    swal({
      title: "Realizado",
      text: "Envio de formulario exitosamente",
      icon: "success",
      button: "Aceptar",
    });

    obtenerCita();
  };

  return (
    <div className="bg-white shadow-xl rounded-md mt-10 mx-20 px-5 py-10">
      <h1 className="text-4xl font-black text-center mb-10">
        Registra un Nuevo Comentario
      </h1>
      <div className="flex justify-center mb-4">
        <button
          type="button"
          class="btn text-white bg-sky-700 hover:bg-sky-800"
          onClick={setInputs}
        >
          Cargar datos
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 mx-3">
          <label htmlFor="comment_appointment_id">Cita ID</label>
          <input
            type="text"
            id="comment_appointment_id"
            className="mt-2 w-full p-2 bg-slate-100 rounded-md"
            name="comment_appointment_id"
            placeholder="Ingresa el ID de la cita"
            defaultValue={commentAppointmentIdRef}
            required
          />
        </div>
        <div className="mb-4 mx-3">
          <label htmlFor="comment_user_id">Usuario ID:</label>
          <input
            type="text"
            id="comment_user_id"
            className="mt-2 w-full p-2 bg-slate-100 rounded-md"
            name="comment_user_id"
            placeholder="Ingresa el ID del Usuario que hace el comentario"
            value={commentDoctorIdRef}
            onChange={(e) => setCommentDoctorIdRef(e.target.value)}
            required
          />
        </div>
        <div className="mb-4 mx-3">
          <label htmlFor="comment_appointment">Comentario:</label>
          <textarea
            className="mt-2 w-full p-2 bg-slate-100 rounded-md"
            name="comment_appointment"
            id="comment_appointment"
            placeholder="Ingresa el comentario"
            cols="30"
            rows="4"
            value={commentAppointmentRef}
            onChange={(e) => setCommentAppointmentRef(e.target.value)}
            required
          ></textarea>
        </div>{" "}
        <input
          type="submit"
          value="Crear Comentario"
          className="button-login text-3xl text-center text-white mt-4 font-bold cursor-pointer uppercase"
        />
      </form>
    </div>
  );
}
