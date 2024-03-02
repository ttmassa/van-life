import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../styles.css'
import Home from './Home'
import About from './About'
import Vans from './Vans/Vans.jsx'
import VanDetail from './Vans/VanDetail.jsx'
// import Footer from '../components/Footer'
import Layout from '../components/Layout.jsx'
import '../server/server.js'

export default function App() {
  return (
      <Router>
        <div className='main--container'>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Home />}/>
              <Route path='/about' element={<About activeLink="/about"/>}/>
              <Route path='/vans' element={<Vans />}/>
              <Route path='/vans/:id' element={<VanDetail />} />
            </Route>
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
  )
}