import React from 'react'
import { Link } from 'react-router-dom'

const Shop = () => {
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
        }
    ]

    const handleAddToBag = (product) => {
        console.log("Add to bag:", product.name)
    }

  return (
    <>
    <div className="shop-page">
        <div className="shop-header">
            <div className="section-number">CATALOGUE</div>
            <h1 className="shop-title">Pick your <span className="highlight">main character.</span></h1>
            <p className="shop-subtitle">A tight edit of the standouts. Every phone in this first look earns the second glance.</p>
        </div>
        <div className="products-grid">
            {products.map((product, index) =>(
                <Link key={index} to={`/product/${product.id}`} className="product-card-link">
                    <div className="product-card">
                        <div className="card-header">
                            <span className="card-category">{product.category}</span>
                            <div className="card-icons">
                                <span className="icon">♥</span>
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

export default Shop
