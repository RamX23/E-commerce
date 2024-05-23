import React from 'react'
import Item from '../Item/Item'
import data_product from '../Assets/data'
import './Popular.css'
function Popular() {
  return (
    <div className='popular'>
      <div className="head">
        <p>Popular Item in Women</p>
        </div>
        <hr/>
        <div className="popular_item">
      {data_product.map((item,i)=>{
          return <Item image={item.image} oldprice={item.old_price} newprice={item.new_price} name={item.name} id={item.id}/>
      })}
</div>
    </div>
  )
}

export default Popular
