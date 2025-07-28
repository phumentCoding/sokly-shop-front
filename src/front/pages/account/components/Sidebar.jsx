// Sidebar.jsx
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
    className={`flex items-center gap-3 p-2 rounded cursor-pointer transition ${
      active
        ? "text-blue-700 font-semibold bg-blue-100"
        : "text-gray-700 hover:bg-gray-100"
    }`}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </div>
);

const Sidebar = ({ user, navigate, location }) => {
  const isActive = (target) => location.pathname.startsWith(target);

  return (
    <aside className="w-full md:w-1/4 bg-gray-50 shadow rounded-lg p-6 space-y-6">
      {/* Profile Info */}
      <div className="flex items-center gap-4">
        <img
          src={user.profileUrl}
          alt={user.name}
          className="w-16 h-16 rounded-full object-cover ring-2 ring-blue-500"
        />
        <div>
          <h2 className="font-semibold text-gray-800">{user.name}</h2>
          <p className="text-sm text-blue-600">{user.email}</p>
        </div>
      </div>

      {/* Nav Items */}
      <nav className="space-y-4">
        <NavItem
          icon={User}
          label="Profile Info"
          path="/account/profile"
          onClick={navigate}
          active={isActive("/account/profile")}
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
        <NavItem
          icon={LogOut}
          label="Logout"
          path="/logout"
          onClick={navigate}
          active={isActive("/logout")}
        />
      </nav>
    </aside>
  );
};

export default Sidebar;
