const Navbar = ({items}) => {
    return (
        <div>
                                <ul>
                 <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="text-sm text-gray-600">
          <span className="hover:text-blue-600 cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span className="hover:text-blue-600 cursor-pointer">Smart Watches</span>
          <span className="mx-2">/</span>
          <span className="hover:text-blue-600 cursor-pointer">Huawei</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Huawei Watch 5 46mm</span>
        </nav>
      </div>
            </ul>
        </div>
    )
}
export default Navbar;