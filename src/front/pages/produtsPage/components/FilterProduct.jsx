import React, { useState } from 'react';



const FilterProduct = ({categories,brands}) => {
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
    setSelectedCategories(["All"]);
  };

  return (
    <div className="space-y-6">
      {/* Categories Section */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-bold text-lg text-gray-800">CATEGORIES</h2>
          <button
            onClick={resetFilters}
            className="text-sm text-blue-600 hover:underline"
          >
            Reset
          </button>
        </div>
        <div className="flex flex-col space-y-2">
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
                  selectedCategories.includes(cat)
                    ? 'text-blue-700 font-semibold'
                    : 'text-gray-700'
                }
              >
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand Section */}
      <div>
        <h2 className="font-bold text-lg text-gray-800 mb-2">BRAND</h2>
        <div className="grid grid-cols-2 gap-3">
          {brands.map((brand) => (
            <button
              key={brand.name}
              className="border rounded-lg p-2 hover:shadow-sm bg-white flex items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-6 object-contain"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterProduct;
