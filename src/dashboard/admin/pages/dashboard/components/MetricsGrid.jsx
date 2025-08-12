import React from "react";
import MetricCard from "./MetricCard";
import { Package, ShoppingCart, Users, LineChart } from "lucide-react";

const MetricsGrid = () => {
  // fixed class names so Tailwind can tree-shake safely
  const cards = [
    { Icon: Package,  iconClass: "text-blue-600 bg-blue-100 p-2 rounded-full",   value: "8",      label: "Total Products" },
    { Icon: ShoppingCart, iconClass: "text-green-600 bg-green-100 p-2 rounded-full", value: "156",    label: "Total Orders" },
    { Icon: Users,    iconClass: "text-orange-500 bg-orange-100 p-2 rounded-full", value: "89",     label: "Total Users" },
    { Icon: LineChart,iconClass: "text-purple-600 bg-purple-100 p-2 rounded-full", value: "$12,450", label: "Revenue" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cards.map((c) => (
        <MetricCard key={c.label} {...c} />
      ))}
    </div>
  );
};

export default MetricsGrid;
