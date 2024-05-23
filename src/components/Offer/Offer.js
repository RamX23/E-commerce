import React from 'react'
import exclusive from '../Assets/exclusive_image.png'
import "./Offer.css"
function Offer() {
  return (

    <div className='offer'>
      <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
      <p>ONLY ON BEST SELLER PRODUTS</p>
        <button>
            Order Now
        </button>
      </div>
      <div className="offer-right">
      <img src={exclusive} alt="" />
      </div>
    </div>

  )
}

export default Offer
