import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'
import { useParams } from 'react-router-dom';
import all_product from '../components/Assets/all_product';
import Breadscrum from '../components/Breadscrum/Breadscrum';
import Productdisplay from '../components/Productdisplay/Productdisplay';
import Offer from '../components/Offer/Offer';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import Related from '../components/Relatedproduct/Related';

function Product() {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=> e.id ===Number(productId));
  return (
    <div>
    <Breadscrum product={product}/>
    <Productdisplay product={product}/>
    <DescriptionBox/>
    <Related/>
   <Footer/>
    </div>
  )
}

export default Product
