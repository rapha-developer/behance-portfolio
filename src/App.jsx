import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route, Link } from 'react-router-dom'

import './styles/fonts/orion.fonts.css'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import PortfolioInBlogs from './pages/PortfolioInBlogs'
import PortfolioInGallery from './pages/PortfolioInGallery'
import PortfolioInPosts from './pages/PortfolioInPosts'
import Navbar from './components/Menu/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<PortfolioInPosts />} />
        <Route path="gallery" element={<PortfolioInGallery />} />
        <Route path="blogs" element={<PortfolioInBlogs />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
