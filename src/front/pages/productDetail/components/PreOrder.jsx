import React, { useState } from "react";

const PreOrder = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div>
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>

      {/* Category Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {product.categories.map((category, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-white text-sm ${category.color}`}
          >
            {category.name}
          </span>
        ))}
      </div>

      {/* Pricing */}
      <div className="flex items-center space-x-4 mb-4">
        <span className="text-3xl font-bold text-red-500">{product.price}</span>
        <span className="text-xl text-gray-500 line-through">{product.oldPrice}</span>
        <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded">
          {product.discount}
        </span>
      </div>

      <p className="text-gray-600 mb-6">
        Or <span className="font-semibold text-blue-600">{product.monthly}</span> for 12 mo.
      </p>

      {/* Configuration Option + Add-on Product */}
      <div className="space-y-4 mb-6 border rounded-md p-4">
        <div className="flex items-center space-x-3">
          <input type="radio" name="config" id="free" defaultChecked />
          <label htmlFor="free" className="flex-1 cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-blue-600 font-medium">Free:</span>
                <span className="text-gray-600 ml-2">ការបញ្ជាទិញ</span>
                <div className="text-sm text-orange-500">(With add-on products)</div>
              </div>
              <span className="text-xl font-bold text-red-500">{product.price}</span>
            </div>
          </label>
        </div>

        <div className="flex items-center space-x-4 pt-4 mt-4">
          <img
            src={product.addon.image}
            alt={product.addon.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* No Promotion Option */}
      <div className="space-y-4 mb-6 border rounded-md p-4">
        <div className="flex items-center space-x-3">
          <input type="radio" name="config" id="noPromo" />
          <label htmlFor="noPromo" className="flex-1 cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-blue-600 font-medium">No Promotion Price</span>
                <div className="text-sm text-orange-500">No add-on products</div>
              </div>
              <span className="text-xl font-bold text-red-500">{product.price}</span>
            </div>
          </label>
        </div>
      </div>

      <div className="space-y-8">
        {/* Memory Selection */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose your memory (RAM)</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {product.memories.map((ram, index) => (
              <button
                key={index}
                className={`p-4 border-2 rounded-lg text-center transition-colors ${ram === '16 GB'
                    ? 'border-blue-500 bg-blue-50 hover:bg-blue-100 text-blue-600'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
              >
                <div className="text-[1rem] font-semibold">{ram}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Storage Selection */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose your storage</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {product.storages.map((storage, index) => (
              <button
                key={index}
                className="p-4 border-2 border-gray-200 rounded-lg text-center hover:border-gray-300 transition-colors"
              >
                <div className="text-[1rem] font-semibold text-gray-700">{storage}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Color Selection */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose your color</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {product.colors.map((color, index) => (
              <button
                key={index}
                className={`p-2 border-2 rounded-lg text-center transition-colors ${color.name === 'Midnight'
                    ? 'border-blue-500 bg-blue-50 hover:bg-blue-100 text-blue-600'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
              >
                <div className={`w-7 h-7 rounded-full bg-${color.value} mx-auto mb-2`}></div>
                <div className="text-[1rem] font-medium">{color.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Core Selection */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose your core</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {product.cores.map((core, index) => (
              <button
                key={index}
                className={`p-4 border-2 rounded-lg text-center hover:border-gray-300 transition-colors ${core === '10 CORE CPU / 10 CORE GPU'
                    ? 'border-blue-500 bg-blue-50 text-blue-600 hover:bg-blue-100'
                    : 'border-gray-200 text-gray-700'
                  }`}
              >
                <div className="text-[1rem] font-semibold">{core}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Warranty & Quantity */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">One Year Warranty</h3>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              {/* Quantity Selector */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                  className="px-4 py-2 bg-gray-50 hover:bg-gray-100 border-r border-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="text-lg font-medium text-gray-600">−</span>
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(Number(e.target.value) || 1)}
                  min="1"
                  className="w-16 px-3 py-2 text-center border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={incrementQuantity}
                  className="px-4 py-2 bg-gray-50 hover:bg-gray-100 border-l border-gray-300 transition-colors"
                >
                  <span className="text-lg font-medium text-blue-600">+</span>
                </button>
              </div>

              {/* Add to Cart */}
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 flex items-center justify-center gap-2 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"
                  />
                </svg>
                Add to Cart
              </button>
            </div>

            {/* Add to Favorite */}
            <button className="w-full py-3 flex items-center justify-center gap-2 bg-transparent border border-gray-300 hover:bg-gray-50 rounded-md">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Add to Favorite
            </button>

            {/* Social Share */}
            <div className="flex items-center gap-3 pt-4">
              <span className="text-gray-600">Share this product:</span>
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreOrder;