import React from 'react'

const ProductDetail = () => {
  return (
    <>
    <div className="product-detail-section">
      <div className="product-detail-content">
        <div className="product-detail-left">
          <div className="product-detail-hero">
            <h1 className="product-detail-title">A little extra by <span className="highlight">design.</span></h1>
            <p className="product-detail-description">
              Halo One is our answer to forgettable. A sculpted frame, a camera that catches the good light, and an alert slider with its own fan club.
            </p>
            <button className="cta-button">Explore Halo One →</button>
          </div>
          <div className="product-specs">
            <div className="spec-item">
              <div className="spec-value">48 MP</div>
              <div className="spec-label">Main Camera</div>
            </div>
            <div className="spec-item">
              <div className="spec-value">120 Hz</div>
              <div className="spec-label">Smooth Display</div>
            </div>
            <div className="spec-item">
              <div className="spec-value">2.1 d</div>
              <div className="spec-label">Battery Life</div>
            </div>
            <div className="spec-item">
              <div className="spec-value">IP68</div>
              <div className="spec-label">Water Resistance</div>
            </div>
          </div>
        </div>
        <div className="product-detail-right">
          <div className="product-image-container">
            <div className="red-circle-large"></div>
            <div className="product-phone halo-one-detail">
              <div className="phone-body-detail"></div>
            </div>
          </div>
          <div className="tiny-details">
            <div className="detail-badge">
              <span className="detail-label">THE TINY DETAILS</span>
              <span className="detail-value">Haptic personality</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductDetail
