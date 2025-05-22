import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Nav() {
  const { cart } = useContext(CartContext);

  const getLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav>
      <h1>Painting Store</h1>
      <ul>
        <li>
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={getLinkClass}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin" className={getLinkClass}>
            Admin
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={getLinkClass}>
            Cart: {cart.length}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
