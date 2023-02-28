import { createRef, useState } from "react";
import Alerta from "../../components/Alerta";
import clienteAxios from "../../config/axios";

export default function PatientsRegisterPanel() {
  const typeIdRef = createRef();
  const userIdRef = createRef();
  const nameRef = createRef();
  const lastNameRef = createRef();
  const hospitalRef = createRef();
  const numberPhoneRef = createRef();
  const dateOfBirthRef = createRef();
  const genderRef = createRef();
  const addressRef = createRef();
  const cityRef = createRef();
  const departmentRef = createRef();
  const countryRef = createRef();
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
      hospital_id: hospitalRef.current.value,
      number_phone: numberPhoneRef.current.value,
      date_of_birth: dateOfBirthRef.current.value,
      gender: genderRef.current.value,
      address: addressRef.current.value,
      city: cityRef.current.value,
      department: departmentRef.current.value,
      country: countryRef.current.value,
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
      <div className="bg-white shadow-xl rounded-md mt-10 mx-20 px-5 py-10">
        <h1 className="text-4xl font-black text-center mb-10">
          Añade nuevo Paciente
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
              value="3"
              ref={typeIdRef}
              required
            />
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="user_id">Paciente ID:</label>
            <input
              type="text"
              id="user_id"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="user_id"
              placeholder="Ingresa el ID del Paciente"
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
              placeholder="Ingresa los nombres del Paciente"
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
              placeholder="Ingresa los apellidos del Paciente"
              ref={lastNameRef}
              required
            />
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="hospital_id">Hospital que se registro ID:</label>
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
            <label htmlFor="number_phone">Numero de telefono:</label>
            <input
              type="number"
              id="number_phone"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="number_phone"
              placeholder="Ingresa el numero de telefono del paciente"
              ref={numberPhoneRef}
              required
            />
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="date_of_birth">Fecha de Nacimiento:</label>
            <input
              type="date"
              id="date_of_birth"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="date_of_birth"
              placeholder="Ingresa la fecha de naciemiento del Paciente"
              ref={dateOfBirthRef}
              required
            />
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="gender">Genero:</label>
            <select
              id="gender"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              ref={genderRef}
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
          <div className="mb-4 mx-3">
            <label htmlFor="address">Direccion Residencia:</label>
            <input
              type="text"
              id="address"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="address"
              placeholder="Ingresa la dirección de residencia del Paciente, sin ciudad, sin departamento, ni pais"
              ref={addressRef}
              required
            />
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="ciudad">ciudad:</label>
            <input
              type="text"
              id="ciudad"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="ciudad"
              placeholder="Ingresa la ciudad"
              ref={cityRef}
              required
            />
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="hospital_department">Departamento:</label>
            <select
              id="hospital_department"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              ref={departmentRef}
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
              ref={countryRef}
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
          <div className="mb-4 mx-3">
            <label htmlFor="user">Usuario:</label>
            <input
              type="text"
              id="user"
              className="mt-2 w-full p-2 bg-slate-100 rounded-md"
              name="user"
              placeholder="Ingresa el usuario del Paciente"
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
              placeholder="Ingresa el correo del Paciente"
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
              placeholder="Ingresa la contraseña del Paciente"
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
              placeholder="Repite la contraseña del Paciente"
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
      <div className=" bg-white rounded-2xl my-5 container-info-citas overflow-auto mt-10 mx-20">
        <h1 className="text-center font-bold text-3xl text-indigo-700 pt-5">
          Pacientes:
        </h1>
        <div className="flex align-items-center p-5 bg-white rounded-2xl container info-container">
          <table class="table text-center align-middle">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">Usuario</th>

                <th colSpan="3">Acciones</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr>
                <th scope="row">1</th>
                <td>Paciente Name</td>
                <td>Paciente Correo</td>
                <td>Paciente Usuario</td>
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
                                Numero de Telefono:
                              </p>
                              <p className="text-2xl">76360002</p>
                            </div>{" "}
                            <div className="py-2">
                              <p className="font-normal text-indigo-700 text-lg">
                                Contacto de Emergencia:
                              </p>
                              <p className="text-2xl">454351651</p>
                            </div>{" "}
                            <div className="py-2">
                              <p className="font-normal text-indigo-700 text-lg">
                                Fecha de Nacimiento:
                              </p>
                              <p className="text-2xl">1997-08-23</p>
                            </div>{" "}
                            <div className="py-2">
                              <p className="font-normal text-indigo-700 text-lg">
                                Direccion de Residencia:
                              </p>
                              <p className="text-2xl">
                                calle principal a Radio Vea, pasaje 1 Poligono A
                                casa #2
                              </p>
                            </div>{" "}
                            <div className="py-2">
                              <p className="font-normal text-indigo-700 text-lg">
                                Ciudad:
                              </p>
                              <p className="text-2xl">San Martin</p>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
