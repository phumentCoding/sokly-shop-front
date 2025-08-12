import React from "react";

const RecentActivityItem = ({ text, timeAgo }) => (
  <div className="p-3 bg-gray-50 rounded-md">
    <p>{text}</p>
    <p className="text-xs text-gray-400">{timeAgo}</p>
  </div>
);

export default RecentActivityItem;
