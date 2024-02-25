import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../styles.css'
import Home from './Home'
import About from './About'

export default function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </Router>
  )
}