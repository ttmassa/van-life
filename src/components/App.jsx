import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import '../styles.css'
import Home from './Home'
import About from './About'

export default function App() {
  return (
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>  
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </Router>
  )
}