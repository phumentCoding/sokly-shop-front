const ActivityItem = ({ title, time }) => {
  return (
    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  )
}

export default ActivityItem
