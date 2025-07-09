"use client"

import { useState } from "react"

const Specification = ({ specificationData }) => {
  const [expandedSections, setExpandedSections] = useState({
    aboutThisItem: true,
    ecoAndEnergy: false,
    application: false,
    sound: false,
    interface: false,
    bluetooth: false,
    sizeAndWeight: false,
    generalFeatures: false,
  })

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const sections = [
    { key: "aboutThisItem", title: "About This Item", data: specificationData?.aboutThisItem || [] },
    { key: "ecoAndEnergy", title: "Eco and energy saving", data: specificationData?.ecoAndEnergy || [] },
    { key: "application", title: "Application", data: specificationData?.application || [] },
    { key: "sound", title: "Sound", data: specificationData?.sound || [] },
    { key: "interface", title: "Interface", data: specificationData?.interface || [] },
    { key: "bluetooth", title: "Bluetooth", data: specificationData?.bluetooth || [] },
    { key: "sizeAndWeight", title: "Size and Weight", data: specificationData?.sizeAndWeight || [] },
    { key: "generalFeatures", title: "General Features", data: specificationData?.generalFeatures || [] },
  ]

  return (
    <div className="space-y-0 border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900">SPECIFICATION</h2>
      </div>

      {sections.map((section, index) => (
        <div key={section.key} className={index !== sections.length - 1 ? "border-b border-gray-200" : ""}>
          <button
            onClick={() => toggleSection(section.key)}
            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="text-lg font-medium text-blue-600">{section.title}</span>
            <svg
              className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${
                expandedSections[section.key] ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {expandedSections[section.key] && (
            <div className="px-6 pb-6 space-y-3">
              {section.data.map((item, itemIndex) => (
                <div key={itemIndex} className="flex gap-4">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Specification
