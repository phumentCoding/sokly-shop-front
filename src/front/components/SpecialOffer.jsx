"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"

const SpecialOffer = () => {
  const navigate = useNavigate()
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 9,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    })

    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time) => time.toString().padStart(2, "0")

  const specialOffers = [
    {
      id: 16, // Match with ProductDetail's allProducts array
      name: "Garmin Forerunner 165 43mm Amoled...",
      image: "https://www.soklyphone.com/storage/GARMIN/garmin-forerunner-165-43-mm/1-1743671860fftXF.png",
      price: 199.0, // Changed from currentPrice to price
      originalPrice: 280.0,
      discount: 81,
      monthlyPrice: 18.0,
      warranty: 1,
      isNew: true,
      category: "Smart Watch",
      isSpecialOffer: true,
    },
    {
      id: 17, // Match with ProductDetail's allProducts array
      name: 'MacBook Air 13" M4 2025 8C',
      image: "https://www.soklyphone.com/storage/Apple/Macbook/Macbook-Air-M4-2025/starlight-1743661331G24Ay.png",
      price: 1099.0, // Changed from currentPrice to price
      originalPrice: 1149.0,
      discount: 50,
      monthlyPrice: 98.0,
      warranty: 1,
      isNew: true,
      category: "Laptop",
      isSpecialOffer: true,
    },
    {
      id: 18, // Match with ProductDetail's allProducts array
      name: 'MacBook Air 13" M4 2025 10C',
      image: "https://www.soklyphone.com/storage/Apple/Macbook/Macbook-Air-M3/Profile/silver-1712660368IiEmg.png",
      price: 1299.0, // Changed from currentPrice to price
      originalPrice: 1379.0,
      discount: 80,
      monthlyPrice: 116.0,
      warranty: 1,
      isNew: true,
      category: "Laptop",
      isSpecialOffer: true,
    },
    {
      id: 19, // Match with ProductDetail's allProducts array
      name: 'MacBook Air 15" M4 2025 10C',
      image: "https://www.soklyphone.com/storage/Apple/Macbook/Macbook-Air-M4-2025/midnight-1743661328rbwaV.png",
      price: 1299.0, // Changed from currentPrice to price
      originalPrice: 1379.0,
      discount: 80,
      monthlyPrice: 116.0,
      warranty: 1,
      isNew: true,
      category: "Laptop",
      isSpecialOffer: true,
    },
    {
      id: 21, // New ID to avoid conflicts
      name: 'MacBook Air 15" M4 2025 10C Sky Blue',
      image: "https://www.soklyphone.com/storage/Apple/Macbook/Macbook-Air-M4-2025/sky-blue-1743661330mbBBn.png",
      price: 1749.0, // Changed from currentPrice to price
      originalPrice: 1839.0,
      discount: 90,
      monthlyPrice: 156.0,
      warranty: 1,
      isNew: true,
      category: "Laptop",
      isSpecialOffer: true,
    },
    {
      id: 20, // Match with ProductDetail's allProducts array
      name: "Sony WF-C510 Truly Wireless Headphones",
      image:
        "https://www.soklyphone.com/storage/Accessories/SONY/Sony-WF-C510-truly-wireless-earbuds/blue-3-17305382889Tt2f.jpg",
      price: 59.0, // Changed from currentPrice to price
      originalPrice: 69.0,
      discount: 10,
      monthlyPrice: null,
      warranty: 1,
      isNew: true,
      category: "Accessories",
      isSpecialOffer: true,
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

    // Navigate with the product data - ensure consistent structure
    navigate(`/product/${slug}`, {
      state: {
        productData: {
          ...product,
          isSpecialOffer: true, // Ensure this flag is set
        },
      },
    })
  }

  // Function to handle "View all" click
  const handleViewAllClick = () => {
    navigate("/special-offers", {
      state: {
        specialOffers: specialOffers,
      },
    })
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900">SPECIAL OFFER</h2>
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
          {specialOffers.map((product, index) => (
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
                {/* Warranty Badge with Custom Image */}
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

                {/* Discount Badge */}
                <span className="inline-flex items-center gap-1 bg-gradient-to-r from-red-500 to-yellow-400 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full shadow-lg mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3"></path>
                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  ${product.discount} Off
                </span>

                {/* Pricing - Fixed height container */}
                <div className="mb-3 flex-shrink-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-bold text-red-600">${product.price.toFixed(2)}</span>
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                  </div>
                  {/* Always reserve space for monthly price - Fixed height */}
                  <div className="h-4">
                    {product.monthlyPrice ? (
                      <p className="text-xs text-gray-600">Or ${product.monthlyPrice.toFixed(2)}/mo. for 12 mo.</p>
                    ) : (
                      <div className="h-4"></div>
                    )}
                  </div>
                </div>

                {/* Countdown Timer - Push to bottom */}
                <div className="mt-auto mb-4">
                  <div className="flex items-center gap-1 text-xs text-gray-600 mb-2">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                    <span>Deal ends in 28d</span>
                  </div>
                  <div className="text-xs font-mono text-blue-600">
                    {formatTime(timeLeft.days)}:{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:
                    {formatTime(timeLeft.seconds)}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  className="w-auto bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded flex items-center justify-center gap-2 absolute left-0 right-0 bottom-0 mx-4 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out transform group-hover:translate-y-3"
                  onClick={(e) => {
                    e.stopPropagation() // Prevent triggering the card click
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
          ))}
        </div>

        {/* Mobile Scroll Hint */}
        <div className="mt-6 text-center xl:hidden" data-aos="fade-up" data-aos-delay="600">
          <p className="text-sm text-gray-500">← Swipe to see more offers →</p>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
