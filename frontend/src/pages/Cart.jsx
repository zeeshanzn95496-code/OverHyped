import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Cart.css'

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart()

  const total = cart.reduce((sum, item) => {
    const rawPrice = item.price ? item.price.toString().replace(/[^0-9.]/g, '') : '0'
    const price = parseFloat(rawPrice) || 0
    return sum + price
  }, 0)

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-empty-card">
          <div className="empty-icon-bubble">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FA4465" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </div>
          <h1 className="cart-empty-title">Your bag is empty</h1>
          <p className="cart-empty-message">You haven't added any standout devices or accessories yet.</p>
          <Link to="/shop" className="btn-cart-shop">Explore Catalogue &rarr;</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <span className="cart-kicker">YOUR SELECTION</span>
          <h1 className="cart-title">Shopping Bag ({cart.length} {cart.length === 1 ? 'item' : 'items'})</h1>
        </div>

        <div className="cart-layout-grid">
          {/* Items List */}
          <div className="cart-items-column">
            {cart.map((item, index) => (
              <div key={`${item.id}-${index}`} className="cart-item-card">
                <div className="cart-item-thumb-box">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                  ) : (
                    <div className="cart-placeholder-box" style={{ backgroundColor: item.color || '#FA4465' }}>
                      ✦
                    </div>
                  )}
                </div>

                <div className="cart-item-body">
                  <div className="item-meta-top">
                    <span className="item-cat-tag">{item.category || 'Product'}</span>
                    <button
                      className="btn-remove-item"
                      onClick={() => removeFromCart(item.id)}
                      title="Remove item"
                      aria-label="Remove item"
                    >
                      &times;
                    </button>
                  </div>

                  <h3 className="item-name">{item.name}</h3>
                  {item.description && <p className="item-desc">{item.description}</p>}

                  <div className="item-price-row">
                    <span className="item-price">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}

            <div className="cart-footer-actions">
              <button className="btn-clear-bag" onClick={clearCart}>
                Clear entire bag
              </button>
              <Link to="/shop" className="link-keep-shopping">
                &larr; Continue Shopping
              </Link>
            </div>
          </div>

          {/* Summary Box */}
          <div className="cart-summary-box">
            <h2 className="summary-title">Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span className="summary-val">${total.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Express Delivery</span>
              <span className="summary-val highlight-free">FREE</span>
            </div>
            <div className="summary-row">
              <span>Estimated Tax</span>
              <span className="summary-val">$0.00</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row total-row">
              <span>Total</span>
              <span className="total-amount">${total.toFixed(2)}</span>
            </div>

            <button
              className="btn-checkout-now"
              onClick={() => alert(`Thank you! Order for $${total.toFixed(2)} submitted. Your OverHyped drop is on its way!`)}
            >
              Checkout Now &rarr;
            </button>

            <div className="summary-perks">
              <span>✓ Complimentary 2-day priority courier</span>
              <span>✓ 30-day return guarantee</span>
              <span>✓ 2-year warranty included</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
