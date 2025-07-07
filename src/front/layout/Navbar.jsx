import { useState } from "react"
import { Search, User, Menu, X, Phone, ChevronDown } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <>
      {/* Top Header */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="hidden md:flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Tel: 023 216 725/6, 078 311 111, 092 111 168, 078 911 166</span>
              </div>
              <div className="md:hidden flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>023 216 725/6</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-blue-600">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="hidden sm:inline">Sokly Phone Shop</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl lg:text-2xl font-bold text-blue-600">SOKLY</h1>
                  <p className="text-xs text-gray-500">Your Phone Choice</p>
                </div>
              </div>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-0 top-0 h-full px-6 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Account & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Account - Desktop */}
              <div className="hidden lg:flex items-center space-x-2 text-gray-700">
                <User className="h-5 w-5" />
                <div className="text-sm">
                  <div className="font-medium">My Account</div>
                  <div className="text-gray-500">Register or Login</div>
                </div>
              </div>

              {/* Search Icon - Mobile */}
              <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
                <Search className="h-5 w-5" />
              </button>

              {/* Account Icon - Mobile */}
              <button className="lg:hidden p-2 text-gray-600 hover:text-gray-900">
                <User className="h-5 w-5" />
              </button>

              {/* Mobile Menu Button */}
              <button onClick={toggleMenu} className="lg:hidden p-2 text-gray-600 hover:text-gray-900">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-blue-600 text-white rounded-r-md">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 h-12">
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
                <span>Product</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
                <span>Accessories</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
                <span>Secondhand</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
                <span>Special Offer</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <a href="#" className="hover:text-blue-200 transition-colors">
              Pre Order
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              News
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              Contact us
            </a>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 space-y-2">
              <div>
                <button
                  onClick={() => toggleDropdown("product")}
                  className="flex items-center justify-between w-full py-2 hover:text-blue-200 transition-colors"
                >
                  <span>Product</span>
                  <ChevronDown
                    className={`h-4 w-4 transform transition-transform ${activeDropdown === "product" ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              <div>
                <button
                  onClick={() => toggleDropdown("accessories")}
                  className="flex items-center justify-between w-full py-2 hover:text-blue-200 transition-colors"
                >
                  <span>Accessories</span>
                  <ChevronDown
                    className={`h-4 w-4 transform transition-transform ${activeDropdown === "accessories" ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              <div>
                <button
                  onClick={() => toggleDropdown("secondhand")}
                  className="flex items-center justify-between w-full py-2 hover:text-blue-200 transition-colors"
                >
                  <span>Secondhand</span>
                  <ChevronDown
                    className={`h-4 w-4 transform transition-transform ${activeDropdown === "secondhand" ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              <div>
                <button
                  onClick={() => toggleDropdown("special")}
                  className="flex items-center justify-between w-full py-2 hover:text-blue-200 transition-colors"
                >
                  <span>Special Offer</span>
                  <ChevronDown
                    className={`h-4 w-4 transform transition-transform ${activeDropdown === "special" ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              <a href="#" className="block py-2 hover:text-blue-200 transition-colors">
                Pre Order
              </a>
              <a href="#" className="block py-2 hover:text-blue-200 transition-colors">
                News
              </a>
              <a href="#" className="block py-2 hover:text-blue-200 transition-colors">
                Contact us
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar