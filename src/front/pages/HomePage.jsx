import React from 'react'
import HomeSlide from '../components/HomeSlide'
import SpecialOffer from '../components/SpecialOffer'
import NewArrival from '../components/NewArrival'
import PopularCategory from '../components/PopularCategory'
import SmartWatch from '../components/SmartWatch'
import Accessories from '../components/Accessories'

const HomePage = () => {
  return (
    <div>
        <HomeSlide/>

        <SpecialOffer/>

        <NewArrival/>

        <PopularCategory/>
        <SmartWatch/>
        <Accessories/>

    </div>
  )
}

export default HomePage