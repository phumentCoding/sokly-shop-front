"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Calendar,
  Mail,
  Phone,
  LogOut,
  Lock,
  Star,
  Heart,
  TicketPercent,
  ShoppingCart,
} from "lucide-react";

const ProfilePage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "Chanthrony Yang",
    email: "tonyja2460@gmail.com",
    birthday: "2025-07-22",
    phone: "",
    address: "",
  });

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row p-4 gap-6">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-gray-50 shadow rounded-lg p-6 space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-green-500 text-white text-2xl font-semibold flex items-center justify-center">
            C
          </div>
          <div>
            <h2 className="font-semibold text-gray-800">{user.name}</h2>
            <p className="text-sm text-blue-600">{user.email}</p>
          </div>
        </div>
        <nav className="space-y-4">
          <NavItem icon={ShoppingCart} label="My Order" path="/account/my-order" onClick={handleNavClick} />
          <NavItem icon={TicketPercent} label="My Coupon" path="/account/coupon" onClick={handleNavClick} />
          <NavItem icon={Heart} label="Favorite" path="/account/favorite" onClick={handleNavClick} />
          <NavItem icon={Star} label="Refer A Friend" path="/account/refer" onClick={handleNavClick} />
          <NavItem icon={User} label="Personal Information" path="/account/profile" onClick={handleNavClick} active />
          <NavItem icon={Lock} label="Change Password" path="/account/change-password" onClick={handleNavClick} />
          <NavItem icon={LogOut} label="Logout" path="/logout" onClick={handleNavClick} />
        </nav>
      </aside>

      {/* Form */}
      <main className="flex-1 bg-white rounded-lg p-6 shadow">
        <h1 className="text-2xl font-semibold text-blue-800 mb-6">
          Personal Information
        </h1>

        <div className="bg-blue-50 rounded-lg p-4 flex items-center gap-6 mb-6">
          <div className="w-16 h-16 rounded-full bg-green-500 text-white text-3xl font-semibold flex items-center justify-center">
            C
          </div>
          <div>
            <button className="text-sm bg-white px-4 py-1 rounded shadow hover:bg-gray-100 transition">
              🔁 Change avatar
            </button>
            <p className="text-xs text-gray-500 mt-1">
              Upload JPG, PNG image required.
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
                value={"22-Jul-2025"}
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
      </main>
    </div>
  );
};

const NavItem = ({ icon: Icon, label, active, path, onClick }) => (
  <div
    onClick={() => onClick(path)}
    className={`flex items-center gap-3 p-2 rounded cursor-pointer ${
      active
        ? "text-blue-700 font-medium bg-blue-100"
        : "text-gray-700 hover:bg-gray-100"
    }`}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </div>
);

export default ProfilePage;