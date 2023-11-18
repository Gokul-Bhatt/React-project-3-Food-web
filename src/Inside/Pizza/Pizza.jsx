import React from 'react'
import './Pizza.css'
import img_pizza1 from '../FoodAssets/img_pizza1.avif'
import img_pizza2 from '../FoodAssets/img_pizza2.avif'
import img_pizza3 from '../FoodAssets/img_pizza3.avif'
const Pizza = () => {
  return (
    <div className='pizza'>
      <div className="imge">
        <img src={img_pizza1} alt="" />
        <img src={img_pizza2} alt="" />
        <img src={img_pizza3} alt="" />
        </div>
     
    </div>
  )
}

export default Pizza
