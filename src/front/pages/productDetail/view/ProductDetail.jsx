"use client"
import { useState, useEffect } from "react"
import { useLocation, useParams, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Slide from "../components/Slide"
import PreOrder from "../components/PreOrder"
import Specification from "../components/Specification" // Fixed import name
import SidebarDetail from "../../../reusable/SidebarDetail"

const ProductDetail = () => {
  const location = useLocation()
  const { slug } = useParams()
  const navigate = useNavigate()
  const [productData, setProductData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [productNotFound, setProductNotFound] = useState(false)

  const navItems = ["Home", "Products", "Accessories", "Smart Watch"]

  // Updated allProducts array to include special offers with consistent structure
  const allProducts = [
    // New Arrivals
    {
      id: 1,
      name: "Mac Studio M4 Max",
      image: "https://www.soklyphone.com/storage/Apple/Mac-Studio/Mac-Studio-M4-Max/1-1744453470xJ8bO.png",
      price: 3159.0,
      monthlyPrice: 71.0,
      category: "Accessories",
      isNew: true,
      warranty: 1,
    },
    {
      id: 2,
      name: "(Pre-Order) Sony ULT TOWER 9 Wireless Party Speaker",
      image:
        "https://www.soklyphone.com/storage/SONY/Accessories/ULT-TOWER-9-Wireless-Party-Speaker/1-175118218851HsC.png",
      price: 779.0,
      monthlyPrice: 25.0,
      category: "Accessories",
      isNew: true,
      warranty: 1,
    },
    {
      id: 3,
      name: "(Pre-Order) Sony ULT FIELD 5 Portable Bluetooth Speaker",
      image:
        "https://www.soklyphone.com/storage/SONY/Accessories/ULT-FIELD-5-Portable-Bluetooth-Speaker/black-175118048507e04.png",
      price: 279.0,
      monthlyPrice: 25.0,
      category: "Accessories",
      isNew: true,
      warranty: 1,
    },
    {
      id: 4,
      name: "(Pre-Order) Sony ULT FIELD 3 Portable Bluetooth Speaker",
      image:
        "https://www.soklyphone.com/storage/SONY/Accessories/ULT-FIELD-3-Portable-Bluetooth-Speaker/forest-gray-1751179619kAVQu.png",
      price: 179.0,
      monthlyPrice: 16.0,
      category: "Accessories",
      isNew: true,
      warranty: 1,
    },
    {
      id: 5,
      name: "Xiaomi Redmi Pad 2 4G",
      image: "https://www.soklyphone.com/storage/Xiaomi/Xiaomi-Redmi-Pad-2/graphite-grey-1750756398BjDZZ.png",
      price: 199.0,
      monthlyPrice: 18.0,
      category: "Tablet",
      isNew: true,
      warranty: 1,
    },
    {
      id: 6,
      name: "Xiaomi Redmi Pad 2",
      image: "https://www.soklyphone.com/storage/Xiaomi/Xiaomi-Redmi-Pad-2/mint-green-1750756400VTAYO.png",
      price: 169.0,
      monthlyPrice: 15.0,
      category: "Tablet",
      isNew: true,
      warranty: 1,
    },
    {
      id: 7,
      name: "Huawei Watch 5 42mm",
      image:
        "https://www.soklyphone.com/storage/Huawei/HUAWEI-Watch/Huawei-Watch-5/42mm/stainless-beige-1-1750741016HSr24.png",
      price: 499.0,
      monthlyPrice: 45.0,
      category: "Smart Watch",
      isNew: true,
      warranty: 1,
    },
    {
      id: 8,
      name: "Huawei Watch 5 46mm",
      image: "https://www.soklyphone.com/storage/Huawei/HUAWEI-Watch/Huawei-Watch-5/black-1-1751362418cBcjK.png",
      price: 399.0,
      monthlyPrice: 36.0,
      category: "Smart Watch",
      isNew: true,
      warranty: 1,
    },
    // Smart Watches
    {
      id: 9,
      name: "COROS PACE Pro GPS Sport Watch Suguru...",
      image:
        "https://www.soklyphone.com/storage/COROS/coros-pace-pro-gps-sport-watch-suguru-osako-edition/1-1750393348C5Sw4.png",
      price: 439.0,
      monthlyPrice: 39.0,
      isNew: true,
      warranty: 1,
      category: "Smart Watch",
      brand: "COROS",
    },
    {
      id: 10,
      name: "Huawei Watch Fit 3",
      image: "https://www.soklyphone.com/storage/Huawei/HUAWEI-Watch/Huawei-Watch-Fit-3/green-1-1739170481iECyG.png",
      price: 99.0,
      monthlyPrice: null,
      isNew: true,
      warranty: 1,
      category: "Smart Watch",
      brand: "Huawei",
    },
    {
      id: 11,
      name: "Garmin Instinct 3 50mm AMOLED",
      image: "https://www.soklyphone.com/storage/GARMIN/Garmin-instinct-3-50-mm-amoled/1-1739178210XscEM.png",
      price: 560.0,
      monthlyPrice: 50.0,
      isNew: true,
      warranty: 1,
      category: "Smart Watch",
      brand: "Garmin",
    },
    {
      id: 12,
      name: "HUAWEI Band 10",
      image: "https://www.soklyphone.com/storage/Huawei/HUAWEI-Watch/HUAWEI-Band-10/pink-1-1742367178B74dr.png",
      price: 39.0,
      monthlyPrice: null,
      isNew: true,
      warranty: 1,
      category: "Smart Watch",
      brand: "Huawei",
    },
    // Accessories
    {
      id: 13,
      name: "70W USB-C Power Adapter",
      image:
        "https://www.soklyphone.com/storage/Accessories/Apple/Adapter/70-w-usb-c-power-adapter/1-1745828700YvT3F.png",
      price: 99.0,
      monthlyPrice: null,
      isNew: true,
      warranty: 1,
      category: "Accessories",
    },
    {
      id: 14,
      name: "35W Dual USB-C Port Power Adapter",
      image:
        "https://www.soklyphone.com/storage/Accessories/Apple/Adapter/35w-dual-usb-c-port-power-adapter/1-1746525049UeET4.png",
      price: 69.0,
      monthlyPrice: null,
      isNew: true,
      warranty: 1,
      category: "Accessories",
    },
    {
      id: 15,
      name: "OPPO Enco Buds3 Pro True Wireless Earbuds",
      image:
        "https://www.soklyphone.com/storage/Accessories/Oppo/oppo-enco-buds-3-pro-true-wireless-earbuds/white-1-1743498657L316X.jpg",
      price: 24.9,
      monthlyPrice: null,
      isNew: true,
      warranty: 1,
      category: "Accessories",
    },
    // Special Offers - Updated to match SpecialOffer component
    {
      id: 16,
      name: "Garmin Forerunner 165 43mm Amoled...",
      image: "https://www.soklyphone.com/storage/GARMIN/garmin-forerunner-165-43-mm/1-1743671860fftXF.png",
      price: 199.0,
      originalPrice: 280.0,
      discount: 81,
      monthlyPrice: 18.0,
      warranty: 1,
      isNew: true,
      category: "Smart Watch",
      isSpecialOffer: true,
    },
    {
      id: 17,
      name: 'MacBook Air 13" M4 2025 8C',
      image: "https://www.soklyphone.com/storage/Apple/Macbook/Macbook-Air-M4-2025/starlight-1743661331G24Ay.png",
      price: 1099.0,
      originalPrice: 1149.0,
      discount: 50,
      monthlyPrice: 98.0,
      warranty: 1,
      isNew: true,
      category: "Laptop",
      isSpecialOffer: true,
    },
    {
      id: 18,
      name: 'MacBook Air 13" M4 2025 10C',
      image: "https://www.soklyphone.com/storage/Apple/Macbook/Macbook-Air-M3/Profile/silver-1712660368IiEmg.png",
      price: 1299.0,
      originalPrice: 1379.0,
      discount: 80,
      monthlyPrice: 116.0,
      warranty: 1,
      isNew: true,
      category: "Laptop",
      isSpecialOffer: true,
    },
    {
      id: 19,
      name: 'MacBook Air 15" M4 2025 10C',
      image: "https://www.soklyphone.com/storage/Apple/Macbook/Macbook-Air-M4-2025/midnight-1743661328rbwaV.png",
      price: 1299.0,
      originalPrice: 1379.0,
      discount: 80,
      monthlyPrice: 116.0,
      warranty: 1,
      isNew: true,
      category: "Laptop",
      isSpecialOffer: true,
    },
    {
      id: 20,
      name: "Sony WF-C510 Truly Wireless Headphones",
      image:
        "https://www.soklyphone.com/storage/Accessories/SONY/Sony-WF-C510-truly-wireless-earbuds/blue-3-17305382889Tt2f.jpg",
      price: 59.0,
      originalPrice: 69.0,
      discount: 10,
      monthlyPrice: null,
      warranty: 1,
      isNew: true,
      category: "Accessories",
      isSpecialOffer: true,
    },
    {
      id: 21,
      name: 'MacBook Air 15" M4 2025 10C Sky Blue',
      image: "https://www.soklyphone.com/storage/Apple/Macbook/Macbook-Air-M4-2025/sky-blue-1743661330mbBBn.png",
      price: 1749.0,
      originalPrice: 1839.0,
      discount: 90,
      monthlyPrice: 156.0,
      warranty: 1,
      isNew: true,
      category: "Laptop",
      isSpecialOffer: true,
    },
  ]

  // Function to create URL-friendly slug from product name
  const createSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special characters except hyphens
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/--+/g, "-") // Replace multiple hyphens with single hyphen
      .trim()
  }

  // Function to find product by slug
  const findProductBySlug = (targetSlug) => {
    return allProducts.find((product) => {
      const productSlug = createSlug(product.name)
      return productSlug === targetSlug
    })
  }

  // Default product data structure
  const defaultProductData = {
    title: "Huawei Watch 5 46mm",
    price: 399.0,
    monthlyPrice: 36.0,
    category: "Smart Watch",
    brand: "Huawei",
    tags: ["Huawei", "Smart Watch", "Mobile Phone", "Accessories"],
    images: ["https://www.soklyphone.com/storage/Huawei/HUAWEI-Watch/Huawei-Watch-5/black-1-1751362418cBcjK.png"],
    colors: [
      {
        name: "Black",
        color: "#000000",
        selected: true,
        images: [
          "https://www.soklyphone.com/storage/Huawei/HUAWEI-Watch/Huawei-Watch-5/black-1-1751362418cBcjK.png",
          "https://www.soklyphone.com/storage/Huawei/HUAWEI-Watch/Huawei-Watch-5/black-2-1751362419IPFo6.png",
          "https://www.soklyphone.com/storage/Huawei/HUAWEI-Watch/Huawei-Watch-5/black-3-1751362420c009l.png",
        ],
      },
      {
        name: "Titanium",
        color: "#C0C0C0",
        images: [
          "https://www.soklyphone.com/storage/Huawei/HUAWEI-Watch/Huawei-Watch-5/titanium-strap-1-1750737202niAeD.png",
          "https://www.soklyphone.com/storage/Huawei/HUAWEI-Watch/Huawei-Watch-5/titanium-strap-2-17507372037fN6T.png",
          "https://www.soklyphone.com/storage/Huawei/HUAWEI-Watch/Huawei-Watch-5/titanium-strap-3-17507372058muaV.png",
        ],
      },
    ],
    specifications: [
      "Advanced health monitoring with heart rate and SpO2 sensors",
      "GPS tracking for outdoor activities",
      "Water resistant up to 50 meters",
      "Long-lasting battery life up to 14 days",
    ],
  }

  useEffect(() => {
    setIsLoading(true)
    setProductNotFound(false)

    // Check if product data was passed via navigation state
    if (location.state?.productData) {
      const passedProduct = location.state.productData
      const transformedData = transformProductData(passedProduct)
      setProductData(transformedData)
      setIsLoading(false)
    } else if (slug) {
      // Try to find product by slug
      const foundProduct = findProductBySlug(slug)
      if (foundProduct) {
        const transformedData = transformProductData(foundProduct)
        setProductData(transformedData)
        setIsLoading(false)
      } else {
        // Product not found
        setProductNotFound(true)
        setIsLoading(false)
      }
    } else {
      // Use default data if no slug and no product data
      setProductData(defaultProductData)
      setIsLoading(false)
    }
  }, [location.state, slug])

  // Function to transform product data
  const transformProductData = (passedProduct) => {
    // Extract brand from product name
    const extractBrand = (name) => {
      const brands = ["Apple", "Mac", "Sony", "Xiaomi", "Huawei", "Samsung", "Google", "Garmin", "COROS", "OPPO"]
      for (const brand of brands) {
        if (name.toLowerCase().includes(brand.toLowerCase())) {
          return brand
        }
      }
      return "Unknown"
    }

    // Create appropriate specifications based on product category
    const createSpecifications = (product) => {
      const baseSpecs = [
        `Category: ${product.category || "N/A"}`,
        `Price: $${product.price}`,
        ...(product.warranty ? [`${product.warranty} Year Warranty`] : []),
      ]

      // Add category-specific specifications
      if (product.category === "Smart Watch") {
        return [
          ...baseSpecs,
          "Advanced health monitoring features",
          "GPS tracking capabilities",
          "Water resistant design",
          "Long battery life",
          "Bluetooth connectivity",
          "Fitness tracking modes",
        ]
      } else if (product.category === "Accessories") {
        if (product.name.toLowerCase().includes("mac")) {
          return [
            ...baseSpecs,
            "Apple M4 Max chip",
            "Professional performance",
            "Multiple connectivity options",
            "Compact desktop design",
          ]
        } else if (product.name.toLowerCase().includes("speaker")) {
          return [
            ...baseSpecs,
            "Wireless connectivity",
            "High-quality audio output",
            "Portable design",
            "Long battery life",
            "Water resistant",
          ]
        } else if (product.name.toLowerCase().includes("adapter") || product.name.toLowerCase().includes("power")) {
          return [
            ...baseSpecs,
            "Fast charging capability",
            "Universal compatibility",
            "Compact and portable design",
            "Safety protection features",
          ]
        } else if (
          product.name.toLowerCase().includes("earbuds") ||
          product.name.toLowerCase().includes("headphones")
        ) {
          return [
            ...baseSpecs,
            "True wireless technology",
            "Active noise cancellation",
            "Long battery life",
            "Touch controls",
            "Water resistant",
          ]
        }
        return [
          ...baseSpecs,
          "High-quality materials and construction",
          "Compatible with multiple devices",
          "Easy to use and install",
        ]
      } else if (product.category === "Tablet") {
        return [
          ...baseSpecs,
          "High-resolution display",
          "Powerful processor",
          "Long battery life",
          "Lightweight and portable design",
          "Multiple connectivity options",
        ]
      } else if (product.category === "Laptop") {
        return [
          ...baseSpecs,
          "High-performance processor",
          "Retina display technology",
          "All-day battery life",
          "Premium build quality",
          "Advanced security features",
          "Multiple ports and connectivity",
        ]
      } else {
        return [...baseSpecs, "Premium quality product", "Latest technology features", "Reliable performance"]
      }
    }

    // Create appropriate colors based on product
    const createColors = (product) => {
      if (product.category === "Smart Watch") {
        return [
          {
            name: "Black",
            color: "#000000",
            selected: true,
            images: [product.image],
          },
          {
            name: "Silver",
            color: "#C0C0C0",
            images: [product.image],
          },
        ]
      } else if (product.category === "Laptop") {
        return [
          {
            name: "Space Gray",
            color: "#5D5D5D",
            selected: true,
            images: [product.image],
          },
          {
            name: "Silver",
            color: "#E8E8E8",
            images: [product.image],
          },
        ]
      } else {
        return [
          {
            name: "Default",
            color: "#000000",
            selected: true,
            images: [product.image],
          },
        ]
      }
    }

    // Transform the product data to match ProductDetail format
    return {
      title: passedProduct.name,
      price: passedProduct.price,
      monthlyPrice: passedProduct.monthlyPrice || 0,
      category: passedProduct.category,
      brand: extractBrand(passedProduct.name),
      tags: [passedProduct.category || "Product", extractBrand(passedProduct.name)].filter(Boolean),
      images: [passedProduct.image],
      colors: createColors(passedProduct),
      specifications: createSpecifications(passedProduct),
      isSpecialOffer: passedProduct.isSpecialOffer || false,
      originalPrice: passedProduct.originalPrice,
      discount: passedProduct.discount,
      warranty: passedProduct.warranty,
      features: passedProduct.features || [],
    }
  }

  const [selectedColor, setSelectedColor] = useState("")

  useEffect(() => {
    if (productData) {
      const defaultColor = productData.colors.find((c) => c.selected)?.name || productData.colors[0].name
      setSelectedColor(defaultColor)
    }
  }, [productData])

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Handle navigation functions
  const handleGoHome = () => {
    navigate("/")
  }

  const handleGoToProducts = () => {
    navigate("/products")
  }

  const handleProductClick = (product) => {
    const productSlug = createSlug(product.name)
    navigate(`/product/${productSlug}`, {
      state: {
        productData: product,
      },
    })
  }

  // Get suggested products (random 4 products from different categories)
  const getSuggestedProducts = () => {
    const shuffled = [...allProducts].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 4)
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product details...</p>
        </div>
      </div>
    )
  }

  // Product not found state
  if (productNotFound) {
    const suggestedProducts = getSuggestedProducts()
    return (
      <div className="max-w-7xl mx-auto min-h-screen">
        <Navbar items={navItems} />
        <div className="flex flex-col items-center justify-center py-16 px-4">
          {/* 404 Error Section */}
          <div className="text-center mb-12">
            <div className="text-9xl font-bold text-gray-300 mb-4">404</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-md">
              Sorry, we couldn't find the product you're looking for. The product may have been removed or the link is
              incorrect.
            </p>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={handleGoHome}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Go Home
              </button>
              <button
                onClick={handleGoToProducts}
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                Browse Products
              </button>
            </div>
          </div>

          {/* Suggested Products */}
          <div className="w-full max-w-6xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {suggestedProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  {/* Product Image Container */}
                  <div className="relative p-6 bg-gray-50">
                    {/* NEW Badge */}
                    {product.isNew && (
                      <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                        NEW
                      </span>
                    )}
                    {/* Special Offer Badge */}
                    {product.isSpecialOffer && (
                      <span className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-yellow-400 text-white text-xs font-bold px-2 py-1 rounded">
                        SALE
                      </span>
                    )}
                    {/* Product Image */}
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-32 h-32 object-cover block mx-auto"
                    />
                  </div>
                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 h-10">{product.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-red-600">${product.price?.toFixed(2)}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{product.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Normal product display
  const selectedColorData = productData.colors.find((c) => c.name === selectedColor)
  const selectedImages = selectedColorData?.images?.length > 0 ? selectedColorData.images : productData.images

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <Navbar items={navItems} />

      {/* Special Offer Banner */}
      {productData.isSpecialOffer && (
        <div className="bg-gradient-to-r from-red-500 to-yellow-400 text-white py-3 px-6 mb-6 rounded-lg">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-bold">Special Offer - Save ${productData.discount}!</span>
          </div>
        </div>
      )}

      <div className="flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-xl shadow-sm p-6 mb-6">
          <div>
            <Slide images={selectedImages} />
          </div>
          <div>
            <PreOrder productData={productData} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex-1 bg-white rounded-xl shadow-sm p-6">
            <Specification
              specificationData={{ aboutThisItem: productData.specifications }}
              productData={productData}
            />
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
