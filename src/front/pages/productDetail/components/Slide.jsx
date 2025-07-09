const Slide = ({ items = [], onImageClick = () => {}, currentIndex = 0 }) => {
  return (
    <div className="flex overflow-x-auto gap-2 pb-2">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex-shrink-0 border-2 rounded-lg cursor-pointer transition-colors ${
            index === currentIndex ? "border-blue-500" : "border-gray-200 hover:border-blue-400"
          }`}
          onClick={() => onImageClick(index)}
        >
          <img
            src={item.image || "https://via.placeholder.com/80x80"}
            alt={item.alt || `Thumbnail ${index + 1}`}
            className="w-20 h-20 object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Slide;
