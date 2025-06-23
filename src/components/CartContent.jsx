import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";
import { ToastContainer } from "react-toastify";

function CartContent() {
  const { cart, handleRemoveFromCart, handleRemoveAllFromCart } =
    useContext(CartContext);
  const total = cart.reduce(
    (acc, item) => (acc = acc + parseFloat(item.price)),
    0
  );
  return (
    <div className="cart-container">
      <ToastContainer />
      <h2 className="cart-title">Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="cart-table-wrapper">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Preview</th>
                <th>Title</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="cart-image"
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      className="cart-remove-button"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {cart.length > 0 && (
        <div className="cart-total">
          <button
            className="btn btn-outline-danger"
            onClick={handleRemoveAllFromCart}
          >
            <FaTrash />
          </button>
          <p>Total: ${total.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default CartContent;
