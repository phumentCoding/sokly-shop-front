const Navbar = ({ items }) => {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            <span
              className={
                index === items.length - 1 ? "text-gray-900 font-medium" : "hover:text-blue-600 cursor-pointer"
              }
            >
              {item}
            </span>
            {index < items.length - 1 && <span className="mx-2 text-gray-400">•</span>}
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
