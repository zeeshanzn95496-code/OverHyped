import React from 'react'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'
import './Skins.css'

const skinsList = [
  { id: 25, name: 'Halo Matte Skin', price: '$4', category: 'Finish', image: '/images/acc-shell.png', desc: 'Soft touch. No fingerprints. Smooth matte finish.' },
  { id: 26, name: 'Halo Glossy Skin', price: '$5', category: 'Finish', image: '/images/acc-shell.png', desc: 'Shiny finish. Premium look. Glossy texture.' },
  { id: 27, name: 'Halo Carbon Fiber Skin', price: '$5', category: 'Premium', image: '/images/acc-shell.png', desc: 'Carbon texture. Professional. High-tech feel.' },
  { id: 28, name: 'Halo Wood Grain Skin', price: '$4', category: 'Natural', image: '/images/acc-shell.png', desc: 'Natural wood. Elegant finish. Warm aesthetic.' },
  { id: 29, name: 'Halo Gradient Skin', price: '$5', category: 'Artistic', image: '/images/acc-shell.png', desc: 'Color blend. Eye-catching. Vibrant gradients.' }
]

const Skins = () => {
  const { addToCart, notification } = useCart()
  const { toggleFavorite, isFavorite } = useFavorites()

  return (
    <div className="skins-page">
      {notification && (
        <div className="overhyped-toast">
          <span className="toast-sparkle">✦</span>
          <span>{notification}</span>
        </div>
      )}

      <div className="skins-container">
        <div className="skins-header">
          <span className="skins-kicker">05 / CUSTOM FINISHES</span>
          <h1 className="skins-title">Skins & Decals</h1>
          <p className="skins-subtitle">Customize your device with premium skins. Transform the look without the bulk.</p>
        </div>

        <div className="skins-grid">
          {skinsList.map(item => {
            const favorited = isFavorite(item.id)
            return (
              <div key={item.id} className="skin-card">
                <div className="skin-img-box">
                  <img src={item.image} alt={item.name} className="skin-item-img" />
                </div>
                <div className="skin-info">
                  <span className="skin-category">{item.category}</span>
                  <h3 className="skin-name">{item.name}</h3>
                  <p className="skin-desc">{item.desc}</p>
                  <div className="skin-footer">
                    <button
                      className={`skin-fav-btn ${favorited ? 'active' : ''}`}
                      onClick={() => toggleFavorite(item)}
                      title={favorited ? "Remove from favorites" : "Add to favorites"}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill={favorited ? "#FA4465" : "none"} stroke="#FA4465" strokeWidth="2.2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </button>
                    <span className="skin-price">{item.price}</span>
                    <button
                      className="skin-button"
                      onClick={() => addToCart(item)}
                    >
                      Add to bag +
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skins
