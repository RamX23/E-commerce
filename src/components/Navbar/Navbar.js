import React, { useState } from 'react'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import './Navbar.css'
import { Link } from 'react-router-dom';
import Product from '../../pages/Product';
import Login from '../../pages/Login';
import Shopcategory from '../../pages/Shopcategory';
function Navbar() {
  const [menu,setmenu]=useState("menu");
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={logo} alt=''/>
        SHOPPER
      </div>
      <div className="nav">
        <ul>
            <li onClick={()=>{setmenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>: <></>}</li>
            <li onClick={()=>{setmenu("men")}}><Link to='/men'>Men</Link>{menu==="men"?<hr/>: <></>}</li>
            <li onClick={()=>{setmenu("women")}}><Link to='/women'>Women</Link>{menu==="women"?<hr/>: <></>}</li>
            <li onClick={()=>{setmenu("kids")}}><Link to='kids'>Kids</Link>{menu==="kids"?<hr/>: <></>}</li>
        </ul>
      </div>
      <div className="log">
        <div className="singin">

          <Link to='/login'>
        <button>
          Login</button>
          </Link>
        </div>
       <div className="cart">
        <Link to='/cart'>
        <img src={cart_icon} alt=''/>
        </Link>
       </div>
       <div className="cartcount">
        <p>0</p>
       </div>
 
      </div>
    </div>
  )
}

export default Navbar
