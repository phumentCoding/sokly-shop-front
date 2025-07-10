"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"

const Accessories = () => {
  const navigate = useNavigate()

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    })
  }, [])

  const accessories = [
    {
      id: 1,
      name: "(Pre-Order) Sony ULT FIELD 3 Portable Bluetooth Speaker",
      image:
        "https://www.soklyphone.com/storage/SONY/Accessories/ULT-FIELD-3-Portable-Bluetooth-Speaker/forest-gray-1751179619kAVQu.png",
      price: 179.0,
      monthlyPrice: 16.0,
      isNew: true,
      warranty: 1,
      category: "Accessories",
    },
    {
      id: 2,
      name: "(Pre-Order) Sony ULT FIELD 5 Portable Bluetooth Speaker",
      image:
        "https://www.soklyphone.com/storage/SONY/Accessories/ULT-FIELD-5-Portable-Bluetooth-Speaker/black-175118048507e04.png",
      price: 279.0,
      monthlyPrice: 25.0,
      isNew: true,
      warranty: 1,
      category: "Accessories",
    },
    {
      id: 3,
      name: "(Pre-Order) Sony ULT TOWER 9 Wireless Party Speaker",
      image:
        "https://www.soklyphone.com/storage/SONY/Accessories/ULT-TOWER-9-Wireless-Party-Speaker/1-175118218851HsC.png",
      price: 779.0,
      monthlyPrice: 71.0,
      isNew: true,
      warranty: 1,
      category: "Accessories",
    },
    {
      id: 4,
      name: "70W USB-C Power Adapter",
      image:
        "https://www.soklyphone.com/storage/Accessories/Apple/Adapter/70-w-usb-c-power-adapter/1-1745828700YvT3F.png",
      price: 99.0,
      monthlyPrice: null,
      isNew: true,
      warranty: 1,
      category: "Accessories",
    },
    {
      id: 5,
      name: "35W Dual USB-C Port Power Adapter",
      image:
        "https://www.soklyphone.com/storage/Accessories/Apple/Adapter/35w-dual-usb-c-port-power-adapter/1-1746525049UeET4.png",
      price: 69.0,
      monthlyPrice: null,
      isNew: true,
      warranty: 1,
      category: "Accessories",
    },
    {
      id: 6,
      name: "OPPO Enco Buds3 Pro True Wireless Earbuds",
      image:
        "https://www.soklyphone.com/storage/Accessories/Oppo/oppo-enco-buds-3-pro-true-wireless-earbuds/white-1-1743498657L316X.jpg",
      price: 24.9,
      monthlyPrice: null,
      isNew: true,
      warranty: 1,
      category: "Accessories",
    },
  ]

  // Function to create URL-friendly slug from product name
  const createSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special characters except hyphens
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/--+/g, "-") // Replace multiple hyphens with single hyphen
      .trim()
  }

  // Function to handle product click
  const handleProductClick = (product) => {
    const slug = createSlug(product.name)
    navigate(`/product/${slug}`, {
      state: {
        productData: product,
      },
    })
  }

  // Function to handle "View all" click
  const handleViewAllClick = () => {
    navigate("/products", {
      state: {
        selectedCategory: "Accessories",
        categoryName: "Accessories",
      },
    })
  }

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900">ACCESSORIES</h2>
          <button
            onClick={handleViewAllClick}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 transition-colors"
          >
            View all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {accessories.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              onClick={() => handleProductClick(product)}
            >
              {/* Product Image Container */}
              <div className="relative p-6 bg-gray-50 flex-shrink-0">
                {/* NEW Badge */}
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                )}
                {/* Warranty Badge */}
                <div className="absolute top-3 right-3">
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
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-32 h-32 object-cover block mx-auto"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 relative transition-transform duration-700 ease-in-out group-hover:-translate-y-10 flex flex-col flex-grow">
                {/* Product Name - Fixed height */}
                <h3 className="text-md font-medium text-gray-900 mb-3 line-clamp-2 h-12 flex text-center">
                  {product.name}
                </h3>
                {/* Pricing - Fixed height container */}
                <div className="mb-4 flex-shrink-0">
                  <div className="mb-2">
                    <span className="text-lg font-bold text-red-600">${product.price.toFixed(2)}</span>
                  </div>
                  {/* Monthly payment - Fixed height */}
                  <div className="h-4">
                    {product.monthlyPrice ? (
                      <p className="text-xs text-gray-600">Or ${product.monthlyPrice.toFixed(2)}/mo. for 12 mo.*</p>
                    ) : (
                      <div className="h-4"></div>
                    )}
                  </div>
                </div>
                {/* Add to Cart Button - Hidden by default, shows on hover */}
                <div className="mt-auto">
                  <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out transform group-hover:translate-y-3"
                    onClick={(e) => {
                      e.stopPropagation() // Prevent triggering the card click
                      // Handle add to cart functionality here
                      console.log("Add to cart:", product.name)
                    }}
                  >
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
      </div>
    </section>
  )
}

export default Accessories
