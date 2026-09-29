import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Accesories = () => {
  const [accessories, setAccessories] = useState([])

  useEffect(() => {
    const getAccessories = async () => {
      const response = await axios.get("http://localhost:3000/accessories")
      setAccessories(response.data)
    }
    getAccessories()
  }, [])

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
              <button className="accessory-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Accesories