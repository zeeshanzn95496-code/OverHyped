import React from 'react'

const Hero = () => {
  const handleExplore = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <>
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-location">NEW YORK / EST. 2024</div>
          <h1 className="hero-title">
            Make an <span className="highlight">entrance</span>
          </h1>
          <p className="hero-description">
            Phones for people who think a little louder. Meet the device that refuses to be background noise.
          </p>
          <div className="hero-buttons">
            <button className="hero-button primary" onClick={handleExplore}>
              Explore catalogue →
            </button>
            <button className="hero-button secondary">
              <span className="play-icon">▶</span> Watch the film
            </button>
          </div>
        </div>
        <div className="hero-right">
          <div className="phone-display">
            <div className="red-circle"></div>
            <div className="phone halo-one">
              <div className="phone-body"></div>
            </div>
            <div className="phone halo-ultra">
              <div className="phone-body"></div>
            </div>
          </div>
          <div className="hero-details">
            <div className="detail-badge">
              <span className="detail-label">CAMERA</span>
              <span className="detail-value">20MP</span>
            </div>
            <div className="detail-text">
              Looks good from here ✨
            </div>
            <div className="battery-indicator">2 d</div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        SCROLL TO DISCOVER
      </div>
    </div>
    </>
  )
}

export default Hero