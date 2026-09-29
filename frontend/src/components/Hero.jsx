import React, { useEffect, useState } from 'react'
import axios from "axios"

const Hero = () => {
  const [tagline, setTagline] = useState("")
  const [bold, setBold] = useState("")
  const [productName, setProductName] = useState("")

  useEffect(()=>{

    const getTagline = async ()=>{
      const response = await axios.get("http://localhost:3000/tagline")
      setTagline(response.data.tagline)
      setBold(response.data.bold)
      setProductName(response.data.productName || "iPhone 11")
    }

    getTagline()

  },[])

  return (
    <>
    <div className="hero-border">

      <div className="left">
        <h1 className='tagline'>{tagline}</h1>
        <br />
        <h1 className="bold tagline ">{bold}</h1>
        <p className="hero-subtitle">Experience the future of mobile technology</p>
        <button className="cta-button">Shop Now</button>
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