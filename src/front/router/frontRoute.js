import { Route, Routes } from "react-router-dom";
import Master from "../layout/Master";

const FrontRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Master/>}>

            </Route>
        </Routes>
    )
}

export default FrontRoutes;