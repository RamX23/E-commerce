import React from 'react'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'
import './Collection.css'

function Collection() {
  return (
    <div className='collection'>
      <div className="head">
        <p>New Collection</p>
        <hr/>
        </div>
        <div className="newcollection">
            {
                new_collections.map((item,i)=>{
                    return <Item key={i} image={item.image} newprice={item.new_price} oldprice={item.old_price} name={item.name} id={item.id}/>
                })
            }
        </div>
    
    </div>
  )
}

export default Collection
