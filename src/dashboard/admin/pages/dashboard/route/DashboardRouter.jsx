import { Route, Routes } from 'react-router-dom'
import Dashboard from '../view/Dashboard '

const DashboardRouter = () => {
  return (
    <div>
        <Routes>
            <Route index element={<Dashboard />} />
        </Routes>
    </div>
  )
}

export default DashboardRouter