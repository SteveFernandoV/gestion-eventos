import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Gestión de Eventos
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li>
          <Link to="/events">Eventos</Link>
        </li>

        <li>
          <Link to="/participants">Participantes</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
