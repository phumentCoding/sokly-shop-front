import { Routes, Route, Navigate } from "react-router-dom"
import Favorite from "../components/Favorite"
import Profile from "../components/Profile"
import MyOrder from "../components/MyOrder"
import MyCoupon from "../components/MyCoupon"
import ReferFriend from "../components/ReferFriend"
import ChangePassword from "../components/ChangePassword"
import AccountManagement from "../view/AccountManagement"

const AccountRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AccountManagement />}>
        <Route index element={<Navigate to="myorder" replace />} />
        <Route path="favorites" element={<Favorite />} />
        <Route path="profile" element={<Profile />} />
        <Route path="mycoupon" element={<MyCoupon />} />
        <Route path="changepassword" element={<ChangePassword />} />
        <Route path="referfriend" element={<ReferFriend />} />
        <Route path="myorder" element={<MyOrder />} />
      </Route>
    </Routes>
  )
}

export default AccountRoutes
