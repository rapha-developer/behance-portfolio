import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './styles/fonts/orion.fonts.css'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import PortfolioInBlogs from './pages/PortfolioInBlogs'
import PortfolioInGallery from './pages/PortfolioInGallery'
import PortfolioInPosts from './pages/PortfolioInPosts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Home /> */}
      {/* <PortfolioInPosts /> */}
      {/* <PortfolioInBlogs /> */}
      {/* <PortfolioInGallery /> */}
      {/* <About /> */}
      {/* <Contact /> */}
    </div>
  )
}

export default App
