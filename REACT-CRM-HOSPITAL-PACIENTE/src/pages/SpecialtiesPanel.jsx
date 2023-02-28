import React from "react";

export default function SpecialtiesPanel() {
  return (
    <div className=" bg-white rounded-2xl my-5 container-info-citas overflow-auto">
      <h1 className="text-center font-bold text-3xl text-indigo-700 pt-5">
        Especialidades:
      </h1>
      <div className="flex align-items-center p-5 bg-white rounded-2xl container info-container">
        <table class="table text-center align-middle">
          <thead>
            <tr>
              <th className="w-25" scope="col">
                ID
              </th>
              <th className="w-25" scope="col">
                Nombre
              </th>
              <th className="w-25" scope="col">
                Doctores
              </th>
              <th className="w-25" scope="col">
                Hospitales
              </th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr>
              <th scope="row">HNSB</th>
              <td>Nefrologia</td>
              <td>
                <button
                  type="button"
                  class="btn btn-primary bg-indigo-500"
                  data-bs-toggle="modal"
                  data-bs-target="#infoDoctores"
                >
                  Listado Doctores
                </button>
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
                  <div
                    class="modal fade"
                    id="infoDoctores"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="infoDoctores"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1
                            class="modal-title fs-5 font-bold text-indigo-700"
                            id="infoDoctores"
                          >
                            Doctores Disponibles
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
                              Doctores disponibles para esta especialidad
                            </p>
                            <p className="text-2xl py-3">
                              <ul>
                                <li>Doctor uno</li>
                                <li>Doctor dos</li>
                              </ul>
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
              <td>
                <button
                  type="button"
                  class="btn btn-primary bg-indigo-500"
                  data-bs-toggle="modal"
                  data-bs-target="#infoHospitals"
                >
                  Listado Hospitales
                </button>
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
                  <div
                    class="modal fade"
                    id="infoHospitals"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="infoHospitals"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1
                            class="modal-title fs-5 font-bold text-indigo-700"
                            id="infoHospitals"
                          >
                            Hospitales Disponibles
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
                              Hospitales que tienen la especialidad disponible:
                            </p>
                            <p className="text-2xl py-3">
                              <ul>
                                <li>Hospital uno</li>
                                <li>Hospital dos</li>
                              </ul>
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
