const ContactInfo = () => {
  const phoneNumbers = ["023 216 726", "023 216 725", "011 911 166", "078 311 111"]

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      {/* Khmer Text */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: "Khmer, serif" }}>
          សូមស្វាគមន៍
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "Khmer, serif" }}>
          ប្រសិនបើលោកអ្នកមានសំណួរ ឬ ចាំបាច់ជំនួយ ពេលកុំពុងទិញទំនិញ ទាក់ទងមកកាន់លេខទូរស័ព្ទខាងក្រោមនេះ៖
        </p>
      </div>

      {/* Phone Numbers */}
      <div className="space-y-3 mb-8">
        {phoneNumbers.map((phone, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors"
            >
              {phone}
            </a>
          </div>
        ))}
      </div>

      {/* Customer Service Illustration */}
      <div className="flex justify-center">
        <img
          src="https://soklyphone.com/img/customer_service_generated.jpg"
          alt="Customer Service Representatives"
          className="max-w-full h-auto rounded-lg"
        />
      </div>
    </div>
  )
}

export default ContactInfo
