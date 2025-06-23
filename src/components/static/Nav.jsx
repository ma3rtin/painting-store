import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { SessionContext } from "../../context/SessionContext";
import {
  FaShoppingCart,
  FaSignOutAlt,
  FaSignInAlt,
  FaUser,
  FaPaintBrush,
} from "react-icons/fa";

function Nav() {
  const { cart } = useContext(CartContext);
  const { isAuthenticated, logout } = useContext(SessionContext);

  const getLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container">
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <FaPaintBrush className="me-2 text-warning" />
          <span className="brand-text">Painting Store</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <NavLink to="/" className={getLinkClass}>
                Home
              </NavLink>
            </li>

            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <NavLink to="/paintings/add" className={getLinkClass}>
                    Add Painting
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/admin" className={getLinkClass}>
                    Admin Panel
                  </NavLink>
                </li>

                <li className="nav-item">
                  <button
                    onClick={logout}
                    className="btn btn-outline-light ms-3"
                  >
                    <FaSignOutAlt className="me-1" />
                    Log Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/about" className={getLinkClass}>
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className={getLinkClass}>
                    <FaSignInAlt className="me-1" />
                    Log In
                  </NavLink>
                </li>

                <li className="nav-item ms-3">
                  <NavLink
                    to="/cart"
                    className="btn btn-outline-warning position-relative"
                  >
                    <FaShoppingCart />
                    {cart.length > 0 && (
                      <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                        {cart.length}
                      </span>
                    )}
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
