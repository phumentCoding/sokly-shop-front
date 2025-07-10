<<<<<<< HEAD
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
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full">
        <img
          src={currentImages[currentImage] || "/placeholder.svg"}
          alt={`${selectedColor || "Product"} view ${currentImage + 1} of ${currentImages.length}`}
          className="w-full h-full object-contain p-4 transition-opacity duration-300 cursor-pointer"
          onClick={nextImage}
          onError={(e) => {
            e.target.src = "/placeholder.svg"
          }}
        />
      </div>
=======
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
>>>>>>> c3277b5e38ab32307957658b8d5af78030e4a0b9
    </div>
  )
}

export default Slide
