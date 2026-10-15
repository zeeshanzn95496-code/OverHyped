import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Shop from './pages/Shop'
import Accesories from './pages/Accesories'
import Covers from './pages/Covers'
import Skins from './pages/Skins'
import BuildYourOwn from './pages/BuildYourOwn'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Favorites from './pages/Favorites'
import About from './pages/About'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FilmModal from './components/FilmModal'
import SearchModal from './components/SearchModal'
import SupportModal from './components/SupportModal'

function App() {
  const [filmModal, setFilmModal] = useState({ isOpen: false, title: '' })
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [supportModal, setSupportModal] = useState({ isOpen: false, mode: 'support' })

  const handleOpenFilm = (title = 'Halo One: The Film') => {
    setFilmModal({ isOpen: true, title })
  }

  const handleCloseFilm = () => {
    setFilmModal({ isOpen: false, title: '' })
  }

  const handleOpenSearch = () => {
    setSearchModalOpen(true)
  }

  const handleCloseSearch = () => {
    setSearchModalOpen(false)
  }

  const handleOpenSupport = () => {
    setSupportModal({ isOpen: true, mode: 'support' })
  }

  const handleOpenStore = () => {
    setSupportModal({ isOpen: true, mode: 'store' })
  }

  const handleCloseSupport = () => {
    setSupportModal({ isOpen: false, mode: 'support' })
  }

  return (
    <div className="main-app">
      <Navbar
        onOpenSearch={handleOpenSearch}
        onOpenSupport={handleOpenSupport}
      />

      <main className="content-wrap">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenFilm={handleOpenFilm}
                onTalkToHuman={handleOpenSupport}
                onFindStore={handleOpenStore}
              />
            }
          />
          <Route path="/shop" element={<Shop onOpenFilm={handleOpenFilm} />} />
          <Route path="/accessories" element={<Accesories />} />
          <Route path="/covers" element={<Covers />} />
          <Route path="/skins" element={<Skins />} />
          <Route path="/build-your-own" element={<BuildYourOwn />} />
          <Route path="/product/:id" element={<ProductDetail onOpenFilm={handleOpenFilm} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about-us" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>

      <Footer onOpenSupport={handleOpenSupport} />

      {/* Global Modals */}
      <FilmModal
        isOpen={filmModal.isOpen}
        title={filmModal.title}
        onClose={handleCloseFilm}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={handleCloseSearch}
      />

      <SupportModal
        isOpen={supportModal.isOpen}
        mode={supportModal.mode}
        onClose={handleCloseSupport}
      />
    </div>
  )
}

export default App
