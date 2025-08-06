import { BrowserRouter, Route, Routes } from "react-router-dom"
import FrontRoutes from "../front/router/frontRoute";
import BackendRoute from "../admin/router/BackendRoute";

const MasterRouter = () => {
    return (
        <BrowserRouter>
           <Routes>
                <Route path="/*" element={<FrontRoutes/>}/>
                <Route path="/admin/*" element={<BackendRoute/>}/>
           </Routes>
        </BrowserRouter>
    )
}

export default MasterRouter;