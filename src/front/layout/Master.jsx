import { Outlet } from "react-router-dom";

const Master = () => {
    return (
        <>
           <div className="main">
             <Outlet>
                
             </Outlet>
           </div>
        </>
    )
}

export default Master;