"use client"
import { Outlet, useLocation } from "react-router-dom"
import Sidebar from "../components/Sidebar"

const AccountManagement = () => {
  const location = useLocation()

  // Get active item from current route
  const getActiveItem = () => {
    const path = location.pathname.split("/").pop()
    switch (path) {
      case "favorites":
        return "favorite"
      case "profile":
        return "personal-info"
      case "mycoupon":
        return "my-coupon"
      case "changepassword":
        return "change-password"
      case "referfriend":
        return "refer-friend"
      case "myorder":
        return "my-order"
      default:
        return "my-order"
    }
  }

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-4">
      <div className="flex w-[80%] min-h-[80vh] bg-gray-50 rounded-lg shadow-lg overflow-hidden">
        <Sidebar activeItem={getActiveItem()} />
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AccountManagement
