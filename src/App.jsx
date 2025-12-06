import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import IdentifyUnified from './pages/IdentifyUnified'

export default function App() {
  return (
    <div>
      <NavBar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/analyze" element={<IdentifyUnified />} />
        </Routes>
      </main>
    </div>
  )
}
