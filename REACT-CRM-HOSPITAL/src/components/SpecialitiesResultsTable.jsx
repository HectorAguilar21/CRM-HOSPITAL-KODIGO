import React from "react";
import { Link } from "react-router-dom";

export default function SpecialitiesResultsTable(props) {
  return (
    <tr>
      {/* ID y Nombre en la tabla */}
      <th scope="row">{props.specialities.speciality_id}</th>
      <td>{props.specialities.speciality_name}</td>
      {/* Fin ID y Nombre en la tabla */}
      {/* Boton para Listado de Doctores */}
      <td>
        <button
          type="button"
          className="btn text-white bg-emerald-600 hover:bg-emerald-800"
          data-bs-toggle="modal"
          data-bs-target="#infoDoctores"
        >
          Listado Doctores
        </button>
        {/* Modal Listado de Doctores */}
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
          <div
            className="modal fade"
            id="infoDoctores"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="infoDoctores"
            aria-hidden="true"
          >
            {/* Contenido en modal */}
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1
                    className="modal-title fs-5 font-bold text-indigo-700"
                    id="infoDoctores"
                  >
                    Doctores Disponibles
                  </h1>
                </div>
                <div className="modal-body">
                  <div className="py-2">
                    <p className="font-normal text-indigo-700 text-lg">
                      Doctores disponibles para esta especialidad
                    </p>
                    {/* Lista desordenada para lista doctores en modal */}
                    <p className="text-2xl py-3">
                      <ul>
                        <li>Doctor uno</li>
                        <li>Doctor dos</li>
                      </ul>
                    </p>
                    {/* Fin Lista desordenada para lista doctores en modal */}
                  </div>
                </div>
                {/* Boton para cerrar modal */}
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary bg-indigo-500"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
                {/* Fin Boton para cerrar modal */}
              </div>
            </div>
            {/* Fin Contenido en modal */}
          </div>
        </div>
        {/* Fin Modal Listado de Doctores */}
      </td>
      {/* Fin Boton para Listado de Doctores */}
      {/* Boton para Listado de Hospitales */}
      <td>
        <button
          type="button"
          className="btn text-white bg-emerald-600 hover:bg-emerald-800"
          data-bs-toggle="modal"
          data-bs-target="#infoHospitals"
        >
          Listado Hospitales
        </button>
        {/* Modal Listado de hospitales */}
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
          <div
            className="modal fade"
            id="infoHospitals"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="infoHospitals"
            aria-hidden="true"
          >
            {/* Contenido en modal */}
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1
                    className="modal-title fs-5 font-bold text-indigo-700"
                    id="infoHospitals"
                  >
                    Hospitales Disponibles
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="py-2">
                    <p className="font-normal text-indigo-700 text-lg">
                      Hospitales que tienen la especialidad disponible:
                    </p>
                    {/* Lista desordenada para lista hospitales en modal */}
                    <p className="text-2xl py-3">
                      <ul>
                        <li>Hospital uno</li>
                        <li>Hospital dos</li>
                      </ul>
                    </p>
                    {/* Fin Lista desordenada para lista hospitales en modal */}
                  </div>
                </div>
                {/* Boton para cerrar modal */}
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary bg-indigo-500"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
                {/* Fin Boton para cerrar modal */}
              </div>
            </div>
            {/* Fin Contenido en modal */}
          </div>
        </div>
        {/* Fin Modal Listado de hospitales */}
      </td>
      {/* Fin Boton para Listado de Hospitales */}
      {/* Botones para Acciones de tabla (Editar y Eliminar) */}
      {/* Validacion con ternario para saber en que locacion estamos con useLocation y asi decidir que contenido se muestra */}
      {location.pathname === "/administrator/specialties_panel" && (
        <>
          <td>
            <Link
              to={`/administrator/specialties_edit?id=${props.specialities.id}`}
              type="button"
              className="btn text-white bg-indigo-500 hover:bg-indigo-800"
            >
              Editar
            </Link>
          </td>
          <td>
            <button
              type="button"
              className="btn text-white bg-red-500 hover:bg-red-700"
            >
              Eliminar
            </button>
          </td>
        </>
      )}
      {/* Fin Botones para Acciones de tabla (Editar y Eliminar) */}
    </tr>
  );
}
