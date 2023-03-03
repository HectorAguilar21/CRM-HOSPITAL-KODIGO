import React from "react";
import { Link } from "react-router-dom";

export default function AuthInicio() {
  return (
    <div className="container container-form-login rounded-md mt-10 px-5 py-10">
      <div className="container-form">
        <div className="mb-3">
          <h1 className="text-center text-4xl">Ups, Inica Sesión</h1>
        </div>
        <div className="flex justify-center content-center">
          <Link
            className="button-login text-3xl text-white mt-4 font-bold cursor-pointer uppercase flex justify-center align-items-center"
            to="/auth/login"
          >
            Inicar Sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
