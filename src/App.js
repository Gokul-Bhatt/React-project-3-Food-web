import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Food_home from './Pages/Food_home'
import HomeCarts from './Components/Carts/HomeCarts';
import Foods from './Components/Foods/Foods';
import Drinks from './Components/Drinks/Drinks';
import Dail_menu from './Components/Daily_menu/Dail_menu';
import About from './Components/About/About';
import Popular from './Components/Popular/Popular';
import Pizza from './Inside/Pizza/Pizza';
import Burgar from './Inside/Burgar/Burgar';

const App = () => {
  return (
    <div>

  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path="/" element={<Food_home/>} />
  <Route path='/Foods' element={<Foods/>}/>
  <Route path='/Drinks' element={<Drinks/>}/>
  <Route path='/Daily_menu' element={<Dail_menu/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Foods/Pizza' element={<Pizza/>}/>
  <Route path='/Foods/Burgar' element={<Burgar/>}/>

  </Routes>
  
  </BrowserRouter>
    
    </div>
  )
}

export default App
