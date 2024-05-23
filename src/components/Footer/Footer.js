import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png';
import insta_logo from '../Assets/instagram_icon.png';
import pintrest_logo from '../Assets/pintester_icon.png';
import whatsapp_logo from '../Assets/whatsapp_icon.png';
function Footer() {
  return (
    <div className="footer-main">
    <div className='footer'>
        <div className="foot">
      <img src={footer_logo} alt="" />
      <p>SHOPPERSTOP</p>
      </div>
      <ul>
        <li>company</li>
        <li>products</li>
        <li>offices</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    <div className="social">
        <img src={insta_logo} alt="" />
        <img src={pintrest_logo} alt="" />
        <img src={whatsapp_logo} alt="" />
    </div>
    <div className="copyright">
        copyright @2023 - All Rights Reserved.
    </div>
    </div>
    </div>
  )
}

export default Footer
