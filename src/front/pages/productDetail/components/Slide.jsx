const Slide = ({items}) => {
    return (
    <div className="flex overflow-x-auto gap-2 pb-2">
      {items.map((item, index) => (
        <div key={index} className="flex-shrink-0">
          <img
            src={item.image || "https://via.placeholder.com/80x80"}
            alt={item.alt}
            className="w-20 h-20 cborder-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition-colors object-cover"
          />
        </div>
      ))}
    </div>
  )
}

export default Slide
