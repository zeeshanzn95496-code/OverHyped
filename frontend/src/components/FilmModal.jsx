import React from 'react'
import './FilmModal.css'

const FilmModal = ({ isOpen, onClose, title = "Halo One: The Film" }) => {
  if (!isOpen) return null

  return (
    <div className="film-modal-overlay" onClick={onClose}>
      <div className="film-modal-content" onClick={e => e.stopPropagation()}>
        <button className="film-modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>
        <div className="film-modal-header">
          <span className="film-tag">OVERHYPED CINEMA / 01</span>
          <h3>{title}</h3>
        </div>
        <div className="film-video-wrapper">
          <div className="film-placeholder-video">
            <div className="film-play-graphic">
              <div className="film-pulsing-ring"></div>
              <div className="film-icon-play">▶</div>
            </div>
            <div className="film-caption">
              <h4>"A Little Extra by Design"</h4>
              <p> Shot on Halo One 48MP Sensor.</p>
            </div>
          </div>
        </div>
        <div className="film-modal-footer">
          <p>Halo One arrives in Coral, Tide and Space Black with aerospace-grade aluminum and bespoke haptic engine.</p>
        </div>
      </div>
    </div>
  )
}

export default FilmModal
