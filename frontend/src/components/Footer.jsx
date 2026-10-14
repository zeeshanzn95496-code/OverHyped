import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = ({ onOpenSupport }) => {
  return (
    <footer className="overhyped-footer">
      <div className="footer-top-container">
        {/* Brand statement */}
        <div className="footer-brand-col">
          <Link to="/" className="footer-logo">
            OVERHYPED<span className="dot-coral">.</span>
          </Link>
          <p className="footer-tagline">
            Standout tech for people with somewhere to be and something to say.
          </p>
        </div>

        {/* Navigation Columns */}
        <div className="footer-links-grid">
          <div className="footer-link-group">
            <Link to="/shop" className="footer-nav-item">Shop phones</Link>
            <Link to="/about-us" className="footer-nav-item">Our story</Link>
          </div>
          <div className="footer-link-group">
            <button
              type="button"
              className="footer-nav-item btn-link"
              onClick={onOpenSupport}
            >
              Support
            </button>
            <Link to="/shop" className="footer-nav-item">Returns</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom-divider"></div>

      <div className="footer-bottom-container">
        <span className="footer-copy">© 2024 OverHyped Phones, Inc.</span>
        <span className="footer-slogan">Made for the second look.</span>
        <span className="footer-locations">New York &bull; London &bull; Everywhere</span>
      </div>
    </footer>
  )
}

export default Footer