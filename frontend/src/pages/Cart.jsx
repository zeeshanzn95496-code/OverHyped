import React from 'react'
import { useCart } from '../context/CartContext'
import './Cart.css'
import './Shop.css'

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart()

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', '').replace(',', ''))
    return sum + price
  }, 0)

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-empty">
          <h1 className="cart-empty-title">Your bag is empty</h1>
          <p className="cart-empty-message">Looks like you haven't added anything yet.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
        <div className="cart-header">
          <div className="section-number">YOUR BAG</div>
          <h1 className="cart-title">Shopping Cart ({cart.length} items)</h1>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-item-image" style={{ background: item.color }}>
                  <div className="cart-item-mockup"></div>
                </div>
                <div className="cart-item-details">
                  <div className="cart-item-category">{item.category}</div>
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-description">{item.description}</p>
                  <div className="cart-item-rating">
                    <span className="star">★</span>
                    <span className="rating-value">{item.rating}</span>
                  </div>
                  <div className="cart-item-footer">
                    <span className="cart-item-price">{item.price}</span>
                    <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2 className="summary-title">Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="checkout-button">Proceed to Checkout</button>
            <button className="clear-button" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
