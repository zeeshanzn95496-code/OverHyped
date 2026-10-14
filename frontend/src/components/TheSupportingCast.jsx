import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './TheSupportingCast.css'

const TheSupportingCast = () => {
  const { addToCart } = useCart()

  const accessories = [
    {
      id: 7,
      num: '01 / POCKET-SIZED SOUND',
      title: 'Buds',
      desc: 'Tiny wireless earbuds with a bigger-than-expected sound and a case that looks good left on the table.',
      price: '$129',
      category: 'Audio',
      theme: 'cyan',
      img: '/images/acc-buds.png',
      btnColor: 'dark'
    },
    {
      id: 8,
      num: '02 / FAST POWER, FULL COLOR',
      title: 'Charge',
      desc: 'A 60 W power brick with main-character energy. Small enough for a tote, fast enough for an emergency.',
      price: '$49',
      category: 'Power',
      theme: 'yellow',
      img: '/images/acc-charge.png',
      btnColor: 'dark'
    },
    {
      id: 9,
      num: '03 / A SOFT LANDING FOR HARD DAYS',
      title: 'Shell',
      desc: 'A protective case that keeps the silhouette visible instead of hiding your phone in a sad black brick.',
      price: '$29',
      category: 'Protection',
      theme: 'coral',
      img: '/images/acc-shell.png',
      btnColor: 'light'
    }
  ]

  const handleAdd = (e, item) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart({
      id: item.id,
      name: item.title,
      price: item.price,
      category: item.category,
      image: item.img
    })
  }

  return (
    <section className="supporting-cast-section" id="accessories">
      <div className="supporting-cast-container">
        {/* Section Header */}
        <div className="supporting-cast-header">
          <div>
            <span className="cast-kicker">03 / THE SUPPORTING CAST</span>
            <h2 className="cast-title">
              Good company <span className="highlight-teal">matters.</span>
            </h2>
          </div>
          <Link to="/accessories" className="cast-link">
            Shop all accessories &rarr;
          </Link>
        </div>

        {/* 3 Accessory Cards */}
        <div className="cast-cards-grid">
          {accessories.map(item => (
            <div key={item.id} className={`cast-card cast-card-${item.theme}`}>
              <div className="cast-card-top">
                <span className="cast-card-tag">{item.num}</span>
                <h3 className="cast-card-title">{item.title}</h3>
                <p className="cast-card-desc">{item.desc}</p>
              </div>

              <div className="cast-card-bottom">
                <div className="cast-graphic-box">
                  <img src={item.img} alt={item.title} className="cast-graphic-img" />
                </div>
                <button
                  className={`cast-add-btn btn-${item.btnColor}`}
                  onClick={(e) => handleAdd(e, item)}
                  title={`Add ${item.title} to bag`}
                  aria-label={`Add ${item.title} to bag`}
                >
                  <span className="plus-symbol">+</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TheSupportingCast
