"use client"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Search, User, Menu, Phone, ChevronDown, X, ShoppingCart, Bell } from "lucide-react"

const Navbar = () => {
  const navigate = useNavigate()
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null)
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

  const toggleMobileDropdown = (dropdown) => {
    setActiveMobileDropdown(activeMobileDropdown === dropdown ? null : dropdown)
  }

  const handleNavigation = (category) => {
    navigate(`/product/show/${category.toLowerCase().replace(/\s+/g, "-")}`)
    setActiveDropdown(null)
    setMobileMenuOpen(false)
  }

  const dropdownContent = {
    product: {
      title: "Products",
      categories: [
        {
          name: "Mobile Devices",
          items: [
            { name: "Mobile Phone", route: "mobile-phone" },
            { name: "Tablet", route: "tablet" },
            { name: "SmartWatch", route: "smartwatch" },
          ],
        },
        {
          name: "Computers",
          items: [
            { name: "Laptop", route: "laptop" },
            { name: "Desktop", route: "desktop" },
            { name: "Gaming PC", route: "gaming-pc" },
          ],
        },
      ],
    },
    accessories: {
      title: "Accessories",
      categories: [
        {
          name: "Phone Accessories",
          items: [
            { name: "Cases & Covers", route: "cases-covers" },
            { name: "Screen Protectors", route: "screen-protectors" },
            { name: "Chargers", route: "chargers" },
            { name: "Headphones", route: "headphones" },
          ],
        },
        {
          name: "Computer Accessories",
          items: [
            { name: "Keyboards", route: "keyboards" },
            { name: "Mice", route: "mice" },
            { name: "Monitors", route: "monitors" },
            { name: "Speakers", route: "speakers" },
          ],
        },
      ],
    },
    secondhand: {
      title: "Second Hand",
      categories: [
        {
          name: "Refurbished Devices",
          items: [
            { name: "Used Phones", route: "used-phones" },
            { name: "Used Laptops", route: "used-laptops" },
            { name: "Used Tablets", route: "used-tablets" },
          ],
        },
      ],
    },
    special: {
      title: "Special Offers",
      categories: [
        {
          name: "Current Deals",
          items: [
            { name: "Flash Sale", route: "flash-sale" },
            { name: "Bundle Offers", route: "bundle-offers" },
            { name: "Clearance", route: "clearance" },
            { name: "New Arrivals", route: "new-arrivals" },
          ],
        },
      ],
    },
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
            <div className="flex-shrink-0 flex items-center">
              <button onClick={() => navigate("/")}>
                <img
                  src="https://www.soklyphone.com/storage/image-2022-07-02-164325-1656755040dyQxA.jpg"
                  alt="Sokly Logo"
                  className="h-10 lg:h-14 object-contain cursor-pointer"
                />
              </button>
            </div>

            <div className="hidden md:flex flex-1 max-w-lg mx-4 relative items-center">
              {scrollY > 50 && (
                <button
                  onClick={() => setShowMenu((prev) => !prev)}
                  className="absolute left-[35rem] top-1/2 -translate-y-1/2 z-10 text-gray-600 hover:text-gray-900 p-2 rounded-md hover:bg-gray-100 transition"
                >
                  {showMenu ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                </button>
              )}
              <div className={`w-full relative ${scrollY > 50 ? "pl-8" : ""}`}>
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

            <div className="flex items-center space-x-10 ">
               <ShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer" />
                <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
               <div
                  onClick={() => navigate("/account/profile")}
                  className="hidden lg:flex items-center space-x-2 text-gray-700 cursor-pointer hover:text-blue-600 transition"
                >
                  {/* Profile Image */}
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Zv4DbL3EhQKJhsG3tKFkFp7U4VxZqa.png?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=mqkhLa22xjUQ7kNvwGC-qMp&_nc_oc=AdlhImvxjlJo3238Gb50iusK6f4Aw6FNpq9kGDdUEPxdcPO4zsvSBC2iPjBTvM5Blv4&_nc_zt=24&_nc_ht=scontent.fpnh24-1.fna&_nc_gid=HCNZygUrL1Oh-45xff1Fow&oh=00_AfQlKyCdk-hrndZugVuXAaPW4i0dJAOMA3Yid0NQqPXQHA&oe=6884532B" // Replace with the actual path to your image
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full object-cover border border-gray-300"
                  />

                  {/* Text Info */}
                  <div className="text-sm">
                    <div className="font-medium">Welcome</div>
                    <div className="text-gray-500">Phal Raksa</div>
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
          {["product", "accessories", "secondhand", "special"].map((key) => (
            <div key={key}>
              <button
                onClick={() => toggleMobileDropdown(key)}
                className="flex items-center justify-between w-full py-2 hover:text-blue-200 transition-colors"
              >
                <span className="capitalize">{key === "special" ? "Special Offer" : key}</span>
                <ChevronDown
                  className={`h-4 w-4 transform transition-transform ${
                    activeMobileDropdown === key ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeMobileDropdown === key && (
                <div className="pl-4 py-2 space-y-2 bg-blue-700 rounded-md mt-2">
                  {dropdownContent[key].categories.map((category, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="font-semibold text-blue-200 text-sm">{category.name}</div>
                      {category.items.map((item, itemIdx) => (
                        <button
                          key={itemIdx}
                          onClick={() => handleNavigation(item.name)}
                          className="block text-sm py-1 hover:text-blue-100 transition-colors w-full text-left"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button
            onClick={() => navigate("/preorder")}
            className="block py-2 hover:text-blue-200 transition-colors w-full text-left"
          >
            Pre Order
          </button>
          <button
            onClick={() => navigate("/news")}
            className="block py-2 hover:text-blue-200 transition-colors w-full text-left"
          >
            News
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="block py-2 hover:text-blue-200 transition-colors w-full text-left"
          >
            Contact us
          </button>
        </div>
      )}

      {/* Desktop Dropdown Menu */}
      {(showMenu || scrollY <= 50) && (
        <nav
          className={`bg-blue-600 text-white hidden lg:block z-40 transition-all duration-300 ${
            showMenu && scrollY > 50 ? "sticky top-20" : ""
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-8 h-12 relative">
              {["product", "accessories", "secondhand", "special"].map((key) => (
                <div key={key} className="relative group">
                  <button
                    onClick={() => toggleDropdown(key)}
                    onMouseEnter={() => setActiveDropdown(key)}
                    className="flex items-center space-x-1 hover:text-blue-200 transition-colors py-3"
                  >
                    <span className="capitalize">{key === "special" ? "Special Offer" : key}</span>
                    <ChevronDown
                      className={`h-4 w-4 transform transition-transform ${activeDropdown === key ? "rotate-180" : ""}`}
                    />
                  </button>
                  {activeDropdown === key && (
                    <div
                      className="absolute top-full left-0 mt-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="p-4 space-y-4">
                        {dropdownContent[key].categories.map((category, idx) => (
                          <div key={idx}>
                            <h4 className="font-medium text-gray-900 mb-2">{category.name}</h4>
                            <div className="space-y-1">
                              {category.items.map((item, itemIdx) => (
                                <button
                                  key={itemIdx}
                                  onClick={() => handleNavigation(item.name)}
                                  className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition-colors w-full text-left"
                                >
                                  {item.name}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <button onClick={() => navigate("/preorder")} className="hover:text-blue-200 transition-colors">
                Pre Order
              </button>
              <button onClick={() => navigate("/news")} className="hover:text-blue-200 transition-colors">
                News
              </button>
              <button onClick={() => navigate("/contact")} className="hover:text-blue-200 transition-colors">
                Contact us
              </button>
            </div>
          </div>
        </nav>
      )}
    </>
  )
}

export default Navbar
