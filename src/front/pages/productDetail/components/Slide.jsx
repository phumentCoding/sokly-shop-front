"use client"

import { useState } from "react"

const Slide = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square bg-gradient-to-br from-orange-100 via-purple-50 to-purple-100 rounded-xl overflow-hidden shadow-inner border border-gray-200">
        <img
          src={
            images[currentImage] ||
            "/placeholder.svg"
          }
          alt="Product main view"
          className="w-full h-full object-contain p-4"
        />
      </div>

      {/* Thumbnail Navigation - Same width as main image */}
      <div className="relative">
        <div className="flex items-center justify-center gap-3">
          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors bg-white shadow-sm"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Thumbnails Container */}
          <div className="flex gap-2 overflow-hidden">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg border-2 overflow-hidden transition-all duration-200 bg-white ${
                  currentImage === index
                    ? "border-blue-500 ring-2 ring-blue-200 shadow-md"
                    : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
                }`}
              >
                <img
                  src={image || `/placeholder.svg?height=64&width=64&query=Sony+speaker+view+${index + 1}`}
                  alt={`Product view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors bg-white shadow-sm"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Slide
