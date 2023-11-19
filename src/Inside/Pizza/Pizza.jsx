import React from 'react'
import './Pizza.css'
import img_pizza1 from '../FoodAssets/img_pizza1.avif'
import img_pizza2 from '../FoodAssets/img_pizza2.avif'
import img_pizza3 from '../FoodAssets/img_pizza3.avif'
const Pizza = () => {
  return (
    <div className='pizza'>
      <div className="imge">
        <div className="img1">
        <img src={img_pizza1} alt="" />
        <h2>Hungry Oven</h2>
        <button>BUY</button>
        </div>
        <div className="img2">
        <img src={img_pizza2} alt="" />
        <h2>Tomato pizza</h2>
        <button>BUY</button>
        </div>
        <div className="img3">
        <img src={img_pizza3} alt="" />
        <h2>Mix pizza</h2>
        <button>BUY</button>
        </div>
        </div>
     
    </div>
  )
}

export default Pizza
