import React from 'react'
import Product from '../../pages/Product'
import arrow_icon from '../Assets/breadcrum_arrow.png'
import './Breadscrum.css'
function Breadscrum(props) {
    const {product}=props;
    
  return (
    <div className='breadcrum-path'>
        Home <img src={arrow_icon} alt='/'/> Shop <img src={arrow_icon} alt='/'/> {product.category} <img src={arrow_icon} alt='/'/> {product.name}
    </div>
  )
}

export default Breadscrum
