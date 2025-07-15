"use client";
import React from "react";

const Navbar = ({ items = [] }) => (
  <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-4">
    <a href="/" className="hover:text-blue-600 font-medium">
      Home
    </a>
    {items.length > 0 && <span>/</span>}
    {items.map((item, i) => (
      <React.Fragment key={i}>
        <span className="hover:text-blue-600 cursor-pointer">{item}</span>
        {i !== items.length - 1 && <span>/</span>}
      </React.Fragment>
    ))}
  </nav>
);

export default Navbar;
