"use client"
import { useState } from "react"
import { ChevronDown, ChevronUp, Play, ExternalLink } from "lucide-react"

const Specification = ({ specificationData, productData }) => {
  const [expandedSections, setExpandedSections] = useState({
    network: true,
    launch: false,
    body: false,
    display: false,
    platform: false,
    memory: false,
    camera: false,
    sound: false,
    features: false,
  })

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  // Generate specifications based on product data
  const generateSpecifications = (product) => {
    if (!product) return {}

    const category = product.category?.toLowerCase()

    // Base specifications that apply to all products
    const baseSpecs = {
      general: {
        title: "GENERAL",
        details: [
          { label: "Product Name", value: product.title || "N/A" },
          { label: "Category", value: product.category || "N/A" },
          { label: "Brand", value: product.brand || "N/A" },
          { label: "Price", value: `$${product.price?.toFixed(2) || "N/A"}` },
          {
            label: "Monthly Payment",
            value: product.monthlyPrice ? `$${product.monthlyPrice.toFixed(2)}/mo for 12 mo.*` : "N/A",
          },
          { label: "Warranty", value: product.warranty ? `${product.warranty} Year(s)` : "1 Year" },
        ],
      },
    }

    // Category-specific specifications
    if (category === "smart watch") {
      return {
        ...baseSpecs,
        network: {
          title: "CONNECTIVITY",
          details: [
            { label: "Bluetooth", value: "Bluetooth 5.2" },
            { label: "Wi-Fi", value: "802.11 b/g/n" },
            { label: "GPS", value: "GPS, GLONASS, Galileo, BDS" },
            { label: "NFC", value: "Yes" },
            { label: "Cellular", value: "Optional LTE model available" },
          ],
        },
        body: {
          title: "DESIGN & BUILD",
          details: [
            { label: "Case Size", value: product.title?.includes("42mm") ? "42mm" : "46mm" },
            { label: "Weight", value: product.title?.includes("42mm") ? "35g" : "48g" },
            { label: "Material", value: "Aluminum alloy frame, ceramic back" },
            { label: "Water Resistance", value: "5ATM + IP68" },
            { label: "Strap", value: "Silicone sport band" },
          ],
        },
        display: {
          title: "DISPLAY",
          details: [
            { label: "Type", value: "AMOLED, Always-on display" },
            { label: "Size", value: product.title?.includes("42mm") ? '1.32"' : '1.5"' },
            { label: "Resolution", value: product.title?.includes("42mm") ? "466 x 466 pixels" : "466 x 466 pixels" },
            { label: "Protection", value: "Sapphire crystal glass" },
            { label: "Brightness", value: "1000 nits" },
          ],
        },
        features: {
          title: "HEALTH & FITNESS",
          details: [
            { label: "Heart Rate", value: "24/7 monitoring" },
            { label: "SpO2", value: "Blood oxygen monitoring" },
            { label: "Sleep Tracking", value: "Advanced sleep analysis" },
            { label: "Stress Monitoring", value: "Yes" },
            { label: "Workout Modes", value: "100+ sports modes" },
            { label: "ECG", value: "Electrocardiogram" },
          ],
        },
        platform: {
          title: "SOFTWARE & PERFORMANCE",
          details: [
            { label: "OS", value: "HarmonyOS 4.0" },
            { label: "Processor", value: "Kirin A1" },
            { label: "Storage", value: "32GB" },
            { label: "RAM", value: "4GB" },
            { label: "Battery Life", value: "Up to 14 days" },
          ],
        },
      }
    } else if (category === "tablet") {
      return {
        ...baseSpecs,
        network: {
          title: "CONNECTIVITY",
          details: [
            { label: "Wi-Fi", value: "802.11 a/b/g/n/ac" },
            { label: "Bluetooth", value: "5.0" },
            { label: "USB", value: "USB-C" },
            { label: "Cellular", value: product.title?.includes("4G") ? "4G LTE" : "Wi-Fi only" },
          ],
        },
        display: {
          title: "DISPLAY",
          details: [
            { label: "Size", value: "10.61 inches" },
            { label: "Resolution", value: "2000 x 1200 pixels" },
            { label: "Type", value: "IPS LCD" },
            { label: "Refresh Rate", value: "90Hz" },
          ],
        },
        platform: {
          title: "PERFORMANCE",
          details: [
            { label: "OS", value: "MIUI Pad 14" },
            { label: "Processor", value: "MediaTek Helio G99" },
            { label: "RAM", value: "4GB / 6GB" },
            { label: "Storage", value: "128GB" },
            { label: "Expandable", value: "microSD up to 1TB" },
          ],
        },
        camera: {
          title: "CAMERA",
          details: [
            { label: "Rear Camera", value: "8MP" },
            { label: "Front Camera", value: "8MP" },
            { label: "Video Recording", value: "1080p@30fps" },
          ],
        },
        body: {
          title: "DESIGN",
          details: [
            { label: "Dimensions", value: "251.2 x 157.98 x 7.05 mm" },
            { label: "Weight", value: "445g" },
            { label: "Build", value: "Aluminum alloy" },
            { label: "Colors", value: "Graphite Grey, Mint Green" },
          ],
        },
      }
    } else if (category === "accessories") {
      const isAppleProduct = product.title?.toLowerCase().includes("mac")
      const isSpeaker = product.title?.toLowerCase().includes("speaker")

      if (isAppleProduct) {
        return {
          ...baseSpecs,
          platform: {
            title: "PERFORMANCE",
            details: [
              { label: "Chip", value: "Apple M4 Max" },
              { label: "CPU", value: "12-core CPU" },
              { label: "GPU", value: "40-core GPU" },
              { label: "Memory", value: "36GB unified memory" },
              { label: "Storage", value: "1TB SSD" },
            ],
          },
          body: {
            title: "DESIGN",
            details: [
              { label: "Height", value: "3.7 inches (9.5 cm)" },
              { label: "Width", value: "7.7 inches (19.7 cm)" },
              { label: "Depth", value: "7.7 inches (19.7 cm)" },
              { label: "Weight", value: "5.9 pounds (2.7 kg)" },
            ],
          },
          network: {
            title: "CONNECTIVITY",
            details: [
              { label: "Thunderbolt 5", value: "4 ports" },
              { label: "USB-A", value: "2 ports" },
              { label: "HDMI", value: "1 port" },
              { label: "Ethernet", value: "10Gb Ethernet" },
              { label: "Wi-Fi", value: "Wi-Fi 6E" },
              { label: "Bluetooth", value: "5.3" },
            ],
          },
        }
      } else if (isSpeaker) {
        return {
          ...baseSpecs,
          sound: {
            title: "AUDIO",
            details: [
              { label: "Speaker Type", value: "Wireless Party Speaker" },
              { label: "Power Output", value: product.title?.includes("TOWER 9") ? "1000W" : "100W" },
              { label: "Frequency Response", value: "20Hz - 20kHz" },
              { label: "Battery Life", value: product.title?.includes("TOWER 9") ? "30 hours" : "12 hours" },
              { label: "Charging Time", value: "3.5 hours" },
            ],
          },
          network: {
            title: "CONNECTIVITY",
            details: [
              { label: "Bluetooth", value: "5.2" },
              { label: "Wi-Fi", value: "Yes" },
              { label: "USB", value: "USB-A, USB-C" },
              { label: "Audio Input", value: "3.5mm AUX, Optical" },
              { label: "Microphone Input", value: "XLR/TRS combo" },
            ],
          },
          body: {
            title: "DESIGN",
            details: [
              { label: "Type", value: product.title?.includes("TOWER") ? "Tower Speaker" : "Portable Speaker" },
              { label: "Water Resistance", value: "IP67" },
              { label: "Weight", value: product.title?.includes("TOWER 9") ? "32kg" : "2.5kg" },
              { label: "Lighting", value: "360° Party Light" },
            ],
          },
          features: {
            title: "FEATURES",
            details: [
              { label: "Party Connect", value: "Connect up to 100 speakers" },
              { label: "Karaoke", value: "Built-in karaoke function" },
              { label: "DJ Effects", value: "Sound effects and samples" },
              { label: "App Control", value: "Sony Music Center app" },
              { label: "Voice Assistant", value: "Google Assistant compatible" },
            ],
          },
        }
      }
    }

    // Default specifications for other categories
    return {
      ...baseSpecs,
      features: {
        title: "FEATURES",
        details: specificationData?.aboutThisItem?.map((item, index) => ({
          label: `Feature ${index + 1}`,
          value: item,
        })) || [
          { label: "Quality", value: "Premium build quality" },
          { label: "Compatibility", value: "Wide device compatibility" },
          { label: "Design", value: "Modern and sleek design" },
        ],
      },
    }
  }

  const specifications = generateSpecifications(productData)

  // Video functionality - make it dynamic based on product
  const getVideoId = (product) => {
    if (product?.category === "Smart Watch") {
      return "Lhmycs8vTUM" // Huawei Watch video
    } else if (product?.category === "Tablet") {
      return "dQw4w9WgXcQ" // Default video for tablets
    } else if (product?.title?.toLowerCase().includes("mac")) {
      return "bjOGNVH3D4Y" // Mac Studio video
    } else if (product?.title?.toLowerCase().includes("speaker")) {
      return "2Vv-BfVoq4g" // Sony speaker video
    }
    return "dQw4w9WgXcQ" // Default video
  }

  const videoId = getVideoId(productData)

  const handleVideoClick = () => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank")
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4">
      {/* Disclaimer Section */}
      <div className="space-y-2">
        <p className="text-sm text-gray-600">We can not guarantee that the information on this page is 100% correct.</p>
        <div className="flex items-center space-x-1 text-sm">
          <span className="font-semibold text-gray-800">Source:</span>
          <a
            href="https://gsmarena.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600 transition-colors flex items-center gap-1"
          >
            GSMArena
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">SPECIFICATION</h2>
          <p className="text-sm text-gray-600 mt-1">{productData?.title || "Product Specifications"}</p>
        </div>
        <div className="divide-y divide-gray-200">
          {Object.entries(specifications).map(([key, section]) => (
            <div key={key} className="p-6">
              <button
                onClick={() => toggleSection(key)}
                className="flex items-center justify-between w-full text-left hover:bg-gray-50 -m-2 p-2 rounded transition-colors"
              >
                <h3 className="text-lg font-semibold text-blue-600 uppercase tracking-wide">{section.title}</h3>
                {expandedSections[key] ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {expandedSections[key] && (
                <div className="mt-4 space-y-3">
                  {section.details.map((detail, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-2 py-1">
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
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wide">REVIEW VIDEO</h2>
        <div className="relative">
          <div
            className="relative rounded-lg overflow-hidden bg-gray-900 group cursor-pointer shadow-lg"
            onClick={handleVideoClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                handleVideoClick()
              }
            }}
            aria-label={`Play ${productData?.title || "Product"} Review Video`}
          >
            {/* Video Thumbnail */}
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={`${productData?.title || "Product"} Review Video`}
              className="w-full h-80 md:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-90 rounded-full p-6 group-hover:bg-opacity-100 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                <Play className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" />
              </div>
            </div>
            {/* Product Category Badge */}
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {productData?.category || "Product"} Review
            </div>
            {/* Caption at bottom */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <p className="text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded">
                {productData?.title || "Product"} - Complete Review
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
    
  )
}

export default Specification
