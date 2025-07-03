"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const HomeBrand = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    })
  }, [])

  const brands = [
    { name: "Apple", logo: "🍎" },
    { name: "Samsung", logo: "📱" },
    { name: "Google", logo: "🔍" },
    { name: "OnePlus", logo: "➕" },
    { name: "Xiaomi", logo: "📲" },
    { name: "Huawei", logo: "📞" },
    { name: "OPPO", logo: "⭕" },
    { name: "Vivo", logo: "📳" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Brands</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our extensive collection from the world's leading smartphone manufacturers
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {brands.map((brand, index) => (
            <div key={index} className="group cursor-pointer" data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="h-20 bg-white border-2 border-gray-200 hover:border-blue-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="text-2xl mb-1">{brand.logo}</div>
                  <p className="text-xs font-medium text-gray-600 group-hover:text-blue-600 transition-colors">
                    {brand.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeBrand
