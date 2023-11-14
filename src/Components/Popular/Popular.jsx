import React from 'react'
import './Popular.css'
import img_pop1 from '../Assets/img_pop1.avif'
import img_pop3 from '../Assets/img_pop3.avif'
import img_pop4 from '../Assets/img_pop4.avif'
import img_pop5 from '../Assets/img_pop5.avif'
import img_arrow from '../Assets/img_arrow.png'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>Popular</h1>
        <div className="image-pop">
            <img src={img_pop1} alt="" />
            <img src={img_pop3} alt="" />
            <img src={img_pop4} alt="" />
            <img src={img_pop5} alt="" />
        </div>
            <button>Check <img src={img_arrow} alt="" /></button>
      
    </div>
  )
}

export default Popular
