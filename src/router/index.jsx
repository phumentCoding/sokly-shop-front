import { BrowserRouter, Route, Routes } from "react-router-dom"
import FrontRoutes from "../front/router/frontRoute";

const MasterRouter = () => {
    return (
        <BrowserRouter>
           <Routes>
                <Route path="/*" element={<FrontRoutes/>}/>
           </Routes>
        </BrowserRouter>
    )
}

export default MasterRouter;