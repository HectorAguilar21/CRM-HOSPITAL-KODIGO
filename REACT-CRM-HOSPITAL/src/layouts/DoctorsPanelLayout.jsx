import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function DoctorsPanelLayout() {
  const location = useLocation();

  return (
    <div className="md:flex md:min-h-screen">
      <aside className="side-navbar md:w-1/6">
        <div className="container container-panel">
          <Link className="navbar-brand flex justify-center py-3" to="/doctor">
            <img
              src="../img/equipo-medico.png"
              alt="Logo"
              className="img-panel d-inline-block align-text-top"
            />
          </Link>
          <h2 className="font-panel text-3xl text-center text-white">
            HOSPITAL NACIONAL
          </h2>
          <h1 className="font-panel text-4xl text-center text-white py-2">
            PANEL DE DOCTORES
          </h1>
        </div>
        <hr />
        <nav className="side-navbar-options pt-4">
          <div className="grid grid-cols-1 pb-96">
            <Link
              className={`${
                location.pathname === "/doctor/general_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to="/doctor/general_panel"
            >
              Panel General
            </Link>
            <Link
              className={`${
                location.pathname === "/doctor/patients_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to="/doctor/patients_panel"
            >
              Pacientes
            </Link>
            <Link
              className={`${
                location.pathname === "/doctor/appointment_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to="/doctor/appointment_panel"
            >
              Panel Citas
            </Link>
            <Link
              className={`${
                location.pathname === "/doctor/appointment_register_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to="/doctor/appointment_register_panel"
            >
              Panel Registro Citas
            </Link>
            <Link
              className={`${
                location.pathname === "/doctor/appoinment_comments_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to="/doctor/appoinment_comments_panel"
            >
              Panel Registro Comentarios Citas
            </Link>
          </div>
        </nav>
      </aside>
      <main className="mx-auto w-2/3">
        <Outlet />
      </main>
    </div>
  );
}
