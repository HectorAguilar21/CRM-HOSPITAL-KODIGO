import React from "react";

export default function AppointmentsResultsTable(props) {
  return (
    <tr>
      {/* Informacion la tabla */}
      <th scope="row">{props.appointment.id}</th>
      <td>{props.appointment.appointment_doctor_id}</td>
      <td>{props.appointment.appointment_speciality_id}</td>
      <td>{props.appointment.appointment_hospital_id}</td>
      <td>{props.appointment.appointment_patient_id}</td>
      <td>{props.appointment.appointment_date}</td>
      <td>{props.appointment.appointment_hour}</td>
      <td>{props.appointment.appointment_status}</td>
      <td>
        <button type="button" class="btn btn-primary bg-indigo-500">
          Editar Estado
        </button>
      </td>
      <td>
        <button
          type="button"
          class="btn btn-primary bg-indigo-500"
          data-bs-toggle="modal"
          data-bs-target="#seeMore"
        >
          Ver mas
        </button>
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
          <div
            class="modal fade"
            id="seeMore"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1
                    class="modal-title fs-5 font-bold text-indigo-700"
                    id="staticBackdropLabel"
                  >
                    Informcacion de la cita
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div className="py-2">
                    <p className="font-normal text-indigo-700 text-lg">
                      Hora en la que se completo la cita:
                    </p>
                    <p className="text-2xl">18:00</p>
                  </div>{" "}
                  <div className="py-2">
                    <p className="font-normal text-indigo-700 text-lg">
                      Comentario:
                    </p>
                    <p className="text-2xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dicta voluptatem nobis aliquid quod harum voluptatibus,
                      placeat quos suscipit maxime minus omnis repellendus vitae
                      rerum doloremque, tenetur iste! Et, quisquam vel.
                    </p>
                  </div>{" "}
                  <div className="py-2">
                    <p className="font-normal text-indigo-700 text-lg">
                      Doctor que hizo el comentario:
                    </p>
                    <p className="text-2xl">Hector Aguilar</p>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary bg-indigo-500"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td>
        {/* Informacion la tabla */}
        {/* <button type="button" class="btn btn-primary bg-indigo-500">
                    Eliminar
                  </button> */}
        <button
          type="button"
          class="btn btn-primary bg-indigo-500"
          data-bs-toggle="modal"
          data-bs-target="#addComment"
        >
          Comentario
        </button>
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
          <div
            class="modal fade"
            id="addComment"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1
                    class="modal-title fs-5 font-bold text-indigo-700"
                    id="staticBackdropLabel"
                  >
                    Agregar Comentario
                  </h1>
                </div>
                <div class="modal-body">
                  <form className="" onSubmit={""}>
                    <div className="mb-4 mx-3">
                      <label htmlFor="comment_appointment_id">Cita ID</label>
                      <input
                        type="text"
                        id="comment_appointment_id"
                        className="mt-2 w-full p-2 bg-slate-100 rounded-md"
                        name="comment_appointment_id"
                        placeholder="Ingresa el ID del Doctor"
                        value={""}
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
                        placeholder="Ingresa el ID del paciente"
                        value={""}
                        required
                      />
                    </div>
                    <div className="mb-4 mx-3">
                      <label htmlFor="comment_appointment">Comentario:</label>
                      <textarea
                        className="mt-2 w-full p-2 bg-slate-100 rounded-md"
                        name="comment_appointment"
                        id="comment_appointment"
                        placeholder="Ingresa Nombre de La cita"
                        cols="30"
                        rows="4"
                        value={""}
                        required
                      ></textarea>
                    </div>{" "}
                    <input
                      type="submit"
                      value="Crear Cita"
                      className="btn btn-primary bg-indigo-500"
                    />
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary bg-indigo-500"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}
