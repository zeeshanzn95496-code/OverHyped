import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SearchModal.css'

const allCatalog = [
  { id: 1, name: 'Halo One', category: 'Phone', price: '$799', img: '/images/halo-hero.png', desc: 'The conversation starter' },
  { id: 2, name: 'Halo Mini', category: 'Phone', price: '$649', img: '/images/halo-mini.png', desc: 'Small phone. Big entrance.' },
  { id: 3, name: 'Halo Ultra', category: 'Phone', price: '$999', img: '/images/halo-ultra.png', desc: 'For the overachievers' },
  { id: 4, name: 'Foldline', category: 'Phone', price: '$1,299', img: '/images/foldline.png', desc: 'Two screens. One point of view.' },
  { id: 7, name: 'Buds', category: 'Accessory', price: '$129', img: '/images/graphic-buds.png', desc: 'Pocket-sized sound' },
  { id: 8, name: 'Charge 60W', category: 'Power', price: '$49', img: '/images/graphic-charge.png', desc: 'Fast power, full color' },
  { id: 9, name: 'Shell Case', category: 'Case', price: '$29', img: '/images/graphic-shell.png', desc: 'A soft landing for hard days' },
]

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('')

  if (!isOpen) return null

  const filtered = query.trim()
    ? allCatalog.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase())
      )
    : allCatalog.slice(0, 4)

  return (
    <div className="search-modal-overlay" onClick={onClose}>
      <div className="search-modal-container" onClick={e => e.stopPropagation()}>
        <div className="search-input-row">
          <svg className="search-icon-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            className="search-input-field"
            placeholder="Search phones, accessories, colors..."
            value={query}
            autoFocus
            onChange={e => setQuery(e.target.value)}
          />
          <button className="search-close-btn" onClick={onClose}>ESC</button>
        </div>

        <div className="search-results-section">
          <div className="search-results-label">
            {query.trim() ? `Search Results (${filtered.length})` : 'Popular Searches'}
          </div>
          <div className="search-results-list">
            {filtered.length === 0 ? (
              <div className="search-empty">No products found matching "{query}"</div>
            ) : (
              filtered.map(item => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  className="search-item-card"
                  onClick={onClose}
                >
                  <img src={item.img} alt={item.name} className="search-item-thumb" />
                  <div className="search-item-info">
                    <span className="search-item-name">{item.name}</span>
                    <span className="search-item-desc">{item.desc}</span>
                  </div>
                  <div className="search-item-price">{item.price}</div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchModal
