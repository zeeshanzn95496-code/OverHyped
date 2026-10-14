import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'
import './ProductDetail.css'

const catalogData = {
  1: {
    id: 1,
    name: 'Halo One',
    kicker: 'THE CONVERSATION STARTER',
    title: 'A little extra by design.',
    description: 'Halo One is our answer to forgettable. A sculpted frame, a camera that catches the good light, and an alert slider with its own fan club.',
    price: 799,
    rating: '4.7',
    reviews: '3 owner reviews',
    image: '/images/halo-hero.png',
    colors: [
      { name: 'Coral Red', hex: '#FA4465' },
      { name: 'Tide Cyan', hex: '#30B5B8' },
      { name: 'Midnight', hex: '#16192E' }
    ],
    capacities: ['128 GB', '256 GB', '512 GB'],
    specs: [
      { value: '48 MP', label: 'Main Camera' },
      { value: '120 Hz', label: 'Smooth Display' },
      { value: '2.1 d', label: 'Battery Life*' },
      { value: 'IP68', label: 'Water Resistance' }
    ],
    detail: 'Haptic personality'
  },
  2: {
    id: 2,
    name: 'Halo Mini',
    kicker: 'SMALL PHONE. BIG ENTRANCE.',
    title: 'Small phone. Big impact.',
    description: 'Halo Mini packs flagship silicon into a palm-friendly form factor. No compromise on haptics, battery, or optics.',
    price: 649,
    rating: '4.7',
    reviews: '3 owner reviews',
    image: '/images/halo-mini.png',
    colors: [
      { name: 'Tide Cyan', hex: '#30B5B8' },
      { name: 'Coral Red', hex: '#FA4465' },
      { name: 'Chalk White', hex: '#EBE7DF' }
    ],
    capacities: ['128 GB', '256 GB'],
    specs: [
      { value: '42 MP', label: 'Main Camera' },
      { value: '90 Hz', label: 'Smooth Display' },
      { value: '1.8 d', label: 'Battery Life*' },
      { value: 'IP67', label: 'Water Resistance' }
    ],
    detail: 'Compact power'
  },
  3: {
    id: 3,
    name: 'Halo Ultra',
    kicker: 'FOR THE OVERACHIEVERS',
    title: 'For the overachievers.',
    description: 'Forged in titanium with aerospace precision. Advanced triple-camera module, custom neural coprocessor, and all-day endurance.',
    price: 999,
    rating: '4.8',
    reviews: '5 owner reviews',
    image: '/images/halo-ultra.png',
    colors: [
      { name: 'Space Black', hex: '#1D1F33' },
      { name: 'Titanium Gray', hex: '#484A5E' },
      { name: 'Raw Silver', hex: '#D1D4E0' }
    ],
    capacities: ['256 GB', '512 GB', '1 TB'],
    specs: [
      { value: '108 MP', label: 'Triple Camera' },
      { value: '144 Hz', label: 'Pro Display' },
      { value: '2.5 d', label: 'Battery Life*' },
      { value: 'IP69', label: 'Water Resistance' }
    ],
    detail: 'Titanium strength'
  },
  4: {
    id: 4,
    name: 'Foldline',
    kicker: 'TWO SCREENS. ONE POINT OF VIEW.',
    title: 'Two screens. One point of view.',
    description: 'Zero-crease aerospace hinge that snaps shut with an authoritative tactile tick. Two OLED panels tuned for pure fluid responsiveness.',
    price: 1299,
    rating: '4.7',
    reviews: '3 owner reviews',
    image: '/images/foldline.png',
    colors: [
      { name: 'Lavender Violet', hex: '#9B59B6' },
      { name: 'Midnight', hex: '#16192E' },
      { name: 'Moon Cream', hex: '#F0ECE1' }
    ],
    capacities: ['256 GB', '512 GB'],
    specs: [
      { value: '50 MP', label: 'Dual Camera' },
      { value: '120 Hz', label: 'Foldable Display' },
      { value: '2.2 d', label: 'Battery Life*' },
      { value: 'IP68', label: 'Water Resistance' }
    ],
    detail: 'Foldable innovation'
  }
}

const ProductDetail = ({ onOpenFilm }) => {
  const { id } = useParams()
  const { addToCart, notification: cartNotification } = useCart()
  const { toggleFavorite, isFavorite, notification: favNotification } = useFavorites()
  const notification = cartNotification || favNotification

  const product = catalogData[id] || catalogData[1]
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedCapacity, setSelectedCapacity] = useState(product.capacities[0])
  const [quantity, setQuantity] = useState(1)

  const favorited = isFavorite(product.id)

  const handleAdd = () => {
    addToCart({
      id: product.id,
      name: `${product.name} (${selectedCapacity}, ${selectedColor.name})`,
      price: `$${product.price}`,
      image: product.image,
      category: 'Phone'
    })
  }

  return (
    <div className="product-detail-page">
      {notification && (
        <div className="overhyped-toast">
          <span className="toast-sparkle">✦</span>
          <span>{notification}</span>
        </div>
      )}

      <div className="detail-container">
        {/* Breadcrumb */}
        <div className="detail-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/shop">Catalogue</Link>
          <span>/</span>
          <span className="current">{product.name}</span>
        </div>

        <div className="detail-main-grid">
          {/* Left: Product Stage */}
          <div className="detail-stage-box">
            <div className="detail-backdrop-circle" style={{ backgroundColor: selectedColor.hex }}></div>
            <img
              src={product.image}
              alt={product.name}
              className="detail-phone-img"
            />
            <div className="detail-haptic-badge">
              <span className="haptic-tag">THE TINY DETAILS</span>
              <span className="haptic-title">✦ {product.detail}</span>
            </div>
          </div>

          {/* Right: Buy Box & Options */}
          <div className="detail-buybox">
            <span className="detail-kicker">{product.kicker}</span>
            <h1 className="detail-title">{product.name}</h1>
            <p className="detail-tagline">{product.title}</p>

            <div className="detail-rating-row">
              <div className="detail-stars">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <span className="rating-num">{product.rating}</span>
              <span className="dot-sep">&bull;</span>
              <span className="reviews-text">{product.reviews}</span>
            </div>

            <div className="detail-price">${product.price} <span className="price-term">USD</span></div>

            <p className="detail-desc">{product.description}</p>

            {/* Color Finish Picker */}
            <div className="option-section">
              <label className="option-label">
                Color Finish: <strong>{selectedColor.name}</strong>
              </label>
              <div className="color-swatches">
                {product.colors.map((color, idx) => (
                  <button
                    key={idx}
                    className={`color-swatch-btn ${selectedColor.name === color.name ? 'selected' : ''}`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => setSelectedColor(color)}
                    title={color.name}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Storage Capacity Picker */}
            <div className="option-section">
              <label className="option-label">Storage Capacity</label>
              <div className="capacity-pills">
                {product.capacities.map((cap, idx) => (
                  <button
                    key={idx}
                    className={`capacity-btn ${selectedCapacity === cap ? 'selected' : ''}`}
                    onClick={() => setSelectedCapacity(cap)}
                  >
                    {cap}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="action-row">
              <div className="quantity-stepper">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>&minus;</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>&#43;</button>
              </div>

              <button className="btn-add-main" onClick={handleAdd}>
                Add to Bag &bull; ${product.price * quantity}
              </button>

              <button
                className={`btn-fav-detail ${favorited ? 'active' : ''}`}
                onClick={() => toggleFavorite(product)}
                title={favorited ? "Saved to favorites" : "Save to favorites"}
                aria-label="Wishlist"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill={favorited ? "#FA4465" : "none"} stroke="#FA4465" strokeWidth="2.2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>

            {/* Perks */}
            <div className="detail-perks">
              <div className="perk-item">
                <span className="perk-icon">⚡</span>
                <span>Free express shipping &bull; 2-day delivery</span>
              </div>
              <div className="perk-item">
                <span className="perk-icon">↺</span>
                <span>30-day risk-free return trial</span>
              </div>
              <div className="perk-item">
                <span className="perk-icon">🛡</span>
                <span>2-year OverHyped Care warranty included</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specs Bar */}
        <div className="detail-specs-bar">
          <h3>Hardware & Sensor Specifications</h3>
          <div className="specs-grid">
            {product.specs.map((spec, idx) => (
              <div key={idx} className="spec-card">
                <span className="spec-val">{spec.value}</span>
                <span className="spec-lbl">{spec.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
