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
    { name: "Apple", logo: "https://www.soklyphone.com/storage/Brand_Logo/new_logo/apple-logo-1660278979YARnJ.jpg" },
    { name: "Samsung", logo: "https://www.soklyphone.com/storage/Brand_Logo/new_logo/samsung-logo-1660279193xqNqc.jpg" },
    { name: "Google", logo: "https://www.soklyphone.com/storage/Brand_Logo/new_logo/google-logo-1660279566F6Mh0.jpg" },
    { name: "OnePlus", logo: "https://www.soklyphone.com/storage/Brand_Logo/new_logo/oneplus-logo-1660277166nkJx7.jpg" },
    { name: "Xiaomi", logo: "https://www.soklyphone.com/storage/Brand_Logo/new_logo/xiaomi-logo-1660279429OwLtj.jpg" },
    { name: "Huawei", logo: "https://www.soklyphone.com/storage/Brand_Logo/new_logo/huawei-logo-1660277159Yszfi.jpg" },
    { name: "OPPO", logo: "https://www.soklyphone.com/storage/Brand_Logo/new_logo/oppo-logo-16602771672ADFa.jpg" },
    { name: "Vivo", logo: "https://www.soklyphone.com/storage/Brand_Logo/new_logo/vivo-logo-16602866285eomP.jpg" },
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
            <div
              key={index}
              className="group cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="h-20 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105 flex items-center justify-center p-4">
                <div className="text-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-8 sm:h-10 mx-auto mb-1 object-contain"
                  />
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
