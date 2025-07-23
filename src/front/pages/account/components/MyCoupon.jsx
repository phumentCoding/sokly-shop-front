"use client"
import { useState } from "react"

const MyCoupon = () => {
  const [activeTab, setActiveTab] = useState("available")

  return (
    <div className="flex-1 p-8">

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-blue-600 mb-8">My Coupon</h1>

      {/* Coupon Tabs */}
      <div className="w-full">
        <div className="flex max-w-md">
          <button
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-l-md border ${
              activeTab === "available"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-500 border-gray-300 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab("available")}
          >
            Available Coupon
          </button>
          <button
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-r-md border-t border-r border-b ${
              activeTab === "past"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-500 border-gray-300 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab("past")}
          >
            Past Coupon
          </button>
        </div>

        <div className="mt-8">
          {activeTab === "available" && (
            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No available coupons</h3>
              <p className="text-gray-500">Your available coupons will appear here</p>
            </div>
          )}

          {activeTab === "past" && (
            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No past coupons</h3>
              <p className="text-gray-500">Your used coupons will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MyCoupon
