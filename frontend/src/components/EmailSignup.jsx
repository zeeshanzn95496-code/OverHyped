import React, { useState } from 'react'
import './EmailSignup.css'

const EmailSignup = ({ onTalkToHuman, onFindStore }) => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    setSubmitted(true)
    setTimeout(() => {
      setEmail('')
      setSubmitted(false)
    }, 4000)
  }

  return (
    <section className="inbox-section" id="newsletter">
      <div className="inbox-container">
        {/* Orbital Watermark */}
        <div className="inbox-orbital-ring ring-lg"></div>
        <div className="inbox-orbital-ring ring-md"></div>
        <div className="inbox-orbital-ring ring-sm"></div>

        <div className="inbox-grid">
          {/* Left Column: Headline */}
          <div className="inbox-left">
            <span className="inbox-kicker">06 / STAY IN THE KNOW</span>
            <h2 className="inbox-title">
              Your inbox <br />
              deserves <br />
              <span className="highlight-yellow">better.</span>
            </h2>
            <p className="inbox-subtitle">
              New drops, odd ideas, and the occasional very good wallpaper. No daily noise.
            </p>
          </div>

          {/* Right Column: Form & Help Links */}
          <div className="inbox-right">
            {submitted ? (
              <div className="inbox-success-box">
                <span className="success-icon">✨</span>
                <h3>You're on the list.</h3>
                <p>Check your inbox for a welcome wallpaper and early access drop key.</p>
              </div>
            ) : (
              <form className="inbox-form" onSubmit={handleSubmit}>
                <div className="inbox-input-wrapper">
                  <input
                    type="email"
                    className="inbox-input"
                    placeholder="you@somewhere.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="inbox-submit-btn" aria-label="Subscribe">
                    &rarr;
                  </button>
                </div>
              </form>
            )}

            <p className="inbox-consent">
              By signing up, you agree to receive the occasional overhyped email.
            </p>

            {/* Quick Links */}
            <div className="inbox-actions-row">
              <button
                type="button"
                className="inbox-action-link"
                onClick={onTalkToHuman}
              >
                <span className="action-icon">🎧</span> Talk to a human
              </button>
              <button
                type="button"
                className="inbox-action-link"
                onClick={onFindStore}
              >
                <span className="action-icon">⌕</span> Find a store
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmailSignup
