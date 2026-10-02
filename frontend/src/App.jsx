import { Routes, Route } from "react-router-dom"
import './App.css'
import HomePage from "./pages/HomePage"
import Error from "./pages/Error"
import Accesories from "./pages/Accesories"
import ProductDetail from "./pages/ProductDetail"
import Shop from "./pages/Shop"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import About from './pages/About';

function App() {


  return (
    <>
      <div className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/accessories" element={<Accesories />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<Error />} />
         
      <Route path="/about-us" element={<About />} />
    
        </Routes>
        <Footer />
      </div>

    </>
  )
}

export default App



