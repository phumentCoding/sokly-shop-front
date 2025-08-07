// Sidebar.jsx
import React from "react";
import {
  User,
  Heart,
  TicketPercent,
  ShoppingCart,
  Star,
  Lock,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const activePath = "Dashboard"; // This should be dynamically set based on the current route
  const menu = [
    { icon: User, label: "Dashboard" },
    { icon: Heart, label: "Users" },
    { icon: TicketPercent, label: "Products" },
    { icon: ShoppingCart, label: "Orders" },
    { icon: Star, label: "Refer a Friend" },
    { icon: Lock, label: "Change Password" },
  ];

  return (
    <div className="w-72 min-h-screen border-r bg-white">
      <div className="flex flex-col items-center py-6">
        <img
          src="https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-1/456268015_1066171398355955_6754295906527611875_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=mqkhLa22xjUQ7kNvwGC-qMp&_nc_oc=AdlhImvxjlJo3238Gb50iusK6f4Aw6FNpq9kGDdUEPxdcPO4zsvSBC2iPjBTvM5Blv4&_nc_zt=24&_nc_ht=scontent.fpnh24-1.fna&_nc_gid=HCNZygUrL1Oh-45xff1Fow&oh=00_AfQlKyCdk-hrndZugVuXAaPW4i0dJAOMA3Yid0NQqPXQHA&oe=6884532B"
          alt="avatar"
          className="w-20 h-20 rounded-full border-2 border-blue-500 object-cover"
        />
        <h2 className="mt-2 text-lg font-semibold">Yang Chanthorony</h2>
        <p className="text-sm text-blue-600">example@gmail.com</p>
      </div>

      <div className="px-4 space-y-1">
        {menu.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className={`flex items-center gap-3 p-2 rounded cursor-pointer transition ${
              activePath === label
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Icon size={18} />
            <span>{label}</span>
          </div>
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
