// Dashboard.jsx
import React from "react";
import {
  Package,
  ShoppingCart,
  Users,
  LineChart,
  ArrowRight,
} from "lucide-react";
import Sidebar from "./layout/Sidebar";



const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <div className="flex-1 bg-[#f8fbff] px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-blue-600">Welcome, Admin User!</h1>
          <p className="text-gray-500">
            Supercharge your store with insights & control
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
            <Package className="text-blue-600 bg-blue-100 p-2 rounded-full" size={36} />
            <div>
              <p className="text-xl font-bold text-blue-600">8</p>
              <p className="text-sm text-gray-500">Total Products</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
            <ShoppingCart className="text-green-600 bg-green-100 p-2 rounded-full" size={36} />
            <div>
              <p className="text-xl font-bold text-green-600">156</p>
              <p className="text-sm text-gray-500">Total Orders</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
            <Users className="text-orange-500 bg-orange-100 p-2 rounded-full" size={36} />
            <div>
              <p className="text-xl font-bold text-orange-500">89</p>
              <p className="text-sm text-gray-500">Total Users</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
            <LineChart className="text-purple-600 bg-purple-100 p-2 rounded-full" size={36} />
            <div>
              <p className="text-xl font-bold text-purple-600">$12,450</p>
              <p className="text-sm text-gray-500">Revenue</p>
            </div>
          </div>
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Manage Products",
                  desc: "Add, edit, or remove products from your inventory",
                  color: "text-blue-500",
                },
                {
                  title: "Manage Orders",
                  desc: "View and update order statuses",
                  color: "text-green-500",
                },
                {
                  title: "Manage Users",
                  desc: "View and manage user accounts",
                  color: "text-orange-500",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                  <ArrowRight className={`${item.color}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-md">
                <p>
                  New order <span className="font-semibold">#1234</span> received
                </p>
                <p className="text-xs text-gray-400">2 minutes ago</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-md">
                <p>
                  Product <span className="font-semibold">Wireless Headphones</span>{" "}
                  updated
                </p>
                <p className="text-xs text-gray-400">1 hour ago</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-md">
                <p>New user registered</p>
                <p className="text-xs text-gray-400">3 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
