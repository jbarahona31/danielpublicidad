import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Daniel Publicidad" />
        <span>Daniel Publicidad</span>
      </div>

      <ul className="menu">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/uniformes">Uniformes</Link></li>
        <li><Link to="/estampados">Estampados</Link></li>
        <li><Link to="/gorras">Gorras</Link></li>
        <li><Link to="/posillos">Posillos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}
