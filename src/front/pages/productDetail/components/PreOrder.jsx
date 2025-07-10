import { useState } from "react"
<<<<<<< HEAD
import { ShoppingCart, Heart } from "lucide-react"

export default function PreOrder({ productData, selectedColor, setSelectedColor }) {
  const [selectedPromo, setSelectedPromo] = useState("no-promo")
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">{productData.title}</h2>

      <div className="flex flex-wrap gap-2">
        {productData.tags.map((tag) => (
          <span key={tag} className="bg-blue-900 text-white text-xs font-semibold px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      <p className="text-pink-600 text-2xl font-bold">${productData.price.toFixed(2)}</p>
      <p className="text-gray-600 text-sm">Or ${productData.monthlyPrice.toFixed(2)}/mo. for 12 mo.</p>

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
              <span className="text-sm font-semibold text-blue-700">
                Free : ($29) Huawei Scale 3 + Huawei Health
              </span>
              <span className="text-pink-600 font-bold">${productData.price.toFixed(2)}</span>
            </div>
            <p className="text-yellow-500 text-sm">(With add-on products)</p>
            <div className="flex gap-3 mt-2">
              <img
                src="https://www.soklyphone.com/storage/Accessories/Huawei/huawei-scale-3-elegant/huawei-scale-3-17513632639rROL.png"
                className="w-16 h-16"
              />
              <img
                src="https://www.soklyphone.com/storage/Huawei/HUAWEI-Watch/Huawei-Watch-5/free-huawei-health-1750926815w7oAZ.png"
                className="w-16 h-16 rounded"
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
              <span className="text-blue-600 font-semibold">No Promotion Price</span>
              <span className="text-pink-600 font-bold">${productData.price.toFixed(2)}</span>
            </div>
            <p className="text-yellow-500 text-sm">No add-on products</p>
          </div>
        </label>
      </div>

      <div>
        <p className="font-medium mb-2">Choose your color</p>
        <div className="flex gap-2 flex-wrap">
          {productData.colors.map((color) => (
            <button
              key={color.name}
              className={`border rounded px-4 py-2 flex items-center gap-2 transition-all ${
                selectedColor === color.name
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : "border-gray-300 text-gray-700"
=======
import { Heart, ShoppingCart, Minus, Plus } from "lucide-react"

const PreOrder = () => {
  const [selectedColor, setSelectedColor] = useState("Black")
  const [quantity, setQuantity] = useState(1)
  const [selectedPromotion, setSelectedPromotion] = useState("no-promotion")

  const colors = [
    { name: "Black", value: "black", color: "#000000" },
    { name: "Purple", value: "purple", color: "#8B5CF6" },
    { name: "Titanium Silver", value: "titanium", color: "#9CA3AF" },
  ]

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1)
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  return (
    <div className="space-y-6">
      {/* Pricing Section */}
      <div className="space-y-2">
        <div className="text-3xl font-bold text-red-500">$399.00</div>
        <div className="text-sm text-gray-600">
          Or <span className="text-blue-600 font-semibold">$36.00</span>/mo. for 12 mo.
        </div>
      </div>

      {/* Free Add-on Offer */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex items-start space-x-3">
          <input type="radio" name="addon" className="mt-1" defaultChecked />
          <div className="flex-1">
            <div className="text-sm">
              <span className="text-blue-600 font-medium">Free:</span>
              <span className="text-blue-600"> ($29) Huawei Scale 3 + Huawei Health</span>
            </div>
            <div className="text-xs text-orange-500">(With add-on products)</div>
            <div className="text-right text-red-500 font-bold">$399.00</div>
          </div>
        </div>
      </div>

      {/* Promotion Options */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="promotion"
              value="no-promotion"
              checked={selectedPromotion === "no-promotion"}
              onChange={(e) => setSelectedPromotion(e.target.value)}
              className="text-blue-600"
            />
            <div>
              <div className="text-blue-600 font-medium">No Promotion Price</div>
              <div className="text-orange-500 text-sm">No add-on products</div>
            </div>
          </label>
          <div className="text-red-500 font-bold">$399.00</div>
        </div>
      </div>

      {/* Color Selection */}
      <div className="space-y-3">
        <h3 className="font-medium text-gray-900">Choose your color</h3>
        <div className="flex space-x-3">
          {colors.map((color) => (
            <button
              key={color.value}
              onClick={() => setSelectedColor(color.name)}
              className={`flex flex-col items-center p-3 border-2 rounded-lg transition-colors ${
                selectedColor === color.name ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
>>>>>>> c3277b5e38ab32307957658b8d5af78030e4a0b9
              }`}
              onClick={() => setSelectedColor(color.name)}
            >
<<<<<<< HEAD
              <span className="w-4 h-4 rounded-full" style={{ backgroundColor: color.color }} />
              {color.name}
              {selectedColor === color.name && <span className="text-green-600 font-bold ml-1">✓</span>}
=======
              <div
                className="w-8 h-8 rounded-full border border-gray-300 mb-1"
                style={{ backgroundColor: color.color }}
              ></div>
              <span className="text-xs text-gray-700">{color.name}</span>
>>>>>>> c3277b5e38ab32307957658b8d5af78030e4a0b9
            </button>
          ))}
        </div>
      </div>

<<<<<<< HEAD
      <div className="font-semibold text-sm mt-2">Two Year Warranty</div>

      <div className="flex items-center gap-4 mt-3">
        <div className="flex items-center border rounded overflow-hidden">
          <button className="px-3 py-1 bg-gray-200" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
            –
          </button>
          <div className="px-4">{quantity}</div>
          <button className="px-3 py-1 bg-gray-200" onClick={() => setQuantity(quantity + 1)}>
            +
          </button>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded">
          <ShoppingCart size={18} />
          Add to Cart
        </button>

        <button className="text-blue-700 flex items-center gap-1">
          <Heart size={18} />
          Add to Favorite
        </button>
      </div>

      <div className="text-sm mt-4">
        Share this product:
        <a href="#" className="ml-2 text-blue-600 hover:underline">
          Facebook
        </a>
=======
      {/* Warranty */}
      <div className="text-sm text-gray-600">Two Year Warranty</div>

      {/* Quantity and Actions */}
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleQuantityChange("decrement")}
            className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
            disabled={quantity <= 1}
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-12 text-center font-medium">{quantity}</span>
          <button
            onClick={() => handleQuantityChange("increment")}
            className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <div className="flex space-x-3">
          <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
            <ShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
          <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
            <Heart className="w-5 h-5 text-gray-600" />
            <span className="ml-2 text-sm">Add to Favorite</span>
          </button>
        </div>
>>>>>>> c3277b5e38ab32307957658b8d5af78030e4a0b9
      </div>
    </div>
  )
}
