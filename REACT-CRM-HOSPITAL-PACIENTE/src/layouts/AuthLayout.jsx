import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AuthLayaout() {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="../img/caduceo.png"
              alt="Logo"
              className="img d-inline-block align-text-top"
            />
          </Link>
          <div className="navbar-font text-center">
            <Link to="/">
              <h2 className="text-4xl text-white">HOSPITAL NACIONAL</h2>
              <h1 className="text-6xl text-white py-2">ACCESO PACIENTES</h1>
            </Link>
          </div>
          <Link className="navbar-brand" to="/">
            <img
              src="../img/caduceo.png"
              alt="Logo"
              className="img d-inline-block align-text-top"
            />
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
