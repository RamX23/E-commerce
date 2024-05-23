import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offer from '../components/Offer/Offer'
import Collection from '../components/Newcollection/Collection'
import Newsletter from '../components/Newsletter/Newsletter'
import Footer from '../components/Footer/Footer'

function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <Collection/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Shop
