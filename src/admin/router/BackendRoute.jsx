import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Master from '../layout/Master'
import Dashboard from '../Dashboard '

const BackendRoute = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Master/>}>
       
        </Route>
      </Routes>
    </div>
  )
}

export default BackendRoute
