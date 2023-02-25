import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AuthLayout() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userType = searchParams.get("type");

  let title;
  let image;

  switch (userType) {
    case "admin":
      title = "ACCESO PARA ADMINISTRADORES";
      break;
    case "secretary":
      title = "ACCESO PARA SECRETARIAS";
      break;
    case "doctor":
      title = "ACCESO PARA DOCTORES";
      break;
    case "patients":
      title = "ACCESO PARA PACIENTES";
      break;
    default:
      title = "ACCESO";
      image = "../img/caduceo.png";
      break;
  }

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
              <h1 className="text-6xl text-white py-2">{title}</h1>
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
