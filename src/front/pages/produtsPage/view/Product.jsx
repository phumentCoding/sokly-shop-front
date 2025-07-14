import React from 'react'

import Nabar from '../components/Nabar'
import FilterProduct from '../components/FilterProduct'

const Product = () => {
  return (
    <div>
      
       <Nabar items={[]}/>
       {/* <FilterProduct/> */}
        <h1 className='max-w-7xl mx-auto px-6 '>Mobile Phone</h1>
        <FilterProduct/>
        

        {/* Reusable component call here */}
    </div>
  )
}

export default Product