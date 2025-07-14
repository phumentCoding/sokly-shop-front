"use client"

const Nabar = ({ items }) => {
  return (
    <div className="w-full sm:max-w-7xl mx-auto px-4 sm:px-6 py-4">
      <nav className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-600">
        <span className="hover:text-blue-600 cursor-pointer truncate">Home</span>
        <span className="mx-1 sm:mx-2">.</span>
        <span className="hover:text-blue-600 cursor-pointer truncate">Prodeucts</span>
        <span className="mx-1 sm:mx-2">.</span>
        <span className="hover:text-blue-600 cursor-pointer truncate">Apple</span>
        <span className="mx-1 sm:mx-2">.</span>
        <span className="text-gray-900 font-medium truncate">iphone</span>
      </nav>
    </div>
  )
}

export default Nabar
