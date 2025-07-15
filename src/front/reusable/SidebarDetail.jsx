"use client"

import { AlertTriangle, Shield, Star } from "lucide-react"

const SidebarDetail = () => {
  return (
    <div className="w-full md:max-w-md mx-auto px-4 sm:px-6 md:px-0 space-y-6">
      {/* Payment Method Section */}
      <div className="bg-white rounded-lg border-2 border-blue-300 p-4 sm:p-6 shadow-sm">
        <h3 className="text-center text-lg sm:text-xl font-bold text-blue-700 mb-4 border-b border-blue-200 pb-2">
          វិធីសាស្រ្តបង់ប្រាក់ដំបូង
        </h3>

        <div className="space-y-3 text-sm">
          {[
            "តេស្តប្រាក់ដំបូង",
            "អ្នកស្រុកបានបង់ប្រាក់",
            "ដឹកជញ្ជូនទៅកាន់អ្នក",
            "ទទួលបានផលិតផលរបស់អ្នក",
          ].map((text, index) => (
            <div key={index} className="flex items-start gap-3 p-2">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                {index + 1}
              </div>
              <span className="text-gray-800">{text}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-gray-200">
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-2">
            សូមអរគុណសម្រាប់ការជឿទុកចិត្តលើហាងរបស់យើង ដែលជាហាងលក់ផលិតផលបច្ចេកវិទ្យាពិតប្រាកដ។ អរគុណ
          </p>
          <p className="text-xs sm:text-sm text-blue-600 font-medium">*Cambodian only (Bank Policy)!</p>
        </div>
      </div>

      {/* Warning Section */}
      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 sm:p-6 space-y-3">
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
            <img
              src={
                i === 1
                  ? "https://www.soklyphone.com/storage/Advertises/2025/04-04-2025/face-page-1744167472AoQ7V.jpg"
                  : "https://www.soklyphone.com/storage/Advertises/2025/07-07-2025/iphone-16-pro-max-8-7-25-1751940478L7ssv.jpg"
              }
              alt=""
              className="rounded w-20 sm:w-24 h-auto object-cover"
            />
          </div>
        ))}
        <p className="text-xs sm:text-sm text-red-700 leading-relaxed">
          សូមប្រុងប្រយ័ត្នចំពោះគេហទំព័រក្លែងក្លាយ និងការបោកប្រាស់។ សូមទិញតែពីហាងផ្លូវការរបស់យើងប៉ុណ្ណោះ។
        </p>
      </div>

      {/* Promotional Section */}
      <div className="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-200 rounded-lg p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <Star className="w-5 h-5 text-orange-600" />
          <h4 className="font-bold text-orange-700 text-base sm:text-lg">ផលិតផលពិសេស</h4>
        </div>

        <div className="space-y-3">
          {[
            {
              name: "iPhone 15 Pro Max",
              image:
                "https://www.soklyphone.com/storage/Advertises/2025/07-07-2025/iphone-15-15-plus-04-07-25-1751622501V4yA4.jpg",
              price: "$1,099",
              oldPrice: "$1,299",
            },
            {
              name: "Samsung Galaxy S24",
              image:
                "https://www.soklyphone.com/storage/Advertises/2025/07-07-2025/iphone-16e-04-07-25-175162244257SHS.jpg",
              price: "$899",
              oldPrice: "$1,099",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-sm sm:text-base">{item.name}</h5>
                  <div className="flex items-center gap-2">
                    <span className="text-red-600 font-bold text-sm sm:text-base">{item.price}</span>
                    <span className="text-gray-400 line-through text-xs sm:text-sm">{item.oldPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors w-full sm:w-auto">
            មើលផលិតផលទាំងអស់
          </button>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-700">ទំនាក់ទំនងផ្លូវការ</span>
        </div>
        <div className="text-xs sm:text-sm text-blue-600 space-y-1">
          <p>📱 Telegram: @officialstore</p>
          <p>📞 Phone: +855 12 345 678</p>
          <p>🌐 Website: www.store.com</p>
        </div>
      </div>
    </div>
  )
}

export default SidebarDetail