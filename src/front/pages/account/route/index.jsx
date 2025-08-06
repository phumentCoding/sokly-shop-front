// AccountRoutes.jsx
import { Route, Routes } from "react-router-dom";
import AccountManagent from "../view/AccountManagent";
import Profile from "../components/Profile";
import Favorite from "../components/Favorite";
import Coupon from "../components/MyCoupon";

import MyOrders from "../components/MyOrders";
import Sidebar from "../components/Sidebar";
import ReferFriend from "../components/ReferFriend";

const AccountRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AccountManagent />}>
        <Route path="profile" element={<Profile />} />
        <Route path="profile/favorites" element={<Favorite />} />
        <Route path="profile/coupon" element={<Coupon />} />
        <Route path="profile/orders" element={<MyOrders />} />
        <Route path="profile/sidebar" element={<Sidebar />} />
        <Route path="profile/refer" element={<ReferFriend/>} />
   
      </Route>
    </Routes>
  );
};

export default AccountRoutes;
