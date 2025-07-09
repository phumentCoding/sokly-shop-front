"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Smartphone, Camera, Battery } from "lucide-react"
import Slide from "../components/Slide"
import PreOrder from "../components/PreOrder"
import Navbar from "../components/Navbar"
import Spicefication from "../components/Spicefication"
import SidebarDetail from "../components/SidebarDetail"

const ProductDetail = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Navigation items for the navbar
  const navItems = ["Home", "Products", "Smart Watches", "Accessories", "Support", "About"]

  const productImages = [
    { image: "https://via.placeholder.com/400x400", alt: "Huawei Watch 5 - Front View" },
    { image: "https://via.placeholder.com/400x400", alt: "Huawei Watch 5 - Side View" },
    { image: "https://via.placeholder.com/400x400", alt: "Huawei Watch 5 - Back View" },
    { image: "https://via.placeholder.com/400x400", alt: "Huawei Watch 5 - Angle View" },
    { image: "https://via.placeholder.com/400x400", alt: "Huawei Watch 5 - Profile View" },
  ]

  const categories = ["Huawei", "Smart Watch", "Mobile Phone", "Accessories"]

  const specifications = [
    { icon: <Smartphone className="w-6 h-6" />, label: '1.5"', description: "466x466 pixels" },
    { icon: <Camera className="w-6 h-6" />, label: "NOMP", description: "" },
    { icon: <Battery className="w-6 h-6" />, label: "867mAh", description: "" },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
  }

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <Navbar items={navItems} />

      {/* Breadcrumb Navigation */}
     

      {/* Main Product Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Product Images */}
            <div className="space-y-4">
              {/* Main Product Image */}
              <div className="relative bg-gray-50 rounded-lg overflow-hidden">
                <div className="aspect-square relative">
                  <img
                    src={productImages[currentImageIndex]?.image || "https://via.placeholder.com/500x500"}
                    alt="Huawei Watch 5 46mm"
                    className="w-full h-full object-contain p-8"
                  />
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Thumbnail Images */}
              <Slide items={productImages} onImageClick={handleThumbnailClick} currentIndex={currentImageIndex} />

              {/* Specifications */}
              <div className="flex justify-center space-x-8 py-6 border-t border-gray-200">
                {specifications.map((spec, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2 text-gray-600">{spec.icon}</div>
                    <div className="font-semibold text-lg">{spec.label}</div>
                    {spec.description && <div className="text-sm text-gray-500">{spec.description}</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Product Details */}
            <div className="space-y-6">
              {/* Product Title and Categories */}
              <div className="space-y-4">
                <h1 className="text-3xl font-bold text-gray-900">Huaweif Watch 5 46mm</h1>

                {/* Category Tags */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {/* PreOrder Component */}
              <PreOrder />
            </div>
          </div>

          {/* Specifications and Sidebar Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Specifications - Takes 2/3 of the width */}
            <div className="lg:col-span-2">
              <Spicefication />
            </div>

            {/* Sidebar - Takes 1/3 of the width */}
            <div className="lg:col-span-1">
              <SidebarDetail />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
