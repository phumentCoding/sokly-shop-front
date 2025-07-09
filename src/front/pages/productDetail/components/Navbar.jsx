const Navbar = ({ items }) => {
    return (
        <div>
            <ul>
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <nav className="text-sm text-gray-600">

                        {
                            items.map((value,index) => {
                                return (
                                    <>
                                        <span className="hover:text-blue-600 cursor-pointer">{value}</span>
                                        <span className="mx-2">/</span>
                                    </>
                                )
                            })
                        }

                        
                    </nav>
                </div>
            </ul>
        </div>
    )
}
export default Navbar;