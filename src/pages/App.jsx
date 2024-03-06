import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../styles.css'
import Home from './Home'
import About from './About'
import Vans from './Vans/Vans.jsx'
import VanDetail from './Vans/VanDetail.jsx'
import Layout from '../components/Layout.jsx'
import HostLayout from '../components/HostLayout.jsx'
import Dashboard from './Host/Dashboard.jsx'
import Income from './Host/Income.jsx'
import Reviews from './Host/Reviews.jsx'
import HostVans from './Host/HostVans.jsx'
import HostVanDetail from './Host/HostVanDetail.jsx'
import HostVanInfo from './Host/HostVanInfo.jsx'
import HostVanPhotos from './Host/HostVanPhotos.jsx'
import HostVanPricing from './Host/HostVanPricing.jsx'
import '../server/server.js'

export default function App() {
  return (
      <Router>
        <div className='main--container'>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />}/>
              <Route path='about' element={<About activeLink="/about"/>}/>
              <Route path='vans' element={<Vans />}/>
              <Route path='vans/:id' element={<VanDetail />} />

              <Route path='host' element={<HostLayout />}>
                <Route index element={<Dashboard />}/>
                <Route path='income' element={<Income />}/>
                <Route path='reviews' element={<Reviews />}/>
                <Route path='vans' element={<HostVans />}/>
                <Route path='vans/:id' element={<HostVanDetail />}>
                  <Route index element={<HostVanInfo />}/>
                  <Route path='pricing' element={<HostVanPricing />}/>
                  <Route path='photos' element={<HostVanPhotos />}/>
                </Route>
              </Route>
            </Route>
          </Routes>
        </div>
      </Router>
  )
}