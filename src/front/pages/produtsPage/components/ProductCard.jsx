import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border rounded-lg shadow hover:shadow-md transition p-4 text-center">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="mx-auto h-40 object-contain"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          NEW
        </span>
      </div>
      <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
      <p className="text-pink-600 text-xl font-bold">${product.price}.00</p>
      <p className="text-gray-500 text-sm">Or {product.monthly} for 12 mo.</p>
      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
