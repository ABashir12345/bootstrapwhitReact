import React from 'react'
import Navbar from './Navbar.js/Navbar';

import { Routes,Route } from 'react-router-dom';
import About from './compunent/About';
import Home from './compunent/Home';
import Contact from './compunent/Contact';

const Bootstrap = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/about' element={<About/>}>

        </Route>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/countct' element={<Contact/>}></Route>
      </Routes>
  
    </div>
  )
}

export default Bootstrap
