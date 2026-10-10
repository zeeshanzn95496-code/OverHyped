import React from 'react'
import { useFavorites } from '../context/FavoritesContext'
import './Favorites.css'

const Favorites = () => {
  const { favorites, removeFromFavorites, clearFavorites } = useFavorites()

  if (favorites.length === 0) {
    return (
      <div className="favorites-page">
        <div className="favorites-empty">
          <h1 className="favorites-empty-title">Your favorites list is empty</h1>
          <p className="favorites-empty-message">Save items you love by clicking the star icon.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <div className="section-number">FAVORITES</div>
        <h1 className="favorites-title">Your Wishlist ({favorites.length} items)</h1>
      </div>

      <div className="favorites-content">
        <div className="favorites-grid">
          {favorites.map((item, index) => (
            <div key={index} className="favorite-item">
              <div className="favorite-item-image" style={{ background: item.color }}>
                <div className="favorite-item-mockup"></div>
              </div>
              <div className="favorite-item-details">
                <div className="favorite-item-category">{item.category}</div>
                <h3 className="favorite-item-name">{item.name}</h3>
                <p className="favorite-item-description">{item.description}</p>
                <div className="favorite-item-rating">
                  <span className="star">★</span>
                  <span className="rating-value">{item.rating}</span>
                </div>
                <div className="favorite-item-footer">
                  <span className="favorite-item-price">{item.price}</span>
                  <button className="remove-button" onClick={() => removeFromFavorites(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="favorites-actions">
          <button className="clear-button" onClick={clearFavorites}>
            Clear All Favorites
          </button>
        </div>
      </div>
    </div>
  )
}

export default Favorites
