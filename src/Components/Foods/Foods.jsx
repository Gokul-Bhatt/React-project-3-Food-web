import React from 'react'
import './Foods.css'
import img_food1 from '../Assets/img_food1.avif'
import img_food2 from '../Assets/img_food2.avif'
import img_food7 from '../Assets/img_food7.avif'
import img_food4 from '../Assets/img_food4.avif'
import img_food5 from '../Assets/img_food5.avif'
import img_food6 from '../Assets/img_food6.avif'
import { Link } from 'react-router-dom'
import Pizza from '../../Inside/Pizza/Pizza'


const Foods = () => {
  return (
    <div className='food'>
      <h1>Inspiration for your first order</h1>
      <div className="images">
        <Link to="/Pizza"><img src={img_food1} alt="" /></Link>
       <Link><img src={img_food2} alt="" /></Link> 
       <Link><img src={img_food7} alt="" /></Link> 
        <Link><img src={img_food4} alt="" /></Link>
        <Link><img src={img_food5} alt="" /></Link>
       <Link><img src={img_food6} alt="" /></Link> 
      </div>
      <div className="name-dish">
        <h3>Pizza</h3>
        <h3>Burger</h3>
        <h3>Cake</h3>
        <h3>Role</h3>
        <h3>Thali</h3>
        <h3>Paneer</h3>
      </div>
      
    </div>
  )
}

export default Foods
