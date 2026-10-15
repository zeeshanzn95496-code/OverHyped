import React from 'react'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'
import './Accessories.css'

const accessoriesList = [
  { id: 7, name: 'Buds', price: '$129', category: 'Audio', image: '/images/acc-buds.png', desc: 'Tiny wireless earbuds with bigger-than-expected sound.' },
  { id: 8, name: 'Halo 80W Charger', price: '$79', category: 'Power', image: '/images/acc-charge.png', desc: 'Super fast. Power delivery.' },
  { id: 9, name: 'Shell Case', price: '$29', category: 'Protection', image: '/images/acc-shell.png', desc: 'Protective silhouette that keeps your phone visible.' },
  { id: 10, name: 'Halo Powerbank 100W', price: '$89', category: 'Power', image: '/images/acc-charge.png', desc: 'Sleek anodized aluminum emergency battery pack.' },
  { id: 11, name: 'Halo Powerbank 3000W', price: '$149', category: 'Power', image: '/images/acc-charge.png', desc: 'Massive power. Endless energy.' },
  { id: 12, name: 'Halo Powerbank 11000W Superfast', price: '$199', category: 'Power', image: '/images/acc-charge.png', desc: 'Ultra fast. Lightning charge.' },
  { id: 13, name: 'Halo Wired Headphone', price: '$89', category: 'Audio', image: '/images/acc-buds.png', desc: 'Pure sound. No compromise.' },
  { id: 14, name: 'Halo Wireless Headphone', price: '$199', category: 'Audio', image: '/images/acc-buds.png', desc: 'Freedom to move. Studio quality.' },
  { id: 15, name: 'Halo Charger Cover Batman', price: '$15', category: 'Protection', image: '/images/acc-shell.png', desc: 'Batman cartoon. Hero style.' },
  { id: 16, name: 'Halo Superman Charger Cover', price: '$18', category: 'Protection', image: '/images/acc-shell.png', desc: 'Superman cartoon. Man of steel.' }
]

const Accesories = () => {
  const { addToCart, notification } = useCart()
  const { toggleFavorite, isFavorite } = useFavorites()

  return (
    <div className="accessories-page">
      {notification && (
        <div className="overhyped-toast">
          <span className="toast-sparkle">✦</span>
          <span>{notification}</span>
        </div>
      )}

      <div className="accessories-container">
        <div className="accessories-header">
          <span className="acc-kicker">03 / THE SUPPORTING CAST</span>
          <h1 className="accessories-title">Gear & Accessories</h1>
          <p className="accessories-subtitle">Designed to complement your Halo hardware with the same tactile joy.</p>
        </div>

        <div className="accessories-grid">
          {accessoriesList.map(item => {
            const favorited = isFavorite(item.id)
            return (
              <div key={item.id} className="accessory-card">
                <div className="accessory-img-box">
                  <img src={item.image} alt={item.name} className="accessory-item-img" />
                </div>
                <div className="accessory-info">
                  <span className="accessory-category">{item.category}</span>
                  <h3 className="accessory-name">{item.name}</h3>
                  <p className="accessory-desc">{item.desc}</p>
                  <div className="accessory-footer">
                    <button
                      className={`accessory-fav-btn ${favorited ? 'active' : ''}`}
                      onClick={() => toggleFavorite(item)}
                      title={favorited ? "Remove from favorites" : "Add to favorites"}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill={favorited ? "#FA4465" : "none"} stroke="#FA4465" strokeWidth="2.2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </button>
                    <span className="accessory-price">{item.price}</span>
                    <button
                      className="accessory-button"
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

export default Accesories