"use client"

const SidebarDetail = () => {
  return (
    <div className="bg-white rounded-xl p-6 border-2 border-blue-200 shadow-sm">
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-blue-600 border-b border-blue-100 pb-2">ការកំណត់ប្រាក់ដំបូង</h3>

        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
              ១
            </div>
            <span>ដាក់ប្រាក់ដំបូង</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
              ២
            </div>
            <span>អ្នកស្រុកបានបង់</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
              ៣
            </div>
            <span>ដឹកជញ្ជូនដល់</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
              ៤
            </div>
            <span>ទទួលបានផលិតផលរបស់អ្នក</span>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 space-y-3 text-sm">
          <p className="text-gray-700 leading-relaxed">
            សូមអរគុណសម្រាប់ការជឿទុកចិត្តលើ ហាងរបស់យើង ដែលជាហាងលក់ផលិតផលបច្ចេកវិទ្យា ពិតប្រាកដ។ អរគុណ
          </p>

          <p className="text-xs text-gray-500 bg-gray-50 p-2 rounded">*Cambodian only (Bank Policy)!</p>
        </div>
      </div>
    </div>
  )
}

export default SidebarDetail
