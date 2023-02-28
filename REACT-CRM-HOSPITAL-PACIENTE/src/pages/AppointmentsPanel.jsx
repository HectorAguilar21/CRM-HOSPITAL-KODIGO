import React from "react";

export default function AppointmentsPanel() {
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
              <td>kldm</td>
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
                            Informacion de la cita
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
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Dicta voluptatem nobis aliquid quod harum
                              voluptatibus, placeat quos suscipit maxime minus
                              omnis repellendus vitae rerum doloremque, tenetur
                              iste! Et, quisquam vel.
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
