function Details({ painting, handleAddToCart }) {
  return (
    <div className="details-container">
      <div className="details-image">
        <img src={painting.image} alt={painting.title} />
      </div>
      <div className="details-info">
        <h2 className="details-title">{painting.title}</h2>
        <h3 className="details-artist">{painting.artist}</h3>
        <p className="details-description">{painting.description}</p>
        <p className="details-price">${painting.price}</p>
        <button className="add-to-cart-button" onClick={() => handleAddToCart(painting)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Details;
