"use client";

import React from "react";

const Navbar = ({ items = [] }) => {
  return (
    <div className="lg:p-0 sm:px-6 lg:py-4 ">
      <nav className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-600">
        <a href="/" className="hover:text-blue-600 cursor-pointer truncate">
          Home
        </a>

        {items.length > 0 && <span className="mx-1 sm:mx-2">/</span>}

        {items.map((value, index) => (
          <React.Fragment key={index}>
            <span className="hover:text-blue-600 cursor-pointer truncate">
              {value}
            </span>
            {index !== items.length - 1 && (
              <span className="mx-1 sm:mx-2">/</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
