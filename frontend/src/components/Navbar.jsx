import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'

const Navbar = () => {
  const { cartCount } = useCart()
  const { favoritesCount } = useFavorites()

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
          <Link to="/favorites" className="icon favorite-icon">
            ★
            {favoritesCount > 0 && <span className="favorite-count">{favoritesCount}</span>}
          </Link>
          <Link to="/cart" className="icon cart-icon">
            🛒
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar