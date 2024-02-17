import React from 'react'
import { Link } from "react-router-dom"
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <div className='main-div'>
        <div className='div1'>
            <Link to="/about">About</Link>
            <Link to="/services">services</Link>
            <Link to="/events">events</Link>
        </div>
        <div className='div2'>
            <h1>24 Carrots</h1>
            <p>catering & events</p>
        </div>
        <div className='div3'>
            <Link to="/venues">venues</Link>
            <Link to="/careers">careers</Link>
            <button>get in touch</button>
        </div>
    </div>
  )
}

export default Navbar