import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Master = () => {
    return (
        <>
           <Navbar/>
           <div className="main">
              <Outlet/>
           </div>
        </>
    )
}

export default Master;