"use client"

import { useState } from "react"

const PreOrder = ({ productData }) => {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(
    productData.colors.find((c) => c.selected)?.name || productData.colors[0]?.name,
  )

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change))
  }

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">{productData.title}</h1>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {productData.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Price */}
      <div className="space-y-2">
        <div className="text-3xl lg:text-4xl font-bold text-red-600">${productData.price.toFixed(2)}</div>
        <div className="text-gray-600 text-lg">
          Or <span className="text-blue-600 font-semibold">${productData.monthlyPrice.toFixed(2)}/mo.</span> for 12 mo.
        </div>
      </div>

      {/* Color Selection */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900 text-lg">Choose your color</h3>
        <div className="flex gap-3">
          {productData.colors.map((color, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(color.name)}
              className={`flex flex-col items-center p-4 border-2 rounded-xl transition-all duration-200 ${
                selectedColor === color.name
                  ? "border-blue-500 ring-2 ring-blue-200 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <div
                className="w-8 h-8 rounded-full border-2 border-gray-300 shadow-sm"
                style={{ backgroundColor: color.color }}
              ></div>
              <span className="text-sm font-medium mt-2">{color.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Warranty */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
        <div className="text-green-800 font-semibold flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          One Year Warranty
        </div>
      </div>

      {/* Quantity and Actions */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="px-4 py-3 hover:bg-gray-50 transition-colors font-medium"
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="px-6 py-3 border-x-2 border-gray-200 font-semibold min-w-[60px] text-center">
              {quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="px-4 py-3 hover:bg-gray-50 transition-colors font-medium"
            >
              +
            </button>
          </div>

          <button className="flex-1 bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            Pre-Order Now
          </button>

          <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="hidden sm:inline">Add to Favorite</span>
          </button>
        </div>

        {/* Share */}
        <div className="flex items-center gap-3 text-gray-600 pt-2 border-t border-gray-100">
          <span className="font-medium">Share this product:</span>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PreOrder
