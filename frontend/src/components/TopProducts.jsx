import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/Shop.css'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'

const TopProducts = () => {
    const { addToCart, notification: cartNotification } = useCart()
    const { toggleFavorite, isFavorite, notification: favoriteNotification } = useFavorites()
    const notification = cartNotification || favoriteNotification

    const products = [
        {
            id: 1,
            name: 'Halo One',
            category: 'PHONE',
            description: 'The conversation starter',
            rating: '4.7',
            reviews: 'owner reviews',
            price: '$799',
            color: '#ff6b6b',
            image: 'coral'
        },
        {
            id: 2,
            name: 'Halo Mini',
            category: 'PHONE',
            description: 'Small phone. Big entrance.',
            rating: '4.7',
            reviews: 'owner reviews',
            price: '$649',
            color: '#4ecdc4',
            image: 'tide'
        },
        {
            id: 3,
            name: 'Halo Ultra',
            category: 'PHONE',
            description: 'For the overachievers',
            rating: '4.7',
            reviews: 'owner reviews',
            price: '$999',
            color: '#2d2d2d',
            image: 'black'
        },
        {
            id: 4,
            name: 'Foldline',
            category: 'PHONE',
            description: 'Two screens. One point of view.',
            rating: '4.7',
            reviews: 'owner reviews',
            price: '$1,299',
            color: '#9b59b6',
            image: 'purple'
        },
        {
            id: 5,
            name: 'Triple Fold',
            category: 'PHONE',
            description: 'Three screens. Infinite possibilities.',
            rating: '4.8',
            reviews: 'owner reviews',
            price: '$1,799',
            color: '#00d4aa',
            image: 'teal'
        },
        {
            id: 6,
            name: 'Quadra',
            category: 'PHONE',
            description: '4 screens. Infinite power.',
            rating: '5.0',
            reviews: 'owner reviews',
            price: '$1,500',
            color: '#666',
            image: 'img'
        },
        {
            id: 7,
            name: 'Halo Charger',
            category: 'ACCESSORY',
            description: 'Fast charging. Zero wait.',
            rating: '4.8',
            reviews: 'owner reviews',
            price: '$49',
            color: '#f39c12',
            image: 'charger'
        },
        {
            id: 8,
            name: 'Halo Powerbank',
            category: 'ACCESSORY',
            description: 'Power on the go. All day.',
            rating: '4.6',
            reviews: 'owner reviews',
            price: '$79',
            color: '#3498db',
            image: 'powerbank'
        },
        {
            id: 9,
            name: 'Halo Earbuds',
            category: 'ACCESSORY',
            description: 'Sound that moves you.',
            rating: '4.9',
            reviews: 'owner reviews',
            price: '$129',
            color: '#e74c3c',
            image: 'earbuds'
        },
        {
            id: 10,
            name: 'Halo Mobile Holder',
            category: 'ACCESSORY',
            description: 'Secure grip. Perfect view.',
            rating: '4.5',
            reviews: 'owner reviews',
            price: '$29',
            color: '#9b59b6',
            image: 'holder'
        },
        {
            id: 11,
            name: 'Halo Cable C to C',
            category: 'ACCESSORY',
            description: 'Fast data transfer. Durable build.',
            rating: '4.7',
            reviews: 'owner reviews',
            price: '$19',
            color: '#1abc9c',
            image: 'cable'
        },
        {
            id: 12,
            name: 'Halo Powerbank 3000W',
            category: 'ACCESSORY',
            description: 'Massive power. Endless energy.',
            rating: '4.8',
            reviews: 'owner reviews',
            price: '$149',
            color: '#e67e22',
            image: 'powerbank-3000'
        },
        {
            id: 13,
            name: 'Halo Wired Headphone',
            category: 'ACCESSORY',
            description: 'Pure sound. No compromise.',
            rating: '4.7',
            reviews: 'owner reviews',
            price: '$89',
            color: '#34495e',
            image: 'headphone'
        },
        {
            id: 14,
            name: 'Halo Wireless Headphone',
            category: 'ACCESSORY',
            description: 'Freedom to move. Studio quality.',
            rating: '4.9',
            reviews: 'owner reviews',
            price: '$199',
            color: '#16a085',
            image: 'wireless-headphone'
        },
    ]

    const handleAddToBag = (product) => {
        addToCart(product)
    }

    const handleFavorite = (e, product) => {
        e.preventDefault()
        e.stopPropagation()
        toggleFavorite(product)
    }

  return (
    <>
    {notification && (
        <div className="notification">
          {notification}
        </div>
    )}
    <div className="products-section">
        <div className="products-header">
            <div className="section-number">01 / THE FLAGSHIP EDIT</div>
            <h1 className="products-title">Pick your <span className="highlight">main character.</span></h1>
            <p className="products-subtitle">A tight edit of the standouts. Every phone in this first look earns the second glance.</p>
            <Link to="/shop" className="explore-button">Explore catalogue →</Link>
        </div>
        <div className="products-grid">
            {products.map((product, index) =>(
                <Link key={index} to={`/product/${product.id}`} className="product-card-link">
                    <div className="product-card">
                        <div className="card-header">
                            <span className="card-category">{product.category}</span>
                            <div className="card-icons">
                                <span 
                                    className={`icon favorite-btn ${isFavorite(product.id) ? 'active' : ''}`}
                                    onClick={(e) => handleFavorite(e, product)}
                                >
                                    ★
                                </span>
                                <span className="icon">FILM</span>
                                <span className="icon">→</span>
                            </div>
                        </div>
                        <div className="card-image" style={{ background: product.color }}>
                            <div className="phone-mockup"></div>
                        </div>
                        <div className="card-content">
                            <h3 className="card-name">{product.name}</h3>
                            <p className="card-description">{product.description}</p>
                            <div className="card-rating">
                                <span className="star">★</span>
                                <span className="rating-value">{product.rating}</span>
                                <span className="reviews">{product.reviews}</span>
                            </div>
                            <div className="card-footer">
                                <span className="card-price">{product.price} / from</span>
                                <button className="add-to-bag" onClick={(e) => { e.preventDefault(); handleAddToBag(product); }}>Add to bag +</button>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
    </>
  )
}

export default TopProducts
