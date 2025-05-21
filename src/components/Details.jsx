import React from 'react'

function Details({painting}) {
  return (
    <div className="painting-details">
      <div className="painting-image">
        <img src={painting.image} alt={painting.title} />
      </div>
      <div className="painting-info">
        <h2 className="painting-title">{painting.title}</h2>
        <h3 className="painting-artist">{painting.artist}</h3>
        <p className="painting-description">{painting.description}</p>
        <p className="painting-price">{painting.price}</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  )
}

export default Details
