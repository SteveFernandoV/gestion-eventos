import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Gestión de Eventos</Link>
      </div>

      <ul className="navbar-menu">
        <li>
          <NavLink to="/" end>
            Inicio
          </NavLink>
        </li>

        <li>
  <NavLink to="/enroll-participant">
    Inscripciones
  </NavLink>
</li>

        <li>
          <NavLink to="/events">
            Eventos
          </NavLink>
        </li>

        <li>
          <NavLink to="/new-event">
            Nuevo Evento
          </NavLink>
        </li>

        <li>
          <NavLink to="/participants">
            Participantes
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard">
            Dashboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;