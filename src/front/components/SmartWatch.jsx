"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { useNavigate } from "react-router-dom"

const SmartWatch = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    })
  }, [])

  const navigate = useNavigate();

  const smartWatches = [
    {
      id: 1,
      name: "Huawei Watch 5 46mm",
      image: "https://www.soklyphone.com/storage/Huawei/HUAWEI-Watch/Huawei-Watch-5/black-1-1751362418cBcjK.png",
      price: 399.0,
      monthlyPrice: 36.0,
      isNew: true,
      warranty: 1,
    },
    {
      id: 2,
      name: "Huawei Watch 5 42mm",
      image: "https://www.soklyphone.com/storage/Huawei/HUAWEI-Watch/Huawei-Watch-5/42mm/stainless-beige-1-1750741016HSr24.png",
      price: 499.0,
      monthlyPrice: 45.0,
      isNew: true,
      warranty: 1,
    },
    {
      id: 3,
      name: "COROS PACE Pro GPS Sport Watch Suguru...",
      image: "https://www.soklyphone.com/storage/COROS/coros-pace-pro-gps-sport-watch-suguru-osako-edition/1-1750393348C5Sw4.png",
      price: 439.0,
      monthlyPrice: 39.0,
      isNew: true,
      warranty: 1,
    },
    {
      id: 4,
      name: "Huawei Watch Fit 3",
      image: "https://www.soklyphone.com/storage/Huawei/HUAWEI-Watch/Huawei-Watch-Fit-3/green-1-1739170481iECyG.png",
      price: 99.0,
      monthlyPrice: null,
      isNew: true,
      warranty: 1,
    },
    {
      id: 5,
      name: "Garmin Instinct 3 50mm AMOLED",
      image: "https://www.soklyphone.com/storage/GARMIN/Garmin-instinct-3-50-mm-amoled/1-1739178210XscEM.png",
      price: 560.0,
      monthlyPrice: 50.0,
      isNew: true,
      warranty: 1,
    },
    {
      id: 6,
      name: "HUAWEI Band 10",
      image: "https://www.soklyphone.com/storage/Huawei/HUAWEI-Watch/HUAWEI-Band-10/pink-1-1742367178B74dr.png",
      price: 39.0,
      monthlyPrice: null,
      isNew: true,
      warranty: 1,
    },
  ]

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900">SMART WATCH</h2>
          <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 transition-colors cursor-pointer">
            View all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {smartWatches.map((product, index) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full cursor-pointer"
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
      </div>
    </section>
  )
}

export default SmartWatch
