import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center space-x-4 text-sm text-gray-600">
          <span className="text-gray-400">Home</span>
          <span className="text-gray-400">•</span>
          <span>Contact Us</span>
        </div>
      </nav>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Content */}
        <div>
          <h1 className="text-2xl font-bold text-blue-900 mb-6">Contact Us</h1>
          <div className="mb-6 space-y-2 text-xl text-gray-800 leading-relaxed">
            <p className="font-khmer text-2xl font-semibold">សូមទំនាក់ទំនង</p>
            <p className="font-khmer">
              បើមានសំណួរឬការស្នើសុំ បួងសូមប្រើសំណុំបែបបទនេះ
              យើងនឹងទាក់ទងមកវិញនៅពេលឆាប់ៗនេះ។
            </p>
            <p>023 216 726</p>
            <p>023 216 725</p>
            <p>011 911 166</p>
            <p>078 311 111</p>
          </div>
          <img
            src="https://soklyphone.com/img/customer_service_generated.jpg"
            alt="Contact Illustration"
            className="w-64 mt-4"
          />
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-6 rounded-md shadow-md">
          <h2 className="text-blue-800 text-md font-semibold mb-4">
            if you have any questions or inquiries, feel free to use this form and we will get back to you as soon as possible
          </h2>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded" />
            <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded" />
            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border rounded" />
            <input type="text" placeholder="Subject" className="w-full px-4 py-2 border rounded" />
            <textarea placeholder="Message" className="w-full px-4 py-2 border rounded h-32"></textarea>
            <button type="submit" className="bg-blue-800 text-white py-2 px-6 rounded hover:bg-blue-700">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
