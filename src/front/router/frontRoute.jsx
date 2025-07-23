import { Route, Routes } from "react-router-dom";
import Master from "../layout/Master";
import HomePage from "../pages/HomePage";
import ProductDetail from "../pages/productDetail/view/ProductDetail";
import Product from "../pages/produtsPage/view/Product";
import AccountManagent from "../pages/account/view/AccountManagent";
import MyOrders from "../pages/account/components/MyOrder";
import Favorite from "../pages/account/components/Favorite";
import Contact from "../pages/contact";
import News from "../pages/news";
import PreOrder from "../pages/preorder";






const FrontRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Master/>}>
               <Route index element={<HomePage/>}/>
               <Route path="/product/:slug" element={<ProductDetail/>}/>
               <Route path="/product/show/:category" element={<Product/>}/>
                <Route path="/account/profile" element={<AccountManagent/>}/>
                <Route path="/contact" element={<Contact />} />
                <Route path="/news" element={<News/>} />
                <Route path="/preOrder" element={<PreOrder />} />

               
                <Route path="/account/my-order" element={<MyOrders/>}/>
                <Route path="/account/favorite" element={<Favorite/>}/>
                {/* Add other routes as needed */}
              
            </Route>
        </Routes>
    )
}

export default FrontRoutes;