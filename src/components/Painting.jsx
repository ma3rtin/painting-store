import "../styles/stylePainting.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Painting({ painting }) {
  const { handleAddToCart } = useContext(CartContext);
  return (
    <div className="painting-card" key={painting.id}>
      <div>
        <Link to={`/paintings/${painting.id}`}>
          <img
            src={painting.image}
            alt={painting.title}
            className="painting-image"
          />
        </Link>
      </div>
      <div className="painting-info">
        <h3 className="painting-title">{painting.title}</h3>
        <p className="painting-price">${painting.price}</p>
      </div>
      <button
        onClick={() => handleAddToCart(painting)}
        className="add-to-cart-button"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Painting;
