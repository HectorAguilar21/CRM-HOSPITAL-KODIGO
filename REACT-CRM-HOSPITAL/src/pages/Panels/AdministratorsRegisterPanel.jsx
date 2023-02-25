import { createRef, useState } from "react";
import Alerta from "../../components/Alerta";
import clienteAxios from "../../config/axios";

export default function AdministratorsRegisterPanel() {
  const typeIdRef = createRef();
  const userIdRef = createRef();
  const nameRef = createRef();
  const lastNameRef = createRef();
  const hospitalIdRef = createRef();
  const userRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const confirmatonPasswordRef = createRef();

  const [errores, setErrores] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const datos = {
      type_id: typeIdRef.current.value,
      user_id: userIdRef.current.value,
      name: nameRef.current.value,
      last_name: lastNameRef.current.value,
      hospital_id: hospitalIdRef.current.value,
      user: userRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: confirmatonPasswordRef.current.value,
    };

    console.log(datos);
    try {
      const respuesta = await clienteAxios.post("/api/users", datos);
      console.log(respuesta);
    } catch (error) {
      setErrores(error.response.data.errors);
    }
  };

  return (
    <div className="">
      <div className="bg-white shadow-xl rounded-md mt-10 px-5 py-10">
        <h1 className="text-4xl font-black text-center mb-10">
          Añade nuevo Administrador
        </h1>
        <form className="grid grid-cols-2" onSubmit={handleSubmit}>
          {errores
            ? errores.map((error) => <Alerta key={error}>{error}</Alerta>)
            : null}
          <div className="mb-4 mx-3">
            <label htmlFor="type_id">Role:</label>
            <input
              type="number"
              id="type_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="type_id"
              placeholder="Ingresa el Rol del Usuario"
              value="1"
              ref={typeIdRef}
              required
            />
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="user_id">Administrador ID:</label>
            <input
              type="text"
              id="user_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="user_id"
              placeholder="Ingresa el ID del Administrador"
              ref={userIdRef}
              required
            />
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="name">Nombres:</label>
            <input
              type="text"
              id="name"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="name"
              placeholder="Ingresa los nombres del Administrador"
              ref={nameRef}
              required
            />
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="last_name">Apellidos:</label>
            <input
              type="text"
              id="last_name"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="last_name"
              placeholder="Ingresa los apellidos del Administrador"
              ref={lastNameRef}
              required
            />
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="hospital_id">Hospital ID:</label>
            <select
              id="hospital_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              ref={hospitalIdRef}
              required
            >
              <option value="--Default--" selected>
                --Seleccione una opcion--
              </option>
              <option value="1" name="hospital_id">
                Hospital Nacional "Dr. Juan José Fernández", Zacamil
              </option>
              <option value="2" name="hospital_id">
                Hospital Nacional Especializado de Niños "Benjamín Bloom
              </option>
              <option value="3" name="hospital_id">
                Hospital Nacional General "Enfermera Angélica Vidal de Najarro",
                San Bartolo
              </option>
              <option value="4" name="hospital_id">
                Hospital Nacional General "San Rafael", La Libertad
              </option>
              <option value="5" name="hospital_id">
                Hospital Nacional Regional "San Juan de Dios", Santa Ana
              </option>
              <option value="6" name="hospital_id">
                Hospital Nacional "Nuestra Señora de Fátima" de Cojutepeque.
              </option>
            </select>
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="user">Usuario:</label>
            <input
              type="text"
              id="user"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="user"
              placeholder="Ingresa el usuario del Administrador"
              ref={userRef}
              required
            />
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="email"
              placeholder="Ingresa el correo del Administrador"
              ref={emailRef}
              required
            />
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="password"
              placeholder="Ingresa la contraseña del Administrador"
              ref={passwordRef}
              required
            />
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="password_confirmation">Repetir Password:</label>
            <input
              type="password"
              id="password_confirmation"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="password_confirmation"
              placeholder="Repite la contraseña del Administrador"
              ref={confirmatonPasswordRef}
            />
          </div>
          <input
            type="submit"
            value="Crear Usuario"
            className="button-login text-3xl text-center text-white mt-4 font-bold cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}
