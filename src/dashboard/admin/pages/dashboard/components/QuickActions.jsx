import React from "react";
import QuickActionItem from "./QuickActionItem";

const QuickActions = () => {
  const actions = [
    { title: "Manage Products", desc: "Add, edit, or remove products from your inventory", rightIconClass: "text-blue-500" },
    { title: "Manage Orders",   desc: "View and update order statuses",                    rightIconClass: "text-green-500" },
    { title: "Manage Users",    desc: "View and manage user accounts",                     rightIconClass: "text-orange-500" },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
      <div className="space-y-4">
        {actions.map((a) => <QuickActionItem key={a.title} {...a} />)}
      </div>
    </div>
  );
};

export default QuickActions;
