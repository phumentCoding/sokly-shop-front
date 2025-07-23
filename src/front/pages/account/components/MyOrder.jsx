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
import Sidebar from "./Sidebar";

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
        <Sidebar user={user} navigate={navigate} location={location} />

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