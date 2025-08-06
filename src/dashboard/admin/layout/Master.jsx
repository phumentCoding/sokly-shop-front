import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from '../pages/dashboard/view/Dashboard '


const Master = () => {
  return (
    <div>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Master
