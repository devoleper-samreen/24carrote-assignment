import React from 'react'
import "../styles/welcome.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import img1 from "../assests/1.1-Lorely-Meza-1.jpg"
import img2 from "../assests/1.2-Holly-Sigafoos-Photo.jpg"
import img3 from "../assests/1.3-Holly-Sigafoos-Photo.jpg"
import img4 from "../assests/1.4-Lorely-Meza.jpg"

const WelcomePage = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='welcome-main-div'>
        <div className='text-div'>
            <h3>WELCOME TO 24 CARROTS</h3>
            <h1>Remarkable Catering & Events</h1>
            <p>24 Carrots is the premier catering and events company of <br/>choice in Southern California. We create remarkable experiences <br/>by offering the finest quality foods and providing unsurpassed personalized service, driven by our passion for life’s<br/> special occasions.</p>
            <button>get in touch →</button>
        </div>
        <div className='image-div'>
            <Slider {...settings} className='slider'>
                <img src={img1} className='images'></img>
                <img src={img2} className='images'/>
                <img src={img3} className='images'></img>
                <img src={img4} className='images'></img>

            </Slider>
        </div>
    </div>
  )
}

export default WelcomePage