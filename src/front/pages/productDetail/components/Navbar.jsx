const Navbar = ({items}) => {
    return (
        <div>
            <ul>
                {items.map((item,index) => {
                    return (
                        <li>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Navbar;