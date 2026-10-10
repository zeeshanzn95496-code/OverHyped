import React, { createContext, useContext, useState, useEffect } from 'react'

const FavoritesContext = createContext()

export const useFavorites = () => {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
}

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])
  const [notification, setNotification] = useState(null)

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]')
      setFavorites(savedFavorites)
    } catch (error) {
      console.error('Error loading favorites:', error)
    }
  }, [])

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
    // Dispatch event to update navbar
    window.dispatchEvent(new Event('favoritesUpdated'))
  }, [favorites])

  const addToFavorites = (product) => {
    // Check if product already exists in favorites
    const exists = favorites.some(item => item.id === product.id)
    if (exists) {
      setNotification(`${product.name} is already in favorites!`)
    } else {
      setFavorites([...favorites, product])
      setNotification(`${product.name} added to favorites!`)
    }

    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  const removeFromFavorites = (productId) => {
    setFavorites(favorites.filter(item => item.id !== productId))
  }

  const toggleFavorite = (product) => {
    const exists = favorites.some(item => item.id === product.id)
    if (exists) {
      removeFromFavorites(product.id)
      setNotification(`${product.name} removed from favorites!`)
    } else {
      addToFavorites(product)
    }
  }

  const isFavorite = (productId) => {
    return favorites.some(item => item.id === productId)
  }

  const clearFavorites = () => {
    setFavorites([])
  }

  const favoritesCount = favorites.length

  const value = {
    favorites,
    favoritesCount,
    notification,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
    clearFavorites
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}
