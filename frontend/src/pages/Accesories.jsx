import React from 'react'
import { useCart } from '../context/CartContext'
import './Accessories.css'

const accessoriesList = [
  { id: 7, name: 'Buds', price: '$129', category: 'Audio', image: '/images/acc-buds.png', desc: 'Tiny wireless earbuds with bigger-than-expected sound.' },
  { id: 8, name: 'Charge 60W', price: '$49', category: 'Power', image: '/images/acc-charge.png', desc: 'A 60 W power brick with main-character energy.' },
  { id: 9, name: 'Shell Case', price: '$29', category: 'Protection', image: '/images/acc-shell.png', desc: 'Protective silhouette that keeps your phone visible.' },
  { id: 11, name: 'Halo Powerbank 100W', price: '$89', category: 'Power', image: '/images/acc-charge.png', desc: 'Sleek anodized aluminum emergency battery pack.' },
  { id: 12, name: 'Halo Audio Cable C-to-C', price: '$24', category: 'Audio', image: '/images/acc-buds.png', desc: 'Braided silicone high-res audio & 100W power cord.' },
  { id: 13, name: 'Halo Screen Shield Pro', price: '$19', category: 'Protection', image: '/images/acc-shell.png', desc: 'Oleophobic tempered ceramic glass for Halo devices.' }
]

const Accesories = () => {
  const { addToCart, notification } = useCart()

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
          {accessoriesList.map(item => (
            <div key={item.id} className="accessory-card">
              <div className="accessory-img-box">
                <img src={item.image} alt={item.name} className="accessory-item-img" />
              </div>
              <div className="accessory-info">
                <span className="accessory-category">{item.category}</span>
                <h3 className="accessory-name">{item.name}</h3>
                <p className="accessory-desc">{item.desc}</p>
                <div className="accessory-footer">
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
          ))}
        </div>
      </div>
    </div>
  )
}

export default Accesories