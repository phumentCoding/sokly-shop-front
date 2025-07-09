import Navbar from "../components/Navbar"
import Slide from "../components/Slide"
import PreOrder from "../components/PreOrder"
import Specification from "../components/Specification"
import SidebarDetail from "../components/SidebarDetail"

const ProductDetail = () => {
  const navItems = ["Home", "Products", "Accessories", "Bluetooth Speaker"]

  const productData = {
    title: "(Pre-Order) Sony ULT TOWER 9 Wireless Party Speaker",
    price: 799.0,
    monthlyPrice: 71.0,
    tags: ["Sony", "Bluetooth Speaker", "Bluetooth Earphones", "Headphone"],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    colors: [{ name: "Black", color: "#000000", selected: true }],
    specifications: [
      "Press the ULT button to experience the powerful sound of ULT1 and ULT2 bass boost modes.",
      "360° party sound carries powerful sound to every corner of the room.",
      "Powerful sound with X-Balanced Speaker Unit.Bring the festival feeling with 360°",
    ],
  }

  // Specification data for the Specification component
  const specificationData = {
    aboutThisItem: [
      "Press the ULT button to experience the powerful sound of ULT1 and ULT2 bass boost modes.",
      "360° party sound carries powerful sound to every corner of the room.",
      "Powerful sound with X-Balanced Speaker Unit.Bring the festival feeling with 360° party light.",
      "The party never stops with up to 25 hours of battery life.",
      "Quick charge: 10 minute charge gives you up to 180 minutes of playtime.",
      "Hear your music exactly as you like it with 10-Band Equalizer.",
      "Perfect karaoke partner.Enhance your video content with TV Sound Booster.",
      "Easy to move with handle and caster.",
      "Add an extra compatible speaker for stereo sound.",
      "Bluetooth® Fast Pair and multipoint connection.",
    ],
    ecoAndEnergy: [
      "Energy efficient design with low power consumption",
      "Eco-friendly materials used in construction",
      "Auto power-off feature to save battery",
    ],
    application: [
      "Perfect for outdoor parties and events",
      "Indoor entertainment system",
      "Karaoke and singing sessions",
      "DJ and music mixing",
    ],
    sound: [
      "Frequency response: 20Hz - 20kHz",
      "Total power output: 180W",
      "X-Balanced Speaker Unit technology",
      "ULT1 and ULT2 bass boost modes",
    ],
    interface: [
      "USB-A port for device charging",
      "3.5mm audio input",
      "Microphone input with volume control",
      "Guitar input",
    ],
    bluetooth: [
      "Bluetooth version 5.2",
      "Fast Pair technology",
      "Multipoint connection support",
      "Operating range: up to 30 feet",
    ],
    sizeAndWeight: [
      "Dimensions: 350 x 350 x 720mm",
      "Weight: 16kg",
      "Portable design with built-in handle",
      "Caster wheels for easy mobility",
    ],
    generalFeatures: [
      "Water resistant design (IPX4)",
      "LED party lights with multiple patterns",
      "Voice control compatibility",
      "Mobile app control support",
    ],
  }

  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <Navbar items={navItems} />

      {/* Main Content */}
      <div className="flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-xl shadow-sm p-6 mb-6">
          {/* Product Images */}
          <div>
            <Slide images={productData.images} />
          </div>

          {/* Product Details */}
          <div>
            <PreOrder productData={productData} />
          </div>
        </div>

        {/* Specifications */}
        <div className="flex gap-6">
          <div className="flex-1 bg-white rounded-xl shadow-sm p-6">
            <Specification specificationData={specificationData} />
          </div>

          <div className="w-full xl:w-80">
            <SidebarDetail />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
