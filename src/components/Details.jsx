function Details({ painting, handleAddToCart }) {
  return (
    <section className="details-section">
      <div className="details-container">
        
        <div className="details-image-wrapper">
          <img src={painting.image} alt={painting.title} className="details-image" />
        </div>

        <div className="details-info">
          <h2 className="details-title">{painting.title}</h2>
          <h4 className="details-artist">By {painting.artist}</h4>
          <p className="details-description">{painting.description}</p>
          <p className="details-price">${painting.price}</p>
          <button className="details-add-btn" onClick={() => handleAddToCart(painting)}>
            Add to Cart
          </button>
        </div>

      </div>
    </section>
  );
}

export default Details;
