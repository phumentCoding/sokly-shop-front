"use client"
import { useState } from "react"

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: "Raksa Phal",
    email: "raksaphali4@gmail.com",
    birthday: "30-Jul-2025",
    phone: "",
    address: "",
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleUpdate = () => {
    console.log("Updating profile:", formData)
  }

  return (
    <div className="flex-1 p-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-blue-600 mb-8">Personal Information</h1>

      <div className="bg-white rounded-lg shadow-sm p-8">
        {/* Avatar Section */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Zv4DbL3EhQKJhsG3tKFkFp7U4VxZqa.png"
              alt="Raksa Phal"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center space-x-2 text-gray-600 mb-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm">Change avatar</span>
            </div>
            <p className="text-sm text-gray-500">Upload JPG, PNG image required.</p>
          </div>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="text-gray-700 mb-2 block">
              Full Name
            </label>
            <div className="relative">
              <input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg
                className="w-4 h-4 text-gray-400 absolute left-3 top-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>

          {/* Birthday */}
          <div>
            <label htmlFor="birthday" className="text-gray-700 mb-2 block">
              Birthday
            </label>
            <div className="relative">
              <input
                id="birthday"
                type="text"
                value={formData.birthday}
                onChange={(e) => handleInputChange("birthday", e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg
                className="w-4 h-4 text-gray-400 absolute left-3 top-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-gray-700 mb-2 block">
              Email
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg
                className="w-4 h-4 text-gray-400 absolute left-3 top-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="text-gray-700 mb-2 block">
              Phone Number
            </label>
            <div className="relative">
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg
                className="w-4 h-4 text-gray-400 absolute left-3 top-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="mt-6">
          <label htmlFor="address" className="text-gray-700 mb-2 block">
            Address
          </label>
          <textarea
            id="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        {/* Update Button */}
        <div className="flex justify-end mt-8">
          <button
            onClick={handleUpdate}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-md transition-colors font-medium"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
