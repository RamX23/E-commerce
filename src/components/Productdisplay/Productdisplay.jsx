import React from "react";
import "./Productdisplay.css";
import star_dull_icon from "../Assets/star_dull_icon.png";
import star_icon from '../Assets/star_icon.png'
function Productdisplay(props) {
  const { product } = props;
  return (
    <div>
      <div className="productdisplay">
        <div className="productdisplay-left">
          <div className="displayimglist">
            <img src={product.image} alt="/" />
            <img src={product.image} alt="/" />
            <img src={product.image} alt="/" />
            <img src={product.image} alt="/" />
          </div>
          <div className="mainimg">
            <img src={product.image} alt="/" />
          </div>
        </div>
        <div className="productdisplay-right">
          <div className="stars">
            <img src={star_icon} alt="/" />
            <img src={star_icon} alt="/" />
            <img src={star_icon} alt="/" />
            <img src={star_icon} alt="/" />
            <img src={star_dull_icon} alt="/" />
            <p>122</p>
          </div>
          <div className="right-prices">
            <div className="pdold">${product.old_price}</div>
            <div className="pdnew">${product.new_price}</div>
          </div>
          <div className="pddesc">
            classic black cotton hoodie, crafted for ultimate comfort and style.
            Featuring a cozy fleece lining and a front kangaroo pocket, it's
            perfect for everyday wear.
          </div>
          <div className="pdsize">
            <h1>Select Size</h1>
            <div className="pdsizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
          </div>
          <button>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default Productdisplay;
