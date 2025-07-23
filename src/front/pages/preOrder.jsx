import React from 'react'
import FilterProduct from './produtsPage/components/FilterProduct';
import ProductShow from './produtsPage/components/ProductShow';
import SidebarDetail from '../reusable/SidebarDetail';
import Navbar from './produtsPage/components/Navbar';
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";





const PreOrder = () => {
   const { category } = useParams();
  const navigate = useNavigate();

  const [selectedCategories, setSelectedCategories] = useState(["All"]);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const categories = [
    "All", "iPhone", "Android", "Tablet", "Laptop", "Smartwatch",
    "Cases & Covers", "Screen Protectors", "Chargers", "Headphones",
    "Keyboards", "Mice", "Monitors", "Speakers", "Used Phones",
    "Used Laptops", "Used Tablets", "Flash Sale", "Bundle Offers",
    "Clearance", "New Arrivals"
  ];

  useEffect(() => {
    if (category) {
      const formatted = category.replace(/-/g, " ");
      const matched = categories.find(
        (cat) => cat.toLowerCase() === formatted.toLowerCase()
      );
      if (matched) {
        setSelectedCategories([matched]);
      }
    }
  }, [category]);

  const products = [
    {
      id: 8,
      name: "Huawei Watch 5 46mm",
      brand: "Huawei",
      category: "Smartwatch",
      price: 399,
      image: "https://i.pinimg.com/1200x/de/53/29/de5329d0558c5e97ec64a25f423e035b.jpg",
      monthlyPrice: 36.0,
    },
    {
      id: 5,
      name: "Xiaomi Redmi Pad 2 4G",
      brand: "Xiaomi",
      category: "Tablet",
      price: 199,
      image: "https://i.pinimg.com/1200x/c0/c2/bc/c0c2bc3d29b6d9d957791f809ef87d67.jpg",
      monthlyPrice: 18.0,
    },
    {
      id: 17,
      name: 'MacBook Air 13" M4 2025 8C',
      brand: "Apple",
      category: "Laptop",
      price: 1099,
      image: "https://www.soklyphone.com/storage/Apple/Macbook/Macbook-Air-M4-2025/starlight-1743661331G24Ay.png",
      monthlyPrice: 98.0,
    },
    {
      id: 20,
      name: "iPhone 15 Pro Max",
      brand: "Apple",
      category: "iPhone",
      price: 1299,
      image: "https://i.pinimg.com/736x/b3/e6/ae/b3e6aeaa47709e1e4d23a7b2776b9b12.jpg",
      monthlyPrice: 110.0,
    },
  ];

  const brands = [
    { name: "Apple", logo: "https://www.soklyphone.com/storage/Brand_Logo/new_logo/apple-logo.jpg" },
    { name: "Samsung", logo: "https://www.soklyphone.com/storage/Brand_Logo/new_logo/samsung-logo.jpg" },
    { name: "Honor", logo: "https://www.soklyphone.com/storage/Brand_Logo/new_logo/logo-honor.jpg" },
    { name: "Xiaomi", logo: "https://www.soklyphone.com/storage/Brand_Logo/new_logo/xiaomi-logo.jpg" },
  ];

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategories.includes("All") ||
      selectedCategories.some((selected) =>
        selected.toLowerCase() === product.category.toLowerCase()
      );
    const matchBrand = !selectedBrand || product.brand === selectedBrand;
    return matchCategory && matchBrand;
  });

  const createSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/--+/g, "-")
      .trim();
  };

  const handleProductClick = (product) => {
    const productSlug = createSlug(product.name);
    navigate(`/product/${productSlug}`, {
      state: { productData: product },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Navbar items={selectedCategories} />
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          {selectedCategories.includes("All")
            ? "All Products"
            : selectedCategories.join(", ")}
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="w-full lg:w-1/4">
            <FilterProduct
              categories={categories}
              brands={brands}
              selectedCategories={selectedCategories}
              selectedBrand={selectedBrand}
              setSelectedCategories={setSelectedCategories}
              setSelectedBrand={setSelectedBrand}
            />
          </aside>

          <main className="w-full lg:w-2/4">
            <ProductShow
              items={filteredProducts}
              handleProductClick={handleProductClick}
            />
          </main>

          <aside className="hidden xl:block w-1/4">
            <SidebarDetail />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PreOrder
