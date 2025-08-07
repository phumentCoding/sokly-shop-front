import { Route, Routes } from 'react-router-dom'
import ProductList from '../view/ProductList'
const ProductRouter = () => {
  return (
     <Routes>
         <Route path="/" element={<ProductList/>} />
     </Routes>
  )
}

export default ProductRouter