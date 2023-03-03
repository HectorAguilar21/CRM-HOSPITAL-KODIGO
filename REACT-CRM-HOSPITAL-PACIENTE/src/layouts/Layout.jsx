import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";

export default function InicioLayout() {
  //Variable para obtener la ruta actual y realizar validaciones en las vistas
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const user = searchParams.get("user");

  //State para guardar los datos de 'obtenerPaciente'
  const [patient, setPatient] = useState({});

  //Funcion para obtener los datos de la API
  const obtenerPaciente = async () => {
    try {
      const { data } = await axios(
        `http://localhost:8000/api/patients/user/${user}`
      );
      setPatient(data);
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

  //useEffect para ejecutar al menos una vez la solicitud a la API, cada vez que se visita la pagina
  useEffect(() => {
    obtenerPaciente();
  }, []);

  //Return del HTML a mostrar
  return (
    <div className="md:flex md:min-h-screen">
      <aside className="side-navbar w-2/6">
        <div className="container container-panel">
          <Link
            className="navbar-brand flex justify-center py-3"
            to={`/?user=${user}&id=${patient.id}`}
          >
            <img
              src="../img/caduceo.png"
              alt="Logo"
              className="img-panel d-inline-block align-text-top"
            />
          </Link>
          <h2 className="font-panel text-3xl text-center text-white">
            HOSPITAL NACIONAL
          </h2>
          <h1 className="font-panel text-4xl text-center text-white py-2">
            PANEL PACIENTE
          </h1>
        </div>
        <hr />
        <nav className="side-navbar-options pt-4">
          <div className="grid grid-cols-1 pb-96">
            <Link
              className={`${
                location.pathname === "/general_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to={`/general_panel/?user=${user}&id=${patient.id}`}
            >
              Panel General
            </Link>
            <Link
              className={`${
                location.pathname === "/appointments_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to={`/appointments_panel/?user=${user}&id=${patient.id}`}
            >
              Panel Citas
            </Link>
            <Link
              className={`${
                location.pathname === "/hospitals_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to={`/hospitals_panel/?user=${user}&id=${patient.id}`}
            >
              Panel Hospitales
            </Link>
            <Link
              className={`${
                location.pathname === "/specialties_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to={`/specialties_panel/?user=${user}&id=${patient.id}`}
            >
              Panel Especialidades
            </Link>
          </div>
        </nav>
      </aside>
      <main className="mx-10 w5/6 w-full">
        <Outlet />
      </main>
    </div>
  );
}
