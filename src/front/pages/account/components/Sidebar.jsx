import React from "react";
import {
  User,
  ShoppingCart,
  TicketPercent,
  Heart,
  Star,
  Lock,
  LogOut,
} from "lucide-react";

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

const Sidebar = ({ user, navigate, location }) => {
  return (
    <aside className="w-full md:w-1/4 bg-gray-50 shadow rounded-lg p-6 space-y-6">
      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <img
          src="https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-1/456268015_1066171398355955_6754295906527611875_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=mqkhLa22xjUQ7kNvwGC-qMp&_nc_oc=AdlhImvxjlJo3238Gb50iusK6f4Aw6FNpq9kGDdUEPxdcPO4zsvSBC2iPjBTvM5Blv4&_nc_zt=24&_nc_ht=scontent.fpnh24-1.fna&_nc_gid=HCNZygUrL1Oh-45xff1Fow&oh=00_AfQlKyCdk-hrndZugVuXAaPW4i0dJAOMA3Yid0NQqPXQHA&oe=6884532B"
          alt={user.name}
          className="w-16 h-16 rounded-full object-cover ring-2 ring-blue-500 hover:scale-105 transition-transform"
        />
        <div>
          <h2 className="font-semibold text-gray-800">{user.name}</h2>
          <p className="text-sm text-blue-600">{user.email}</p>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="space-y-4">
        <NavItem
          icon={ShoppingCart}
          label="My Order"
          path="/account/my-order"
          onClick={navigate}
          active={location.pathname === "/account/my-order"}
        />
        <NavItem
          icon={TicketPercent}
          label="My Coupon"
          path="/account/coupon"
          onClick={navigate}
          active={location.pathname === "/account/coupon"}
        />
        <NavItem
          icon={Heart}
          label="Favorite"
          path="/account/favorite"
          onClick={navigate}
          active={location.pathname === "/account/favorite"}
        />
        <NavItem
          icon={Star}
          label="Refer A Friend"
          path="/account/refer"
          onClick={navigate}
          active={location.pathname === "/account/refer"}
        />
        <NavItem
          icon={User}
          label="Personal Information"
          path="/account/profile"
          onClick={navigate}
          active={location.pathname === "/account/profile"}
        />
        <NavItem
          icon={Lock}
          label="Change Password"
          path="/account/change-password"
          onClick={navigate}
          active={location.pathname === "/account/change-password"}
        />
        <NavItem
          icon={LogOut}
          label="Logout"
          path="/logout"
          onClick={navigate}
        />
      </nav>
    </aside>
  );
};

export default Sidebar;
