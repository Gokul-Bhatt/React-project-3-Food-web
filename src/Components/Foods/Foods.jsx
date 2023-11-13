import React from 'react'
import './Foods.css'
import img_food1 from '../Assets/img_food1.avif'
import img_food2 from '../Assets/img_food2.avif'
import img_food3 from '../Assets/img_food3.avif'
import img_food4 from '../Assets/img_food4.avif'
import img_food5 from '../Assets/img_food5.avif'
import img_food6 from '../Assets/img_food6.avif'


const Foods = () => {
  return (
    <div className='food'>
      <h1>Inspiration for your first order</h1>
      <div className="image">
        <img src={img_food1} alt="" />
        <img src={img_food2} alt="" />
        <img src={img_food3} alt="" />
        <img src={img_food4} alt="" />
        <img src={img_food5} alt="" />
        <img src={img_food6} alt="" />
      </div>
      
    </div>
  )
}

export default Foods
