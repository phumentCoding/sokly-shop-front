import {
  User,
  ShoppingCart,
  TicketPercent,
  Heart,
  Star,
  Lock,
  LogOut,
} from "lucide-react";
import { useEffect, useState } from "react";

const NavItem = ({ icon: Icon, label, path, onClick, active }) => (
  <div
    onClick={() => onClick(path)}
    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all group
      ${active ? "bg-blue-100 text-blue-700 font-semibold" : "text-gray-700 hover:bg-gray-100"}
    `}
  >
    <Icon
      className={`w-5 h-5 transition-all group-hover:text-blue-600 ${
        active ? "text-blue-700" : "text-gray-500"
      }`}
    />
    <span>{label}</span>
  </div>
);

const Sidebar = ({ user, navigate, location }) => {
  const [avatar, setAvatar] = useState(user.profileUrl);

  // Load avatar from localStorage on mount
  useEffect(() => {
    const storedAvatar = localStorage.getItem("profile-avatar");
    if (storedAvatar) {
      setAvatar(storedAvatar);
    }
  }, []);

  const isActive = (target) => location.pathname.startsWith(target);

  return (
    <aside className="w-full md:w-64 bg-white border-r border-gray-200 h-full shadow-sm">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <img
            src={
              avatar ||
              "https://ui-avatars.com/api/?name=" + encodeURIComponent(user.name)
            }
            alt={user.name}
            className="w-16 h-16 rounded-full object-cover ring-2 ring-blue-500"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
            <p className="text-sm text-blue-600">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Nav Section */}
      <nav className="p-4 space-y-2">
        <NavItem
          icon={User}
          label="Profile Info"
          path="/account/profile"
          onClick={navigate}
          active={isActive("/account/profile") && location.pathname === "/account/profile"}
        />
        <NavItem
          icon={Heart}
          label="Favorite"
          path="/account/profile/favorites"
          onClick={navigate}
          active={isActive("/account/profile/favorites")}
        />
        <NavItem
          icon={TicketPercent}
          label="My Coupon"
          path="/account/profile/coupon"
          onClick={navigate}
          active={isActive("/account/profile/coupon")}
        />
        <NavItem
          icon={ShoppingCart}
          label="My Orders"
          path="/account/profile/orders"
          onClick={navigate}
          active={isActive("/account/profile/orders")}
        />
        <NavItem
          icon={Star}
          label="Refer a Friend"
          path="/account/profile/refer"
          onClick={navigate}
          active={isActive("/account/profile/refer")}
        />
        <NavItem
          icon={Lock}
          label="Change Password"
          path="/account/profile/change-password"
          onClick={navigate}
          active={isActive("/account/profile/change-password")}
        />
      </nav>

      {/* Footer */}
      <div className="p-4 mt-auto border-t border-gray-100">
        <NavItem
          icon={LogOut}
          label="Logout"
          path="/logout"
          onClick={() => {
            localStorage.removeItem("profile-avatar"); // Clear avatar on logout
            navigate("/logout");
          }}
          active={isActive("/logout")}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
