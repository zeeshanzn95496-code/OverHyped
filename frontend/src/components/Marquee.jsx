import React from 'react'
import './Marquee.css'

const Marquee = () => {
  const items = [
    "GOODBYE, BORING",
    "THE PHONE HAS LEFT THE CHAT",
    "GOODBYE, BORING",
     "NO MORE FRUIT COMPANY",
    "BE ROYAL & LOYAL",
    "THE PHONE HAS LEFT THE CHAT",
    "GOODBYE, BORING",
    "THE PHONE HAS LEFT THE CHAT",
    "GOODBYE, BORING",
    "THE PHONE HAS LEFT THE CHAT",
    "NO MORE FRUIT COMPANY",
    "BE ROYAL & LOYAL"
  ]

  return (
    <div className="marquee-banner">
      <div className="marquee-track">
        {items.concat(items).map((text, idx) => (
          <span key={idx} className="marquee-item">
            <span className="marquee-text">{text}</span>
            <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
