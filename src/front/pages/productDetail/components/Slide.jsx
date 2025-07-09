const Slide = ({items}) => {
    return  (
        <div>
            <ul>
                {
                    items.map((item,index) => {
                        return (
                            <li>{item.image}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Slide;