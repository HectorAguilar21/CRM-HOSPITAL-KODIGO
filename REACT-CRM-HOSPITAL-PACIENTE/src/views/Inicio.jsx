import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Inicio() {
  //Variable para obtener la ruta actual y realizar validaciones en las vistas
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const user = searchParams.get("user");

  //States para guardar los datos de "obtenerPaciente"
  const [patient, setPatient] = useState({});

  //Funcion para solicitar la info a la API
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

  //useEffect para ejecutar al menos una vez las solicitudes a la API, cada vez que se visita la pagina
  useEffect(() => {
    obtenerPaciente();
  }, []);

  return (
    <div className="text-center mt-10 bg-white rounded-lg container py-10">
      <p className="font-bold text-6xl">Bienvenid@</p>
      <p className="text-5xl py-3 text-indigo-700">{`${patient.name} ${patient.last_name}`}</p>
    </div>
  );
}
