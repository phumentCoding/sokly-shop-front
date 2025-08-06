import { Route, Routes } from "react-router-dom"
import Master from "../layout/Master"
import Dashboard from "../pages/Dashboard"
import Orders from "../pages/Orders"
import Users from "../pages/Users"
import Products from "../pages/Products"

const BackendRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Master />}>
          <Route index element={<Dashboard />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </div>
  )
}

export default BackendRoute
