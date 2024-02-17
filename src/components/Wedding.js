import React from 'react'
import img from "../assests/wedding.jpg"
import "../styles/wedding.css"
import { Link } from 'react-router-dom'

const Wedding = () => {
  return (
    <div className='wedd-main-div'>
        <div className='wedd-img-div'>
            <img src={img}></img>
        </div>
        <div className='wedd-div'>
        <h1>Making Every Experience Magical</h1>
        <div className='wedd-text-div'>
            <div className='wedd-links-div'>
                <Link to="">Weddings</Link>
                <Link to="">Social</Link>
                <Link to="">Corporate</Link>
                <Link to="">Venues</Link>
            </div>
            <div className='wedd-links-text-div'>
                <h3>EXCEPTIONAL WEDDINGS</h3>
                <p>
The most important day of your life, is ours too. Your wedding should be the ultimate celebration of your relationship, and our team of experts guide you through the process, offering peace of mind and a remarkable experience.</p>
<button>learn more →</button>
           </div>

           </div>
        </div>
    </div>
  )
}

export default Wedding