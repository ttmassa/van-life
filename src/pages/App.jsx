import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../styles.css'
import Home from './Home'
import About from './About'
import Vans from './Vans'
import Header from '../components/Header'

export default function App() {
  return (
      <Router>
        <div className='main--container'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About activeLink="/about"/>}/>
            <Route path='/vans' element={<Vans />}/>
          </Routes>
        </div>
      </Router>
  )
}