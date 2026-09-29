import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Accesories = () => {
  const [accessories, setAccessories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getAccessories = async () => {
      try {
        const response = await axios.get("http://localhost:3000/accessories")
        setAccessories(response.data)
      } catch (error) {
        console.error("Error fetching accessories:", error)
        setAccessories([
          { name: 'Wireless Earbuds', price: '$129', category: 'Audio' },
          { name: 'Phone Case', price: '$29', category: 'Protection' },
          { name: 'Screen Protector', price: '$19', category: 'Protection' },
          { name: 'Wireless Charger', price: '$49', category: 'Power' },
          { name: 'Car Mount', price: '$39', category: 'Accessories' },
          { name: 'Portable Battery', price: '$59', category: 'Power' }
        ])
      } finally {
        setLoading(false)
      }
    }
    getAccessories()
  }, [])

  const handleAddToCart = (item) => {
    console.log("Add to cart:", item.name)
    // Add cart functionality
  }

  if (loading) {
    return (
      <div className="accessories-page">
        <div className="accessories-header">
          <h1 className="accessories-title">Accessories</h1>
          <p className="accessories-subtitle">Enhance your device experience</p>
        </div>
        <div className="accessories-loading">
          <div className="loading-spinner"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="accessories-page">
      <div className="accessories-header">
        <h1 className="accessories-title">Accessories</h1>
        <p className="accessories-subtitle">Enhance your device experience</p>
      </div>
      <div className="accessories-grid">
        {accessories.map((item, index) => (
          <div key={index} className="accessory-card">
            <div className="accessory-image"></div>
            <div className="accessory-info">
              <span className="accessory-category">{item.category}</span>
              <h3 className="accessory-name">{item.name}</h3>
              <p className="accessory-price">{item.price}</p>
              <button className="accessory-button" onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Accesories