"use client";

import { useState, useMemo } from "react";

const ProductShow = ({ items, handleProductClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("default");

  const itemsPerPage = 9;

  // Sorting logic
  const sortedItems = useMemo(() => {
    let sorted = [...items];
    if (sortOption === "price-asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOption === "name-asc") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    return sorted;
  }, [items, sortOption]);

  // Pagination logic
  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);
  const paginatedItems = sortedItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="space-y-6">
      {/* Sort Dropdown */}
      <div className="flex justify-end mb-2">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border rounded-md px-3 py-1 text-sm"
        >
          <option value="default">Sort by: Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {paginatedItems.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-xl shadow border border-gray-200 overflow-hidden hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
            onClick={() => handleProductClick(product)}
          >
            <div className="bg-gray-50 p-6 flex items-center justify-center h-48">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2 min-h-[2.5rem]">
                {product.name}
              </h3>
              <div className="text-lg font-bold text-blue-600">
                ${product.price?.toFixed(2)}
              </div>
              {product.monthlyPrice && (
                <p className="text-sm text-gray-500 mt-1">
                  ${product.monthlyPrice.toFixed(2)} /mo.
                </p>
              )}
            </div>

            {/* Hover overlay button */}
            <div className="absolute inset-0 bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-full shadow-md transform hover:scale-105 active:scale-95 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  alert(`🛒 "${product.name}" added to cart!`);
                }}
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-1">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          &lt;
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === index + 1 ? "bg-blue-600 text-white" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductShow;
