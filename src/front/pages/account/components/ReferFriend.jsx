"use client"

const ReferFriend = () => {
  const handleInviteNow = () => {
    console.log("Inviting friend...")
    // Add your invite logic here
  }

  return (
    <div className="flex-1 p-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-blue-600 mb-8">Refer A Friend</h1>

      <div className="bg-white rounded-lg shadow-sm p-12 text-center max-w-2xl mx-auto">
        {/* Coupon Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 ">Get $10 Coupon</h2>

        {/* Steps */}
        <div className="space-y-8 mb-5">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
              1
            </div>
            <p className="text-lg text-gray-700 text-left">Share invite link to your friend</p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
              2
            </div>
            <p className="text-lg text-gray-700 text-left">Friend sign up, and make purchase</p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
              3
            </div>
            <p className="text-lg text-gray-700 text-left">You will get $10 Coupon</p>
          </div>
        </div>

        {/* Invite Button */}
        <button
          onClick={handleInviteNow}
          className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-3 text-lg font-semibold rounded-md transition-colors"
        >
          INVITE NOW
        </button>
      </div>
    </div>
  )
}

export default ReferFriend
