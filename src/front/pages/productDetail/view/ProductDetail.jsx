import Navbar from "../components/Navbar";
import PreOrder from "../components/PreOrder";
import SidebarDetail from "../components/SidebarDetail";
import Slide from "../components/Slide";
import Specification from "../components/Specification";

const ProductDetail = () => {
  const productImages = [
    {
      id: 1,
      image: "https://www.soklyphone.com/storage/Apple/Macbook/Macbook-Air-M3/Profile/silver-1712660368IiEmg.png",
    },
    {
      id: 2,
      image: "https://www.soklyphone.com/storage/Apple/Macbook/Macbook-Air-M4-2025/silver-1-1748315639YqS1J.png",
    },
    {
      id: 3,
      image: "https://www.soklyphone.com/storage/Apple/Macbook/Macbook-Air-M4-2025/midnight-1-1748315637KxPJP.png",
    },
    {
      id: 4,
      image: "https://www.soklyphone.com/storage/Apple/Macbook/Macbook-Air-M4-2025/midnight-1748315638vnNUi.png",
    },
    {
      id: 5,
      image: "https://www.soklyphone.com/storage/Apple/Macbook/Macbook-Air-M4-2025/starlight-1-1748315642mcmWn.png",
    },
    {
      id: 6,
      image: "https://www.soklyphone.com/storage/Apple/Macbook/Macbook-Air-M4-2025/starlight-1748315643DW9Gd.png",
    },
  ];

  const productItems = {
    title: 'MacBook Air 13" M4 2025 10C',
    categories: [
      { name: "Apple", color: "bg-blue-500" },
      { name: "MacBook Air", color: "bg-blue-500" },
      { name: "MacBook Pro", color: "bg-blue-500" },
      { name: "iMac", color: "bg-blue-500" },
      { name: "iPhone", color: "bg-blue-500" },
      { name: "iPad", color: "bg-blue-500" },
    ],
    price: "$1,299.00",
    oldPrice: "$1,379.00",
    discount: "$80 off",
    monthly: "$116.00/mo.",
    addon: {
      image: "https://www.soklyphone.com/storage/Accessories/Apple/Gift-for-promotion/falcon-bag-1748668341ZMdRU.png",
      title: "Premium Laptop Bag",
    },
    memories: ['16 GB', '24 GB'],
    storages: ['512 GB', '1 TB'],
    colors: [
      { name: 'Midnight', value: 'black' },
      { name: 'Silver', value: 'gray-300' },
      { name: 'Sky Blue', value: 'sky-300' },
      { name: 'Starlight', value: 'stone-300' }
    ],
    cores: [
      '10 CORE CPU / 10 CORE GPU',
    ]
  };

   const specifications = [
    {
      label: "Apple M4 chip with",
      value: "10-core CPU, 10-core GPU, 16-core Neural Engine",
    },
    {
      label: "16GB / 24GB",
      value: "unified memory",
    },
    {
      label: "512GB SSD",
      value: "storage",
    },
    {
      label: "13.6-inch",
      value: "Liquid Retina display with True Tone",
    },
    {
      label: "12MP",
      value: "Center Stage camera",
    },
    {
      label: "",
      value: "MagSafe 3 charging port",
    },
    {
      label: "",
      value: "Two Thunderbolt 4 ports",
    },
    {
      label: "",
      value: "35W Dual USB-C Port Compact Power Adapter",
    },
    {
      label: "",
      value: "Backlit Magic Keyboard with Touch ID - US English",
    },
  ]

  return (
    <div className="min-h-screen mx-auto">
      <Navbar items={["Home", "Product", "Laptop", "MacBook Air"]} />

      {/* Product Image Slider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Slide items={productImages} />
          <PreOrder product={productItems} />
          <Specification items={specifications}/>
          <SidebarDetail/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
