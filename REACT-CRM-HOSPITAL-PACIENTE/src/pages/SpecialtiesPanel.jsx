import axios from "axios";
import React, { useEffect, useState } from "react";

export default function SpecialtiesPanel() {
  //States para guardar los datos de "obtenerEspecialidades" Axios
  const [specialities, setSpecialities] = useState([]);

  const [doctors, setDoctors] = useState([]);

  const [hospitalsSpecialities, setHospitalsSpecialities] = useState([]);

  //Funcion para solicitar la info a la API
  const obtenerEspecialidades = async () => {
    try {
      const { data } = await axios(
        "http://localhost:8000/api/medical_speciality_information"
      );
      setSpecialities(data);
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

  const obtenerDoctores = async () => {
    try {
      const { data } = await axios(
        "http://localhost:8000/api/doctor_information"
      );
      console.log(data);
      setDoctors(data);
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

  const obtenerHospitales = async () => {
    try {
      const { data } = await axios(
        "http://localhost:8000/api/hospital_specialities"
      );
      console.log(data);
      setHospitalsSpecialities(data);
    } catch (error) {
      console.log(error);
    }
  };

  //useEffect para ejecutar al menos una vez la solicitud a la API, cada vez que se visita la pagina
  useEffect(() => {
    obtenerHospitales();
    obtenerDoctores();
    obtenerEspecialidades();
  }, []);

  return (
    <div className=" bg-white rounded-2xl my-5 container-info-citas overflow-auto">
      <h1 className="text-center font-bold text-3xl text-indigo-700 pt-5">
        Especialidades:
      </h1>
      <div className="flex align-items-center p-5 bg-white rounded-2xl container info-container">
        <table class="table text-center align-middle">
          <thead>
            <tr>
              <th className="w-25" scope="col">
                ID
              </th>
              <th className="w-25" scope="col">
                Nombre
              </th>
              <th className="w-25" scope="col">
                Doctores
              </th>
              <th className="w-25" scope="col">
                Hospitales
              </th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            {specialities.map((specialities) => (
              <tr>
                <th scope="row">{specialities.speciality_id}</th>
                <td>{specialities.speciality_name}</td>
                <td>
                  <ul>
                    {doctors.map(
                      (doctor) =>
                        specialities.id !== null &&
                        doctor.speciality_id == specialities.id && (
                          <li>{`♦ ${doctor.name} ${doctor.last_name}`}</li>
                        )
                    )}
                  </ul>
                </td>
                <td>
                  <ul>
                    {hospitalsSpecialities.map(
                      (hospitalSpeciality) =>
                        specialities.id !== null &&
                        hospitalSpeciality.medical_speciality_information_id ==
                          specialities.id && (
                          <li>{`♦ ${hospitalSpeciality.hospital.hospital_name}`}</li>
                        )
                    )}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
