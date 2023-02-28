import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";

export default function InicioLayout() {
  const location = useLocation();

  return (
    <div className="md:flex md:min-h-screen">
      <aside className="side-navbar w-2/6">
        <div className="container container-panel">
          <Link className="navbar-brand flex justify-center py-3" to="/">
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
              to="/general_panel"
            >
              Panel General
            </Link>
            <Link
              className={`${
                location.pathname === "/appointments_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to="/appointments_panel"
            >
              Panel Citas
            </Link>
            <Link
              className={`${
                location.pathname === "/hospitals_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to="/hospitals_panel"
            >
              Panel Hospitales
            </Link>
            <Link
              className={`${
                location.pathname === "/specialties_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to="/specialties_panel"
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
