
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

  const categories = ["All", "Mobile Phone", "Tablet", "Smart Watch", "Laptop", "Accessories"]

  const newArrivals = [
    {
      id: 1,
      name: "Mac Studio M4 Max",
      description: "",
      image: "https://www.soklyphone.com/storage/Apple/Mac-Studio/Mac-Studio-M4-Max/1-1744453470xJ8bO.png",
      price: 3159.00,
      monthlyPrice: 71.0,
      category: "Accessories",
      isNew: true,
      warranty: 1,
    },
    {
      id: 2,
      name: "(Pre-Order) Sony ULT TOWER 9 Wireless Party Speaker",
      description: "",
      image: "https://www.soklyphone.com/storage/SONY/Accessories/ULT-TOWER-9-Wireless-Party-Speaker/1-175118218851HsC.png",
      price: 779.0,
      monthlyPrice: 25.0,
      category: "Accessories",
      isNew: true,
      warranty: 1,
    },
    {
      id: 3,
      name: "(Pre-Order) Sony ULT FIELD 5 Portable Bluetooth Speaker",
      description: "",
      image: "https://www.soklyphone.com/storage/SONY/Accessories/ULT-FIELD-5-Portable-Bluetooth-Speaker/black-175118048507e04.png",
      price: 279.0,
      monthlyPrice: 25.0,
      category: "Accessories",
      isNew: true,
      warranty: 1,
    },
    {
      id: 4,
      name: " (Pre-Order) Sony ULT FIELD 3 Portable Bluetooth Speaker",
      description: "",
      image: "https://www.soklyphone.com/storage/SONY/Accessories/ULT-FIELD-3-Portable-Bluetooth-Speaker/forest-gray-1751179619kAVQu.png",
      price: 179.0,
      monthlyPrice: 16.0,
      category: "Accessories",
      isNew: true,
      warranty: 1,
    },
    {
      id: 5,
      name: "Xiaomi Redmi Pad 2 4G",
      description: "",
      image: "https://www.soklyphone.com/storage/Xiaomi/Xiaomi-Redmi-Pad-2/graphite-grey-1750756398BjDZZ.png",
      price: 199.0,
      monthlyPrice: 18.0,
      category: "Tablet",
      isNew: true,
      warranty: 1,
    },
    {
      id: 6,
      name: "Xiaomi Redmi Pad 2",
      description: "",
      image: "https://www.soklyphone.com/storage/Xiaomi/Xiaomi-Redmi-Pad-2/mint-green-1750756400VTAYO.png",
      price: 169.0,
      monthlyPrice: 15.0,
      category: "Tablet",
      isNew: true,
      warranty: 1,
    },
    {
      id: 7,
      name: "Huawei Watch 5 42mm",
      description: "",
      image: "https://www.soklyphone.com/storage/Huawei/HUAWEI-Watch/Huawei-Watch-5/42mm/stainless-beige-1-1750741016HSr24.png",
      price: 499.0,
      monthlyPrice: 45.0,
      category: "Smart Watch",
      isNew: true,
      warranty: 1,
    },
    {
      id: 8,
      name: "Huawei Watch 5 46mm",
      description: "",
      image: "https://www.soklyphone.com/storage/Huawei/HUAWEI-Watch/Huawei-Watch-5/black-1-1751362418cBcjK.png",
      price: 399.0,
      monthlyPrice: 36.0,
      category: "Smart Watch",
      isNew: true,
      warranty: 1,
    },
  ]

  const filteredProducts =
    activeCategory === "All" ? newArrivals : newArrivals.filter((product) => product.category === activeCategory)

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
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
                className={`text-sm font-medium transition-colors duration-300 pb-2 border-b-2 ${activeCategory === category
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
              className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 flex flex-col h-full"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Product Image Container */}
              <div className="relative p-6 bg-gray-50 flex-shrink-0">
                {/* NEW Badge */}
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                )}

                {/* Warranty Badge with Custom Image */}
                <div className="absolute top-2 right-2">
                  <img
                    src="https://www.soklyphone.com/img/warranty.png"
                    alt="1 Year Warranty"
                    className="w-12 h-12 object-contain"
                    title="1 Year Warranty"
                  />
                </div>

                {/* Product Image */}
                <div className="mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-32 object-cover block mx-auto"
                  />
                </div>

              </div>

              {/* Product Info */}
              <div className="p-4 relative transition-transform duration-700 ease-in-out group-hover:-translate-y-10 flex flex-col flex-grow">
                {/* Product Name - Fixed height */}
                <h3 className="text-md font-medium text-gray-900 mb-3 line-clamp-2 h-12 flex justify-center text-center">
                  {product.name}
                </h3>


                {/* Product Description */}
                {product.description && <p className="text-xs text-gray-600 mb-3">{product.description}</p>}

                {/* Pricing - Fixed height container */}
                <div className="mb-4 flex-shrink-0">
                  <div className="mb-2">
                    <span className="text-lg font-bold text-red-600">${product.price.toFixed(2)}</span>
                  </div>

                  <div className="h-4 py-3">
                    <p className="text-[14px] text-gray-700">Or ${product.monthlyPrice.toFixed(2)}/mo for 12 mo.*</p>
                  </div>
                </div>

                {/* Add to Cart Button - Hidden by default, shows on hover */}
                <div className="mt-auto">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out transform group-hover:translate-y-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9m-9 0h9"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </div>
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
