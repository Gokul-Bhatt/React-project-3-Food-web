import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Pizza from '../Inside/Pizza/Pizza'


const FoodRoute = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path='/img_food1' element={<Pizza/>}/>
            </Routes>      
      </BrowserRouter>
    </div>
  )
}

export default FoodRoute
