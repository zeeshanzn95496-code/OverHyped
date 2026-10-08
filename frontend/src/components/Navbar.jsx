import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    // Load cart from localStorage on mount
    const loadCart = () => {
      try {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]')
        setCartCount(cart.length)
      } catch (error) {
        console.error('Error loading cart:', error)
        setCartCount(0)
      }
    }

    // Initial load
    loadCart()

    // Listen for custom event
    const handleCartUpdate = () => {
      loadCart()
    }

    window.addEventListener('cartUpdated', handleCartUpdate)

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate)
    }
  }, [])

  return (
    <>
      <div className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="logo-link">
            <div className="logo">OVERHYPED.</div>
            <div className="tagline">Technology should have a pulse. Ours is set to loud.</div>
          </Link>
        </div>
        <div className="navbar-links">
          <Link to={"/shop"}>Shop</Link>
            <Link to={"/about-us"}>about-us</Link>
          <Link to={"/"}>Our point of view</Link>
          <Link to={"/"} className="support-link">Support</Link>
          <Link to={"/"}>The people at OverHyped</Link>
        </div>
        <div className="navbar-icons">
          <div className="icon">🔍</div>
          <div className="icon">★</div>
          <div className="icon cart-icon">
            🛒
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar