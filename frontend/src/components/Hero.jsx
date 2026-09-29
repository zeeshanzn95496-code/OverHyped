import React, { useEffect, useState } from 'react'
import axios from "axios"

const Hero = () => {
  const [tagline, setTagline] = useState("")
  const [bold, setBold] = useState("")
  const [productName, setProductName] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(()=>{

    const getTagline = async ()=>{
      try {
        const response = await axios.get("http://localhost:3000/tagline")
        setTagline(response.data.tagline)
        setBold(response.data.bold)
        setProductName(response.data.productName || "iPhone 11")
      } catch (error) {
        console.error("Error fetching tagline:", error)
        setTagline("Make a ")
        setBold("Entrance")
        setProductName("iPhone 11")
      } finally {
        setLoading(false)
      }
    }

    getTagline()

  },[])

  const handleShopNow = () => {
    // Add navigation or scroll to products
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  if (loading) {
    return (
      <div className="hero-border">
        <div className="loading">
          <div className="loading-spinner"></div>
        </div>
      </div>
    )
  }

  return (
    <>
    <div className="hero-border">

      <div className="left">
        <h1 className='tagline'>{tagline}</h1>
        <br />
        <h1 className="bold tagline ">{bold}</h1>
        <p className="hero-subtitle">Experience the future of mobile technology</p>
        <button className="cta-button" onClick={handleShopNow}>Shop Now</button>
      </div>
      <div className="right">
        <div className="phone-image">
          <div className="phone-screen"></div>
          <div className="phone-notch"></div>
        </div>
        <h1 className='hero-title'>{productName}</h1>
        <p className="hero-price">Starting at $699</p>
      </div>
    </div>
    </>
  )
}

export default Hero