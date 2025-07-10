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
    </div>
  )
}

export default Slide
