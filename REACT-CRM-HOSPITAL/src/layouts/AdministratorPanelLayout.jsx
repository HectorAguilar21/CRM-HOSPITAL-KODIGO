import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AdministratorPanelLayout() {
  const location = useLocation();

  return (
    <div className="md:flex md:min-h-screen">
      <aside className="side-navbar md:w-1/5">
        <div className="container container-panel">
          <Link
            className="navbar-brand flex justify-center py-3"
            to="/administrator"
          >
            <img
              src="../img/administrador.png"
              alt="Logo"
              className="img-panel d-inline-block align-text-top"
            />
          </Link>
          <h2 className="font-panel text-3xl text-center text-white">
            HOSPITAL NACIONAL
          </h2>
          <h1 className="font-panel text-4xl text-center text-white py-2">
            PANEL ADMINISTRATIVO
          </h1>
        </div>
        <hr />
        <nav className="side-navbar-options pt-4">
          <div className="grid grid-cols-1">
            <Link
              className={`${
                location.pathname === "/administrator/general_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to="/administrator/general_panel"
            >
              Panel General
            </Link>
            <Link
              className={`${
                location.pathname === "/administrator/administrators_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to="/administrator/administrators_panel"
            >
              Administradores
            </Link>
            <Link
              className={`${
                location.pathname === "/administrator/doctors_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to="/administrator/doctors_panel"
            >
              Doctores
            </Link>
            <Link
              className={`${
                location.pathname === "/administrator/patients_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to="/administrator/patients_panel"
            >
              Pacientes
            </Link>
            <Link
              className={`${
                location.pathname === "/administrator/secretary_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to="/administrator/secretary_panel"
            >
              Secretarias
            </Link>
            <Link
              className={`${
                location.pathname === "/administrator/appointment_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to="/administrator/appointment_panel"
            >
              Panel Citas
            </Link>
            <Link
              className={`${
                location.pathname === "/administrator/hospital_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to="/administrator/hospital_panel"
            >
              Panel Hospitales
            </Link>
            <Link
              className={`${
                location.pathname === "/administrator/specialties_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to="/administrator/specialties_panel"
            >
              Panel Especialidades
            </Link>
            <Link
              className={`${
                location.pathname ===
                "/administrator/hospital_specialties_panel"
                  ? "text-black font-panel-sidebar option-selected"
                  : "text-white font-panel-sidebar"
              } text-2xl py-2 pl-4`}
              to="/administrator/hospital_specialties_panel"
            >
              Registro Hospital-Especialidad
            </Link>
          </div>
        </nav>
      </aside>
      <main className="mx-auto w-full max-h-screen overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
