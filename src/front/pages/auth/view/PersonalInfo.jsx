import { useState } from "react"
import { User, Calendar, Mail, Phone } from "lucide-react"

const ProfilePage = () => {
  const [avatar, setAvatar] = useState(null)

  return (
    <div className="flex min-h-screen bg-gray-50 p-6">
      {/* Sidebar */}
      <div className="w-64 bg-white rounded-xl shadow p-4">
        <div className="flex flex-col items-center text-center mb-6">
          <img
            src="https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-1/456268015_1066171398355955_6754295906527611875_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=mqkhLa22xjUQ7kNvwGC-qMp&_nc_oc=AdlhImvxjlJo3238Gb50iusK6f4Aw6FNpq9kGDdUEPxdcPO4zsvSBC2iPjBTvM5Blv4&_nc_zt=24&_nc_ht=scontent.fpnh24-1.fna&_nc_gid=HCNZygUrL1Oh-45xff1Fow&oh=00_AfQlKyCdk-hrndZugVuXAaPW4i0dJAOMA3Yid0NQqPXQHA&oe=6884532B"
            alt="avatar"
            className="w-16 h-16 rounded-full mb-2"
          />
          <h2 className="font-semibold text-sm">YANG CHANTHOROMY</h2>
          <p className="text-xs text-blue-600">tonyja2460@gmail.com</p>
        </div>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-2 text-gray-600 hover:text-blue-600 cursor-pointer">
            <span>📦</span> My Order
          </li>
          <li className="flex items-center gap-2 text-gray-600 hover:text-blue-600 cursor-pointer">
            <span>🎟️</span> My Coupon
          </li>
          <li className="flex items-center gap-2 text-gray-600 hover:text-blue-600 cursor-pointer">
            <span>❤️</span> Favorite
          </li>
          <li className="flex items-center gap-2 text-gray-600 hover:text-blue-600 cursor-pointer">
            <span>👫</span> Refer A Friend
          </li>
          <li className="flex items-center gap-2 text-blue-600 font-semibold cursor-pointer">
            <span>👤</span> Personal Information
          </li>
          <li className="flex items-center gap-2 text-gray-600 hover:text-blue-600 cursor-pointer">
            <span>🔒</span> Change Password
          </li>
          <li className="flex items-center gap-2 text-gray-600 hover:text-red-500 cursor-pointer">
            <span>🚪</span> Logout
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-8 bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold text-blue-900 mb-6">Personal Information</h2>

        {/* Avatar Section */}
        <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg mb-6">
          <img
            src="https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-1/456268015_1066171398355955_6754295906527611875_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=mqkhLa22xjUQ7kNvwGC-qMp&_nc_oc=AdlhImvxjlJo3238Gb50iusK6f4Aw6FNpq9kGDdUEPxdcPO4zsvSBC2iPjBTvM5Blv4&_nc_zt=24&_nc_ht=scontent.fpnh24-1.fna&_nc_gid=HCNZygUrL1Oh-45xff1Fow&oh=00_AfQlKyCdk-hrndZugVuXAaPW4i0dJAOMA3Yid0NQqPXQHA&oe=6884532B"
            alt="avatar"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <button className="text-blue-600 font-medium hover:underline">🔁 Change avatar</button>
            <p className="text-xs text-gray-500">Upload JPG, PNG image required.</p>
          </div>
        </div>

        {/* Form Fields */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-700">Full Name</label>
            <div className="relative">
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2 pl-10"
                value="YANG CHANTHOROMY"
              />
              <User className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-700">Birthday</label>
            <div className="relative">
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2 pl-10"
                value="10-Jul-2025"
              />
              <Calendar className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-700">Email</label>
            <div className="relative">
              <input
                type="email"
                className="w-full border rounded-md px-3 py-2 pl-10"
                value="tonyja2460@gmail.com"
              />
              <Mail className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-700">Phone Number</label>
            <div className="relative">
              <input
                type="tel"
                className="w-full border rounded-md px-3 py-2 pl-10"
                placeholder="Enter your phone number"
              />
              <Phone className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="text-sm text-gray-700">Address</label>
            <textarea
              className="w-full border rounded-md px-3 py-2"
              placeholder="Enter your address"
              rows={3}
            ></textarea>
          </div>
        </form>

        <div className="mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Update
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
