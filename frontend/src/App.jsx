import { Routes, Route } from "react-router-dom"
import './App.css'
import HomePage from "./pages/HomePage"
import Error from "./pages/Error"
import Accesories from "./pages/Accesories"
import Navbar from "./components/Navbar"

function App() {


  return (
    <>
      <div className="main">
        <div className="navbar">
          <Navbar />
        </div>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/accessories" element={<Accesories />} />



          <Route path="*" element={<Error />} />
        </Routes>
      </div>

    </>
  )
}

export default App
