"use client"

import { Package, ShoppingCart, Users, TrendingUp } from "lucide-react"
import StatsCard from "../components/StatsCard"
import QuickActionCard from "../components/QuickActionCard"
import ActivityItem from "../components/ActivityItem"

const Dashboard = () => {
  const stats = [
    {
      title: "Total Products",
      value: "8",
      icon: Package,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Total Orders",
      value: "156",
      icon: ShoppingCart,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Total Users",
      value: "89",
      icon: Users,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      title: "Revenue",
      value: "$12,450",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ]

  const quickActions = [
    {
      title: "Manage Products",
      description: "Add, edit, or remove products from your inventory",
      icon: Package,
    },
    {
      title: "Manage Orders",
      description: "View and update order statuses",
      icon: ShoppingCart,
    },
    {
      title: "Manage Users",
      description: "View and manage user accounts",
      icon: Users,
    },
  ]

  const activities = [
    {
      title: "New order #1234 received",
      time: "2 minutes ago",
    },
    {
      title: "Product Wireless Headphones updated",
      time: "1 hour ago",
    },
    {
      title: "New user registered",
      time: "3 hours ago",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-blue-600">Welcome, Admin User!</h1>
        <p className="text-gray-600">Supercharge your store with insights & control</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
            bgColor={stat.bgColor}
          />
        ))}
      </div>

      {/* Quick Actions and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-4">
            {quickActions.map((action) => (
              <QuickActionCard
                key={action.title}
                title={action.title}
                description={action.description}
                icon={action.icon}
                onClick={() => console.log(`Navigate to ${action.title}`)}
              />
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <ActivityItem key={index} title={activity.title} time={activity.time} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
