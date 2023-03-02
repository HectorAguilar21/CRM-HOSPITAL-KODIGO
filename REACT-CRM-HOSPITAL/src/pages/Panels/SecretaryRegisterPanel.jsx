import { useEffect, useState } from "react";
import clienteAxios from "../../config/axios";

export default function SecretaryRegisterPanel() {
  //States para recoger la informacion de los inputs
  const [typeIdRef, setTypeIdRef] = useState("4");
  const [userIdRef, setUserIdRef] = useState("");
  const [nameRef, setNameRef] = useState("");
  const [lastNameRef, setLastNameRef] = useState("");
  const [hospitalRef, setHospitalIdRef] = useState("");
  const [userRef, setUserRef] = useState("");
  const [emailRef, setEmialRef] = useState("");
  const [passwordRef, setPasswordRef] = useState("");

  //States para guardar los datos de "obtenerHospitales" axions
  const [hospitals, setHospitals] = useState([]);
  const [secretaries, setSecretaries] = useState([]);

  //Funcion para solicitar la info a la API
  const obtenerHospitales = async () => {
    try {
      const { data } = await clienteAxios("/api/hospital_information");
      setHospitals(data);
    } catch (error) {
      console.log(error);
    }
  };

  //Funcion para solicitar la info a la API
  const obtenerSecretarias = async () => {
    try {
      const { data } = await clienteAxios("/api/secretary_information");
      setSecretaries(data);
    } catch (error) {
      console.log(error);
    }
  };

  //useEffect para ejecutar al menos una vez las solicitudes a la API, cada vez que se visita la pagina
  useEffect(() => {
    obtenerHospitales();
    obtenerSecretarias();
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
      user: userRef,
      email: emailRef,
      password: passwordRef,
    };
    console.log(datos);

    //Try Catch para realizar la peticion y recoger los errores si los hubiese
    try {
      const respuesta = await clienteAxios.post(
        "/api/secretary_information",
        datos
      );
      console.log(respuesta);
    } catch (error) {
      console.log(Object.keys(error.response.data.errors));
    }
  };

  //Return del HTML a mostrar
  return (
    <div className="">
      {/* Contenedor de Form Registro Secretarias */}
      <div className="bg-white shadow-xl rounded-md mt-10 px-5 py-10 mx-20">
        <h1 className="text-4xl font-black text-center mb-10">
          Añade nueva Secretaria
        </h1>
        {/* Form Registro Secretaria */}
        <form className="grid grid-cols-2" onSubmit={handleSubmit}>
          {/* Input para seleccionar el rol */}
          <div className="mb-4 mx-3">
            <label htmlFor="type_id">Role:</label>
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
          {/* Fin Input para seleccionar el hospital */}
          {/* Input para el Id de la Secretaria */}
          <div className="mb-4 mx-3">
            <label htmlFor="user_id">Secretaria ID:</label>
            <input
              type="text"
              id="user_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="user_id"
              placeholder="Ingresa el ID de la Secretaria"
              value={userIdRef}
              onChange={(e) => setUserIdRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para el Id de la Secretaria */}
          {/* Input para el Nombre de la Secretaria */}
          <div className="mb-4 mx-3">
            <label htmlFor="name">Nombres:</label>
            <input
              type="text"
              id="name"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="name"
              placeholder="Ingresa los nombres de la Secretaria"
              value={nameRef}
              onChange={(e) => setNameRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para el Nombre de la Secretaria */}
          {/* Input para los Apellidos de la Secretaria */}
          <div className="mb-4 mx-3">
            <label htmlFor="last_name">Apellidos:</label>
            <input
              type="text"
              id="last_name"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="last_name"
              placeholder="Ingresa los apellidos de la Secretaria"
              value={lastNameRef}
              onChange={(e) => setLastNameRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para los Apellidos de la Secretaria */}
          {/* Input para seleccionar el hospital */}
          <div className="mb-4 mx-3">
            <label htmlFor="hospital_id">Hospital donde laboral ID:</label>
            <select
              id="hospital_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              value={hospitalRef}
              onChange={(e) => setHospitalIdRef(e.target.value)}
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
          {/* Input para el Usuario de la Secretaria */}
          <div className="mb-4 mx-3">
            <label htmlFor="user">Usuario:</label>
            <input
              type="text"
              id="user"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="user"
              placeholder="Ingresa el usuario de la Secretaria"
              value={userRef}
              onChange={(e) => setUserRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para el Usuario de la Secretaria */}
          {/* Input para el correol de la Secretaria */}
          <div className="mb-4 mx-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="email"
              placeholder="Ingresa el correo de la Secretaria"
              value={emailRef}
              onChange={(e) => setEmialRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para el correo de la Secretaria */}
          {/* Input para la Contraseña de la Secretaria */}
          <div className="mb-4 mx-3">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="password"
              placeholder="Ingresa la contraseña de la Secretaria"
              value={passwordRef}
              onChange={(e) => setPasswordRef(e.target.value)}
              required
            />
          </div>
          {/* Fin Input para la Contraseña de la Secretaria */}
          <input
            type="submit"
            value="Crear Usuario"
            className="button-login text-3xl text-center text-white mt-4 font-bold cursor-pointer"
          />
        </form>
        {/* Fin Form Registro Secretarias */}
      </div>
      {/* Fin Contenedor de Form Registro Secretarias */}
      {/* Contendor de la tabla */}
      <div className=" bg-white rounded-2xl my-5 container-info-citas overflow-auto mt-10 mx-20">
        <h1 className="text-center font-bold text-3xl text-indigo-700 pt-5">
          Secretarias:
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
                <th scope="col">Hospital</th>
                <th colSpan="2">Acciones</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              {secretaries.map((secretary) => (
                <tr>
                  <th scope="row">{secretary.id}</th>
                  <td>{`${secretary.name} ${secretary.last_name}`}</td>
                  <td>{secretary.email}</td>
                  <td>{secretary.user}</td>
                  <td>{secretary.hospital_id}</td>
                  <td>
                    <button type="button" class="btn btn-primary bg-indigo-500">
                      Editar
                    </button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-primary bg-indigo-500">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Fin Tabla */}
        </div>
      </div>
    </div>
  );
}
