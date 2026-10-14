import React from 'react'
import { Link } from 'react-router-dom'
import './TheFlagshipFeature.css'

const TheFlagshipFeature = ({ onOpenFilm }) => {
  return (
    <section className="flagship-feature-section" id="flagship-feature">
      <div className="flagship-feature-container">
        <div className="flagship-feature-grid">
          {/* Left Column: Editorial & CTA */}
          <div className="flagship-feature-left">
            <span className="flagship-kicker">02 / THE FLAGSHIP</span>
            <h2 className="flagship-title">
              A little <span className="highlight-coral">extra</span> <br />
              by design.
            </h2>
            <p className="flagship-description">
              Halo One is our answer to forgettable. A sculpted frame, a camera that catches the good light, and an alert slider with its own fan club.
            </p>
            <div className="flagship-actions">
              <Link to="/product/1" className="btn-explore-halo">
                Explore Halo One &rarr;
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Stage */}
          <div className="flagship-feature-right">
            <div className="flagship-stage">
              <div className="orbital-ring ring-1"></div>
              <div className="orbital-ring ring-2"></div>
              <div className="orbital-ring ring-3"></div>
              <div className="flagship-circle-backdrop"></div>
              
              <img
                src="/images/halo-hero.png"
                alt="Halo One Flagship"
                className="flagship-phone-render"
              />

              <div className="flagship-floating-badge">
                <span className="badge-kicker">THE TINY DETAILS</span>
                <span className="badge-detail">✦ Haptic personality</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specs Matrix */}
        <div className="flagship-specs-bar">
          <div className="spec-col">
            <span className="spec-number">48 MP</span>
            <span className="spec-caption">main camera</span>
          </div>
          <div className="spec-col">
            <span className="spec-number">120 Hz</span>
            <span className="spec-caption">smooth display</span>
          </div>
          <div className="spec-col">
            <span className="spec-number">2.1 d</span>
            <span className="spec-caption">battery life*</span>
          </div>
          <div className="spec-col">
            <span className="spec-number">IP68</span>
            <span className="spec-caption">water resistance</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheFlagshipFeature
