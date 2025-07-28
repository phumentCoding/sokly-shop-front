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

const Favorite = () => {
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
       <Sidebar user={user} navigate={navigate} location={location} />

      {/* Main Content */}
      <main className="flex-1 bg-white rounded-lg p-6 shadow overflow-auto">
        {/* MY ORDERS */}
        <div>
          <h1 className="text-2xl font-semibold text-blue-800 mb-6">
            Favorite
          </h1>

         
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

export default Favorite;