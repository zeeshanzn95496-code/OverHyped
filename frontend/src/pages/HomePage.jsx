import React from 'react'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import TopProducts from '../components/TopProducts'
import TheFlagshipFeature from '../components/TheFlagshipFeature'
import TheSupportingCast from '../components/TheSupportingCast'
import APointOfView from '../components/APointOfView'
import Testimonials from '../components/Testimonials'
import EmailSignup from '../components/EmailSignup'
import BackToTop from '../components/BackToTop'

const HomePage = ({ onOpenFilm, onTalkToHuman, onFindStore }) => {
  return (
    <div className="home-page-container">
      {/* Hero Section */}
      <Hero onOpenFilm={onOpenFilm} />

      {/* Marquee Ticker */}
      <Marquee />

      {/* 01 / The Flagship Edit */}
      <TopProducts onOpenFilm={onOpenFilm} />

      {/* 02 / The Flagship */}
      <TheFlagshipFeature onOpenFilm={onOpenFilm} />

      {/* 03 / The Supporting Cast */}
      <TheSupportingCast />

      {/* 04 / A Point of View */}
      <APointOfView />

      {/* 05 / The Group Chat */}
      <Testimonials />

      {/* 06 / Stay in the Know */}
      <EmailSignup
        onTalkToHuman={onTalkToHuman}
        onFindStore={onFindStore}
      />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  )
}

export default HomePage