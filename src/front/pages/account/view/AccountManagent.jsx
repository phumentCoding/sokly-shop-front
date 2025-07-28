"use client";

import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { User, Calendar, Mail, Phone } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Favorite from "../components/Favorite";
import MyCoupon from "../components/MyCoupon";
import MyOrders from "../components/MyOrders";
import ReferFriend from "../components/ReferFriend";

const AccountManagement = () => {
  const { tab = "profile" } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(tab);

  useEffect(() => {
    setActiveTab(tab);
  }, [tab]);

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
    navigate(`/account/profile/${newTab}`);
  };

  const [user] = useState({
    name: "Chanthrony Yang",
    email: "tonyja2460@gmail.com",
    birthday: "2025-07-22",
    phone: "",
    address: "",
    profileUrl:
      "https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-1/456268015_1066171398355955_6754295906527611875_n.jpg?...",
  });

  const [profileImage, setProfileImage] = useState(user.profileUrl || null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfileImage(file);
  };

  const renderProfileImage = () => {
    if (profileImage instanceof File) {
      return URL.createObjectURL(profileImage);
    } else if (typeof profileImage === "string") {
      return profileImage;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row p-4 gap-6">
      <Sidebar user={user} navigate={navigate} location={location} />
      <main className="flex-1 bg-white rounded-lg p-6 shadow">
        

        {activeTab === "profile" && (
          <>
            <h1 className="text-2xl font-semibold text-blue-800 mb-6">
              Personal Information
            </h1>
            <div className="bg-blue-50 rounded-lg p-4 flex items-center gap-6 mb-6">
              <label htmlFor="avatar-upload" className="cursor-pointer">
                {renderProfileImage() ? (
                  <img
                    src={renderProfileImage()}
                    alt="Profile"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-green-500 text-white text-3xl font-semibold flex items-center justify-center">
                    {user.name.charAt(0)}
                  </div>
                )}
              </label>
              <div>
                <input
                  id="avatar-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <label
                  htmlFor="avatar-upload"
                  className="text-sm bg-white px-4 py-1 rounded shadow hover:bg-gray-100 transition cursor-pointer inline-block"
                >
                  🔁 Change avatar
                </label>
                <p className="text-xs text-gray-500 mt-1">
                  Upload JPG, PNG image or use a URL.
                </p>
              </div>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={user.name}
                    className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                    readOnly
                  />
                  <User className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Birthday
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value="22-Jul-2025"
                    className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                    readOnly
                  />
                  <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={user.email}
                    className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                    readOnly
                  />
                  <Mail className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                  />
                  <Phone className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <textarea
                  rows="3"
                  placeholder="Enter your address"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
            </form>
            <div className="mt-6">
              <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">
                Update
              </button>
            </div>
          </>
        )}
        {activeTab === "favorites" && <Favorite />}
        {activeTab === "coupon" && <MyCoupon />}
        {activeTab === "orders" && <MyOrders />}
        {activeTab === "refer" && <ReferFriend />}
        {activeTab === "change-password" && (
          <div>
            <h1 className="text-2xl font-semibold text-blue-800 mb-6">
              Change Password
            </h1>
            <form className="grid grid-cols-1 gap-4 max-w-md">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">
                Update Password
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default AccountManagement;
