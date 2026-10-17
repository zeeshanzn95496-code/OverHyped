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
          <h1 className="build-title">Choose Your Base Device</h1>
          <p className="build-subtitle">Select from our available mobile devices to start customizing your perfect setup.</p>
        </div>

        <div className="build-grid">
          {availableMobiles.map(mobile => {
            const isDark = mobile.theme === 'dark'
            const favorited = isFavorite(mobile.id)
            const isSelected = selectedMobile?.id === mobile.id

            return (
              <div
                key={mobile.id}
                className={`build-card ${isDark ? 'card-dark' : 'card-light'} ${isSelected ? 'selected' : ''}`}
                onClick={() => setSelectedMobile(mobile)}
              >
                <div className="build-card-top">
                  <span className="build-card-cat">{mobile.category}</span>
                  <button
                    className={`build-card-fav ${favorited ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(mobile)
                    }}
                    aria-label="Wishlist toggle"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill={favorited ? "#FA4465" : "none"} stroke="#FA4465" strokeWidth="2.2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>

                <Link to={`/product/${mobile.id}`} className="build-img-link" onClick={(e) => e.stopPropagation()}>
                  <img src={mobile.image} alt={mobile.name} className="build-item-image" />
                </Link>

                <div className="build-card-info">
                  <h3 className="build-item-title">{mobile.name}</h3>
                  <p className="build-item-desc">{mobile.description}</p>
                  
                  <div className="build-item-rating">
                    <span className="star">★</span>
                    <span className="rating-val">{mobile.rating}</span>
                    <span className="dot">&bull;</span>
                    <span className="revs">{mobile.reviews}</span>
                  </div>

                  <div className="build-card-bottom-row">
                    <span className="build-item-price">{mobile.price}</span>
                    <button
                      className="btn-build-add"
                      onClick={(e) => {
                        e.stopPropagation()
                        addToCart(mobile)
                      }}
                    >
                      Add to bag +
                    </button>
                  </div>
                </div>

                {isSelected && (
                  <div className="build-selected-badge">
                    <span className="selected-check">✓</span>
                    <span>Selected</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {selectedMobile && (
          <div className="build-actions">
            <button className="btn-build-cancel" onClick={() => setSelectedMobile(null)}>
              Cancel Selection
            </button>
            <Link to={`/product/${selectedMobile.id}`} className="btn-build-customize">
              Customize {selectedMobile.name} →
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default BuildYourOwn
