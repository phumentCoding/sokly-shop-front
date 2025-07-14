import React, { useState } from 'react';

const categories = ["All", "iPhone", "iPod"];

const brands = [
  { name: "Apple", logo: "/brands/apple.png" },
  { name: "Samsung", logo: "/brands/samsung.png" },
  { name: "Asus", logo: "/brands/asus.png" },
  { name: "Google", logo: "/brands/google.png" },
  { name: "Honor", logo: "/brands/honor.png" },
  { name: "Huawei", logo: "/brands/huawei.png" },
  { name: "Xiaomi", logo: "/brands/xiaomi.png" },
  { name: "Nokia", logo: "/brands/nokia.png" },
];

const FilterProduct = () => {
  const [selectedCategories, setSelectedCategories] = useState(["All"]);

  const toggleCategory = (cat) => {
    if (cat === "All") {
      setSelectedCategories(["All"]);
    } else {
      setSelectedCategories((prev) =>
        prev.includes(cat)
          ? prev.filter((item) => item !== cat)
          : [...prev.filter((item) => item !== "All"), cat]
      );
    }
  };

  const resetFilters = () => {
    setSelectedCategories([]);
  };

  return (
    <div className="w-72  sm:max-w-7xl mx-52 px-4 sm:px-6 py-4">
      {/* Categories Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">CATEGORIES</h2>
        <button onClick={resetFilters} className="text-sm text-blue-500 hover:underline">
          🔁 Reset
        </button>
      </div>
      <div className="flex flex-col space-y-2 mb-6">
        {categories.map((cat) => (
          <label key={cat} className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => toggleCategory(cat)}
              className="form-checkbox text-blue-600"
            />
            <span
              className={
                selectedCategories.includes(cat) ? 'text-blue-700 font-semibold' : 'text-gray-800'
              }
            >
              {cat}
            </span>
          </label>
        ))}
      </div>

      {/* Brand Section */}
      <h2 className="font-bold text-lg mb-3">BRAND</h2>
      <div className="grid grid-cols-2 gap-3">
        {brands.map((brand) => (
          <button
            key={brand.name}
            className="border rounded-lg p-2 hover:shadow-md bg-gray-50 flex items-center justify-center"
          >
            <img src={brand.logo} alt={brand.name} className="h-6 object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterProduct;
