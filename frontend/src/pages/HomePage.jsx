import React from 'react'
import Hero from "../components/Hero"
import TopProducts from '../components/TopProducts'
import Testimonials from '../components/Testimonials'
import EmailSignup from '../components/EmailSignup'

const HomePage = () => {
  return (
    <>
      <Hero />
      <TopProducts/>
      <Testimonials />
      <EmailSignup />
    </>
  )
}

export default HomePage