import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Etkinlikler from './pages/Etkinlikler'
import Burfas from './pages/Burfas'
import About from './pages/About'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'


export default function SiteRoutes() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/etkinlikler" element={<Etkinlikler/>}/>
    <Route path="/burfas" element={<Burfas/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<PageNotFound />}/>
    </Routes>
  
  )
}
