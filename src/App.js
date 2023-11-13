import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Food from './Pages/Food'
import HomeCarts from './Components/Carts/HomeCarts';
import Foods from './Components/Foods/Foods';
import Drinks from './Components/Drinks/Drinks';
import Dail_menu from './Components/Daily_menu/Dail_menu';
import About from './Components/About/About';
const App = () => {
  return (
    <div>

  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path="/" element={<Food/>} />
  <Route path='/Foods' element={<Foods/>}/>
  <Route path='/Drinks' element={<Drinks/>}/>
  <Route path='/Daily menu' element={<Dail_menu/>}/>
  <Route path='/About' element={<About/>}/>
  </Routes>
  </BrowserRouter>
    
    </div>
  )
}

export default App
