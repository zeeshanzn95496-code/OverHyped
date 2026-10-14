import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = ({ onOpenFilm }) => {
  const handleScrollToCatalogue = () => {
    const el = document.getElementById('flagship-edit')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="overhyped-hero" id="hero">
      <div className="hero-container">
        {/* Left Column: Hero Typography & Actions */}
        <div className="hero-editorial">
          <div className="hero-origin-tag">NEW YORK / EST. 2024</div>
          <h1 className="hero-main-heading">
            Make an <br />
            <span className="heading-coral">entrance.</span>
          </h1>
          <p className="hero-copy">
            Phones for people who think a little louder. Meet the device that refuses to be background noise.
          </p>

          <div className="hero-cta-group">
            <button
              className="hero-btn-primary"
              onClick={handleScrollToCatalogue}
            >
              Explore catalogue &rarr;
            </button>
            <button
              className="hero-btn-film"
              onClick={() => onOpenFilm && onOpenFilm("Halo One: The Film")}
            >
              <span className="film-play-icon">▶</span> Watch the film
            </button>
          </div>
        </div>

        {/* Right Column: Hero Stage Graphics */}
        <div className="hero-visual-stage">
          <div className="hero-backdrop-circle"></div>

          {/* Floating Battery Badge */}
          <div className="hero-pill-battery">
            <span className="battery-label">BATTERY</span>
            <span className="battery-val">2 d</span>
          </div>

          {/* Phone Render */}
          <div className="hero-phone-showcase">
            <img
              src="/images/halo-hero.png"
              alt="OverHyped Halo One in Coral"
              className="hero-phone-image"
            />
          </div>

          {/* Floating Camera Badge */}
          <div className="hero-card-camera">
            <div className="camera-spec-line">
              <span className="camera-label">CAMERA</span>
              <span className="camera-val">50 MP</span>
            </div>
            <div className="camera-sparkle-text">
              <span className="sparkle-icon">✦</span> Looks good from here
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="hero-scroll-cue" onClick={handleScrollToCatalogue}>
        <span>SCROLL TO DISCOVER</span>
        <span className="arrow-down-right">&#8600;</span>
      </div>
    </section>
  )
}

export default Hero