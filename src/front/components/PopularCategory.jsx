import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Lucide icons
import {
  Smartphone,
  Tablet,
  Watch,
  Laptop,
  Headphones,
  ChevronRight,
} from "lucide-react";

const PopularCategory = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  const categories = [
    {
      id: 1,
      name: "Mobile Phone",
      icon: <Smartphone className="w-6 h-6 text-black" />,
      link: "/mobile-phones",
    },
    {
      id: 2,
      name: "Tablet",
      icon: <Tablet className="w-6 h-6 text-black" />,
      link: "/tablets",
    },
    {
      id: 3,
      name: "Smart Watch",
      icon: <Watch className="w-6 h-6 text-black" />,
      link: "/smart-watches",
    },
    {
      id: 4,
      name: "Laptop",
      icon: <Laptop className="w-6 h-6 text-black" />,
      link: "/laptops",
    },
    {
      id: 5,
      name: "Accessories",
      icon: <Headphones className="w-6 h-6 text-black" />,
      link: "/accessories",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            POPULAR CATEGORIES
          </h2>
        </div>

        {/* Horizontal Manual Scroll on Mobile */}
        <div className="lg:hidden overflow-x-auto">
          <div className="flex gap-4 min-w-max whitespace-nowrap">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="group bg-white min-w-[240px] rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-4">
                  {/* Icon Box */}
                  <div className="p-2 rounded border border-gray-200 flex items-center justify-center">
                    {category.icon}
                  </div>

                  {/* Divider */}
                  <div className="h-8 w-px bg-gray-200"></div>

                  {/* Text */}
                  <div className="flex flex-col">
                    <h3 className="text-sm font-semibold text-gray-800">
                      {category.name}
                    </h3>
                    <a
                      href={category.link}
                      className="text-xs text-gray-500 hover:text-blue-600 flex items-center gap-1"
                    >
                      view more
                      <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid layout on desktop */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center gap-4">
                <div className="p-2 rounded border border-gray-200 flex items-center justify-center">
                  {category.icon}
                </div>
                <div className="h-8 w-px bg-gray-200"></div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-semibold text-gray-800">
                    {category.name}
                  </h3>
                  <a
                    href={category.link}
                    className="text-xs text-gray-500 hover:text-blue-600 flex items-center gap-1"
                  >
                    view more
                    <ChevronRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategory;
