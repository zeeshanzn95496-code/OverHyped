import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo-link">
            <div className="footer-logo">OVERHYPED.</div>
            <div className="footer-tagline">Standout tech for people with somewhere to be and something to say.</div>
          </Link>
        </div>

        <div className="footer-nav">
          <div className="footer-column">
            <h4 className="footer-heading">Shop</h4>
            <ul className="footer-links">
              <li><Link to="/shop">Shop phones</Link></li>
              <li><Link to="/accessories">Accessories</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="#about">Our story</a></li>
              <li><a href="#support">Support</a></li>
              <li><a href="#returns">Returns</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#terms">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">© 2024 Overhyped Phones, Inc.</p>
          <a href="#" className="footer-link">Made for the second look.</a>
          <p className="location">New York. London. Everywhere.</p>
          <button className="build-button">Build for free</button>
        </div>
      </div>
    </footer>
  )
}

export default Footer