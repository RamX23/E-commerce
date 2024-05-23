import React from 'react'
import './Newsletter.css'
function Newsletter() {
  return (
    <div className="main">
    <div className='newsletter'>
      <h1>Get Exclusive Offers On You'r E-mail</h1>
      <p>Subscribe to our newsletter and stay updated</p>
    
    <div className="email">
        <input type="email" placeholder="Enter You'r Email " />
        <button>Subscribe</button>
    </div>
    </div>
    </div>
  )
}

export default Newsletter
