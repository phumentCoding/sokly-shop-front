"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  TicketPercent,
  Heart,
  Star,
  User,
  Lock,
  LogOut,
} from "lucide-react";

const MyOrders = () => {
  const navigate = useNavigate();

  const user = {
    name: "Chanthrony Yang",
    email: "tonyja2460@gmail.com",
  };

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
          <NavItem icon={ShoppingCart} label="My Order" path="/account/my-order" onClick={handleNavClick} active />
          <NavItem icon={TicketPercent} label="My Coupon" path="/account/coupon" onClick={handleNavClick} />
          <NavItem icon={Heart} label="Favorite" path="/account/favorite" onClick={handleNavClick} />
          <NavItem icon={Star} label="Refer A Friend" path="/account/refer" onClick={handleNavClick} />
          <NavItem icon={User} label="Personal Information" path="/account/profile" onClick={handleNavClick} />
          <NavItem icon={Lock} label="Change Password" path="/account/change-password" onClick={handleNavClick} />
          <NavItem icon={LogOut} label="Logout" path="/logout" onClick={handleNavClick} />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white rounded-lg p-6 shadow overflow-auto">
        {/* MY ORDERS */}
        <div>
          <h1 className="text-2xl font-semibold text-blue-800 mb-6">
            My Orders
          </h1>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-blue-50 text-gray-700 text-sm">
                <tr>
                  <th className="px-4 py-3 text-left border-b">#</th>
                  <th className="px-4 py-3 text-left border-b">Order ID</th>
                  <th className="px-4 py-3 text-left border-b">Order Date</th>
                  <th className="px-4 py-3 text-left border-b">Amount</th>
                  <th className="px-4 py-3 text-left border-b">Status</th>
                  <th className="px-4 py-3 text-left border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Example row */}
                <tr>
                  <td className="px-4 py-3 border-b">1</td>
                  <td className="px-4 py-3 border-b">ORD123456</td>
                  <td className="px-4 py-3 border-b">2025-07-20</td>
                  <td className="px-4 py-3 border-b">$199.00</td>
                  <td className="px-4 py-3 border-b">Delivered</td>
                  <td className="px-4 py-3 border-b">
                    <button className="text-blue-600 hover:underline">
                      View
                    </button>
                  </td>
                </tr>
                {/* Add more orders here or map from data */}
              </tbody>
            </table>
            <p className="text-center text-gray-400 text-sm mt-6">
              No more orders found.
            </p>
          </div>
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

export default MyOrders;