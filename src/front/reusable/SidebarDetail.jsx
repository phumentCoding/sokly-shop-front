"use client"

import { AlertTriangle, Shield, Star } from "lucide-react"

const SidebarDetail = () => {
  return (
    <div className="space-y-6">
      {/* Payment Method */}
      <section className="bg-white border-2 border-blue-300 rounded-xl shadow-sm p-5">
        <h3 className="text-center text-lg font-bold text-blue-700 mb-4 pb-2 border-b border-blue-200">
          វិធីសាស្រ្តបង់ប្រាក់ដំបូង
        </h3>
        <ol className="space-y-3 text-sm">
          {["តេស្តប្រាក់ដំបូង", "អ្នកស្រុកបានបង់ប្រាក់", "ដឹកជញ្ជូនទៅកាន់អ្នក", "ទទួលបានផលិតផលរបស់អ្នក"].map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-semibold text-xs flex items-center justify-center mt-0.5">
                {i + 1}
              </div>
              <p className="text-gray-800">{step}</p>
            </li>
          ))}
        </ol>
        <div className="mt-5 border-t pt-3 text-sm text-gray-600 space-y-1">
          <p>សូមអរគុណសម្រាប់ការជឿទុកចិត្តលើហាងរបស់យើង។។</p>
          <p className="text-blue-600 font-medium">*Cambodian only (Bank Policy)!</p>
        </div>
      </section>

      {/* Warning Section */}
      <section className="bg-red-50 border-2 border-red-200 rounded-xl p-5 space-y-4">
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <img
              src={
                i === 1
                  ? "https://www.soklyphone.com/storage/Advertises/2025/04-04-2025/face-page-1744167472AoQ7V.jpg"
                  : "https://www.soklyphone.com/storage/Advertises/2025/07-07-2025/iphone-16-pro-max-8-7-25-1751940478L7ssv.jpg"
              }
              className="rounded-lg w-24 object-cover border border-red-300"
            />
          </div>
        ))}
        <p className="text-xs text-red-700">
          សូមប្រុងប្រយ័ត្នចំពោះគេហទំព័រក្លែងក្លាយ និងការបោកប្រាស់។
        </p>
      </section>

      {/* Special Products */}
      <section className="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-200 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-2">
          <Star className="w-5 h-5 text-orange-600" />
          <h4 className="font-semibold text-orange-700 text-base">ផលិតផលពិសេស</h4>
        </div>
        {[
          {
            name: "iPhone 15 Pro Max",
            image: "https://www.soklyphone.com/storage/Advertises/2025/07-07-2025/iphone-15-15-plus-04-07-25-1751622501V4yA4.jpg",
            price: "$1,099",
            oldPrice: "$1,299",
          },
          {
            name: "Samsung Galaxy S24",
            image: "https://www.soklyphone.com/storage/Advertises/2025/07-07-2025/iphone-16e-04-07-25-175162244257SHS.jpg",
            price: "$899",
            oldPrice: "$1,099",
          },
        ].map((item, i) => (
          <div key={i} className="bg-white border border-orange-200 rounded-lg p-3 flex items-center gap-3">
            <div className="w-14 h-14 rounded overflow-hidden bg-gray-100 border">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h5 className="text-sm font-medium text-gray-800">{item.name}</h5>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-red-600 font-semibold">{item.price}</span>
                <span className="text-gray-400 line-through text-xs">{item.oldPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Contact Info */}
      <section className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-semibold text-blue-700">ទំនាក់ទំនងផ្លូវការ</span>
        </div>
        <div className="text-sm text-blue-700 space-y-1 pl-7">
          <p>📱 Telegram: @officialstore</p>
          <p>📞 Phone: +855 12 345 678</p>
          <p>🌐 Website: www.store.com</p>
        </div>
      </section>
    </div>
  )
}

export default SidebarDetail
