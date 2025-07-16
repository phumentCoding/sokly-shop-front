"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Play } from "lucide-react"

const Specification = ({ productData }) => {
  const [expandedSections, setExpandedSections] = useState({
    network: true,
    launch: false,
    body: false,
    display: false,
    platform: false,
    memory: false,
    camera: false,
    sound: false,
  })

  const toggleSection = (section) =>
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }))

  const videoId = "Lhmycs8vTUM"
  const handleVideoClick = () => window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank")

  const specifications = {
    network: { title: "NETWORK", details: [{ label: "Technology", value: "GSM / HSPA / LTE" }] },
    launch: { title: "LAUNCH", details: [{ label: "Announced", value: "2024, September" }] },
    body: { title: "BODY", details: [{ label: "Dimensions", value: "46 x 46 x 10.5 mm" }] },
    display: { title: "DISPLAY", details: [{ label: "Type", value: "AMOLED" }] },
    platform: { title: "PLATFORM", details: [{ label: "OS", value: "HarmonyOS 4.0" }] },
    memory: { title: "MEMORY", details: [{ label: "Internal", value: "32GB, 4GB RAM" }] },
    camera: { title: "CAMERA", details: [{ label: "Main", value: "No camera" }] },
    sound: { title: "SOUND", details: [{ label: "Loudspeaker", value: "Yes" }] },
  }

  return (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 uppercase">Specification</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {Object.entries(specifications).map(([key, section]) => (
            <div key={key} className="p-6">
              <button onClick={() => toggleSection(key)} className="flex items-center justify-between w-full">
                <h3 className="text-lg font-semibold text-blue-600 uppercase">{section.title}</h3>
                {expandedSections[key] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {expandedSections[key] && (
                <div className="mt-4 space-y-3">
                  {section.details.map((detail, index) => (
                    <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div className="font-medium text-gray-700 text-sm">{detail.label}</div>
                      <div className="sm:col-span-2 text-gray-600 text-sm">: {detail.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Review Video Section */}
      <div className="bg-white border rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 uppercase">Review Video</h2>
        </div>
        <div className="p-6">
          <div
            className="relative rounded-lg overflow-hidden bg-black bg-opacity-20 cursor-pointer group"
            onClick={handleVideoClick}
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Review Video Thumbnail"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:scale-110 transition-all">
                <Play className="w-6 h-6 text-gray-800" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
              8:45
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-900">{productData.name} - Full Review</h3>
            <p className="text-gray-600 text-sm mt-1">Discover the features, design, and performance in our review.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Specification
