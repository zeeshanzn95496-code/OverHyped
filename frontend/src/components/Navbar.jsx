import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-brand">
          <div className="logo">OVERHYPED.</div>
          <div className="tagline">Technology should have a pulse. Ours is set to loud.</div>
        </div>
        <div className="navbar-links">
          <Link to={"/"}>Shop</Link>
          <Link to={"/"}>Our point of view</Link>
          <Link to={"/"} className="support-link">Support</Link>
          <Link to={"/"}>The people at OverHyped</Link>
        </div>
        <div className="navbar-icons">
          <div className="icon">🔍</div>
          <div className="icon">★</div>
          <div className="icon">🛒</div>
        </div>
      </div>
    </>
  )
}

export default Navbar