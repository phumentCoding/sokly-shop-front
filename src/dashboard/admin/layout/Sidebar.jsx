import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Package,
  ShoppingCart,
  Star,
  Lock,
  LogOut,
  LayoutDashboard
} from "lucide-react";
import { Users2 } from "lucide-react";

const menu = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
  { icon: Users2, label: "Users", path: "/admin/users" },
  { icon: Package, label: "Products", path: "/admin/products" },
  { icon: ShoppingCart, label: "Orders", path: "/admin/orders" },
  { icon: Star, label: "Refer a Friend", path: "/admin/refer" },
  { icon: Lock, label: "Change Password", path: "/admin/change-password" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-72 min-h-screen border-r bg-white">
      <div className="flex flex-col items-center py-6">
        {/* Avatar, name, email */}
        <img
          src="https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-1/456268015_1066171398355955_6754295906527611875_n.jpg?..."
          alt="avatar"
          className="w-20 h-20 rounded-full border-2 border-blue-500 object-cover"
        />
        <h2 className="mt-2 text-lg font-semibold">Yang Chanthorony</h2>
        <p className="text-sm text-blue-600">example@gmail.com</p>
      </div>

      <div className="px-4 space-y-1">
        {menu.map(({ icon: Icon, label, path }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded cursor-pointer transition ${isActive
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </div>

      <div className="px-4 mt-10">
        <div className="flex items-center gap-3 text-gray-600 p-2 cursor-pointer hover:bg-gray-100 rounded">
          <LogOut size={18} />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
