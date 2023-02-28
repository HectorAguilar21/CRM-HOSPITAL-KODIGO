import React from "react";

export default function GeneralPanel() {
  return (
    <div>
      <div className="flex align-items-center bg-white rounded-2xl mt-5 container">
        <div className="text-6xl font-bold flex justify-center w-1/4 my-4">
          <img src="/img/perfil.png" alt="Foto de perfil" />
        </div>
        <div className="info-container text-6xl font-bold w-3/4 px-10 py-10">
          <div className="py-2">
            <p className="font-normal text-indigo-700 text-lg">
              Nombre Completo:
            </p>
            <p className="text-2xl">Hector Alejandro Aguilar Ramos</p>
          </div>{" "}
          <hr />
          <div className="py-2">
            <p className="font-normal text-indigo-700 text-lg">
              ID de Usuario:
            </p>
            <p className="text-2xl">05578144-9</p>
          </div>{" "}
          <hr />
          <div className="py-2">
            <p className="font-normal text-indigo-700 text-lg">
              Numero de Telefono:
            </p>
            <p className="text-2xl">76360002</p>
          </div>{" "}
          <hr />
          <div className="py-2">
            <p className="font-normal text-indigo-700 text-lg">
              Contacto de Emergencia:
            </p>
            <p className="text-2xl">70046179</p>
          </div>{" "}
          <hr />
          <div className="py-2">
            <p className="font-normal text-indigo-700 text-lg">
              Fecha de Naciemiento:
            </p>
            <p className="text-2xl">1997-08-23</p>
          </div>{" "}
          <hr />
          <div className="py-2">
            <p className="font-normal text-indigo-700 text-lg">
              Direccion de residencia:
            </p>
            <p className="text-2xl">
              calle principal a Radio Vea, pasaje 1 Poligono A casa #2
            </p>
          </div>{" "}
          <hr />
          <div className="py-2">
            <p className="font-normal text-indigo-700 text-lg">Ciudad:</p>
            <p className="text-2xl">San Martin</p>
          </div>{" "}
          <hr />
          <div className="py-2">
            <p className="font-normal text-indigo-700 text-lg">Departamento:</p>
            <p className="text-2xl">San Salvador</p>
          </div>{" "}
          <hr />
          <div className="py-2">
            <p className="font-normal text-indigo-700 text-lg">Pais:</p>
            <p className="text-2xl">El Salvador</p>
          </div>
        </div>
      </div>
    </div>
  );
}
