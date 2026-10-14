import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      {/* Editorial Hero */}
      <section className="about-hero">
        <div className="about-container">
          <span className="about-kicker">04 / A POINT OF VIEW</span>
          <h1 className="about-headline">
            Technology should have a pulse. <br />
            <span className="highlight-coral">Ours is set to loud.</span>
          </h1>
          <p className="about-subheadline">
            OverHyped was born in New York out of fatigue with the era of identical matte-black slabs.
            We make devices for people who choose to stand out.
          </p>
        </div>
      </section>

      {/* Manifesto Quote Banner */}
      <section className="about-manifesto-section">
        <div className="about-container">
          <div className="about-manifesto-card">
            <span className="manifesto-tag">THE OVERHYPED MANIFESTO &bull; EST. 2024</span>
            <h2 className="manifesto-quote-text">
              “If it makes you smile when you pick it up, we did our job.”
            </h2>
            <p className="manifesto-credit">— The people at OverHyped</p>
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="about-pillars-section">
        <div className="about-container">
          <div className="pillars-grid">
            <div className="pillar-card">
              <span className="pillar-num">01</span>
              <h3>Sculptural Hardware</h3>
              <p>
                From tactile mechanical alert sliders to vibrant aerospace shells, our hardware demands to be held, passed around, and admired.
              </p>
            </div>
            <div className="pillar-card">
              <span className="pillar-num">02</span>
              <h3>Haptic Personality</h3>
              <p>
                Every notification, shutter snap, and toggle has a bespoke acoustic and kinetic signature. Technology that talks back with warmth.
              </p>
            </div>
            <div className="pillar-card">
              <span className="pillar-num">03</span>
              <h3>Anti-Boring Standard</h3>
              <p>
                Why should every phone case and charger look like corporate office supplies? We bring color, character, and curiosity to everyday gear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="about-cta-section">
        <div className="about-container">
          <h2>Ready to leave boring behind?</h2>
          <div className="about-cta-links">
            <Link to="/shop" className="btn-about-shop">Explore Catalogue &rarr;</Link>
            <Link to="/" className="btn-about-home">Back to Flagship</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About