import { createRef, useState } from "react";
import Alerta from "../../components/Alerta";
import clienteAxios from "../../config/axios";

export default function HospitalsRegisterPanel() {
  const hospitalIdRef = createRef();
  const hospitalNameRef = createRef();
  const hospitalAddressRef = createRef();
  const hospitalCityRef = createRef();
  const hospitalDepartmentRef = createRef();
  const hospitalCountryRef = createRef();

  const [errores, setErrores] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const datos = {
      hospital_id: hospitalIdRef.current.value,
      hospital_name: hospitalNameRef.current.value,
      hospital_address: hospitalAddressRef.current.value,
      hospital_city: hospitalCityRef.current.value,
      hospital_department: hospitalDepartmentRef.current.value,
      hospital_country: hospitalCountryRef.current.value,
    };

    console.log(datos);
    try {
      const respuesta = await clienteAxios.post(
        "/api/hospital_information",
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
          Registra un nuevo Hospital
        </h1>
        <form className="grid grid-cols-2" onSubmit={handleSubmit}>
          {errores
            ? errores.map((error) => <Alerta key={error}>{error}</Alerta>)
            : null}
          <div className="mb-4 mx-3 mt-">
            <label htmlFor="hospital_id">Hospital ID:</label>
            <input
              type="text"
              id="hospital_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="hospital_id"
              placeholder="Ingresa el ID del Hospital"
              ref={hospitalIdRef}
              required
            />
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="hospital_name">Nombre del Hospital:</label>
            <input
              type="text"
              id="hospital_name"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="hospital_name"
              placeholder="Ingresa el nombre del Hospital"
              ref={hospitalNameRef}
              required
            />
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="hospital_address">Direccion:</label>
            <input
              type="text"
              id="hospital_address"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="hospital_address"
              placeholder="Ingresa la direccion del hospital, sin ciudad, ni departamento, ni pais"
              ref={hospitalAddressRef}
              required
            />
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="hospital_city">Ciudad:</label>
            <input
              type="text"
              id="hospital_city"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="hospital_city"
              placeholder="Ingresa la ciudad del hospital"
              ref={hospitalCityRef}
              required
            />
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="hospital_department">Departamento:</label>
            <select
              id="hospital_department"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              ref={hospitalDepartmentRef}
              required
            >
              <option value="--Default--" selected>
                --Seleccione una opcion--
              </option>
              <option value="Ahuachapan" name="hospital_department">
                Ahuachapan
              </option>
              <option value="Cabañas" name="hospital_department">
                Cabañas
              </option>
              <option value="Chalatenango" name="hospital_department">
                Chalatenango
              </option>
              <option value="Cuscatlan" name="hospital_department">
                Cuscatlan
              </option>
              <option value="La Libertad" name="hospital_department">
                La Libertad
              </option>
              <option value="Morazan" name="hospital_department">
                Morazan
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
              <option value="La Union" name="hospital_department">
                La Union
              </option>
              <option value="Usulutan" name="hospital_department">
                Usulutan
              </option>
            </select>
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="hospital_country">Pais:</label>
            <select
              id="hospital_country"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              ref={hospitalCountryRef}
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
