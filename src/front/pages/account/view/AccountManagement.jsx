"use client"

import { useState } from "react"
import Sidebar from "../components/Sidebar"
import MyOrder from "../components/MyOrder"
import MyCoupon from "../components/MyCoupon"
import Favorite from "../components/Favorite"
import ReferFriend from "../components/ReferFriend"

const AccountManagement = () => {
  const [activeItem, setActiveItem] = useState("my-order")

  const renderContent = () => {
    switch (activeItem) {
      case "my-order":
        return <MyOrder />
      case "my-coupon":
        return <MyCoupon />
      case "favorite":
        return <Favorite />
      case "refer-friend":
        return <ReferFriend />
      case "logout":
        // Handle logout logic here
        console.log("Logging out...")
        return <MyOrder />
      default:
        return <MyOrder />
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="flex w-[80%] h-[80vh] bg-gray-50 rounded-lg shadow-lg overflow-hidden">
        <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
        {renderContent()}
      </div>
    </div>
  )
}

export default AccountManagement
