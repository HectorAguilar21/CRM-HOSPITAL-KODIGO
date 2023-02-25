import { createRef, useState } from "react";
import Alerta from "../../components/Alerta";
import clienteAxios from "../../config/axios";

export default function SpecialtiesRegisterPanel() {
  const specialityIdRef = createRef();
  const specialityNameRef = createRef();

  const [errores, setErrores] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const datos = {
      speciality_id: specialityIdRef.current.value,
      speciality_name: specialityNameRef.current.value,
    };

    console.log(datos);
    try {
      const respuesta = await clienteAxios.post(
        "/api/medical_speciality_information",
        datos
      );
      console.log(respuesta);
    } catch (error) {
      setErrores(Object.values(error.response.data.errors));
    }
  };

  return (
    <div className="">
      <div className="bg-white shadow-xl rounded-md mt-10 px-5 py-10">
        <h1 className="text-4xl font-black text-center mb-10">
          Registra una nueva Especialidad
        </h1>
        <form className="grid grid-cols-2" onSubmit={handleSubmit} noValidate>
          {errores
            ? errores.map((error) => <Alerta key={error}>{error}</Alerta>)
            : null}
          <div className="mb-4 mx-3 mt-">
            <label htmlFor="speciality_id">Especialidad ID:</label>
            <input
              type="text"
              id="speciality_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="speciality_id"
              placeholder="Ingresa el ID de la Especialidad"
              ref={specialityIdRef}
              required
            />
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="speciality_name">Nombre de la Especialidad:</label>
            <input
              type="text"
              id="speciality_name"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="speciality_name"
              placeholder="Ingresa el nombre de la Espcialidad"
              ref={specialityNameRef}
              required
            />
          </div>

          <input
            type="submit"
            value="Crear Registro"
            className="button-login text-3xl text-center text-white mt-4 font-bold cursor-pointer uppercase"
          />
        </form>
      </div>
    </div>
  );
}
