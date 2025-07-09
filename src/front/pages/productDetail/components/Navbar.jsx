import React from "react";

const Navbar = ({ items }) => {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 py-4 text-sm text-gray-600">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <span
                className={
                  index === item.length - 1
                    ? "text-gray-900"
                    : "hover:text-gray-900 cursor-pointer"
                }
              >
                {item}
              </span>
              {index < item.length - 1 && <span>•</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
