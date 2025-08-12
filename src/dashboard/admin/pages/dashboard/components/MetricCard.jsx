import React from "react";

const MetricCard = ({ Icon, iconClass, value, label }) => (
  <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
    <Icon className={iconClass} size={36} />
    <div>
      <p className="text-xl font-bold">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  </div>
);

export default MetricCard;
