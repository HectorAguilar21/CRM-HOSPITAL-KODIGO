import { useEffect, useState } from "react";
import PatientsResultsCard from "../../components/PatientsResultsCard";
import clienteAxios from "../../config/axios";

export default function PatientsRegisterPanel() {
  //States para guardar los datos recogidos de los inputs
  const [typeIdRef, setTypeIdRef] = useState("3");
  const [userIdRef, setUserIdRef] = useState("");
  const [nameRef, setNameRef] = useState("");
  const [lastNameRef, setLastNameRef] = useState("");
  const [hospitalRef, setHospitalRef] = useState("");
  const [numberPhoneRef, setNumberPhoneRef] = useState("");
  const [emergencyNumberPhoneRef, setEmergencyNumberPhoneRef] = useState("");
  const [dateOfBirthRef, setDateOfBirthRef] = useState("");
  const [genderRef, setGenderRef] = useState("");
  const [addressRef, setAddressRef] = useState("");
  const [cityRef, setCityRef] = useState("");
  const [departmentRef, setDeparmentRef] = useState("");
  const [countryRef, setCountryRef] = useState("");
  const [userRef, setUserRef] = useState("");
  const [emailRef, setEmailRef] = useState("");
  const [passwordRef, setPasswordRef] = useState("");

  //States para guardar los datos de "obtenerHospitales" Axios
  const [hospitals, setHospitals] = useState([]);

  //States para guardar los datos de "obtenerPacientes" Axios
  const [patients, setPatients] = useState([]);

  //Funcion para solicitar la info a la API
  const obtenerHospitales = async () => {
    try {
      const { data } = await clienteAxios("/api/hospital_information");
      setHospitals(data);
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

  //Funcion para solicitar la info a la API
  const obtenerPacientes = async () => {
    try {
      const { data } = await clienteAxios("/api/patient_information");
      setPatients(data);
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

  //useEffect para ejecutar al menos una vez la solicitud a la API, cada vez que se visita la pagina
  useEffect(() => {
    obtenerHospitales();
    obtenerPacientes();
  }, []);

  //Funcion para enviar el Formulario a traves de un boton y no por el form directamente
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Se guardan los datos que se recogieron en los states, y se pasan a objetos
    const datos = {
      type_id: typeIdRef,
      user_id: userIdRef,
      name: nameRef,
      last_name: lastNameRef,
      hospital_id: hospitalRef,
      number_phone: numberPhoneRef,
      emergency_number_phone: emergencyNumberPhoneRef,
      date_of_birth: dateOfBirthRef,
      gender: genderRef,
      address: addressRef,
      city: cityRef,
      department: departmentRef,
      country: countryRef,
      user: userRef,
      email: emailRef,
      password: passwordRef,
    };

    //Try Catch para realizar la peticion y recoger los errores si los hubiese
    try {
      const respuesta = await clienteAxios.post(
        "/api/patient_information",
        datos
      );
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

  //Return del HTML a mostrar
  return (
    <div className="">
      {/* Contenedor de Form Registro Pacientes */}
      <div className="bg-white shadow-xl rounded-md mt-10 mx-20 px-5 py-10">
        <h1 className="text-4xl font-black text-center mb-10">
          Añade nuevo Paciente
        </h1>
        {/* Form Registro Pacientes */}
        <form className="grid grid-cols-2" onSubmit={handleSubmit}>
          {/* Input para escribir el Rol */}
          <div className="mb-4 mx-3">
            <label htmlFor="type_id">Rol:</label>
            <input
              type="number"
              id="type_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="type_id"
              placeholder="Ingresa el Rol del Usuario"
              value={typeIdRef}
              onChange={(e) => setTypeIdRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para escribir el Rol */}
          {/* Input para escribir el Id del paciente */}
          <div className="mb-4 mx-3">
            <label htmlFor="user_id">Paciente ID:</label>
            <input
              type="text"
              id="user_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="user_id"
              placeholder="Ingresa el ID del Paciente"
              value={userIdRef}
              onChange={(e) => setUserIdRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para escribir el Id del paciente */}
          {/* Input para escribir el Nombre del paciente */}
          <div className="mb-4 mx-3">
            <label htmlFor="name">Nombres:</label>
            <input
              type="text"
              id="name"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="name"
              placeholder="Ingresa los nombres del Paciente"
              value={nameRef}
              onChange={(e) => setNameRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para escribir el Nombre del paciente */}
          {/* Input para escribir el Apellido del paciente */}
          <div className="mb-4 mx-3">
            <label htmlFor="last_name">Apellidos:</label>
            <input
              type="text"
              id="last_name"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="last_name"
              placeholder="Ingresa los apellidos del Paciente"
              value={lastNameRef}
              onChange={(e) => setLastNameRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para escribir el Apellido del paciente */}
          {/* Input para escribir el Hospital de Registro */}
          <div className="mb-4 mx-3">
            <label htmlFor="hospital_id">Hospital que se registro ID:</label>
            <select
              id="hospital_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              value={hospitalRef}
              onChange={(e) => setHospitalRef(e.target.value)}
              required
            >
              <option value="--Default--" selected>
                --Seleccione una opcion--
              </option>
              {hospitals.map((hospital) => (
                <option value={hospital.id}>{hospital.hospital_name}</option>
              ))}
            </select>
          </div>
          {/* Fin Input para escribir el Hospital de Registro */}
          {/* Input para escribir el numero de telefono */}
          <div className="mb-4 mx-3">
            <label htmlFor="number_phone">Número de teléfono:</label>
            <input
              type="number"
              id="number_phone"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="number_phone"
              placeholder="Ingresa el número de teléfono del paciente"
              value={numberPhoneRef}
              onChange={(e) => setNumberPhoneRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para escribir el numero de telefono */}
          {/* Input para escribir el numero de emergencia */}
          <div className="mb-4 mx-3">
            <label htmlFor="emergency_number_phone">
              Contacto de emergencia:
            </label>
            <input
              type="number"
              id="emergency_number_phone"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="emergency_number_phone"
              placeholder="Ingresa el contacto de emergencia del paciente"
              value={emergencyNumberPhoneRef}
              onChange={(e) => setEmergencyNumberPhoneRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para escribir el numero de emergencia */}
          {/* Input para escribir la fecha de nacimiento */}
          <div className="mb-4 mx-3">
            <label htmlFor="date_of_birth">Fecha de Nacimiento:</label>
            <input
              type="date"
              id="date_of_birth"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="date_of_birth"
              placeholder="Ingresa la fecha de nacimiento del Paciente"
              value={dateOfBirthRef}
              onChange={(e) => setDateOfBirthRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para escribir la fecha de nacimiento */}
          {/* Input para escribir genero */}
          <div className="mb-4 mx-3">
            <label htmlFor="gender">Genero:</label>
            <select
              id="gender"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              value={genderRef}
              onChange={(e) => setGenderRef(e.target.value)}
              required
            >
              <option value="--Default--" selected>
                --Seleccione una opcion--
              </option>
              <option value="Femenino" name="gender">
                Femenino
              </option>
              <option value="Femenino" name="gender">
                Masculino
              </option>
            </select>
          </div>
          {/* Fin Input para escribir genero */}
          {/* Input para escribir la direccion de Residencia */}
          <div className="mb-4 mx-3">
            <label htmlFor="address">Direccion Residencia:</label>
            <input
              type="text"
              id="address"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="address"
              placeholder="Ingresa la dirección de residencia del Paciente, sin ciudad, sin departamento, ni pais"
              value={addressRef}
              onChange={(e) => setAddressRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para escribir la direccion de Residencia */}
          {/* Input para escribir la ciudad de Residencia */}
          <div className="mb-4 mx-3">
            <label htmlFor="ciudad">ciudad:</label>
            <input
              type="text"
              id="ciudad"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="ciudad"
              placeholder="Ingresa la ciudad"
              value={cityRef}
              onChange={(e) => setCityRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para escribir la ciudad de Residencia */}
          {/* Input para escribir el departamento de Residencia */}
          <div className="mb-4 mx-3">
            <label htmlFor="hospital_department">Departamento:</label>
            <select
              id="hospital_department"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              value={departmentRef}
              onChange={(e) => setDeparmentRef(e.target.value)}
              required
            >
              <option value="--Default--" selected>
                --Seleccione una opcion--
              </option>
              <option value="Ahuachapán" name="hospital_department">
                Ahuachapán
              </option>
              <option value="Cabañas" name="hospital_department">
                Cabañas
              </option>
              <option value="Chalatenango" name="hospital_department">
                Chalatenango
              </option>
              <option value="Cuscatlán" name="hospital_department">
                Cuscatlán
              </option>
              <option value="La Libertad" name="hospital_department">
                La Libertad
              </option>
              <option value="Morazán" name="hospital_department">
                Morazán
              </option>
              <option value="La Paz" name="hospital_department">
                La Paz
              </option>
              <option value="Santa Ana" name="hospital_department">
                Santa Ana
              </option>
              <option value="San Miguel" name="hospital_department">
                San Miguel
              </option>
              <option value="San Salvador" name="hospital_department">
                San Salvador
              </option>
              <option value="San Vicente" name="hospital_department">
                San Vicente
              </option>
              <option value="Sonsonate" name="hospital_department">
                Sonsonate
              </option>
              <option value="La Unión" name="hospital_department">
                La Unión
              </option>
              <option value="Usulután" name="hospital_department">
                Usulután
              </option>
            </select>
          </div>
          {/* Fin Input para escribir el departamento de Residencia */}
          {/* Input para escribir el Pais de Residencia */}
          <div className="mb-4 mx-3">
            <label htmlFor="hospital_country">País:</label>
            <select
              id="hospital_country"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              value={countryRef}
              onChange={(e) => setCountryRef(e.target.value)}
              required
            >
              <option value="--Default--" selected>
                --Seleccione una opcion--
              </option>
              <option value="El Salvador" name="hospital_country">
                El Salvador
              </option>
            </select>
          </div>
          {/* Fin Input para escribir el Pais de Residencia */}
          {/* Input para escribir el Usuario*/}
          <div className="mb-4 mx-3">
            <label htmlFor="user">Usuario:</label>
            <input
              type="text"
              id="user"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="user"
              placeholder="Ingresa el usuario del Paciente"
              value={userRef}
              onChange={(e) => setUserRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para escribir el Usuario*/}
          {/* Input para escribir el Correo*/}
          <div className="mb-4 mx-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="email"
              placeholder="Ingresa el correo del Paciente"
              value={emailRef}
              onChange={(e) => setEmailRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para escribir el Correo*/}
          {/* Input para escribir la Contraseña*/}
          <div className="mb-4 mx-3">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="password"
              placeholder="Ingresa la contraseña del Paciente"
              value={passwordRef}
              onChange={(e) => setPasswordRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para escribir la Contraseña*/}
          <input
            type="submit"
            value="Crear Usuario"
            className="button-login text-3xl text-center text-white mt-4 font-bold cursor-pointer"
          />
        </form>
        {/* Fin Form Registro Pacientes */}
      </div>
      {/* Fin Contenedor de Form Registro Pacientes */}
      {/* Contendor de la Tarjeta del paciente */}
      <div className=" bg-white rounded-2xl my-5 overflow-auto mt-10 mx-20">
        <h1 className="text-center font-bold text-3xl text-indigo-700 pt-5">
          Pacientes:
        </h1>
        {patients.map((patient) => (
          <PatientsResultsCard patient={patient} />
        ))}
      </div>
      {/* Fin Contendor de la Tarjeta del paciente */}
    </div>
  );
}
