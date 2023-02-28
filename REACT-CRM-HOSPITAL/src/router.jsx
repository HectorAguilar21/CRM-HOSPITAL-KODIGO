import { createBrowserRouter } from "react-router-dom";
import Welcome from "./components/Welcome";
import AuthLayout from "./layouts/AuthLayout";
import Layout from "./layouts/Layout";
import AdministratorPanelLayout from "./layouts/AdministratorPanelLayout";
import DoctorsPanelLayout from "./layouts/DoctorsPanelLayout";
import SecretaryPanelLayout from "./layouts/SecretaryPanelLayout";

import GeneralPanel from "./pages/Panels/GeneralPanel";
import AdministratorsRegisterPanel from "./pages/Panels/AdministratorsRegisterPanel";
import DoctorsRegisterPanel from "./pages/Panels/DoctorsRegisterPanel";
import PatientsRegisterPanel from "./pages/Panels/PatientsRegisterPanel";
import SecretaryRegisterPanel from "./pages/Panels/SecretaryRegisterPanel";
import AppointmentsPanel from "./pages/Panels/AppointmentsPanel";
import HospitalRegisterPanel from "./pages/Panels/HospitalsRegisterPanel";
import SpecialtiesRegisterPanel from "./pages/Panels/SpecialtiesRegisterPanel";
import AppointmentCommentRegisterModal from "./pages/Panels/AppointmentCommentRegisterModal";

import Inicio from "./views/Inicio";
import Login from "./views/Login";
import AuthInicio from "./views/AuthInicio";

const router = createBrowserRouter([
  //endpoint para la pagina principal con botones para inicio sesion segun el rol
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
    ],
  },
  //endopoint para la pagina principal de autenticacion
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <AuthInicio />,
      },
      //Endopoint para la pagina principal para inicar sesion
      {
        path: "/auth/login",
        element: <Login />,
      },
    ],
  },
  //endopoint para la pagina principal del rol administrador
  {
    path: "/administrator",
    element: <AdministratorPanelLayout />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      //endpoint para las subpaginas del paciente correspondientes a cada opcion de la sidebar
      {
        path: "/administrator/general_panel",
        element: <GeneralPanel />,
      },
      {
        path: "/administrator/administrators_panel",
        element: <AdministratorsRegisterPanel />,
      },
      {
        path: "/administrator/doctors_panel",
        element: <DoctorsRegisterPanel />,
      },
      {
        path: "/administrator/patients_panel",
        element: <PatientsRegisterPanel />,
      },
      {
        path: "/administrator/secretary_panel",
        element: <SecretaryRegisterPanel />,
      },
      {
        path: "/administrator/appointment_panel",
        element: <AppointmentsPanel />,
      },
      {
        path: "/administrator/hospital_panel",
        element: <HospitalRegisterPanel />,
      },
      {
        path: "/administrator/specialties_panel",
        element: <SpecialtiesRegisterPanel />,
      },
    ],
  },
  //endopoint para la pagina principal del rol doctor
  {
    path: "/doctor",
    element: <DoctorsPanelLayout />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      //endpoint para las subpaginas del paciente correspondientes a cada opcion de la sidebar
      {
        path: "/doctor/general_panel",
        element: <GeneralPanel />,
      },
      {
        path: "/doctor/doctors_panel",
        element: <DoctorsRegisterPanel />,
      },
      {
        path: "/doctor/patients_panel",
        element: <PatientsRegisterPanel />,
      },
      {
        path: "/doctor/appointment_panel",
        element: <AppointmentsPanel />,
      },
      {
        path: "/doctor/hospital_panel",
        element: <HospitalRegisterPanel />,
      },
      {
        path: "/doctor/specialties_panel",
        element: <SpecialtiesRegisterPanel />,
      },
    ],
  },
  //endopoint para la pagina principal del rol secretaria
  {
    path: "/secretary",
    element: <SecretaryPanelLayout />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      //endpoint para las subpaginas del paciente correspondientes a cada opcion de la sidebar
      {
        path: "/secretary/general_panel",
        element: <GeneralPanel />,
      },
      {
        path: "/secretary/doctors_panel",
        element: <DoctorsRegisterPanel />,
      },
      {
        path: "/secretary/patients_panel",
        element: <PatientsRegisterPanel />,
      },
      {
        path: "/secretary/appointment_panel",
        element: <AppointmentsPanel />,
      },
      {
        path: "/secretary/hospital_panel",
        element: <HospitalRegisterPanel />,
      },
      {
        path: "/secretary/specialties_panel",
        element: <SpecialtiesRegisterPanel />,
      },
    ],
  },
]);

export default router;
