import React, { useState } from 'react'
import './APointOfView.css'

const quotes = [
  {
    number: "01",
    tag: "THE OVERHYPED MANIFESTO",
    star: "★",
    text: "“If it makes you smile when you pick it up, we did our job.”",
    author: "— The people at OverHyped"
  },
  {
    number: "02",
    tag: "OUR CORE PHILOSOPHY",
    star: "✦",
    text: "“Boring gadgets are a choice. We choose to make something worth holding.”",
    author: "— OverHyped Industrial Design"
  },
  {
    number: "03",
    tag: "ENGINEERING STANDARDS",
    star: "⚡",
    text: "“Every curve, tactile click, and vibrant tint exists to spark genuine daily joy.”",
    author: "— Hardware & Acoustics Lab"
  }
]

const APointOfView = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? quotes.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex(prev => (prev === quotes.length - 1 ? 0 : prev + 1))
  }

  const current = quotes[currentIndex]

  return (
    <section className="point-of-view-section" id="point-of-view">
      <div className="point-of-view-container">
        {/* Left Column: Big OH / 24 Monogram */}
        <div className="pov-left">
          <span className="pov-kicker">04 / A POINT OF VIEW</span>
          <div className="pov-huge-monogram">
            <span className="monogram-letters">OH</span>
            <span className="monogram-slash">/ 24</span>
          </div>
          <p className="pov-left-tagline">
            Technology should have a pulse. Ours is set to loud.
          </p>
        </div>

        {/* Right Column: Editorial & Manifesto Card */}
        <div className="pov-right">
          <h2 className="pov-title">
            Attention is <br />
            a feature.
          </h2>
          <p className="pov-description">
            The best technology does more than disappear into your day. It gives your day a little more character.
          </p>

          {/* Slider Controls */}
          <div className="pov-carousel-controls">
            <span className="pov-counter">
              {current.number} <span className="counter-divider">/ 03</span>
            </span>
            <div className="pov-arrow-buttons">
              <button
                className="pov-arrow-btn"
                onClick={handlePrev}
                aria-label="Previous quote"
              >
                &lsaquo;
              </button>
              <button
                className="pov-arrow-btn"
                onClick={handleNext}
                aria-label="Next quote"
              >
                &rsaquo;
              </button>
            </div>
          </div>

          {/* Coral Manifesto Card */}
          <div className="pov-manifesto-card">
            <div className="manifesto-card-header">
              <span className="manifesto-label">{current.tag}</span>
              <span className="manifesto-star">{current.star}</span>
            </div>
            <blockquote className="manifesto-quote">
              {current.text}
            </blockquote>
            <cite className="manifesto-author">{current.author}</cite>
          </div>
        </div>
      </div>
    </section>
  )
}

export default APointOfView
