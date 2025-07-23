import React, { useEffect, useState } from 'react';
import FilterProduct from './produtsPage/components/FilterProduct';
import ProductShow from './produtsPage/components/ProductShow';
import SidebarDetail from '../reusable/SidebarDetail';
import Navbar from './produtsPage/components/Navbar';
import { useNavigate, useParams } from "react-router-dom";

const PreOrder = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const [selectedCategories, setSelectedCategories] = useState(["All"]);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const categories = [
    "All", "Mobile Phone", "Bluetooth Speaker", "Smart Watch", "iPhone", "Wireless Headphone", "Camera"
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
      category: "Smart Watch",
      price: 399,
      image: "https://i.pinimg.com/1200x/de/53/29/de5329d0558c5e97ec64a25f423e035b.jpg",
      monthlyPrice: 36.0,
      status: "Pre-Order",
    },
    {
      id: 5,
      name: "Xiaomi Redmi Pad 2 4G",
      brand: "Xiaomi",
      category: "Tablet",
      price: 199,
      image: "https://i.pinimg.com/1200x/c0/c2/bc/c0c2bc3d29b6d9d957791f809ef87d67.jpg",
      monthlyPrice: 18.0,
      status: "Pre-Order",
    },
    {
      id: 17,
      name: 'MacBook Air 13" M4 2025 8C',
      brand: "Apple",
      category: "Laptop",
      price: 1099,
      image: "https://www.soklyphone.com/storage/Apple/Macbook/Macbook-Air-M4-2025/starlight-1743661331G24Ay.png",
      monthlyPrice: 98.0,
      status: "Pre-Order",
    },
    {
      id: 20,
      name: "iPhone 15 Pro Max",
      brand: "Apple",
      category: "iPhone",
      price: 1299,
      image: "https://i.pinimg.com/736x/b3/e6/ae/b3e6aeaa47709e1e4d23a7b2776b9b12.jpg",
      monthlyPrice: 110.0,
      status: "Pre-Order",
    },
    {
      id: 21,
      name: "Samsung Galaxy Watch 7 Pro",
      brand: "Samsung",
      category: "Smart Watch",
      price: 349,
      image: "https://images.samsung.com/is/image/samsung/assets/global/galaxy-watch7-pro.png",
      monthlyPrice: 32.0,
      status: "Pre-Order",
    },
    {
      id: 22,
      name: "Garmin Forerunner 965",
      brand: "Garmin",
      category: "Smart Watch",
      price: 599,
      image: "https://static.garmincdn.com/en/products/010-02809-00/v/cf-lg.jpg",
      monthlyPrice: 54.0,
      status: "Pre-Order",
    },
    {
      id: 23,
      name: "Sony WH-1000XM5 Wireless Headphones",
      brand: "Sony",
      category: "Wireless Headphone",
      price: 429,
      image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
      monthlyPrice: 38.0,
      status: "Pre-Order",
    },
    {
      id: 24,
      name: "JBL Charge 5 Bluetooth Speaker",
      brand: "JBL",
      category: "Bluetooth Speaker",
      price: 179,
      image: "https://www.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwcca142f4/1_JBL_Charge_5_Hero_Black.png",
      monthlyPrice: 16.0,
      status: "Pre-Order",
    },
    {
      id: 25,
      name: "Canon EOS R50 Mirrorless Camera",
      brand: "Canon",
      category: "Camera",
      price: 899,
      image: "https://www.canon.com.au/-/media/images/canon/products/cameras/eos-r50/eos-r50-black-body-front.ashx",
      monthlyPrice: 82.0,
      status: "Pre-Order",
    },
    {
      id: 26,
      name: "Samsung Galaxy S24 Ultra 5G",
      brand: "Samsung",
      category: "Mobile Phone",
      price: 1399,
      image: "https://images.samsung.com/is/image/samsung/p6pim/levant/2401/gallery/levant-galaxy-s24-ultra-s928-sm-s928bztgmea-thumb-539678450",
      monthlyPrice: 122.0,
      status: "Pre-Order",
    },
  ];

  const brands = [
    {
      name: "Samsung",
      logo: "https://storage.googleapis.com/sokly/Brand_Logo/new_logo/samsung-logo-1660279193xqNqc.jpg",
    },
    {
      name: "Garmin",
      logo: "https://storage.googleapis.com/sokly/Brand_Logo/new_logo/garmin-logo-1660277156CEuCs.jpg",
    },
    {
      name: "Sony",
      logo: "https://storage.googleapis.com/sokly/Brand_Logo/new_logo/sony-logo-1660279321nrl38.jpg",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategories.includes("All") ||
      selectedCategories.some((selected) =>
        selected.toLowerCase() === product.category.toLowerCase()
      );
    const matchBrand = !selectedBrand || product.brand === selectedBrand;
    const isPreOrder = product.status === "Pre-Order";
    return matchCategory && matchBrand && isPreOrder;
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
            ? "Pre-Order"
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

export default PreOrder;
