// AccountManagent.jsx
import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AccountManagent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const user = {
    name: "Yang Chanthorony",
    email: "example@gmail.com",
    profileUrl: "https://your-avatar-url.com/profile.jpg",
  };

  return (
    <div className="flex">
      <div className="w-64">
        <Sidebar user={user} navigate={navigate} location={location} />
      </div>

      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AccountManagent;
