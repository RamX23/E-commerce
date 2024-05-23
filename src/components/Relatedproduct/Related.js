import React from 'react'
import data_product from '../Assets/data'
import './Related.css'
import Item from '../Item/Item'
const Related = () => {
  return (
    <div>
      <div className="related">
        <h1>Related Product</h1>
        <hr/>
        <div className="related-product">
            {data_product.map((item,i)=>{
        return <Item key={i} oldprice={item.old_price} image={item.image} newprice={item.new_price} id={item.id}/>
            })}
        </div>
      </div>
    </div>
  )
}

export default Related
