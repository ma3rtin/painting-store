import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Nav() {
  const { cart } = useContext(CartContext);
  return (
    <nav>
      <h1>Painting Store</h1>
      <ul>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/cart" className="link">
            Cart: {cart.length}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
