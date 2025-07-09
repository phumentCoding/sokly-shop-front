"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Play, ExternalLink } from "lucide-react"

const Specification = () => {
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

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  // Video functionality
  const videoId = "Lhmycs8vTUM"
  const handleVideoClick = () => {
    // Open YouTube video in new tab
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank")
  }

  const specifications = {
    network: {
      title: "NETWORK",
      details: [
        { label: "Technology", value: "GSM / HSPA / LTE" },
        { label: "2GBands", value: "GSM 850 / 900 / 1800 / 1900 - cellular model only" },
        { label: "3GBands", value: "HSDPA 800 / 850 / 900 / 1700(AWS) / 1900 / 2100 - cellular model only" },
        {
          label: "4GBands",
          value: "1, 2, 3, 4, 5, 7, 8, 9, 18, 19, 20, 26, 28, 34, 38, 39, 40, 41, 66 - cellular model only",
        },
        { label: "Speed", value: "HSPA, LTE - cellular model only" },
      ],
    },
    launch: {
      title: "LAUNCH",
      details: [
        { label: "Announced", value: "2024, September" },
        { label: "Status", value: "Available. Released 2024, September" },
      ],
    },
    body: {
      title: "BODY",
      details: [
        { label: "Dimensions", value: "46 x 46 x 10.5 mm" },
        { label: "Weight", value: "48g (without strap)" },
        { label: "Build", value: "Aluminum alloy frame, ceramic back" },
        { label: "Water resistance", value: "5ATM + IP68" },
      ],
    },
    display: {
      title: "DISPLAY",
      details: [
        { label: "Type", value: "AMOLED, 16M colors, Always-on display" },
        { label: "Size", value: '1.5" (466 x 466 pixels)' },
        { label: "Resolution", value: "466 x 466 pixels (~311 ppi density)" },
        { label: "Protection", value: "Sapphire crystal glass" },
      ],
    },
    platform: {
      title: "PLATFORM",
      details: [
        { label: "OS", value: "HarmonyOS 4.0" },
        { label: "Chipset", value: "Kirin A1" },
        { label: "CPU", value: "Dual-core" },
        { label: "GPU", value: "Mali-G52 MP1" },
      ],
    },
    memory: {
      title: "MEMORY",
      details: [
        { label: "Internal", value: "32GB storage, 4GB RAM" },
        { label: "Card slot", value: "No" },
      ],
    },
    camera: {
      title: "CAMERA",
      details: [
        { label: "Main", value: "No camera" },
        { label: "Features", value: "Remote camera control for connected phone" },
        { label: "Video", value: "No" },
      ],
    },
    sound: {
      title: "SOUND",
      details: [
        { label: "Loudspeaker", value: "Yes" },
        { label: "3.5mm jack", value: "No" },
        { label: "Features", value: "Bluetooth audio, Voice assistant" },
      ],
    },
  }

  return (
    <div className="space-y-6">
      {/* Disclaimer and Source */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-gray-700 mb-2">
          We can not guarantee that the information on this page is 100% correct.
        </p>
        <div className="flex items-center space-x-1 text-sm">
          <span className="font-medium text-gray-700">Source:</span>
          <a
            href="https://gsmarena.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 flex items-center space-x-1"
          >
            <span>GSMArena</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">SPECIFICATION</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {Object.entries(specifications).map(([key, section]) => (
            <div key={key} className="p-6">
              <button onClick={() => toggleSection(key)} className="flex items-center justify-between w-full text-left">
                <h3 className="text-lg font-semibold text-blue-600 uppercase">{section.title}</h3>
                {expandedSections[key] ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {expandedSections[key] && (
                <div className="mt-4 space-y-3">
                  {section.details.map((detail, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      <div className="font-medium text-gray-700">{detail.label}</div>
                      <div className="md:col-span-2 text-gray-600">: {detail.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Review Video Section */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">REVIEW VIDEO</h2>
        </div>
        <div className="p-6">
          <div
            className="relative rounded-lg overflow-hidden bg-gray-900 group cursor-pointer"
            onClick={handleVideoClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                handleVideoClick()
              }
            }}
            aria-label="Play Huawei Watch 5 Review Video"
          >
            <img
              src="https://img.youtube.com/vi/Lhmycs8vTUM/maxresdefault.jpg"
              alt="Huawei Watch 5 Review Video - X-TAP Technology"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300">
              <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:bg-opacity-100 transition-all duration-300 transform group-hover:scale-110">
                <Play className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" />
              </div>
            </div>
            {/* Video Duration Badge */}
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
              8:45
            </div>
            {/* Technology Highlight */}
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              X-TAP Technology
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Huawei Watch 5 46mm - Complete Review & X-TAP Technology Demo
            </h3>
            <p className="text-gray-600 text-sm">
              Watch our comprehensive review of the Huawei Watch 5 46mm featuring the innovative X-TAP technology,
              health monitoring capabilities, and performance analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Specification
