import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const SpecialOffer = () => {

  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 9,
    minutes: 59,
    seconds: 59
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
      setTimeLeft(prev => {
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

  const formatTime = (time) => time.toString().padStart(2, '0')

  const specialOffers = [
    {
      id: 1,
      name: "Garmin Forerunner 165 43mm Amoled...",
      image: "⌚",
      currentPrice: 199.00,
      originalPrice: 280.00,
      discount: 81,
      monthlyPrice: 18.00,
      ranking: 1,
      isNew: true
    },
    {
      id: 2,
      name: "MacBook Air 13\" M4 2025 8C",
      image: "💻",
      currentPrice: 1099.00,
      originalPrice: 1149.00,
      discount: 50,
      monthlyPrice: 98.00,
      ranking: 1,
      isNew: true
    },
    {
      id: 3,
      name: "MacBook Air 13\" M4 2025 10C",
      image: "💻",
      currentPrice: 1299.00,
      originalPrice: 1379.00,
      discount: 80,
      monthlyPrice: 116.00,
      ranking: 1,
      isNew: true
    },
    {
      id: 4,
      name: "MacBook Air 15\" M4 2025 10C",
      image: "💻",
      currentPrice: 1299.00,
      originalPrice: 1379.00,
      discount: 80,
      monthlyPrice: 116.00,
      ranking: 1,
      isNew: true
    },
    {
      id: 5,
      name: "MacBook Air 15\" M4 2025 10C",
      image: "💻",
      currentPrice: 1749.00,
      originalPrice: 1839.00,
      discount: 90,
      monthlyPrice: 156.00,
      ranking: 1,
      isNew: true
    },
    {
      id: 6,
      name: "Sony WF-C510 Truly Wireless Headphones",
      image: "🎧",
      currentPrice: 59.00,
      originalPrice: 69.00,
      discount: 10,
      monthlyPrice: null,
      ranking: 1,
      isNew: true
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900">SPECIAL OFFER</h2>
          <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 transition-colors">
            View all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {specialOffers.map((product, index) => (
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
                <h3 className="text-sm font-medium text-gray-900 mb-3 line-clamp-2 min-h-[40px]">
                  {product.name}
                </h3>

                {/* Discount Badge */}
                <div className="mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                    ${product.discount} Off
                  </span>
                </div>

                {/* Pricing */}
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-bold text-red-600">
                      ${product.currentPrice.toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  </div>
                  
                  {product.monthlyPrice && (
                    <p className="text-xs text-gray-600">
                      Or ${product.monthlyPrice.toFixed(2)}/mo. for 12 mo.
                    </p>
                  )}
                </div>

                {/* Countdown Timer */}
                <div className="mb-4">
                  <div className="flex items-center gap-1 text-xs text-gray-600 mb-2">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                    <span>Deal ends in 28d</span>
                  </div>
                  <div className="text-xs font-mono text-blue-600">
                    {formatTime(timeLeft.days)}:{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9m-9 0h9" />
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