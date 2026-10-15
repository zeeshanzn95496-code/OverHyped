import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'
import { useTheme } from '../context/ThemeContext'
import './Navbar.css'

const Navbar = ({ onOpenSearch, onOpenSupport }) => {
  const { cartCount } = useCart()
  const { favoritesCount } = useFavorites()
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const handleScrollToSection = (sectionId) => {
    setMobileMenuOpen(false)
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
  }

  return (
    <header className="overhyped-navbar-wrapper">
      <div className="overhyped-navbar">
        {/* Left: Brand & Micro-tagline */}
        <div className="navbar-brand-section">
          <Link to="/" className="brand-logo-link" onClick={() => setMobileMenuOpen(false)}>
            <span className="brand-logo-text">
              OVERHYPED<span className="brand-dot">.</span>
            </span>
          </Link>
          <span className="brand-micro-tagline">
            Technology should have a pulse. Ours is set to loud.
          </span>
        </div>

        {/* Center: Editorial Navigation Links */}
        <nav className={`navbar-nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link
            to="/shop"
            className="nav-link-item"
            onClick={() => setMobileMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/accessories"
            className="nav-link-item"
            onClick={() => setMobileMenuOpen(false)}
          >
            Accessories
          </Link>
          <Link
            to="/covers"
            className="nav-link-item"
            onClick={() => setMobileMenuOpen(false)}
          >
            Covers
          </Link>
          <Link
            to="/skins"
            className="nav-link-item"
            onClick={() => setMobileMenuOpen(false)}
          >
            Skins
          </Link>
          <Link
            to="/build-your-own"
            className="nav-link-item"
            onClick={() => setMobileMenuOpen(false)}
          >
            Build Your Own
          </Link>
          <Link
            to="/about-us"
            className="nav-link-item"
            onClick={() => handleScrollToSection('point-of-view')}
          >
            Our point of view
          </Link>
          <button
            type="button"
            className="nav-link-item nav-btn-link"
            onClick={() => {
              setMobileMenuOpen(false)
              if (onOpenSupport) onOpenSupport()
            }}
          >
            Support
          </button>
        </nav>

        {/* Right: Functional Action Icons */}
        <div className="navbar-actions-group">
          {/* Search Trigger */}
          <button
            className="nav-action-btn btn-search"
            onClick={onOpenSearch}
            title="Search"
            aria-label="Search catalogue"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          {/* Theme Toggle (Light / Dark) */}
          <button
            className="nav-action-btn btn-theme"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>

          {/* Wishlist Favorites */}
          <Link
            to="/favorites"
            className="nav-action-btn btn-fav"
            title="Wishlist"
            aria-label="View favorites"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            {favoritesCount > 0 && <span className="nav-badge fav-badge">{favoritesCount}</span>}
          </Link>

          {/* Shopping Bag Button (Vibrant Coral Circle) */}
          <Link
            to="/cart"
            className="nav-action-btn btn-bag"
            title="Bag"
            aria-label="View shopping bag"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            {cartCount > 0 && <span className="nav-badge bag-badge">{cartCount}</span>}
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar