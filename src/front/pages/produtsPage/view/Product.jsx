"use client"
import Navbar from "../components/Navbar"
import FilterProduct from "../components/FilterProduct"
import SidebarDetail from "../../../reusable/SidebarDetail"
import ProductShow from "../components/ProductShow"
import { useNavigate } from "react-router-dom"

const Product = () => {
  const products = [
    {
      id: 8,
      name: "Huawei Watch 5 46mm",
      price: 399,
      image: "https://www.soklyphone.com/storage/Huawei/HUAWEI-Watch/Huawei-Watch-5/black-1-1751362418cBcjK.png",
      monthlyPrice: 36.0,
    },
    {
      id: 5,
      name: "Xiaomi Redmi Pad 2 4G",
      price: 199,
      image: "https://www.soklyphone.com/storage/Xiaomi/Xiaomi-Redmi-Pad-2/graphite-grey-1750756398BjDZZ.png",
      monthlyPrice: 18.0,
    },
    {
      id: 17,
      name: 'MacBook Air 13" M4 2025 8C',
      price: 1099,
      image: "https://www.soklyphone.com/storage/Apple/Macbook/Macbook-Air-M4-2025/starlight-1743661331G24Ay.png",
      monthlyPrice: 98.0,
    },
  ]

  const navigate = useNavigate()

  // Function to create URL-friendly slug from product name
  const createSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special characters except hyphens
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/--+/g, "-") // Replace multiple hyphens with single hyphen
      .trim()
  }

  const handleProductClick = (product) => {
    const productSlug = createSlug(product.name)
    navigate(`/product/${productSlug}`)
  }

  const categories = ["All", "iPhone", "Android", "Tablets"]

  const brands = [
    { name: "Apple", logo: "https://www.soklyphone.com/storage/Brand_Logo/new_logo/apple-logo-1660278979YARnJ.jpg" },
    {
      name: "Samsung",
      logo: "https://www.soklyphone.com/storage/Brand_Logo/new_logo/samsung-logo-1660279193xqNqc.jpg",
    },
    { name: "Honor", logo: "https://www.soklyphone.com/storage/Brand_Logo/new_logo/logo-honor-1684557771ISZqr.jpg" },
    { name: "Xiaomi", logo: "https://www.soklyphone.com/storage/Brand_Logo/new_logo/xiaomi-logo-1660279429OwLtj.jpg" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        <Navbar items={["Apple", "Samsung", "Huawei", "Oppo"]} />

        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Mobile Phones</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="w-full lg:w-1/4">
            <FilterProduct categories={categories} brands={brands} />
          </aside>

          <main className="w-full lg:w-2/4">
            <ProductShow items={products} handleProductClick={handleProductClick} />
          </main>

          <aside className="hidden xl:block w-1/4">
            <SidebarDetail />
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Product
