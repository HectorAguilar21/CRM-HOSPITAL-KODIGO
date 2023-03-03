import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function GeneralPanel() {
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
    <div>
      <div className="flex align-items-center bg-white rounded-2xl mt-5 container">
        <div className="text-6xl font-bold flex justify-center w-1/4 my-4">
          <img src="/img/perfil.png" alt="Foto de perfil" />
        </div>
        <div className="info-container text-6xl font-bold w-3/4 px-10 py-10">
          <div className="py-2">
            <p className="font-normal text-indigo-700 text-lg">
              Nombre Completo:
            </p>
            <p className="text-2xl">{`${patient.name} ${patient.last_name}`}</p>
          </div>{" "}
          <hr />
          <div className="py-2">
            <p className="font-normal text-indigo-700 text-lg">
              ID de Usuario:
            </p>
            <p className="text-2xl">{patient.user_id}</p>
          </div>{" "}
          <hr />
          <div className="py-2">
            <p className="font-normal text-indigo-700 text-lg">
              Número de Teléfono:
            </p>
            <p className="text-2xl">{patient.number_phone}</p>
          </div>{" "}
          <hr />
          <div className="py-2">
            <p className="font-normal text-indigo-700 text-lg">
              Contacto de Emergencia:
            </p>
            <p className="text-2xl">{patient.emergency_number_phone}</p>
          </div>{" "}
          <hr />
          <div className="py-2">
            <p className="font-normal text-indigo-700 text-lg">
              Fecha de Naciemiento:
            </p>
            <p className="text-2xl">{patient.date_of_birth}</p>
          </div>{" "}
          <hr />
          <div className="py-2">
            <p className="font-normal text-indigo-700 text-lg">
              Direccion de residencia:
            </p>
            <p className="text-2xl">{patient.address}</p>
          </div>{" "}
          <hr />
          <div className="py-2">
            <p className="font-normal text-indigo-700 text-lg">Ciudad:</p>
            <p className="text-2xl">{patient.city}</p>
          </div>{" "}
          <hr />
          <div className="py-2">
            <p className="font-normal text-indigo-700 text-lg">Departamento:</p>
            <p className="text-2xl">{patient.department}</p>
          </div>{" "}
          <hr />
          <div className="py-2">
            <p className="font-normal text-indigo-700 text-lg">País:</p>
            <p className="text-2xl">{patient.country}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
