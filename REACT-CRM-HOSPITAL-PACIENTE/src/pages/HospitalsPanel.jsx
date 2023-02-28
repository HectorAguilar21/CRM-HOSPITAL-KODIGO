import React from "react";

export default function HospitalsPanel() {
  return (
    <div className=" bg-white rounded-2xl my-5 container-info-citas overflow-auto">
      <h1 className="text-center font-bold text-3xl text-indigo-700 pt-5">
        Hospitales:
      </h1>
      <div className="flex align-items-center p-5 bg-white rounded-2xl container info-container">
        <table class="table text-center align-middle">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Direccion</th>
              <th scope="col">Ciudad</th>
              <th scope="col">Departamento</th>
              <th scope="col">Pais</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr>
              <th scope="row">HNSB</th>
              <td>
                Hospital Nacional General "Enfermera Angélica Vidal de Najarro",
                San Bartolo
              </td>
              <td>
                Centro Urbano San Bartolo Septima Etapa, Boulevard San Bartolo y
                Calle Meléndez, Contiguo a Zona Franca, San Bartolo
              </td>
              <td>Ilopango</td>
              <td>San Salvador</td>
              <td>El Salvador</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
