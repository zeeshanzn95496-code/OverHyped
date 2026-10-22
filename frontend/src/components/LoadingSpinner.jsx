import React from 'react'
import './LoadingSpinner.css'

const LoadingSpinner = ({ size = 'medium' }) => {
  return (
    <div className={`loading-spinner loading-spinner-${size}`}>
      <div className="spinner-circle"></div>
    </div>
  )
}

export default LoadingSpinner
