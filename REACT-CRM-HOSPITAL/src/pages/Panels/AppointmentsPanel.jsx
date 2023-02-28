import { createRef, useState } from "react";
import Alerta from "../../components/Alerta";
import clienteAxios from "../../config/axios";

export default function AppointmentsRegisterPanel() {
  const appointmentDoctorIdRef = createRef();
  const appointmentSpecialityIdRef = createRef();
  const appointmentHospitalIdRef = createRef();
  const appointmentPatientIdRef = createRef();
  const appointmentDateRef = createRef();
  const appointmentHourRef = createRef();
  const appointmentDescriptionRef = createRef();
  const appointmentStatusRef = createRef();

  const [errores, setErrores] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const datosForm = {
      appointment_doctor_id: appointmentDoctorIdRef.current.value,
      appointment_speciality_id: appointmentSpecialityIdRef.current.value,
      appointment_hospital_id: appointmentHospitalIdRef.current.value,
      appointment_patient_id: appointmentPatientIdRef.current.value,
      appointment_date: appointmentDateRef.current.value,
      appointment_hour: appointmentHourRef.current.value,
      appointment_description: appointmentDescriptionRef.current.value,
      appointment_status: appointmentStatusRef.current.value,
    };

    console.log(datosForm);
    try {
      const respuesta = await clienteAxios.post("/api/users", datosForm);
      console.log(respuesta);
    } catch (error) {
      setErrores(error.response.data.errors);
    }
  };

  const commentAppointmentIdRef = createRef();
  const commentUserIdRef = createRef();
  const commentAppointmentRef = createRef();

  const handleSubmitModal = async (e) => {
    e.preventDefault();

    const datosFormModal = {
      comment_appointment_id: commentAppointmentIdRef.current.value,
      comment_user_id: commentUserIdRef.current.value,
      comment_appointment: commentAppointmentRef.current.value,
    };
  };

  return (
    <div className="">
      <div className="bg-white shadow-xl rounded-md mt-10 mx-20 px-5 py-10">
        <h1 className="text-4xl font-black text-center mb-10">
          Añade nueva Cita
        </h1>
        <form className="grid grid-cols-2" onSubmit={handleSubmit}>
          {errores
            ? errores.map((error) => <Alerta key={error}>{error}</Alerta>)
            : null}
          <div className="mb-4 mx-3">
            <label htmlFor="appointment_doctor_id">Doctor ID</label>
            <input
              type="text"
              id="appointment_doctor_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="appointment_doctor_id"
              placeholder="Ingresa el ID del Doctor"
              ref={appointmentDoctorIdRef}
              required
            />
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="appointment_speciality_id">Especialidad ID:</label>
            <select
              id="appointment_speciality_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              ref={appointmentSpecialityIdRef}
              required
            >
              <option value="--Default--" selected>
                --Seleccione una opcion--
              </option>
              <option value="1" name="appointment_speciality_id">
                Oftalmologia
              </option>
              <option value="2" name="appointment_speciality_id">
                Neurologia
              </option>
              <option value="3" name="appointment_speciality_id">
                Pediatria
              </option>
              <option value="4" name="appointment_speciality_id">
                Cardiologia
              </option>
              <option value="5" name="appointment_speciality_id">
                Nefrologia
              </option>
              <option value="6" name="appointment_speciality_id">
                Endocrinologia
              </option>
            </select>
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="appointment_hospital_id">Hospital ID:</label>
            <select
              id="appointment_hospital_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              ref={appointmentHospitalIdRef}
              required
            >
              <option value="--Default--" selected>
                --Seleccione una opcion--
              </option>
              <option value="1" name="appointment_hospital_id">
                Hospital Nacional "Dr. Juan José Fernández", Zacamil
              </option>
              <option value="2" name="appointment_hospital_id">
                Hospital Nacional Especializado de Niños "Benjamín Bloom
              </option>
              <option value="3" name="appointment_hospital_id">
                Hospital Nacional General "Enfermera Angélica Vidal de Najarro",
                San Bartolo
              </option>
              <option value="4" name="appointment_hospital_id">
                Hospital Nacional General "San Rafael", La Libertad
              </option>
              <option value="5" name="appointment_hospital_id">
                Hospital Nacional Regional "San Juan de Dios", Santa Ana
              </option>
              <option value="6" name="appointment_hospital_id">
                Hospital Nacional "Nuestra Señora de Fátima" de Cojutepeque.
              </option>
            </select>
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="appointment_patient_id">Paciente ID:</label>
            <input
              type="text"
              id="appointment_patient_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="appointment_patient_id"
              placeholder="Ingresa el ID del paciente"
              ref={appointmentPatientIdRef}
              required
            />
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="appointment_date">Fecha:</label>
            <input
              type="date"
              id="appointment_date"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="appointment_date"
              placeholder="Ingresa los nombres del Administrador"
              ref={appointmentDateRef}
              required
            />
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="appointment_hour">Hora:</label>
            <input
              type="time"
              id="appointment_hour"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="appointment_hour"
              placeholder="Ingresa los nombres del Administrador"
              ref={appointmentHourRef}
              required
            />
          </div>{" "}
          <div className="mb-4 mx-3">
            <label htmlFor="appointment_description">Descripcion:</label>
            <textarea
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="appointment_description"
              id="appointment_description"
              placeholder="Ingresa Nombre de La cita"
              cols="30"
              rows="1"
              ref={appointmentDescriptionRef}
              required
            ></textarea>
          </div>{" "}
          <div className="mb-4 mx-3">
            <label htmlFor="appointment_status">Estado:</label>
            <select
              id="appointment_status"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              ref={appointmentStatusRef}
              required
            >
              <option value="1" name="appointment_status" selected>
                Pendiente
              </option>
              <option value="2" name="appointment_status">
                Atrasada
              </option>
              <option value="3" name="appointment_status">
                Pospuesta
              </option>
              <option value="4" name="appointment_status">
                Cerrada
              </option>
            </select>
          </div>
          <input
            type="submit"
            value="Crear Cita"
            className="button-login text-3xl text-center text-white mt-4 font-bold cursor-pointer"
          />
        </form>
      </div>
      <div className=" bg-white rounded-2xl my-5 container-info-citas overflow-auto mt-10 mx-20">
        <h1 className="text-center font-bold text-3xl text-indigo-700 pt-5">
          Registro de citas:
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
                <th colSpan="2">Estado</th>
                <th colSpan="2">Acciones</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr>
                <th scope="row">1</th>
                <td>Doctor Name</td>
                <td>Doctor Speciality</td>
                <td>
                  <a
                    className="text-blue-700 hover:underline hover:text-indigo-500"
                    href=""
                    data-bs-toggle="modal"
                    data-bs-target="#infoHospital"
                  >
                    Zacamil
                  </a>
                  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
                    <div
                      class="modal fade"
                      id="infoHospital"
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
                              Informacion Hospital
                            </h1>
                          </div>
                          <div class="modal-body">
                            <div className="py-2">
                              <p className="font-normal text-indigo-700 text-lg">
                                Codigo Hospital:
                              </p>
                              <p className="text-2xl">HNZ</p>
                            </div>
                            <div className="py-2">
                              <p className="font-normal text-indigo-700 text-lg">
                                Nombre Hospital:
                              </p>
                              <p className="text-2xl">
                                Hospital Nacional Zacamil
                              </p>
                            </div>
                            <div className="py-2">
                              <p className="font-normal text-indigo-700 text-lg">
                                Direccion:
                              </p>
                              <p className="text-2xl">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Eaque qui eligendi minus.
                              </p>
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
                <td>fecha</td>
                <td>@mdo</td>
                <td>Pendiente</td>
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
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dicta voluptatem nobis aliquid
                                quod harum voluptatibus, placeat quos suscipit
                                maxime minus omnis repellendus vitae rerum
                                doloremque, tenetur iste! Et, quisquam vel.
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
                            <form className="" onSubmit={handleSubmitModal}>
                              {errores
                                ? errores.map((error) => (
                                    <Alerta key={error}>{error}</Alerta>
                                  ))
                                : null}
                              <div className="mb-4 mx-3">
                                <label htmlFor="comment_appointment_id">
                                  Cita ID
                                </label>
                                <input
                                  type="text"
                                  id="comment_appointment_id"
                                  className="mt-2 w-full p-2 bg-slate-100 rounded-md"
                                  name="comment_appointment_id"
                                  placeholder="Ingresa el ID del Doctor"
                                  ref={commentAppointmentIdRef}
                                  required
                                />
                              </div>
                              <div className="mb-4 mx-3">
                                <label htmlFor="comment_user_id">
                                  Usuario ID:
                                </label>
                                <input
                                  type="text"
                                  id="comment_user_id"
                                  className="mt-2 w-full p-2 bg-slate-100 rounded-md"
                                  name="comment_user_id"
                                  placeholder="Ingresa el ID del paciente"
                                  ref={commentUserIdRef}
                                  required
                                />
                              </div>
                              <div className="mb-4 mx-3">
                                <label htmlFor="comment_appointment">
                                  Comentario:
                                </label>
                                <textarea
                                  className="mt-2 w-full p-2 bg-slate-100 rounded-md"
                                  name="comment_appointment"
                                  id="comment_appointment"
                                  placeholder="Ingresa Nombre de La cita"
                                  cols="30"
                                  rows="4"
                                  ref={commentAppointmentRef}
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
