import React, { useState } from 'react'
import './SupportModal.css'

export const SupportModal = ({ isOpen, onClose, mode = "support" }) => {
  const [formSent, setFormSent] = useState(false)
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')

  if (!isOpen) return null

  const handleSend = (e) => {
    e.preventDefault()
    setFormSent(true)
    setTimeout(() => {
      setFormSent(false)
      onClose()
    }, 2500)
  }

  return (
    <div className="support-modal-overlay" onClick={onClose}>
      <div className="support-modal-card" onClick={e => e.stopPropagation()}>
        <button className="support-modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        {mode === "store" ? (
          <div>
            <div className="support-badge">RETAIL & GALLERIES</div>
            <h3 className="support-title">Find an OverHyped Space</h3>
            <p className="support-desc">Come hold the devices, test the haptic keys, and grab exclusive in-person drop items.</p>
            <div className="stores-list">
              <div className="store-item">
                <span className="store-city">New York &bull; Soho</span>
                <span className="store-addr">482 Broome St, New York, NY 10013</span>
                <span className="store-hours">Open Daily 11:00 AM – 8:00 PM</span>
              </div>
              <div className="store-item">
                <span className="store-city">London &bull; Shoreditch</span>
                <span className="store-addr">19 Redchurch St, London E2 7DJ</span>
                <span className="store-hours">Open Tue – Sun 10:00 AM – 7:00 PM</span>
              </div>
              <div className="store-item">
                <span className="store-city">Tokyo &bull; Shibuya</span>
                <span className="store-addr">5-7-22 Minamiaoyama, Minato-ku</span>
                <span className="store-hours">Open Daily 11:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="support-badge">CONCIERGE & CARE</div>
            <h3 className="support-title">Talk to a real human.</h3>
            <p className="support-desc">No automated loops. Speak directly with a hardware specialist or design engineer.</p>
            {formSent ? (
              <div className="support-sent-box">
                <div className="sent-check">✓</div>
                <h4>Message received!</h4>
                <p>An OverHyped human will reach back out within 15 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSend} className="support-form">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="support-input"
                />
                <textarea
                  placeholder="How can we help? (Tech question, warranty, shipping, or curiosity)"
                  required
                  rows="3"
                  value={msg}
                  onChange={e => setMsg(e.target.value)}
                  className="support-textarea"
                />
                <button type="submit" className="support-btn-submit">
                  Send to Concierge &rarr;
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default SupportModal
