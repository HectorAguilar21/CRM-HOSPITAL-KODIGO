import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function GeneralPanel() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const user = searchParams.get("user");

  const [patient, setPatient] = useState({});

  const obtenerPaciente = async () => {
    try {
      const { data } = await axios(
        `http://localhost:8000/api/patients/user/${user}`
      );
      console.log(data);
      setPatient(data);
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

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
              Numero de Telefono:
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
            <p className="font-normal text-indigo-700 text-lg">Pais:</p>
            <p className="text-2xl">{patient.country}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
