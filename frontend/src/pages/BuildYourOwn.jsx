import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'
import './BuildYourOwn.css'

const availableMobiles = [
  {
    id: 1,
    name: 'Halo One',
    category: 'Phones',
    description: 'The conversation starter',
    rating: '4.7',
    reviews: '3 owner reviews',
    price: '$799',
    image: '/images/halo-hero.png',
    theme: 'coral'
  },
  {
    id: 2,
    name: 'Halo Mini',
    category: 'Phones',
    description: 'Small phone. Big entrance.',
    rating: '4.7',
    reviews: '3 owner reviews',
    price: '$649',
    image: '/images/halo-mini.png',
    theme: 'teal'
  },
  {
    id: 3,
    name: 'Halo Ultra',
    category: 'Phones',
    description: 'For the overachievers',
    rating: '4.8',
    reviews: '5 owner reviews',
    price: '$999',
    image: '/images/halo-ultra.png',
    theme: 'dark'
  },
  {
    id: 4,
    name: 'Foldline',
    category: 'Phones',
    description: 'Two screens. One point of view.',
    rating: '4.7',
    reviews: '3 owner reviews',
    price: '$1,299',
    image: '/images/foldline.png',
    theme: 'purple'
  },
  {
    id: 5,
    name: 'Triple Fold',
    category: 'Phones',
    description: 'Three screens. Infinite possibilities.',
    rating: '4.9',
    reviews: '2 owner reviews',
    price: '$1,499',
    image: '/images/foldline.png',
    theme: 'teal'
  },
  {
    id: 6,
    name: 'Quadra',
    category: 'Phones',
    description: 'Four screens. Ultimate multitasking.',
    rating: '5.0',
    reviews: '1 owner review',
    price: '$1,799',
    image: '/images/foldline.png',
    theme: 'dark'
  }
]

const BuildYourOwn = () => {
  const { addToCart, notification: cartNotification } = useCart()
  const { toggleFavorite, isFavorite, notification: favNotification } = useFavorites()
  const notification = cartNotification || favNotification
  const [selectedMobile, setSelectedMobile] = useState(null)
  const [selectedRAM, setSelectedRAM] = useState(null)

  const ramOptions = [
    { size: '8GB', price: 0 },
    { size: '16GB', price: 100 },
    { size: '24GB', price: 200 },
    { size: '32GB', price: 300 }
  ]

  const getMobilePriceWithRAM = () => {
    if (!selectedMobile || !selectedRAM) return 0
    const basePrice = parseInt(selectedMobile.price.replace(/[$,]/g, ''))
    const ramPrice = ramOptions.find(r => r.size === selectedRAM)?.price || 0
    return `$${basePrice + ramPrice}`
  }

  return (
    <div className="build-your-own-page">
      {notification && (
        <div className="overhyped-toast">
          <span className="toast-sparkle">✦</span>
          <span>{notification}</span>
        </div>
      )}

      <div className="build-container">
        <div className="build-header">
          <span className="build-kicker">BUILD YOUR OWN</span>
          <h1 className="build-title">Customize Your Perfect Device</h1>
          <p className="build-subtitle">Select a device and customize it with your preferred specifications.</p>
        </div>

        <div className="build-content">
          <div className="build-selection-panel">
            <div className="mobile-selection">
              <h3 className="selection-label">Select Device</h3>
              <div className="mobile-buttons">
                {availableMobiles.map(mobile => (
                  <button
                    key={mobile.id}
                    className={`mobile-btn ${selectedMobile?.id === mobile.id ? 'active' : ''}`}
                    onClick={() => { setSelectedMobile(mobile); setSelectedRAM(null) }}
                  >
                    {mobile.name}
                  </button>
                ))}
              </div>
            </div>

            {selectedMobile && (
              <div className="ram-selection">
                <h3 className="selection-label">Select RAM</h3>
                <div className="ram-buttons">
                  {ramOptions.map((ram) => (
                    <button
                      key={ram.size}
                      className={`ram-btn ${selectedRAM === ram.size ? 'active' : ''}`}
                      onClick={() => setSelectedRAM(ram.size)}
                    >
                      {ram.size}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="build-preview-panel">
            {selectedMobile ? (
              <div className="device-preview">
                <img src={selectedMobile.image} alt={selectedMobile.name} className="preview-image" />
                <div className="preview-info">
                  <h3 className="preview-title">{selectedMobile.name}</h3>
                  <p className="preview-desc">{selectedMobile.description}</p>
                  {selectedRAM && (
                    <div className="preview-specs">
                      <span className="spec-item">RAM: {selectedRAM}</span>
                      <span className="spec-item">Price: {getMobilePriceWithRAM()}</span>
                    </div>
                  )}
                </div>
                {selectedRAM && (
                  <button
                    className="btn-add-to-cart"
                    onClick={() => {
                      const customMobile = {
                        ...selectedMobile,
                        name: `${selectedMobile.name} (${selectedRAM} RAM)`,
                        customRAM: selectedRAM,
                        price: getMobilePriceWithRAM()
                      }
                      addToCart(customMobile)
                    }}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            ) : (
              <div className="preview-placeholder">
                <div className="placeholder-icon">📱</div>
                <p className="placeholder-text">Select a device to preview</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuildYourOwn
