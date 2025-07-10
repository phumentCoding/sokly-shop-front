
import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const SpecialOffer = () => {
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
      id: 1,
      name: "Garmin Forerunner 165 43mm Amoled...",
      image: "https://www.soklyphone.com/storage/GARMIN/garmin-forerunner-165-43-mm/1-1743671860fftXF.png",
      currentPrice: 199.0,
      originalPrice: 280.0,
      discount: 81,
      monthlyPrice: 18.0,
      warranty: 1,
      isNew: true,
    },
    {
      id: 2,
      name: 'MacBook Air 13" M4 2025 8C',
      image: "https://www.soklyphone.com/storage/Apple/Macbook/Macbook-Air-M4-2025/starlight-1743661331G24Ay.png",
      currentPrice: 1099.0,
      originalPrice: 1149.0,
      discount: 50,
      monthlyPrice: 98.0,
      warranty: 1,
      isNew: true,
    },
    {
      id: 3,
      name: 'MacBook Air 13" M4 2025 10C',
      image: "https://www.soklyphone.com/storage/Apple/Macbook/Macbook-Air-M3/Profile/silver-1712660368IiEmg.png",
      currentPrice: 1299.0,
      originalPrice: 1379.0,
      discount: 80,
      monthlyPrice: 116.0,
      warranty: 1,
      isNew: true,
    },
    {
      id: 4,
      name: 'MacBook Air 15" M4 2025 10C',
      image: "https://www.soklyphone.com/storage/Apple/Macbook/Macbook-Air-M4-2025/midnight-1743661328rbwaV.png",
      currentPrice: 1299.0,
      originalPrice: 1379.0,
      discount: 80,
      monthlyPrice: 116.0,
      warranty: 1,
      isNew: true,
    },
    {
      id: 5,
      name: 'MacBook Air 15" M4 2025 10C',
      image: "https://www.soklyphone.com/storage/Apple/Macbook/Macbook-Air-M4-2025/sky-blue-1743661330mbBBn.png",
      currentPrice: 1749.0,
      originalPrice: 1839.0,
      discount: 90,
      monthlyPrice: 156.0,
      warranty: 1,
      isNew: true,
    },

    {
      id: 6,
      name: "Sony WF-C510 Truly Wireless Headphones",
      image: "https://www.soklyphone.com/storage/Accessories/SONY/Sony-WF-C510-truly-wireless-earbuds/blue-3-17305382889Tt2f.jpg",
      currentPrice: 59.0,
      originalPrice: 69.0,
      discount: 10,
      monthlyPrice: null,
      warranty: 1,
      isNew: true,
    },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {specialOffers.map((product, index) => (
            <div 
              key={product.id}
              className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
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
                    src={product.image}
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
                <span className="inline-flex items-center gap-1 bg-gradient-to-r from-red-500 to-yellow-400 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3"></path>
                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  ${product.discount} Off
                </span>


                {/* Pricing - Fixed height container */}
                <div className="mb-3 flex-shrink-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-bold text-red-600">${product.currentPrice.toFixed(2)}</span>
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

                {/* Add to Cart Button - Keep all original hover effects */}
                <button className="w-auto bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded flex items-center justify-center gap-2 absolute left-0 right-0 bottom-0 mx-4 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out transform group-hover:translate-y-3">
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
