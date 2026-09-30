import { Routes, Route } from "react-router-dom"
import './App.css'
import HomePage from "./pages/HomePage"
import Error from "./pages/Error"
import Accesories from "./pages/Accesories"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {


  return (
    <>
      <div className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/accessories" element={<Accesories />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>

    </>
  )
}

export default App
