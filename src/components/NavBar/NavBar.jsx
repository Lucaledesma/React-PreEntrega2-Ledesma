import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import NavItem from "../NavItem/NavItem";
import "./navbar.css";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-header">
      <Logo titulo="TiendaVirtual"/>
      
      <ul className="nav-menu">

        <Link to="/category/deportes">
          <NavItem categoria="Deportes"/>
        </Link>

        <Link to="/category/cooperativo">
          <NavItem categoria="Cooperativo"/>
        </Link>

        <Link to="/category/disparos">
          <NavItem categoria="Disparos"/>
        </Link>

        <Link to="/category/mundoabierto">
          <NavItem categoria="Mundo Abierto"/>
        </Link>

        <CartWidget />
      </ul>
    </nav>
  );
}

export default NavBar;
