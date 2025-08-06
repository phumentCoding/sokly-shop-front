import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Percent } from "lucide-react";
import Sidebar from "./Sidebar";

const couponData = [
  {
    title: "Welcome to Sokly Website",
    amount: "$5 OFF",
    expiredDate: "2022-08-14",
  },
  {
    title: "Refer Friend Offer",
    amount: "$10 OFF",
    expiredDate: "2024-04-04",
  },
  {
    title: "Refer Friend Offer",
    amount: "$10 OFF",
    expiredDate: "2023-08-10",
  },
  {
    title: "Welcome to Sokly Website",
    amount: "$5 OFF",
    expiredDate: "2022-08-14",
  },
  {
    title: "Refer Friend Offer",
    amount: "$10 OFF",
    expiredDate: "2023-07-02",
  },
  {
    title: "Refer Friend Offer",
    amount: "$10 OFF",
    expiredDate: "2023-11-24",
  },
];

const CouponCard = ({ title, amount, expiredDate }) => (
  <div className="flex bg-gray-300 rounded-lg overflow-hidden w-full max-w-md">
    <div className="bg-gray-400 p-4 flex items-center justify-center rounded-l-lg">
      <div className="bg-white rounded-full p-2">
        <Percent className="w-6 h-6 text-gray-700" />
      </div>
    </div>
    <div className="flex-1 px-4 py-3 flex flex-col justify-center">
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="text-sm text-white mt-1">
        Expired on {new Date(expiredDate).toDateString()}
      </p>
    </div>
    <div className="flex items-center px-4 text-right">
      <p className="text-white font-bold">{amount}</p>
    </div>
  </div>
);

const MyCoupon = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("available");

  const user = {
    name: "Chanthrony Yang",
    email: "tonyja2460@gmail.com",
    profileUrl:
      "https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-1/456268015_1066171398355955_6754295906527611875_n.jpg?...",
  };

  const today = new Date();
  const availableCoupons = couponData.filter(
    (coupon) => new Date(coupon.expiredDate) >= today
  );
  const pastCoupons = couponData.filter(
    (coupon) => new Date(coupon.expiredDate) < today
  );

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row p-4 gap-6">
      

      {/* Coupon Content */}
      <div className="flex-1">
        <h1 className="text-2xl font-semibold text-blue-900 mb-4">
          My Coupon
        </h1>

        <div className="flex border-b border-gray-200 mb-4">
          <button
            onClick={() => setActiveTab("available")}
            className={`px-6 py-3 text-sm font-semibold rounded-t-md focus:outline-none ${
              activeTab === "available"
                ? "bg-blue-900 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Available Coupon
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`px-6 py-3 text-sm font-semibold rounded-t-md focus:outline-none ${
              activeTab === "past"
                ? "bg-blue-900 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Past Coupon
          </button>
        </div>

        <div className="border border-gray-200 rounded-md p-6 bg-white">
          {activeTab === "available" ? (
            availableCoupons.length === 0 ? (
              <p className="text-gray-500">No available coupons</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {availableCoupons.map((coupon, index) => (
                  <CouponCard
                    key={index}
                    title={coupon.title}
                    amount={coupon.amount}
                    expiredDate={coupon.expiredDate}
                  />
                ))}
              </div>
            )
          ) : pastCoupons.length === 0 ? (
            <p className="text-gray-500">No past coupons</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pastCoupons.map((coupon, index) => (
                <CouponCard
                  key={index}
                  title={coupon.title}
                  amount={coupon.amount}
                  expiredDate={coupon.expiredDate}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCoupon;
