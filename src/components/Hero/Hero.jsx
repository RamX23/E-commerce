import React from 'react'
import './Hero.css'
import banner from '../Assets/hero_image.png'
import arrow from '../Assets/arrow.png'
import hand_icon from '../Assets/hand_icon.png'
function Hero() {
  return (

      <div className="hero">

        <div className="details">
          <div>
      <h2>NEW ARRIVALS ONLY</h2>
          <div className='hero-hand-icon'>
         <p>new</p>
        <img src={hand_icon} alt="" />
        </div>
      <p>collections</p>
      <p>for everyone</p>
      </div>
        <div className='hero-latestbtn'> 
        <div> Latest collection </div>
        <img src={arrow} alt="" />
        </div>
    </div>

        <div className="banner">
       <img src={banner} alt="" />
        </div>
      </div>

  )
}

export default Hero
