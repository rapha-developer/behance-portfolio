import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './styles/fonts/orion.fonts.css'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import PortfolioInGrids from './pages/PortfolioInGrids'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Contact /> */}
      <PortfolioInGrids />
      {/* <About /> */}
    </div>
  )
}

export default App
