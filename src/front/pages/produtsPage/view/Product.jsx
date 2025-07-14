import React from 'react'

import Nabar from '../components/Nabar'
import FilterProduct from '../components/FilterProduct'

const Product = () => {
  return (
    <div>
      
       <Nabar items={[]}/>
       {/* <FilterProduct/> */}
        <FilterProduct/>
        

        {/* Reusable component call here */}
    </div>
  )
}

export default Product