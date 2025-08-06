import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from '../Dashboard '


const Master = () => {
  return (
    <div>
      <Outlet/>
      <Dashboard/>
  
   
    </div>
  )
}

export default Master
