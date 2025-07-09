"use client"

const SidebarDetail = () => {
  const promotionalContent = [
    {
      title: "ការការពារប្រាក់ដាក់",
      subtitle: "១-ទេសក្រុមក្រុម",
      items: ["២-អ្នកស្រុកប្រាណបង់", "៣-សំណុំកំណត់", "៤-បើកការបញ្ជាក់ការកំណត់"],
      description: "សូមអានលក្ខខណ្ឌនៃការសេវាកម្មនេះ មុនពេលធ្វើការទិញ ដើម្បីជៀសវាងការយល់ច្រឡំ ការប្រុងប្រយ័ត្ន អគុណ",
      note: "*Cambodian only (Bank Policy)!",
    },
  ]

  const advertisements = [
    {
      id: 1,
      image: "https://soklyphone.com/storage/Advertises/2025/04-04-2025/face-page-1744167472AoQ7V.jpg",
      title: "Special Offers",
      description: "Check out our latest deals",
    },
    {
      id: 2,
      image: "https://soklyphone.com/storage/Advertises/2025/07-07-2025/iphone-16-pro-max-8-7-25-1751940478L7ssv.jpg",
      title: "iPhone Deals",
      description: "Best prices on smartphones",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Banking Information Card */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        {promotionalContent.map((content, index) => (
          <div key={index} className="space-y-3">
            <h3 className="font-bold text-blue-900 text-lg">{content.title}</h3>

            <div className="space-y-2">
              <div className="text-blue-800 font-medium">{content.subtitle}</div>

              {content.items.map((item, itemIndex) => (
                <div key={itemIndex} className="text-blue-700 text-sm">
                  {item}
                </div>
              ))}
            </div>

            <p className="text-blue-700 text-sm leading-relaxed">{content.description}</p>

            <p className="text-red-600 text-sm font-medium">{content.note}</p>
          </div>
        ))}
      </div>

      {/* Advertisement Banners */}
      <div className="space-y-4">
        {advertisements.map((ad) => (
          <div key={ad.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <img src={ad.image || "/placeholder.svg"} alt={ad.title} className="w-full h-32 object-cover" />
            <div className="p-3">
              <h4 className="font-medium text-gray-900 text-sm">{ad.title}</h4>
              <p className="text-gray-600 text-xs mt-1">{ad.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-lg p-4 text-white">
        <div className="text-center">
          <div className="text-lg font-bold">YEAR SALE</div>
          <div className="text-sm opacity-90">Up to 50% Off</div>
          <div className="text-xs mt-2 opacity-80">Limited time offer on selected items</div>
        </div>
      </div>

      {/* Product Recommendations */}
      <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">Recommended for You</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <img src="https://soklyphone.com/storage/Advertises/2025/07-07-2025/iphone-16-16-plus-1751338334EjeAz.png" alt="Product" className="w-12 h-12 rounded object-cover" />
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">iPhone 15 Pro Max</div>
              <div className="text-xs text-red-500 font-bold">
                $1,199 <span className="line-through text-gray-400">$1,299</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <img src="https://soklyphone.com/storage/Advertises/2025/07-07-2025/iphone-16e-04-07-25-175162244257SHS.jpg" alt="Product" className="w-12 h-12 rounded object-cover" />
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">Samsung Galaxy S24</div>
              <div className="text-xs text-red-500 font-bold">
                $899 <span className="line-through text-gray-400">$999</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarDetail
