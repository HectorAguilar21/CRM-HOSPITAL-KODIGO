import React from "react";

export default function PatientsResultsTable(props) {
  return (
    <tr>
      {/* Informacion de la tabla */}

      <th scope="row">{props.patient.user_id}</th>
      <td>{`${props.patient.name} ${props.patient.last_name}`}</td>
      <td>{props.patient.email}</td>
      <td>{props.patient.user}</td>
      <td>
        <button
          type="button"
          class="btn btn-primary bg-indigo-500"
          data-bs-toggle="modal"
          data-bs-target="#infoPersonalDoctor"
        >
          Ver mas
        </button>
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
          <div
            class="modal fade"
            id="infoPersonalDoctor"
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
                    Informacion Paciente (Nombre)
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
                      Numero de Telefono:
                    </p>
                    <p className="text-2xl">76360002</p>
                  </div>{" "}
                  <div className="py-2">
                    <p className="font-normal text-indigo-700 text-lg">
                      Contacto de Emergencia:
                    </p>
                    <p className="text-2xl">454351651</p>
                  </div>{" "}
                  <div className="py-2">
                    <p className="font-normal text-indigo-700 text-lg">
                      Fecha de Nacimiento:
                    </p>
                    <p className="text-2xl">1997-08-23</p>
                  </div>{" "}
                  <div className="py-2">
                    <p className="font-normal text-indigo-700 text-lg">
                      Direccion de Residencia:
                    </p>
                    <p className="text-2xl">
                      calle principal a Radio Vea, pasaje 1 Poligono A casa #2
                    </p>
                  </div>{" "}
                  <div className="py-2">
                    <p className="font-normal text-indigo-700 text-lg">
                      Ciudad:
                    </p>
                    <p className="text-2xl">San Martin</p>
                  </div>{" "}
                  <div className="py-2">
                    <p className="font-normal text-indigo-700 text-lg">
                      Departamento:
                    </p>
                    <p className="text-2xl">San Salvador</p>
                  </div>{" "}
                  <div className="py-2">
                    <p className="font-normal text-indigo-700 text-lg">Pais:</p>
                    <p className="text-2xl">El Salvador</p>
                  </div>{" "}
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
        <button type="button" class="btn btn-primary bg-indigo-500">
          Editar
        </button>
      </td>
      <td>
        <button type="button" class="btn btn-primary bg-indigo-500">
          Eliminar
        </button>
      </td>
      {/* Fin Informacion de la tabla */}
    </tr>
  );
}
