"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import HomeBrand from "./HomeBrand"

const HomeSlide = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    })
  }, [])

  const features = [
    { icon: "⚡", title: "Fast Charging", desc: "Quick power-up technology" },
    { icon: "🛡️", title: "Warranty", desc: "2-year protection plan" },
    { icon: "🚚", title: "Free Delivery", desc: "Same day delivery available" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8">
              <div data-aos="fade-right">
                <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  🔥 New Arrival
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Latest
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {" "}
                    Smartphones
                  </span>
                  <br />
                  Just for You
                </h1>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg" data-aos="fade-right" data-aos-delay="200">
                Discover the newest collection of premium smartphones with cutting-edge technology, exceptional cameras,
                and lightning-fast performance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-right" data-aos-delay="400">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2">
                  🛒 Shop Now
                </button>
                <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                  📱 View Catalog
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8" data-aos="fade-up" data-aos-delay="600">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:transform hover:-translate-y-1 transition-all duration-300"
                    data-aos="zoom-in"
                    data-aos-delay={700 + index * 100}
                  >
                    <div className="text-2xl">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                      <p className="text-gray-600 text-xs">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Product Showcase */}
            <div className="relative flex justify-center items-center">
              <div
                className="relative z-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="text-center space-y-6">
                  <div className="relative mx-auto">
                    <div
                      className="relative w-64 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-xl mx-auto"
                      data-aos="zoom-in"
                      data-aos-delay="500"
                    >
                      <div className="absolute inset-4 bg-black rounded-2xl flex items-center justify-center">
                        <div className="text-white text-center space-y-2">
                          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-2xl">
                            📱
                          </div>
                          <h3 className="font-bold text-lg">Galaxy Z Fold 6</h3>
                          <p className="text-sm text-gray-300">AI Technology</p>
                        </div>
                      </div>

                      {/* Floating elements */}
                      <div
                        className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-yellow-800 font-bold"
                        data-aos="bounce"
                        data-aos-delay="1000"
                      >
                        ⭐
                      </div>
                      <div
                        className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-green-800 font-bold text-xs"
                        data-aos="bounce"
                        data-aos-delay="1200"
                      >
                        NEW
                      </div>
                    </div>

                    <div className="text-white space-y-2 mt-6">
                      <h3 className="text-2xl font-bold">Premium Collection</h3>
                      <p className="text-gray-300">Starting from $999</p>
                      <button className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition-colors duration-300 mt-4">
                        Available Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background decorative elements */}
              <div
                className="absolute top-10 -right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20"
                data-aos="fade"
                data-aos-delay="800"
              ></div>
              <div
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-200 rounded-full opacity-20"
                data-aos="fade"
                data-aos-delay="1000"
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Brands Section - Now using HomeBrand component */}
      <HomeBrand />

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <p className="text-blue-100">Happy Customers</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p className="text-blue-100">Products Available</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-blue-100">Customer Support</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default HomeSlide
