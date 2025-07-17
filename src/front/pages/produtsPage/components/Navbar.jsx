"use client"
import React from "react"
import { useNavigate } from "react-router-dom"

const Navbar = ({ items = [] }) => {
  const navigate = useNavigate()

  const handleNavigation = (item) => {
    const slug = item.toLowerCase().replace(/\s+/g, "-")
    navigate(`/product/show/${slug}`)
  }

  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-4">
      <span onClick={() => navigate("/")} className="hover:text-blue-600 font-medium cursor-pointer">
        Home
      </span>
      {items.length > 0 && <span>/</span>}
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <span
            onClick={() => handleNavigation(item)}
            className="hover:text-blue-600 cursor-pointer capitalize"
          >
            {item}
          </span>
          {i !== items.length - 1 && <span>/</span>}
        </React.Fragment>
      ))}
    </nav>
  )
}

export default Navbar
