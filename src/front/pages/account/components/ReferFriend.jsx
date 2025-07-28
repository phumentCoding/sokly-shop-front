import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  User,
  ShoppingCart,
  TicketPercent,
  Heart,
  Star,
  Lock,
  LogOut,
  Percent,
} from "lucide-react";
import Sidebar from "./Sidebar";

const NavItem = ({ icon: Icon, label, path, onClick, active }) => (
  <div
    onClick={() => onClick(path)}
    className={`flex items-center gap-3 p-2 rounded cursor-pointer ${
      active
        ? "text-blue-700 font-medium bg-blue-100"
        : "text-gray-700 hover:bg-gray-100"
    }`}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </div>
);

const ReferFriend = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState("available");

  const user = {
    name: "Chanthrony Yang",
    email: "tonyja2460@gmail.com",
    profileUrl:
      "https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-1/456268015_1066171398355955_6754295906527611875_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=mqkhLa22xjUQ7kNvwGC-qMp&_nc_oc=AdlhImvxjlJo3238Gb50iusK6f4Aw6FNpq9kGDdUEPxdcPO4zsvSBC2iPjBTvM5Blv4&_nc_zt=24&_nc_ht=scontent.fpnh24-1.fna&_nc_gid=HCNZygUrL1Oh-45xff1Fow&oh=00_AfQlKyCdk-hrndZugVuXAaPW4i0dJAOMA3Yid0NQqPXQHA&oe=6884532B",
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row p-4 gap-6">
      

      {/* Refer a Friend Content */}
      <div className="flex-1">
        <h1 className="text-2xl font-semibold text-blue-900 mb-6">Refer A Friend</h1>

        {/* Coupon Box */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 px-10 py-6 rounded-lg flex flex-col items-center shadow-sm">
            <div className="bg-white p-4 rounded-full border border-blue-500 text-blue-700 mb-3">
              <Percent className="w-8 h-8" />
            </div>
            <p className="text-lg font-medium text-gray-800">Get $10 Coupon</p>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4 mb-8 max-w-md mx-96 ">
          {[
            "Share invite link to your friend",
            "Friend sign up, and make purchase",
            "You will get $10 Coupon",
          ].map((text, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full border-2 border-blue-700 text-blue-700 flex items-center justify-center font-semibold">
                {index + 1}
              </div>
              <p className="text-black text-sm md:text-base">{text}</p>
            </div>
          ))}
        </div>

        {/* Invite Button */}
        <div className="flex justify-center">
          <button className="bg-blue-800 text-white font-medium px-8 py-2 rounded-md hover:bg-blue-900 transition duration-200">
            INVITE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferFriend;
