import React, { useContext } from 'react'
import './CSS/Shopcategoory.css'
import { ShopContext } from '../context/Shopcontext'
import Dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item';
import imag from '../components/Assets/product_3.png'
// import all_product from '../components/Assets/all_product';
import Footer from '../components/Footer/Footer';

function Shopcategory(props) {
  const {all_product}=useContext(ShopContext);
  return (
    <div className='catmain'>
     
        <img src={props.banner} alt="" />
   
        <div className="topsection">
        
          <p className='bold'>
            <span>Showing result 1-12 </span>  Out of 36 products</p>
    
        <div className="sort">
        <button>Sort by <img src={Dropdown_icon} alt="" /></button>
        </div>
        </div>
        <div className="products">
          {
            all_product && all_product.map((item,i)=>{
            
              if(props.category===item.category){
                
                return <Item image={item.image} oldprice={item.old_price} newprice={item.new_price} name={item.name} key={i} id={item.id}/>
          }
          else {return null};
            })
          }
        </div>
        <div className="loadmore">
          <button className='more'>Explore more</button>
        </div>

      <Footer/>
    </div>
  )
}

export default Shopcategory
