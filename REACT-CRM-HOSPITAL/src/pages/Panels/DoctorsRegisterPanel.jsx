import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DoctorsResultsTable from "../../components/DoctorsResultsTable";
import clienteAxios from "../../config/axios";

export default function DoctorsRegisterPanel() {
  //Variable para obtener la ruta actual y realizar validaciones en las vistas
  const location = useLocation();

  //States para recoger la informacion de los inputs
  const [typeIdRef, setTypeIdRef] = useState("2");
  const [userIdRef, setUserIdRef] = useState("");
  const [nameRef, setNameRef] = useState("");
  const [lastNameRef, setLastNameRef] = useState("");
  const [specialityRef, setSpecialityRef] = useState("");
  const [hospitalRef, setHospitalRef] = useState("");
  const [userRef, setUserRef] = useState("");
  const [emailRef, setEmailRef] = useState("");
  const [passwordRef, setPasswordRef] = useState("");

  //States para guardar los datos de "obtenerHospitales" y "obtenerEspecialidades" Axios
  const [hospitals, setHospitals] = useState([]);
  const [specialities, setSpecialities] = useState([]);

  //States para guardar los datos de Doctores
  const [doctors, setDoctors] = useState([]);

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
  const obtenerEspecialidades = async () => {
    try {
      const { data } = await clienteAxios(
        "/api/medical_speciality_information"
      );
      setSpecialities(data);
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

  //Funcion para solicitar la info a la API
  const obtenerDoctores = async () => {
    try {
      const { data } = await clienteAxios("/api/doctor_information");
      setDoctors(data);
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }
  };

  //useEffect para ejecutar al menos una vez las solicitudes a la API, cada vez que se visita la pagina
  useEffect(() => {
    obtenerHospitales();
    obtenerEspecialidades();
    obtenerDoctores();
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
      speciality_id: specialityRef,
      hospital_id: hospitalRef,
      user: userRef,
      email: emailRef,
      password: passwordRef,
    };

    //Try Catch para realizar la peticion y recoger los errores si los hubiese
    try {
      const respuesta = await clienteAxios.post(
        "/api/doctor_information",
        datos
      );
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }

    setUserIdRef("");
    setNameRef("");
    setLastNameRef("");
    setSpecialityRef("");
    setHospitalRef("");
    setUserRef("");
    setEmailRef("");
    setPasswordRef("");

    swal({
      title: "Realizado",
      text: "Envio de formulario exitosamente",
      icon: "success",
      button: "Aceptar",
    });

    obtenerHospitales();
    obtenerEspecialidades();
    obtenerDoctores();
  };

  //Return del HTML a mostrar
  return (
    <div className="">
      {/* Validacion con ternario para saber en que locacion estamos con useLocation y asi decidir que contenido se muestra */}
      {location.pathname === "/administrator/doctors_panel" ? (
        <>
          {/* Informacion que le aparece unicamente al rol de administrador */}
          {/* Contenedor de Form Registro Doctor */}
          <div className="bg-white shadow-xl rounded-md mt-10 mx-20 px-5 py-10">
            <h1 className="text-4xl font-black text-center mb-10">
              Añade nuevo Doctor
            </h1>
            {/* Form Registro Doctor */}
            <form className="grid grid-cols-2" onSubmit={handleSubmit}>
              {/* Input para seleccionar el Rol */}
              <div className="mb-4 mx-3">
                <label htmlFor="type_id">Rol:</label>
                <input
                  type="number"
                  id="type_id"
                  className="mt-2 w-full p-2 bg-slate-100 rounded-md"
                  name="type_id"
                  placeholder="Ingresa el Rol del Usuario"
                  value={typeIdRef}
                  // onChange={(e) => setTypeIdRef(e.target.value)}
                  required
                />
              </div>
              {/* Fin Input para seleccionar el hospital */}
              {/* Input para el Id del Doctor */}
              <div className="mb-4 mx-3">
                <label htmlFor="user_id">Doctor ID:</label>
                <input
                  type="text"
                  id="user_id"
                  className="mt-2 w-full p-2 bg-slate-100 rounded-md"
                  name="user_id"
                  placeholder="Ingresa el ID del Doctor"
                  value={userIdRef}
                  onChange={(e) => setUserIdRef(e.target.value)}
                  required
                />
              </div>
              {/* Fin Input para el Id del Doctor */}
              {/* Input para el Nombre del Doctor */}
              <div className="mb-4 mx-3">
                <label htmlFor="name">Nombres:</label>
                <input
                  type="text"
                  id="name"
                  className="mt-2 w-full p-2 bg-slate-100 rounded-md"
                  name="name"
                  placeholder="Ingresa los nombres del Doctor"
                  value={nameRef}
                  onChange={(e) => setNameRef(e.target.value)}
                  required
                />
              </div>
              {/* Fin Input para el Nombre del Doctor */}
              {/* Input para el Apellido del Doctor */}
              <div className="mb-4 mx-3">
                <label htmlFor="last_name">Apellidos:</label>
                <input
                  type="text"
                  id="last_name"
                  className="mt-2 w-full p-2 bg-slate-100 rounded-md"
                  name="last_name"
                  placeholder="Ingresa los apellidos del Doctor"
                  value={lastNameRef}
                  onChange={(e) => setLastNameRef(e.target.value)}
                  required
                />
              </div>
              {/* Fin Input para el Apellido del Doctor */}
              {/* Input para seleccionar la especialidad */}
              <div className="mb-4 mx-3">
                <label htmlFor="speciality_id">Especialidad ID:</label>
                <select
                  id="speciality_id"
                  className="mt-2 w-full p-2 bg-slate-100 rounded-md"
                  value={specialityRef}
                  onChange={(e) => setSpecialityRef(e.target.value)}
                  required
                >
                  <option value="--Default--" selected>
                    --Seleccione una opcion--
                  </option>
                  {specialities.map((speciality) => (
                    <option key={speciality.id} value={speciality.id}>
                      {speciality.speciality_name}
                    </option>
                  ))}
                </select>
              </div>
              {/* Fin Input para seleccionar la especialidad */}
              {/* Input para seleccionar el hospital */}
              <div className="mb-4 mx-3">
                <label htmlFor="hospital_id">Hospital ID:</label>
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
                    <option key={hospital.id} value={hospital.id}>
                      {hospital.hospital_name}
                    </option>
                  ))}
                </select>
              </div>
              {/* Fin Input para seleccionar el hospital */}
              {/* Input para el Usuario del Doctor */}
              <div className="mb-4 mx-3">
                <label htmlFor="user">Usuario:</label>
                <input
                  type="text"
                  id="user"
                  className="mt-2 w-full p-2 bg-slate-100 rounded-md"
                  name="user"
                  placeholder="Ingresa el usuario del Doctor"
                  value={userRef}
                  onChange={(e) => setUserRef(e.target.value)}
                  required
                />
              </div>
              {/* Fin Input para el Usuario del Doctor */}
              {/* Input para el Correo del Doctor */}
              <div className="mb-4 mx-3">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 w-full p-2 bg-slate-100 rounded-md"
                  name="email"
                  placeholder="Ingresa el correo del Doctor"
                  value={emailRef}
                  onChange={(e) => setEmailRef(e.target.value)}
                  required
                />
              </div>
              {/* Fin Input para el Correo del Doctor */}
              {/* Input para la Contraseña del Doctor */}
              <div className="mb-4 mx-3">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  className="mt-2 w-full p-2 bg-slate-100 rounded-md"
                  name="password"
                  placeholder="Ingresa la contraseña del Doctor"
                  value={passwordRef}
                  onChange={(e) => setPasswordRef(e.target.value)}
                  required
                />
              </div>
              {/* Fin Input para la Contraseña del Doctor */}
              <input
                type="submit"
                value="Crear Usuario"
                className="button-login text-3xl text-center text-white mt-4 font-bold cursor-pointer"
              />
            </form>
            {/* Fin Form Registro Doctores */}
          </div>
          {/* Fin Contenedor de Form Registro Doctores */}
          {/* Contendor de la tabla */}
          <div className=" bg-white rounded-2xl my-5 container-info-citas overflow-auto mt-10 mx-20">
            <h1 className="text-center font-bold text-3xl text-indigo-700 pt-5">
              Doctores:
            </h1>
            <div className="flex align-items-center p-5 bg-white rounded-2xl container info-container">
              {/* Tabla */}
              <table class="table text-center align-middle">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Especialidad</th>
                    <th scope="col">Hospital</th>
                    <th colSpan="2">Acciones</th>
                  </tr>
                </thead>
                {/* Cuerpo de la tabla que se genera por un map en un componente aparte */}
                <tbody class="table-group-divider">
                  {doctors.map((doctor) => (
                    <DoctorsResultsTable key={doctor.id} doctor={doctor} />
                  ))}
                </tbody>
                {/* Fin Cuerpo de la tabla que se genera por un map en un componente aparte */}
              </table>
              {/* Fin Tabla */}
            </div>
          </div>
          {/* Informacion que le aparece a cualquiera que esta logeado */}
        </>
      ) : (
        <>
          {/* Informacion que le aparece a cualquiera que esta logeado */}
          <div className=" bg-white rounded-2xl my-5 container-info-citas overflow-auto mt-10 mx-20">
            <h1 className="text-center font-bold text-3xl text-indigo-700 pt-5">
              Doctores:
            </h1>
            <div className="flex align-items-center p-5 bg-white rounded-2xl container info-container">
              {/* Tabla */}
              <table class="table text-center align-middle">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Especialidad</th>
                    <th scope="col">Hospital</th>
                  </tr>
                </thead>
                {/* Cuerpo de la tabla que se genera por un map en un componente aparte */}
                <tbody class="table-group-divider">
                  {doctors.map((doctor) => (
                    <DoctorsResultsTable key={doctor.id} doctor={doctor} />
                  ))}
                </tbody>
                {/* Fin Cuerpo de la tabla que se genera por un map en un componente aparte */}
              </table>
              {/* Fin Tabla */}
            </div>
          </div>
          {/* Informacion que le aparece a cualquiera que esta logeado */}
        </>
      )}
    </div>
  );
}
