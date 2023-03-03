import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Inicio() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const user = searchParams.get("user");

  console.log(user);

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
    <div className="text-center mt-10 bg-white rounded-lg container py-10">
      <p className="font-bold text-6xl">Bienvenid@</p>
      <p className="text-5xl py-3 text-indigo-700">{`${patient.name} ${patient.last_name}`}</p>
    </div>
  );
}
