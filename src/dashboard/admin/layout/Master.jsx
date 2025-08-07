import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Master = () => {
  return (
    <div className="flex min-h-screen bg-[#f8faff]">
      {/* Sidebar */}
      <div className="w-[260px] bg-white border-r border-gray-100">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  )
}

export default Master
