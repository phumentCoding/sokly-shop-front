import { Search, Heart, ShoppingCart } from "lucide-react"

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <div>
              <h2 className="font-bold text-gray-900">StyleStore</h2>
              <p className="text-xs text-gray-500">Premium Products</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6 ml-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Products
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Categories
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Deals
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <Heart className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">Login</button>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">Sign Up</button>
        </div>
      </div>
    </header>
  )
}

export default Header
