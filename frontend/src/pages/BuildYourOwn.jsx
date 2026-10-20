import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'
import './BuildYourOwn.css'

const availableMobiles = [
  {
    id: 1,
    name: 'Halo One',
    category: 'Phones',
    description: 'The conversation starter',
    rating: '4.7',
    reviews: '3 owner reviews',
    price: '$799',
    image: '/images/halo-hero.png',
    theme: 'coral'
  },
  {
    id: 2,
    name: 'Halo Mini',
    category: 'Phones',
    description: 'Small phone. Big entrance.',
    rating: '4.7',
    reviews: '3 owner reviews',
    price: '$649',
    image: '/images/halo-mini.png',
    theme: 'teal'
  },
  {
    id: 3,
    name: 'Halo Ultra',
    category: 'Phones',
    description: 'For the overachievers',
    rating: '4.8',
    reviews: '5 owner reviews',
    price: '$999',
    image: '/images/halo-ultra.png',
    theme: 'dark'
  },
  {
    id: 4,
    name: 'Foldline',
    category: 'Phones',
    description: 'Two screens. One point of view.',
    rating: '4.7',
    reviews: '3 owner reviews',
    price: '$1,299',
    image: '/images/foldline.png',
    theme: 'purple'
  },
  {
    id: 5,
    name: 'Triple Fold',
    category: 'Phones',
    description: 'Three screens. Infinite possibilities.',
    rating: '4.9',
    reviews: '2 owner reviews',
    price: '$1,499',
    image: '/images/foldline.png',
    theme: 'teal'
  },
  {
    id: 6,
    name: 'Quadra',
    category: 'Phones',
    description: 'Four screens. Ultimate multitasking.',
    rating: '5.0',
    reviews: '1 owner review',
    price: '$1,799',
    image: '/images/foldline.png',
    theme: 'dark'
  }
]

const BuildYourOwn = () => {
  const { addToCart, notification: cartNotification } = useCart()
  const { toggleFavorite, isFavorite, notification: favNotification } = useFavorites()
  const notification = cartNotification || favNotification
  const [selectedMobile, setSelectedMobile] = useState(null)
  const [selectedRAM, setSelectedRAM] = useState(null)
  const [selectedStorage, setSelectedStorage] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [includeCharger, setIncludeCharger] = useState(false)
  const [selectedCharger, setSelectedCharger] = useState(null)
  const [includeCover, setIncludeCover] = useState(false)
  const [selectedCover, setSelectedCover] = useState(null)
  const [includeSkin, setIncludeSkin] = useState(false)
  const [selectedSkin, setSelectedSkin] = useState(null)

  const ramOptions = [
    { size: '8GB', price: 0 },
    { size: '16GB', price: 150 },
    { size: '24GB', price: 250 },
    { size: '32GB', price: 350 }
  ]

  const storageOptions = [
    {size: '512GB',price:  140},
    { size: '780GB', price: 0 },
    { size: '1TB', price: 150 },
    { size: '2TB', price: 300 },
    { size: '3TB', price: 450 }
  ]

  const colorOptions = [
    { name: 'Coral', hex: '#FA4465' },
    { name: 'Yellow', hex: '#FFCC4D' },
    { name: 'Teal', hex: '#30B5B8' },
    { name: 'Purple', hex: '#9D71E8' },
    {name: 'black', hex: 'black'}
  ]

  const chargerOptions = [
    { name: '67W Charger', price: 149 },
    { name: '120W Charger', price: 279 }
  ]

  const coverOptions = [
    { name: 'Clear Case', price: 49 },
    { name: 'Leather Case', price: 59 },
    { name: 'Rugged Case', price: 69 },
    { name: 'Designer Case', price: 89 }
  ]

  const skinOptions = [
    { name: 'Matte Skin', price: 39 },
    { name: 'Glossy Skin', price: 24 },
    { name: 'Carbon Fiber Skin', price: 64 },
    { name: 'Designer Skin', price: 44 },
    { name: 'mercury limited',price:99}
  ]

  const getTotalPrice = () => {
    if (!selectedMobile) return 0
    const basePrice = parseInt(selectedMobile.price.replace(/[$,]/g, ''))
    const ramPrice = ramOptions.find(r => r.size === selectedRAM)?.price || 0
    const storagePrice = storageOptions.find(s => s.size === selectedStorage)?.price || 0
    const chargerPrice = includeCharger && selectedCharger ? chargerOptions.find(c => c.name === selectedCharger)?.price || 0 : 0
    const coverPrice = includeCover && selectedCover ? coverOptions.find(c => c.name === selectedCover)?.price || 0 : 0
    const skinPrice = includeSkin && selectedSkin ? skinOptions.find(s => s.name === selectedSkin)?.price || 0 : 0
    return `$${basePrice + ramPrice + storagePrice + chargerPrice + coverPrice + skinPrice}`
  }

  return (
    <div className="build-your-own-page">
      {notification && (
        <div className="overhyped-toast">
          <span className="toast-sparkle">✦</span>
          <span>{notification}</span>
        </div>
      )}

      <div className="build-container">
        <div className="build-header">
          <span className="build-kicker">BUILD YOUR OWN NO NEED OF ANY SUPPORT</span>
          <h1 className="build-title">Customize Your Device</h1>
          <p className="build-subtitle">select you own specs no will judge you.</p>
        </div>

        <div className="build-content">
          <div className="build-selection-panel">
            <div className="mobile-selection">
              <h3 className="selection-label">Select Device</h3>
              <div className="mobile-buttons">
                {availableMobiles.map(mobile => (
                  <button
                    key={mobile.id}
                    className={`mobile-btn ${selectedMobile?.id === mobile.id ? 'active' : ''}`}
                    onClick={() => { setSelectedMobile(mobile); setSelectedRAM(null); setSelectedStorage(null); setSelectedColor(null); setIncludeCharger(false); setSelectedCharger(null); setIncludeCover(false); setSelectedCover(null); setIncludeSkin(false); setSelectedSkin(null) }}
                  >
                    {mobile.name}
                  </button>
                ))}
              </div>
            </div>

            {selectedMobile && (
              <div className="ram-selection">
                <h3 className="selection-label">Select RAM</h3>
                <div className="ram-buttons">
                  {ramOptions.map((ram) => (
                    <button
                      key={ram.size}
                      className={`ram-btn ${selectedRAM === ram.size ? 'active' : ''}`}
                      onClick={() => setSelectedRAM(ram.size)}
                    >
                      {ram.size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedMobile && (
              <div className="storage-selection">
                <h3 className="selection-label">Select Storage</h3>
                <div className="storage-buttons">
                  {storageOptions.map((storage) => (
                    <button
                      key={storage.size}
                      className={`storage-btn ${selectedStorage === storage.size ? 'active' : ''}`}
                      onClick={() => setSelectedStorage(storage.size)}
                    >
                      {storage.size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedMobile && (
              <div className="color-selection">
                <h3 className="selection-label">Select Color</h3>
                <div className="color-buttons">
                  {colorOptions.map((color) => (
                    <button
                      key={color.name}
                      className={`color-btn ${selectedColor === color.name ? 'active' : ''}`}
                      onClick={() => setSelectedColor(color.name)}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColor === color.name && <span className="color-check">✓</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedMobile && (
              <div className="charger-selection">
                <div className="charger-toggle-wrapper">
                  <h3 className="selection-label">Add Charger (Optional)</h3>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={includeCharger}
                      onChange={(e) => { setIncludeCharger(e.target.checked); setSelectedCharger(null) }}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                {includeCharger && (
                  <div className="charger-buttons">
                    {chargerOptions.map((charger) => (
                      <button
                        key={charger.name}
                        className={`charger-btn ${selectedCharger === charger.name ? 'active' : ''}`}
                        onClick={() => setSelectedCharger(charger.name)}
                      >
                        <span className="charger-name">{charger.name}</span>
                        <span className="charger-price">+${charger.price}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {selectedMobile && (
              <div className="cover-selection">
                <div className="cover-toggle-wrapper">
                  <h3 className="selection-label">Add Cover (Optional)</h3>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={includeCover}
                      onChange={(e) => { setIncludeCover(e.target.checked); setSelectedCover(null) }}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                {includeCover && (
                  <div className="cover-buttons">
                    {coverOptions.map((cover) => (
                      <button
                        key={cover.name}
                        className={`cover-btn ${selectedCover === cover.name ? 'active' : ''}`}
                        onClick={() => setSelectedCover(cover.name)}
                      >
                        <span className="cover-name">{cover.name}</span>
                        <span className="cover-price">+${cover.price}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {selectedMobile && (
              <div className="skin-selection">
                <div className="skin-toggle-wrapper">
                  <h3 className="selection-label">Add Skin (Optional)</h3>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={includeSkin}
                      onChange={(e) => { setIncludeSkin(e.target.checked); setSelectedSkin(null) }}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                {includeSkin && (
                  <div className="skin-buttons">
                    {skinOptions.map((skin) => (
                      <button
                        key={skin.name}
                        className={`skin-btn ${selectedSkin === skin.name ? 'active' : ''}`}
                        onClick={() => setSelectedSkin(skin.name)}
                      >
                        <span className="skin-name">{skin.name}</span>
                        <span className="skin-price">+${skin.price}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="build-preview-panel">
            {selectedMobile ? (
              <div className="device-preview">
                <img src={selectedMobile.image} alt={selectedMobile.name} className="preview-image" />
                <div className="preview-info">
                  <h3 className="preview-title">{selectedMobile.name}</h3>
                  <p className="preview-desc">{selectedMobile.description}</p>
                  {(selectedRAM || selectedStorage || selectedColor || includeCharger || includeCover || includeSkin) && (
                    <div className="preview-specs">
                      {selectedRAM && <span className="spec-item">RAM: {selectedRAM}</span>}
                      {selectedStorage && <span className="spec-item">Storage: {selectedStorage}</span>}
                      {selectedColor && <span className="spec-item">Color: {selectedColor}</span>}
                      {includeCharger && selectedCharger && <span className="spec-item">Charger: {selectedCharger}</span>}
                      {includeCover && selectedCover && <span className="spec-item">Cover: {selectedCover}</span>}
                      {includeSkin && selectedSkin && <span className="spec-item">Skin: {selectedSkin}</span>}
                      {(selectedRAM || selectedStorage || selectedColor || includeCharger || includeCover || includeSkin) && <span className="spec-item">Price: {getTotalPrice()}</span>}
                    </div>
                  )}
                </div>
                {selectedRAM && selectedStorage && selectedColor ? (
                  <button
                    className="btn-add-to-cart"
                    onClick={() => {
                      let productName = `${selectedMobile.name} (${selectedRAM} RAM, ${selectedStorage}, ${selectedColor}`
                      if (includeCharger && selectedCharger) {
                        productName += `, ${selectedCharger}`
                      }
                      if (includeCover && selectedCover) {
                        productName += `, ${selectedCover}`
                      }
                      if (includeSkin && selectedSkin) {
                        productName += `, ${selectedSkin}`
                      }
                      productName += ')'

                      const customMobile = {
                        ...selectedMobile,
                        name: productName,
                        customRAM: selectedRAM,
                        customStorage: selectedStorage,
                        customColor: selectedColor,
                        customCharger: includeCharger ? selectedCharger : null,
                        customCover: includeCover ? selectedCover : null,
                        customSkin: includeSkin ? selectedSkin : null,
                        price: getTotalPrice()
                      }
                      addToCart(customMobile)
                    }}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <button className="btn-add-to-cart" disabled>
                    {!selectedRAM ? 'Select RAM to continue' : !selectedStorage ? 'Select storage to continue' : 'Select color to continue'}
                  </button>
                )}
              </div>
            ) : (
              <div className="preview-placeholder">
                <div className="placeholder-icon">📱</div>
                <p className="placeholder-text">Select a device to preview</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuildYourOwn
