"use client"

import { AlertTriangle, Shield, Star } from "lucide-react"

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
    <div>
      <div className="space-y-4 max-w-sm">
        {/* Main Instructions Section */}
        <div className="bg-white rounded-lg border-2 border-blue-300 p-4 shadow-sm">
          <h3 className="text-center text-lg font-bold text-blue-700 mb-4 border-b border-blue-200 pb-2">
            វិធីសាស្រ្តបង់ប្រាក់ដំបូង
          </h3>

          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3 p-2">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                ១
              </div>
              <span className="text-gray-800">តេស្តប្រាក់ដំបូង</span>
            </div>

            <div className="flex items-start gap-3 p-2">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                ២
              </div>
              <span className="text-gray-800">អ្នកស្រុកបានបង់ប្រាក់</span>
            </div>

            <div className="flex items-start gap-3 p-2">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                ៣
              </div>
              <span className="text-gray-800">ដឹកជញ្ជូនទៅកាន់អ្នក</span>
            </div>

            <div className="flex items-start gap-3 p-2">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                ៤
              </div>
              <span className="text-gray-800">ទទួលបានផលិតផលរបស់អ្នក</span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-200">
          <p className="text-xs text-gray-600 leading-relaxed mb-2">
            សូមអរគុណសម្រាប់ការជឿទុកចិត្តលើហាងរបស់យើង ដែលជាហាងលក់ផលិតផលបច្ចេកវិទ្យាពិតប្រាកដ។ អរគុណ
          </p>
          <p className="text-xs text-blue-600 font-medium">*Cambodian only (Bank Policy)!</p>
        </div>
      </div>

      {/* Warning Section */}
      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-5 h-5 text-red-600" />
          <img src="https://www.soklyphone.com/storage/Advertises/2025/04-04-2025/face-page-1744167472AoQ7V.jpg" alt="" />

        </div>
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-5 h-5 text-red-600" />
          <img src="https://www.soklyphone.com/storage/Advertises/2025/07-07-2025/iphone-16-pro-max-8-7-25-1751940478L7ssv.jpg" alt="" />

        </div>

        {/* <div className="grid grid-cols-2 gap-2 mb-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative">
              <div className="bg-gray-200 rounded aspect-[3/4] flex items-center justify-center">
              <img src="https://www.soklyphone.com/storage/Advertises/2025/04-04-2025/face-page-1744167472AoQ7V.jpg" alt="" />
                <div className="text-xs text-gray-500">Screenshot {i}</div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-600 text-white px-2 py-1 rounded font-bold text-xs transform -rotate-12">
                  FAKE
                </div>
              </div>
            </div>
          ))}
        </div> */}

        <p className="text-xs text-red-700 leading-relaxed">
          សូមប្រុងប្រយ័ត្នចំពោះគេហទំព័រក្លែងក្លាយ និងការបោកប្រាស់។ សូមទិញតែពីហាងផ្លូវការរបស់យើងប៉ុណ្ណោះ។
        </p>
      </div>

      {/* Promotional Section */}
      <div className="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          <Star className="w-5 h-5 text-orange-600" />
          <h4 className="font-bold text-orange-700">ផលិតផលពិសេស</h4>
        </div>

        <div className="space-y-3">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                <img src="https://www.soklyphone.com/storage/Advertises/2025/07-07-2025/iphone-15-15-plus-04-07-25-1751622501V4yA4.jpg" alt="" />
              </div>
              <div className="flex-1">
                <h5 className="font-medium text-sm">iPhone 15 Pro Max</h5>
                <div className="flex items-center gap-2">
                  <span className="text-red-600 font-bold text-sm">$1,099</span>
                  <span className="text-gray-400 line-through text-xs">$1,299</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                <img src="https://www.soklyphone.com/storage/Advertises/2025/07-07-2025/iphone-16e-04-07-25-175162244257SHS.jpg" alt="" />
              </div>
              <div className="flex-1">
                <h5 className="font-medium text-sm">Samsung Galaxy S24</h5>
                <div className="flex items-center gap-2">
                  <span className="text-red-600 font-bold text-sm">$899</span>
                  <span className="text-gray-400 line-through text-xs">$1,099</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 text-center">
          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors">
            មើលផលិតផលទាំងអស់
          </button>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-700">ទំនាក់ទំនងផ្លូវការ</span>
        </div>
        <div className="text-xs text-blue-600 space-y-1">
          <p>📱 Telegram: @officialstore</p>
          <p>📞 Phone: +855 12 345 678</p>
          <p>🌐 Website: www.store.com</p>
        </div>
      </div>
    </div>
  )
}

export default SidebarDetail
