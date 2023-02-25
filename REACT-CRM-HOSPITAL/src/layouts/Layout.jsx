import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav className="navbar">
        <div className="container container-layout">
          <a className="navbar-brand" href="#">
            <img
              src="../img/caduceo.png"
              alt="Logo"
              className="img d-inline-block align-text-top"
            />
          </a>
          <div className="navbar-font text-center">
            <h2 className="text-4xl text-white">HOSPITAL NACIONAL</h2>
            <h1 className="text-6xl text-white py-2">MINISTERIO DE SALUD</h1>
          </div>
          <a className="navbar-brand" href="#">
            <img
              src="../img/caduceo.png"
              alt="Logo"
              className="img d-inline-block align-text-top"
            />
          </a>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
