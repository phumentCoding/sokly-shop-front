import { BrowserRouter, Route, Routes } from "react-router-dom"
import FrontRoutes from "../front/router/frontRoute";
import AdminRouter from "../dashboard/admin/router/AdminRouter";
const MasterRouter = () => {
    return (
        <BrowserRouter>
           <Routes>
                <Route path="/*" element={<FrontRoutes/>}/>
                <Route path="/admin/*" element={<AdminRouter />} />
           </Routes>
        </BrowserRouter>
    )
}

export default MasterRouter;