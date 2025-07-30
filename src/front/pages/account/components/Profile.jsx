import React, { useState, useEffect } from "react";
import { User, Mail, Phone, Calendar, Camera } from "lucide-react";

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: "Chanthrony Yang",
    birthday: "29-Jul-2025",
    email: "tonyja2460@gmail.com",
    phone: "",
    address: "",
  });

  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  // Load avatar preview from localStorage on initial render
  useEffect(() => {
    const storedAvatar = localStorage.getItem("profile-avatar");
    if (storedAvatar) {
      setAvatarPreview(storedAvatar);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result;
        setAvatar(file);
        setAvatarPreview(base64);
        localStorage.setItem("profile-avatar", base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = () => {
    console.log("Updated data:", formData);
    console.log("Selected avatar:", avatar);
  };

  const handleRemoveAvatar = () => {
    setAvatar(null);
    setAvatarPreview(null);
    localStorage.removeItem("profile-avatar");
  };

  return (
    <div className="max-w-1xl mx-auto bg-white rounded-lg p-8 shadow">
      <h2 className="text-xl font-semibold text-blue-900 mb-6">Personal Information</h2>

      {/* Avatar Upload */}
      <div className="bg-blue-50 rounded-lg p-6 flex items-center gap-6 mb-8">
        <div className="relative w-16 h-16">
          <img
            src={
              avatarPreview ||
              "https://ui-avatars.com/api/?name=" + encodeURIComponent(formData.fullName)
            }
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover ring-2 ring-blue-500"
          />
          <label
            htmlFor="avatarUpload"
            className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full shadow cursor-pointer"
          >
            <Camera size={16} className="text-blue-600" />
            <input
              type="file"
              id="avatarUpload"
              accept="image/png, image/jpeg"
              onChange={handleAvatarChange}
              className="hidden"
            />
          </label>
        </div>
        <div>
          <p className="text-sm text-gray-500">Upload JPG, PNG image required.</p>
          {avatarPreview && (
            <button
              onClick={handleRemoveAvatar}
              className="text-xs text-red-600 mt-1 underline"
            >
              Remove Image
            </button>
          )}
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <div className="relative">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your full name"
            />
            <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>

        {/* Birthday */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Birthday</label>
          <div className="relative">
            <input
              type="text"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. 01-Jan-1990"
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
            <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <div className="relative">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your phone number"
            />
            <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            rows="3"
            placeholder="Enter your address"
          ></textarea>
        </div>
      </div>

      {/* Update Button */}
      <div className="mt-8 text-center">
        <button
          onClick={handleUpdate}
          className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Profile;
