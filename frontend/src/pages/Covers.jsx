import React from 'react'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'
import './Covers.css'

const coversList = [
  { id: 16, name: 'Halo Clear Case', price: '$29', category: 'Protection', image: '/images/acc-shell.png', desc: 'Crystal clear. Maximum protection for your device.' },
  { id: 17, name: 'Halo Leather Case', price: '$49', category: 'Premium', image: '/images/acc-shell.png', desc: 'Premium leather. Sleek design. Elegant protection.' },
  { id: 18, name: 'Halo Rugged Case', price: '$39', category: 'Protection', image: '/images/acc-shell.png', desc: 'Military grade. Drop protection for extreme conditions.' },
  { id: 19, name: 'Halo Slim Case', price: '$24', category: 'Slim', image: '/images/acc-shell.png', desc: 'Ultra thin. Feather light. Minimal bulk.' },
  { id: 20, name: 'Halo Designer Case', price: '$59', category: 'Designer', image: '/images/acc-shell.png', desc: 'Artistic. Unique patterns. Stand out from the crowd.' },
  { id: 21, name: 'Halo Marble White Cover Limited', price: '$69', category: 'Premium', image: '/images/acc-shell.png', desc: 'Elegant marble. Premium finish. Limited edition.' },
  { id: 22, name: 'Halo Triple Fold Cover', price: '$89', category: 'Specialized', image: '/images/acc-shell.png', desc: 'Perfect fit. Three screens. Designed for Triple Fold.' },
  { id: 23, name: 'Halo Quadra Cover', price: '$99', category: 'Premium', image: '/images/acc-shell.png', desc: 'Four screens. Ultimate protection. Built for Quadra.' }
]

const Covers = () => {
  const { addToCart, notification } = useCart()
  const { toggleFavorite, isFavorite } = useFavorites()

  return (
    <div className="covers-page">
      {notification && (
        <div className="overhyped-toast">
          <span className="toast-sparkle">✦</span>
          <span>{notification}</span>
        </div>
      )}

      <div className="covers-container">
        <div className="covers-header">
          <span className="covers-kicker">04 / DEVICE PROTECTION</span>
          <h1 className="covers-title">Cases & Covers</h1>
          <p className="covers-subtitle">Protect your Halo device with style. From rugged to refined, we've got you covered.</p>
        </div>

        <div className="covers-grid">
          {coversList.map(item => {
            const favorited = isFavorite(item.id)
            return (
              <div key={item.id} className="cover-card">
                <div className="cover-img-box">
                  <img src={item.image} alt={item.name} className="cover-item-img" />
                </div>
                <div className="cover-info">
                  <span className="cover-category">{item.category}</span>
                  <h3 className="cover-name">{item.name}</h3>
                  <p className="cover-desc">{item.desc}</p>
                  <div className="cover-footer">
                    <button
                      className={`cover-fav-btn ${favorited ? 'active' : ''}`}
                      onClick={() => toggleFavorite(item)}
                      title={favorited ? "Remove from favorites" : "Add to favorites"}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill={favorited ? "#FA4465" : "none"} stroke="#FA4465" strokeWidth="2.2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </button>
                    <span className="cover-price">{item.price}</span>
                    <button
                      className="cover-button"
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

export default Covers
