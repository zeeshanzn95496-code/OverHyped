import React from 'react'
import './Testimonials.css'

const testimonials = [
  {
    location: "VERIFIED OWNER / BROOKLYN",
    quote: "“I have been asked what phone this is every single day. Finally.”",
    author: "Mara K. — Halo One in Coral",
    theme: "cream"
  },
  {
    location: "VERIFIED OWNER / LONDON",
    quote: "“It feels like a design object that happens to know all my passwords.”",
    author: "Theo R. — Halo Ultra",
    theme: "navy"
  },
  {
    location: "VERIFIED OWNER / SEOUL",
    quote: "“The color is ridiculous. The camera is even better.”",
    author: "Jia L. — Halo Mini in Tide",
    theme: "teal"
  }
]

const Testimonials = () => {
  return (
    <section className="group-chat-section" id="community">
      <div className="group-chat-container">
        {/* Header with Title and Rating */}
        <div className="group-chat-header">
          <div>
            <span className="chat-kicker">05 / THE GROUP CHAT</span>
            <h2 className="chat-title">
              People are <span className="highlight-coral">talking.</span>
            </h2>
          </div>

          <div className="chat-rating-badge">
            <div className="chat-stars">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <span className="chat-rating-text">4.9 / 2,841 owners</span>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="chat-cards-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className={`chat-card card-theme-${t.theme}`}>
              <div className="chat-card-inner">
                <span className="chat-owner-tag">{t.location}</span>
                <p className="chat-quote-text">{t.quote}</p>
                <div className="chat-author-line">{t.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
