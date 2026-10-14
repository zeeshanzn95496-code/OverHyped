import React from 'react'
import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import { useCart } from '../context/CartContext'
import './Favorites.css'

const Favorites = () => {
  const { favorites, removeFromFavorites, clearFavorites } = useFavorites()
  const { addToCart } = useCart()

  if (favorites.length === 0) {
    return (
      <div className="favorites-page">
        <div className="favorites-empty-card">
          <div className="empty-star-bubble">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FA4465" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          <h1 className="favorites-empty-title">Your wishlist is empty</h1>
          <p className="favorites-empty-message">Save devices or gear you love to easily revisit them later.</p>
          <Link to="/shop" className="btn-fav-shop">Explore Catalogue &rarr;</Link>
        </div>
      </div>
    )
  }

  const handleMoveToBag = (item) => {
    addToCart(item)
    removeFromFavorites(item.id)
  }

  return (
    <div className="favorites-page">
      <div className="favorites-container">
        <div className="favorites-header">
          <span className="favorites-kicker">SAVED PICKS</span>
          <h1 className="favorites-title">Your Wishlist ({favorites.length} {favorites.length === 1 ? 'item' : 'items'})</h1>
        </div>

        <div className="favorites-grid">
          {favorites.map((item, index) => (
            <div key={`${item.id}-${index}`} className="fav-card">
              <div className="fav-thumb-box">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="fav-item-img" />
                ) : (
                  <div className="fav-placeholder-box" style={{ backgroundColor: item.color || '#FA4465' }}>
                    ✦
                  </div>
                )}
              </div>

              <div className="fav-card-body">
                <span className="fav-cat-tag">{item.category || 'Device'}</span>
                <h3 className="fav-item-name">{item.name}</h3>
                {item.description && <p className="fav-item-desc">{item.description}</p>}
                
                <div className="fav-price-row">
                  <span className="fav-price">{item.price}</span>
                </div>

                <div className="fav-card-actions">
                  <button className="btn-move-bag" onClick={() => handleMoveToBag(item)}>
                    Move to Bag +
                  </button>
                  <button className="btn-remove-fav" onClick={() => removeFromFavorites(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="favorites-bottom-actions">
          <button className="btn-clear-all" onClick={clearFavorites}>
            Clear all saved items
          </button>
        </div>
      </div>
    </div>
  )
}

export default Favorites
