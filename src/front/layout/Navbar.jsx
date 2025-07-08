import { useState, useEffect } from "react"
import { Search, User, Menu, Phone, ChevronDown, X } from "lucide-react"

const Navbar = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let lastScroll = window.scrollY
    let ticking = false

    const updateScrollState = () => {
      const currentScroll = window.scrollY
      setIsScrollingDown(currentScroll > lastScroll && currentScroll > 50)
      setScrollY(currentScroll)
      lastScroll = currentScroll
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState)
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <>
      {/* Top Header */}
      {scrollY <= 50 && (
        <div className="bg-gray-100 border-b border-gray-200 hidden lg:block">
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
      )}

      {/* Main Header */}
      <div className="bg-white shadow-sm lg:sticky lg:top-0 z-50 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center space-x-2">

                <img
                  src="https://www.soklyphone.com/storage/image-2022-07-02-164325-1656755040dyQxA.jpg"
                  alt="Sokly Logo"
                  className="h-10 lg:h-14 object-contain"
                />
              </div>
            </div>


            {/* Search + Hamburger */}
            <div className="hidden md:flex flex-1 max-w-lg mx-4 relative items-center">
              {scrollY > 50 && (
                <button
                  onClick={() => setShowMenu((prev) => !prev)}
                  className="absolute left-[35rem] top-1/2 -translate-y-1/2 z-10 text-gray-600 hover:text-gray-900 p-2 rounded-md hover:bg-gray-100 transition"
                >
                  {showMenu ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                </button>
              )}
              <div className={`w-full ${scrollY > 50 ? "pl-8" : ""}`}>
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

            {/* Account / Mobile */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2 text-gray-700">
                <User className="h-5 w-5" />
                <div className="text-sm">
                  <div className="font-medium">My Account</div>
                  <div className="text-gray-500">Register or Login</div>
                </div>
              </div>
              <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
                <Search className="h-5 w-5" />
              </button>
              <button className="lg:hidden p-2 text-gray-600 hover:text-gray-900">
                <User className="h-5 w-5" />
              </button>
              <button
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden py-4 px-4 bg-blue-600 text-white space-y-2">
          {['product', 'accessories', 'secondhand', 'special'].map((key) => (
            <div key={key}>
              <button
                onClick={() => toggleDropdown(key)}
                className="flex items-center justify-between w-full py-2 hover:text-blue-200 transition-colors"
              >
                <span className="capitalize">{key}</span>
                <ChevronDown className={`h-4 w-4 transform transition-transform ${activeDropdown === key ? "rotate-180" : ""}`} />
              </button>
            </div>
          ))}
          <a href="#" className="block py-2 hover:text-blue-200 transition-colors">Pre Order</a>
          <a href="#" className="block py-2 hover:text-blue-200 transition-colors">News</a>
          <a href="#" className="block py-2 hover:text-blue-200 transition-colors">Contact us</a>
        </div>
      )}

      {/* Desktop Nav */}
      {(showMenu || scrollY <= 50) && (
        <nav className={`bg-blue-600 text-white hidden lg:block z-40 transition-all duration-300 ${showMenu && scrollY > 50 ? "sticky top-20" : ""}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-8 h-12">
              <button className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
                <span>Product</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
                <span>Accessories</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
                <span>Secondhand</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
                <span>Special Offer</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <a href="#" className="hover:text-blue-200 transition-colors">Pre Order</a>
              <a href="#" className="hover:text-blue-200 transition-colors">News</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Contact us</a>
            </div>
          </div>
        </nav>
      )}
    </>
  )
}

export default Navbar