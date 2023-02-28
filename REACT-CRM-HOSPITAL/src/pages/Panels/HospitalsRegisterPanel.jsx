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
      {location.pathname === "/administrator/hospital_panel" ? (
        <>
          <div className="bg-white shadow-xl rounded-md mt-10 mx-20 px-5 py-10">
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
          <div className=" bg-white rounded-2xl my-5 container-info-citas overflow-auto mt-10 mx-20">
            <h1 className="text-center font-bold text-3xl text-indigo-700 pt-5">
              Hospitales:
            </h1>
            <div className="flex align-items-center p-5 bg-white rounded-2xl container info-container">
              <table class="table text-center align-middle">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th colSpan="3">Acciones</th>
                  </tr>
                </thead>
                <tbody class="table-group-divider">
                  <tr>
                    <th scope="row">HNSB</th>
                    <td>
                      Hospital Nacional General "Enfermera Angélica Vidal de
                      Najarro", San Bartolo
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary bg-indigo-500"
                        data-bs-toggle="modal"
                        data-bs-target="#infoPersonalDoctor"
                      >
                        Ver mas
                      </button>
                      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
                        <div
                          class="modal fade"
                          id="infoPersonalDoctor"
                          data-bs-backdrop="static"
                          data-bs-keyboard="false"
                          tabindex="-1"
                          aria-labelledby="staticBackdropLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1
                                  class="modal-title fs-5 font-bold text-indigo-700"
                                  id="staticBackdropLabel"
                                >
                                  Informacion Paciente (Nombre)
                                </h1>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <div className="py-2">
                                  <p className="font-normal text-indigo-700 text-lg">
                                    Direccion:
                                  </p>
                                  <p className="text-2xl">
                                    Centro Urbano San Bartolo Septima Etapa,
                                    Boulevard San Bartolo y Calle Meléndez,
                                    Contiguo a Zona Franca, San Bartolo
                                  </p>
                                </div>{" "}
                                <div className="py-2">
                                  <p className="font-normal text-indigo-700 text-lg">
                                    Ciudad:
                                  </p>
                                  <p className="text-2xl">Ilopango</p>
                                </div>{" "}
                                <div className="py-2">
                                  <p className="font-normal text-indigo-700 text-lg">
                                    Departamento:
                                  </p>
                                  <p className="text-2xl">San Salvador</p>
                                </div>{" "}
                                <div className="py-2">
                                  <p className="font-normal text-indigo-700 text-lg">
                                    Pais:
                                  </p>
                                  <p className="text-2xl">El Salvador</p>
                                </div>{" "}
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-primary bg-indigo-500"
                                  data-bs-dismiss="modal"
                                >
                                  Cerrar
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary bg-indigo-500"
                      >
                        Editar
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary bg-indigo-500"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div className=" bg-white rounded-2xl my-5 container-info-citas overflow-auto mt-10 mx-20">
          <h1 className="text-center font-bold text-3xl text-indigo-700 pt-5">
            Hospitales:
          </h1>
          <div className="flex align-items-center p-5 bg-white rounded-2xl container info-container">
            <table class="table text-center align-middle">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr>
                  <th scope="row">HNSB</th>
                  <td>
                    Hospital Nacional General "Enfermera Angélica Vidal de
                    Najarro", San Bartolo
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary bg-indigo-500"
                      data-bs-toggle="modal"
                      data-bs-target="#infoPersonalDoctor"
                    >
                      Ver mas
                    </button>
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
                      <div
                        class="modal fade"
                        id="infoPersonalDoctor"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1
                                class="modal-title fs-5 font-bold text-indigo-700"
                                id="staticBackdropLabel"
                              >
                                Informacion Paciente (Nombre)
                              </h1>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <div className="py-2">
                                <p className="font-normal text-indigo-700 text-lg">
                                  Direccion:
                                </p>
                                <p className="text-2xl">
                                  Centro Urbano San Bartolo Septima Etapa,
                                  Boulevard San Bartolo y Calle Meléndez,
                                  Contiguo a Zona Franca, San Bartolo
                                </p>
                              </div>{" "}
                              <div className="py-2">
                                <p className="font-normal text-indigo-700 text-lg">
                                  Ciudad:
                                </p>
                                <p className="text-2xl">Ilopango</p>
                              </div>{" "}
                              <div className="py-2">
                                <p className="font-normal text-indigo-700 text-lg">
                                  Departamento:
                                </p>
                                <p className="text-2xl">San Salvador</p>
                              </div>{" "}
                              <div className="py-2">
                                <p className="font-normal text-indigo-700 text-lg">
                                  Pais:
                                </p>
                                <p className="text-2xl">El Salvador</p>
                              </div>{" "}
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-primary bg-indigo-500"
                                data-bs-dismiss="modal"
                              >
                                Cerrar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
