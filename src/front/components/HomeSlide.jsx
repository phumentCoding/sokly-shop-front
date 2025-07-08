import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowRight } from 'lucide-react';
import HomeBrand from './HomeBrand';

const productSlides = [
  {
    title: '🚨 ជូនដំណឹងបន្ទាន់ !! 📣"',
    subtitle: '',
    description:
      'ហាងសុខលី សូមជូនដំណឹងដល់អតិថិជនទាំងអស់ឱ្យបានជ្រាប​ថា​ ហាងសុខលី យេីងខ្ញុំមានផេកផ្លូវការតែមួយគត់គឺផេក Sokly Phone Shop ដែលមានចំនួន Follower 353K✅ដោយសារមានផេក​ FACEBOOK ក្លែងក្លាយមួយចំនួន ដែលបានក្លែងបន្លំដាក់ឈ្មោះផេក sokly Phone Shop ហេីយកំពុងធ្វើការផុសផ្សព្វផ្សាយប្រូម៉ូសិនក្លែងក្លាយយ៉ាងសកម្ម​ ដេីម្បីធ្វេីការឆបោកអតិថិជន​ ក្នុងផេកក្លែងក្លាយរបស់ពួកគេ។ ',
    image: 'https://www.soklyphone.com/storage/Advertises/2025/04-04-2025/face-page-1744167472AoQ7V.jpg',
    button: 'សម្រាប់ព័ត៌មានបន្ថែម​!!',
  },
  {
    title: 'Galaxy Z Fold 7 Galaxy AI"',
    subtitle: '',
    description:
      'The Galaxy Z Fold 7 packs next-gen power in a slim foldable design, featuring a 6.5" outer and 8.2" inner 120Hz AMOLED display for smooth multitasking. With the Snapdragon 8 Elite, and Galaxy AI tools like smart writing and voice-to-text, it’s built for productivity. A 200MP camera captures every detail, while the 4,400​​mAh battery with 25W fast charging keeps you going all day.',
    image: 'https://www.soklyphone.com/storage/Advertises/2025/07-07-2025/galaxy-z-fold7-1751884200Ja2KA.png',
    button: 'PRE-ORDER NOW'
  },
  {
    title: 'Galaxy Z Flip 7 The Fipable Phone that will impress you!',
    subtitle: '',
    description:
      'Galaxy Z Flip 7 Ultra-sleek 6.7” AMOLED 120Hz display fits anywhere. Powered by Snapdragon 8 Gen 2, 8GB RAM, and 512GB storage for smooth performance.​​ Capture stunning photos with 10MP front and dual 12MP rear cameras. 3,700mAh battery with 25W fast charging keeps you powered all day. Style and power combined your perfect everyday companion.',
    image: 'https://www.soklyphone.com/storage/Advertises/2025/07-07-2025/galaxy-z-flip-7png-1751940759HTlxM.png',
    button: 'PRE-ORDER NOW'
  },
  {
    title: 'Macbook Air 13" and 15" M4 Chip',
    subtitle: '',
    description:
      'New MacBook Air M4 : Power, Performance, and Design Combined. MacBook Air M4 is Apple’s latest laptop powered by the high-performance M4 chip (10-core CPU/GPU).It features a vibrant Liquid Retina display with up to 500 nits of brightness.The 12MP FaceTime HD camera includes Center...',
    image: 'https://www.soklyphone.com/storage/Advertises/2025/04-04-2025/macbook-air-m4-1744257378Dhhk2.png',
    button: 'AVAILABLE NOW'
  },
];

const promoSlides = [
  {
    image: 'https://www.soklyphone.com/storage/Advertises/2025/05-05-2025/hmd-skyline-5g-1-1747910745ZWiR7.png',
  },
  {
    image: 'https://www.soklyphone.com/storage/Advertises/2025/05-05-2025/hmd-pulse-pro-1746086509UNGB8.png',
  },
];

const HomeSlide = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="py-7 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 min-h-[360px] sm:min-h-[420px]">
        {/* Product Slider */}
        <div className="flex-grow bg-slate-100 lg:w-1/2 w-full">
          <Slider {...sliderSettings}>
            {productSlides.map((item, index) => (
              <div key={index} className="p-2 sm:p-8 h-full min-h-[360px] sm:min-h-[420px] flex">
                <div className="flex flex-col sm:flex-row items-center w-full h-full">
                  {/* Left */}
                  <div className="w-full sm:w-1/2 flex flex-col justify-center gap-4 text-center sm:text-left">
                    <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-gray-900">{item.title}</h2>
                    {item.subtitle && <h3 className="text-blue-700 font-medium text-lg">{item.subtitle}</h3>}
                    <p className="text-gray-600 text-xs sm:text-sm md:text-[15px] leading-relaxed">{item.description}</p>
                    <button className="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white px-3 py-1.5 rounded font-semibold w-fit mx-auto sm:mx-0 text-xs sm:text-sm md:text-base">
                      {item.button} <ArrowRight size={18} />
                    </button>
                  </div>
                  {/* Right */}
                  <div className="w-full sm:w-1/2 flex justify-center sm:justify-end items-center mt-4 sm:mt-0">
                    <img src={item.image} alt={item.title} className="max-h-[200px] sm:max-h-[320px] object-contain" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Promo Slider (only visible on lg+) */}
        <div className="w-full lg:w-3/12 hidden lg:flex flex-col justify-center h-[420px]">
          <Slider {...sliderSettings}>
            {promoSlides.map((promo, idx) => (
              <div key={idx} className="bg-black flex flex-col justify-center items-center h-full">
                <img
                  src={promo.image}
                  alt={`Promo ${idx + 1}`}
                  className="max-h-[420px] max-w-full object-contain select-none rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Brands */}
      <HomeBrand />

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
            <div className="data-aos-fade-up" data-aos-delay="100">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <p className="text-blue-100">Happy Customers</p>
            </div>
            <div className="data-aos-fade-up" data-aos-delay="200">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p className="text-blue-100">Products Available</p>
            </div>
            <div className="data-aos-fade-up" data-aos-delay="300">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-blue-100">Customer Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSlide;
