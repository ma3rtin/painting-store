import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartContent() {
  const { cart, handleRemoveFromCart } = useContext(CartContext);
  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart empty</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td><img src={item.image} alt={item.title}></img></td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>
                  <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CartContent;
