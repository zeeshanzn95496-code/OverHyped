import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'
import './TopProducts.css'

const flagshipPhones = [
  {
    id: 1,
    tag: '01 / PHONE',
    name: 'Halo One',
    description: 'The conversation starter',
    rating: '4.7',
    reviews: '3 owner reviews',
    price: '$799',
    image: '/images/halo-hero.png',
    theme: 'light',
    colorName: 'Coral Red'
  },
  {
    id: 2,
    tag: '02 / PHONE',
    name: 'Halo Mini',
    description: 'Small phone. Big entrance.',
    rating: '4.7',
    reviews: '3 owner reviews',
    price: '$649',
    image: '/images/halo-mini.png',
    theme: 'light',
    colorName: 'Tide Cyan'
  },
  {
    id: 3,
    tag: '03 / PHONE',
    name: 'Halo Ultra',
    description: 'For the overachievers',
    rating: '4.8',
    reviews: '5 owner reviews',
    price: '$999',
    image: '/images/halo-ultra.png',
    theme: 'dark',
    colorName: 'Space Black'
  },
  {
    id: 4,
    tag: '04 / PHONE',
    name: 'Foldline',
    description: 'Two screens. One point of view.',
    rating: '4.7',
    reviews: '3 owner reviews',
    price: '$1,299',
    image: '/images/foldline.png',
    theme: 'light',
    colorName: 'Lavender Fold'
  },
  {
    id: 5,
    tag: '05 / PHONE',
    name: 'Triple Fold',
    description: 'Three screens. Infinite possibilities.',
    rating: '4.9',
    reviews: '2 owner reviews',
    price: '$1,499',
    image: '/images/foldline.png',
    theme: 'light',
    colorName: 'Teal Fusion'
  },
  {
    id: 6,
    tag: '06 / PHONE',
    name: 'Quadra',
    description: 'Four screens. Ultimate multitasking.',
    rating: '5.0',
    reviews: '1 owner review',
    price: '$1,799',
    image: '/images/foldline.png',
    theme: 'dark',
    colorName: 'Midnight Gray'
  }
]

const TopProducts = ({ onOpenFilm }) => {
  const { addToCart, notification: cartNotification } = useCart()
  const { toggleFavorite, isFavorite, notification: favNotification } = useFavorites()
  const notification = cartNotification || favNotification

  const handleAdd = (e, phone) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart({
      id: phone.id,
      name: phone.name,
      price: phone.price,
      description: phone.description,
      image: phone.image,
      category: 'Phone'
    })
  }

  const handleFav = (e, phone) => {
    e.preventDefault()
    e.stopPropagation()
    toggleFavorite({
      id: phone.id,
      name: phone.name,
      price: phone.price,
      image: phone.image,
      description: phone.description
    })
  }

  const handleFilmClick = (e, phoneName) => {
    e.preventDefault()
    e.stopPropagation()
    if (onOpenFilm) {
      onOpenFilm(phoneName)
    }
  }

  return (
    <section className="flagship-edit-section" id="flagship-edit">
      {notification && (
        <div className="overhyped-toast">
          <span className="toast-sparkle">✦</span>
          <span>{notification}</span>
        </div>
      )}

      <div className="flagship-edit-container">
        {/* Header Row */}
        <div className="flagship-edit-header">
          <div className="header-left">
            <span className="edit-kicker">01 / THE FLAGSHIP EDIT</span>
            <h2 className="edit-title">
              Pick your <br />
              <span className="highlight-coral">main character.</span>
            </h2>
          </div>
          <div className="header-right">
            <p className="edit-subtitle">
              A tight edit of the standouts. Every phone in this first look earns the second glance.
            </p>
            <Link to="/shop" className="explore-catalog-link">
              Explore catalogue &rarr;
            </Link>
          </div>
        </div>

        {/* 2x2 Flagship Grid */}
        <div className="flagship-cards-grid">
          {flagshipPhones.map(phone => {
            const isDark = phone.theme === 'dark'
            const favorited = isFavorite(phone.id)

            return (
              <div
                key={phone.id}
                className={`phone-card ${isDark ? 'card-dark' : 'card-light'}`}
              >
                {/* Card Top Utility Bar */}
                <div className="card-top-bar">
                  <span className="card-tag">{phone.tag}</span>
                  <div className="card-actions">
                    <button
                      className={`card-action-btn heart-btn ${favorited ? 'is-fav' : ''}`}
                      onClick={(e) => handleFav(e, phone)}
                      title={favorited ? "Remove from wishlist" : "Add to wishlist"}
                      aria-label="Wishlist toggle"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill={favorited ? "#FA4465" : "none"} stroke="#FA4465" strokeWidth="2.5">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </button>
                    <button
                      className="card-action-btn film-btn"
                      onClick={(e) => handleFilmClick(e, phone.name)}
                      title="Watch film"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                        <line x1="7" y1="2" x2="7" y2="22"></line>
                        <line x1="17" y1="2" x2="17" y2="22"></line>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <line x1="2" y1="7" x2="7" y2="7"></line>
                        <line x1="2" y1="17" x2="7" y2="17"></line>
                        <line x1="17" y1="17" x2="22" y2="17"></line>
                        <line x1="17" y1="7" x2="22" y2="7"></line>
                      </svg>
                      <span className="film-text">FILM</span>
                    </button>
                    <Link
                      to={`/product/${phone.id}`}
                      className="card-action-btn arrow-btn"
                      title="View details"
                    >
                      &nearr;
                    </Link>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="card-phone-name">{phone.name}</h3>

                {/* Card Center Visual */}
                <Link to={`/product/${phone.id}`} className="card-visual-wrapper">
                  <img
                    src={phone.image}
                    alt={phone.name}
                    className="card-phone-img"
                  />
                </Link>

                {/* Card Bottom Meta */}
                <div className="card-footer-info">
                  <p className="card-desc">{phone.description}</p>
                  <div className="card-review-row">
                    <span className="star-symbol">★</span>
                    <span className="rating-num">{phone.rating}</span>
                    <span className="dot-sep">&bull;</span>
                    <span className="reviews-count">{phone.reviews}</span>
                  </div>

                  <div className="card-price-action-row">
                    <div className="price-stack">
                      <span className="price-amount">{phone.price}</span>
                      <span className="price-suffix">/ from</span>
                    </div>

                    <div className="card-buttons-right">
                      <button
                        className="btn-compare"
                        title="Compare specs"
                        aria-label="Compare"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                        }}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="16 3 21 3 21 8"></polyline>
                          <line x1="4" y1="20" x2="21" y2="3"></line>
                          <polyline points="21 16 21 21 16 21"></polyline>
                          <line x1="15" y1="15" x2="21" y2="21"></line>
                          <line x1="4" y1="4" x2="9" y2="9"></line>
                        </svg>
                      </button>

                      <button
                        className={`btn-add-bag ${isDark ? 'btn-add-coral' : 'btn-add-navy'}`}
                        onClick={(e) => handleAdd(e, phone)}
                      >
                        Add to bag +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TopProducts
