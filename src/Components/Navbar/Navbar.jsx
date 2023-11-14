import React, { useState } from 'react'
import './Navbar.css'
import img_search from '../Assets/img_search.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  
  return (
    <div className='navbar'>
        <h1>TastyTracks</h1>
        <ul className="nav-menu">
            <li><Link to='/'style={{textDecoration:"none", color:'black'}}>Home</Link></li>
            <li><Link to='Foods'style={{textDecoration:"none", color:'black'}}>Food</Link></li>
            <li><Link to='Drinks' style={{textDecoration:"none",color:'black'}}>Drinks</Link></li>
           <li> <Link to='Dailymenu' style={{textDecoration:"none",color:'black'}}>Daily menu</Link></li>
            <li><Link to='Contact'style={{textDecoration:"none",color:'black'}}>Contact</Link></li>
           <li><Link to='About'style={{textDecoration:"none",color:'black'}}>About</Link></li>
        </ul>
        <div className="search-bar">
        <input type="text" />
        <button><img src={img_search} alt="" /></button>
        </div>        
    </div>
  )
}

export default Navbar
