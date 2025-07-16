const Navbar = ({ items }) => {
  return (
    <div className="w-full">
      <div className="w-full sm:max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-600">
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="hover:text-blue-600 cursor-pointer truncate">{item}</span>
              {index < items.length - 1 && <span className="mx-1 sm:mx-2">/</span>}
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Navbar
