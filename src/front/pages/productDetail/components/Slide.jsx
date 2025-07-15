"use client"
import { useState, useEffect } from "react"

const Slide = ({ images, selectedColor }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [currentImages, setCurrentImages] = useState(images)

  useEffect(() => {
    setCurrentImage(0)
    setCurrentImages(images)
  }, [images])

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % currentImages.length)
  }

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50">
      <div className="relative w-full max-w-md h-64 sm:h-80 md:h-96">
        <img
          src={currentImages[currentImage] || "/placeholder.svg"}
          alt={`${selectedColor || "Product"} view ${currentImage + 1} of ${currentImages.length}`}
          className="w-full h-full object-contain rounded-lg cursor-pointer transition-opacity duration-300"
          onClick={nextImage}
          onError={(e) => {
            e.target.src = "/placeholder.svg"
          }}
        />
        {currentImages.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {currentImages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === currentImage ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        )}
        {currentImages.length > 1 && (
          <div className="absolute top-1/2 transform -translate-y-1/2 left-2 right-2 flex justify-between pointer-events-none">
            <button
              className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md pointer-events-auto hover:bg-white transition-colors"
              onClick={() => setCurrentImage((prev) => (prev - 1 + currentImages.length) % currentImages.length)}
            >
              ←
            </button>
            <button
              className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md pointer-events-auto hover:bg-white transition-colors"
              onClick={nextImage}
            >
              →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Slide
