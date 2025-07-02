import { Route, Routes } from "react-router-dom";
import Master from "../layout/Master";

const FrontRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Master/>}>
               <Route
                    index
                    element={
                        <div className="p-8">
                        <h1 className="text-2xl font-bold">Welcome to Sokly Phone Shop</h1>
                        </div>
                    }
                />
            </Route>
        </Routes>
    )
}

export default FrontRoutes;