import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slide = ({ items }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="bg-white rounded-lg border p-8">
        <div className="aspect-[4/3] flex items-center justify-center">
          <img
            src={items[selectedImage]?.image || "/placeholder.svg"}
            alt="Product Image"
            className="object-contain max-h-[400px] w-auto"
          />
        </div>
      </div>

      {/* Thumbnail & Navigation */}
      <div className="flex space-x-2 overflow-x-auto">
        {/* Prev Button */}
        <button
          onClick={() => setSelectedImage(Math.max(0, selectedImage - 1))}
          className="shrink-0 p-2 border rounded bg-transparent hover:bg-gray-100"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Thumbnails */}
        {items.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setSelectedImage(index)}
            className={`shrink-0 w-20 h-16 rounded-lg border-2 overflow-hidden ${
              selectedImage === index
                ? "border-blue-500"
                : "border-gray-200"
            }`}
          >
            <img
              src={item.image || "/placeholder.svg"}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() =>
            setSelectedImage(Math.min(items.length - 1, selectedImage + 1))
          }
          className="shrink-0 p-2 border rounded bg-transparent hover:bg-gray-100"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Slide;
