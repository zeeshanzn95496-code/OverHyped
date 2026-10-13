import React from 'react'
import { Link } from 'react-router-dom'
import './Shop.css'
import './Accessories.css'
import './Covers.css'
import './Skins.css'
import './Notification.css'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'

const Shop = () => {
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
            name: 'Halo 80W Charger',
            category: 'ACCESSORY',
            description: 'Super fast. Power delivery.',
            rating: '4.9',
            reviews: 'owner reviews',
            price: '$79',
            color: '#00d4aa',
            image: 'charger-80w'
        },
        {
            id: 9,
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
            id: 10,
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
            id: 11,
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
            id: 12,
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
            id: 13,
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
            id: 14,
            name: 'Halo Powerbank 11000W Superfast',
            category: 'ACCESSORY',
            description: 'Ultra fast. Lightning charge.',
            rating: '4.9',
            reviews: 'owner reviews',
            price: '$199',
            color: '#ff6b6b',
            image: 'powerbank-11000'
        },
        {
            id: 15,
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
            id: 16,
            name: 'Halo Wireless Headphone',
            category: 'ACCESSORY',
            description: 'Freedom to move. Studio quality.',
            rating: '4.9',
            reviews: 'owner reviews',
            price: '$199',
            color: '#16a085',
            image: 'wireless-headphone'
        },
        {
            id: 17,
            name: 'Halo Charger Cover Batman',
            category: 'ACCESSORY',
            description: 'Batman cartoon. Hero style.',
            rating: '4.8',
            reviews: 'owner reviews',
            price: '$15',
            color: '#1a1a1a',
            image: 'batman-charger-cover'
        },
        {
            id: 18,
            name: 'Halo Clear Case',
            category: 'COVER',
            description: 'Crystal clear. Maximum protection.',
            rating: '4.6',
            reviews: 'owner reviews',
            price: '$29',
            color: '#ecf0f1',
            image: 'clear-case'
        },
        {
            id: 19,
            name: 'Halo Leather Case',
            category: 'COVER',
            description: 'Premium leather. Sleek design.',
            rating: '4.8',
            reviews: 'owner reviews',
            price: '$49',
            color: '#8e44ad',
            image: 'leather-case'
        },
        {
            id: 20,
            name: 'Halo Rugged Case',
            category: 'COVER',
            description: 'Military grade. Drop protection.',
            rating: '4.7',
            reviews: 'owner reviews',
            price: '$39',
            color: '#2c3e50',
            image: 'rugged-case'
        },
        {
            id: 21,
            name: 'Halo Slim Case',
            category: 'COVER',
            description: 'Ultra thin. Feather light.',
            rating: '4.5',
            reviews: 'owner reviews',
            price: '$24',
            color: '#bdc3c7',
            image: 'slim-case'
        },
        {
            id: 22,
            name: 'Halo Designer Case',
            category: 'COVER',
            description: 'Artistic. Unique patterns.',
            rating: '4.9',
            reviews: 'owner reviews',
            price: '$59',
            color: '#e91e63',
            image: 'designer-case'
        },
        {
            id: 23,
            name: 'Halo Marble White Cover Limited',
            category: 'COVER',
            description: 'Elegant marble. Premium finish.',
            rating: '5.0',
            reviews: 'owner reviews',
            price: '$69',
            color: '#f5f5f5',
            image: 'marble-white'
        },
        {
            id: 24,
            name: 'Halo Triple Fold Cover',
            category: 'COVER',
            description: 'Perfect fit. Three screens.',
            rating: '4.9',
            reviews: 'owner reviews',
            price: '$89',
            color: '#00d4aa',
            image: 'triple-fold-cover'
        },
        {
            id: 25,
            name: 'Halo Matte Skin',
            category: 'SKIN',
            description: 'Soft touch. No fingerprints.',
            rating: '4.5',
            reviews: 'owner reviews',
            price: '$4',
            color: '#34495e',
            image: 'matte-skin'
        },
        {
            id: 26,
            name: 'Halo Glossy Skin',
            category: 'SKIN',
            description: 'Shiny finish. Premium look.',
            rating: '4.6',
            reviews: 'owner reviews',
            price: '$5',
            color: '#e74c3c',
            image: 'glossy-skin'
        },
        {
            id: 27,
            name: 'Halo Carbon Fiber Skin',
            category: 'SKIN',
            description: 'Carbon texture. Professional.',
            rating: '4.8',
            reviews: 'owner reviews',
            price: '$5',
            color: '#2c3e50',
            image: 'carbon-skin'
        },
        {
            id: 28,
            name: 'Halo Wood Grain Skin',
            category: 'SKIN',
            description: 'Natural wood. Elegant finish.',
            rating: '4.7',
            reviews: 'owner reviews',
            price: '$4',
            color: '#8b4513',
            image: 'wood-skin'
        },
        {
            id: 29,
            name: 'Halo Gradient Skin',
            category: 'SKIN',
            description: 'Color blend. Eye-catching.',
            rating: '4.9',
            reviews: 'owner reviews',
            price: '$5',
            color: '#9b59b6',
            image: 'gradient-skin'
        },
    ]

    const phones = products.filter(product => product.category === 'PHONE')
    const accessories = products.filter(product => product.category === 'ACCESSORY')
    const covers = products.filter(product => product.category === 'COVER')
    const skins = products.filter(product => product.category === 'SKIN')

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
    <div className="shop-page">
        <div className="shop-header">
            <div className="section-number">CATALOGUE</div>
            <h1 className="shop-title">Pick your <span className="highlight">main character.</span></h1>
            <p className="shop-subtitle">A tight edit of the standouts. Every phone in this first look earns the second glance.</p>
        </div>

        {/* Phones Section */}
        <div className="shop-section">
            <div className="shop-section-header">
                <div className="section-number">01 / PHONES</div>
                <h2 className="shop-section-title">Our Flagship Collection</h2>
            </div>
            <div className="products-grid">
                {phones.map((product, index) =>(
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

        {/* Accessories Section */}
        <div className="shop-section accessories-section">
            <div className="shop-section-header">
                <div className="section-number">02 / ACCESSORIES</div>
                <h2 className="shop-section-title">Complete Your Setup</h2>
            </div>
            <div className="products-grid accessories-grid">
                {accessories.map((product, index) =>(
                    <Link key={index} to={`/product/${product.id}`} className="product-card-link">
                        <div className="product-card accessory-card">
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
                                <div className="phone-mockup accessory-mockup"></div>
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

        {/* Mobile Covers Section */}
        <div className="shop-section covers-section">
            <div className="shop-section-header">
                <div className="section-number">03 / MOBILE COVERS</div>
                <h2 className="shop-section-title">Protect Your Device</h2>
            </div>
            <div className="products-grid covers-grid">
                {covers.map((product, index) =>(
                    <Link key={index} to={`/product/${product.id}`} className="product-card-link">
                        <div className="product-card cover-card">
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
                                <div className="phone-mockup cover-mockup"></div>
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

        {/* Mobile Skins Section */}
        <div className="shop-section skins-section">
            <div className="shop-section-header">
                <div className="section-number">04 / MOBILE SKINS</div>
                <h2 className="shop-section-title">Customize Your Look</h2>
            </div>
            <div className="products-grid skins-grid">
                {skins.map((product, index) =>(
                    <Link key={index} to={`/product/${product.id}`} className="product-card-link">
                        <div className="product-card skin-card">
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
                                <div className="phone-mockup skin-mockup"></div>
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
    </div>
    </>
  )
}

export default Shop
