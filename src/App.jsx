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

import projects from './api/projects'
import {ProjectModel} from './Helper/ProjectModel'

function App() {
  const [count, setCount] = useState(0)
  const projects_list = projects.map((projectItem) => {

    const project = new ProjectModel(projectItem)
    return {
      id: project.id,
      date: project.date,
      title: project.title,
      author: project.author,
      text: project.text,
      tags: project.tags,
      url: project.url,
      image: project.image
    }
  });

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<PortfolioInPosts projects={projects_list} />} />
        <Route path="gallery" element={<PortfolioInGallery projects={projects_list} />} />
        <Route path="blogs" element={<PortfolioInBlogs projects={projects_list} />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
