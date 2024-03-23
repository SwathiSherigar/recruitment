import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Recruitment from "./Pages/Recruitment"
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recruitment/:type" element={<Recruitment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
