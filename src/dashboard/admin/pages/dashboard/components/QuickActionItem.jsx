import React from "react";
import { ArrowRight } from "lucide-react";

const QuickActionItem = ({ title, desc, rightIconClass }) => (
  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
    <ArrowRight className={rightIconClass} />
  </div>
);

export default QuickActionItem;
