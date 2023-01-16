import './navitem.css';

function NavItem( {categoria} ) {
    return (
        <li className="nav-item">
          <a className="nav-link" href="/">
            {categoria}
          </a>
        </li>
    );
}

export default NavItem;