import { createRef, useState } from "react";
import Alerta from "../../components/Alerta";
import clienteAxios from "../../config/axios";

export default function DoctorsRegisterPanel() {
  const typeIdRef = createRef();
  const userIdRef = createRef();
  const nameRef = createRef();
  const lastNameRef = createRef();
  const specialityRef = createRef();
  const hospitalRef = createRef();
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
      speciality_id: specialityRef.current.value,
      hospital_id: hospitalRef.current.value,
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
          Añade nuevo Doctor
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
              value="2"
              ref={typeIdRef}
              required
            />
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="user_id">Doctor ID:</label>
            <input
              type="text"
              id="user_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="user_id"
              placeholder="Ingresa el ID del Doctor"
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
              placeholder="Ingresa los nombres del Doctor"
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
              placeholder="Ingresa los apellidos del Doctor"
              ref={lastNameRef}
              required
            />
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="speciality_id">Especialidad ID:</label>
            <select
              id="speciality_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              ref={specialityRef}
              required
            >
              <option value="--Default--" selected>
                --Seleccione una opcion--
              </option>
              <option value="1" name="speciality_id">
                Oftalmologia
              </option>
              <option value="2" name="speciality_id">
                Neurologia
              </option>
              <option value="3" name="speciality_id">
                Pediatria
              </option>
              <option value="4" name="speciality_id">
                Cardiologia
              </option>
              <option value="5" name="speciality_id">
                Nefrologia
              </option>
              <option value="6" name="speciality_id">
                Endocrinologia
              </option>
              <option value="7" name="speciality_id">
                Ortopedia
              </option>
              <option value="8" name="speciality_id">
                Psiquiatria
              </option>
              <option value="9" name="speciality_id">
                Gastroenterologia
              </option>
              <option value="10" name="speciality_id">
                Urologia
              </option>
              <option value="11" name="speciality_id">
                Ginecologia
              </option>
              <option value="12" name="speciality_id">
                Nutricion
              </option>
            </select>
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="hospital_id">Hospital ID:</label>
            <select
              id="hospital_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              ref={hospitalRef}
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
              placeholder="Ingresa el usuario del Doctor"
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
              placeholder="Ingresa el correo del Doctor"
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
              placeholder="Ingresa la contraseña del Doctor"
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
              placeholder="Repite la contraseña del Doctor"
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
