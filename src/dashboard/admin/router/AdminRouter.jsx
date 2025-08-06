import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Master from '../layout/Master'
import DashboardRouter from '../pages/dashboard/route/DashboardRouter'
const AdminRouter = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Master/>}>
           <Route path='/dashboard/*' element={<DashboardRouter/>}/> 
        </Route>
      </Routes>
    </div>
  )
}

export default AdminRouter
