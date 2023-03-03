import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Layout from "./layouts/Layout";
import AppointmentsPanel from "./pages/AppointmentsPanel";
import CommentsPanel from "./pages/CommentsPanel";
import GeneralPanel from "./pages/GeneralPanel";
import HospitalsPanel from "./pages/HospitalsPanel";
import SpecialtiesPanel from "./pages/SpecialtiesPanel";
import AuthInicio from "./views/AuthInicio";
import Inicio from "./views/Inicio";
import Login from "./views/Login";

const router = createBrowserRouter([
  //endpoint para la pagina principal del paciente
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
      //endpoint para las subpaginas del paciente correspondientes a cada opcion de la sidebar
      {
        path: "/general_panel",
        element: <GeneralPanel />,
      },
      {
        path: "/appointments_panel",
        element: <AppointmentsPanel />,
      },
      {
        path: "/hospitals_panel",
        element: <HospitalsPanel />,
      },
      {
        path: "/specialties_panel",
        element: <SpecialtiesPanel />,
      },
      {
        path: "/comments_panel",
        element: <CommentsPanel />,
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
]);

export default router;
