const Navbar = ({ items }) => {
  return (
    <div className="w-full">
      <div className="w-full sm:max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-600">
          <span className="hover:text-blue-600 cursor-pointer truncate">Home</span>
          <span className="mx-1 sm:mx-2">/</span>
          <span className="hover:text-blue-600 cursor-pointer truncate">Smart Watches</span>
          <span className="mx-1 sm:mx-2">/</span>
          <span className="hover:text-blue-600 cursor-pointer truncate">Huawei</span>
          <span className="mx-1 sm:mx-2">/</span>
          <span className="text-gray-900 font-medium truncate">Huawei Watch 5 46mm</span>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
