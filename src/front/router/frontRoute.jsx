import { Route, Routes } from "react-router-dom";
import Master from "../layout/Master";
import HomePage from "../pages/HomePage";
import ProductDetail from "../pages/productDetail/view/ProductDetail";
import Product from "../pages/produtsPage/view/Product";
import AccountManagement from "../pages/account/view/AccountManagent";
import Contact from "../pages/contact";
import News from "../pages/news";
import PreOrder from "../pages/preorder";
import AccountRoutes from "../pages/account/route";

const FrontRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Master />}>
        <Route index element={<HomePage />} />
        <Route path="product/:slug" element={<ProductDetail />} />
        <Route path="product/show/:category" element={<Product />} />
        <Route path="account/*" element={<AccountRoutes />} />
        <Route path="contact" element={<Contact />} />
        <Route path="news" element={<News />} />
        <Route path="preOrder" element={<PreOrder />} />
      </Route>
    </Routes>
  );
};

export default FrontRoutes;
