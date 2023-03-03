import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SecretaryPanelLayout() {
  //Variable para obtener la ruta actual y realizar validaciones en las vistas
  const location = useLocation();

  // HTML a renderizar
  return (
    <div className="md:flex md:min-h-screen">
      {/* SideBar */}
      <aside className="side-navbar md:w-1/5">
        {/* Imagen Link y texto inferior */}
        <div className="container container-panel">
          <Link
            className="navbar-brand flex justify-center py-3"
            to="/secretary"
          >
            <img
              src="../img/mostrador.png"
              alt="Logo"
              className="img-panel d-inline-block align-text-top"
            />
          </Link>
          <h2 className="font-panel text-3xl text-center text-white">
            HOSPITAL NACIONAL
          </h2>
          <h1 className="font-panel text-4xl text-center text-white py-2">
            PANEL DE SECRETARÍA
          </h1>
        </div>
        {/* Fin Imagen Link y texto inferior */}
        <hr />
        {/* Botones con enlace a los diferentes Paneles */}
        <nav className="side-navbar-options pt-4">
          <div className="grid grid-cols-1 pb-96">
            <Link
              className={`${
                location.pathname === "/secretary/general_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to="/secretary/general_panel"
            >
              Panel General
            </Link>
            <Link
              className={`${
                location.pathname === "/secretary/doctors_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to="/secretary/doctors_panel"
            >
              Doctores
            </Link>
            <Link
              className={`${
                location.pathname === "/secretary/patients_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to="/secretary/patients_panel"
            >
              Pacientes
            </Link>
            <Link
              className={`${
                location.pathname === "/secretary/appointment_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to="/secretary/appointment_panel"
            >
              Panel Citas
            </Link>
            <Link
              className={`${
                location.pathname === "/secretary/hospital_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to="/secretary/hospital_panel"
            >
              Panel Hospitales
            </Link>
            <Link
              className={`${
                location.pathname === "/secretary/specialties_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to="/secretary/specialties_panel"
            >
              Panel Especialidades
            </Link>
          </div>
        </nav>
        {/* Fin Botones con enlace a los diferentes Paneles */}
      </aside>
      {/* Fin SideBar */}
      {/* Informacion que se renderiza segun el panel seleccionado y enviado al router */}
      <main className="mx-auto w-full max-h-screen overflow-auto">
        <Outlet />
      </main>
      {/* Fin Informacion que se renderiza segun el panel seleccionado y enviado al router */}
    </div>
  );
}
