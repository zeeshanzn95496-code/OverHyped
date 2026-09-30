import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams()

  const products = {
    1: {
      name: 'Halo One',
      title: 'A little extra by design.',
      description: 'Halo One is our answer to forgettable. A sculpted frame, a camera that catches the good light, and an alert slider with its own fan club.',
      color: '#ff6b6b',
      specs: [
        { value: '48 MP', label: 'Main Camera' },
        { value: '120 Hz', label: 'Smooth Display' },
        { value: '2.1 d', label: 'Battery Life' },
        { value: 'IP68', label: 'Water Resistance' }
      ],
      detail: 'Haptic personality'
    },
    2: {
      name: 'Halo Mini',
      title: 'Small phone. Big impact.',
      description: 'Halo Mini packs a punch in a compact form. Perfect for those who want premium features without the bulk.',
      color: '#4ecdc4',
      specs: [
        { value: '42 MP', label: 'Main Camera' },
        { value: '90 Hz', label: 'Smooth Display' },
        { value: '1.8 d', label: 'Battery Life' },
        { value: 'IP67', label: 'Water Resistance' }
      ],
      detail: 'Compact power'
    },
    3: {
      name: 'Halo Ultra',
      title: 'For the overachievers.',
      description: 'Halo Ultra is built for those who demand the best. Titanium frame, advanced AI camera, and all-day battery.',
      color: '#2d2d2d',
      specs: [
        { value: '108 MP', label: 'Main Camera' },
        { value: '144 Hz', label: 'Smooth Display' },
        { value: '2.5 d', label: 'Battery Life' },
        { value: 'IP69', label: 'Water Resistance' }
      ],
      detail: 'Titanium strength'
    },
    4: {
      name: 'Foldline',
      title: 'Two screens. One point of view.',
      description: 'Foldline revolutionizes multitasking with its innovative foldable display. Work and play on two screens seamlessly.',
      color: '#9b59b6',
      specs: [
        { value: '50 MP', label: 'Main Camera' },
        { value: '120 Hz', label: 'Foldable Display' },
        { value: '2.2 d', label: 'Battery Life' },
        { value: 'IP68', label: 'Water Resistance' }
      ],
      detail: 'Foldable innovation'
    },
    5: {
      name: 'Triple Fold',
      title: 'Three screens. Infinite possibilities.',
      description: 'Triple Fold takes foldable technology to the next level with three flexible displays. Unprecedented versatility for creators and professionals.',
      color: '#00d4aa',
      specs: [
        { value: '64 MP', label: 'Triple Camera' },
        { value: '144 Hz', label: 'Triple Display' },
        { value: '3.0 d', label: 'Battery Life' },
        { value: 'IP69', label: 'Water Resistance' }
      ],
      detail: 'Revolutionary fold'
    }
  }

  const product = products[id] || products[1]

  return (
    <>
    <div className="product-detail-section">
      <div className="product-detail-content">
        <div className="product-detail-left">
          <div className="product-detail-hero">
            <h1 className="product-detail-title">{product.title} <span className="highlight">design.</span></h1>
            <p className="product-detail-description">
              {product.description}
            </p>
            <button className="cta-button">Explore {product.name} →</button>
          </div>
          <div className="product-specs">
            {product.specs.map((spec, index) => (
              <div key={index} className="spec-item">
                <div className="spec-value">{spec.value}</div>
                <div className="spec-label">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="product-detail-right">
          <div className="product-image-container">
            <div className="red-circle-large" style={{ background: `linear-gradient(135deg, ${product.color} 0%, ${product.color}cc 100%)` }}></div>
            <div className="product-phone" style={{ background: `linear-gradient(135deg, ${product.color} 0%, ${product.color}cc 100%)` }}>
              <div className="phone-body-detail"></div>
            </div>
          </div>
          <div className="tiny-details">
            <div className="detail-badge">
              <span className="detail-label">THE TINY DETAILS</span>
              <span className="detail-value">{product.detail}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductDetail
