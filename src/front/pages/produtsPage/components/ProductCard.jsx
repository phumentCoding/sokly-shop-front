import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="group border rounded-xl shadow-sm bg-white p-4 hover:shadow-md transition relative overflow-hidden">
      {/* Product Image and Labels */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-32 mx-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-0 left-0 bg-red-600 text-white text-xs px-2 py-0.5 rounded-tr-lg rounded-bl-lg">
          NEW
        </span>
        <span className="absolute top-0 right-0 bg-yellow-400 text-white text-xs px-2 py-0.5 rounded-tl-lg rounded-br-lg">
          ⭐
        </span>
      </div>

      {/* Product Info */}
      <h3 className="mt-3 font-semibold text-gray-800 text-center text-sm">
        {product.name}
      </h3>
      <p className="text-center text-red-600 font-bold text-base">
        ${product.price}.00
      </p>
      <p className="text-center text-xs text-gray-500">
        {product.monthly} for 12 mo.
      </p>

      {/* Add to Cart Button (Appears on Hover) */}
      <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg">
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
