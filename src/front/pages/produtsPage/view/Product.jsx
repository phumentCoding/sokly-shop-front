"use client";
import React from "react";
import Navbar from "../components/Nabar"; // Make sure the file name is correct
import FilterProduct from "../components/FilterProduct";
import SidebarDetail from "../../../reusable/SidebarDetail";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Oppo Reno13 F",
      price: 299,
      image: "/images/oppo.png",
      monthly: "$27.00/mo.",
    },
    {
      id: 2,
      name: "Honor X9c 5G",
      price: 329,
      image: "/images/honor.png",
      monthly: "$29.00/mo.",
    },
    {
      id: 3,
      name: "Xiaomi I5",
      price: 829,
      image: "/images/xiaomi.png",
      monthly: "$74.00/mo.",
    },
    // Add more mock products...
  ];


  const categories = ["All", "iPhone", "iPod"];
  
  const brands = [
    { name: "Apple", logo: "/brands/apple.png" },
    { name: "Samsung", logo: "/brands/samsung.png" },
    { name: "Asus", logo: "/brands/asus.png" },
    { name: "Google", logo: "/brands/google.png" },
    { name: "Honor", logo: "/brands/honor.png" },
    { name: "Huawei", logo: "/brands/huawei.png" },
    { name: "Xiaomi", logo: "/brands/xiaomi.png" },
    { name: "Nokia", logo: "/brands/nokia.png" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
         <Navbar items={["Apple", "Samsung", "Huawei", "Oppo"]} />
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Mobile Phone</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 bg-white p-4 rounded shadow">
            <FilterProduct categories={categories} brands={brands} />
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>

          {/* Optional Right Side (Ads/Banners) */}
          <aside className="hidden xl:block w-1/4 space-y-4">
            <SidebarDetail />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Product;
