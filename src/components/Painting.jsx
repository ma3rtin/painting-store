import "./stylePainting.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Painting({ painting }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="painting-card" key={painting.id}>
      <img
        src={painting.image}
        alt={painting.title}
        className="painting-image"
      />
      <h3 className="painting-name">{painting.title}</h3>
      <p className="painting-price">${painting.price}</p>
      <p className="painting-description">{painting.description}</p>
      <p className="painting-artist">{painting.artist}</p>
      <button onClick={() => addToCart(painting)}>Add to Cart</button>
    </div>
  );
}

export default Painting;
