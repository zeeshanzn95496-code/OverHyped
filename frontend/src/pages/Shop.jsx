import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'
import './Shop.css'

const fullCatalog = [
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
  },
  {
    id: 7,
    name: 'Buds',
    category: 'Audio',
    description: 'Pocket-sized sound with character',
    rating: '4.9',
    reviews: '12 owner reviews',
    price: '$129',
    image: '/images/acc-buds.png',
    theme: 'teal'
  },
  {
    id: 8,
    name: 'Halo 80W Charger',
    category: 'Power',
    description: 'Super fast. Power delivery.',
    rating: '4.9',
    reviews: '15 owner reviews',
    price: '$79',
    image: '/images/acc-charge.png',
    theme: 'yellow'
  },
  {
    id: 9,
    name: 'Shell Case',
    category: 'Protection',
    description: 'Protective silhouette without the boring bulk',
    rating: '4.7',
    reviews: '19 owner reviews',
    price: '$29',
    image: '/images/acc-shell.png',
    theme: 'coral'
  },
  {
    id: 10,
    name: 'Halo Powerbank 100W',
    category: 'Power',
    description: 'Sleek anodized backup battery pack',
    rating: '4.9',
    reviews: '7 owner reviews',
    price: '$89',
    image: '/images/acc-charge.png',
    theme: 'yellow'
  },
  {
    id: 11,
    name: 'Halo Powerbank 3000W',
    category: 'Power',
    description: 'Massive power. Endless energy.',
    rating: '4.8',
    reviews: '5 owner reviews',
    price: '$149',
    image: '/images/acc-charge.png',
    theme: 'yellow'
  },
  {
    id: 12,
    name: 'Halo Powerbank 11000W Superfast',
    category: 'Power',
    description: 'Ultra fast. Lightning charge.',
    rating: '4.9',
    reviews: '8 owner reviews',
    price: '$199',
    image: '/images/acc-charge.png',
    theme: 'coral'
  },
  {
    id: 13,
    name: 'Halo Wired Headphone',
    category: 'Audio',
    description: 'Pure sound. No compromise.',
    rating: '4.7',
    reviews: '10 owner reviews',
    price: '$89',
    image: '/images/acc-buds.png',
    theme: 'dark'
  },
  {
    id: 14,
    name: 'Halo Wireless Headphone',
    category: 'Audio',
    description: 'Freedom to move. Studio quality.',
    rating: '4.9',
    reviews: '14 owner reviews',
    price: '$199',
    image: '/images/acc-buds.png',
    theme: 'teal'
  },
  {
    id: 15,
    name: 'Halo Charger Cover Batman',
    category: 'Protection',
    description: 'Batman cartoon. Hero style.',
    rating: '4.8',
    reviews: '6 owner reviews',
    price: '$15',
    image: '/images/acc-shell.png',
    theme: 'dark'
  },
  {
    id: 16,
    name: 'Halo Superman Charger Cover',
    category: 'Protection',
    description: 'Superman cartoon. Man of steel.',
    rating: '4.9',
    reviews: '4 owner reviews',
    price: '$18',
    image: '/images/acc-shell.png',
    theme: 'coral'
  }
]

const categories = ['All', 'Phones', 'Audio', 'Power', 'Protection']

const Shop = ({ onOpenFilm }) => {
  const { addToCart, notification: cartNotification } = useCart()
  const { toggleFavorite, isFavorite, notification: favNotification } = useFavorites()
  const notification = cartNotification || favNotification

  const [activeTab, setActiveTab] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = fullCatalog.filter(item => {
    const matchCat = activeTab === 'All' || item.category === activeTab
    const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="shop-page">
      {notification && (
        <div className="overhyped-toast">
          <span className="toast-sparkle">✦</span>
          <span>{notification}</span>
        </div>
      )}

      <div className="shop-container">
        {/* Header */}
        <div className="shop-header">
          <div className="shop-header-text">
            <span className="shop-kicker">CATALOGUE & DROPS</span>
            <h1 className="shop-title">All Hardware & Gear</h1>
            <p className="shop-subtitle">Every piece engineered with character, tactile precision, and zero boredom.</p>
          </div>

          <div className="shop-search-wrapper">
            <input
              type="text"
              placeholder="Search products..."
              className="shop-search-input"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="shop-filter-bar">
          {categories.map(cat => (
            <button
              key={cat}
              className={`shop-tab-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="shop-grid">
          {filtered.map(product => {
            const isDark = product.theme === 'dark'
            const favorited = isFavorite(product.id)

            return (
              <div
                key={product.id}
                className={`shop-card ${isDark ? 'card-dark' : 'card-light'}`}
              >
                <div className="shop-card-top">
                  <span className="shop-card-cat">{product.category}</span>
                  <button
                    className={`shop-card-fav ${favorited ? 'active' : ''}`}
                    onClick={() => toggleFavorite(product)}
                    aria-label="Wishlist toggle"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill={favorited ? "#FA4465" : "none"} stroke="#FA4465" strokeWidth="2.2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>

                <Link to={product.category === 'Phones' ? `/product/${product.id}` : '#'} className="shop-img-link">
                  <img src={product.image} alt={product.name} className="shop-item-image" />
                </Link>

                <div className="shop-card-info">
                  <h3 className="shop-item-title">{product.name}</h3>
                  <p className="shop-item-desc">{product.description}</p>
                  
                  <div className="shop-item-rating">
                    <span className="star">★</span>
                    <span className="rating-val">{product.rating}</span>
                    <span className="dot">&bull;</span>
                    <span className="revs">{product.reviews}</span>
                  </div>

                  <div className="shop-card-bottom-row">
                    <span className="shop-item-price">{product.price}</span>
                    <button
                      className="btn-shop-add"
                      onClick={() => addToCart(product)}
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

export default Shop
