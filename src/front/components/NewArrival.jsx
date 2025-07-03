"use client"

import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const NewArrival = () => {
  const [activeCategory, setActiveCategory] = useState("All")

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    })
  }, [])

  const categories = [
    "All",
    "Mobile Phone", 
    "Tablet",
    "Smart Watch",
    "Laptop",
    "Accessories"
  ]

  const newArrivals = [
    {
      id: 1,
      name: "(Pre-Order) Sony ULT TOWER 9",
      description: "Wireless Party Speaker",
      image: "🔊",
      price: 799.00,
      monthlyPrice: 71.00,
      category: "Accessories",
      isPreOrder: true,
      ranking: 1,
      isNew: true
    },
    {
      id: 2,
      name: "(Pre-Order) Sony ULT FIELD 5",
      description: "Portable Bluetooth Speaker",
      image: "📻",
      price: 279.00,
      monthlyPrice: 25.00,
      category: "Accessories",
      isPreOrder: true,
      ranking: 1,
      isNew: true
    },
    {
      id: 3,
      name: "(Pre-Order) Sony ULT FIELD 3",
      description: "Portable Bluetooth Speaker",
      image: "📻",
      price: 179.00,
      monthlyPrice: 16.00,
      category: "Accessories",
      isPreOrder: true,
      ranking: 1,
      isNew: true
    },
    {
      id: 4,
      name: "Xiaomi Redmi Pad 2 4G",
      description: "",
      image: "📱",
      price: 199.00,
      monthlyPrice: 18.00,
      category: "Tablet",
      isPreOrder: false,
      ranking: 1,
      isNew: true,
      hasAddToCart: true
    },
    {
      id: 5,
      name: "Xiaomi Redmi Pad 2",
      description: "",
      image: "📱",
      price: 169.00,
      monthlyPrice: 15.00,
      category: "Tablet",
      isPreOrder: false,
      ranking: 1,
      isNew: true
    },
    {
      id: 6,
      name: "Huawei Watch 5 42mm",
      description: "",
      image: "⌚",
      price: 499.00,
      monthlyPrice: 45.00,
      category: "Smart Watch",
      isPreOrder: false,
      ranking: 1,
      isNew: true
    },
    {
      id: 7,
      name: "Huawei Watch 5 46mm",
      description: "",
      image: "⌚",
      price: 399.00,
      monthlyPrice: 36.00,
      category: "Smart Watch",
      isPreOrder: false,
      ranking: 1,
      isNew: true
    },
    {
      id: 8,
      name: "Honor Pad X9a With Pen",
      description: "",
      image: "📱",
      price: 269.00,
      monthlyPrice: 24.00,
      category: "Tablet",
      isPreOrder: false,
      ranking: 1,
      isNew: true
    }
  ]

  const filteredProducts = activeCategory === "All" 
    ? newArrivals 
    : newArrivals.filter(product => product.category === activeCategory)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">NEW ARRIVAL</h2>
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-6">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm font-medium transition-colors duration-300 pb-2 border-b-2 ${
                  activeCategory === category
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-500 hover:text-gray-700 border-transparent hover:border-gray-300"
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Product Image Container */}
              <div className="relative p-6 bg-gray-50">
                {/* NEW Badge */}
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                )}
                
                {/* Ranking Badge */}
                <div className="absolute top-2 right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {product.ranking}
                </div>

                {/* Product Image */}
                <div className="text-6xl text-center mb-4">
                  {product.image}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                {/* Product Name */}
                <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2 min-h-[40px]">
                  {product.name}
                </h3>
                
                {/* Product Description */}
                {product.description && (
                  <p className="text-xs text-gray-600 mb-3">
                    {product.description}
                  </p>
                )}

                {/* Pricing */}
                <div className="mb-4">
                  <div className="mb-2">
                    <span className="text-lg font-bold text-red-600">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  
                  <p className="text-xs text-gray-600">
                    Or ${product.monthlyPrice.toFixed(2)}/mo for 12 mo.*
                  </p>
                </div>

                {/* Add to Cart Button */}
                {product.hasAddToCart && (
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9m-9 0h9" />
                    </svg>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12" data-aos="fade-up">
            <div className="text-gray-400 text-6xl mb-4">📱</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}

        {/* Mobile Scroll Hint */}
        <div className="mt-8 text-center xl:hidden" data-aos="fade-up" data-aos-delay="600">
          <p className="text-sm text-gray-500">← Swipe to see more products →</p>
        </div>
      </div>
    </section>
  )
}

export default NewArrival