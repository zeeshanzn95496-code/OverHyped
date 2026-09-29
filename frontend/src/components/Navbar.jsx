import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="border">
        <div className="navbar-brand">OverHyped</div>
        <div className="navbar-links">
          <Link to={"/"}>Home</Link>
          <Link to={"/accessories"}>Accessories</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar