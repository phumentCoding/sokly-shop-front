"use client"

import { useState } from "react"
import { ShoppingCart, Heart } from "lucide-react"

export default function PreOrder({ productData, selectedColor, setSelectedColor }) {
  const [selectedPromo, setSelectedPromo] = useState("no-promo")
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="space-y-4 px-4 sm:px-0">
      <h2 className="text-xl sm:text-2xl font-semibold">{productData.title}</h2>

      <div className="flex flex-wrap gap-2">
        {productData.tags.map((tag) => (
          <span key={tag} className="bg-blue-900 text-white text-xs sm:text-sm font-semibold px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      <p className="text-pink-600 text-xl sm:text-2xl font-bold">${productData.price.toFixed(2)}</p>
      <p className="text-gray-600 text-xs sm:text-sm">Or ${productData.monthlyPrice.toFixed(2)}/mo. for 12 mo.</p>

      <hr />

      <div className="space-y-3">
        <label className="flex items-start gap-3 border p-3 rounded cursor-pointer hover:border-blue-500">
          <input
            type="radio"
            name="promo"
            checked={selectedPromo === "free-addon"}
            onChange={() => setSelectedPromo("free-addon")}
            className="mt-1"
          />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm font-semibold text-blue-700">
                Free : ($29) Huawei Scale 3 + Huawei Health
              </span>
              <span className="text-pink-600 font-bold text-xs sm:text-sm">
                ${productData.price.toFixed(2)}
              </span>
            </div>
            <p className="text-yellow-500 text-xs sm:text-sm">(With add-on products)</p>
            <div className="flex gap-2 sm:gap-3 mt-2 flex-wrap">
              <img
                src="https://soklyphone.com/storage/SAMSUNG/Bluetooth-Earphones/Galaxy-Buds3/white-1-1721973084KowW4.png"
                alt="Huawei Scale 3"
                className="w-12 sm:w-16 h-12 sm:h-16 object-contain border rounded"
              />
              <img
                src="https://soklyphone.com/storage/Accessories/Samsung/1-Gift/clear-cover-z-flip7-1752112979E5NVT.png"
                alt="Huawei Health"
                className="w-12 sm:w-16 h-12 sm:h-16 object-contain border rounded"
              />
              <img
                src="https://soklyphone.com/storage/Accessories/Samsung/samsung-adapter-25-w/untitled-2-16347902543lFBq.png"
                alt="Huawei Health"
                className="w-12 sm:w-16 h-12 sm:h-16 object-contain border rounded"
              />
            </div>
          </div>
        </label>

        <label className="flex items-start gap-3 border p-3 rounded cursor-pointer hover:border-blue-500">
          <input
            type="radio"
            name="promo"
            checked={selectedPromo === "no-promo"}
            onChange={() => setSelectedPromo("no-promo")}
            className="mt-1"
          />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <span className="text-blue-600 font-semibold text-xs sm:text-sm">No Promotion Price</span>
              <span className="text-pink-600 font-bold text-xs sm:text-sm">
                ${productData.price.toFixed(2)}
              </span>
            </div>
            <p className="text-yellow-500 text-xs sm:text-sm">No add-on products</p>
          </div>
        </label>
      </div>

      <div>
        <p className="font-medium text-sm sm:text-base mb-2">Choose your color</p>
        <div className="flex gap-2 flex-wrap">
          {productData.colors.map((color) => (
            <button
              key={color.name}
              className={`border rounded px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-2 transition-all text-xs sm:text-sm ${
                selectedColor === color.name
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : "border-gray-300 text-gray-700"
              }`}
              onClick={() => setSelectedColor(color.name)}
            >
              <span className="w-4 h-4 rounded-full" style={{ backgroundColor: color.color }} />
              {color.name}
              {selectedColor === color.name && <span className="text-green-600 font-bold ml-1">✓</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="font-semibold text-sm sm:text-base mt-2">Two Year Warranty</div>

      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-3">
        <div className="flex items-center border rounded overflow-hidden">
          <button
            className="px-3 sm:px-4 py-2 bg-gray-200 hover:bg-gray-300 transition-colors"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            –
          </button>
          <div className="px-4 py-2 min-w-[3rem] text-center text-sm">{quantity}</div>
          <button
            className="px-3 sm:px-4 py-2 bg-gray-200 hover:bg-gray-300 transition-colors"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>

        <button className="flex items-center gap-2 px-4 sm:px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded transition-colors text-sm">
          <ShoppingCart size={18} />
          Add to Cart
        </button>

        <button className="text-blue-700 hover:text-blue-800 flex items-center gap-1 transition-colors text-sm">
          <Heart size={18} />
          Add to Favorite
        </button>
      </div>

      <div className="text-sm mt-4">
        Share this product:
        <a href="#" className="ml-2 text-blue-600 hover:underline">
          Facebook
        </a>
      </div>
    </div>
  )
}