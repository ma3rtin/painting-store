import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Painting({ painting }) {
  const { handleAddToCart } = useContext(CartContext);
  return (
    <div className="art-card">
      <Link to={`/paintings/${painting.id}`} className="art-image-wrapper">
        <img
          src={painting.image}
          alt={painting.title}
          className="art-image"
        />
      </Link>

      <div className="art-card-body">
        <h5 className="art-title">{painting.title}</h5>
        <p className="art-price">${painting.price}</p>
        <button
          onClick={() => handleAddToCart(painting)}
          className="add-to-cart-btn"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Painting;
