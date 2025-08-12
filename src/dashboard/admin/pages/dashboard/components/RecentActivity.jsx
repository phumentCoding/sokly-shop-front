import React from "react";
import RecentActivityItem from "./RecentActivityItem";

const RecentActivity = () => {
  const items = [
    { text: <>New order <span className="font-semibold">#1234</span> received</>, timeAgo: "2 minutes ago" },
    { text: <>Product <span className="font-semibold">Wireless Headphones</span> updated</>, timeAgo: "1 hour ago" },
    { text: <>New user registered</>, timeAgo: "3 hours ago" },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-3">
        {items.map((it, idx) => (
          <RecentActivityItem key={idx} {...it} />
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
