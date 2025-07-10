import { Route, Routes } from "react-router-dom";
import Master from "../layout/Master";
import HomePage from "../pages/HomePage";
import ProductDetail from "../pages/productDetail/view/ProductDetail";

const FrontRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Master/>}>
               <Route index element={<HomePage/>}/>
               <Route path="/product/:slug" element={<ProductDetail/>}/>
               <Route path="/product/show/:category"/>
            </Route>
        </Routes>
    )
}

export default FrontRoutes;