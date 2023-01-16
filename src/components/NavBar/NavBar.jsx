import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import NavItem from "../NavItem/NavItem";
import "./navbar.css";

function NavBar() {
  return (
    <nav className="nav-header">
      <Logo titulo="TiendaVirtual"/>
      
      <ul className="nav-menu">
        <NavItem categoria="Deportes"/>
        <NavItem categoria="Aventura"/>
        <NavItem categoria="Mundo Abierto"/>
        <CartWidget />
      </ul>
    </nav>
  );
}

export default NavBar;
