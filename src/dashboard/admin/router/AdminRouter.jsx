import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Master from '../layout/Master'
import DashboardRouter from '../pages/dashboard/route/DashboardRouter'
import ProductRouter from '../pages/products/router/ProductRouter'
const AdminRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Master/>}>
           <Route path='/dashboard/*' element={<DashboardRouter/>}/> 
           <Route path='/products/*' element={<ProductRouter/>}/> 
        </Route>
      </Routes>
    </div>
  )
}

export default AdminRouter
